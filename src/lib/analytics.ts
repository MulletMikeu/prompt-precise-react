/**
 * GA4, loaded so it cannot cost a PageSpeed point.
 *
 * Analytics was removed from this site once before because it hurt the
 * PageSpeed score. The constraints that keep that from happening again:
 *
 *  1. NOTHING loads unless VITE_GA_MEASUREMENT_ID is set. Vite inlines that
 *     value at build time, so with the variable absent `ENABLED` is a literal
 *     false, every guard below short-circuits, and no listener is registered and
 *     no request is made. Adding the ID in Vercel and redeploying turns it on.
 *  2. The gtag.js <script> is never in <head> and never blocks anything. It is
 *     appended by JS, async, and only after BOTH of these:
 *       - the window `load` event has fired, so it cannot compete with any
 *         render-critical resource or land inside the Lighthouse trace window
 *         that TBT is measured over, and
 *       - the first of requestIdleCallback (4000ms timeout) or a real user
 *         interaction (scroll / pointerdown / keydown / touchstart).
 *     A Lighthouse run never interacts and never scrolls, so in a lab test the
 *     idle callback is what fires — well after the metrics have settled.
 *  3. It loads exactly once, whatever fires first.
 *  4. Measurement is not delayed with the script. The dataLayer shim and the
 *     click delegation install immediately (both are microseconds and make no
 *     network request), so a tel: tap or a form submit in the first second is
 *     queued on window.dataLayer and replayed in order when gtag.js arrives.
 *     Nothing is lost while we wait.
 *
 * page_view is sent by us rather than by gtag's own config
 * (`send_page_view: false`). This is a prerendered SPA: gtag.js would otherwise
 * report one page_view for whatever URL happened to be current whenever the
 * deferred script finished loading, and nothing at all for client-side
 * navigations. Sending them explicitly keeps the path accurate and counts every
 * route change.
 */

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
// `!!` rather than Boolean(): Vite inlines the env value literally, so with the
// variable unset this is `!!undefined`, which esbuild constant-folds to false
// and then eliminates every guarded body below as dead code. Boolean() is a
// global call the minifier cannot assume is unshadowed, so it does not fold and
// the whole module survives into the bundle as unreachable bytes.
const ENABLED = !!MEASUREMENT_ID;

/** Idle deadline. Past this we load anyway, interaction or not. */
const IDLE_TIMEOUT_MS = 4000;

/** True only in a browser with a measurement ID configured. */
export const analyticsEnabled = ENABLED;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let installed = false;
let scriptRequested = false;

/**
 * The canonical gtag shim, pushing the live `arguments` object exactly as
 * Google's own snippet does — gtag.js replays these on load, and this is the
 * shape it is documented to replay.
 */
function installDataLayer() {
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, {
    // We send page_view ourselves — see the module comment.
    send_page_view: false,
  });
}

/** Append the async gtag.js tag. Idempotent. */
function loadGtagScript() {
  if (scriptRequested) return;
  scriptRequested = true;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

/** Run `cb` on the first of: browser idle (capped at 4s) or a user interaction. */
function onIdleOrFirstInteraction(cb: () => void) {
  const INTERACTIONS = ['scroll', 'pointerdown', 'keydown', 'touchstart'] as const;
  const listenerOpts: AddEventListenerOptions = { passive: true };

  let idleHandle: number | undefined;
  let timerHandle: ReturnType<typeof setTimeout> | undefined;
  let fired = false;

  const run = () => {
    if (fired) return;
    fired = true;
    for (const type of INTERACTIONS) window.removeEventListener(type, run, listenerOpts);
    if (idleHandle !== undefined && typeof cancelIdleCallback === 'function') {
      cancelIdleCallback(idleHandle);
    }
    if (timerHandle !== undefined) clearTimeout(timerHandle);
    cb();
  };

  for (const type of INTERACTIONS) window.addEventListener(type, run, listenerOpts);

  if (typeof requestIdleCallback === 'function') {
    idleHandle = requestIdleCallback(run, { timeout: IDLE_TIMEOUT_MS });
  } else {
    // Safari < 18.4 has no requestIdleCallback; the timeout alone is the floor.
    timerHandle = setTimeout(run, IDLE_TIMEOUT_MS);
  }
}

/**
 * Delegated click tracking for every tel: link on the site — one handler
 * instead of touching the eight components that render phone numbers, so a new
 * call button is instrumented the moment it is added.
 *
 * Capture phase, so it still fires if something downstream stops propagation.
 */
function installCallTracking() {
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest('a[href^="tel:"]');
      if (!link) return;
      trackEvent('click_to_call', {
        link_url: link.getAttribute('href'),
        link_text: link.textContent?.trim().slice(0, 100),
        page_path: window.location.pathname,
      });
    },
    { capture: true, passive: true },
  );
}

/**
 * Call once, from a client effect. Installs measurement immediately and
 * schedules the script for after load + idle/interaction.
 */
export function initAnalytics() {
  if (!ENABLED || typeof window === 'undefined' || installed) return;
  installed = true;

  installDataLayer();
  installCallTracking();

  const arm = () => onIdleOrFirstInteraction(loadGtagScript);
  if (document.readyState === 'complete') {
    arm();
  } else {
    window.addEventListener('load', arm, { once: true });
  }
}

/** Queue a GA4 event. Safe to call before gtag.js has loaded, and when disabled. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!ENABLED || typeof window === 'undefined') return;
  installDataLayer();
  window.gtag!('event', name, params);
}

/** Queue a page_view. Called for the initial route and every navigation. */
export function trackPageView(path: string) {
  if (!ENABLED || typeof window === 'undefined') return;
  installDataLayer();
  window.gtag!('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
