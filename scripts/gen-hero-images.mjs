/**
 * Responsive variants for the SERVICE-PAGE HERO images in src/assets.
 *
 * scripts/gen-images.mjs already does this for the homepage, writing AVIF+WebP
 * into public/images. It never covered src/assets, which is where the five
 * ServicePage heroes live — so those shipped as WebP/JPEG only, with no AVIF and
 * (on three of them) no candidate narrower than 600px.
 *
 * That was measurable. Production Lighthouse mobile, median of 5:
 *   /stump-grinding-jacksonville-nc             91, LCP 3174ms
 *   /tree-removal-tight-spaces-jacksonville-nc  91, LCP 3244ms
 *   /tree-removal-jacksonville-nc               96, LCP 2633ms
 * In each case the LCP element was the 1200px hero: a 375px phone at DPR 2 needs
 * ~750px, the next candidate up from 600 is 1200, so it pulled a ~250KB image to
 * paint a 343px-wide box.
 *
 * Output goes back into src/assets so Vite fingerprints it — hashed filenames
 * are what make vercel.json's immutable year-long image cache safe. Files are
 * written next to their master as `<base>-<width>.<ext>`.
 *
 * Widths are capped at each master's intrinsic width: upscaling only burns bytes.
 *
 * Usage: node scripts/gen-hero-images.mjs [--force]
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ASSETS = path.resolve(import.meta.dirname, '../src/assets');
const FORCE = process.argv.includes('--force');

/** Widths the ServicePage hero slot actually renders at across breakpoints. */
const WIDTHS = [480, 800, 1200];

/**
 * Encoder settings. AVIF is given the lowest quality number because it holds up
 * far better than JPEG at the same figure; these were chosen by eye against the
 * existing homepage variants so the two pipelines match.
 */
const AVIF = { quality: 52, effort: 5 };
const WEBP = { quality: 78 };
const JPEG = { quality: 80, mozjpeg: true, progressive: true };

/** Master file per hero, relative to src/assets. */
const HEROES = [
  'stump-grinding-jacksonville-nc-godhans.jpg',
  'tree-removal-jacksonville-nc-godhans.jpg',
  'tree-removal-tight-spaces-jacksonville-nc-godhans.jpg',
  'tree-trimming-jacksonville-nc-godhans-1600.jpg',
  'emergency-tree-removal-jacksonville-nc-crane-cutting-pine.webp',
];

/** `foo-1600.jpg` and `foo.jpg` both mean the base `foo`. */
const baseName = (file) => file.replace(/\.[a-z0-9]+$/i, '').replace(/-\d+$/, '');

let written = 0;
let skipped = 0;
let bytes = 0;

for (const master of HEROES) {
  const src = path.join(ASSETS, master);
  if (!fs.existsSync(src)) {
    console.error(`  MISSING master: ${master}`);
    process.exitCode = 1;
    continue;
  }
  const base = baseName(master);
  const meta = await sharp(src).metadata();
  // Cap at the master's intrinsic width, then add that width itself as the top
  // step when nothing in WIDTHS already reaches it. Three of these masters are
  // 1125px wide, so the pre-existing "-1200" files were upscales — bytes spent
  // inventing detail. The native width is the honest ceiling.
  const capped = WIDTHS.filter((w) => w <= meta.width);
  const widths = capped.includes(meta.width) ? capped : [...capped, meta.width];
  const dropped = WIDTHS.filter((w) => w > meta.width);

  console.log(`\n${base}  (master ${meta.width}x${meta.height})`);
  if (dropped.length) console.log(`  skipping ${dropped.join(', ')} — wider than the master; using ${meta.width} as the top step instead`);

  for (const width of widths) {
    for (const [ext, opts] of [['avif', AVIF], ['webp', WEBP], ['jpg', JPEG]]) {
      const out = path.join(ASSETS, `${base}-${width}.${ext}`);
      if (fs.existsSync(out) && !FORCE) { skipped++; continue; }
      const pipeline = sharp(src).resize({ width, withoutEnlargement: true });
      await (ext === 'avif' ? pipeline.avif(opts)
        : ext === 'webp' ? pipeline.webp(opts)
        : pipeline.jpeg(opts)).toFile(out);
      const kb = fs.statSync(out).size / 1024;
      bytes += fs.statSync(out).size;
      written++;
      console.log(`  ${String(width).padStart(4)}  ${ext.padEnd(4)}  ${kb.toFixed(1).padStart(7)} KB`);
    }
  }
}

console.log(`\n${written} written, ${skipped} already present (use --force to rebuild), ${(bytes / 1024 / 1024).toFixed(2)} MB total`);
