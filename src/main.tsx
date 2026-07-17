import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./index.css";

// Stale-chunk recovery: after a deploy, old lazy-route chunks are rehashed and
// purged, so a mid-session tab running the previous app bundle 404s when it
// dynamic-imports a route ("Failed to fetch dynamically imported module").
// Vite fires `vite:preloadError` on that failure — reload once to pick up the
// fresh asset manifest. A 10s guard prevents an infinite reload loop: if the
// reload re-errors immediately (a genuinely broken build, not a stale cache),
// we let the error surface instead of looping. Client-only — this file also
// runs during SSG prerender in Node, where `window` is undefined.
if (typeof window !== "undefined") {
  window.addEventListener("vite:preloadError", (event) => {
    const lastReload = Number(sessionStorage.getItem("vitePreloadReloadAt") || 0);
    if (Date.now() - lastReload < 10_000) return; // reloaded very recently — real failure, don't loop
    event.preventDefault(); // recover instead of throwing
    sessionStorage.setItem("vitePreloadReloadAt", String(Date.now()));
    window.location.reload();
  });
}

export const createRoot = ViteReactSSG({ routes });
