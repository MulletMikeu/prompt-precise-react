import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Type-only side-effect import: vite-react-ssg augments vite's UserConfig with
// `ssgOptions`, and TypeScript only loads that augmentation if the module is
// referenced here.
import type {} from "vite-react-ssg";

/**
 * Font faces to preload on specific routes only.
 *
 * index.html is copied into all 38 prerendered pages, so a `<link rel=preload>`
 * there is a site-wide, highest-priority fetch. That is right for Barlow
 * Condensed 700 (the <h1> on every route) and wrong for everything else: 800
 * used to sit beside it and is used on just two routes, so 36 pages were
 * downloading 22 KB of a face they never render, against the stylesheet and
 * against the face they did need.
 *
 * Why here rather than in the page's own Helmet, which is the obvious place:
 * react-helmet-async dedupes `<link rel="canonical">` but not
 * `<link rel="preload">`, and vite-react-ssg renders each page twice against a
 * single provider — so a preload declared in a page component lands in the
 * emitted HTML TWICE. Measured, not theorised. Doing it in the same
 * onPageRendered hook that already rewrites <head> gives exactly one tag, in a
 * known position, with no runtime dependency at all.
 *
 * Keys are the route paths vite-react-ssg passes to onPageRendered; both "/"
 * and "" are accepted for the index so this does not hinge on that detail.
 * A face listed for a route it does not need is a straight regression, so add
 * to this map only with an above-the-fold element to point at.
 */
const ROUTE_FONT_PRELOADS: Record<string, string[]> = {
  // The hero .text-display-2xl is the LCP element on the homepage and Barlow
  // Condensed 800 is the only face that renders it.
  "/": ["/fonts/barlow-condensed-800.woff2"],
};

/**
 * Insert this route's extra font preloads immediately BEFORE the shared
 * Condensed 700 preload in <head>, so the face that carries this page's LCP is
 * discovered first. Falls back to just after <head> if that tag ever moves, and
 * no-ops when the route has no entry — it must never be the reason a build
 * fails.
 */
function addRouteFontPreloads(route: string, html: string): string {
  const hrefs = ROUTE_FONT_PRELOADS[route] ?? ROUTE_FONT_PRELOADS[route === "" ? "/" : route];
  if (!hrefs?.length) return html;

  const tags = hrefs
    // Belt and braces: if index.html ever preloads one of these itself, do not
    // emit a second copy of it here.
    .filter((href) => !html.includes(`href="${href}"`))
    .map((href) => `<link rel="preload" as="font" type="font/woff2" href="${href}" crossorigin>`)
    .join("");
  if (!tags) return html;

  const anchor = /<link\s+rel="preload"\s+as="font"[^>]*>/i;
  if (anchor.test(html)) return html.replace(anchor, (tag) => tags + tag);
  return html.replace(/<head[^>]*>/i, (head) => head + tags);
}

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  // Baked at build time so the server pass and the client's first render agree.
  // Reading the clock during render instead makes the prerendered HTML and the
  // hydrating client disagree across a New Year boundary, which throws away the
  // server DOM and re-renders the page on the client.
  define: {
    __BUILD_YEAR__: new Date().getFullYear(),
  },
  ssgOptions: {
    // The `*` catch-all has no concrete path, so nothing crawls it and no
    // 404.html was emitted — unknown URLs fell through to Vercel's own 404 and
    // the NotFound component (and its noindex) never shipped. Naming /404
    // explicitly renders the catch-all to dist/404.html, which Vercel serves
    // automatically for unmatched paths.
    includedRoutes: (paths) => [...paths, "/404"],
    /**
     * Hoist <meta charset> (and viewport) to the top of <head>.
     *
     * react-helmet-async injects title/meta/canonical/JSON-LD at the START of
     * <head>, ahead of everything in index.html — which pushed <meta charset> to
     * byte ~4205, well past the 1024 bytes the HTML spec gives a browser to
     * detect encoding before it commits to a default. The homepage's JSON-LD
     * alone is 2.2 KB, and every JSON-LD block added later pushes it further.
     *
     * Rewriting the emitted HTML is the reliable fix: helmet's insertion point
     * is not configurable, and reordering index.html does not help because
     * helmet's output always lands first.
     */
    /**
     * Runs on every prerendered page, so everything it touches is multiplied by
     * 38 — and so is everything in index.html, which this rewrites a copy of.
     *
     * Related, and the reason this note is here rather than there: index.html
     * is kept COMMENT-FREE on purpose. Nothing in this pipeline strips HTML
     * comments (the CSS minifier strips the ones in index.css, and JSX
     * `{/* … *\/}` never reaches the output, which is what makes the shell the
     * easy place to get this wrong). The rationale for every tag in it lives in
     * docs/index-html.md. The 8-byte `<!-- -->` comments you will see in the
     * built HTML are React's text-node separators and are required for
     * hydration — not ours to remove.
     */
    onPageRendered: (route, html) => {
      let out = html;

      const HOIST = /\s*<meta\s+charset=["'][^"']*["']\s*\/?>|\s*<meta\s+name=["']viewport["'][^>]*>/gi;
      const found = out.match(HOIST);
      if (found) {
        // match() returns document order, and charset precedes viewport in
        // index.html — so charset stays first, which is the part that matters.
        out = out
          .replace(HOIST, "")
          .replace(/<head[^>]*>/i, (head) => head + found.map((t) => t.trim()).join(""));
      }

      return addRouteFontPreloads(route, out);
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // manualChunks only applies to the client build. During the
      // vite-react-ssg SSR pass react/react-dom are external, so naming them
      // in a manual chunk throws EXTERNAL_MODULES_CANNOT_BE_INCLUDED_IN_MANUAL_CHUNKS.
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            },
          },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
