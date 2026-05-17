import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// @ts-ignore — no bundled types for vite-plugin-prerender
import vitePrerender from "vite-plugin-prerender";

const PRERENDER_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/tree-removal-jacksonville-nc",
  "/tree-trimming-jacksonville-nc",
  "/stump-grinding-jacksonville-nc",
  "/emergency-tree-service-jacksonville-nc",
  "/tree-service-jacksonville-nc",
  "/tree-service-richlands-nc",
  "/tree-service-swansboro-nc",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      vitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes: PRERENDER_ROUTES,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
