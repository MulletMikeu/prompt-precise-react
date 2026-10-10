/**
 * Submit changed URLs to IndexNow (Bing, Yandex, Seznam, Naver — one endpoint
 * fans out to all of them). Ahrefs reported 34 changed pages that were never
 * submitted anywhere; this is the other half of that fix, alongside the
 * git-derived lastmod in scripts/gen-sitemap.mjs.
 *
 * ── RUN THIS AFTER A PRODUCTION DEPLOY, NOT DURING THE BUILD ────────────────
 *
 * It is deliberately NOT wired to `postbuild`. Vercel builds do have network
 * access, so it *could* run there — but it would be wrong twice over:
 *
 *   1. The build finishes BEFORE the deployment is promoted, so we would be
 *      telling Bing to re-crawl URLs that are still serving the old content.
 *      IndexNow only gets one useful ping per change; spending it early wastes
 *      it and can get the host de-prioritised for crying wolf.
 *   2. Every preview and branch build would fire too, all submitting the
 *      production URLs of pages that were never published.
 *
 * So it is a manual step, one command, after the deploy is live:
 *
 *   npm run indexnow -- --dry-run      # print what would be sent, send nothing
 *   npm run indexnow                   # URLs whose RENDERED CONTENT changed
 *   npm run indexnow -- --since=2026-09-01   # old lastmod-window behaviour
 *   npm run indexnow -- --all          # every URL in the sitemap
 *   npm run indexnow -- --urls=/about,/reviews
 *
 * The default reads dist/, so build first — it compares what you are about to
 * have crawled against what was there last time.
 *
 * ── SELECTION IS BY RENDERED CONTENT, NOT BY DATE ───────────────────────────
 *
 * The default used to be a 7-day `lastmod` window, and it was wrong in one
 * specific, recurring way: it over-selects whenever a change lands in a module
 * every page imports — siteData.ts, BusinessSchema, ServicePage, index.html,
 * the font set, the JS bundle. gen-sitemap walks each route's local imports and
 * takes the newest commit date, so touching any of those restamps all 38 URLs
 * with the same day and the window then submits the entire site. That is true
 * of the dates and useless as a signal. IndexNow is a "this page changed,
 * re-crawl it" ping; spending it on 38 URLs when none of them reads any
 * differently is how a host gets de-prioritised for crying wolf.
 *
 * Three site-wide ships in one evening made the cost concrete: a font subset, a
 * photo on one page, and a comment strip. Two of the three changed no visible
 * text on any page, and both still selected all 37 URLs on the old default.
 *
 * So the default now asks the question that actually matters — *does this page
 * read differently than it did last time we pinged?* — by fingerprinting the
 * prerendered HTML in dist/ with everything that is not content normalised
 * away: asset filenames and their hashes, the SSG hash, the loader-data
 * manifest name, every HTML comment, and all whitespace. A ship that only
 * changes fonts, bundles, asset hashes or comments produces identical
 * fingerprints, selects zero URLs, and exits having sent nothing. That is the
 * intended outcome, not a failure.
 *
 * The fingerprints live in scripts/indexnow-content.json, which is COMMITTED.
 * It is the record of what production read like at the last submission, so it
 * has to travel with the repo — without it a fresh clone has no baseline and
 * the first run would submit everything. A successful (non-dry) run rewrites
 * it; commit the result with your next change.
 *
 * ── THE ESCAPE HATCHES ──────────────────────────────────────────────────────
 *
 * --urls takes an explicit comma-separated list of paths (or absolute URLs) and
 * submits exactly those, bypassing selection entirely. The paths are validated
 * against the sitemap, so a typo fails loudly instead of pinging a 404.
 *
 * --since=YYYY-MM-DD is the old lastmod behaviour, kept for the cases where you
 * genuinely want date selection and know it over-selects.
 *
 * --all submits every URL in the sitemap. Reach for it roughly never.
 *
 * Google does not participate in IndexNow and ignores it; it discovers changes
 * from the sitemap's lastmod instead. Both halves matter.
 */
import fs from 'node:fs';
import path from 'node:path';

import { contentFingerprint } from './lib/content-fingerprint.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const ORIGIN = 'https://godhans.com';
const HOST = 'godhans.com';
const KEY = 'd396d4a5f3a988583540ed67906b8575';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const DEFAULT_WINDOW_DAYS = 7;

/** Committed record of what each URL's rendered content looked like last time. */
const CONTENT_STATE = path.join(ROOT, 'scripts', 'indexnow-content.json');

/**
 * The A/B test control. Pinging it is not merely wasteful, it is a confound:
 * the live test compares /tree-removal-cost-north-carolina against this page,
 * and asking Bing to re-crawl one arm and not the other is a change to the
 * experiment. The brief for every ship so far has said "never submit the
 * control URL", so it is enforced here rather than left to whoever is typing
 * the command at 2am.
 *
 * REMOVE THIS (and --include-ab-control with it) WHEN THE TEST ENDS. Until
 * then every run prints the exclusion so it cannot quietly outlive the test.
 */
const AB_CONTROL = `${ORIGIN}/stump-grinding-jacksonville-nc`;
/** IndexNow caps a single batch at 10,000 URLs; we are nowhere near it. */
const MAX_URLS = 10_000;

const args = process.argv.slice(2);
const has = (flag) => args.includes(flag);
const valueOf = (name) => {
  const hit = args.find((a) => a.startsWith(`${name}=`));
  return hit ? hit.slice(name.length + 1) : null;
};

const dryRun = has('--dry-run');
const all = has('--all');
const since = valueOf('--since');
const urlsArg = valueOf('--urls');
const includeAbControl = has('--include-ab-control');

const fail = (msg) => {
  console.error(`\n[indexnow] ${msg}\n`);
  process.exit(1);
};

// ── preflight ───────────────────────────────────────────────────────────────

// The key must be reachable at https://<host>/<key>.txt containing the key, or
// every submission is rejected. Check the local file exists and matches first;
// a typo here is otherwise a silent 403 from the endpoint.
const keyFile = path.join(ROOT, 'public', `${KEY}.txt`);
if (!fs.existsSync(keyFile)) {
  fail(`key file missing: public/${KEY}.txt\nIndexNow verifies ownership by fetching it — create it containing exactly the key.`);
}
const keyFileBody = fs.readFileSync(keyFile, 'utf8').trim();
if (keyFileBody !== KEY) {
  fail(`public/${KEY}.txt contains "${keyFileBody}" but the key is "${KEY}" — they must match exactly.`);
}

const sitemapPath = path.join(ROOT, 'public', 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  fail('public/sitemap.xml not found — run `npm run sitemap` (or a build) first.');
}
const sitemap = fs.readFileSync(sitemapPath, 'utf8');

// ── pick URLs ───────────────────────────────────────────────────────────────

const entries = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
  .map((m) => ({ loc: m[1].trim(), lastmod: m[2].trim() }));

if (!entries.length) fail('parsed 0 <url> entries from public/sitemap.xml — is it the generated format?');

if (urlsArg && (all || since)) {
  fail('--urls selects the list itself — do not combine it with --all or --since.');
}

/**
 * Explicit list mode. Accepts "/about" or the full "https://godhans.com/about";
 * either way it must be a URL the sitemap already contains, so a path typo or a
 * page that was never built fails here rather than being submitted as a 404.
 */
let explicit = null;
if (urlsArg) {
  const byLoc = new Map(entries.map((e) => [e.loc, e]));
  const requested = urlsArg.split(',').map((s) => s.trim()).filter(Boolean);
  if (!requested.length) fail('--urls was given with no URLs.');
  const resolved = [];
  const unknown = [];
  for (const raw of requested) {
    const loc = raw.startsWith('http') ? raw : `${ORIGIN}${raw.startsWith('/') ? '' : '/'}${raw}`;
    const hit = byLoc.get(loc) ?? byLoc.get(loc.replace(/\/$/, ''));
    if (hit) resolved.push(hit);
    else unknown.push(`${raw}  ->  ${loc}`);
  }
  if (unknown.length) {
    fail(`these --urls are not in public/sitemap.xml:\n  ${unknown.join('\n  ')}\n\nRun a build first, or fix the path.`);
  }
  explicit = resolved;
}

let cutoff = null;
if (since && !all && !explicit) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(since)) fail(`--since must be YYYY-MM-DD, got "${since}"`);
  cutoff = since;
}

// ── content fingerprints ────────────────────────────────────────────────────

/**
 * Content fingerprints come from scripts/lib/content-fingerprint.mjs.
 *
 * They used to be defined here. They moved because scripts/stamp-sitemap.mjs
 * needs the same answer to the same question -- "did this prerendered page
 * change?" -- to decide which URLs get today's <lastmod>. Two implementations
 * of that would eventually disagree, and a sitemap that contradicts the
 * re-crawl pings is worse than either alone. The rules, and the reasoning
 * behind each normalisation, are documented in that module.
 */

/** The dist/ file that a sitemap <loc> was rendered to. */
const distFileFor = (loc) => {
  const slug = loc === `${ORIGIN}/` || loc === ORIGIN ? 'index' : loc.slice(ORIGIN.length + 1);
  return path.join(DIST, `${slug}.html`);
};

/** Fingerprint every sitemap URL from the current build. */
function fingerprintBuild() {
  if (!fs.existsSync(DIST)) {
    fail('dist/ not found — the default selects on rendered content, so run `npm run build` first.\nTo select by date instead: --since=YYYY-MM-DD. To force: --all.');
  }
  const prints = {};
  const missing = [];
  for (const e of entries) {
    const file = distFileFor(e.loc);
    if (!fs.existsSync(file)) {
      missing.push(`${e.loc}  ->  ${path.relative(ROOT, file)}`);
      continue;
    }
    prints[e.loc] = contentFingerprint(fs.readFileSync(file, 'utf8'));
  }
  if (missing.length) {
    fail(`these sitemap URLs have no prerendered file in dist/:\n  ${missing.join('\n  ')}\n\ndist/ is stale or the build failed — rebuild before submitting.`);
  }
  return prints;
}

let prints = null;
let changedReason = null;
let contentSelected = null;

if (!explicit && !all && !cutoff) {
  prints = fingerprintBuild();
  const previous = fs.existsSync(CONTENT_STATE)
    ? JSON.parse(fs.readFileSync(CONTENT_STATE, 'utf8')).fingerprints ?? {}
    : {};
  const firstRun = !Object.keys(previous).length;
  contentSelected = entries.filter((e) => previous[e.loc] !== prints[e.loc]);
  changedReason = firstRun
    ? 'no previous fingerprints recorded — treating every URL as changed'
    : `${contentSelected.length} of ${entries.length} URL(s) read differently than at the last submission`;
  if (firstRun) {
    console.log(
      `[indexnow] ${CONTENT_STATE.replace(ROOT + path.sep, '')} is missing or empty.\n` +
        '           Run once with --dry-run to write a baseline without submitting.',
    );
  }
}

// lastmod is YYYY-MM-DD, so a string compare is a date compare.
let selected = explicit ?? contentSelected ?? entries.filter((e) => all || e.lastmod >= cutoff);

// The A/B control is removed from EVERY selection mode, including --all and an
// explicit --urls that names it: the one thing no ship has ever wanted is to
// ping that page. --include-ab-control is the deliberate override.
if (!includeAbControl) {
  const before = selected.length;
  selected = selected.filter((e) => e.loc !== AB_CONTROL);
  if (selected.length !== before) {
    console.log(`[indexnow] EXCLUDED the live A/B control: ${AB_CONTROL}`);
    console.log('           Pinging one arm and not the other is a change to the experiment.');
    console.log('           Pass --include-ab-control once the test has ended (and delete AB_CONTROL).');
  }
}

// A URL that is not on the canonical apex host would be silently dropped by the
// endpoint, so refuse rather than half-submit.
const offHost = selected.filter((e) => !e.loc.startsWith(`${ORIGIN}/`) && e.loc !== `${ORIGIN}/`);
if (offHost.length) {
  fail(`these sitemap URLs are not on ${ORIGIN}:\n  ${offHost.map((e) => e.loc).join('\n  ')}`);
}

console.log(`[indexnow] sitemap has ${entries.length} URLs`);
if (explicit) console.log(`[indexnow] --urls: submitting ${explicit.length} explicitly named URL(s)`);
else if (all) console.log('[indexnow] --all: submitting every URL');
else if (cutoff) console.log(`[indexnow] --since: selecting lastmod >= ${cutoff}`);
else console.log(`[indexnow] selecting by rendered content — ${changedReason}`);
console.log(`[indexnow] ${selected.length} URL(s) selected:`);
for (const e of selected) console.log(`             ${e.lastmod}  ${e.loc}`);

if (!selected.length) {
  if (contentSelected) {
    // This is the designed outcome of a common-mode ship, not a problem to
    // route around. Say so plainly so nobody reaches for --all out of reflex.
    console.log(
      '\n[indexnow] Nothing to submit: no page reads any differently than it did at the\n' +
        '           last submission. A ship that only changes fonts, bundles, asset\n' +
        '           hashes or comments is expected to land here — IndexNow is a\n' +
        '           "this page changed, re-crawl it" ping and there is nothing to\n' +
        '           re-crawl. Sending one anyway is how a host gets de-prioritised.\n' +
        '\n           If you believe content DID change, dist/ is probably stale —\n' +
        '           rebuild and re-run before reaching for --all.\n',
    );
  } else {
    console.log('\n[indexnow] nothing to submit. Use --all to force, or --since=YYYY-MM-DD.\n');
  }
  // Still record the baseline, so the next run compares against this deploy.
  if (prints && !dryRun) writeContentState(prints);
  process.exit(0);
}
if (selected.length > MAX_URLS) fail(`${selected.length} URLs exceeds the ${MAX_URLS}-per-batch limit`);

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `${ORIGIN}/${KEY}.txt`,
  urlList: selected.map((e) => e.loc),
};

/**
 * Record what every URL reads like right now, so the next run can tell a real
 * edit from another hash rotation.
 *
 * Written for ALL sitemap URLs, not just the submitted ones: this file answers
 * "what did production look like when we last reconciled", which is a different
 * question from "what did we ping". The A/B control in particular is never
 * submitted but still needs its fingerprint tracked, or it would be reported as
 * changed forever.
 */
function writeContentState(fingerprints) {
  const body = {
    _comment:
      'Fingerprints of each URL\'s rendered content at the last `npm run indexnow`. ' +
      'Generated — do not hand-edit. Asset hashes, the SSG hash, comments and whitespace ' +
      'are normalised out, so a font/bundle/comment-only ship leaves these unchanged and ' +
      'submits nothing. COMMIT THIS FILE: without it a fresh clone has no baseline and the ' +
      'next run would submit every URL. See the header of scripts/indexnow.mjs.',
    updated: new Date().toISOString().slice(0, 10),
    fingerprints,
  };
  fs.writeFileSync(CONTENT_STATE, JSON.stringify(body, null, 2) + '\n');
  console.log(`[indexnow] wrote ${path.relative(ROOT, CONTENT_STATE)} — commit it.`);
}

if (dryRun) {
  console.log('\n[indexnow] --dry-run: nothing sent. Payload would be:\n');
  console.log(JSON.stringify(payload, null, 2));
  if (prints) {
    console.log(
      `\n[indexnow] --dry-run: ${path.relative(ROOT, CONTENT_STATE)} NOT updated. Re-run without\n` +
        '           --dry-run to submit and record, or pass --write-state to record only.\n',
    );
    if (has('--write-state')) writeContentState(prints);
  }
  process.exit(0);
}

// ── submit ──────────────────────────────────────────────────────────────────

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});
const body = await res.text();

// 200 accepted · 202 accepted, key validation pending · 400 bad request
// 403 key not valid · 422 URLs don't match the host / key · 429 too many requests
if (res.ok) {
  console.log(`\n[indexnow] HTTP ${res.status} — ${selected.length} URL(s) accepted.${body ? ` Response: ${body}` : ''}`);
  // Only after the endpoint has actually accepted them: a failed submission
  // must leave the baseline alone, or the pages we meant to ping would look
  // unchanged on the retry and be silently skipped.
  if (prints) writeContentState(prints);
  console.log('');
} else {
  console.error(`\n[indexnow] HTTP ${res.status} — submission REJECTED.${body ? ` Response: ${body}` : ''}`);
  if (res.status === 403) {
    console.error(`[indexnow] 403 means the endpoint could not verify the key. Confirm ${ORIGIN}/${KEY}.txt is live and returns exactly the key.`);
  }
  console.error('');
  process.exit(1);
}
