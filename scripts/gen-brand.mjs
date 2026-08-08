/**
 * Brand asset generator: the Open Graph card, the icon set, and the webmanifest.
 *
 * Run manually with `npm run brand` — deliberately NOT wired into prebuild. These
 * outputs are committed, they change roughly never, and the OG card is the single
 * most visible brand surface (every share preview on every platform), so it should
 * change only when someone means it to.
 *
 * Text is converted to vector outlines with opentype.js rather than drawn as SVG
 * <text>. sharp renders SVG through librsvg, which on this platform has no usable
 * fontconfig — an embedded @font-face woff2 is ignored and even `sans-serif`
 * resolves to a serif. Outlines are the only way to get the real brand face.
 *
 * The TTFs in scripts/brand-src are the upstream Google Fonts originals (SIL OFL
 * 1.1, same licence as the woff2 we self-host); they are build-time inputs only
 * and are never served.
 */
import sharp from "sharp";
import opentype from "opentype.js";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUB = path.join(ROOT, "public");
const SRC = path.join(ROOT, "scripts", "brand-src");

const RED = "#C41230";
const RED_TEXT = "#E5424F";
const BLACK = "#0A0A0A";
const W = 1200;
const H = 630;

/** Read the phone straight out of siteData so the card can never drift from the site. */
function businessPhone() {
  const s = fs.readFileSync(path.join(ROOT, "src", "data", "siteData.ts"), "utf8");
  const m = s.match(/phone:\s*"([^"]+)"/);
  if (!m) throw new Error("Could not read BUSINESS.phone from siteData.ts");
  return m[1];
}

const fonts = {
  extrabold: opentype.parse(fs.readFileSync(path.join(SRC, "BarlowCondensed-ExtraBold.ttf")).buffer),
  semibold: opentype.parse(fs.readFileSync(path.join(SRC, "BarlowCondensed-SemiBold.ttf")).buffer),
};

/**
 * Text as SVG <path> outlines, so no font resolution happens at render time.
 *
 * Every glyph is rendered at a FIXED origin (0,0) and moved into place with an
 * SVG transform. That is not stylistic — opentype.js 2.0.0 miscomputes glyph
 * outlines as NaN depending on the coordinates of the previous getPath() call,
 * which silently truncates the path and made librsvg draw the first letter and
 * stop. Calling getPath with identical arguments every time is the one access
 * pattern that is reliably correct here; positioning moves to the transform.
 *
 * Consequence: advances are summed manually. Kerning lookups also re-fetch glyph
 * objects and re-trigger the same bug, and this font's kern table contributes
 * -37 units across the whole headline (well under half a pixel at 76px), so it
 * is deliberately not applied.
 */
function textPath(font, text, x, y, size, fill) {
  const parts = [];
  let cx = 0;
  for (const ch of [...text]) {
    const d = font.getPath(ch, 0, 0, size).toPathData(2);
    if (d) parts.push(`<path d="${d}" transform="translate(${cx.toFixed(2)} 0)"/>`);
    cx += font.getAdvanceWidth(ch, size);
  }
  const all = parts.join("");
  if (/NaN/.test(all)) throw new Error(`NaN in outlines for ${JSON.stringify(text)}`);
  return `<g transform="translate(${x} ${y})" fill="${fill}">${all}</g>`;
}

const textWidth = (font, text, size) =>
  [...text].reduce((w, ch) => w + font.getAdvanceWidth(ch, size), 0);

async function ogCard() {
  const phone = businessPhone();
  const PANEL = 560; // photo panel on the right
  const PANEL_X = W - PANEL;

  const photo = await sharp(path.join(PUB, "images", "spider-lift-tree-removal-jacksonville-nc.webp"))
    .resize({ width: PANEL, height: H, fit: "cover", position: "centre" })
    .toBuffer();

  // Fades the photo's left edge into the flat background so there is no hard seam.
  const fade = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${PANEL}" height="${H}">
       <defs><linearGradient id="g" x1="0" x2="1">
         <stop offset="0" stop-color="${BLACK}" stop-opacity="1"/>
         <stop offset="0.55" stop-color="${BLACK}" stop-opacity="0.35"/>
         <stop offset="1" stop-color="${BLACK}" stop-opacity="0.1"/>
       </linearGradient></defs>
       <rect width="${PANEL}" height="${H}" fill="url(#g)"/>
     </svg>`
  );

  // The mark is the existing red G on white; rounding it into a white tile keeps
  // it legible on the dark card without redrawing the letterform.
  const MARK = 92;
  const markArt = await sharp(path.join(PUB, "apple-touch-icon.png"))
    .resize(MARK, MARK, { fit: "cover" })
    .composite([
      {
        input: Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="${MARK}" height="${MARK}"><rect width="${MARK}" height="${MARK}" rx="14" ry="14" fill="#fff"/></svg>`
        ),
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer();

  const L = 72; // left margin
  const headline = "GODHANS TREE COMPANY";
  const sub = "TREE SERVICE — JACKSONVILLE, NC";

  const overlay = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
       <rect x="0" y="0" width="${W}" height="6" fill="${RED}"/>
       ${textPath(fonts.extrabold, headline, L, 330, 76, "#FFFFFF")}
       ${textPath(fonts.semibold, sub, L, 386, 40, RED_TEXT)}
       <rect x="${L}" y="424" width="64" height="4" fill="${RED}"/>
       ${textPath(fonts.extrabold, phone, L, 512, 58, "#FFFFFF")}
     </svg>`
  );

  const out = path.join(PUB, "og-image-v2.jpg");
  await sharp({ create: { width: W, height: H, channels: 3, background: BLACK } })
    .composite([
      { input: photo, left: PANEL_X, top: 0 },
      { input: fade, left: PANEL_X, top: 0 },
      { input: markArt, left: L, top: 150 },
      { input: overlay, left: 0, top: 0 },
    ])
    .jpeg({ quality: 86, chromaSubsampling: "4:4:4" })
    .toFile(out);

  const meta = await sharp(out).metadata();
  return { out, meta, headlineW: textWidth(fonts.extrabold, headline, 76) };
}

async function icons() {
  const src = path.join(PUB, "apple-touch-icon.png");
  // 180x180 is the largest art we have, so 192 and 512 are upscales. Acceptable
  // for a flat two-colour glyph, but they will be slightly soft — replace them if
  // a vector original ever turns up.
  const sizes = [
    ["favicon-16x16.png", 16],
    ["favicon-32x32.png", 32],
    ["icon-192.png", 192],
    ["icon-512.png", 512],
  ];
  const made = [];
  for (const [name, size] of sizes) {
    const p = path.join(PUB, name);
    await sharp(src).resize(size, size, { kernel: "lanczos3" }).png({ compressionLevel: 9 }).toFile(p);
    made.push({ name, size, kib: (fs.statSync(p).size / 1024).toFixed(1) });
  }
  return made;
}

function manifest() {
  const m = {
    name: "Godhans Tree Company",
    short_name: "Godhans",
    start_url: "/",
    display: "browser",
    background_color: BLACK,
    theme_color: BLACK,
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
  const p = path.join(PUB, "site.webmanifest");
  fs.writeFileSync(p, JSON.stringify(m, null, 2) + "\n");
  return p;
}

const card = await ogCard();
console.log(
  `  og-image-v2.jpg          ${card.meta.width}x${card.meta.height}  ${(fs.statSync(card.out).size / 1024).toFixed(1)} KiB` +
    `   (headline ${card.headlineW.toFixed(0)}px wide)`
);
for (const i of await icons()) console.log(`  ${i.name.padEnd(24)} ${i.size}x${i.size}`.padEnd(48) + `${i.kib.padStart(6)} KiB`);
console.log(`  ${path.basename(manifest())}`);
console.log("\n  favicon.ico left untouched: it already carries this exact mark at 16/32/48 and sharp cannot encode ICO.");
