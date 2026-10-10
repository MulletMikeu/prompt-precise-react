/**
 * Build sitemap.xml from the route table, with a per-route <lastmod> read from
 * git history.
 *
 * Why this exists: public/sitemap.xml was hand-maintained, and it had gone
 * stale on 32 of its 34 URLs — most said 2026-05-11 while the pages behind them
 * had been edited through July, August and September. Crawlers were being told
 * nothing had changed since May, which is the direct explanation for Ahrefs
 * reporting 34 changed pages that were never picked up.
 *
 * How lastmod is derived: for each route we resolve its page component, walk
 * its local imports transitively, and take the most recent commit date across
 * that set. Site-wide chrome is deliberately EXCLUDED (see CHROME) — a footer
 * or navbar tweak touches all 34 pages, and stamping every URL with that date
 * would make lastmod meaningless again in the other direction. Shared page
 * infrastructure (ServicePage, WhyChooseGodhans, siteData…) IS counted, because
 * a change there genuinely changes the content of the pages that use it.
 *
 * <changefreq> and <priority> are not emitted. Google states plainly that it
 * ignores both, and Bing does too; the hand-written values were 34 more numbers
 * to keep honest for no crawler that reads them.
 *
 * Fails loudly rather than emitting a partial sitemap: if the App.tsx route
 * table stops matching the patterns below, that is a code change that needs a
 * look, not a silently shorter sitemap.
 */
import { execFileSync } from 'node:child_process';

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const APP = path.join(ROOT, 'src/App.tsx');
const OUT = path.join(ROOT, 'public/sitemap.xml');
const ORIGIN = 'https://godhans.com';

/**
 * Modules whose changes must NOT move any page's lastmod. These render on every
 * page, so counting them collapses all 34 dates onto whichever day the footer
 * was last touched.
 */
const CHROME = new Set([
  'src/components/Footer.tsx',
  'src/components/Navbar.tsx',
]);

/**
 * A file imported by more than this many routes is SHARED infrastructure and is
 * excluded from the git-derived SEED date. Two, not one, because a few modules
 * legitimately render on exactly two pages and are page content —
 * PrecisionRemoval, for instance.
 */
const SHARED_ROUTE_THRESHOLD = 2;

/** Where the rendered-content dates live. Written by scripts/stamp-sitemap.mjs. */
const CONTENT_STATE = path.join(ROOT, 'scripts/sitemap-content.json');

/**
 * WHY THIS SCRIPT ONLY SEEDS THE DATES
 *
 * The original rule was: lastmod = newest commit across the route's whole
 * import graph, minus Navbar/Footer. Right in principle, collapsed in practice.
 * Measured on this repo: all 37 URLs read `2026-10-05`, because a brand-token
 * sweep and an a11y-contrast pass both touched `src/pages/ServicePage.tsx`, and
 * a genuine content commit touched `src/data/siteData.ts` -- a 600-line module
 * every single route imports for `BUSINESS`. Real content changes across those
 * same 37 pages span 2026-04-06 to 2026-10-05. Crawlers were being told the
 * entire site changed in one day: the same "lastmod tells you nothing" failure
 * this script was written to fix, arriving from the other direction.
 *
 * Two fixes were tried and rejected:
 *
 *   1. Extend CHROME to cover siteData/ServicePage. Wrong: a price change in
 *      siteData.ts genuinely does change dozens of pages, and excluding the
 *      file would silently stop reporting that.
 *   2. Date a shared module by its last COPY change -- hash its string literals
 *      at each revision, find where they last differed. Implemented, measured,
 *      and it STILL collapsed to one date, because the copy change was real.
 *      File granularity cannot answer the actual question: PINE_LADDER changing
 *      is a real copy change in siteData.ts, but it alters four pages, not
 *      thirty-seven. No amount of source analysis fixes that -- the answer is
 *      only visible in the rendered output.
 *
 * So dating moved to where it is decidable. `scripts/stamp-sitemap.mjs` runs
 * AFTER the build, fingerprints each prerendered page in dist/ with everything
 * that is not content normalised away (the same normalisation
 * scripts/indexnow.mjs uses, for the same reason), and stamps the build's date
 * only on the pages whose rendered content actually moved. Those dates persist
 * in scripts/sitemap-content.json, which is COMMITTED: it is the record of what
 * production read like, so it has to travel with the repo.
 *
 * This script's remaining job is the SEED -- a defensible date for a URL with
 * no recorded fingerprint yet. The seed ignores shared modules, because "when
 * did this page's own component last change" is the best estimate available
 * without rendering, and it reproduces the real 2026-04-06 -> 2026-10-05
 * spread. Once a URL has a fingerprint, its seed is never consulted again.
 */

const die = (msg) => {
  console.error(`\n[gen-sitemap] ${msg}\n`);
  process.exit(1);
};

const git = (args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();

/**
 * Per-route dates need real history, and CI does not have it by default.
 *
 * Vercel (and most CI) clones shallow. `git log -1 -- <file>` on a depth-1 clone
 * returns NOTHING for every file that was not touched by the tip commit, so
 * every route falls back to the same date. Measured on a depth-1 clone of main:
 * all 34 URLs came out 2026-09-17 instead of the correct spread of 2026-08-08 /
 * 2026-09-02 / 2026-09-17. That is the original "lastmod tells crawlers nothing"
 * bug wearing a different hat — every deploy would claim all 34 pages changed.
 *
 * So: deepen the clone if we can, and if we cannot, REFUSE to overwrite the
 * committed sitemap.xml with worse data. The committed file was generated from
 * full history by whoever last ran a local build, which is strictly better than
 * 34 copies of today's date.
 */
function haveUsableHistory() {
  let shallow;
  try {
    shallow = git(['rev-parse', '--is-shallow-repository']) === 'true';
  } catch {
    console.warn('[gen-sitemap] not a git repository — keeping the committed sitemap.xml');
    return false;
  }
  if (!shallow) return true;

  console.warn('[gen-sitemap] shallow clone detected; fetching full history…');
  try {
    git(['fetch', '--unshallow', '--quiet']);
  } catch (err) {
    console.warn(`[gen-sitemap] --unshallow failed: ${String(err.message).split('\n')[0]}`);
  }
  try {
    if (git(['rev-parse', '--is-shallow-repository']) === 'false') {
      console.log('[gen-sitemap] history deepened — per-route dates available');
      return true;
    }
  } catch { /* fall through */ }
  return false;
}

// ------------------------------------------------------------- history check

if (!haveUsableHistory()) {
  if (fs.existsSync(OUT)) {
    const existing = fs.readFileSync(OUT, 'utf8');
    const dates = [...new Set([...existing.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]))];
    console.warn(
      `[gen-sitemap] KEEPING the committed public/sitemap.xml unchanged ` +
      `(${dates.length} distinct lastmod value(s)). Regenerate it from a full ` +
      `clone — \`npm run sitemap\` locally — and commit the result.`,
    );
    process.exit(0);
  }
  die('shallow clone AND no committed public/sitemap.xml to fall back on — run `npm run sitemap` locally and commit it.');
}

// ---------------------------------------------------------------- route table

const app = fs.readFileSync(APP, 'utf8');

/**
 * The index route, in either shape it has had:
 *
 *   { index: true, lazy: page(() => import("./pages/HomePage")) }   ← current
 *   { index: true, element: <HomePage /> } + `import HomePage from "…"`
 *
 * The homepage used to be the one eagerly-imported route, which is why the
 * second form existed and why this function could not just reuse the `lazy:`
 * regex below. It is lazy like every other route now, but both forms are still
 * accepted: this script dying is how a route silently vanishes from the
 * sitemap, and that should not hinge on which of two equivalent spellings the
 * homepage happens to use this month.
 */
function indexRoute() {
  const lazy = app.match(
    /\{\s*index:\s*true,\s*lazy:\s*page\(\(\)\s*=>\s*import\(["']([^"']+)["']\)\)\s*\}/,
  );
  if (lazy) return { url: '/', spec: lazy[1] };
  const m = app.match(/\{\s*index:\s*true,\s*element:\s*<(\w+)\s*\/>\s*\}/);
  if (!m) {
    die(
      'could not find the index route in src/App.tsx — expected either ' +
      '{ index: true, lazy: page(() => import("…")) } or { index: true, element: <X /> }',
    );
  }
  const imp = app.match(new RegExp(`import ${m[1]} from ["']([^"']+)["']`));
  if (!imp) die(`index route renders <${m[1]}/> but no import for it was found`);
  return { url: '/', spec: imp[1] };
}

/** `{ path: "x", lazy: page(() => import("./pages/Y")) }` */
const lazyRoutes = [...app.matchAll(
  /\{\s*path:\s*["']([^"']+)["'],\s*lazy:\s*page\(\(\)\s*=>\s*import\(["']([^"']+)["']\)\)\s*\}/g,
)].map((m) => ({ url: `/${m[1]}`, spec: m[2] }));

/** `{ path: "x", lazy: locationPage("City") }` — all share LocationPage. */
const locationSpec = (() => {
  const m = app.match(/const locationPage[\s\S]*?import\(["']([^"']+)["']\)/);
  if (!m) die('could not resolve the module behind locationPage() in src/App.tsx');
  return m[1];
})();
const locationRoutes = [...app.matchAll(
  /\{\s*path:\s*["']([^"']+)["'],\s*lazy:\s*locationPage\(["'][^"']+["']\)\s*\}/g,
)].map((m) => ({ url: `/${m[1]}`, spec: locationSpec }));

const routes = [indexRoute(), ...lazyRoutes, ...locationRoutes]
  // The catch-all renders /404, which must never be in a sitemap.
  .filter((r) => r.url !== '/*' && r.url !== '/404');

// Cross-check against every `path:` in the file so a route written in a shape
// the regexes above don't cover can't vanish from the sitemap unnoticed.
// Excluded: "*" (the catch-all) and "/" (the layout route, covered by the index
// route, which declares no path of its own).
const declared = new Set(
  [...app.matchAll(/path:\s*["']([^"']+)["']/g)]
    .map((m) => m[1])
    .filter((p) => p !== '*' && p !== '/')
    .map((p) => `/${p}`),
);
const matched = new Set(routes.map((r) => r.url).filter((u) => u !== '/'));
const missing = [...declared].filter((p) => !matched.has(p));
if (missing.length) {
  die(
    `these routes are declared in src/App.tsx but were not parsed, so they would ` +
    `be missing from the sitemap:\n  ${missing.join('\n  ')}\n` +
    `Update the patterns in scripts/gen-sitemap.mjs.`,
  );
}

// ------------------------------------------------------- import-graph walking

const EXTS = ['', '.tsx', '.ts', '/index.tsx', '/index.ts'];

/** Resolve a `./x`, `../x` or `@/x` import spec to a repo-relative file path. */
function resolveSpec(spec, fromFile) {
  const base = spec.startsWith('@/')
    ? path.join(ROOT, 'src', spec.slice(2))
    : path.resolve(path.dirname(path.join(ROOT, fromFile)), spec);
  for (const ext of EXTS) {
    const candidate = base + ext;
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return path.relative(ROOT, candidate).split(path.sep).join('/');
    }
  }
  return null; // node_modules, CSS, or an image asset — not part of the graph
}

/** Every local .ts/.tsx file a route's page component depends on. */
function dependencies(entrySpec) {
  const entry = resolveSpec(entrySpec, 'src/App.tsx');
  if (!entry) die(`could not resolve route module "${entrySpec}" from src/App.tsx`);

  const seen = new Set();
  const queue = [entry];
  while (queue.length) {
    const file = queue.shift();
    if (seen.has(file) || CHROME.has(file)) continue;
    seen.add(file);
    const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
    for (const m of src.matchAll(/from\s+["'](\.{1,2}\/[^"']+|@\/[^"']+)["']/g)) {
      const dep = resolveSpec(m[1], file);
      if (dep && !seen.has(dep)) queue.push(dep);
    }
  }
  return [...seen];
}

// ----------------------------------------------------------------- git dates

const dateCache = new Map();

/** Last commit date for one file, as YYYY-MM-DD. Null if untracked. */
function lastCommitDate(file) {
  if (dateCache.has(file)) return dateCache.get(file);
  let out = '';
  try {
    out = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], {
      cwd: ROOT,
      encoding: 'utf8',
    }).trim();
  } catch {
    out = '';
  }
  const value = /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  dateCache.set(file, value);
  return value;
}

// A file with no history is new and uncommitted, so "now" is the honest answer.
// Taken from git rather than the clock so two builds of the same commit agree.
const headDate = lastCommitDate('.') ?? new Date().toISOString().slice(0, 10);

/**
 * Last commit date at which a file's COPY changed, as YYYY-MM-DD.
 *
 * Walks the file's commits newest-first and returns the first whose copyHash
 * differs from the next-older version's. Falls back to the file's oldest commit
 * date (the version where its copy first existed) when every revision has the
 * same copy — which is the correct answer for a file that has only ever been
 * restyled.
 */
/**
 * Rendered-content dates recorded by the last stamped build, keyed by URL path.
 *
 * Absent on a fresh checkout and for any URL added since, which is exactly what
 * the git-derived seed is for.
 */
const recorded = (() => {
  if (!fs.existsSync(CONTENT_STATE)) return {};
  try {
    const parsed = JSON.parse(fs.readFileSync(CONTENT_STATE, 'utf8'));
    return parsed && typeof parsed === 'object' && parsed.pages ? parsed.pages : {};
  } catch {
    console.warn('[gen-sitemap] scripts/sitemap-content.json unreadable; seeding every date from git');
    return {};
  }
})();

// ------------------------------------------------- shared vs route-local files

// Which files each route depends on, resolved once so the shared-module count
// below is measured rather than guessed at.
const routeFiles = routes.map(({ url, spec }) => ({ url, spec, files: dependencies(spec) }));

const routeCount = new Map();
for (const { files } of routeFiles) {
  for (const f of new Set(files)) routeCount.set(f, (routeCount.get(f) ?? 0) + 1);
}
const isShared = (file) => (routeCount.get(file) ?? 0) > SHARED_ROUTE_THRESHOLD;

// ------------------------------------------------------------------- generate

let seeded = 0;
const entries = routeFiles.map(({ url, files }) => {
  // A recorded rendered-content date always wins: it is the only one that knows
  // whether THIS page's output actually moved.
  const fromState = recorded[url]?.lastmod;
  if (fromState) return { url, lastmod: fromState, files: files.length, source: 'content' };

  // Seed: newest commit across this route's own files, shared modules excluded.
  seeded += 1;
  const local = files.filter((f) => !isShared(f)).map(lastCommitDate).filter(Boolean);

  // The four LocationPage cities have NO route-local file — LocationPage.tsx
  // serves all of them, so it is shared by definition and the filter above
  // empties their list. Falling through to headDate would stamp them "today",
  // which is the collapse this whole exercise is about. Use the full graph for
  // them instead: a real date from a shared module beats an invented one.
  const dates = local.length
    ? local
    : files.map(lastCommitDate).filter(Boolean);

  const lastmod = dates.length ? dates.sort().at(-1) : headDate;
  return { url, lastmod, files: files.length, source: local.length ? 'seed' : 'seed(shared)' };
});

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<!-- GENERATED by scripts/gen-sitemap.mjs on every build. Do not edit by hand. -->',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries.map(({ url, lastmod }) => [
    '  <url>',
    `    <loc>${ORIGIN}${url === '/' ? '/' : url}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    '  </url>',
  ].join('\n')),
  '</urlset>',
  '',
].join('\n');

fs.writeFileSync(OUT, xml);

const spread = [...new Set(entries.map((e) => e.lastmod))].sort();
console.log(`[gen-sitemap] wrote ${entries.length} URLs to public/sitemap.xml`);
console.log(`[gen-sitemap] lastmod values in use (${spread.length}): ${spread.join(', ')}`);

const sharedFiles = [...routeCount.entries()].filter(([f]) => isShared(f)).map(([f]) => f).sort();
console.log(`[gen-sitemap] shared modules excluded from the seed: ${sharedFiles.length}`);
console.log(`[gen-sitemap] dates: ${entries.length - seeded} from recorded content, ${seeded} seeded from git`);

/**
 * One date across every URL is the failure this script exists to prevent, in
 * either direction — a stale hand-written sitemap, or a shared-module commit
 * restamping the lot. It happened once (all 37 URLs read 2026-10-05 after a
 * brand-token sweep), so it fails the build now rather than shipping quietly.
 *
 * The threshold is deliberately weak: two distinct dates. It is a smoke alarm
 * for "the dating logic collapsed", not an assertion about how often the site
 * is edited.
 */
if (spread.length < 2 && entries.length > 4) {
  die(
    `every one of the ${entries.length} URLs got the same lastmod (${spread[0]}).\n` +
    `That is the collapse this script is supposed to prevent: a change to a module\n` +
    `every route imports has restamped the whole sitemap. Check SHARED_ROUTE_THRESHOLD\n` +
    `and copyHash() in this file before shipping — a sitemap that claims all\n` +
    `${entries.length} pages changed on one day tells a crawler nothing.`,
  );
}
