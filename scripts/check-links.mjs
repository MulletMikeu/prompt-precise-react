/**
 * LINK GUARD — fails the build if any internal link cannot resolve in the
 * browser.
 *
 * ── WHY THIS EXISTS ────────────────────────────────────────────────────────
 *
 * On 2026-10-10 Ship A consolidated /tree-removal-tight-spaces-jacksonville-nc
 * into /tree-removal-near-house-jacksonville-nc and added the 301 to
 * vercel.json. The control arm's guides list still pointed at the old URL, and
 * the ship record reasoned: "A 301 resolves and the control's HTML is what the
 * test measures, so this waits until after Dec 1."
 *
 * That reasoning is true for Googlebot and false for a human being.
 *
 * This is a prerendered SPA. `vercel.json` redirects run on an HTTP REQUEST.
 * A react-router <Link> does not make one: it calls preventDefault and hands
 * the path to the client router, which finds no match, falls through to
 * `path: "*"` and renders NotFound. Nothing ever reaches Vercel, so the 301
 * never fires. The visitor gets a 404 page; the server-side check passes.
 *
 * It then showed up in the data and nobody connected it: GSC's deep audit on
 * 2026-10-23 recorded 12 GA4 views of "404 Not Found | Godhans Tree Company"
 * in 7 days and attributed them to a malformed double-slash URL, which was
 * already fixed and returning 308. The real source was one anchor in a guides
 * list, because `Analytics()` in src/App.tsx fires trackPageView on every
 * client-side navigation — including the one that lands on NotFound.
 *
 * ── WHY IT IS NOT PART OF check-arms.mjs ───────────────────────────────────
 *
 * The batch offered either. check-arms.mjs carries a dated instruction to be
 * DELETED after 2026-12-01 when the A/B test reads out, and it should be — a
 * guard that outlives the thing it guards becomes a flag people pass without
 * reading. This check has nothing to do with the test and must outlive it, so
 * folding it in would quietly delete it in six weeks.
 *
 * ── WHAT IT CHECKS ─────────────────────────────────────────────────────────
 *
 * Every internal href in every file in dist/, resolved against what actually
 * exists in dist/:
 *
 *   1. a prerendered route (foo.html, or index.html for "/")      → OK
 *   2. a real static file (sitemap.xml, llms.txt, robots.txt)     → OK
 *      Reached by a plain <a href>, which IS a real navigation.
 *   3. a vercel.json redirect source and nothing else             → FAIL
 *      Resolves on a direct request, 404s on a client-side click. This is
 *      the Ship A class above, and it is the whole reason for this file.
 *   4. none of the above                                          → FAIL
 *      Dead on the server and dead in the browser.
 *
 * Fragments and query strings are stripped before resolving. Anchors to
 * "#thing" on the current page, mailto:, tel: and external hosts are ignored.
 *
 * ── THE ALLOW-LIST ─────────────────────────────────────────────────────────
 *
 * ALLOWED below is for links that are known-broken and deliberately not being
 * fixed yet. Every entry needs a reason, the ship that added it, and a review
 * date — an undated exception is how a guard stops meaning anything. Entries
 * are reported on every build so they cannot go quiet.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const VERCEL = path.join(ROOT, 'vercel.json');

/**
 * Known-broken internal links that are NOT being fixed in the current ship.
 *
 * Keyed by href. `from` is the page that carries it, so a fix can be verified
 * against the right file, and `review` is when this entry must be revisited.
 */
const ALLOWED = {
  '/tree-removal-tight-spaces-jacksonville-nc': {
    from: '/stump-grinding-jacksonville-nc',
    added: '2026-10-24 (Ship I)',
    review: '2026-11-01',
    reason:
      'Ship A 301d this URL into /tree-removal-near-house-jacksonville-nc but left the ' +
      'anchor on the control arm. The control is frozen by DECISIONS.md until 2026-11-01 ' +
      'and by check-arms.mjs until the A/B test reads out on 2026-12-01, so editing the ' +
      'page to fix it would move the control mid-test. This is the ONE link this guard ' +
      'was written to catch, and it is allow-listed rather than fixed on the owner ruling. ' +
      'Googlebot gets a clean 301; a visitor who clicks it gets the 404 page. When the ' +
      'control unfreezes, repoint it to /tree-removal-near-house-jacksonville-nc and ' +
      'delete this entry.',
  },
};

/** Internal = same-origin path. Skips mailto:, tel:, http(s):, protocol-relative and bare fragments. */
const isInternal = (href) =>
  href.startsWith('/') && !href.startsWith('//');

/** Strip the fragment and query, and normalise the trailing slash away. */
function toPath(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (clean === '' || clean === '/') return '/';
  return clean.replace(/\/+$/, '') || '/';
}

/** Redirect sources from vercel.json, minus the host-conditional catch-alls. */
function redirectSources() {
  const cfg = JSON.parse(fs.readFileSync(VERCEL, 'utf8'));
  return new Set(
    (cfg.redirects ?? [])
      .filter((r) => !r.has) // `has: [{type:"host"}]` rules are domain forwards, not paths
      .map((r) => r.source)
      .filter((s) => !s.includes('(')) // skip pattern sources; only literals are resolvable here
  );
}

/** Everything dist/ can actually serve: prerendered routes plus real files. */
function servable() {
  const routes = new Set();
  const files = new Set();

  const walk = (dir, prefix) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const abs = path.join(dir, entry.name);
      const rel = `${prefix}/${entry.name}`;
      if (entry.isDirectory()) {
        walk(abs, rel);
      } else if (entry.name.endsWith('.html')) {
        // cleanUrls: true — foo.html is served at /foo, index.html at /
        routes.add(rel === '/index.html' ? '/' : rel.replace(/\.html$/, ''));
      } else {
        files.add(rel);
      }
    }
  };
  walk(DIST, '');
  return { routes, files };
}

/** Every <a href> in a document, with its visible anchor text. */
const anchors = (html) =>
  [...html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)].map((m) => ({
    href: m[1].replace(/&amp;/g, '&'),
    text: m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
  }));

const { routes, files } = servable();
const redirects = redirectSources();

/** href -> { kind, refs: [{ from, text }] } */
const broken = new Map();

for (const file of fs.readdirSync(DIST).filter((f) => f.endsWith('.html'))) {
  const from = file === 'index.html' ? '/' : '/' + file.replace(/\.html$/, '');
  const html = fs.readFileSync(path.join(DIST, file), 'utf8');

  for (const { href, text } of anchors(html)) {
    if (!isInternal(href)) continue;
    const p = toPath(href);
    if (routes.has(p) || files.has(p)) continue;

    const kind = redirects.has(p) ? 'redirect-only' : 'dead';
    if (!broken.has(href)) broken.set(href, { kind, refs: [] });
    broken.get(href).refs.push({ from, text });
  }
}

const failures = [];
const allowed = [];

for (const [href, info] of broken) {
  (ALLOWED[href] ? allowed : failures).push({ href, ...info });
}

for (const a of allowed) {
  const note = ALLOWED[a.href];
  console.log(
    `[check-links] ALLOWED (${a.kind}): ${a.href} from ${a.refs.map((r) => r.from).join(', ')} ` +
      `— added ${note.added}, review ${note.review}`
  );
}

// An allow-list entry that no longer matches anything is worse than no entry:
// it reads as a live exception while protecting nothing.
for (const href of Object.keys(ALLOWED)) {
  if (!broken.has(href)) {
    console.log(
      `[check-links] STALE ALLOW-LIST ENTRY: ${href} is no longer broken. ` +
        'Delete it from ALLOWED in scripts/check-links.mjs.'
    );
  }
}

if (failures.length) {
  console.error('\n[check-links] BUILD FAILED — internal links that cannot resolve in a browser.\n');
  for (const f of failures) {
    console.error(`  ✗ ${f.href}  [${f.kind}]`);
    for (const r of f.refs) console.error(`      from ${r.from} — anchor: "${r.text}"`);
  }
  console.error(
    '\n  redirect-only: vercel.json redirects this path, so a DIRECT REQUEST is fine and\n' +
      '  Googlebot never sees a problem. But a react-router <Link> never makes a request —\n' +
      '  the client router matches nothing, falls through to "*" and renders NotFound. The\n' +
      '  visitor gets a 404 page and GA4 records a pageview for it. Point the anchor at the\n' +
      "  redirect's destination instead of its source.\n\n" +
      '  dead: the path is not a route, not a file in dist/, and not redirected. It is\n' +
      '  broken for everyone. Fix the href or add the route.\n\n' +
      '  If a link is deliberately left broken for now, add it to ALLOWED in\n' +
      '  scripts/check-links.mjs with a reason, the ship, and a review date.\n'
  );
  process.exit(1);
}

console.log(
  `[check-links] ${routes.size} routes, ${files.size} static files, ` +
    `${allowed.length} allow-listed, 0 unresolvable internal links.`
);
