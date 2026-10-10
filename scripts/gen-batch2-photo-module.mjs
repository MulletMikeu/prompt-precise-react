/**
 * Writes src/data/batch2Photos.ts — explicit imports, plain object literals.
 *
 * Why generated rather than hand-written: 28 photographs x 3 widths x 3 formats
 * is 252 import paths, and a typo in any one of them is a 404 that only shows
 * up in production.
 *
 * Why explicit imports rather than `import.meta.glob`: an eager glob builds a
 * module-scope object containing EVERY asset URL, and because the lookup table
 * has to be iterated to be useful, nothing in it can be tree-shaken. That put
 * ~560 URL strings into a shared chunk on every page of a site whose
 * performance is already JS-bound. Explicit imports feeding plain object
 * literals let Rollup drop the photographs a given page does not use.
 *
 * Usage: node scripts/gen-batch2-photo-module.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ASSETS = path.resolve(import.meta.dirname, '../src/assets');
const OUT = path.resolve(import.meta.dirname, '../src/data/batch2Photos.ts');

const GALLERY = [400, 640, 800];
const TRACE = [480, 768, 1024];

/** [exported const, master base name, width ladder, section comment] */
const PHOTOS = [
  ['RED_OAK_STUMP', 'red-oak-stump-five-feet-wide-before-grinding-jacksonville-nc', GALLERY, 'The red oak, central Jacksonville — item 1'],
  ['RED_OAK_GRINDING', 'red-oak-stump-grinding-root-chasing-jacksonville-nc', GALLERY, null],
  ['RESISTOGRAPH_TRACE', 'resistograph-trace-water-oak-heartwood-rot-jacksonville-nc', TRACE, 'Resistograph traces — item 2. Wider ladder: these are read, not glanced at'],
  ['RESISTOGRAPH_SCALE', 'resistograph-trace-pen-for-scale-jacksonville-nc', TRACE, null],
  // 600x800 master — see the matching note in gen-hero-images.mjs.
  ['PITCH_TUBES', 'southern-pine-beetle-pitch-tubes-onslow-county-nc', [400, 600], 'Pine health — item 4'],
  ['RICHLANDS_CRACKED_LIMB', 'wind-cracked-pine-limb-over-house-richlands-nc', GALLERY, null],
  ['RICHLANDS_CANOPY_LIMB', 'cracked-pine-limb-canopy-inspection-richlands-nc', GALLERY, null],
  ['SURF_CITY_HOLLOW', 'heartwood-rot-hollow-oak-trunk-surf-city-nc', GALLERY, 'Heartwood rot, Surf City — item 5'],
  ['SURF_CITY_STUMP', 'heartwood-rot-oak-stump-surf-city-nc', GALLERY, null],
  ['BARN_DAMAGE', 'tree-through-barn-roof-beulaville-nc', GALLERY, 'Beulaville barn and canopy breaks — item 6'],
  ['BARN_CRANE', 'crane-set-up-over-damaged-barn-beulaville-nc', GALLERY, null],
  ['BARN_CLIMBER', 'climber-in-fallen-tree-on-barn-beulaville-nc', GALLERY, null],
  ['BARN_LIFT_OUT', 'crane-lifting-tree-section-off-barn-beulaville-nc', GALLERY, null],
  ['BROKEN_LIMB_CANOPY', 'storm-broken-limb-hanging-in-canopy-onslow-county-nc', GALLERY, null],
  ['SPLIT_LIMB_CANOPY', 'split-pine-limb-in-canopy-onslow-county-nc', GALLERY, null],
  ['LIFT_TO_PINE', 'spider-lift-boom-extended-to-pine-onslow-county-nc', GALLERY, 'Equipment — item 9'],
  ['LIFT_ON_LAWN', 'spider-lift-tracked-base-on-lawn-onslow-county-nc', GALLERY, null],
  ['LAWN_UNRUTTED', 'lawn-left-unrutted-after-lift-work-onslow-county-nc', GALLERY, null],
  ['TOWABLE_OVER_SHED', 'towable-lift-working-over-backyard-shed-onslow-county-nc', GALLERY, null],
  ['TOWABLE_BEHIND_FENCE', 'towable-lift-set-up-behind-fence-onslow-county-nc', GALLERY, null],
  ['TOWABLE_OVER_FENCE', 'towable-lift-reaching-over-fence-to-oak-onslow-county-nc', GALLERY, null],
  ['TRACKED_OUTRIGGERS', 'tracked-lift-on-outriggers-beside-house-onslow-county-nc', GALLERY, null],
  ['BOOM_OVER_TARP', 'lift-boom-over-tarped-roof-onslow-county-nc', GALLERY, null],
  ['TARPED_ROOF', 'tarped-roof-under-lift-onslow-county-nc', GALLERY, null],
  ['TALL_PINES_OVER_HOUSES', 'tall-pines-over-houses-onslow-county-nc', GALLERY, 'Removal page, pines and climbers — item 9'],
  ['CLIMBER_ASCENDING', 'climber-ascending-limbed-trunk-onslow-county-nc', GALLERY, null],
  ['CLIMBER_TOPPING_PINE', 'climber-topping-pine-beside-crane-onslow-county-nc', GALLERY, null],
  ['CLIMBER_TOPPED_TREE', 'climber-high-in-topped-tree-onslow-county-nc', GALLERY, null],
];

const camel = (base, w, ext) =>
  base.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase()).replace(/[^A-Za-z0-9]/g, '') +
  w + ext[0].toUpperCase() + ext.slice(1);

const imports = [];
const bodies = [];

for (const [name, base, requested, comment] of PHOTOS) {
  /*
   * Use the widths that are actually on disk, not the ones requested.
   * gen-hero-images caps every ladder at the master's intrinsic width, so a
   * small master silently yields fewer steps — the pitch-tube photograph
   * arrived 600px wide and lost both of GALLERY's upper steps. Reading the
   * directory means that shows up as a narrower srcSet rather than as a
   * build-time crash or, worse, a 404 in production.
   */
  const widths = requested.filter((w) =>
    ['avif', 'webp', 'jpg'].every((ext) => fs.existsSync(path.join(ASSETS, `${base}-${w}.${ext}`)))
  );
  const missing = requested.filter((w) => !widths.includes(w));
  if (missing.length) {
    console.log(`  ${base}: ${missing.join(', ')} not generated (master too narrow) — srcSet will be ${widths.join('/')}`);
  }
  if (widths.length === 0) {
    console.error(`  NO VARIANTS AT ALL for ${base} — run \`npm run hero-images\` first`);
    process.exitCode = 1;
    continue;
  }

  for (const w of widths) {
    for (const ext of ['avif', 'webp', 'jpg']) {
      imports.push(`import ${camel(base, w, ext)} from '@/assets/${base}-${w}.${ext}';`);
    }
  }

  // Intrinsic pixels of the TOP variant, so width/height describe the file the
  // browser is most likely to fetch and the box is reserved before bytes land.
  const top = widths[widths.length - 1];
  const meta = await sharp(path.join(ASSETS, `${base}-${top}.jpg`)).metadata();

  const set = (ext) => widths.map((w) => `\${${camel(base, w, ext)}} ${w}w`).join(', ');
  bodies.push(
    (comment ? `\n/* ${comment}. */\n` : '') +
      `export const ${name}: Photo = {\n` +
      `  src: ${camel(base, top, 'jpg')},\n` +
      `  srcSet: \`${set('webp')}\`,\n` +
      `  avifSrcSet: \`${set('avif')}\`,\n` +
      `  width: ${meta.width},\n` +
      `  height: ${meta.height},\n` +
      `};`
  );
}

const header = `/**
 * The Batch 2 owner photographs (2026-10-10), as hashed asset URLs.
 *
 * GENERATED by scripts/gen-batch2-photo-module.mjs — do not hand-edit. Add a
 * photograph to that script's PHOTOS list and to the BATCH2 ladder in
 * scripts/gen-hero-images.mjs, then re-run both.
 *
 * Imported rather than referenced by path so Vite fingerprints the files, which
 * is what makes vercel.json's immutable year-long image cache safe on them.
 *
 * Each export is a plain object literal over explicit imports, deliberately:
 * an \`import.meta.glob\` lookup table cannot be tree-shaken, so every page
 * would carry the URL of every photograph on the site. This way a page pays
 * only for the pictures it actually shows.
 *
 * \`width\`/\`height\` are the intrinsic pixels of the top variant. In the
 * gallery slot the image is cropped to a fixed box by \`object-cover\`, so these
 * do not set the rendered shape — they stop the page reflowing when the image
 * lands, which is CLS.
 */

export interface Photo {
  /** Largest JPEG — the <img> fallback where WebP is not taken. */
  src: string;
  /** WebP candidates — the \`srcSet\` on the <img>. */
  srcSet: string;
  /** AVIF candidates — offered first, through a <source>. */
  avifSrcSet: string;
  width: number;
  height: number;
}

`;

fs.writeFileSync(OUT, header + imports.join('\n') + '\n' + bodies.join('\n') + '\n', 'utf8');
console.log(`wrote ${path.relative(process.cwd(), OUT)} — ${PHOTOS.length} photos, ${imports.length} imports`);
