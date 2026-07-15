export const BUSINESS = {
  name: "Godhans Tree Company",
  shortName: "Godhans",
  tagline: "We Take On The Jobs Others Won't",
  phone: "(618) 704-4861",
  phoneHref: "tel:+16187044861",
  phoneRaw: "+16187044861",
  email: "godhans@godhans.com",
  emailHref: "mailto:godhans@godhans.com",
  address: {
    street: "4445 Gum Branch Rd",
    city: "Jacksonville",
    state: "NC",
    zip: "28540",
    full: "4445 Gum Branch Rd, Jacksonville, NC 28540",
  },
  coordinates: { lat: 34.7541, lng: -77.4302 },
  hours: "Open 24 Hours — 7 Days a Week",
  hoursShort: "24/7",
  founded: 2013,
  yearsInBusiness: new Date().getFullYear() - 2013,
  reviewCount: 17,
  reviewRating: "5.0",
  primaryCity: "Jacksonville, NC",
  county: "Onslow County",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100057407111124",
    youtube: "https://www.youtube.com/@godhans7945/",
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
  stories: {
    sameTree:
      "The same tree can cost $6,000 in an open yard and $10,000 wedged against a house with power lines overhead. The tree doesn't change the price — the obstacles do.",
    mobilization:
      "Why we have an $800 minimum: getting a full crew and equipment to your property is the biggest fixed cost of any job. That's why we don't do $200 quick cuts — and why the crew that shows up can handle anything, from a single limb to a 90-foot removal over your roof.",
  },
} as const;

/**
 * CREDENTIAL — single source of truth for the trust/credential block rendered by
 * <CredentialBlock/> across service + city pages (Phase 4). No page hardcodes
 * this text. "since 2013" is operating history; the LLC bullet carries no year —
 * the two must never collapse into "the LLC is 13 years old."
 */
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
  equipmentInsurance:
    "$2M general liability and workers' comp on every job — and every machine, including the spider lift, is individually insured. If a contractor's equipment isn't on the policy and it damages your home, you hold the bill. Ours is covered.",
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
      "Expert tree removal in Jacksonville, NC. Veteran-owned, fully insured, boom trucks on every job. Free estimates — call (618) 704-4861.",
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
      "Professional tree trimming in Jacksonville, NC. Arborist-led crew, precise results. Free estimates — call (618) 704-4861.",
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
      "Ground to 6–12 inches below surface",
      "Root flare grinding available",
      "All grindings removed or spread as mulch",
      "Ready to replant or landscape immediately",
      "Single stumps or full-property clearing",
    ],
    metaTitle: "Stump Grinding Jacksonville NC | Godhans Tree Company",
    metaDesc:
      "Stump grinding in Jacksonville, NC. Ground to grade, debris removed, yard restored. Free estimates — (618) 704-4861.",
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
      "24/7 emergency tree service in Jacksonville, NC. We answer when others don't. Call now: (618) 704-4861.",
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
      "Storm damage cleanup in Jacksonville, NC. Fast response, full debris removal. Call 24/7: (618) 704-4861.",
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

export const VIDEOS = [
  {
    id: "v1",
    title: "Our Work",
    subtitle: "See the crew in action",
    youtubeId: "PLACEHOLDER_1",
    thumbnail: "/images/video-thumb-our-work.jpg",
  },
  {
    id: "v2",
    title: "Meet the Team",
    subtitle: "Veteran-owned, locally operated",
    youtubeId: "PLACEHOLDER_2",
    thumbnail: "/images/video-thumb-meet-team.jpg",
  },
  {
    id: "v3",
    title: "How It Works",
    subtitle: "Estimate to cleanup",
    youtubeId: "PLACEHOLDER_3",
    thumbnail: "/images/video-thumb-how-it-works.jpg",
  },
  {
    id: "v4",
    title: "Why Godhans",
    subtitle: "No job too big, no excuses",
    youtubeId: "PLACEHOLDER_4",
    thumbnail: "/images/video-thumb-why-godhans.jpg",
  },
] as const;

export const TRUST_STATS = [
  { value: "13+", label: "Years in Business" },
  { value: "3,500+", label: "Jobs Completed" },
  { value: "5.0", label: "Google Rating" },
  { value: "24/7", label: "Emergency Response" },
] as const;