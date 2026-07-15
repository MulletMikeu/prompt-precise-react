# GODHANS.COM SITE AUDIT

**Scope:** The hand-built `godhans.com` marketing site (this repo). Diagnose-only. No code changed.
**Date:** 2026-07-12
**Stack determined:** `vite-react-ssg` — every route is **prerendered to its own static `.html`** in `dist/`. This is **not** a client-only SPA.
**Method:** Source (`src/`), build output (`dist/`, 32 prerendered HTML files), `vercel.json`, `public/`, git history, and a live fetch of `blog.godhans.com`.

> ⚠️ **Read this first — the brief is partly stale.** The brief's external observations were captured against a **live deploy** that predates this repo's HEAD. Three of the seven flagged findings (F1, F3, and the "zero pricing" gap) look materially different in the current code than in the brief. Where the code and the brief conflict, this document reports **what the code actually does now** and flags the conflict with options. Nothing here is fixed — only diagnosed.

---

## A. VERIFIED FINDINGS F1–F7

### 🔴 F1 — Broken money page (`/tree-removal-jacksonville-nc`) — **CONFIRMED as a deploy artifact; root-caused; already removed in HEAD**

**Verdict: The disease was real but is a deployment/config bug, NOT a rendering bug — and it was already removed from the repo before this audit.**

- The site is **SSG, not CSR.** `dist/tree-removal-jacksonville-nc.html` exists and is fully populated: `data-server-rendered="true"`, 33 KB of real body HTML, correct per-route `<title>` ("Tree Removal in Jacksonville, NC | Godhans Tree Company"), correct self-canonical, full OG/Twitter tags, `build-marker: helmet-v2-2026-04-19`, and **three JSON-LD blocks** (BreadcrumbList, LocalBusiness, FAQPage). None of the brief's symptoms (homepage title, empty head, no body, no build-marker) are present in the current build.
- **Root cause of the external symptoms:** `vercel.json` previously contained an SPA catch-all rewrite:
  `{ "source": "/(.*)", "destination": "/index.html" }`.
  On a fully-prerendered site this rewrite can serve the **homepage shell (`index.html`)** in place of the real per-route static file under edge cache-cold / deploy-propagation conditions. That produces *exactly* the reported signature: homepage `<title>`, homepage meta description, no per-route body, no build-marker.
- **Current state:** commit `a90daf5` ("Remove SPA catch-all rewrite from vercel.json", 2026-06-26) **already deleted that rewrite.** The current `vercel.json` has `cleanUrls: true`, explicit redirects, and no catch-all. Unknown URLs now return a normal 404; known routes serve their own static HTML.
- **"Empty shell site-wide?" — RULED OUT.** All 32 prerendered pages contain full server-rendered body content and per-route heads (see §E). Crawlers/AI bots receive complete HTML. F1 was a symptom of the rewrite, not of missing SSR.
- **Which other routes shared the defect?** In the code, **none** — the defect was global-by-config (the rewrite hit every path equally) and is now gone. There is no per-route rendering defect.

**⚠️ Unresolved conflict (needs owner action / decision #1):** the fix is **in the repo** but the brief's fetch still showed the break, which means **production may not have been redeployed** since `a90daf5`, or the CDN is serving a stale build. This audit cannot see production state. **Verify the live deploy is built from a commit ≥ `a90daf5`** and hard-refresh the edge cache. If production still 200s the homepage shell for `/tree-removal-jacksonville-nc`, the money page is still bleeding despite the code being correct.

---

### 🔴 F2a — False duration claims — **CONFIRMED (contained to the emergency page)**

The truth (2013 / 13 years) is correctly computed everywhere *except* three hardcoded strings on the emergency page, plus one hardcoded stat.

| Location | Claim | Status |
|---|---|---|
| `src/pages/EmergencyTreeService.tsx:44` | "Veteran-Owned, Family-Operated — **20+ Years** Serving Onslow County" | 🔴 FALSE |
| `src/pages/EmergencyTreeService.tsx:45` | "we've spent **over two decades** clearing storm damage" | 🔴 FALSE |
| `src/pages/EmergencyTreeService.tsx:45` | "**20+ years** of hands-on tree experience" | 🔴 FALSE |
| `src/data/siteData.ts:240` | `TRUST_STATS` → `{ value: "13+", label: "Years in Business" }` | 🟡 Hardcoded (correct today, will drift) |

**Everything else already derives from a single source** — good: `src/data/siteData.ts:20-21` defines `founded: 2013` and `yearsInBusiness: new Date().getFullYear() - 2013`, and it is used correctly in `Hero.tsx:100`, `TrustSection.tsx:73`, `constants.ts:149`, and all 5 `LocationPage` "since 2013" strings. The "20+ years" lie originates **only** in the hand-authored emergency-page copy, exactly as the brief predicted.

**Recommendation:** the `FOUNDED_YEAR` single-source pattern the brief asks for **already exists** (`BUSINESS.founded`). The two remaining gaps are (1) the three literal strings in `EmergencyTreeService.tsx`, and (2) the hardcoded `"13+"` in `TRUST_STATS` — convert that stat to `` `${BUSINESS.yearsInBusiness}+` `` so it can never diverge from 2013. See full inventory in **§C**.

---

### 🔴 F2b — **LIABILITY: false ISA-certification claim — CONFIRMED**

- **Exact claim:** `src/data/siteData.ts:78` — *"Precision thinning, pruning, raising, shaping, and dead branch removal. **Our ISA-certified arborists** read every tree before touching it."*
- **Where it renders:** the `SERVICES` array feeds `ServicesSection` on the **homepage**. Confirmed present in built output: `dist/index.html` (grep: `ISA-certified` → `dist/index.html` only, plus the JS bundles). It is plural, it is a verifiable third-party credential, and it sits on the primary commercial page.
- **Owner-confirmed FALSE:** nobody at Godhans is ISA-certified.
- **Do not edit.** Flagged **P0 — remove or correct.** Full credential inventory in **§B**.
- **Honest replacement (owner's consideration only):** the About page (`MeetTheOwners.tsx`) already establishes the real, defensible E-E-A-T — Michael, USMC veteran, high-risk technical removals; James, heavy-equipment/ground ops; brothers, co-owners since 2013. "Working arborist, Onslow County since 2013, veteran-owned" is true and strong.

---

### 🔴 F3 — Broken proof gallery — **CONFIRMED, and NOT fixed. Root cause identified.**

The brief said "alt present, `src` EMPTY." In the current build the gallery `<img>` tags carry **alt text and a data-URI 1×1 transparent GIF as `src`, with no `srcSet`** — functionally identical to "empty" for any crawler or AI bot that doesn't run JavaScript.

**Root cause — `src/components/ui/LazyImage.tsx:62`:**
```jsx
src={inView ? src : placeholder}   // placeholder = transparent 1×1 GIF
srcSet={inView ? srcSet : undefined}
```
`inView` initialises to `false` and only flips inside a `useEffect`+`IntersectionObserver`. **`useEffect` never runs during server prerender**, so the SSG HTML emits the placeholder pixel, not the real image. On a real browser it hydrates and loads correctly — but **Googlebot image indexing, `GPTBot`, `ClaudeBot`, `PerplexityBot`, and social scrapers get the transparent pixel.** The conversion-proof gallery on the highest-urgency page is invisible to exactly the machines the brief cares about.

**Confirmed in `dist/`:**
- `emergency-tree-service-jacksonville-nc.html`: hero `<img>` has a real `/assets/…crane-cutting…` src (it uses a plain eager `<img>`, so it's fine), but **all 3 gallery images emit `data:image/gif;base64,R0lGOD…` with no srcset.**
- `tree-removal-tight-spaces-jacksonville-nc.html`: 1 transparent-pixel image (the `PrecisionRemoval` section image).

**Blast radius — every `LazyImage` instance** (grep): `ServicePage.tsx` galleries (currently only the emergency page passes a `gallery`) and `PrecisionRemoval.tsx`, which renders on `SpiderLiftRemoval`, `TreeRemovalNearHouse`, and `TreeRemovalTightSpaces`. Hero images and the owner photos use plain/native `<img loading="lazy">` with a real `src`, so **they are safe** — the defect is specific to the `LazyImage` component. Full image audit in **§D**.

---

### 🟠 F4 — Deprecated geo meta + structured-data audit — **CONFIRMED**

**Deprecated geo tags — CONFIRMED on all 32 pages, and they contradict every non-Jacksonville page.**
The block is **static in `index.html`'s `<head>`** (the template, lines ~in the source `index.html`), so `vite-react-ssg` copies it verbatim into every prerendered file:
```
geo.region = US-NC
geo.placename = "Jacksonville, North Carolina"   ← identical on all 32 files
geo.position = 34.7541;-77.4302
ICBM = 34.7541, -77.4302
```
Result: `tree-service-maysville-nc.html`, `…-swansboro-nc.html`, `…-surf-city-nc.html`, etc. all declare `geo.placename = Jacksonville`, contradicting their own target city. **Injection point: `index.html` static head.** Deprecated for a decade; recommend removal (tactic reversal — see §I).

**JSON-LD — does it exist? Yes. Inventory:**

| Type | Where | Notes |
|---|---|---|
| `TreeService` + `LocalBusiness` (static) | **All 32 pages** (from `index.html` template) | Includes `areaServed` (7 cities), `hasOfferCatalog`, `aggregateRating` 5.0/17, `foundingDate: 2013`, `sameAs`. Byte-identical on every page → city pages assert the Jacksonville identity/NAP. |
| `LocalBusiness` (data-rh) | 21 pages (the 6 ServicePage cities + service/resource pages + About) | `ServicePage.tsx:93-122`, `MeetTheOwners.tsx:73`. **This duplicates the static `LocalBusiness`** — two LocalBusiness nodes per page. |
| `BreadcrumbList` (data-rh) | 21 pages | `ServicePage.tsx:83`, `MeetTheOwners.tsx:52`. Visible breadcrumb UI only on About; ServicePage renders schema breadcrumbs with no visible trail. |
| `FAQPage` (data-rh) | 20 ServicePage pages | `ServicePage.tsx:150-165`. **The emergency FAQ IS marked up ✓** (brief's specific question — answered YES). |
| `WebPage` (data-rh) | About only | `MeetTheOwners.tsx:61` |
| `AggregateRating` | All 32 (nested in the static block) | 5.0 / 17. Present even on service & city pages that have no reviews on them. |

**Missing schema (gaps):**
- **`Service`** on service pages — **NONE.** Service pages emit LocalBusiness+Breadcrumb+FAQ but never a `Service` entity.
- **`Person` for Michael / James** — **NONE anywhere.** The About page has full bios (`MeetTheOwners.tsx:38-48`) but no `Person` markup. This is the single strongest untapped E-E-A-T asset, exactly as the brief notes.
- **`WebSite`** — **NONE**, yet `MeetTheOwners.tsx:69` references `isPartOf: {"@id":"https://godhans.com/#website"}` — a dangling reference to an entity that is never defined.

**Entity-graph fragmentation (new finding):** the `LocalBusiness` `@id` is **inconsistent across the site** — `https://godhans.com/#business` (homepage static), bare `https://godhans.com` (`ServicePage.tsx:97`), and `https://godhans.com/#localbusiness` (`MeetTheOwners.tsx:76`). Three IDs for one business fragments the knowledge graph instead of consolidating it. The About page's `about`/`isPartOf` references (`#localbusiness`, `#website`) don't match the IDs used elsewhere.

---

### 🟠 F5 — Pseudo-lists — **CONFIRMED, systemic**

`ServicePage.tsx:278` renders every section body as:
```jsx
<div className="… whitespace-pre-line">{section.text}</div>
```
All bullet-like content uses the literal characters `•`, `⚠`, `✔` inside newline-delimited strings — never `<ul>/<li>`. Confirmed in source across ~15 pages, e.g. `EmergencyTreeService.tsx:37,41,45`, `StormCleanup.tsx`, `TreeRemoval.tsx:46`, `TreeRemovalCost.tsx:18,22,30`, `LandClearing.tsx:23`, `SpiderLiftRemoval.tsx:25`, `TreeRemovalTightSpaces.tsx:55`, `TreeRemovalNearHouse.tsx:25`, `TreeServiceCampLejeune.tsx:23`, `TreeServiceHubert.tsx:23`, `TreeServiceRichlands.tsx:23`, `TreeServiceSneadsFerry.tsx:23`, `TreeServiceSwansboro.tsx:23`, `TreeTrimming.tsx:51`, `StumpGrinding.tsx:46`. The content is good; the markup forfeits structured extraction and list rich-results site-wide.

---

### 🟠 F6 — What is `/blog`? — **RESOLVED**

**`/blog` is a real, second, separate blog on the marketing site** — the brief's Option 2.
- `src/pages/BlogPage.tsx` renders a "Tree Care Guides" index listing **8 internal guide pages** (`/tree-removal-cost-north-carolina`, `/storm-damage-trees-guide`, `/do-you-need-a-permit-to-remove-a-tree-nc`, `/tree-removal-near-house-…`, `/tree-trimming-vs-pruning`, `/leaning-tree-dangerous-…`, `/tree-removal-tight-spaces-…`, `/spider-lift-tree-removal-…`).
- It **does not link to `blog.godhans.com`** anywhere (grep for `blog.godhans` in `src/` → **zero hits**).
- **Consequence:** the engine's `blog.godhans.com` is **orphaned** from the marketing site — nothing on `godhans.com` links to it. The nav "Blog" points to an entirely separate on-site guides hub.
- **Duplicate/competing-content risk:** the on-site guides (cost, storm damage, permits) cover the same topics as the subdomain posts (see §F). Two properties, overlapping intent, no cross-linking.

---

### 🟡 F7 — Self-defeating stats — **CONFIRMED, all hard-coded**

| Stat | Source | Renders on | Issue |
|---|---|---|---|
| "500+ Jobs Completed" | `siteData.ts:241` (`TRUST_STATS`) | Homepage (`TrustSection.tsx:41`) | Hardcoded. ~38/yr over 13 years — undersells the business. |
| "5.0 · 17 Google Reviews" | `siteData.ts:22-23` + `ReviewsSection.tsx:49,124` | Homepage, reviews page, static JSON-LD (all 32) | Hardcoded; goes stale. |
| "13+ Years in Business" | `siteData.ts:240` | Homepage | Hardcoded (should compute — see F2a). |
| 3 displayed testimonials all "May 2026" | `siteData.ts:186,194,202` | Homepage reviews | One push, reads as no velocity. Note: a *second*, unrelated 12-item testimonial set lives in `constants.ts:39` (`TESTIMONIALS`) — see §D data-model note. |

All hard-coded; none live-pulled. They will drift from reality the day the business grows.

---

## B. CREDENTIAL-CLAIM INVENTORY (F2b)

| # | Claim | File:line | Renders on | Verdict |
|---|---|---|---|---|
| 1 | "Our **ISA-certified arborists** read every tree…" | `siteData.ts:78` | Homepage | 🔴 **FALSE (P0)** — owner-confirmed |
| 2 | "**Arborist-Led** Crown Work" (headline) | `siteData.ts:76` | Homepage/services | 🟡 PARTIAL — Michael is a working arborist; "led" is defensible, but avoid implying a credentialed team |
| 3 | "**Arborist-led** crew, precise results" (meta) | `siteData.ts:88` | Trimming meta | 🟡 PARTIAL — same as above |
| 4 | "Fully Licensed & Insured" | `siteData.ts:32`; Footer:33; Hero-adjacent; many pages | Site-wide | 🟠 UNVERIFIED — confirm license + insurance are current |
| 5 | "Liability & Workers' Comp Coverage" | `siteData.ts:33` | About/trust | 🟠 UNVERIFIED |
| 6 | "Fully licensed, **bonded**, and insured" | `constants.ts:145`; `TreeRemovalNearHouse.tsx:25`; `TreeServiceCampLejeune.tsx:23,28`; `TreeServiceSneadsFerry.tsx:23`; `TreeServiceSwansboro.tsx:23`; `TreeRemovalTightSpaces.tsx:55` | Multiple | 🟠 UNVERIFIED — "**bonded**" is a specific claim; confirm a surety bond actually exists or drop the word |
| 7 | "Certificate of insurance available before work begins" | `TreeRemovalNearHouse.tsx:25,30`; `TreeServiceCampLejeune.tsx:28` | 2 pages | 🟠 UNVERIFIED — deliverable promise; ensure it can be honored |
| 8 | "**Veteran-Owned** & Operated" | `siteData.ts:34`; site-wide | Site-wide | 🟢 TRUE — owner-confirmed (Michael & James, USMC) |
| 9 | "**Disabled-Veteran Owned**" | `siteData.ts:35`; `TrustSection.tsx:77` | Homepage/trust | 🟠 UNVERIFIED — brief confirms *veteran-owned*; the *disabled*-veteran status is a stronger, separate claim — confirm before it stays |
| 10 | "…leave your yard cleaner than we found it — **guaranteed**" | `Hero.tsx:77` | Homepage | 🟡 PUFFERY — a "guarantee"; low risk but unbacked |
| 11 | "zero property damage" / "with zero property damage" | `siteData.ts:59`; `ServicesPage.tsx:13` | Homepage/services | 🟡 PUFFERY — absolute claim |

---

## C. DURATION-CLAIM INVENTORY (F2a)

| # | Instance | File:line | Verdict |
|---|---|---|---|
| 1 | "20+ Years Serving Onslow County" | `EmergencyTreeService.tsx:44` | 🔴 FALSE |
| 2 | "over two decades clearing storm damage" | `EmergencyTreeService.tsx:45` | 🔴 FALSE |
| 3 | "20+ years of hands-on tree experience" | `EmergencyTreeService.tsx:45` | 🔴 FALSE |
| 4 | `TRUST_STATS` "13+" (hardcoded literal) | `siteData.ts:240` | 🟡 Hardcoded — correct in 2026, will drift |
| 5 | `founded: 2013` (source of truth) | `siteData.ts:20` | 🟢 TRUE |
| 6 | `yearsInBusiness = getFullYear()-2013` (computed) | `siteData.ts:21` | 🟢 TRUE (correct pattern) |
| 7 | "Est. 2013" | `Hero.tsx:55` | 🟢 TRUE |
| 8 | "{yearsInBusiness}+ Years Experience" | `Hero.tsx:100`, `constants.ts:149` | 🟢 TRUE (computed) |
| 9 | "since 2013" ×5 | `LocationPage.tsx:30,39,48,57,66`; `TrustSection.tsx:79` | 🟢 TRUE |

**Only rows 1–3 are false claims.** Row 4 is a latent divergence bug. The single-source `FOUNDED_YEAR` the brief recommends already exists as `BUSINESS.founded`; the fix is to route rows 1–4 through it.

---

## D. NEW FINDINGS (code-only, not in F1–F7)

1. **🟠 Pricing exists but contradicts itself and the owner's real data** (revises the brief's "ZERO PRICING" — see §G/pricing). Two pages quote **$300**, below the stated **$800 minimum** everywhere else and in owner data: `TreeServiceJacksonvilleNC.tsx:63` and `TreeServiceSneadsFerry.tsx:29` ("$300–$2,500+"). The ceiling caps at **$3,500–$4,000** (`TreeRemovalCost.tsx`, `SpiderLiftRemoval.tsx:17`), badly underselling the owner's real **$6,000–$8,000** (near structures/power lines) and **$10,000+** jobs.

2. **🟠 Fragmented single-source-of-truth for cities/areas.** Three divergent lists:
   - `SERVICE_CITIES` (10) — `siteData.ts:168`
   - `SERVICE_AREAS` (12, adds Pumpkin Center, Dixon, Stella, **Cape Carteret** — which is Carteret County, not the stated footprint) — `constants.ts:126`
   - Static JSON-LD `areaServed` (7 — **missing Holly Ridge, Surf City, Camp Lejeune**) — `index.html`
   These should derive from one list.

3. **🟠 Two separate testimonial datasets.** `REVIEWS` (3 items, all "May 2026") in `siteData.ts:181` vs `TESTIMONIALS` (12 items) in `constants.ts:39`. Different authors, no shared source; `reviewCount` is a third independent literal (`17`).

4. **🟠 Duplicate + fragmented LocalBusiness schema** — every ServicePage/About page carries **two** LocalBusiness nodes (static + data-rh) under **three different `@id`s** site-wide (§F4). Consolidate to one canonical `@id`.

5. **🟡 Legacy redirects point to the wrong page.** `vercel.json` redirects `/locations/maysville-nc`, `/locations/beulaville-nc`, `/locations/holly-ridge-nc` → `/tree-service-jacksonville-nc`, even though those city pages **now exist** (`/tree-service-maysville-nc`, etc.). Legacy URLs lose their specific target.

6. **🟡 `LocationPage` cities are second-class in schema.** The 4 template cities (Maysville, Beulaville, Holly Ridge, Surf City) emit **no** data-rh JSON-LD, **no** FAQPage/BreadcrumbList, and **no** build-marker — while the 6 bespoke `ServicePage` cities do. Ironically these 4 have the *best* local copy (rivers, forests, soil) while the schema-rich Hubert/Richlands pages are the thinnest (§G).

7. **🟡 Homepage video section is silently absent.** All 4 `VIDEOS` are `PLACEHOLDER_*` (`siteData.ts:208-237`), so `VideoSection.tsx:65-66` returns `null` and the "Watch Godhans In Action" block never renders. Also, the referenced thumbnails `/images/video-thumb-*.jpg` (4) **do not exist** in `public/images/` — currently harmless (guarded by the early return) but a latent 404 the moment a real `youtubeId` is added.

8. **🟢 Encoding — clean.** A dash-mojibake scare during review did not reproduce: no U+FFFD replacement characters exist in `dist/` HTML.

9. **🟢 AI-bot access — clean.** `public/robots.txt` is `User-agent: * / Allow: /`. **No** blocking of `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `Bingbot`, or `Applebot`, and `vercel.json` sets `X-Robots-Tag: index, follow`. The "blocked-by-default" risk the brief raised is **ruled out**.

---

## E. METADATA COVERAGE MATRIX (§3.4)

All 32 prerendered routes parsed. Legend: **title ✓** = unique per-route (react-helmet `data-rh`) title present · **canon ✓** = self-canonical present & correct · **OG/TW ✓** = og:title/url/description/image + twitter:card/title/description all present · **BM** = `build-marker` · JSON-LD: **A** = Breadcrumb+LocalBusiness+FAQPage (data-rh) + TreeService/LocalBusiness (static); **A′** = About variant (WebPage+LocalBusiness+Breadcrumb, no FAQ); **B** = static TreeService/LocalBusiness only.

| Route | title | desc | canon | OG | TW | BM | JSON-LD |
|---|---|---|---|---|---|---|---|
| index.html (home) | ✓ | ✓ | ✓ `/` | ✓ | ✓ | — | B |
| about.html | ✓ | ✓ | ✓ | ✓ | ✓ | — | A′ |
| services.html | ✓ | ✓ | ✓ | ✓ | ✓ | — | B |
| service-area.html | ✓ | ✓ | ✓ | ✓ | ✓ | — | B |
| contact.html | ✓ | ✓ | ✓ | ✓ | ✓ | — | B |
| reviews.html | ✓ | ✓ | ✓ | ✓ | ✓ | — | B |
| blog.html | ✓ | ✓ | ✓ | ✓ | ✓ | — | B |
| privacy-policy.html | ✓ | ✓ | ✓ | ✓ | ✓ | — | B |
| tree-service-jacksonville-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| tree-removal-jacksonville-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| tree-trimming-jacksonville-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| stump-grinding-jacksonville-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| emergency-tree-service-jacksonville-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| land-clearing-jacksonville-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| storm-cleanup-jacksonville-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| spider-lift-tree-removal-jacksonville-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| tree-removal-cost-north-carolina | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| tree-removal-near-house-jacksonville-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| tree-removal-tight-spaces-jacksonville-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| do-you-need-a-permit-to-remove-a-tree-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| storm-damage-trees-guide | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| tree-trimming-vs-pruning | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| leaning-tree-dangerous-after-storm | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| tree-service-camp-lejeune-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| tree-service-hubert-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| tree-service-richlands-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| tree-service-swansboro-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| tree-service-sneads-ferry-nc | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | A |
| tree-service-maysville-nc | ✓ | ✓ | ✓ | ✓ | ✓ | **—** | **B** |
| tree-service-beulaville-nc | ✓ | ✓ | ✓ | ✓ | ✓ | **—** | **B** |
| tree-service-holly-ridge-nc | ✓ | ✓ | ✓ | ✓ | ✓ | **—** | **B** |
| tree-service-surf-city-nc | ✓ | ✓ | ✓ | ✓ | ✓ | **—** | **B** |

**Matrix takeaways:**
- **No F1 defect in the build.** Every page has its own unique title; no page inherits the homepage title; no empty/mismatched canonicals; OG/Twitter complete everywhere.
- **The `build-marker` is itself a build artifact in production** (rubric auto-deduction) — present on 20 pages. Its *inconsistency* (absent on the 4 `LocationPage` cities + the 8 component-built pages) is a useful tell of which pages route through `ServicePage`. Recommend removing the marker entirely, not adding it.
- **The 4 `LocationPage` cities lack FAQ/Breadcrumb/LocalBusiness data-rh schema** — a real structured-data gap for those money-adjacent pages.
- **Static geo + static LocalBusiness are on all 32** → city pages misdeclare Jacksonville (F4).

---

## F. LIVE BLOG INVENTORY + DRAFT 301 MAP (§4)

`blog.godhans.com` is **reachable** (HTTP 200; a bogus slug returns a real 404, so these are genuine pages). `godhans.com/blog` is the on-site guides index (200, no redirect). **These are two different properties** (F6).

**Live subdomain URLs:**

| Slug | Resolves | Title | Date | Author | areaServed | Issues |
|---|---|---|---|---|---|---|
| `/` | 200 | index | — | — | — | lists posts |
| `/jacksonville` | 200 | "Tree Services in Jacksonville, NC" | prose "updated June 2025" | — | 10 (misspelled `beualaville`) | **Not a post — a service landing page** duplicating `godhans.com/tree-service-jacksonville-nc` |
| `/calculating-a-real-clear-fall-zone-in-a-tight-western-boulevard-subdivision-lot` | **200** | "How Godhans Calculates a Real Clear Fall Zone…" | **MISSING** | **NO Person** (author = Organization) | 10, misspelled, lowercased | brief's `western-boulevard` test → resolves |
| `/city-of-jacksonville-permit-rules-vs-onslow-county-ordinance-which-applies-to-your-address` | 200 | "City of Jacksonville Permit Rules vs. Onslow County Ordinance…" | **MISSING** | **NO Person** | 10, misspelled, lowercased | — |
| `/crane-removal-vs-sectional-climb-and-dismanttle-when-each-is-the-right-call-and-what-it-costs` | **200** | "Crane vs. Climb-and-Dismantle…" | **MISSING** | **NO Person** | 10, misspelled, lowercased | slug typo `dismanttle` (also in `serviceType`); brief's `climb-and-dismanttle` test → resolves |

**Confirmed stale artifacts (match the engine audit's predictions):**
- `areaServed` on **every** post = `Jacksonville, maysville, hubert, richlands, beualaville, swansboro, surf city, holly ridge, camp lejeune, sneads ferry` — **10 cities, lowercased, with `beualaville` misspelled** (correct = Beulaville). The main site uses the correct spelling → the subdomain is the stale copy.
- **No `datePublished`/`dateModified`** on any post.
- **No `Person` author** — every post's `author` is the Organization `@id`, confirming the `deployHub` author-drop is live.
- Slug typo `dismanttle` persists in URL + schema.

**DRAFT 301 MAP** (`blog.godhans.com/<slug>` → `godhans.com/blog/<corrected-slug>`; destinations are *proposed* — the `/blog/<slug>` post paths are **not yet confirmed live** on the main site, create/verify before enabling):
```
/calculating-a-real-clear-fall-zone-in-a-tight-western-boulevard-subdivision-lot
    → https://godhans.com/blog/calculating-a-real-clear-fall-zone-in-a-tight-western-boulevard-subdivision-lot
/city-of-jacksonville-permit-rules-vs-onslow-county-ordinance-which-applies-to-your-address
    → https://godhans.com/blog/city-of-jacksonville-permit-rules-vs-onslow-county-ordinance-which-applies-to-your-address
/crane-removal-vs-sectional-climb-and-dismanttle-when-each-is-the-right-call-and-what-it-costs
    → https://godhans.com/blog/crane-removal-vs-sectional-climb-and-dismantle-when-each-is-the-right-call-and-what-it-costs   # typo fixed
/jacksonville
    → https://godhans.com/tree-service-jacksonville-nc   # dedupe: point to existing canonical service page, not a /blog post
```

---

## G. PER-ROUTE RUBRIC SCORES + single highest-impact fix

Scored per the §5 rubric (100 pts). Bucket: **90+** citable · **75–89** ranks, won't be cited · **60–74** filler · **<60** wasting money.

| Route | Score | Bucket | Single highest-impact fix |
|---|---:|---|---|
| `/` (home) | 62 | filler→ok | Remove ISA lie (F2b) & Maps iframe; make F3 images crawlable |
| `/tree-service-jacksonville-nc` (hub) | 74 | filler | Add real local specifics + `Service` schema; differentiate from homepage head term |
| `/tree-removal-jacksonville-nc` | 72 | filler | Add owner's real price bands; convert pseudo-lists to `<ul>` |
| `/emergency-tree-service-…` | 66 | filler | Fix F3 gallery (pixel→real src) + purge "20+ years" (F2a); great FAQ already marked up |
| `/storm-cleanup-jacksonville-nc` | 55 | **wasting** | Consolidate with Emergency or repoint to non-emergency debris intent (cannibalization) |
| `/tree-trimming-jacksonville-nc` | 70 | filler | Remove "ISA-certified" from shared data; add pricing |
| `/stump-grinding-jacksonville-nc` | 66 | filler | Add price band ($ per stump/diameter); semantic lists |
| `/land-clearing-jacksonville-nc` | 78 | ranks | Strongest service copy (NC DEMLR, 50-ft buffer); add per-acre pricing + `Service` schema |
| `/spider-lift-tree-removal-…` | 68 | filler | Fix `PrecisionRemoval` LazyImage (F3); add access-scenario pricing |
| `/tree-removal-cost-north-carolina` | 70 | filler | **Rescope to Jacksonville + insert owner's real high-end ($6–8k near structures, $10k+)**; fix $300 vs $800 contradiction |
| `/tree-removal-near-house-…` | 72 | filler | Fix F3 image; add the near-structure price premium (this page's whole point) |
| `/tree-removal-tight-spaces-…` | 70 | filler | Fix F3 image; semantic lists |
| `/do-you-need-a-permit-…` | 74 | filler | Good topical fit; add city/county specifics + `HowTo`/`FAQ` |
| `/storm-damage-trees-guide` | 71 | filler | Semantic lists; internal links to emergency/storm money pages |
| `/tree-trimming-vs-pruning` | 72 | filler | Solid explainer; add proof/photos |
| `/leaning-tree-dangerous-after-storm` | 70 | filler | Add price + "how fast" specifics |
| `/tree-service-maysville-nc` | 76 | ranks | **Add FAQ/Breadcrumb/LocalBusiness schema** (LocationPage gap); copy already differentiated (White Oak River, Croatan, Jones Co.) |
| `/tree-service-beulaville-nc` | 74 | filler | Same schema gap; copy good (Duplin farm/timber) |
| `/tree-service-holly-ridge-nc` | 73 | filler | Same schema gap; copy good (Stump Sound, sandy soil) |
| `/tree-service-surf-city-nc` | 73 | filler | Same schema gap; copy good (Topsail, salt air) |
| `/tree-service-swansboro-nc` | 70 | filler | Light-local; add landmarks + pricing |
| `/tree-service-sneads-ferry-nc` | 68 | filler | Fix $300 vs $800 contradiction; add landmarks |
| `/tree-service-camp-lejeune-nc` | 72 | filler | Strong military angle; add PCS-timeline proof |
| `/tree-service-hubert-nc` | 52 | **wasting** | **Doorway page** — near-zero local content; rewrite with real Hubert specifics or consolidate |
| `/tree-service-richlands-nc` | 52 | **wasting** | **Doorway page** — "we understand the local environment" filler; rewrite or consolidate |
| `/services` | 64 | filler | Thin hub; link depth + `Service` schema |
| `/service-area` | 63 | filler | Reconcile the 3 city lists; add map of real coverage |
| `/about` | 80 | ranks | **Add `Person` schema for Michael & James** — strongest E-E-A-T asset on the site |
| `/reviews` | 66 | filler | Add `Review` items (not just AggregateRating); real dates |
| `/blog` | 68 | filler | Decide vs subdomain (F6); it's a guides hub, label it so |
| `/contact` | 60 | filler | Formspree form; add NAP + LocalBusiness consistency |
| `/privacy-policy` | 55 | utility | N/A (utility page) |

*Calibration note:* the external audit scored the site 41/100 — that number was **dragged down almost entirely by F1/F2/F3 as they appeared on the stale deploy**. In the current code F1 is resolved and F3 is a single-component fix, so the realistic floor is meaningfully higher. The city pages and the emergency FAQ remain genuinely good, consistent with the brief.

### §5 gap confirmations
- **Pricing gap — PARTIALLY REFUTED.** The site is **not** priceless: `TreeRemovalCost.tsx` publishes bands ($800–$3,500), and several pages quote figures. **But** (a) there is **no Jacksonville-scoped cost page** (the cost page is NC-scoped), (b) the ranges **contradict** each other ($300 vs $800 floor) and **undersell** the owner's real high end ($6–8k / $10k+), and (c) execution is generic ("estimates vary"). **Recommendation stands:** build `/tree-removal-cost-jacksonville-nc` using the owner's real §1 ranges — largest single content opportunity.
- **Cannibalization — CONFIRMED:** `/emergency-tree-service-…` vs `/storm-cleanup-…` share quick-answer phrasing, the "when to call" warning list, and the insurance block near-verbatim. Consolidate or split by intent (emergency = hazard/24-7; storm cleanup = post-event debris).
- **Overlap — CONFIRMED (moderate):** `/` and `/tree-service-jacksonville-nc` both target "tree service Jacksonville NC" (identical head term). `/tree-removal-…` is a distinct keyword — acceptable separation.
- **County accuracy — CLEAN:** Maysville→Jones, Beulaville→Duplin correctly attributed; the other 8 correctly Onslow. Only nit: the hardcoded "throughout Onslow County and beyond" CTA (`LocationPage.tsx:155`) renders on the Jones/Duplin pages.

---

## H. SEVERITY-RANKED FIX LIST

Effort S/M/L · Regr = regression risk.

### 🔴 P0
| # | Fix | Files | Effort | Regr |
|---|---|---|---|---|
| P0-1 | **Verify production is deployed from ≥ `a90daf5`** and edge cache is purged (F1 may still be live despite correct code) | deploy/CDN | S | Low |
| P0-2 | **Remove/correct the ISA-certification claim** (liability) | `siteData.ts:78` (+`76,88`) | S | Low |
| P0-3 | **Purge the three "20+ years / two decades" false claims** | `EmergencyTreeService.tsx:44-45` | S | Low |
| P0-4 | **Fix `LazyImage` so prerendered HTML carries the real `src`/`srcSet`** (F3 — invisible proof images site-wide) | `LazyImage.tsx:62-63` | M | Med (touches all galleries) |

### 🟠 P1
| # | Fix | Files | Effort | Regr |
|---|---|---|---|---|
| P1-1 | Remove deprecated geo meta tags (contradict city pages) | `index.html` head | S | Low |
| P1-2 | Consolidate LocalBusiness to one `@id`; drop duplicate node; add `WebSite` or remove dangling `#website` ref | `index.html`, `ServicePage.tsx:97`, `MeetTheOwners.tsx:76` | M | Med |
| P1-3 | Add `Person` schema for Michael & James | `MeetTheOwners.tsx` | S | Low |
| P1-4 | Bring the 4 `LocationPage` cities up to ServicePage schema parity (FAQ/Breadcrumb/LocalBusiness) | `LocationPage.tsx` | M | Low |
| P1-5 | Reconcile the 3 city lists + 2 testimonial sets into single sources | `siteData.ts`, `constants.ts`, `index.html` | M | Med |
| P1-6 | Fix pricing contradictions ($300 vs $800 floor) and correct legacy `/locations/*` redirects | pages listed §D; `vercel.json` | S | Low |
| P1-7 | Resolve Emergency vs Storm Cleanup cannibalization | `EmergencyTreeService.tsx`, `StormCleanup.tsx` | M | Med |

### 🟡 P2
| # | Fix | Files | Effort | Regr |
|---|---|---|---|---|
| P2-1 | Convert `•/⚠/✔` pseudo-lists to semantic `<ul>` (parse in `ServicePage`) | `ServicePage.tsx:278` (+ data) | M | Med |
| P2-2 | Rewrite Hubert & Richlands doorway pages with real local content | 2 files | M | Low |
| P2-3 | Compute "13+" from `founded`; reconsider "500+ jobs" | `siteData.ts:240-241` | S | Low |
| P2-4 | Add `Service` schema to service pages | `ServicePage.tsx` | S | Low |
| P2-5 | Auto-generate `sitemap.xml` with real `lastmod` (currently hand-kept, uniform 2026-05-11) | build script | M | Low |

### 🟢 P3
| # | Fix | Files | Effort | Regr |
|---|---|---|---|---|
| P3-1 | Remove `build-marker` from production output | `ServicePage.tsx:131` etc. | S | Low |
| P3-2 | Remove dead `video-thumb-*.jpg` refs / wire real videos | `siteData.ts:208-237` | S | Low |
| P3-3 | Verify "bonded" / "disabled-veteran" claims or soften | multiple | S | Low |

---

## I. TACTIC REVERSALS — abandon, don't improve

1. **Google Maps iframe** (`ServiceAreaSection.tsx:94-95`, homepage) — third-party JS + LCP cost for **zero** citability (retrieval pipelines don't render iframes). **Remove**; replace with a static styled service-area list/graphic if visual coverage is wanted.
2. **Deprecated geo meta tags** (`geo.*`, `ICBM` — all 32 pages) — no engine has used them in a decade, and they actively contradict city pages. **Remove.**
3. **"20+ Years"** (emergency page) — reverse to the true "since 2013 / 13 years." Truth is the stronger claim.
4. **"500+ Jobs Completed"** — makes a 13-year veteran-owned business look part-time (~38/yr). **Drop** or replace with a non-self-defeating proof point.
5. **`blog.godhans.com` subdomain** — split authority, stale artifacts (misspelled `beualaville`, no dates, no author), orphaned from the marketing site. **Migrate to `godhans.com/blog/` and retire** (§F).
6. **`build-marker` meta** — a build artifact leaking into production; **remove**, don't propagate to the pages that currently lack it.

---

## J. DECISION REGISTER

| # | Decision | Options | Recommendation |
|---|---|---|---|
| 1 | Fix `/tree-removal-jacksonville-nc` now or batch? | (a) Confirm/redeploy now; (b) batch with other P0s | **(a) now** — code is already correct; the only risk is a stale production deploy still serving the shell. Verify deploy ≥ `a90daf5` + purge cache **today**. |
| 2 | How to replace the false ISA claim? | (a) Delete the sentence; (b) replace with honest experience-led credential | **(b)** — swap to "working arborist, Onslow County since 2013, veteran-owned." Keeps the E-E-A-T, drops the liability. |
| 3 | What is `/blog`? | Resolved: on-site guides hub; subdomain is separate & orphaned | **Migrate subdomain → `/blog/` and retire it**; keep `/blog` as the unified hub. Gates the subfolder migration (§F 301 map ready). |
| 4 | Remove the Google Maps iframe? | (a) Remove; (b) keep | **(a) Remove** — CWV cost, zero citability. |
| 5 | Remove the geo meta tags? | (a) Remove; (b) keep | **(a) Remove** — deprecated and self-contradicting. |
| 6 | "500+ Jobs Completed"? | (a) Remove; (b) raise to a real, higher number; (c) live-pull | **(a) or (b)** — never a number that undersells. |
| 7 | Build `/tree-removal-cost-jacksonville-nc`? | (a) Build new local page; (b) rescope the NC page; (c) leave | **(a)** with owner's real §1 ranges incl. the $6–8k near-structure / $10k+ tier. Largest single opportunity; fix the $300 contradiction while at it. |
| 8 | Introduce SSR/prerendering? | Already SSG | **No action** — `vite-react-ssg` already prerenders full HTML per route. The only rendering-adjacent bug is `LazyImage` (P0-4), not the architecture. |
| 9 | Re-render/backfill live blog artifacts? | (a) Regenerate w/ correct spelling+dates+author then migrate; (b) migrate as-is; (c) leave | **(a)** — regenerate JSON-LD (fix `beualaville`, add dates + `Person`), fix the `dismanttle` slug, then 301 to `/blog/`. |

---

**Zero lines of code changed.** F1 root-caused (config, already removed in HEAD — verify the deploy). F2b + F2a + F3 are the live P0s. Full inventories and the migration 301 map are above.
