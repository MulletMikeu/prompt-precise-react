# Redirects — why each block in `vercel.json` exists

`vercel.json` must be valid JSON, so it cannot carry comments. This file is where
the reasoning lives, the same way `docs/index-html.md` carries the reasoning for
`index.html`. **If you add or change a redirect, add a line here.**

Rules are evaluated **in file order and the first match wins**, so the blocks are
ordered deliberately. Do not reorder without reading this.

---

## Platform behaviour you need to know first

Measured against production on 2026-10-24, not assumed:

| Request | Response chain |
|---|---|
| `https://godhans.com/meet-the-owners` | `301` → `/about` → `200` |
| `https://godhans.com/meet-the-owners/` | **`308` → `/meet-the-owners`** → `301` → `/about` → `200` |
| `http://godhans.com/` | **`308`** → `https://godhans.com/` → `200` |
| `https://godhans.com//` | `308` → `https://godhans.com/` |

Three consequences:

1. **`trailingSlash: false` normalises the URL BEFORE user redirects fire.** So a
   single slash-less `source` already covers both `/foo` and `/foo/`. A rule whose
   source carries a trailing slash would be unreachable — do not add one thinking
   it buys anything. The slash form costs one extra 308 hop, which is permanent
   and passes signals, and there is no way to remove it short of turning off
   `trailingSlash` normalisation site-wide, which is not worth it.
2. **The HTTPS upgrade is a 308, not a 301.** It is Vercel's, not ours, and is not
   configurable here. Both are permanent and both pass link equity; the difference
   is that 308 preserves the request method. If someone asks you to "make http
   301", the honest answer is that it already redirects permanently and the status
   code is not ours to set.
3. **A redirect destination is not an inbound link.** Pointing a redirect at a
   page does not change any `<a href>` in the built HTML. (This mattered while
   `scripts/check-arms.mjs` guarded the A/B test; that guard was deleted in
   Ship M, 2026-11-21, when the owner ended the test.)

---

## Block 1 — host forwards (`www`, old domains, the vercel.app URL)

Four `/(.*)` rules distinguished by a `has: [{ type: "host" }]` condition. They
must stay FIRST: a path-only rule earlier in the file would claim the path before
the host rule could send the whole request to the apex.

⚠ **The three `treetrimmersnc.online` rules are dead config.** That domain
resolves to **Cloudflare**, not Vercel, and already 301s every path to
`https://godhans.com/` on its own. The request never reaches us, so these rules
never fire. They are harmless and were left in place rather than removed, because
if the domain is ever pointed at Vercel they become correct again. Verified
2026-10-24. Do not cite them as the reason that domain redirects.

## Block 2 — old hosting leftover

`/cgi-sys/suspendedpage.cgi` → `/`. A cPanel "account suspended" page from a
previous host. It still has backlinks, including one from homeblue.com (DR 58).

## Block 3 — old blog URLs with backlinks (added Ship K, 2026-10-24)

Eight URLs from `godhans-shared/audits/semrush-broken-pages-2026-10-24.md`. All
were 404ing; each carries **4 backlinks from 2 referring domains**, last seen
2026-09-21/22. Targets were chosen by reading what the destination pages actually
say, not by slug similarity:

| Old URL | Target | Why this page |
|---|---|---|
| `/10-questions-you-need-to-ask-before-hiring-a-tree-removal-company` | `/` | Was `/tree-service-jacksonville-nc`, which carried the eight questions. Ship M (2026-11-21) folded that hub into the homepage, which now carries its "check us before you hire anyone" section; re-pointed straight at `/` so there is no chain through the hub's own 301. |
| `/7-top-reasons-to-hire-a-professional-tree-trimmer` | `/tree-trimming-jacksonville-nc` | The trimming owner page. |
| `/common-tree-pests-and-diseases-in-eastern-north-carolina` | `/tree-removal-jacksonville-nc` | The only page covering pests **and** diseases across species: fusiform rust, southern pine beetle, Ips engravers, Armillaria root rot, Biscogniauxia/Hypoxylon canker, Bradford pear — and it cites **both** NC State Extension pest/disease pages. `/pine-tree-problems-*` was the obvious guess and is wrong: it has zero mentions of rust, root rot or canker and cites only the pine-beetle page. |
| `/how-to-increase-home-value-by-adding-trees` | `/tree-trimming-jacksonville-nc` | **The weakest of the eight, and knowingly so.** Nothing on this site is about planting trees or property value — "home value" and "property value" appear zero times. Trimming is the service that keeps an existing tree healthy, and "Why We Don't Rush to Cut Oaks" is the nearest thing to an argument for preserving a mature tree. If these backlinks ever matter, the real answer is a page on tree value, not a better redirect. |
| `/is-it-okay-to-prune-trees-in-spring` | `/tree-trimming-jacksonville-nc` | Near-exact. That page answers "When is the best time of year to trim trees in North Carolina?" with the dormant-season window **and** explicitly corrects the spring/oak-wilt misconception the old title implies. |
| `/signs-that-your-tree-is-dead` | `/pine-tree-problems-jacksonville-nc` | The site's dedicated dying/dead-tree diagnostic page; its H1 "Is my pine tree dying or dangerous?" is the closest title-level match, and its first H2 is "A browned-out pine is already gone". `/tree-removal-*`'s newer "What makes a tree hazardous?" section was considered — it is species-agnostic where this is pine-specific — but pine and sweetgum are #1 and #2 on our invoices, so a local "is my tree dead" is usually a pine, and the pine page links onward to the removal page anyway. |
| `/the-complete-tree-removal-guide-for-homeowners` | `/tree-removal-jacksonville-nc` | The removal owner page, 5,623 words. |
| `/tree-stump-removal-vs-stump-grinding-which-is-better` | `/stump-grinding-jacksonville-nc` | Owns stump grinding and the grinding-versus-excavation distinction. Parked on the removal page while the stump page was the A/B control; re-pointed in Ship M when the test ended. |

### What is deliberately NOT redirected

`godhans-shared/audits/ga4-404-2026-10-24.md` found ten 404ing URLs in GA4 and
recommended leaving all ten dead, because seven are foreign-topic content-farm
paths (`/argentine-marriage-traditions`, `/types-of-ant-virus-software`, …) from a
previous owner of the domain, and redirecting expired-domain spam would pass its
history to live pages.

**That recommendation stands and is not contradicted by Block 3**, which is the
reconciliation of two audits that look like they disagree:

- The seven content-farm URLs have **no backlinks** and stay 404ing. Nothing here
  touches them.
- `/is-it-okay-to-prune-trees-in-spring` and `/signs-that-your-tree-is-dead`
  appear in **both** audits. The GA4 audit called them "plausible old blog URLs"
  and said they were "worth a thought". Semrush supplies the fact it was missing:
  each carries 4 backlinks from 2 referring domains. **A URL with real referring
  domains is a former page of this site, not scraper noise, and redirecting it
  recovers equity rather than importing history.** That is why these two are in
  and the other seven are out.
- `/winter-tree-pruning` is the third tree-topic URL from the GA4 list. It has
  **no** Semrush backlinks, so it stays 404ing. If a backlink ever appears, it
  belongs in Block 3 pointing at `/tree-trimming-jacksonville-nc`.

## Block 4 — old `/services/*` and `/locations/*` paths

The site's first URL scheme. Note `/services/land-clearing` and
`/land-clearing-jacksonville-nc` both go to `/services`: land clearing was purged
on 2026-07-15 (`7f87c9e`) because the business does not offer it. The
`/land-clearing-*` URL still earns ~30 impressions at position 11.2, which is an
open owner question, not a redirect problem.

`/locations/maysville-nc`, `/locations/beulaville-nc` and
`/locations/holly-ridge-nc` went to the Jacksonville hub until Ship M
(2026-11-21), from before those towns had pages. They now go to
`/tree-service-{maysville,beulaville,holly-ridge}-nc`. `/locations/jacksonville-nc`
goes to `/` (the hub it used to target was folded into the homepage), and
`/services/storm-cleanup` goes straight to the emergency page.

## Block 5 — consolidated and renamed pages

`/tree-removal-tight-spaces*` → `/tree-removal-near-house-jacksonville-nc` and
`/tree-trimming-vs-pruning` → `/tree-trimming-jacksonville-nc`, both from Ship A
(2026-10-10), plus older renames.

The stump page's guides-list link to `/tree-removal-tight-spaces-jacksonville-nc`
(which 404'd on click, because a react-router `<Link>` never makes the HTTP
request a redirect needs) was pointed straight at
`/tree-removal-near-house-jacksonville-nc` in Ship M, and its
`scripts/check-links.mjs` allow-list entry deleted.

### Ship M consolidation (2026-11-21) — one page per intent

Owner rulings 2026-11-21. Each page's unique content was moved before its 301:

| Old URL | Target | What moved |
|---|---|---|
| `/tree-service-jacksonville-nc` | `/` | The local-crew, neighborhoods, Camp Lejeune/PCS, local-species and storm-pattern copy, and a condensed "check us before you hire anyone" section, now on the homepage. |
| `/storm-cleanup-jacksonville-nc` | `/emergency-tree-service-jacksonville-nc` | The storm-cleanup scope, the after-storm process and the insurance-billing account, now a section of the emergency page. |
| `/residential-tree-service-jacksonville-nc` | `/` | Homeowner intent is the homepage's. Its links were re-pointed to `/` or to the specific service the anchor names. |

All three are sources here, never destinations, and every other rule that used
to target one of them now targets the final page directly — no chains.

## Block 6 — `/meet-the-owners` → `/about`

The owners page moved to `/about` on 2026-05-15; `MeetTheOwners.tsx` still serves
that route.
