# `index.html` — why every tag in it is the way it is

**This file exists because comments in `index.html` are not free.**

Vite copies `index.html` verbatim into the HTML shell, and `vite-react-ssg`
prerenders that shell into all 38 pages. HTML comments are not stripped by
anything in the pipeline — unlike the ones in `src/index.css`, which the CSS
minifier removes, and unlike JSX `{/* … */}` comments, which never reach the
output at all. So a comment in `index.html` is paid for 38 times, on the
critical path, on every page load.

It was 2,669 bytes of comment in a 4,411-byte file — **61% of `index.html` was
explanation**, costing 101 KB across the site. The explanation was worth
keeping; paying to ship it to users was not. It lives here instead.

**Rule: `index.html` carries no comments.** If you need to explain a tag, add a
section to this file and leave the tag bare. The only comments that legitimately
appear in the built HTML are React's own `<!-- -->` text-node separators, which
are emitted by the renderer, are 8 bytes each, and are **required for
hydration** — never strip those.

---

## No `<title>` or `<meta name="description">`

Per-route title, meta description and canonical link are injected at build time
by each page via `vite-react-ssg`'s `Head`. Do **not** add a static `title` or
`description` here, or every page would share the same one.

## No `<meta name="robots">`

It used to be here, which meant `/404` shipped a static `index, follow`
alongside `NotFound`'s Helmet `noindex, follow` — two contradictory tags that
only resolved correctly because Google takes the most restrictive.

The default now comes from a Helmet in `RootLayout` (`src/App.tsx`). A page that
needs different rules **replaces** it rather than arguing with it: helmet dedupes
by `name`, and the deeper, later-mounted page instance wins.

## The `og:*` / `twitter:*` tags ARE static on purpose

Every page used the same values for these, and each page's Helmet was
re-emitting all six, so the built HTML carried them twice. The shared ones live
here; the page-specific ones (`og:title`, `og:description`, `og:url`,
`twitter:title`, `twitter:description`) stay in the page Helmets.

## `<meta name="author">` is a person, not the company

Michael Godbersen writes the site's content; the company is the publisher, which
is already asserted by `WebSite.publisher -> #business` in `<BusinessSchema/>`.

Keep this in step with `AUTHOR.name` in `src/data/siteData.ts`. It is the one
place the name is hardcoded, because a static tag cannot import.

## `geo.region` / `geo.placename` are here; `geo.position` and `ICBM` are NOT

Those two carried a hardcoded copy of the business coordinates, which silently
drifted from `BUSINESS.coordinates` in `siteData` and left the site advertising
a pin ~5 miles from the shop. They are emitted by `<BusinessSchema/>` now, from
the same constant that feeds the `LocalBusiness` `geo` node.

**Do not re-add them here.**

## The icon `?v=` query must be bumped whenever an icon's bytes change

`vercel.json` serves these immutable for a year, so without the bump a returning
visitor keeps the old icon indefinitely. Bump every `?v=N` together — they are
one set.

## Exactly ONE font preload, and it is Barlow Condensed 700

`crossorigin` is required even though the font is same-origin; without it the
browser double-fetches.

`index.html` is shared by all 38 routes, so a preload here is a highest-priority
fetch on every one of them. Condensed 700 earns that: it is the `<h1>` on every
route, above the fold everywhere.

Weight **800** used to sit beside it and does not earn it. An audit of the
computed `(font-family, font-weight)` pair on every text node of every route
found 800 used on exactly two: `/` (the hero `.text-display-2xl`, which is the
LCP element) and `/reviews` (one decorative `aria-hidden` quote mark, below the
fold). On the other 36 pages it was a 22 KB high-priority download of a face
nothing on the page renders, competing with the stylesheet and with the face
those pages' `<h1>` actually needs.

Route-specific preloads now come from `ROUTE_FONT_PRELOADS` in `vite.config.ts`,
applied by the same `onPageRendered` hook that hoists `<meta charset>`. They are
**not** declared in a page's Helmet: react-helmet-async dedupes
`<link rel="canonical">` but not `<link rel="preload">`, and `vite-react-ssg`
renders each page twice against one provider, so a preload declared in a page
component lands in the HTML twice.

See `src/index.css` for the `@font-face` set and `scripts/subset-fonts.mjs` for
how the files are built.

## The inline `<style>` block

Two rules only — `html { background }` and `body { margin: 0 }` — so the page
paints the right ground colour before the stylesheet arrives rather than
flashing white. Keep it tiny; it is inlined into every page for the same reason
the comments were removed from it.

## `<meta charset>` placement

It is first in this file, but helmet injects at the *start* of `<head>` and
would push it past the 1024 bytes the HTML spec gives a browser to detect
encoding. The `onPageRendered` hook in `vite.config.ts` hoists `charset` and
`viewport` back to the top of `<head>` after render. Do not try to fix this by
reordering tags here — helmet's output always lands first.
