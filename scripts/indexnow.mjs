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
 *   npm run indexnow                   # URLs whose lastmod is within 7 days
 *   npm run indexnow -- --since=2026-09-01
 *   npm run indexnow -- --all          # every URL in the sitemap
 *   npm run indexnow -- --urls=/about,/reviews
 *
 * ── WHY --urls EXISTS ───────────────────────────────────────────────────────
 *
 * The lastmod window is the right default, but it over-selects whenever a
 * change lands in a module every page imports — siteData.ts, BusinessSchema,
 * ServicePage. gen-sitemap walks each route's local imports and takes the
 * newest commit date, so touching siteData restamps all 38 URLs with the same
 * day and the 7-day window then submits the entire site. That is true of the
 * dates and useless as a signal: IndexNow is a "this page changed, re-crawl
 * it" ping, and spending it on 38 URLs when a dozen have new content is how a
 * host gets de-prioritised for crying wolf.
 *
 * So --urls takes an explicit comma-separated list of paths (or absolute URLs)
 * and submits exactly those, bypassing the sitemap selection entirely. Use it
 * after a batch that edits shared code: pass the pages whose *content* actually
 * changed. The paths are still validated against the sitemap, so a typo fails
 * loudly instead of pinging a 404.
 *
 * Google does not participate in IndexNow and ignores it; it discovers changes
 * from the sitemap's lastmod instead. Both halves matter.
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const ORIGIN = 'https://godhans.com';
const HOST = 'godhans.com';
const KEY = 'd396d4a5f3a988583540ed67906b8575';
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const DEFAULT_WINDOW_DAYS = 7;
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
if (!all && !explicit) {
  if (since) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(since)) fail(`--since must be YYYY-MM-DD, got "${since}"`);
    cutoff = since;
  } else {
    const d = new Date();
    d.setUTCDate(d.getUTCDate() - DEFAULT_WINDOW_DAYS);
    cutoff = d.toISOString().slice(0, 10);
  }
}

// lastmod is YYYY-MM-DD, so a string compare is a date compare.
const selected = explicit ?? entries.filter((e) => all || e.lastmod >= cutoff);

// A URL that is not on the canonical apex host would be silently dropped by the
// endpoint, so refuse rather than half-submit.
const offHost = selected.filter((e) => !e.loc.startsWith(`${ORIGIN}/`) && e.loc !== `${ORIGIN}/`);
if (offHost.length) {
  fail(`these sitemap URLs are not on ${ORIGIN}:\n  ${offHost.map((e) => e.loc).join('\n  ')}`);
}

console.log(`[indexnow] sitemap has ${entries.length} URLs`);
if (explicit) console.log(`[indexnow] --urls: submitting ${explicit.length} explicitly named URL(s)`);
else console.log(all ? '[indexnow] --all: submitting every URL' : `[indexnow] selecting lastmod >= ${cutoff}`);
console.log(`[indexnow] ${selected.length} URL(s) selected:`);
for (const e of selected) console.log(`             ${e.lastmod}  ${e.loc}`);

if (!selected.length) {
  console.log('\n[indexnow] nothing to submit. Use --all to force, or --since=YYYY-MM-DD.\n');
  process.exit(0);
}
if (selected.length > MAX_URLS) fail(`${selected.length} URLs exceeds the ${MAX_URLS}-per-batch limit`);

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `${ORIGIN}/${KEY}.txt`,
  urlList: selected.map((e) => e.loc),
};

if (dryRun) {
  console.log('\n[indexnow] --dry-run: nothing sent. Payload would be:\n');
  console.log(JSON.stringify(payload, null, 2));
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
  console.log(`\n[indexnow] HTTP ${res.status} — ${selected.length} URL(s) accepted.${body ? ` Response: ${body}` : ''}\n`);
} else {
  console.error(`\n[indexnow] HTTP ${res.status} — submission REJECTED.${body ? ` Response: ${body}` : ''}`);
  if (res.status === 403) {
    console.error(`[indexnow] 403 means the endpoint could not verify the key. Confirm ${ORIGIN}/${KEY}.txt is live and returns exactly the key.`);
  }
  console.error('');
  process.exit(1);
}
