/// <reference types="vite/client" />

/** Year the bundle was built, injected by `define` in vite.config.ts. */
declare const __BUILD_YEAR__: number;

interface ImportMetaEnv {
  /**
   * GA4 measurement ID, e.g. "G-XXXXXXXXXX". Optional and unset by default:
   * with no value, src/lib/analytics.ts loads nothing and registers nothing.
   * Set it in the Vercel project's environment variables to switch analytics
   * on. Inlined at build time, so a change needs a redeploy.
   */
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
