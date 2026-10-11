/**
 * ARM GUARD — fails the build if the live A/B test's arms move.
 *
 * ── WHY THIS EXISTS ────────────────────────────────────────────────────────
 *
 * /tree-removal-cost-north-carolina (treatment) and
 * /stump-grinding-jacksonville-nc (control) are the two arms of a live A/B
 * test running to 2026-12-01. A change to either one invalidates the
 * comparison — and so does a change to what LINKS AT either one, which is the
 * part that keeps catching people out:
 *
 *   • Ship A changed the arms' inbound link profiles asymmetrically
 *     (treatment 7→13 editorial, control 7→9) while being entirely
 *     instruction-compliant, because the rule excluded the arms as link
 *     SOURCES and said nothing about them as link TARGETS. Nobody noticed
 *     until the ship record was written.
 *   • Ship D then added two links to the treatment from the storm guide.
 *   • Ship E added one from the Maysville city job.
 *
 * The last two were caught by running this logic by hand from a scratchpad.
 * That is not a mechanism, it is a habit — so this is the mechanism. The
 * obvious editorial target for "what does this cost" is the cost page, which
 * means this error will keep presenting itself until the test ends.
 *
 * ── WHAT IT CHECKS ─────────────────────────────────────────────────────────
 *
 * Against the committed baseline in scripts/arm-baseline.json, for each arm:
 *
 *   1. the rendered HTML, normalised (see `normalise`) and whitespace-collapsed
 *   2. inbound EDITORIAL link count
 *   3. inbound TOTAL link count
 *
 * Any difference fails the build with a non-zero exit.
 *
 * ── HOW TO SHIP A DELIBERATE CHANGE ────────────────────────────────────────
 *
 *   npm run check-arms -- --allow-treatment-change    (then commit the baseline)
 *   npm run check-arms -- --allow-control-change
 *   npm run check-arms -- --allow-links-change
 *
 * Each flag permits exactly one category and rewrites that part of the
 * baseline. They are separate on purpose: "I meant to edit the treatment" and
 * "I meant to change what links at it" are different intentions, and a single
 * --force would let the second hide inside the first.
 *
 * THE CONTROL FLAG SHOULD ALMOST NEVER BE USED. DECISIONS.md holds the stump
 * page until 2026-11-01, and when that edit happens it needs its own ships/
 * record with a to-the-minute UTC serve time — Ricky's 2026-12-01 read depends
 * on it. If you are reaching for --allow-control-change, go and read that
 * ruling first.
 *
 * ── AFTER 2026-12-01 ───────────────────────────────────────────────────────
 *
 * The test ends. At that point this guard is obsolete and should be deleted
 * rather than left to rot into a thing people pass flags to without thinking.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const BASELINE = path.join(ROOT, 'scripts', 'arm-baseline.json');

/** The two arms. Slug -> human label used in output. */
const ARMS = {
  'tree-removal-cost-north-carolina': 'treatment',
  'stump-grinding-jacksonville-nc': 'control',
};

/**
 * The only three differences a content-free rebuild is allowed to produce:
 * the hashed asset filenames, the SSG hash, and the loader-manifest name.
 * Everything else is a real change. Keep this in step with the identical
 * normaliser in scripts/lib/content-fingerprint.mjs if that one moves.
 */
const normalise = (html) =>
  html
    .replace(/\/assets\/app-[A-Za-z0-9_-]+\.js/g, '/assets/app-HASH.js')
    .replace(/\/assets\/[A-Za-z0-9_.-]+-[A-Za-z0-9_-]{8,}\.(js|css)/g, '/assets/BUNDLE-HASH.$1')
    .replace(/__VITE_REACT_SSG_HASH__\s*=\s*["'][^"']*["']/g, '__VITE_REACT_SSG_HASH__="HASH"')
    .replace(/static-loader-data-manifest-[A-Za-z0-9_-]+\.json/g, 'static-loader-data-manifest-HASH.json');

/** Whitespace-collapsed, so a reflowed template is not reported as a content change. */
const collapse = (html) => normalise(html).replace(/>\s+</g, '><').replace(/\s+/g, ' ').trim();

const fingerprint = (html) =>
  crypto.createHash('sha256').update(collapse(html), 'utf8').digest('hex').slice(0, 16);

/**
 * Link containers every ServicePage emits regardless of the page's own
 * content. A link in one of these is templated, not editorial.
 */
const TEMPLATED_MARKERS = [
  '>Other Services We Offer<',
  '>Tree Service in Jacksonville, NC<',
  '>Serving Jacksonville and Surrounding Areas<',
  'Want to hear it from our customers first?',
  '>Other Cities We Serve<',
  'Request a Quick Quote',
  'Why Choose Godhans',
];

/**
 * /404 is hand-built rather than ServicePage-backed, so its links are not in a
 * <section> and are a recovery menu rather than an editorial recommendation.
 * Ship A's record counts them in "total" and excludes them from "editorial";
 * this set is what reproduces that record's 13/23 and 9/23 exactly.
 */
const NON_EDITORIAL_SOURCES = new Set(['/404']);

/** Split a chunk into top-level <section> blocks, depth-aware. */
function sections(html) {
  const out = [];
  const open = /<section\b/gi;
  let m;
  while ((m = open.exec(html))) {
    let depth = 0;
    const tag = /<\/?section\b/gi;
    tag.lastIndex = m.index;
    let t;
    while ((t = tag.exec(html))) {
      depth += t[0][1] === '/' ? -1 : 1;
      if (depth === 0) {
        out.push(html.slice(m.index, t.index + 10));
        open.lastIndex = t.index;
        break;
      }
    }
    if (depth !== 0) break;
  }
  return out;
}

const anchors = (chunk) =>
  [...chunk.matchAll(/<a\b[^>]*\bhref=["']([^"'#]+)["'][^>]*>/gi)].map((m) => m[1]);

/**
 * Inbound link counts for the two arms, counted across the whole build.
 *
 * `total` counts every anchor inside <main>, section-structured or not —
 * counting only sections silently dropped /404 and read the treatment at 22
 * against the record's 23. One entry per anchor, so two links from the same
 * page to the same target count twice, which is what "total inbound" has meant
 * in every ship record.
 */
function inboundCounts() {
  const counts = {};
  for (const slug of Object.keys(ARMS)) counts[slug] = { editorial: 0, total: 0 };

  for (const file of fs.readdirSync(DIST).filter((f) => f.endsWith('.html'))) {
    const sourceSlug = '/' + file.replace(/\.html$/, '');
    const html = fs.readFileSync(path.join(DIST, file), 'utf8');
    const main = html.match(/<main\b[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? '';

    for (const href of anchors(main)) {
      const target = href.replace(/^\//, '').replace(/\/$/, '');
      if (counts[target]) counts[target].total++;
    }

    if (NON_EDITORIAL_SOURCES.has(sourceSlug)) continue;
    for (const sec of sections(main)) {
      if (TEMPLATED_MARKERS.some((mk) => sec.includes(mk))) continue;
      for (const href of anchors(sec)) {
        const target = href.replace(/^\//, '').replace(/\/$/, '');
        if (counts[target]) counts[target].editorial++;
      }
    }
  }
  return counts;
}

function measure() {
  const counts = inboundCounts();
  const out = {};
  for (const [slug, label] of Object.entries(ARMS)) {
    const file = path.join(DIST, `${slug}.html`);
    if (!fs.existsSync(file)) {
      console.error(`[check-arms] FAIL: ${slug}.html is not in dist/. Did the build emit it?`);
      process.exit(1);
    }
    out[slug] = {
      label,
      fingerprint: fingerprint(fs.readFileSync(file, 'utf8')),
      editorialInbound: counts[slug].editorial,
      totalInbound: counts[slug].total,
    };
  }
  return out;
}

const argv = process.argv.slice(2);
const allow = {
  treatment: argv.includes('--allow-treatment-change'),
  control: argv.includes('--allow-control-change'),
  links: argv.includes('--allow-links-change'),
};
const seed = argv.includes('--seed');

const current = measure();

if (seed || !fs.existsSync(BASELINE)) {
  fs.writeFileSync(BASELINE, JSON.stringify(current, null, 2) + '\n', 'utf8');
  console.log('[check-arms] baseline written to scripts/arm-baseline.json — COMMIT IT.');
  for (const [slug, a] of Object.entries(current)) {
    console.log(`             ${a.label.padEnd(9)} ${slug}  ${a.fingerprint}  inbound ${a.editorialInbound} editorial / ${a.totalInbound} total`);
  }
  process.exit(0);
}

const baseline = JSON.parse(fs.readFileSync(BASELINE, 'utf8'));
const failures = [];
const permitted = [];

for (const [slug, now] of Object.entries(current)) {
  const was = baseline[slug];
  if (!was) {
    failures.push(`${slug}: no baseline entry. Re-seed with --seed and commit.`);
    continue;
  }

  if (now.fingerprint !== was.fingerprint) {
    const flag = now.label === 'treatment' ? allow.treatment : allow.control;
    const msg =
      `${now.label} /${slug} RENDERED HTML CHANGED — ${was.fingerprint} -> ${now.fingerprint}`;
    (flag ? permitted : failures).push(
      flag ? msg + ' (permitted by flag)' : msg + `\n      pass --allow-${now.label}-change if this is deliberate`
    );
  }

  if (now.editorialInbound !== was.editorialInbound || now.totalInbound !== was.totalInbound) {
    const msg =
      `${now.label} /${slug} INBOUND LINKS CHANGED — editorial ${was.editorialInbound} -> ${now.editorialInbound}, ` +
      `total ${was.totalInbound} -> ${now.totalInbound}`;
    (allow.links ? permitted : failures).push(
      allow.links ? msg + ' (permitted by flag)' : msg + '\n      pass --allow-links-change if this is deliberate'
    );
  }
}

for (const p of permitted) console.log(`[check-arms] PERMITTED: ${p}`);

if (failures.length) {
  console.error('\n[check-arms] BUILD FAILED — the live A/B test arms moved.\n');
  for (const f of failures) console.error(`  ✗ ${f}`);
  console.error(
    '\n  Both arms are frozen until the test reads out on 2026-12-01.\n' +
      '  The usual cause is a new link pointing AT one of them — the cost page is\n' +
      '  the natural target for any "what does this cost" anchor, and it is the one\n' +
      '  page you cannot link to right now. Point it at\n' +
      '  /tree-removal-near-house-jacksonville-nc or /tree-removal-jacksonville-nc\n' +
      '  instead, both of which carry the same argument.\n\n' +
      '  If the change IS deliberate, re-run with the matching flag and commit the\n' +
      '  updated scripts/arm-baseline.json as part of the same ship.\n'
  );
  process.exit(1);
}

if (permitted.length) {
  fs.writeFileSync(BASELINE, JSON.stringify(current, null, 2) + '\n', 'utf8');
  console.log('[check-arms] baseline updated — COMMIT scripts/arm-baseline.json with this change.');
} else {
  const t = current['tree-removal-cost-north-carolina'];
  const c = current['stump-grinding-jacksonville-nc'];
  console.log(
    `[check-arms] both arms unchanged — treatment ${t.fingerprint} ${t.editorialInbound}/${t.totalInbound}, ` +
      `control ${c.fingerprint} ${c.editorialInbound}/${c.totalInbound}`
  );
}
