import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Type-only side-effect import: vite-react-ssg augments vite's UserConfig with
// `ssgOptions`, and TypeScript only loads that augmentation if the module is
// referenced here.
import type {} from "vite-react-ssg";

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
    onPageRendered: (_route, html) => {
      const HOIST = /\s*<meta\s+charset=["'][^"']*["']\s*\/?>|\s*<meta\s+name=["']viewport["'][^>]*>/gi;
      const found = html.match(HOIST);
      if (!found) return html;
      // match() returns document order, and charset precedes viewport in
      // index.html — so charset stays first, which is the part that matters.
      return html
        .replace(HOIST, "")
        .replace(/<head[^>]*>/i, (head) => head + found.map((t) => t.trim()).join(""));
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
