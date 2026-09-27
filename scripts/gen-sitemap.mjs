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

/** `{ index: true, element: <HomePage /> }` + its `import HomePage from "…"`. */
function indexRoute() {
  const m = app.match(/\{\s*index:\s*true,\s*element:\s*<(\w+)\s*\/>\s*\}/);
  if (!m) die('could not find the index route ({ index: true, element: <X /> }) in src/App.tsx');
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

// ------------------------------------------------------------------- generate

const entries = routes.map(({ url, spec }) => {
  const files = dependencies(spec);
  const dates = files.map(lastCommitDate).filter(Boolean);
  const lastmod = dates.length ? dates.sort().at(-1) : headDate;
  return { url, lastmod, files: files.length };
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
console.log(`[gen-sitemap] lastmod values in use: ${spread.join(', ')}`);
