/**
 * Stamp <lastmod> from what each page ACTUALLY RENDERS, after the build.
 *
 * ── WHY THIS EXISTS ─────────────────────────────────────────────────────────
 *
 * scripts/gen-sitemap.mjs runs in `prebuild` and can only see source files. It
 * derived lastmod from "newest commit across the route's import graph", and
 * that collapsed: all 37 URLs read 2026-10-05, because a brand-token sweep and
 * an a11y-contrast pass touched src/pages/ServicePage.tsx and a real content
 * commit touched src/data/siteData.ts -- a module every single route imports
 * for BUSINESS. Actual content changes across those pages span six months.
 *
 * File granularity cannot fix that. PINE_LADDER changing is a genuine copy
 * change in siteData.ts, but it alters four pages, not thirty-seven. The only
 * place the question "did THIS page change?" is answerable is the rendered
 * output, which exists only after the build. Hence a postbuild step.
 *
 * ── HOW ─────────────────────────────────────────────────────────────────────
 *
 * Fingerprint every prerendered page in dist/ with everything that is not
 * content normalised away, compare against scripts/sitemap-content.json, and
 * stamp the build's commit date on the URLs whose fingerprint moved. Everything
 * else keeps the date it already had.
 *
 * The normalisation is deliberately IDENTICAL to scripts/indexnow.mjs, which
 * answers the same question for a different consumer ("should Bing re-crawl
 * this?" vs "what do we tell crawlers in the sitemap?"). Two different answers
 * to "did this page change" would be a bug, so the rules live in one place:
 * scripts/lib/content-fingerprint.mjs, imported by both.
 *
 * ── STATE ───────────────────────────────────────────────────────────────────
 *
 * scripts/sitemap-content.json is COMMITTED. It is the record of what
 * production last read like, so it has to travel with the repo -- without it a
 * fresh clone has no baseline and would restamp every URL on the next build.
 * This script rewrites it; commit the result along with the change that caused
 * it, exactly like scripts/indexnow-content.json.
 *
 * ── SAFE TO RUN IN CI ───────────────────────────────────────────────────────
 *
 * Unlike indexnow this sends nothing and is idempotent: running it twice on the
 * same dist/ changes nothing the second time. It writes dist/sitemap.xml (what
 * gets deployed) and public/sitemap.xml (what gets committed) so the two agree.
 *
 *   npm run stamp-sitemap -- --dry-run    # report, write nothing
 *
 * ── A GENUINE SITE-WIDE CHANGE (added Ship M, 2026-11-21) ──────────────────
 *
 * The collapse guard below fails the build when every URL ends up on one
 * lastmod. That is almost always a fingerprinting bug — but not always. Ship M
 * changed the footer (its services list and the Jacksonville link), so every
 * page's rendered content really did move on the same day, and the guard then
 * fails EVERY later build too, because it checks the resulting dates rather
 * than what caused them.
 *
 * The override is deliberate and dated, so it cannot hide a future bug:
 *
 *   node scripts/stamp-sitemap.mjs --allow-uniform    # after a real build
 *
 * records `uniformAllowedFor: <that date>` in scripts/sitemap-content.json,
 * which is committed. The guard then passes ONLY while every lastmod equals
 * that exact date. The first later build that stamps any page with a newer
 * date has a spread of two again, and the field is dropped on that write.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import { contentFingerprint } from './lib/content-fingerprint.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PUBLIC_SITEMAP = path.join(ROOT, 'public/sitemap.xml');
const DIST_SITEMAP = path.join(DIST, 'sitemap.xml');
const STATE = path.join(ROOT, 'scripts/sitemap-content.json');

const dryRun = process.argv.slice(2).some((a) => a === '--dry-run' || a === '-n');
const allowUniform = process.argv.slice(2).includes('--allow-uniform');

const die = (msg) => {
  console.error(`\n[stamp-sitemap] ${msg}\n`);
  process.exit(1);
};

if (!fs.existsSync(DIST_SITEMAP)) {
  die(`dist/sitemap.xml is missing -- run the build first (it copies public/sitemap.xml).`);
}

/**
 * Today, from git rather than the clock, so two builds of the same commit agree
 * and a rebuild of an old commit does not claim the pages changed today.
 */
const buildDate = (() => {
  try {
    const d = execFileSync('git', ['log', '-1', '--format=%cs'], { cwd: ROOT, encoding: 'utf8' }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  } catch { /* fall through */ }
  return new Date().toISOString().slice(0, 10);
})();

// ------------------------------------------------------------------ the sitemap

const sitemapXml = fs.readFileSync(DIST_SITEMAP, 'utf8');
const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
  .map((m) => ({ loc: m[1], lastmod: m[2] }));

if (!urls.length) die('parsed 0 <url> entries out of dist/sitemap.xml -- has its shape changed?');

/** `https://godhans.com/x` -> `dist/x.html`; the root -> `dist/index.html`. */
function distFileFor(loc) {
  const pathname = new URL(loc).pathname.replace(/\/$/, '');
  return path.join(DIST, (pathname === '' ? '/index' : pathname) + '.html');
}

// ------------------------------------------------------------------- the state

const prior = (() => {
  if (!fs.existsSync(STATE)) return { pages: {} };
  try {
    const parsed = JSON.parse(fs.readFileSync(STATE, 'utf8'));
    return parsed?.pages ? parsed : { pages: {} };
  } catch {
    console.warn('[stamp-sitemap] state file unreadable; treating every page as new');
    return { pages: {} };
  }
})();

const firstRun = Object.keys(prior.pages).length === 0;

// -------------------------------------------------------------------- classify

const next = { generated: buildDate, pages: {} };
const changed = [];
const added = [];
const unchanged = [];

for (const { loc, lastmod } of urls) {
  const file = distFileFor(loc);
  if (!fs.existsSync(file)) {
    die(`${loc} is in the sitemap but ${path.relative(ROOT, file)} was not built.`);
  }
  const key = new URL(loc).pathname.replace(/\/$/, '') || '/';
  const fingerprint = contentFingerprint(fs.readFileSync(file, 'utf8'));
  const was = prior.pages[key];

  if (!was) {
    // First run has no baseline for anything. Adopting the seed date rather
    // than stamping today is the whole point: gen-sitemap already worked out a
    // real per-page date from git, and overwriting 37 of them with "today"
    // would recreate the collapse from the other end.
    added.push(key);
    next.pages[key] = { fingerprint, lastmod };
  } else if (was.fingerprint !== fingerprint) {
    changed.push(key);
    next.pages[key] = { fingerprint, lastmod: buildDate };
  } else {
    unchanged.push(key);
    next.pages[key] = { fingerprint, lastmod: was.lastmod };
  }
}

// ---------------------------------------------------------------------- report

console.log(`[stamp-sitemap] build date ${buildDate}${dryRun ? '  (dry run)' : ''}`);
if (firstRun) {
  console.log(`[stamp-sitemap] first run: adopting the ${added.length} seeded dates as the baseline`);
} else {
  console.log(`[stamp-sitemap] content changed: ${changed.length}, unchanged: ${unchanged.length}, new URLs: ${added.length}`);
  for (const k of changed) console.log(`                CHANGED  ${k}  -> ${buildDate}`);
  for (const k of added) console.log(`                NEW      ${k}  -> ${next.pages[k].lastmod} (seeded)`);
}

// ----------------------------------------------------------------------- write

const rewritten = sitemapXml.replace(
  /<loc>([^<]+)<\/loc>(\s*)<lastmod>([^<]+)<\/lastmod>/g,
  (whole, loc, gap, old) => {
    const key = new URL(loc).pathname.replace(/\/$/, '') || '/';
    const stamped = next.pages[key]?.lastmod ?? old;
    return `<loc>${loc}</loc>${gap}<lastmod>${stamped}</lastmod>`;
  },
);

const spread = [...new Set(Object.values(next.pages).map((p) => p.lastmod))].sort();
console.log(`[stamp-sitemap] lastmod values in use (${spread.length}): ${spread.join(', ')}`);

// See "A GENUINE SITE-WIDE CHANGE" in the header.
const acknowledged = prior.uniformAllowedFor;
if (spread.length < 2 && urls.length > 4 && allowUniform) {
  next.uniformAllowedFor = spread[0];
  console.log(`[stamp-sitemap] --allow-uniform: every URL is ${spread[0]}; recorded as acknowledged. COMMIT scripts/sitemap-content.json.`);
} else if (spread.length < 2 && urls.length > 4 && acknowledged === spread[0]) {
  next.uniformAllowedFor = acknowledged;
  console.log(`[stamp-sitemap] every URL is ${spread[0]} — acknowledged as a real site-wide change (uniformAllowedFor in the state file).`);
} else if (spread.length < 2 && urls.length > 4) {
  die(
    `every one of the ${urls.length} URLs ended up with the same lastmod (${spread[0]}).\n` +
    `That is the collapse this script exists to prevent. Check the fingerprinting\n` +
    `in scripts/lib/content-fingerprint.mjs before shipping. If every page really\n` +
    `did change (a site-wide footer edit, say), run with --allow-uniform and commit\n` +
    `the state file — see the header.`,
  );
}

if (dryRun) {
  console.log('[stamp-sitemap] dry run: wrote nothing');
  process.exit(0);
}

fs.writeFileSync(DIST_SITEMAP, rewritten);
fs.writeFileSync(PUBLIC_SITEMAP, rewritten);
fs.writeFileSync(STATE, JSON.stringify(next, null, 2) + '\n');
console.log('[stamp-sitemap] wrote dist/sitemap.xml, public/sitemap.xml and scripts/sitemap-content.json');
if (changed.length) {
  console.log('[stamp-sitemap] commit scripts/sitemap-content.json and public/sitemap.xml with this change.');
}
