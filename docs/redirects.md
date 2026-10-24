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
3. **A redirect destination is not an inbound link.** The arm guard
   (`scripts/check-arms.mjs`) counts `<a href>` in the built HTML. Pointing a
   redirect at a page does not move its inbound-link count, which is why the
   blocks below can safely target pages the guard watches.

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
| `/10-questions-you-need-to-ask-before-hiring-a-tree-removal-company` | `/tree-service-jacksonville-nc` | Carries the literal H2 "What questions should I ask before hiring a tree removal company?" (eight questions), plus "How to Verify a Tree Company in North Carolina" and "Check Us First". Three sections on the old post's exact topic. |
| `/7-top-reasons-to-hire-a-professional-tree-trimmer` | `/tree-trimming-jacksonville-nc` | The trimming owner page. |
| `/common-tree-pests-and-diseases-in-eastern-north-carolina` | `/tree-removal-jacksonville-nc` | The only page covering pests **and** diseases across species: fusiform rust, southern pine beetle, Ips engravers, Armillaria root rot, Biscogniauxia/Hypoxylon canker, Bradford pear — and it cites **both** NC State Extension pest/disease pages. `/pine-tree-problems-*` was the obvious guess and is wrong: it has zero mentions of rust, root rot or canker and cites only the pine-beetle page. |
| `/how-to-increase-home-value-by-adding-trees` | `/tree-trimming-jacksonville-nc` | **The weakest of the eight, and knowingly so.** Nothing on this site is about planting trees or property value — "home value" and "property value" appear zero times. Trimming is the service that keeps an existing tree healthy, and "Why We Don't Rush to Cut Oaks" is the nearest thing to an argument for preserving a mature tree. If these backlinks ever matter, the real answer is a page on tree value, not a better redirect. |
| `/is-it-okay-to-prune-trees-in-spring` | `/tree-trimming-jacksonville-nc` | Near-exact. That page answers "When is the best time of year to trim trees in North Carolina?" with the dormant-season window **and** explicitly corrects the spring/oak-wilt misconception the old title implies. |
| `/signs-that-your-tree-is-dead` | `/pine-tree-problems-jacksonville-nc` | The site's dedicated dying/dead-tree diagnostic page; its H1 "Is my pine tree dying or dangerous?" is the closest title-level match, and its first H2 is "A browned-out pine is already gone". `/tree-removal-*`'s newer "What makes a tree hazardous?" section was considered — it is species-agnostic where this is pine-specific — but pine and sweetgum are #1 and #2 on our invoices, so a local "is my tree dead" is usually a pine, and the pine page links onward to the removal page anyway. |
| `/the-complete-tree-removal-guide-for-homeowners` | `/tree-removal-jacksonville-nc` | The removal owner page, 5,623 words. |
| `/tree-stump-removal-vs-stump-grinding-which-is-better` | `/tree-removal-jacksonville-nc` | ⚠ **TEMPORARY — see below.** |

### ⚠ `/tree-stump-removal-vs-stump-grinding-which-is-better` must be re-pointed after 2026-12-01

**The correct target is `/stump-grinding-jacksonville-nc`**, which owns stump
grinding, the grinding-versus-full-excavation distinction and the depth figures.
It is the **control arm** of the live A/B test, so it is off limits until the test
reads out on 2026-12-01.

Pointing a redirect at it would not have tripped `check-arms.mjs` — a redirect
destination is not an inbound link — but it would have fed a backlinked URL's
equity to one arm and not the other, mid-test, which is the same class of
confound as Ship A's asymmetric inbound links. So it goes to
`/tree-removal-jacksonville-nc` for now, which carries the stump content the
removal page needs anyway (the $6,500 red oak whose five-foot stump took longer
than the tree).

**After 2026-12-01: change this one rule's destination to
`/stump-grinding-jacksonville-nc` and delete this paragraph.** Recorded in
`godhans-shared/DECISIONS-addendum-2026-10-24.md` as well, so it does not depend
on anyone reading this file.

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

## Block 5 — consolidated and renamed pages

`/tree-removal-tight-spaces*` → `/tree-removal-near-house-jacksonville-nc` and
`/tree-trimming-vs-pruning` → `/tree-trimming-jacksonville-nc`, both from Ship A
(2026-10-10), plus older renames.

⚠ **`/tree-removal-tight-spaces-jacksonville-nc` is still linked from
`/stump-grinding-jacksonville-nc`'s guides list**, and that link 404s on click
because a react-router `<Link>` never makes the HTTP request the redirect needs.
It is allow-listed in `scripts/check-links.mjs` and scheduled to be fixed with
the Nov 1 control edit. See that file's header.

## Block 6 — `/meet-the-owners` → `/about`

The owners page moved to `/about` on 2026-05-15; `MeetTheOwners.tsx` still serves
that route.
