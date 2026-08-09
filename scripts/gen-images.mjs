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
 * encoder is free bytes and makes the width/height attributes exact.
 *
 * `position` picks which part survives that crop, defaulting to centre. It
 * exists because a centred crop throws away the subject on a few of these:
 * the topped spar sits in the upper third of a portrait frame, and the stump
 * grinder's remote operator stands at the far left of a very wide one.
 *
 * `extract` is an explicit pre-crop rect in SOURCE pixels, applied before the
 * resize, for the cases where the discrete gravities are too coarse — sharp
 * offers top/centre/left and nothing in between.
 */
const IMAGES = [
  {
    // 16:9 rather than the 4:3 default: this one fills the why-us band, and a
    // centred 16:9 window keeps the overhead lift bucket that a taller crop
    // would leave in but a 16:6 band would have cut.
    base: "godhans-crew-skid-steer-jacksonville-nc",
    src: "scripts/image-src/IMG_2034.JPEG",
    widths: [480, 768, 1024, 1280],
    aspect: [16, 9],
  },
  {
    base: "spider-lift-full-extension-over-house-jacksonville-nc",
    src: "scripts/image-src/IMG_2031.JPEG",
    widths: [480, 768, 1024, 1280],
    aspect: [4, 3],
  },
  {
    // Portrait source; the topped spar and its rigging sit in the upper third,
    // so a centred 4:3 crop would land on parked cars and asphalt.
    base: "pine-spar-rigging-tree-removal-jacksonville-nc",
    src: "scripts/image-src/IMG_2150.JPEG",
    widths: [480, 768, 1024, 1280],
    aspect: [4, 3],
    // A plain "top" gravity clipped the red lift out of the lower background;
    // dropping the window 150px keeps the spar, its rigging line AND the lift.
    extract: { left: 0, top: 150, width: 1536, height: 1152 },
  },
  {
    // 2436x1074 after the video-scrubber overlay was cropped off at import.
    // Very wide, with the remote operator at the far left — centre would cut him.
    base: "stump-grinding-operator-jacksonville-nc",
    src: "scripts/image-src/IMG_1730.JPEG",
    widths: [480, 768, 1024, 1280],
    aspect: [4, 3],
    position: "left",
  },
  {
    base: "spider-lift-tight-backyard-jacksonville-nc",
    src: "scripts/image-src/IMG_2205.JPEG",
    widths: [480, 768, 1024, 1280],
    aspect: [4, 3],
  },
  {
    // Source is already exactly 3:4, so this aspect is a no-op guard rather
    // than a crop — it just pins the ratio if the master is ever replaced.
    base: "michael-godbersen-climbing-jacksonville-nc",
    src: "scripts/image-src/IMG_1725.JPEG",
    widths: [480, 768, 1024],
    aspect: [3, 4],
  },
  {
    // Square crop of the same frame for the small CTA thumbnail. Top-anchored:
    // his face is in the upper half of the portrait original.
    base: "michael-godbersen-thumb-jacksonville-nc",
    src: "scripts/image-src/IMG_1725.JPEG",
    widths: [160, 320],
    aspect: [1, 1],
    position: "top",
  },
  {
    base: "oak-limbs-over-roof-before-trimming-jacksonville-nc",
    src: "scripts/image-src/IMG_1224.JPEG",
    widths: [480, 768, 1024],
    aspect: [4, 3],
  },
  {
    base: "limbs-cleared-after-trimming-jacksonville-nc",
    src: "scripts/image-src/IMG_1225.JPEG",
    widths: [480, 768, 1024],
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
        ...(height
          ? { height, fit: "cover", position: image.position ?? "centre" }
          : {}),
        withoutEnlargement: true,
      };

      // Explicit pre-crop, in source pixels, applied before the resize.
      const extract = image.extract ?? null;

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
              extract,
              resize,
              ext,
              opts,
            })
          )
          .digest("hex");

        if (FORCE || cache[name] !== key || !fs.existsSync(outPath)) {
          const pipeline = sharp(srcPath);
          if (extract) pipeline.extract(extract);
          await pipeline.resize(resize).toFormat(ext, opts).toFile(outPath);
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
