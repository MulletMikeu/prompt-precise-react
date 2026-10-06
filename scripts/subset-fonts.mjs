/**
 * Webfont subsetter: scripts/font-src/*.woff2  ->  public/fonts/*.woff2
 *
 * ── WHY THIS EXISTS ─────────────────────────────────────────────────────────
 *
 * The files in scripts/font-src are Google's own "latin" subset of Barlow and
 * Barlow Condensed: 272 glyphs, 227 cmap entries, ~22 KB each. Seven of them
 * were downloaded per page, which production Lighthouse measured as ~157 KB —
 * 55% of the critical payload on /tree-removal-cost-north-carolina, against a
 * ~15 KB document. The whole score gap on this site lives in FCP and LCP, and
 * this is the largest single thing on that path.
 *
 * Google's "latin" subset is not this site's latin. An audit of the computed
 * (family, weight, style) pair on every text node of all 38 routes, plus every
 * ::before/::after content string, plus every string literal in src/, found
 * 109 codepoints the site can actually render from these faces — see
 * KEEP_CODEPOINTS below. The other ~118 are Icelandic eths, Turkish dotless
 * i's, currency symbols and combining marks that no page contains.
 *
 * ── WHAT IS DELIBERATELY *NOT* DROPPED ──────────────────────────────────────
 *
 * Hinting stays. `--no-hinting --desubroutinize` takes these files a further
 * 23 percentage points down (to ~40% of original rather than ~63%), and it is
 * tempting, but it is NOT byte-neutral on screen: rendering the real specimens
 * in Chrome at 2x DPR, the hinted subsets produce PNGs byte-identical to the
 * originals for all eight specimens, while the unhinted ones differ on all
 * eight (body copy by ~900 bytes of PNG — visibly different antialiasing).
 * Layout is unaffected either way, so this is a pure appearance call, and the
 * brief for this change was speed with no visual change. If that constraint is
 * ever lifted, flip NO_HINTING and re-run — it is the single biggest remaining
 * font win.
 *
 * Layout features stay at pyftsubset's defaults, which keep `kern`/GPOS. Those
 * decide where lines break, and a line that breaks differently is a layout
 * shift — the exact thing the metric-matched fallback faces in src/index.css
 * exist to prevent.
 *
 * ── METRICS ARE PRESERVED, SO THE FALLBACK OVERRIDES STILL HOLD ─────────────
 *
 * src/index.css carries measured size-adjust / ascent-override / descent-override
 * numbers for 'Barlow Fallback' and 'Barlow Condensed Fallback'. Those are
 * ratios of Barlow's metrics to Arial's, so they are only valid while Barlow's
 * side does not move. Subsetting does not move it, and `npm run fonts` proves
 * that rather than assuming it: after writing each face it compares the
 * subset's advance widths, left side bearings, unitsPerEm, hhea ascent/descent,
 * OS/2 typo/win ascenders, cap height, x-height and head bbox against the
 * source, and FAILS the run if any of them changed. A subset that moved a
 * metric would silently reintroduce the CLS this site already fixed once.
 *
 * ── RUNNING IT ──────────────────────────────────────────────────────────────
 *
 *   npm run fonts            # regenerate public/fonts from scripts/font-src
 *   npm run fonts -- --check # verify the committed output matches, write nothing
 *
 * Needs Python with fonttools + brotli:  pip install fonttools brotli
 *
 * This is deliberately NOT in `prebuild`. The outputs are committed, Vercel's
 * build image has no Python toolchain, and the inputs change roughly never —
 * a build-time dependency on a subsetter would be a daily risk taken for an
 * annual benefit. Same arrangement as `npm run brand`.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = path.join(ROOT, "scripts", "font-src");
const OUT_DIR = path.join(ROOT, "public", "fonts");
const CHECK = process.argv.includes("--check");

/** See the note on hinting above before changing this. */
const NO_HINTING = false;

/**
 * The faces to emit, and nothing else. Barlow Condensed 400 is absent on
 * purpose: the audit found zero computed (Barlow Condensed, 400) pairs on any
 * of the 38 routes and the browser never requested the file on any of them. It
 * had been declared in src/index.css since the fonts were self-hosted. Its
 * source stays in scripts/font-src in case a future design wants it back; it
 * just is not built or shipped.
 *
 * Every other weight here is load-bearing, measured rather than assumed:
 *   Barlow 400            4376 text nodes, all 38 routes (body default)
 *   Barlow 500              74 nodes, 14 routes
 *   Barlow 600             605 nodes, 36 routes
 *   Barlow 700            1246 nodes, all 38 routes (113 `font-bold` elements)
 *   Barlow Condensed 600   116 nodes, 24 routes (.text-display-md, FAQ headings)
 *   Barlow Condensed 700   886 nodes, all 38 routes (every h1-h6 default)
 *   Barlow Condensed 800    25 nodes, 2 routes (/ hero + /reviews quote mark)
 *
 * Barlow italic is NOT in this list and no italic file exists: 26 nodes across
 * 24 routes compute to (Barlow, 400, italic) and the browser synthesises an
 * oblique for them. Shipping a real italic face would ADD ~14 KB to fix
 * something nobody has reported, so the synthesis stands.
 */
const FACES = [
  "barlow-400",
  "barlow-500",
  "barlow-600",
  "barlow-700",
  "barlow-condensed-600",
  "barlow-condensed-700",
  "barlow-condensed-800",
];

/**
 * The 109 codepoints to keep, as the intersection of what the site renders
 * with what these faces actually contain.
 *
 * Derived, not guessed, from the union of:
 *   - every character in a text node or ::before/::after content string on all
 *     38 routes, rendered at a 390px viewport so the mobile-only pseudo-element
 *     column labels in .compare are included;
 *   - every character in every string literal under src/, which covers text a
 *     DOM crawl cannot reach — form validation copy, the open mobile menu,
 *     error states;
 *   - all of Basic Latin unconditionally, so a character the site does not
 *     render today but a form or a future sentence might (`<`, `>`, `|`, `^`,
 *     backtick) can never go missing;
 *   - U+00A0 and U+00AD, which are invisible, nearly free, and easy to paste in.
 *
 * MUST keep, and all present: `$`, the en and em dash, both curly single and
 * both curly double quotes, and the digits — those are the price strings and
 * the typographic punctuation the cost pages are written in.
 *
 * Twelve characters the site DOES render are absent from these faces and so
 * are absent here: U+2190 ←, U+2192 →, U+2248 ≈, U+2605 ★, U+26A0 ⚠, U+2713 ✓,
 * U+2714 ✔, U+2705 ✅, U+1F4CD 📍, U+1F4DE 📞 and friends. They already fell
 * back to a system face under Google Fonts and still do — unchanged, not a
 * regression introduced here.
 */
const KEEP_CODEPOINTS = [
  0x0d,
  ...range(0x20, 0x7e), // Basic Latin, all of it
  0xa0, // no-break space
  0xa9, // ©
  0xad, // soft hyphen
  0xb7, // · (ServiceArea separators)
  0xd7, // × (dimensions)
  0x2013, // – en dash (price ranges)
  0x2014, // — em dash
  0x2018,
  0x2019, // ‘ ’
  0x201c,
  0x201d, // “ ”
  0x2022, // •
  0x2026, // …
];

function range(a, b) {
  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}

const UNICODES = KEEP_CODEPOINTS.map((c) => "U+" + c.toString(16).toUpperCase().padStart(4, "0")).join(",");

/**
 * The CSS `unicode-range` that matches the output exactly, printed at the end
 * of a run so src/index.css can be kept in step by eye. It must describe the
 * emitted files and nothing more: a range that claims a codepoint the file
 * lacks is harmless (the browser falls through per glyph) but a range that
 * omits a codepoint the file HAS means the glyph is never used.
 */
const CSS_UNICODE_RANGE =
  "U+000D, U+0020-007E, U+00A0, U+00A9, U+00AD, U+00B7, U+00D7, U+2013-2014, U+2018-2019, U+201C-201D, U+2022, U+2026";

const fail = (msg) => {
  console.error(`\n[fonts] ${msg}\n`);
  process.exit(1);
};

// No `shell: true` anywhere in this file. On Windows the shell re-splits the
// argv we just built, which mangles any argument containing a space or a comma
// — and --unicodes is one long comma-separated list. execFileSync runs the
// resolved .exe directly and passes argv through untouched.
const python = (() => {
  for (const exe of ["python", "py", "python3"]) {
    try {
      // No space in the probe either, so it survives however it is quoted.
      execFileSync(exe, ["-c", "import fontTools,brotli"], { stdio: "ignore" });
      return exe;
    } catch {
      /* try the next one */
    }
  }
  return null;
})();
if (!python) {
  fail(
    "need Python with fonttools and brotli on PATH:\n" +
      "  pip install fonttools brotli\n" +
      "The subset output in public/fonts is committed, so a plain `npm run build`\n" +
      "does not need this — only regenerating the fonts does."
  );
}

/**
 * Read the metrics that decide layout. Anything in here moving between source
 * and subset is a hard failure: the fallback overrides in src/index.css are
 * calibrated against these exact numbers.
 */
const METRICS_PY = `
import json, sys
from fontTools.ttLib import TTFont
f = TTFont(sys.argv[1])
cm = f.getBestCmap(); hm = f['hmtx'].metrics
o = f['OS/2']; h = f['hhea']; hd = f['head']
print(json.dumps({
  'adv': {str(cp): hm[g][0] for cp, g in cm.items() if g in hm},
  'lsb': {str(cp): hm[g][1] for cp, g in cm.items() if g in hm},
  'upm': hd.unitsPerEm,
  'hhea': [h.ascent, h.descent, h.lineGap],
  'typo': [o.sTypoAscender, o.sTypoDescender, o.sTypoLineGap],
  'win': [o.usWinAscent, o.usWinDescent],
  'xh': getattr(o, 'sxHeight', None), 'cap': getattr(o, 'sCapHeight', None),
  'weight': o.usWeightClass, 'width': o.usWidthClass,
  'bbox': [hd.xMin, hd.yMin, hd.xMax, hd.yMax],
  'tables': sorted(t for t in f.keys() if t != 'GlyphOrder'),
}))
`;

const metricsOf = (file) =>
  JSON.parse(execFileSync(python, ["-c", METRICS_PY, file], { encoding: "utf8", maxBuffer: 64 << 20 }));

fs.mkdirSync(OUT_DIR, { recursive: true });

let totalSrc = 0;
let totalOut = 0;
let drift = false;
const rows = [];

for (const face of FACES) {
  const src = path.join(SRC_DIR, `${face}.woff2`);
  if (!fs.existsSync(src)) fail(`missing source face ${path.relative(ROOT, src)}`);
  const out = path.join(OUT_DIR, `${face}.woff2`);
  const tmp = out + ".tmp";

  const args = [
    src,
    `--unicodes=${UNICODES}`,
    "--flavor=woff2",
    `--output-file=${tmp}`,
    // Keep the name table honest so a downloaded file still identifies itself.
    "--name-IDs=*",
    "--name-legacy",
  ];
  if (NO_HINTING) args.push("--no-hinting", "--desubroutinize");

  execFileSync(python, ["-m", "fontTools.subset", ...args], { stdio: ["ignore", "ignore", "inherit"] });

  const before = metricsOf(src);
  const after = metricsOf(tmp);

  const problems = [];
  const shared = Object.keys(after.adv);
  const movedAdv = shared.filter((cp) => before.adv[cp] !== after.adv[cp]);
  const movedLsb = shared.filter((cp) => before.lsb[cp] !== after.lsb[cp]);
  if (movedAdv.length) problems.push(`${movedAdv.length} advance widths moved`);
  if (movedLsb.length) problems.push(`${movedLsb.length} left side bearings moved`);
  for (const k of ["upm", "hhea", "typo", "win", "xh", "cap", "weight", "width", "bbox"]) {
    if (JSON.stringify(before[k]) !== JSON.stringify(after[k])) {
      problems.push(`${k}: ${JSON.stringify(before[k])} -> ${JSON.stringify(after[k])}`);
    }
  }
  for (const t of ["GPOS", "GSUB", "GDEF"]) {
    if (before.tables.includes(t) && !after.tables.includes(t)) problems.push(`${t} table dropped`);
  }
  // Every codepoint asked for that the source has must survive into the output.
  const wanted = KEEP_CODEPOINTS.filter((c) => String(c) in before.adv);
  const lost = wanted.filter((c) => !(String(c) in after.adv));
  if (lost.length) {
    problems.push(`lost ${lost.length} requested glyphs: ${lost.map((c) => "U+" + c.toString(16)).join(",")}`);
  }

  if (problems.length) {
    fs.rmSync(tmp, { force: true });
    fail(`${face}: subset changed layout metrics, refusing to write:\n  - ${problems.join("\n  - ")}`);
  }

  const srcBytes = fs.statSync(src).size;
  const outBytes = fs.statSync(tmp).size;

  if (CHECK) {
    const committed = fs.existsSync(out) ? fs.readFileSync(out) : null;
    const fresh = fs.readFileSync(tmp);
    if (!committed || Buffer.compare(committed, fresh) !== 0) {
      drift = true;
      console.error(`[fonts] ${face}: committed output does not match a fresh subset`);
    }
    fs.rmSync(tmp, { force: true });
  } else {
    fs.renameSync(tmp, out);
  }

  totalSrc += srcBytes;
  totalOut += outBytes;
  rows.push({ face, srcBytes, outBytes, glyphs: Object.keys(after.adv).length });
}

// Faces no longer built must not linger in public/fonts: a stale file is still
// served, still cached for a year by the immutable header in vercel.json, and
// still shows up in a payload audit as a file nobody can explain.
const expected = new Set(FACES.map((f) => `${f}.woff2`));
for (const name of fs.readdirSync(OUT_DIR)) {
  if (!name.endsWith(".woff2") || expected.has(name)) continue;
  if (CHECK) {
    drift = true;
    console.error(`[fonts] stale face still present: public/fonts/${name}`);
  } else {
    fs.rmSync(path.join(OUT_DIR, name));
    console.log(`[fonts] removed stale public/fonts/${name}`);
  }
}

console.log(`\n[fonts] ${CHECK ? "checked" : "wrote"} ${FACES.length} faces (hinting ${NO_HINTING ? "STRIPPED" : "kept"})\n`);
for (const r of rows) {
  const pct = Math.round((r.outBytes / r.srcBytes) * 100);
  console.log(
    `  ${r.face.padEnd(22)} ${String(r.srcBytes).padStart(7)} -> ${String(r.outBytes).padStart(7)} B  (${String(pct).padStart(3)}%)  ${r.glyphs} glyphs`
  );
}
console.log(
  `  ${"TOTAL".padEnd(22)} ${String(totalSrc).padStart(7)} -> ${String(totalOut).padStart(7)} B  (${Math.round(
    (totalOut / totalSrc) * 100
  )}%)`
);
console.log(`\n[fonts] unicode-range for src/index.css:\n  ${CSS_UNICODE_RANGE}\n`);

if (CHECK && drift) fail("public/fonts is out of date — run `npm run fonts` and commit the result");
