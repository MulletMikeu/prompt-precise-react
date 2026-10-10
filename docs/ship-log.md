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
