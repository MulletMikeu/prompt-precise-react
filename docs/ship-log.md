# Ship log

Dated record of what went to production, in reverse order. One entry per ship.

**Why this file exists.** Git history says what changed; it does not say what was
*verified*, what was deliberately left alone, or what a later readout needs to
know about. The A/B test running on `/tree-removal-cost-north-carolina` against
`/stump-grinding-jacksonville-nc` makes that gap expensive: a readout that does
not know the treatment was amended mid-flight will attribute the amendment's
effect to the thing being tested.

**Rule: anything that reaches production while the test is running gets an entry
here, including ships that changed neither arm.** Note the control's verified
state every time, even when the answer is "unchanged" — especially then.

Machine-readable records of each ship also go to the shared folder, as
`godhans-shared/ships/YYYY-MM-DD-ship-<letter>.md`, carrying the UTC serve time
and any treatment copy verbatim. That is the copy Ricky's lane reads; this file
is the narrative one.

---

## 2026-10-24 — Ship I, snippets + the link guard (non-test)

**Pushed** 2026-10-24 04:33:48 UTC · **confirmed serving** 04:39:00 UTC
**Commits:** `30aebe7` → `74750e4` (sitemap) → `ea1c784` (merge) → `c69271d` (IndexNow state)
**Shared record:** `ships/2026-10-24-ship-i.md`

Six of 37 pages changed, none added. Both guards passed in `postbuild`. IndexNow
took 6. Lighthouse production median of 5: **96–98 perf, a11y 100, CLS 0 on all
six**, and **not one run below 95**.

**Twelve days passed between Ship H and this one, and the gap is the story.**
Batch 7 was written 2026-10-13 off `zero-click-2026-10-13.md`, whose window
closes on Oct 11 — so it was scoped from a dataset that could not see Ships G or
H, which had about seven hours of exposure in it. A read-only change-history
audit on 2026-10-23 found three of its six items already done or impossible:
the owner pages have had exact-match H1s since 2026-09-03, review markup was
deliberately removed on 2026-09-27/28, and `blog.godhans.com` is NXDOMAIN so no
`vercel.json` rule can reach it. Batch 7 v2 is the rescope. **The lesson is
cheap and worth keeping: an audit's window has to be stated relative to the last
ship, or work gets scoped against a site that no longer exists.**

**THE REAL FIND IS A 150-LINE SCRIPT.** `scripts/check-links.mjs`, now in
`postbuild` ahead of `check-arms`, fails the build if any internal href in
`dist/` resolves to neither a prerendered route nor a real file. It separates
`dead` from `redirect-only`, and `redirect-only` is the class nobody caught:

Ship A's own record reasoned that the control's stale link to
`/tree-removal-tight-spaces-jacksonville-nc` was fine because *"a 301
resolves."* **That is true for Googlebot and false for a human being.**
`vercel.json` redirects run on an HTTP request; a react-router `<Link>` never
makes one — it calls `preventDefault`, the client router matches nothing, falls
through to `path: "*"` and renders `NotFound`. Nothing reaches Vercel, so the
301 never fires. The visitor gets a 404 page and every server-side check passes.

It had already shown up in the data and been misattributed: the deep audit
recorded 12 GA4 views of the 404 page title in 7 days and blamed
`https://godhans.com//`, which has returned 308 since 2026-09-27. `Analytics()`
fires `trackPageView` on every client-side navigation, including the one that
lands on `NotFound` — one anchor in one guides list produces exactly that
signature. Proved failing twice (the real link, and a synthetic dead href) and
passing. The real one is **allow-listed, not fixed**: it sits on the control arm,
which `DECISIONS.md` freezes to Nov 1. Entry carries a reason, the ship and a
review date, and a stale-entry warning fires if it ever stops being broken.

**A sibling script rather than part of `check-arms.mjs`, on purpose.** That file
carries a dated instruction to be deleted after 2026-12-01 — and it should be,
for the reason Ship G gave. This check has nothing to do with the test and must
outlive it. **Delete `check-arms.mjs` after the readout. Keep `check-links.mjs`.**

**SNIPPETS.** Rewrote title and meta on the four pages still carrying
pre-September generic copy — `/`, `/tree-removal-*`, `/tree-trimming-*`,
`/storm-cleanup-*` — between them 11,165 impressions and 92 clicks, 91 of which
are the homepage. Every H1 untouched: they are already the exact query wording
and they rank. Also brought `/residential-` (158) and `/commercial-` (156) under
the 155 cap, both set by the commit whose job was trimming them. Every figure is
interpolated from `PRICING`/`BUSINESS` rather than typed, so a description can
no longer drift from what the body renders — the homepage's review count now
reads from `BUSINESS.reviewCount` as that constant's note has always required.

The storm-cleanup description uses only the first clause of the approved
insurance sentence. `DECISIONS.md` requires the "normal deductible" hedge on any
claim about what insurance costs the customer; the full hedged sentence is 139
characters and cannot share a 155-character meta. The clause used makes no cost
or outcome claim, so there is nothing for the hedge to qualify, and the hedged
sentence still renders in full in `STORM_LEAD` and the FAQ. Ruling applied and
cited rather than re-asked, per RULESET §II.

**HAZARDOUS AND LARGE.** Two answer-first sections on
`/tree-removal-jacksonville-nc` at positions 1 and 2, so "What counts as a large
tree?" precedes "How long does it take to remove a **large** tree?". Every
figure already appears on that page or in `DECISIONS.md`.
`PRICING.stories.photoLimit` would have fitted the large-tree section almost
perfectly and was **deliberately not used** — a grep confirmed it renders only on
the treatment arm. Neither section states a dollar figure: the bands are already
in the page's `quickAnswer`, and restating them inside the section that owns
"hazardous" is the self-cannibalisation audit item B3 found on the trimming page.
Cross-links to `/emergency-*` without moving its hazardous section — the two now
split the word cleanly between still-standing and already-happened.

`sectionLinks` and `sectionBodies` are positional and fail silently, so both maps
were remapped (links 1,5,7,8 → 3,7,9,10; bodies 2,10 → 4,12; new entries at 1)
and the result verified by listing every link under every H2 in the built HTML.

**THE PERF MEASUREMENT, WHICH FOUND NOTHING AND WAS STILL THE RIGHT CALL.** Those
sections put the removal page back to 5,623 words — above the ~5,800 mark where
Ship F called it the only page without Lighthouse margin, and the reason Ship G
split it. So the pre-ship commit was built in a separate worktree and both builds
were measured on the same localhost, five runs each: **perf 93, LCP 2.8 s, FCP
2.3 s, SI 2.3 s, TBT 0 ms, CLS 0 — identical on all six values across all ten
runs.** Ship I's cost on that page is zero, and production went 95 → 96. TBT and
CLS already score 100 and are 55% of the weighting; +8 KiB of HTML is ~2 KiB
gzipped. Same discipline as Ship H's retraction, opposite outcome: there was
nothing to retract.

**HOMEPAGE LINKS DOWN.** Four in-prose anchors added — hazardous and large tree
removal, tree trimming, 24/7 emergency tree service, storm cleanup — which were
card-tile-only before. Card tiles stay. **No link to the cost page added or
moved.** Batch 7's other half of that item, shortening homepage copy that
duplicates the service pages, is moot and the record says so rather than
claiming it: at 1,029 words the homepage is already the leanest page on the site.

**Both arms verified live-identical after deploy** — treatment
`51a887ddceb6c437` 13/23, control `813b86cb98c9b4cc` 9/23, `lastmod` unmoved at
2026-10-10 and 2026-09-28, both excluded from IndexNow by the fingerprint
selector. No treatment copy changed, so the exposure windows are untouched: v3
since 2026-10-10 18:14:33 UTC, ongoing.

**Also shipped outside the repo.** `audits/blog-subdomain-steps.md` — the exact
CNAME, the Vercel steps and a ready-to-paste host-scoped redirect block for all
five dead blog URLs, deliberately **not** committed, because a host rule for a
host that cannot reach Vercel is dead config that reads as though it works. And
`audit/sitewide-structure-audit-2026-10-10.md` and
`audit/zero-citation-audit-2026-10-10.md` copied into the shared folder,
SHA-256-verified: `audit/` is gitignored, and Ship F lost time to exactly that.

---

## 2026-10-12 — Ship H, bundle analysed + pine links (non-test)

**Pushed** 2026-10-12 00:16:27 UTC · **confirmed serving** 00:22:40 UTC
**Commits:** `0a8cf4c` → `d2018ae` (merge) → `cc40e36` (IndexNow state)
**Shared record:** `ships/2026-10-12-ship-h.md`

Ten pages changed, none added. Arm guard passed on every build. IndexNow took
10. Lighthouse production median of 5: **96–99 perf, a11y 100** across home,
removal, the cost arm (measured only), spider lift, a city page and the pine
page.

**THE BUNDLE RECOMMENDATION I MADE IN SHIP G WAS WRONG, AND I AM NOT SHIPPING
A FIX FOR IT.** I cited `unused-javascript ~290 ms` as the binding constraint.
Re-measured: the removal page loses **2.8 weighted points in total** — LCP 1.3,
FCP 1.2, SI 0.3 — with **TBT 10 ms and CLS 0, both scoring 100**. Those two are
55% of the weighting, so JavaScript is not costing the page anything
measurable. Every byte-level audit already passes at zero savings (unused CSS,
unminified CSS/JS, legacy JS, responsive images), there are no render-blocking
resources, and TTFB is 35 ms. lucide is tree-shaken to four icons, route
splitting is in place, and analytics is already deferred past load + idle and
appears in zero prerendered HTML.

The biggest unused-JS item is **Google's tag at 177 KiB transferred — nearly
twice all our own JS combined (90 KiB)** — already as late as it can load
without losing measurement.

One real inefficiency found and deliberately **not** shipped: `batch2Photos` is
a 20 KiB chunk shared by 8 route chunks, so a page showing one photo downloads
thirty photos' URLs. Off the critical path, ~5 KiB gzipped, and splitting it
trades cache reuse for per-page size. Quantified in the record for John to
call.

**Arm hash-churn confirmed empirically rather than asserted,** as the batch
asked. The `app` chunk hash changed this ship (`BsNMaeXg` → `7AIF2ZSe`), so
both arms' **raw** HTML differs from production — and both arms' **normalised**
fingerprints are unchanged (`deccdc61129c42db` / `37e882d124b2d7ac`, the same
since Ship C). The guard absorbs artefact churn and still catches real change.

**Pine links:** all ten city pages now carry one natural in-sentence link to
the pine page, which went from 5 to 15 inbound. `LocationPage`'s `why` entries
became `ReactNode` so a paragraph can hold an anchor; plain strings render
exactly as before.

**Dating:** this record is 2026-10-12 (UTC serve time); the sitemap stamps
2026-10-11 because `stamp-sitemap` uses the commit's local date (20:15 EDT).
Both true of different clocks. The Ship G midnight rule was followed — commit
first, build second.

---

## 2026-10-11 — Ship G, arm guard + pine page split (non-test)

**Pushed** 2026-10-11 23:33:00 UTC · **confirmed serving** 23:39:11 UTC
**Commits:** `a4727c2` → `cf111dc` (merge) → `4cbded0` (IndexNow state)
**Shared record:** `ships/2026-10-11-ship-g.md`

First ship on 2026-10-11. One page added, five changed; sitemap 36 → 37.
Neither arm moved. Lighthouse production median of 5: **96–97 perf, a11y 100
on all six.** IndexNow took 6.

**THE ARM GUARD IS NOW A MECHANISM, NOT A HABIT.** `scripts/check-arms.mjs`
runs in `postbuild`, so the build fails with exit 1 if either arm's rendered
HTML or inbound link count — editorial or total — differs from the committed
baseline in `scripts/arm-baseline.json` (seeded at treatment 13/23, control
9/23). Proved failing (a deliberate cost-page link: *"editorial 13 -> 13, total
23 -> 24"*) and passing, and then proved a third time by the Vercel production
build running it and succeeding.

Note what the failing case caught: **editorial stayed at 13 and only total
moved**, because a guides-list link is classified templated. A guard watching
only the editorial count would have missed it.

Three separate opt-in flags rather than one `--force`, because "I meant to edit
the arm" and "I meant to change what links at it" are different intentions.
`--allow-control-change` should essentially never be used — `DECISIONS.md`
holds the stump page to Nov 1. **The script is dated for deletion after
2026-12-01**; a guard outliving the thing it guards becomes a flag people pass
without reading.

**PINE SPLIT.** The two pine-health sections, their FAQs, the pitch-tube photo
and the two Richlands photos moved verbatim to
`/pine-tree-problems-jacksonville-nc`. Every owner figure is byte-identical to
Ship D, including the three unsourced ones, still marked as our experience. The
removal page drops 5,646 → 4,832 words and 16 → 13 images, and goes from
**median 95 with a run at 94 to median 97 with no run below the floor.** Target
met — though the lowest run is still exactly 95, and the reason is no longer
this page: Lighthouse's only material opportunity on it is
`unused-javascript: 290 ms`, which is the shared bundle.

**NEIGHBOR LETTER.** A copy-paste sample on the neighbour page, with bracketed
placeholders, the arborist's findings and date, photos enclosed, and a reply
date. Checked programmatically to contain no "liable", "lawsuit", "legal
action", "negligence", "insurance" or "claim", and no deadline with a
consequence attached — the threatening version reads as a legal letter, works
less well, and is not something a tree company should be drafting.

**One process bug worth carrying forward.** `stamp-sitemap` takes its date from
the last commit, not the clock — so building before committing stamps the new
fingerprints with the *previous* commit's date. Every prior ship shared a
calendar day with its predecessor so it never showed; today five of six pages
were first stamped 2026-10-10. Fixed by resetting the fingerprint record and
rebuilding after the commit. **On any ship that crosses midnight UTC from the
last one, commit first and build second.**

**Audit D1 is closed.** It lives in `audit/sitewide-structure-audit-2026-10-10.md`
(gitignored), not the shared folder, which is why Ship F could not read it. Its
recommended replacement was the exact sentence the page already carries, so D1
was satisfied; Ship F's deletion of the duplicated restatement was the right
residual defect.

---

## 2026-10-10 — Ship F, neighbor tree problems page (non-test)

**Pushed** 2026-10-10 21:06:37 UTC · **confirmed serving** 21:12:23 UTC
**Commits:** `28fe1a2` → `1bc219b` (merge) → `c6a8af8` (IndexNow state)
**Shared record:** `ships/2026-10-10-ship-f.md`

New page `/neighbor-tree-problems-jacksonville-nc` — 3,827 words, six
answer-first questions, FAQPage schema. One page added, five changed, 31
identical of 37. Sitemap 35 → 36 URLs. **Neither arm moved**, in HTML or
inbound links; both content-identical to live afterwards. IndexNow took 6.
Lighthouse production median of 5: **perf 95–98, a11y 100, CLS 0 on all six.**

**This is the only page on the site that makes legal statements**, so it was
built under a stricter rule: every legal claim tied to a North Carolina source
(General Statutes, NC State Extension, NCDOI, or a named NC firm's case-law
summary), everything unsourceable written as the owner's practice in his own
voice, and a plain not-legal-advice line under the hero. All quotations are
stored verbatim in `SOURCES` and were fetched and confirmed before use —
including **N.C. Gen. Stat. § 1-539.1** from ncleg.gov, which is what makes
"stop at the property line" a practical rule rather than etiquette.

**Where it declines to answer.** On roots the owner's position was "tricky;
consult an expert", and the page honours that: no legal answer, an explicit
statement that we found no clean NC source settling it, and the question sent to
an attorney. It gives the arboriculture instead, which is usually what decides
the outcome.

**Storm cleanup, per audit D1.** The opener was already answer-first; the actual
defect was that the next paragraph restated it almost verbatim, and that is
gone. More importantly its neighbour FAQ was asserting two rules of NC law with
no citation behind either, on an otherwise carefully sourced page — both now
carry their source. **Note: audit D1 is not in the shared folder** (only the
retrievability audit is), so this was worked from the instruction's description.

**Two things to carry forward.**

1. **`/tree-removal-jacksonville-nc` is on the gate line** — median exactly 95,
   one run at 94. It is the only page without margin, at ~5,800 words and twelve
   images, because it has absorbed content in every batch since Ship D. Splitting
   the pine-health sections onto their own page is the cheapest fix and would
   make both pages better.
2. **The build-time arm assertion is still not built.** Recommended after Ship E;
   this ship simply happened not to trip it. The per-arm checker has caught two
   real violations and still lives in a scratchpad.

---

## 2026-10-10 — Ship E, city pages made local (common mode)

**Pushed** 2026-10-10 20:24:51 UTC · **confirmed serving** 20:30:40 UTC
**Commits:** `9515c8f` → `3c5e9c6` (merge) → `c798509` (IndexNow state)
**Shared record:** `ships/2026-10-10-ship-e.md`

Eleven of 36 pages changed. **Neither arm's HTML moved and neither arm's inbound
link count moved**; both verified content-identical to live production
afterwards (`deccdc61129c42db` / `37e882d124b2d7ac`, unchanged since Ship C).
IndexNow took exactly 11 URLs. Lighthouse production median of 5: **perf 96–99,
a11y 100, CLS 0 on all eleven.**

**The problem, measured.** The nine non-hub city pages shared **49.6%–64.9% of
their visible 5-grams** with each other — town name neutralised, so that is real
duplication rather than the name differing. Average 51.8%, average 826 words.
**After: 27.4%–38.8%, average 29.0%, average 1,263 words.**

Each town gained a real owner job at the price actually charged, the county it
is actually in, verified local facts with source URLs, and questions answered
for that town. Holly Ridge $2,800, Maysville $6,000, Beulaville $3,500, Surf
City $2,200, Hubert $4,500 — and no tree count on Hubert, because the owner gave
none.

**Three towns are not in Onslow County and the pages now say so:** Maysville is
Jones, Beulaville is Duplin, Surf City straddles Onslow and Pender. All four
`LocationPage` towns previously implied Onslow by omission.

**The structural fix that did most of the work, and it was not in the brief.**
Every city page carried a "veteran-owned, fully insured, no subcontractors"
paragraph that was the largest single source of the overlap — and it was already
being said by the shared `WhyChooseGodhans` band rendering *directly below it on
the same page*. It was duplicated with itself. Deleting it removed boilerplate
without removing a claim.

**Carry-overs from Ship D, both done.** `/tree-cabling-bracing` now cites ANSI
A300 (Part 3)-2013 clause 33.4.2 verbatim for "scheduling inspections shall be
the responsibility of the tree owner", edition stated — closing a note that had
sat in that file since it was written. The annual interval stays ours and the
page says so, because A300 says "periodically" and sets no timeframe on purpose.
`MeetTheOwners.tsx` now names Gene Circle and matches the removal page, no
prices added.

**The best thing found this batch:** the National Register documentation for the
Richlands historic district records that "the well-drained loamy soils of the
section were superior to those around elsewhere in the county" — independently
corroborating, from colonial land records, the inland-vs-coastal ground claim
the owner has been making on the removal page in his own voice. The town is
named after its soil. Relatedly, the USDA soil series named ONSLOW has its type
location "0.6 mile southwest of Swansboro".

**Carry forward: the treatment arm keeps being the natural link target.** For
the second ship running, the obvious editorial destination for "what does this
cost" was `/tree-removal-cost-north-carolina`, and for the second ship running
the per-arm check caught it before deploy (this time the Maysville job link,
13/23 → 14/24). Both files now carry a comment, but a comment is not a
mechanism — see "Recommended next" in the shared record for the build-time
assertion that would end the class.

---

## 2026-10-10 — Ship D, sitewide owner content and photographs (common mode)

**Pushed** 2026-10-10 19:07:54 UTC · **confirmed serving** 19:12:11 UTC
**Commits:** `e47619d` → `db7cb7f` (merge) → `c45f3eb` (IndexNow state)
**Shared record:** `ships/2026-10-10-ship-d.md`

Nine of 36 prerendered pages changed. **Neither arm's HTML moved and neither
arm's inbound link count moved**; both verified content-identical to live
production after the deploy (treatment `deccdc61129c42db`, control
`37e882d124b2d7ac`, unchanged either side). No `lastmod` moved, because all nine
changed pages were already stamped 2026-10-10 by Ship A. IndexNow took exactly
9 URLs, both arms excluded by the fingerprint selector.

Owner content across items 1–9 of `prompts/batch-2.md`: the removal page gains
pine-size, pine-health and pine-beetle sections, a $6,500 red oak case and the
fuller Gene Circle account; the resistograph page gains the 45%-rot water oak and
how to read a trace; `/storm-damage-trees-guide` is rebuilt as hurricane prep;
the leaning page gains the grew-leaning vs started-leaning distinction; insurance
FAQs land on three pages. **28 owner photographs** imported, all GPS/EXIF
stripped (13 of the 46 sources carried GPS), three phone screen-recordings
cropped free of their home-indicator bars.

**Lighthouse production, mobile, median of 5: perf 96–98 and a11y 100 on all
nine pages.** Two outlier runs (81, 82) on `/tree-trimming-jacksonville-nc`
against three at 98 are recorded rather than smoothed away.

**Three things worth carrying forward.**

1. **The per-arm check caught a rule violation before it shipped.** The storm
   guide's first build added two links to the treatment — a guides-list entry and
   a case-study anchor — taking it from 13/23 to 14/25. Ship D is barred from
   adding or removing links to that arm. Both were repointed to
   `/tree-removal-near-house-jacksonville-nc` and the file now carries a comment
   marking the treatment off-limits until Dec 1. This is Ship A's inbound-link
   confound exactly, caught pre-deploy this time instead of at a readout.

2. **Ricky's item 7b was NOT fixed, and now is.** A developer comment was
   rendering as visible copy on `/tree-trimming-jacksonville-nc` — four lines of
   `/* No heading element here on purpose… */` in JSX *children* position, where
   it is not a comment at all but literal text. It survived the 2026-10-06
   comment strip and the 2026-10-10 verification because the probe set tested
   `{/*` and `*/}`, the brace-wrapped form, and this one was unbraced. Braces
   added; all 36 pages then probed against 12 patterns, 0 failures, re-verified
   live. Measured effect: 2,811 → 2,770 visible words, −251 bytes.

3. **Do not point a directory-wide metadata stripper at this repo.** Running
   `strip-metadata.mjs` over `src/assets` rewrote six pre-existing committed
   images including `stump-grinding-jacksonville-nc-godhans.jpg`, the control's
   hero master. Caught and reverted before any commit, so the control never
   moved — but the failure mode is general and the new masters never needed it
   anyway, since sharp drops metadata on re-encode.

---

## 2026-10-10 — Ship C, treatment amendment (treatment v3)

**Record ID:** `godhans-cost-page-2026-11`
**URL:** `/tree-removal-cost-north-carolina` (treatment arm)
**Pushed** 2026-10-10 18:09:03 UTC · **confirmed serving** 18:14:33 UTC
**Commits:** `0c35692` → `b0c11dd` (merge) → `bc669fa` (IndexNow state)
**Shared record:** `ships/2026-10-10-ship-c.md`

One sentence **added** to the pine price ladder, owner-sourced, fixed wording:

> Height doesn't set a pine's price; trunk diameter and log size do. Our Gene
> Circle pine stood 120 ft with a 28 in base: rigged over a fence, it ran
> $8,500. The same tree in an open field is a one-day, $3,000–$4,000 job.

219 characters, placed as the fourth paragraph — after the three tiers, before
the access paragraph. It is stored as `PRICING.stories.geneCircle` and
interpolated, so the page keeps its own first rule of carrying no hardcoded
dollar amount. The two figures inside that string are deliberately literals:
they are job history, not price bands, and `$3,000–$4,000` only *happens* to
equal `PINE_LADDER.tier1.price`. That coincidence is the evidence the sentence
rests on — same money, same ~28 in base, 40–50 ft more tree — and interpolating
it would couple a past invoice to a live band.

**Byline NOT restamped**, per `DECISIONS.md`. Still "Updated October 5, 2026".

**Verified:** 1 of 36 pages changed, **+221 chars (the 219-char sentence + the
paragraph break), 0 removed**. Control content-identical to live production
(collapsed hash `37e882d124b2d7ac` before and after). **No page's inbound link
count moved**, editorial or total. Neither arm's `lastmod` moved — the treatment
was already stamped `2026-10-10` by Ship B that morning. IndexNow selected
exactly 1 URL, HTTP 200.

**Lighthouse production, mobile, median of 5: perf 96, a11y 100, CLS 0, LCP
2.1 s.** Ship C's own perf contribution is zero and was measured, not assumed:
the same local-preview test against the `main` build and the Ship C build
returned 93/93 and 100/100 across five runs each. Local preview reads ~3 points
under production (no CDN, no edge compression, none of `vercel.json`'s immutable
headers) and is labelled a proxy. The 2026-10-06 record has this page at a
production median of 100; this ship did not cost that, and the gap is not
attributed further without a controlled re-measure.

**Effect on the treatment's exposure windows.** This is now the third
page-state, and the second mid-flight amendment:

| Window | From | To |
|---|---|---|
| v1, unamended | 2026-10-06 00:23 UTC | 2026-10-10 05:02 UTC (~4.2 d) |
| v2, Ship B | 2026-10-10 05:02 UTC | 2026-10-10 18:14:33 UTC (~13.2 h) |
| v3, Ship C | 2026-10-10 18:14:33 UTC | ongoing |

By a 2026-11-01 read, v3 is ~21.4 days of a ~26.6-day life — **~81%**. v2 is
~2% of it. The windowing recommendation from Ship B therefore simplifies rather
than compounds: **window from 2026-10-10 and treat v2+v3 as one post-amendment
period**, because the v2 stub is half a day inside the same day as v3 and no
read can resolve it.

---

## 2026-10-10 — Ship B, treatment amendment

**Record ID:** `godhans-cost-page-2026-11`
**URL:** `/tree-removal-cost-north-carolina` (treatment arm)
**Pushed** 2026-10-10 04:56 UTC · **confirmed serving** 05:02 UTC
**Commits:** `ff9285e` → `27575f6` (merge) → `e2f71ee` (IndexNow state)

One sentence removed from the tier-3 "Leaning over the house with obstacles"
block:

> One of ours was a 100 foot pine crammed in behind two sheds and fences, in an
> almost impossible spot to work — that was a $10,000+ removal.

**Reason: factual correction.** The example conflated two separate jobs; there
was no such $10K+ removal. Deleted rather than reworded — an invented example is
worse than no example on the one page whose entire argument is that its numbers
are real.

**Unchanged:** the tier-3 price (`$10,000+`), `PINE_LADDER.tier3.note` ("Not
common, but they happen."), and everything else on the page.

**Verified:** normalised diff against production was **140 characters removed, 0
added**. Control byte-identical (`f7753470c62b`). IndexNow selected exactly 1 URL.

### Effect on the treatment's exposure windows

| Window | From | To | Duration |
|---|---|---|---|
| Treatment, **unamended** | 2026-10-06 00:23 UTC (merge `f687c43`) | 2026-10-10 05:02 UTC | **~4.2 days** |
| Treatment, **amended** | 2026-10-10 05:02 UTC | ongoing | — |

By a 2026-11-01 read that is ~22 days amended against ~4.2 days unamended, i.e.
**~84% of the treatment's life is the amended page.** See the readout note at the
foot of this entry.

---

## 2026-10-10 — Batch 1, site-wide (common mode)

**Live** 2026-10-10, pushed 04:50 UTC, confirmed serving ~04:54 UTC
**Commits:** `f62c9dd` → `d655c29` → `66cbeb1` (merge) → `a83e64a` (IndexNow state)
**Control:** `/stump-grinding-jacksonville-nc` **byte-identical**, verified three
times — local build vs pre-batch production, after every edit pass, and against
live production after deploy (`f7753470c62bb5bd` both sides). Its sitemap
`lastmod` also did not move.

- **Sitemap `lastmod` now derives from a rendered-content fingerprint.** All 37
  URLs had collapsed onto `2026-10-05` because a brand sweep and an a11y pass
  touched `ServicePage.tsx` and a content commit touched `siteData.ts`, which
  every route imports. Dating moved postbuild
  (`scripts/stamp-sitemap.mjs`), reusing the normaliser `indexnow` already had
  (`scripts/lib/content-fingerprint.mjs`). Both scripts now fail the build if the
  spread collapses to one date again.
- **301s:** `/tree-removal-tight-spaces(-jacksonville-nc)` →
  `/tree-removal-near-house-jacksonville-nc`; `/tree-trimming-vs-pruning` →
  `/tree-trimming-jacksonville-nc`. Sitemap 37 → 35 URLs. Unique facts migrated
  before deletion (the 20–40% tight-access premium, the scenario measurements,
  the trimming/pruning distinction).
- **Template:** `ServicePage` gained `sectionBodies` (a section body can now
  contain an in-prose `<a>` — it could not before, because `sections[].text` is a
  plain string, which is why an audit of all 38 prerendered pages found zero
  anchors inside running prose) and `faqPosition: 'early'`. Both opt-in and
  default-off, so neither arm's output moved from their existence.
- **Internal links:** every content page now has ≥5 editorial inbound and ≥2
  editorial outbound. Justified exceptions: `/404` (nothing should link to a 404;
  it has 6 outbound), `/privacy-policy`, `/terms-of-service`.
- **External citations 20 → 32.** ISA *AUF* 28(4):187; ANSI A300-2023 Clause 7;
  NCSU oak disease; NCSU general pruning; Brunswick County Extension pruning
  calendar; Jacksonville Planning & Permitting; Onslow County Land Use; NC DOI.
  All fetched and quote-checked before linking.
- **Known side effect, left untouched to protect the control:** the control's
  guides list links to `/tree-removal-tight-spaces-jacksonville-nc`, which now
  301s. A 301 resolves and the control's HTML is what the test measures, so this
  waits until after Dec 1.

### Two corrections to the as-filed record

1. **The treatment's `lastmod` is `2026-10-10`, not `2026-10-05`.** Ship B
   restamped it four hours after Batch 1. The live spread is **29 at `2026-10-10`,
   5 at `2026-10-05`, 1 at `2026-09-28`** (the control) — not 28 / 6 / 1. The
   28 / 6 / 1 figure was correct for the ~4 hours between the two ships.

2. **Batch 1 changed the two arms' inbound-link profiles asymmetrically.** Not in
   the filed record, and it is a larger confound for the 11-01 read than Ship B's
   sentence:

   | Arm | Editorial inbound | Total inbound |
   |---|---|---|
   | Treatment `/tree-removal-cost-north-carolina` | 7 → **13** (+6) | 16 → **23** (+7) |
   | Control `/stump-grinding-jacksonville-nc` | 7 → **9** (+2) | 22 → **23** (+1) |

   The treatment picked up six new in-sentence inbound links (`/about`,
   `/services`, and four city pages); the control picked up two (`/services`,
   `/tree-service-camp-lejeune-nc`) and lost one templated link when
   `/tree-trimming-vs-pruning` was consolidated away.

   This was instruction-compliant — the batch's link rule excluded the two arms
   as link *sources*, not as link *targets*, and the ≥5-inbound floor applied to
   non-test pages — but it means the arms did not experience Batch 1 equally.
   Both arms' rendered HTML is unchanged; what moved is what points at them.

---

## Readout note for 2026-11-01

Paste-ready. Covers Ship B and the two Batch 1 asymmetries, which share a window.

> **Mid-test changes, 2026-10-10.** Three things landed on 2026-10-10 that affect
> this comparison. None of them changed the control's rendered HTML, which was
> verified byte-identical against live production.
>
> 1. **Treatment amended, 05:02 UTC.** One sentence removed from the tier-3 price
>    block — a case example that conflated two jobs and described a removal that
>    did not happen. 140 characters, ~25 words, ~0.8% of the page's 3,103
>    editorial words. No price, figure or heading changed. This was a factual
>    correction, not an optimisation.
>
>    The treatment ran unamended for **~4.2 days** (2026-10-06 → 2026-10-10) and
>    amended for **~22 days** to this read, so ~84% of its exposure is the
>    amended page. **Recommended: window the read from 2026-10-10 and discard the
>    4.2-day stub** rather than reporting the full period with a footnote — the
>    stub is short, sits in the page's least-settled first week, and is the only
>    window in which the page carried an untrue claim. If the tooling cannot
>    window, report full-period and footnote it.
>
>    Bias direction if not windowed: removing a concrete proof point from the top
>    price tier plausibly *depresses* treatment performance slightly. A flat or
>    negative treatment result over the full period should therefore not be read
>    as "the pine-ladder rebuild did not work" without accounting for it.
>
> 2. **Inbound links moved asymmetrically.** Treatment editorial inbound 7 → 13;
>    control 7 → 9. Totals 16 → 23 and 22 → 23. If this read tracks each page's
>    own ranking rather than a split of one query's traffic, this is likely a
>    larger effect than item 1 and is not attributable to the treatment content.
>
> 3. **`lastmod` diverged, by design.** The treatment is stamped 2026-10-10; the
>    control is still 2026-09-28, because the sitemap now dates pages from
>    rendered content and the control's output genuinely did not change. Correct
>    behaviour, but it means crawlers were told one arm changed and the other did
>    not, which can shift recrawl timing inside the measurement window.

**Open question for whoever runs the read:** is this comparison query-matched, or
is it two independent page-level trends? Items 2 and 3 matter much more in the
second case, because the arms target unrelated queries (stump grinding vs tree
removal cost) and each page's own link profile and recrawl cadence then feed
directly into its result.
