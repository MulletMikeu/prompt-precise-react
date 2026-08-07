/**
 * Responsive image generator.
 *
 * Produces AVIF + WebP variants at fixed widths for the LCP-critical homepage
 * images, written into public/images/ as `<base>-<width>.<ext>`. Those exact
 * filenames are what Hero.tsx and ServicesSection.tsx list in their srcsets,
 * so the width in the filename IS the width descriptor — never emit a file
 * whose real pixel width differs from its name.
 *
 * Runs from `npm run images`, and automatically via `prebuild` so a fresh
 * clone can `npm run build` without a missing-variant 404. Results are cached
 * in node_modules/.cache keyed on both the source mtime and the encode
 * settings, so repeat builds are free but a quality change still regenerates.
 * `npm run images -- --force` ignores the cache.
 *
 * Sources are deliberately the highest-quality master available for each
 * photo, which is not always the file the site currently ships — e.g. the
 * tree-trimming master is the 1600px JPEG in src/assets, because the webp in
 * public/images is only 900px wide and would upscale on mobile.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "images");
const CACHE = path.join(ROOT, "node_modules", ".cache", "gen-images.json");
const FORCE = process.argv.includes("--force");

// AVIF quality is not on the same scale as WebP: ~50 here is visually
// comparable to WebP ~72 while landing at roughly half the bytes.
const WEBP = { quality: 72, effort: 6 };
const AVIF = { quality: 50, effort: 6 };

/**
 * `widths` is capped at each source's intrinsic width — upscaling only burns
 * bytes. A width larger than the master is dropped rather than clamped, so a
 * `-1280` file is always genuinely 1280px wide.
 *
 * `aspect` pre-crops to the box the image actually renders in. The service
 * grid photos sit in a hard 4/3 `object-cover` frame, so the pixels outside
 * that crop are decoded and thrown away on every visit — cutting them in the
 * encoder is free bytes and makes the width/height attributes exact. The hero
 * is left uncropped: its visible crop shifts with the viewport.
 */
const IMAGES = [
  {
    base: "hero-godhans-tree-removal-jacksonville-nc",
    src: "public/images/hero-godhans-tree-removal-jacksonville-nc.webp",
    widths: [480, 768, 1280, 1920],
  },
  {
    base: "multiple-pine-tree-removal-jacksonville-nc",
    src: "public/images/multiple-pine-tree-removal-jacksonville-nc.webp",
    widths: [480, 768, 1024, 1280],
    aspect: [4, 3],
  },
  {
    base: "stump-grinding-jacksonville-nc-godhans",
    src: "src/assets/stump-grinding-jacksonville-nc-godhans.jpg",
    widths: [480, 768, 1024, 1280],
    aspect: [4, 3],
  },
  {
    base: "tree-trimming-jacksonville-nc-godhans",
    src: "src/assets/tree-trimming-jacksonville-nc-godhans-1600.jpg",
    widths: [480, 768, 1024, 1280],
    aspect: [4, 3],
  },
];

const kib = (bytes) => (bytes / 1024).toFixed(1);

const readCache = () => {
  try {
    return JSON.parse(fs.readFileSync(CACHE, "utf8"));
  } catch {
    return {};
  }
};

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(CACHE), { recursive: true });
  const cache = FORCE ? {} : readCache();
  const nextCache = {};
  const rows = [];
  let built = 0;

  for (const image of IMAGES) {
    const srcPath = path.join(ROOT, image.src);
    if (!fs.existsSync(srcPath)) {
      throw new Error(`Missing source image: ${image.src}`);
    }

    const meta = await sharp(srcPath).metadata();
    const widths = image.widths.filter((w) => w <= meta.width);
    const dropped = image.widths.filter((w) => w > meta.width);
    if (dropped.length) {
      console.log(
        `  note: ${image.base} master is ${meta.width}px — skipping ${dropped.join(", ")}`
      );
    }

    for (const width of widths) {
      // Height is derived from the target aspect so the crop is exact; without
      // an aspect we let sharp preserve the source ratio.
      const height = image.aspect
        ? Math.round((width * image.aspect[1]) / image.aspect[0])
        : null;

      // Built once and hashed wholesale, so any change to the resize config
      // invalidates the cache. Hand-listing the hashed fields silently missed
      // a crop-strategy change during development.
      const resize = {
        width,
        // Centre, not `attention`: sharp's smart crop picks a different region
        // per target size, so variants of the same photo would be framed
        // differently and visibly jump when the browser swapped one in. Centre
        // also matches the CSS `object-cover` default these replaced, so the
        // crop is unchanged from what ships today.
        ...(height ? { height, fit: "cover", position: "centre" } : {}),
        withoutEnlargement: true,
      };

      for (const [ext, opts] of [
        ["avif", AVIF],
        ["webp", WEBP],
      ]) {
        const name = `${image.base}-${width}.${ext}`;
        const outPath = path.join(OUT_DIR, name);
        const key = crypto
          .createHash("sha1")
          .update(
            JSON.stringify({
              src: image.src,
              mtime: fs.statSync(srcPath).mtimeMs,
              resize,
              ext,
              opts,
            })
          )
          .digest("hex");

        if (FORCE || cache[name] !== key || !fs.existsSync(outPath)) {
          await sharp(srcPath).resize(resize).toFormat(ext, opts).toFile(outPath);
          built++;
        }
        nextCache[name] = key;

        const out = await sharp(outPath).metadata();
        rows.push({
          file: name,
          dim: `${out.width}x${out.height}`,
          kib: kib(fs.statSync(outPath).size),
        });
      }
    }
  }

  fs.writeFileSync(CACHE, JSON.stringify(nextCache, null, 2));

  const w = Math.max(...rows.map((r) => r.file.length));
  for (const r of rows) {
    console.log(
      `  ${r.file.padEnd(w)}  ${r.dim.padStart(9)}  ${r.kib.padStart(7)} KiB`
    );
  }
  console.log(
    `\n  ${rows.length} variants (${built} rebuilt), ${kib(
      rows.reduce((n, r) => n + parseFloat(r.kib) * 1024, 0)
    )} KiB total`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
