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

/**
 * Masters that are NOT heroes: photographs placed inside a section's prose.
 *
 * Same three formats and the same encoder settings — the only thing that
 * differs is the width ladder, and it differs a lot. A hero fills the content
 * column; an in-content figure floats at a few hundred CSS pixels beside the
 * text, so the hero's 1200px top step would be a file no layout ever asks for.
 * Giving these their own `widths` keeps the ladder honest: the largest step is
 * what the widest rendered box needs at DPR 2, and nothing above it exists to
 * be mis-selected.
 */
const FIGURES = [
  {
    // Floats at max 360px CSS from `md` up, and spans the content column
    // (~350px) on a phone — so 720 is the real ceiling at DPR 2 and anything
    // wider would be bytes nobody fetches.
    file: 'loblolly-pine-90ft-38in-behind-home-jacksonville-nc.jpg',
    widths: [360, 540, 720],
    // The master is 1200px — wider than this ladder on purpose, not by
    // accident, so do NOT add it as a top step. See `nativeTop` below.
    nativeTop: false,
  },
];

/**
 * The ServicePage `gallery` slot: a 1/2/3-column grid inside max-w-5xl, with
 * `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`. The
 * widest box it ever paints is a phone at 100vw (~640 CSS px) rather than the
 * desktop third-column (~341 CSS px), so ~640 at DPR 2 is the real ceiling and
 * 800 is the honest top step. A 1200 step here would be bytes no `sizes` can
 * select — the same mistake the hero ladder already documents.
 */
const GALLERY = [400, 640, 800];

/**
 * The Batch 2 owner photographs (2026-10-10). Masters are written by
 * scripts/import-batch2-photos.mjs, which is also where the EXIF/GPS stripping
 * and the phone-UI cropping happen — by the time a file reaches this list it is
 * already a clean, correctly-oriented, ≤1600px JPEG.
 *
 * All take the GALLERY ladder except the two resistograph traces: those are
 * read rather than looked at — the whole point is whether you can see the
 * needle drop into the rot — so they render at content-column width and get a
 * ladder that goes with it.
 */
const TRACE = [480, 768, 1024];
const BATCH2 = [
  ['red-oak-stump-five-feet-wide-before-grinding-jacksonville-nc.jpg', GALLERY],
  ['red-oak-stump-grinding-root-chasing-jacksonville-nc.jpg', GALLERY],
  ['resistograph-trace-water-oak-heartwood-rot-jacksonville-nc.jpg', TRACE],
  ['resistograph-trace-pen-for-scale-jacksonville-nc.jpg', TRACE],
  // The only master in this set that is not a full-resolution camera file:
  // it arrived 600x800, so GALLERY's 640 and 800 steps would both be dropped
  // as upscales and the photo would ship with a single 400px candidate. 600 is
  // its honest ceiling.
  ['southern-pine-beetle-pitch-tubes-onslow-county-nc.jpg', [400, 600]],
  ['wind-cracked-pine-limb-over-house-richlands-nc.jpg', GALLERY],
  ['cracked-pine-limb-canopy-inspection-richlands-nc.jpg', GALLERY],
  ['heartwood-rot-hollow-oak-trunk-surf-city-nc.jpg', GALLERY],
  ['heartwood-rot-oak-stump-surf-city-nc.jpg', GALLERY],
  ['tree-through-barn-roof-beulaville-nc.jpg', GALLERY],
  ['crane-set-up-over-damaged-barn-beulaville-nc.jpg', GALLERY],
  ['climber-in-fallen-tree-on-barn-beulaville-nc.jpg', GALLERY],
  ['crane-lifting-tree-section-off-barn-beulaville-nc.jpg', GALLERY],
  ['storm-broken-limb-hanging-in-canopy-onslow-county-nc.jpg', GALLERY],
  ['split-pine-limb-in-canopy-onslow-county-nc.jpg', GALLERY],
  ['spider-lift-boom-extended-to-pine-onslow-county-nc.jpg', GALLERY],
  ['spider-lift-tracked-base-on-lawn-onslow-county-nc.jpg', GALLERY],
  ['lawn-left-unrutted-after-lift-work-onslow-county-nc.jpg', GALLERY],
  ['towable-lift-working-over-backyard-shed-onslow-county-nc.jpg', GALLERY],
  ['towable-lift-set-up-behind-fence-onslow-county-nc.jpg', GALLERY],
  ['towable-lift-reaching-over-fence-to-oak-onslow-county-nc.jpg', GALLERY],
  ['tracked-lift-on-outriggers-beside-house-onslow-county-nc.jpg', GALLERY],
  ['lift-boom-over-tarped-roof-onslow-county-nc.jpg', GALLERY],
  ['tarped-roof-under-lift-onslow-county-nc.jpg', GALLERY],
  ['tall-pines-over-houses-onslow-county-nc.jpg', GALLERY],
  ['climber-ascending-limbed-trunk-onslow-county-nc.jpg', GALLERY],
  ['climber-topping-pine-beside-crane-onslow-county-nc.jpg', GALLERY],
  ['climber-high-in-topped-tree-onslow-county-nc.jpg', GALLERY],

  // Batch 3 (Ship E) — the Maysville and Hubert city-page jobs.
  ['climber-in-large-pine-maysville-nc.jpg', GALLERY],
  ['pine-removal-roadside-sand-ridge-road-hubert-nc.jpg', GALLERY],
].map(([file, widths]) => ({ file, widths, nativeTop: false }));

/**
 * Every master to process, paired with the width ladder it should get.
 *
 * `nativeTop` controls whether the master's own intrinsic width is appended as
 * a final step. Heroes want that: their ladder tops out at 1200, three of those
 * masters are only 1125px (so 1200 would upscale and the native width is the
 * honest ceiling) while the trimming master is 1600px (so there is real detail
 * above 1200 worth a step). In-content figures want the opposite — their ladder
 * is deliberately far below the master, and appending 1200 would emit three
 * files no `sizes` attribute on the page can ever select.
 */
const MASTERS = [
  ...HEROES.map((file) => ({ file, widths: WIDTHS, nativeTop: true })),
  ...FIGURES,
  ...BATCH2,
];

/** `foo-1600.jpg` and `foo.jpg` both mean the base `foo`. */
const baseName = (file) => file.replace(/\.[a-z0-9]+$/i, '').replace(/-\d+$/, '');

let written = 0;
let skipped = 0;
let bytes = 0;

for (const { file: master, widths: ladder, nativeTop } of MASTERS) {
  const src = path.join(ASSETS, master);
  if (!fs.existsSync(src)) {
    console.error(`  MISSING master: ${master}`);
    process.exitCode = 1;
    continue;
  }
  const base = baseName(master);
  const meta = await sharp(src).metadata();
  // Cap at the master's intrinsic width, then add that width itself as the top
  // step when nothing in `ladder` already reaches it. Three of these masters are
  // 1125px wide, so the pre-existing "-1200" files were upscales — bytes spent
  // inventing detail. The native width is the honest ceiling.
  const capped = ladder.filter((w) => w <= meta.width);
  const widths =
    nativeTop && !capped.includes(meta.width) ? [...capped, meta.width] : capped;
  const dropped = ladder.filter((w) => w > meta.width);

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
