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
