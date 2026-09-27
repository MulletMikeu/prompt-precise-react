# Godhans Tree Company — Website

Marketing site for [Godhans Tree Company](https://godhans.com), a veteran-owned
tree service in Jacksonville, NC (Onslow County). Service, location, and blog
pages are statically pre-rendered for SEO and speed.

## Tech stack

- **React 18** + **TypeScript**
- **Vite** with **[vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg)** — every route is crawled and pre-rendered to static HTML at build time
- **Tailwind CSS**
- **react-router-dom** for routing (routes are defined in `src/App.tsx`)
- **@formspree/react** for the quote/contact form
- Deployed on **Vercel** (config in `vercel.json`)

## Local development

```sh
npm install
npm run dev      # start the dev server
npm run build    # production build (pre-renders all routes to /dist)
npm run preview  # serve the built site locally
npm run lint     # eslint
npm run sitemap  # regenerate public/sitemap.xml (also runs in prebuild)
npm run indexnow # submit changed URLs to IndexNow — AFTER a prod deploy, see below
```

## Project layout

```
src/
  App.tsx              # route table (each path is lazily imported)
  pages/               # one component per route
    ServicePage.tsx    # shared template behind most service pages
    LocationPage.tsx   # shared template behind the smaller city pages
  components/          # Navbar, Footer, Hero, homepage sections, etc.
  data/siteData.ts     # business info (phone, address, services, reviews, …)
  lib/constants.ts     # derived business constants
  lib/analytics.ts     # GA4 loader (off unless VITE_GA_MEASUREMENT_ID is set)
scripts/
  gen-images.mjs       # responsive image variants (prebuild)
  gen-sitemap.mjs      # sitemap.xml with per-route lastmod from git (prebuild)
  indexnow.mjs         # IndexNow submission (manual, post-deploy)
public/                # static assets (images, favicons, og-image, robots, llms.txt)
                       # sitemap.xml here is GENERATED — do not hand-edit
```

## Content editing

Most business details (phone, address, services, service area, reviews) live in
`src/data/siteData.ts`. Page copy lives in the corresponding file under
`src/pages/`. Images go in `public/images/` and are referenced by absolute path.

### Review count

`BUSINESS.reviewCount` in `src/data/siteData.ts` is the only place the number
lives. Update it there when the Google total moves and every one of these
follows automatically — do not retype it anywhere:

| Where it appears | File |
| --- | --- |
| Homepage hero trust chip ("N Reviews") | `src/components/HeroCompare.tsx` |
| Homepage reviews heading ("N Google Reviews") | `src/components/ReviewsSection.tsx` |
| Homepage "Read All N Reviews on Google" link | `src/components/ReviewsSection.tsx` |
| `/reviews` heading ("N Google Reviews") | `src/pages/ReviewsPage.tsx` |
| `/reviews` meta description ("N verified reviews") | `src/pages/ReviewsPage.tsx` |
| `/reviews` "Read All N Reviews on Google" link | `src/pages/ReviewsPage.tsx` |
| `/reviews` body ("Read enough of N reviews…") | `src/pages/ReviewsPage.tsx` |
| "Read all N Google reviews" on all 21 service/city pages | `src/pages/ServicePage.tsx` |

`BUSINESS.reviewRating` works the same way. Neither appears in structured data
any more — see the note in `src/components/BusinessSchema.tsx` on why the
self-serving `aggregateRating` was removed.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_GA_MEASUREMENT_ID` | No | GA4 measurement ID, e.g. `G-XXXXXXXXXX`. **Unset by default, and with it unset no analytics code ships at all** — the module constant-folds away and the bundle contains no reference to Google. Set it in the Vercel project (Settings → Environment Variables) and redeploy to switch analytics on. Inlined at build time, so a change requires a new build. |

### How analytics is loaded (and why it does not cost PageSpeed points)

Analytics was pulled from this site once before for hurting the PageSpeed score.
`src/lib/analytics.ts` is built so that cannot recur:

- the `gtag.js` tag is **never in `<head>`** and never render-blocking;
- it is appended by JS only after the window `load` event **and** then the first
  of `requestIdleCallback` (4s timeout) or a real user interaction (scroll,
  pointerdown, keydown, touchstart) — a Lighthouse run does neither, so in a lab
  test the idle callback fires long after the metrics have settled;
- it loads exactly once;
- measurement is **not** delayed with it: the `dataLayer` shim and the delegated
  `tel:` click handler install immediately (no network), so events fired in the
  first second queue and are replayed when `gtag.js` arrives.

Events sent:

| Event | Trigger |
| --- | --- |
| `page_view` | Initial route and every client-side navigation (`send_page_view: false` on the gtag config, because a prerendered SPA would otherwise miss every navigation) |
| `generate_lead` | Quote form submission **accepted** by Formspree (`state.succeeded`), not merely attempted |
| `click_to_call` | Any `tel:` link anywhere on the site, via one delegated capture-phase handler |

## SEO tooling

**`sitemap.xml` is generated, not hand-written.** `scripts/gen-sitemap.mjs` runs
in `prebuild` and derives each URL's `<lastmod>` from git: it resolves the
route's page component, walks its local imports, and takes the newest commit
date. `Footer.tsx` and `Navbar.tsx` are excluded, because they render on every
page and counting them would stamp all 34 URLs with the same date. The script
exits non-zero rather than emitting a partial sitemap if a route in `App.tsx` is
written in a shape it cannot parse.

**IndexNow is a manual post-deploy step, on purpose.** Run it once the
production deployment is live:

```sh
npm run indexnow -- --dry-run      # show what would be sent, send nothing
npm run indexnow                   # URLs with lastmod in the last 7 days
npm run indexnow -- --since=2026-09-01
npm run indexnow -- --all          # every URL in the sitemap
```

It is deliberately not a `postbuild` hook. A Vercel build finishes *before* its
deployment is promoted, so submitting from the build tells Bing to re-crawl URLs
that are still serving the old content — and every preview build would fire too,
submitting production URLs for pages that were never published. Ownership is
proven by `public/d396d4a5f3a988583540ed67906b8575.txt`; that file must stay
deployed. Google does not use IndexNow — it picks changes up from the sitemap's
`lastmod` instead, which is the other half of the same fix.

## Deployment

Pushing to `main` triggers an automatic Vercel deployment that runs
`npm run build` and serves the pre-rendered `dist/` output. Then run
`npm run indexnow`.
