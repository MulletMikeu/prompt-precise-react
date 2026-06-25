import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
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
