/**
 * "Did this prerendered page change?" -- one answer, two consumers.
 *
 * scripts/indexnow.mjs asks it to decide which URLs are worth a re-crawl ping.
 * scripts/stamp-sitemap.mjs asks it to decide which URLs get today's <lastmod>.
 * Those must never disagree, so the rules live here and both import them.
 *
 * ── WHAT IS NORMALISED AWAY, AND WHY ────────────────────────────────────────
 *
 * A deploy rotates the asset filenames, the SSG hash and the loader-data
 * manifest name on every build whether or not a word changed, and a font or
 * bundle change rotates them without touching a single page's text. Comments go
 * too -- they are never read by a visitor, and the one time index.html's
 * comments changed it rewrote 2.6 KB on all 38 pages for no editorial reason.
 * Whitespace collapses because the prerenderer is free to move it.
 *
 * Comments are replaced with a SPACE rather than deleted, so that stripping
 * React's `<!-- -->` text-node separators cannot weld two words into one and
 * hide a real edit behind a false match.
 *
 * Resource hints and bundle wiring go too -- `<link rel=preload|modulepreload|
 * prefetch|preconnect|dns-prefetch>`, the stylesheet link, and the entry
 * `<script type=module>`. These describe how a page LOADS, never what it says,
 * and normalising only their hashed filenames is not enough: moving one preload
 * tag off 36 pages is a pure speed change that would otherwise have looked like
 * 36 content edits. This was measured, not assumed -- without this rule the font
 * ship selected 37 of 37 URLs, which is the exact false positive this whole
 * mechanism exists to stop.
 *
 * Deliberately KEPT, because a crawler does read them and a change to one is
 * worth a re-crawl: `rel=canonical`, `rel=alternate`, `rel=icon`,
 * `rel=manifest`, every `<meta>`, the JSON-LD blocks, and all body markup.
 *
 * What survives is the text, the semantic markup and the metadata -- i.e. what
 * a crawler would come back for.
 */
import crypto from 'node:crypto';

export const RESOURCE_HINT = /<link\b[^>]*\brel=["'](?:preload|modulepreload|prefetch|preconnect|dns-prefetch|stylesheet)["'][^>]*>/gi;
export const ENTRY_SCRIPT = /<script\b[^>]*\btype=["']module["'][^>]*\bsrc=["']\/assets\/[^"']*["'][^>]*>\s*<\/script>/gi;
export const HYDRATION_DATA = /<script>window\.__staticRouterHydrationData = JSON\.parse\("((?:[^"\\]|\\.)*)"\);?<\/script>/g;

/**
 * react-router's hydration payload is routing plumbing, and its SHAPE moves for
 * reasons that have nothing to do with content: making the homepage a lazy
 * route rather than an eager one turned `{"0":null}` into `{"0":null,"0-0":null}`
 * and nothing else on the page changed at all.
 *
 * But it is only safely ignorable while it carries no data. Every loaderData
 * value on this site is null -- no route returns anything the page renders -- so
 * this collapses it ONLY in that case, and leaves the payload in the
 * fingerprint the moment a loader starts returning something real. A parse
 * failure also leaves it alone. Conservative in both directions: it can cost a
 * false positive, never a missed edit.
 */
export const collapseHydrationData = (html) =>
  html.replace(HYDRATION_DATA, (whole, literal) => {
    try {
      const data = JSON.parse(JSON.parse(`"${literal}"`));
      const loaderData = data?.loaderData ?? {};
      const allNull = Object.values(loaderData).every((v) => v === null);
      const noErrors = data?.errors == null && data?.actionData == null;
      return allNull && noErrors ? '<script>__hydrationData(empty)</script>' : whole;
    } catch {
      return whole;
    }
  });

/** The normalised text a fingerprint is taken over. Exported for debugging. */
export const normaliseForFingerprint = (html) =>
  collapseHydrationData(html)
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(RESOURCE_HINT, '')
    .replace(ENTRY_SCRIPT, '')
    .replace(/\/assets\/[A-Za-z0-9_.\-]+-[A-Za-z0-9_\-]{8}\.[a-z0-9]+/gi, '/assets/<hashed>')
    .replace(/__VITE_REACT_SSG_HASH__\s*=\s*'[^']*'/g, '__VITE_REACT_SSG_HASH__')
    .replace(/static-loader-data-manifest-[a-z0-9]+\.json/g, 'static-loader-data-manifest.json')
    .replace(/>\s+</g, '><')
    .replace(/\s+/g, ' ')
    .trim();

export const contentFingerprint = (html) =>
  crypto.createHash('sha256').update(normaliseForFingerprint(html)).digest('hex');
