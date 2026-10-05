/** Canonical origin — apex, no trailing slash. Absolute URLs build from this. */
export const SITE_URL = "https://godhans.com";

/**
 * Stable @id of the one canonical LocalBusiness node (emitted by
 * <BusinessSchema/>). Anything that needs to *reference* the business —
 * Review/itemReviewed, WebPage/about — points here instead of restating a
 * partial copy of the business.
 */
export const BUSINESS_ID = `${SITE_URL}/#business`;

/** Stable @id of the WebSite node (also emitted by <BusinessSchema/>). */
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * The two named people behind the company, and the only source for either
 * name, role or Person @id. Nothing may retype "Michael Godbersen", "Owner",
 * "James Godbersen" or "Co-Owner" as a literal again: the visible H2s on
 * /about, the portrait alt text, the author byline on the guide pages and every
 * Person node in the structured data all read from here.
 *
 * `personId` is the stable @id of each Person node. Those nodes are emitted in
 * two places on purpose:
 *
 *   - <BusinessSchema/> emits a lean stub site-wide (name, jobTitle, url,
 *     worksFor) so LocalBusiness.founder and .employee resolve inside the same
 *     @graph on every page instead of dangling.
 *   - /about emits the full node — portrait, knowsAbout, description — under
 *     the SAME @id. Matching @ids are one entity in JSON-LD, so the two merge
 *     on /about rather than duplicating.
 *
 * AUTHOR is Michael specifically because he is the sole author of the site's
 * content. James is co-owner and does not author pages, which is why only
 * AUTHOR feeds <AuthorByline/>. Do not add a third person here — no one else
 * is an owner or an author of this site.
 */
export const AUTHOR = {
  name: "Michael Godbersen",
  role: "Owner",
  personId: `${SITE_URL}/about#michael`,
} as const;

/** Co-owner. Named but never an author — see the note on AUTHOR. */
export const JAMES = {
  name: "James Godbersen",
  role: "Co-Owner",
  personId: `${SITE_URL}/about#james`,
} as const;

/**
 * The year Godhans began operating in Onslow County. Single source for every
 * experience claim on the site.
 *
 * Prefer "since 2013" in prose over a computed span. `BUSINESS.yearsInBusiness`
 * does compute one, but only from __BUILD_YEAR__ (a build-time define, never
 * `new Date()` at runtime) so a prerendered page cannot drift from the clock of
 * whoever loads it — see the `define` note in vite.config.ts.
 *
 * `BUSINESS.founded` and `BUSINESS.yearsInBusiness` both derive from this.
 * Never write a years-of-experience figure that does not resolve back here:
 * batch 5 found a page claiming "more than twenty years", which was wrong.
 */
export const YEAR_FOUNDED_LOCAL = 2013;

export const BUSINESS = {
  name: "Godhans Tree Company",
  legalName: "Godhans LLC",
  shortName: "Godhans",
  tagline: "We Take On The Jobs Others Won't",
  phone: "(618) 704-4861",
  phoneHref: "tel:+16187044861",
  phoneRaw: "+16187044861",
  email: "godhanstree@gmail.com",
  emailHref: "mailto:godhanstree@gmail.com",
  address: {
    street: "4445 Gum Branch Rd",
    city: "Jacksonville",
    state: "NC",
    zip: "28540",
    full: "4445 Gum Branch Rd, Jacksonville, NC 28540",
  },
  /**
   * The actual business pin at 4445 Gum Branch Rd — matches the Google Business
   * Profile and the Local Falcon grid origin.
   *
   * These were 34.7541, -77.4302 until 2026-09-30, which is downtown
   * Jacksonville, roughly 4.9 miles southeast of the shop. Every consumer of
   * this constant reads it (LocalBusiness/geo, the geo.position and ICBM meta
   * tags, the Google Maps deep link), so the whole site pointed at the wrong
   * place while the embedded map on /service-area was already correct.
   *
   * Do not round these. Do not restate them anywhere — the meta tags used to
   * carry their own hardcoded copy, which is how the two drifted apart.
   */
  coordinates: { lat: 34.8202161, lng: -77.458531 },
  hours: "Open 24 Hours — 7 Days a Week",
  hoursShort: "24/7",
  founded: YEAR_FOUNDED_LOCAL,
  // Build-time constant, not `new Date()` — see the `define` note in vite.config.ts.
  // Derives from the constant too: this line used to repeat the literal 2013,
  // which meant the "one source of truth" had two places to edit.
  yearsInBusiness: __BUILD_YEAR__ - YEAR_FOUNDED_LOCAL,
  // The ONLY place a review count lives. Every visible count, the /reviews
  // meta description, and the hero chip read from here — see the list in
  // README under "Review count". Update this when the Google total moves.
  reviewCount: 27,
  reviewRating: "5.0",
  primaryCity: "Jacksonville, NC",
  county: "Onslow County",
  social: {
    // Facebook's canonical profile URL, not the /profile.php?id= form — that
    // one 301s here, and `sameAs` should name the destination rather than a
    // redirect hop.
    facebook: "https://www.facebook.com/people/Godhans/100057407111124/",
    youtube: "https://www.youtube.com/@Godhanstree",
  },
  gbpUrl: "https://g.page/godhans",
  credentials: [
    "$2M Liability & Workers' Comp — Insured",
    "Every Machine Individually Insured",
    "Bondable for Commercial Work",
    "Veteran-Owned & Disabled-Veteran Owned",
    "24/7 Emergency Response",
    "Free Estimates",
  ],
} as const;

/**
 * A large tree hard against, or leaning over, a house.
 *
 * Hoisted out of PRICING because two entries describe this same job from
 * different directions — `nearHouse.besideStructure` (any mature tree beside a
 * structure) and `largePine.leaningOverHouse` (the pine case) — and batch 5
 * shipped them disagreeing at the top end, $8,000 against $7,000. The owner's
 * ruling is $6,000–$8,000, so both now read from one binding rather than two
 * numbers someone has to remember to keep in step.
 */
const BESIDE_STRUCTURE = "$6,000–$8,000";

/**
 * The owner's "same tree, two prices" example — ONE specific tree, never an
 * average, and never to be presented as one.
 *
 * Hoisted so that `stories.sameTree` can interpolate it instead of spelling the
 * figures out in prose, and so the cost page can lead a heading with the same
 * numbers without hardcoding them. One binding, one set of figures.
 *
 * ⚠️ UNRESOLVED, PENDING OWNER RULING: `openYard` here is $6,000 for an 80–90 ft
 * pine of 3+ ft diameter in an open yard, while `largePine.openYard` is
 * $3,000–$4,000 for an 80 ft+ pine in an open yard. Both are the owner's. The
 * only variable that separates them is DIAMETER — this example specifies 3+ ft,
 * the largePine band specifies no diameter at all. Do NOT average them, and do
 * NOT edit one to match the other; the owner decides whether diameter is the
 * official distinction.
 */
const SAME_TREE_EXAMPLE = {
  size: "80–90 foot pine, three feet or more in diameter",
  openYard: "$6,000",
  withObstacles: "$10,000+",
} as const;

/**
 * PRICING — the single source of truth for every price shown on the site.
 * Nothing anywhere should hardcode a dollar range; import from here and
 * interpolate. Change a number once, it changes everywhere. (Phase 2.)
 */
export const PRICING = {
  removal: {
    minimum: "$800",
    most: "$1,500–$3,500",
    large: "$3,500–$6,000",
    exceptional: "$10,000+",
    summary:
      "Removals start at an $800 minimum. Most run $1,500–$3,500; large or hazardous trees run $3,500–$6,000, and exceptional jobs — tight access, severe hazards, complex rigging — start at $10,000 and go up.",
  },
  trimming: {
    minimum: "$800",
    standard: "$800–$1,500",
    lift: "$1,500+",
    large: "$3,000+",
    summary:
      "Trimming starts at an $800 minimum. Standard trimming with no lift runs $800–$1,500; lift access for high canopies or work over the roof is $1,500+, and large oaks or difficult-access jobs run $3,000+.",
  },
  /**
   * Stump grinding prices its own way: it is measured work, not a crew-day, so
   * it has a far lower minimum than removal/trimming and a per-inch rate on top.
   * The $800 excavation figure is a *different service* (full stump excavation
   * with fresh fill) — never collapse it into the grinding numbers.
   */
  stump: {
    minimum: "$200",
    perInch: "$6 per inch",
    most: "$200–$500",
    excavation: "$800",
    depthStandard: "10 inches",
    depthMax: "10+ inches",
    // Two forms of the same figure. `industryNorm` is the noun ("the industry
    // norm is 6–8 inches"); `industryNormAdj` modifies a following noun ("the
    // 6–8 inch industry norm"), which needs the singular. Pick by grammar.
    industryNorm: "6–8 inches",
    industryNormAdj: "6–8 inch",
    /**
     * Old-growth oak and pine stumps, which price nothing like the 2–3 ft
     * stumps `most` describes. Kept as its own figure so the ordinary range
     * never gets stretched to cover the outliers.
     */
    largest: "$1,500+",
  },
  /**
   * Emergency work on a tree that is ON a structure. Priced separately from
   * `removal` because almost none of the cost is the tree: it is after-hours
   * mobilization, crane or lift time, rigging a loaded trunk off a roof in
   * pieces, working around weather, and tarping the opening before we leave.
   */
  emergency: {
    structure: "$6,000–$15,000+",
  },
  /**
   * Resistograph testing, priced per tree rather than folded into the estimate.
   * The first two trees carry the setup; each extra tree on the same visit is
   * marginal time, which is why the rate halves after two. `minimum` exists so a
   * single-tree call is not quoted below the cost of turning up.
   */
  resistograph: {
    first2PerTree: 200,
    additionalPerTree: 100,
    minimum: 200,
  },
  /**
   * Removals where the tree is close enough to the house that position, not
   * size, sets the price. `typical` includes the stump.
   */
  nearHouse: {
    typical: "$1,300",
    mature: "$2,000–$3,200",
    besideStructure: BESIDE_STRUCTURE,
  },
  /**
   * Cabling and bracing — supplemental support hardware, priced per tree.
   * Both system types (steel-cable-and-hardware, or a non-invasive synthetic
   * wrap) land in the same range, so the choice is the customer's and not a
   * price decision.
   */
  cabling: {
    typical: "$1,500–$2,500",
    large: "$4,000+",
  },
  /**
   * Large pine removal, where position rather than size sets the price.
   *
   * These are the owner's figures for an 80ft+ loblolly, and they are the
   * source of truth for pine. Two overlaps to be aware of before editing:
   *
   *  - `removal.large` ($3,500–$6,000) is the general "large or hazardous
   *    tree" band. `openYard` below starts $500 under it, because a big pine
   *    with nothing around it is the easy end of "large" — not a contradiction,
   *    but do not average the two.
   *  - `leaningOverHouse` is the same job as `nearHouse.besideStructure` seen
   *    from the pine side. They used to disagree at the top end ($7,000 vs
   *    $8,000); the owner ruled for $6,000–$8,000, and both now read the
   *    BESIDE_STRUCTURE binding above. Do not re-split them into two literals.
   */
  largePine: {
    openYard: "$3,000–$4,000",
    leaningOverHouse: BESIDE_STRUCTURE,
    withObstacles: "$10,000+",
  },
  /**
   * Organic debris hauling (trees, brush, leaves) as a standalone service —
   * no demolition, no construction waste, no household junk.
   */
  debris: {
    minimum: "$800",
    perTrailer: "$400",
    localRadiusMiles: 5,
    trailersAtMinimum: "about two full trailers",
    bigTreeLoads: "3–5 loads",
  },
  /**
   * What the owner will and will not put a number on from a photo.
   *
   * These are the owner's own ballpark figures, and they are deliberately NOT
   * folded into `removal` — they answer a different question. `removal` is what
   * a job costs once we have seen it; this is the most that can honestly be said
   * before we have. `nearStructureFloor` is a floor, not a range, because the
   * honest answer above it is a site visit (see `stories.photoLimit`).
   */
  photoEstimate: {
    smallPineSize: "12–18 inches in diameter and 30–45 feet tall",
    smallPine: "$1,500–$2,500",
    nearStructureFloor: "over $5,000",
  },
  stories: {
    /**
     * NOT an average, and must never be presented as one — it is one specific
     * tree at two specific sites. The parameters (80–90 ft, 3+ ft diameter) are
     * the owner's and are load-bearing: a 3-foot-diameter pine is well above the
     * ordinary 80 ft+ loblolly that `largePine.openYard` ($3,000–$4,000) prices,
     * which is why the open-yard figure here is ~$6,000 and not that band. Those
     * two numbers are NOT reconciled in the data — the distinction is diameter,
     * and it is pending an owner ruling. Do not average them and do not quietly
     * change one to match the other.
     *
     * Also rendered on /tree-removal-jacksonville-nc (TreeRemoval.tsx), so
     * editing this string changes two pages, not one.
     */
    sameTreeExample: SAME_TREE_EXAMPLE,
    sameTree:
      `This is not an average — it is one tree. An ${SAME_TREE_EXAMPLE.size}, is about ${SAME_TREE_EXAMPLE.openYard} to take down in an open yard. Put obstacles under it — the house, fences, sheds, power lines — so that nothing can be dropped and every piece has to be sectioned and rigged out, and the same tree is ${SAME_TREE_EXAMPLE.withObstacles}. The tree doesn't change the price — the obstacles do.`,
    /**
     * The limit on photo estimates, in the owner's terms. Kept as prose rather
     * than a figure because the point of it is the refusal to give a figure.
     */
    photoLimit:
      "From photos you cannot tell a 28-inch, 75-foot pine from a 34-inch, 95-foot pine — even standing under it, that call is hard. And that difference is the difference between a lift and a climb, and between one day and two. We run a 90-foot lift, so it is rare that a top can't be reached or rigged; what the photo can't settle is how long getting to it takes.",
    mobilization:
      "Why we have an $800 minimum: getting a full crew and equipment to your property is the biggest fixed cost of any job. That's why we don't do $200 quick cuts — and why the crew that shows up can handle anything, from a single limb to a 90-foot removal over your roof.",
    position:
      "Position matters more than size. A 70-foot pine in an open yard drops in one piece; the same tree three feet off your bedroom wall comes down in sections on ropes, and that is the difference in the number.",
  },
} as const;

/**
 * The storm / insurance lead block, rendered above the fold on BOTH
 * /emergency-tree-service-jacksonville-nc and /storm-cleanup-jacksonville-nc.
 *
 * One constant, two pages, so the two can never drift — and so this exact
 * wording is the only version of it anywhere. It is approved copy: do NOT
 * strengthen it. Specifically, never write "you pay nothing", "we waive your
 * deductible", or "guaranteed covered" — we bill the insurer and work the claim,
 * which is not the same as promising an outcome we do not control.
 */
export const STORM_LEAD = {
  body:
    "Tree on your house? Our first job is stopping the damage. We get the tree off and tarp any openings as fast as it can be done safely — because water getting in is what turns a bad day into a major repair. We bill your insurance directly and work with your adjuster, doing everything we can so your cost stays at your normal deductible.",
  ctaLabel: `Call ${BUSINESS.phone} — 24/7.`,
} as const;

/**
 * CREDENTIAL — single source of truth for the trust/credential block rendered by
 * <WhyChooseGodhans/> across service + city pages (Phase 4). No page hardcodes
 * this text. "since 2013" is operating history; the LLC bullet carries no year —
 * the two must never collapse into "the LLC is 13 years old."
 */
/** Audience-dependent noun in the equipment-insurance sentence. */
export type DamageNoun = "home" | "property";

export const CREDENTIAL = {
  legalName: "Godhans LLC",
  sosId: "1961439",
  heading: `Veteran-Owned, Family-Operated — Serving ${BUSINESS.county} Since ${BUSINESS.founded}`,
  bullets: [
    "Veteran-owned & disabled-veteran-owned",
    "Family-operated — you talk to the people doing the work",
    `Serving ${BUSINESS.county} since ${BUSINESS.founded} — 3,500+ jobs`,
    "$2M general liability + workers' comp; every machine individually insured",
    "Godhans LLC — registered & active with the NC Secretary of State (SoSID 1961439)",
  ],
  /**
   * The damage noun is the only thing that varies by audience: a homeowner
   * reads "damages your home", a commercial buyer reads "damages your
   * property" (they may not own a home on the site at all). Everything else in
   * the sentence is identical, so this stays one string rather than two.
   * Defaults to "home" — every existing caller keeps its current wording.
   */
  equipmentInsurance: (damageNoun: DamageNoun = "home") =>
    `$2M general liability and workers' comp on every job — and every machine, including the spider lift, is individually insured. If a contractor's equipment isn't on the policy and it damages your ${damageNoun}, you hold the bill. Ours is covered.`,
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Area", href: "/service-area" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "tree-removal",
    name: "Tree Removal",
    slug: "tree-removal",
    href: "/tree-removal-jacksonville-nc",
    headline: "Safe, Controlled Removal — Any Size Tree",
    description:
      "Large-format boom trucks, strict safety protocols, and a crew that doesn't leave until your yard is cleaner than we found it. No job too big, no property too complex.",
    features: [
      "All tree sizes — from small ornamentals to 100ft+ hardwoods",
      "Safe, controlled felling with zero property damage",
      "Complete debris removal and haul-away",
      "Site cleanup and haul-away after removal",
      "Emergency removals available 24/7",
    ],
    metaTitle: "Tree Removal Jacksonville NC | Godhans Tree Company",
    metaDesc:
      `Expert tree removal in Jacksonville, NC. Veteran-owned, fully insured, boom trucks on every job. Free estimates — call ${BUSINESS.phone}.`,
  },
  {
    id: "tree-trimming",
    name: "Tree Trimming",
    slug: "tree-trimming",
    href: "/tree-trimming-jacksonville-nc",
    headline: "Arborist-Led Crown Work. Done Right.",
    description:
      "Precision thinning, pruning, raising, shaping, and dead branch removal. Michael reads every tree before we touch it — sound cuts, not guesswork.",
    features: [
      "Crown thinning and reduction",
      "Deadwood and hazard limb removal",
      "Vista pruning and canopy raising",
      "Storm damage trimming",
      "Commercial and residential properties",
    ],
    metaTitle: "Tree Trimming Jacksonville NC | Godhans Tree Company",
    metaDesc:
      `Professional tree trimming in Jacksonville, NC. Arborist-led crew, precise results. Free estimates — call ${BUSINESS.phone}.`,
  },
  {
    id: "stump-grinding",
    name: "Stump Grinding",
    slug: "stump-grinding",
    href: "/stump-grinding-jacksonville-nc",
    headline: "Gone to Ground Level. No Regrowth.",
    description:
      "Full reclamation of your yard. We grind to ground level, haul all debris away, and leave you a flat, usable surface.",
    features: [
      "Ground 10+ inches below grade — deeper than the 6–8 inch norm",
      "Root flare grinding available",
      "All grindings removed or spread as mulch",
      "Ready to replant or landscape immediately",
      "Single stumps or full-property clearing",
    ],
    metaTitle: "Stump Grinding Jacksonville NC | Godhans Tree Company",
    metaDesc:
      `Stump grinding in Jacksonville, NC. Ground to grade, debris removed, yard restored. Free estimates — ${BUSINESS.phone}.`,
  },
  {
    id: "emergency-tree-service",
    name: "Emergency Tree Service",
    slug: "emergency-tree-service",
    href: "/emergency-tree-service-jacksonville-nc",
    headline: "24/7 Emergency Response. We Answer.",
    description:
      "Fallen tree on your roof? Blocking your driveway? Hanging over your power lines? We respond around the clock — no voicemail, no delay.",
    features: [
      "True 24/7 response — nights, weekends, holidays",
      "Storm damage assessment and removal",
      "Fallen tree extraction from structures",
      "Hazard limb removal",
      "Driveway and road clearance",
    ],
    metaTitle: "Emergency Tree Service Jacksonville NC | Godhans",
    metaDesc:
      `24/7 emergency tree service in Jacksonville, NC. We answer when others don't. Call now: ${BUSINESS.phone}.`,
  },
  {
    id: "storm-cleanup",
    name: "Storm Cleanup",
    slug: "storm-cleanup",
    href: "/storm-cleanup-jacksonville-nc",
    headline: "After the Storm, We Clean Up Fast.",
    description:
      "Eastern NC storms hit hard. We move faster. Downed trees, scattered debris, hanging limbs — full cleanup, same or next day.",
    features: [
      "Debris removal and haul-away",
      "Downed tree extraction",
      "Limb and brush cleanup",
      "Storm damage documentation support",
      "Residential and commercial properties",
    ],
    metaTitle: "Storm Cleanup Jacksonville NC | Godhans Tree Company",
    metaDesc:
      `Storm damage cleanup in Jacksonville, NC. Fast response, full debris removal. Call 24/7: ${BUSINESS.phone}.`,
  },
  {
    id: "debris-hauling",
    name: "Debris Hauling",
    slug: "debris-hauling",
    href: "/debris-hauling-jacksonville-nc",
    headline: "Organic Debris, Gone. Trailer by Trailer.",
    description:
      "Trees, brush, and leaves only. Already cut it yourself and the pile got away from you? We load it and haul it — priced by the trailer, not by guesswork.",
    features: [
      "Trees, limbs, brush, and leaves — organic debris only",
      `${PRICING.debris.minimum} minimum, about ${PRICING.debris.perTrailer} per standard dump trailer`,
      "DIY piles that outgrew the truck you planned to use",
      "Burn-ban summers when the pile can't go anywhere",
      "Cleanup after a crew that cut cheap and left it",
    ],
    metaTitle: "Debris Hauling Jacksonville NC | Godhans Tree Company",
    metaDesc:
      `Organic debris hauling in Jacksonville, NC — trees, brush, and leaves. Priced by the trailer. Free estimates — ${BUSINESS.phone}.`,
  },
] as const;

export const SERVICE_CITIES = [
  { name: "Jacksonville", state: "NC", slug: "jacksonville-nc", primary: true },
  { name: "Maysville", state: "NC", slug: "maysville-nc", primary: false },
  { name: "Hubert", state: "NC", slug: "hubert-nc", primary: false },
  { name: "Richlands", state: "NC", slug: "richlands-nc", primary: false },
  { name: "Beulaville", state: "NC", slug: "beulaville-nc", primary: false },
  { name: "Swansboro", state: "NC", slug: "swansboro-nc", primary: false },
  { name: "Sneads Ferry", state: "NC", slug: "sneads-ferry-nc", primary: false },
  { name: "Holly Ridge", state: "NC", slug: "holly-ridge-nc", primary: false },
  { name: "Camp Lejeune", state: "NC", slug: "camp-lejeune-nc", primary: false },
  { name: "Surf City", state: "NC", slug: "surf-city-nc", primary: false },
] as const;

/**
 * Reviews as displayed on the site. `date` is the display string and there is
 * deliberately no machine-readable twin: these render as plain HTML with no
 * Review markup at all.
 *
 * Do not add Review, Rating or aggregateRating structured data here or in the
 * components. Google does not show star snippets for a business reviewing
 * itself on its own site, and the markup we did have earned a "Invalid object
 * type for field itemReviewed" error in Search Console for the trouble.
 */
export const REVIEWS = [
  {
    id: 1,
    name: "Scott M.",
    stars: 5,
    date: "May 2026",
    text: "Outstanding customer service. Impeccable knowledge and skill in his business. Great price and extremely professional service! Call them first!",
    source: "Google Review",
  },
  {
    id: 2,
    name: "Tristen B.",
    stars: 5,
    date: "May 2026",
    text: "Michael was very professional and upfront about the cost of a tree removal in my back yard. Also communicated when they would arrive and kept me updated throughout the job. Great experience overall.",
    source: "Google Review",
  },
  {
    id: 3,
    name: "R. Morgan",
    stars: 5,
    date: "May 2026",
    text: "I recently hired this tree removal service to remove 4 extremely large trees, and the experience exceeded my expectations. The team was professional, efficient, and left the property cleaner than they found it. Highly recommend.",
    source: "Google Review",
  },
] as const;


export const TRUST_STATS = [
  { value: "13+", label: "Years in Business" },
  { value: "3,500+", label: "Jobs Completed" },
  { value: "5.0", label: "Google Rating" },
  { value: "24/7", label: "Emergency Response" },
] as const;