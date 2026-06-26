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
    "Fully Licensed & Insured",
    "Liability & Workers' Comp Coverage",
    "Veteran-Owned & Operated",
    "Disabled-Veteran Owned",
    "24/7 Emergency Response",
    "Free Estimates",
  ],
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
      "Lot clearing for construction or development",
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
      "Precision thinning, pruning, raising, shaping, and dead branch removal. Our ISA-certified arborists read every tree before touching it.",
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
    id: "land-clearing",
    name: "Land Clearing",
    slug: "land-clearing",
    href: "/land-clearing-jacksonville-nc",
    headline: "Lot Clearing, Rough Grading, Full Site Prep.",
    description:
      "From residential lot prep to commercial development clearing. Excavation, demolition, grading — we take it down to bare earth and hand it back ready.",
    features: [
      "Full lot clearing for construction",
      "Rough grading and excavation",
      "Brush and debris removal",
      "Ditch work and drainage prep",
      "Commercial and residential scale",
    ],
    metaTitle: "Land Clearing Jacksonville NC | Godhans Tree Company",
    metaDesc:
      "Land clearing and lot prep in Jacksonville, NC. Veteran-owned crew, heavy equipment. Free estimates — (618) 704-4861.",
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
  { value: "500+", label: "Jobs Completed" },
  { value: "5.0", label: "Google Rating" },
  { value: "24/7", label: "Emergency Response" },
] as const;