/**
 * Losslessly remove metadata containers from JPEG and WebP files.
 *
 * Container surgery only — the compressed image data is copied through byte for
 * byte, so this is NOT a re-encode and cannot change a single pixel or make a
 * file larger. Run it on anything going into public/images/ that came from a
 * phone, an editor, or any tool that signs its output.
 *
 * JPEG: drops APP1 (Exif/XMP), APP2 (ICC), APP11 (JUMBF/C2PA) and COM segments,
 *       keeping APP0 (JFIF) because some decoders expect it.
 * WebP: rebuilds the RIFF container without EXIF, XMP and C2PA chunks.
 *
 * Usage: node scripts/strip-metadata.mjs <file|dir> [...]
 */
import fs from 'node:fs';
import path from 'node:path';

/** JPEG markers worth removing. APP0 (0xE0) is deliberately kept. */
const JPEG_DROP = new Set([0xe1, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea, 0xeb, 0xec, 0xed, 0xee, 0xef, 0xfe]);
const WEBP_DROP = new Set(['EXIF', 'XMP ', 'C2PA']);

function stripJpeg(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  const out = [buf.subarray(0, 2)];
  let off = 2;
  const removed = [];
  while (off + 4 <= buf.length && buf[off] === 0xff) {
    const marker = buf[off + 1];
    if (marker === 0xda) break;                    // start of scan: copy the rest verbatim
    const len = buf.readUInt16BE(off + 2);
    const seg = buf.subarray(off, off + 2 + len);
    if (JPEG_DROP.has(marker)) removed.push(`APP${marker - 0xe0}(${len})`);
    else out.push(seg);
    off += 2 + len;
  }
  out.push(buf.subarray(off));                     // scan data + EOI, untouched
  return { buf: Buffer.concat(out), removed };
}

function stripWebp(buf) {
  if (buf.subarray(0, 4).toString('latin1') !== 'RIFF' || buf.subarray(8, 12).toString('latin1') !== 'WEBP') return null;
  const kept = [];
  const removed = [];
  let off = 12;
  while (off + 8 <= buf.length) {
    const cc = buf.subarray(off, off + 4).toString('latin1');
    const size = buf.readUInt32LE(off + 4);
    const total = 8 + size + (size % 2);           // chunks are padded to even length
    if (WEBP_DROP.has(cc)) removed.push(`${cc}(${size})`);
    else kept.push(buf.subarray(off, off + total));
    off += total;
  }
  if (!removed.length) return { buf, removed };
  const body = Buffer.concat(kept);
  const head = Buffer.alloc(12);
  head.write('RIFF', 0, 'latin1');
  head.writeUInt32LE(4 + body.length, 4);          // size counts 'WEBP' + chunks
  head.write('WEBP', 8, 'latin1');
  return { buf: Buffer.concat([head, body]), removed };
}

const targets = [];
for (const arg of process.argv.slice(2)) {
  const st = fs.statSync(arg);
  if (st.isDirectory()) {
    for (const f of fs.readdirSync(arg)) {
      if (/\.(jpe?g|webp)$/i.test(f)) targets.push(path.join(arg, f));
    }
  } else targets.push(arg);
}
if (!targets.length) {
  console.error('usage: node scripts/strip-metadata.mjs <file|dir> [...]');
  process.exit(1);
}

let changed = 0;
for (const file of targets.sort()) {
  const before = fs.readFileSync(file);
  const isJpeg = /\.jpe?g$/i.test(file);
  const res = isJpeg ? stripJpeg(before) : stripWebp(before);
  if (!res) { console.log(`  SKIP (unrecognised container) ${file}`); continue; }
  if (!res.removed.length) { console.log(`  clean            ${path.basename(file)}`); continue; }
  fs.writeFileSync(file, res.buf);
  changed++;
  const d = before.length - res.buf.length;
  console.log(`  stripped ${res.removed.join(' ').padEnd(14)} ${path.basename(file).padEnd(34)} -${(d / 1024).toFixed(1)} KB`);
}
console.log(`\n${changed} file(s) rewritten, ${targets.length - changed} already clean`);
