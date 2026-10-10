/**
 * One-shot importer for the Batch 2 owner photographs.
 *
 * Takes the originals out of the owner's Downloads folder and writes normalised
 * masters into src/assets, from which `npm run hero-images` builds the AVIF /
 * WebP / JPEG ladders the pages actually reference.
 *
 * Four things happen here, and all four matter:
 *
 *  1. ORIENTATION IS BAKED IN. `.rotate()` with no argument applies the EXIF
 *     orientation tag to the pixels. Every one of these sources happens to be
 *     orientation 1, but stripping metadata from a rotated source without
 *     baking the rotation first is how a photo ships sideways, so the call
 *     stays regardless.
 *
 *  2. METADATA IS GONE BY CONSTRUCTION. sharp does not copy EXIF/XMP/ICC into
 *     its output unless `withMetadata()` is called, and it is not called. That
 *     is what strips the GPS: 13 of the 46 files in the source folder carry a
 *     GPS IFD, six of them in this import. The masters written here are
 *     re-encoded pixels with no container metadata at all, which is also why
 *     scripts/strip-metadata.mjs is not needed on them — it handles JPEG and
 *     WebP only, and three of these sources are PNG.
 *
 *  3. PHONE-UI CHROME IS CROPPED OFF. IMG_1176/1177/1182 are iPhone screen
 *     recordings, 1170x2532, and all three carry the white home-indicator pill
 *     across the bottom; two of them are letterboxed with dark bars top and
 *     bottom as well. `crop` below is the content box, measured per file by
 *     row-variance rather than guessed.
 *
 *  4. MASTERS ARE CAPPED AT 1600px. The existing masters in src/assets run
 *     1125-1600px at 95-600KB; these sources are 1536-2532px at up to 12.9MB.
 *     Committing the originals would add ~90MB to the repo for detail no
 *     width ladder on the site can ever select.
 *
 * Usage: node scripts/import-batch2-photos.mjs [--force]
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'C:/Users/arcai/Downloads/godhans tree photos';
const BEETLE = 'C:/Users/arcai/Downloads/godhans-pine-beetle-pitch-tubes.jpg';
const ASSETS = path.resolve(import.meta.dirname, '../src/assets');
const FORCE = process.argv.includes('--force');

const MAX_WIDTH = 1600;
const JPEG = { quality: 88, mozjpeg: true, progressive: true };

/** Content box for the three screen recordings, in source pixels. */
const SCREENSHOT = { left: 0, top: 486, width: 1170, height: 1977 };
const SCREENSHOT_FULLBLEED = { left: 0, top: 1, width: 1170, height: 2485 };
/**
 * IMG_2044 is a fourth screenshot with a different geometry again: a dark
 * status bar across rows 0-99 and, unlike the other three, NO home-indicator
 * pill at the bottom — so it keeps its last row. Measured, not assumed.
 */
const SCREENSHOT_2044 = { left: 0, top: 100, width: 1170, height: 2432 };

const PHOTOS = [
  // --- item 1: the $6,500 red oak, central Jacksonville ---
  { from: `${SRC}/IMG_1049.JPEG`, to: 'red-oak-stump-five-feet-wide-before-grinding-jacksonville-nc.jpg' },
  { from: `${SRC}/IMG_1048.JPEG`, to: 'red-oak-stump-grinding-root-chasing-jacksonville-nc.jpg' },

  // --- item 2: the resistograph traces ---
  { from: `${SRC}/IMG_1604.JPEG`, to: 'resistograph-trace-water-oak-heartwood-rot-jacksonville-nc.jpg' },
  { from: `${SRC}/IMG_1605.JPEG`, to: 'resistograph-trace-pen-for-scale-jacksonville-nc.jpg' },

  // --- item 4: beetles, and the Richlands limbs ---
  { from: BEETLE, to: 'southern-pine-beetle-pitch-tubes-onslow-county-nc.jpg' },
  { from: `${SRC}/IMG_1099.JPEG`, to: 'wind-cracked-pine-limb-over-house-richlands-nc.jpg' },
  { from: `${SRC}/IMG_1100.JPEG`, to: 'cracked-pine-limb-canopy-inspection-richlands-nc.jpg' },

  // --- item 5: heartwood rot, Surf City ---
  { from: `${SRC}/IMG_0652.JPEG`, to: 'heartwood-rot-hollow-oak-trunk-surf-city-nc.jpg' },
  { from: `${SRC}/IMG_0653.JPEG`, to: 'heartwood-rot-oak-stump-surf-city-nc.jpg' },

  // --- item 6: Beulaville barn, 2026-10-02 storm, and canopy limb breaks ---
  { from: `${SRC}/IMG_1825.JPEG`, to: 'tree-through-barn-roof-beulaville-nc.jpg' },
  { from: `${SRC}/IMG_0880.JPEG`, to: 'crane-set-up-over-damaged-barn-beulaville-nc.jpg' },
  { from: `${SRC}/IMG_0873.JPEG`, to: 'climber-in-fallen-tree-on-barn-beulaville-nc.jpg' },
  { from: `${SRC}/IMG_0984.JPEG`, to: 'crane-lifting-tree-section-off-barn-beulaville-nc.jpg' },
  { from: `${SRC}/IMG_1528.JPEG`, to: 'storm-broken-limb-hanging-in-canopy-onslow-county-nc.jpg' },
  { from: `${SRC}/IMG_1721.JPEG`, to: 'split-pine-limb-in-canopy-onslow-county-nc.jpg' },

  /*
   * --- item 9: equipment and climbers ---
   *
   * These carry `onslow-county-nc` rather than `jacksonville-nc` on purpose.
   * The owner gave a location for the red oak (central Jacksonville), the
   * resistograph oak (Jacksonville), Richlands, Surf City and Beulaville — and
   * those names are used. For the equipment and climber photographs no
   * location was given, so naming a city would be inventing one. Onslow County
   * is the service area and is the most specific thing actually known.
   *
   * Species is held to the same rule. IMG_1177 is unmistakably a pine with the
   * crane boom over it. IMG_1176 and IMG_1182 are a limbed hardwood trunk and
   * a partly topped broadleaf — so neither filename nor alt text calls them
   * pines, however much the surrounding copy is about pine.
   */
  { from: `${SRC}/567 (1).JPEG`, to: 'spider-lift-boom-extended-to-pine-onslow-county-nc.jpg' },
  { from: `${SRC}/IMG_2264.JPEG`, to: 'spider-lift-tracked-base-on-lawn-onslow-county-nc.jpg' },
  { from: `${SRC}/IMG_20260806_101322904_HDR.JPEG`, to: 'lawn-left-unrutted-after-lift-work-onslow-county-nc.jpg' },

  { from: `${SRC}/IMG_1722 (1).JPEG`, to: 'towable-lift-working-over-backyard-shed-onslow-county-nc.jpg' },
  { from: `${SRC}/IMG_1727.JPEG`, to: 'towable-lift-set-up-behind-fence-onslow-county-nc.jpg' },
  { from: `${SRC}/IMG_1733.JPEG`, to: 'towable-lift-reaching-over-fence-to-oak-onslow-county-nc.jpg' },
  { from: `${SRC}/IMG_2204.JPEG`, to: 'tracked-lift-on-outriggers-beside-house-onslow-county-nc.jpg' },
  { from: `${SRC}/IMG_2208 (1).JPEG`, to: 'lift-boom-over-tarped-roof-onslow-county-nc.jpg' },
  { from: `${SRC}/IMG_2209.JPEG`, to: 'tarped-roof-under-lift-onslow-county-nc.jpg' },

  { from: `${SRC}/IMG_0988.JPEG`, to: 'tall-pines-over-houses-onslow-county-nc.jpg' },
  { from: `${SRC}/IMG_1176.PNG`, to: 'climber-ascending-limbed-trunk-onslow-county-nc.jpg', crop: SCREENSHOT },
  { from: `${SRC}/IMG_1177.PNG`, to: 'climber-topping-pine-beside-crane-onslow-county-nc.jpg', crop: SCREENSHOT_FULLBLEED },
  { from: `${SRC}/IMG_1182.PNG`, to: 'climber-high-in-topped-tree-onslow-county-nc.jpg', crop: SCREENSHOT },

  /*
   * --- Batch 3 (Ship E): the two city-page jobs that needed new photographs ---
   *
   * The other three city jobs reuse masters already imported above: Holly Ridge
   * takes the two spider-lift frames, Beulaville the barn sequence, and Surf
   * City the heartwood-rot pair. Only Maysville and Hubert needed new files.
   *
   * These two DO carry their town in the filename, because for these the owner
   * stated the location — which is the same rule the Batch 2 names follow, not
   * an exception to it.
   */
  { from: `${SRC}/IMG_2044.PNG`, to: 'climber-in-large-pine-maysville-nc.jpg', crop: SCREENSHOT_2044 },
  { from: `${SRC}/IMG_2480.JPEG`, to: 'pine-removal-roadside-sand-ridge-road-hubert-nc.jpg' },
];

let written = 0;
let skipped = 0;
let bytes = 0;

for (const { from, to, crop } of PHOTOS) {
  if (!fs.existsSync(from)) {
    console.error(`  MISSING source: ${from}`);
    process.exitCode = 1;
    continue;
  }
  const out = path.join(ASSETS, to);
  if (fs.existsSync(out) && !FORCE) { skipped++; continue; }

  let pipeline = sharp(from).rotate();
  if (crop) pipeline = pipeline.extract(crop);
  await pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true }).jpeg(JPEG).toFile(out);

  const meta = await sharp(out).metadata();
  const size = fs.statSync(out).size;
  bytes += size;
  written++;
  console.log(`  ${to.padEnd(68)} ${String(meta.width).padStart(4)}x${String(meta.height).padEnd(4)} ${(size / 1024).toFixed(0).padStart(4)} KB`);
}

console.log(`\n${written} written, ${skipped} already present (use --force), ${(bytes / 1024 / 1024).toFixed(1)} MB of masters`);
