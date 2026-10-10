import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import { BUSINESS, CITY_JOBS, PRICING, SITE_URL, YEAR_FOUNDED_LOCAL } from "../data/siteData";
import WhyChooseGodhans from "../components/WhyChooseGodhans";
import type { Photo } from "@/data/batch2Photos";
import {
  LIFT_TO_PINE,
  LAWN_UNRUTTED,
  MAYSVILLE_CLIMBER,
  BARN_CRANE,
  SURF_CITY_HOLLOW,
} from "@/data/batch2Photos";

/** The job photo spans the 4xl content column and is full-bleed below it. */
const PHOTO_SIZES = "(min-width: 896px) 768px, 100vw";

interface LocationPageProps {
  city: string;
}

const SERVICES = [
  { name: "Tree Removal", href: "/tree-removal-jacksonville-nc", desc: "Safe removal of any size tree. Full debris haul-away included." },
  { name: "Tree Trimming", href: "/tree-trimming-jacksonville-nc", desc: "Crown work, deadwood removal, and precision pruning." },
  { name: "Stump Grinding", href: "/stump-grinding-jacksonville-nc", desc: `Ground ${PRICING.stump.depthStandard} below grade, grindings hauled, yard ready to use.` },
  { name: "Emergency Service", href: "/emergency-tree-service-jacksonville-nc", desc: "24/7 response for storm damage and hazardous situations." },
];

interface Source {
  url: string;
  label: string;
}

/** One verified local fact. `source` absent means it is our own observation. */
interface LocalFact {
  text: string;
  source?: Source;
}

/** A real job the owner did in this town, at the price the owner charged. */
interface CityJob {
  heading: string;
  price: string;
  date?: string;
  body: string[];
  photo?: Photo;
  alt?: string;
  caption?: string;
  /** Where the full write-up lives, when one exists elsewhere on the site. */
  link?: { href: string; label: string };
}

interface CityCopy {
  lead: string;
  why: string[];
  /** Named explicitly because three of these towns are NOT in Onslow County. */
  county: string;
  job?: CityJob;
  /** An "after" frame, where one exists. Renders below the job's own photo. */
  secondPhoto?: { photo: Photo; alt: string; caption: string };
  facts?: LocalFact[];
  faqs?: { q: string; a: string }[];
}

/**
 * Per-city copy.
 *
 * WHAT CHANGED IN BATCH 3, and why it matters more than it looks. Measured
 * before this ship, the nine non-hub city pages shared **49.6% to 64.9% of
 * their visible 5-grams** with each other (town name neutralised, so the
 * overlap is real duplication rather than the name differing). They were
 * near-copies, which is what Google treats as thin content.
 *
 * Two changes fix that, and the second one is the important one:
 *
 *  1. Each town gains a REAL JOB at the price the owner actually charged, the
 *     county it is actually in, verified local facts with their sources, and
 *     questions answered for that town. None of that can appear on another
 *     page, so it is uniqueness that cannot regress by accident.
 *
 *  2. The boilerplate "veteran-owned, fully insured, no subcontractors, every
 *     person on your property is part of our crew" paragraph was DELETED from
 *     every city. It was the single largest source of the overlap — and it was
 *     already being said, better, by the shared <WhyChooseGodhans/> band that
 *     renders directly below this content on the same page. It was not just
 *     duplicated across towns, it was duplicated with itself.
 *
 * Rules for adding a town: every fact carries a source URL or is phrased as our
 * own observation. No invented landmarks. State the county — three of these
 * towns are not in Onslow.
 */
/**
 * Short job summaries for the meta description only — the body copy tells each
 * story at length and should not be made to do double duty as a meta string.
 * Reads from CITY_JOBS so a price correction lands in one place.
 */
const CITY_JOB_SUMMARY: Record<string, string> = {
  "Holly Ridge": CITY_JOBS.hollyRidge.summary,
  Maysville: CITY_JOBS.maysville.summary,
  Beulaville: CITY_JOBS.beulaville.summary,
  "Surf City": CITY_JOBS.surfCity.summary,
};

const CITY_CONTENT: Record<string, CityCopy> = {
  Maysville: {
    county: "Jones County",
    lead:
      "Godhans Tree Company works Maysville and the rural stretches along the White Oak River and the western edge of the Croatan National Forest. Lots run large out here and the trees run old, which usually means the problem is access rather than the tree itself.",
    job: {
      heading: `A ${CITY_JOBS.maysville.price} pine we could not put a machine under`,
      price: CITY_JOBS.maysville.price,
      body: [
        "A very large pine standing beside a metal garage, with a septic field running between the tree and the only approach a lift could have used. That combination settles the method before anyone picks up a saw: no machine goes over a drain field, and a metal roof is not something you drop wood onto and apologise for afterwards.",
        "So it was climbed. Every section came down on rope, controlled, with the garage on one side and ground we had to stay off on the other.",
        `The job came to ${CITY_JOBS.maysville.price}. Worth saying plainly that the figure is about the obstacles and not the species — the same pine in the open, with room for a lift and nothing buried underneath, is a materially cheaper day.`,
      ],
      photo: MAYSVILLE_CLIMBER,
      alt: "A climber working high in a large limbed-out pine at Maysville, NC, with the rigging rope running down to the ground.",
      caption: "Climbed rather than lifted, because the septic field ruled out driving anything in.",
      /* NOT /tree-removal-cost-north-carolina, however well it fits: that is
         the live A/B treatment arm and Ship E may neither add nor remove links
         to it. The removal page carries the same diameter-not-height argument
         and is not an arm. Revisit after the test ends (Dec 1). */
      link: { href: "/tree-removal-jacksonville-nc", label: "Why diameter and access, not height, set a removal price" },
    },
    facts: [
      {
        text:
          "Maysville is in Jones County, not Onslow — a detail that matters for permits and for who you call about a right-of-way. It sits in the southeastern corner of the county, with US-17 running through the middle of town, about 15 miles northeast of our shop in Jacksonville.",
        source: { url: "https://en.wikipedia.org/wiki/Maysville,_North_Carolina", label: "Maysville, North Carolina" },
      },
      {
        text:
          "The town is settled on the banks of the White Oak River and bordered to the east by the Croatan National Forest — a 48-mile blackwater river that forms the forest's western boundary, and the only truly coastal national forest in the eastern United States.",
        source: { url: "https://en.wikipedia.org/wiki/White_Oak_River", label: "White Oak River" },
      },
      {
        text:
          "In our experience that forest edge is the thing that shapes the work here. Trees that grew up in a stand are drawn tall and narrow with the live crown high on the stem, and when the lot around one is cleared for a house it is suddenly carrying wind it never had to carry before.",
      },
    ],
    faqs: [
      {
        q: "Do you come out to Maysville?",
        a: "Yes, regularly. Maysville is about 15 miles up US-17 from our shop in Jacksonville, which is close enough that we do not charge a travel premium to get there.",
      },
      {
        q: "Can you work around a septic field or drain lines?",
        a: "Yes, and we would rather be told where they are than find them. Point out the field, the lines, the irrigation and the invisible fence at the estimate and we plan the route around them — or, as on the job above, climb the tree instead of bringing a machine in at all.",
      },
      {
        q: "Is Maysville in Onslow County?",
        a: "No. Maysville is in Jones County. We serve it along with Onslow, and the practical difference for a homeowner is which county office governs anything that needs an approval.",
      },
    ],
    why: [
      "Maysville sits on the quieter, more wooded side of our service area, and the tree work reflects it — big hardwoods close to farmhouses, pines along property lines, and plenty of acreage where getting to the trunk is half the job.",
      `We have worked Onslow and Jones County since ${YEAR_FOUNDED_LOCAL}, and on this side of the river that mostly means knowing which yards will carry a machine and which will not.`,
    ],
  },

  Beulaville: {
    county: "Duplin County",
    lead:
      "Godhans Tree Company serves Beulaville and the surrounding Duplin County farmland. Out here a tree failure usually lands on a barn, a fence line or a piece of equipment rather than a house — which changes how a removal gets rigged, not how carefully.",
    job: {
      heading: `A ${CITY_JOBS.beulaville.price} tree craned out of a barn roof`,
      price: CITY_JOBS.beulaville.price,
      date: CITY_JOBS.beulaville.date,
      body: [
        "October 2, 2020. A thunderstorm — not a hurricane, which is the part worth noticing — put a tree straight through the roof of a barn.",
        "A tree resting inside a building is a different job from a tree on the ground, because the building has become part of the rigging problem: cut it in the wrong order and the barn takes the rest of the load. There was open ground alongside, so we craned it out of the roof rather than cutting it apart in place, then removed the rest of the tree.",
        `The whole job came to ${CITY_JOBS.beulaville.price}.`,
      ],
      photo: BARN_CRANE,
      alt: "Crane boom extended over the storm-damaged barn at Beulaville, NC, with the crane truck set up on the grass alongside.",
      caption: "The open field alongside is what made a crane possible — in a fenced yard this is a much longer job.",
      link: { href: "/storm-damage-trees-guide", label: "The full job, photographed step by step, in our storm guide" },
    },
    facts: [
      {
        text:
          "Beulaville is in Duplin County, and the flood history here is not abstract. When Hurricane Floyd came through on September 16, 1999, the National Weather Service recorded that “the Northeast Cape Fear River at Chinquapin crested at 23.51 feet, a record that stood until flooding associated with Hurricane Florence in 2018.” Chinquapin is the gauge just down the river from here.",
        source: { url: "https://www.weather.gov/ilm/Floyd", label: "NWS Wilmington — Hurricane Floyd" },
      },
      {
        text:
          "The same NWS summary records that “newspaper reports stated around 60 square miles of Duplin County was underwater,” and that three people in the county died trying to drive across flooded roads.",
        source: { url: "https://www.weather.gov/ilm/Floyd", label: "NWS Wilmington — Hurricane Floyd" },
      },
      {
        text:
          "What that means for trees, in our experience, is saturated ground. A root plate that has sat in water loses its grip long before the canopy shows anything is wrong, and the trees we are called to after a wet year are frequently ones that simply leaned over rather than broke.",
      },
    ],
    faqs: [
      {
        q: "Do you work on farms and around outbuildings?",
        a: "Routinely. Barns, equipment sheds, grain bins, fence lines and irrigation are the usual obstacles out here, and they change the rigging rather than ruling the job out. We walk the whole approach before quoting.",
      },
      {
        q: "A tree fell on my barn — is that covered by insurance?",
        a: "Often, when the tree has damaged a covered structure. We bill your insurance directly and work with your adjuster, doing everything we can so your cost stays at your normal deductible. A tree that came down in a field and hit nothing is usually not covered at all.",
      },
      {
        q: "Is Beulaville in Onslow County?",
        a: "No, Beulaville is in Duplin County. We cover it from Jacksonville and have done since well before the 2020 storm job above.",
      },
    ],
    why: [
      "Beulaville is farm and timber country, and the trees match it — mature pines and hardwoods on large lots, usually with something expensive parked underneath them.",
      `We have served Duplin and Onslow County since ${YEAR_FOUNDED_LOCAL}, and the Floyd and Florence high-water marks are still the reference points people here use when they talk about a bad storm.`,
    ],
  },

  "Holly Ridge": {
    county: "Onslow County",
    lead:
      "Godhans Tree Company covers Holly Ridge and the communities around Stump Sound, about seven miles inland of the Topsail beaches. Sandy, fast-draining ground and hurricane-season wind are the two facts that decide most of the tree work here.",
    job: {
      heading: `A ${CITY_JOBS.hollyRidge.price} pine off the corner of a house`,
      price: CITY_JOBS.hollyRidge.price,
      date: CITY_JOBS.hollyRidge.date,
      body: [
        "A 24 inch pine, about 60 feet tall, leaning its weight over the corner of a house. Nothing exotic — this is the single most common serious tree problem in Holly Ridge, and it is the one people put off until a storm is forecast.",
        "The lift set up on the lawn, the tree came down in sections over the roofline, and the stump was ground out the same day. Cut, hauled and ground, finished.",
        `${CITY_JOBS.hollyRidge.price}, on ${CITY_JOBS.hollyRidge.date}. That figure includes the grinding and the haul-away, which is worth checking against any quote you compare it with — the stump is frequently a separate line somewhere else.`,
      ],
      photo: LIFT_TO_PINE,
      alt: "Tracked spider lift with its boom extended up into a tall pine beside a house at Holly Ridge, NC.",
      caption: "The lift reaches the top from the lawn, so nothing has to be dropped over the roof.",
      link: { href: "/spider-lift-tree-removal-jacksonville-nc", label: "How the lift gets to a backyard tree without a truck on the grass" },
    },
    secondPhoto: {
      photo: LAWN_UNRUTTED,
      alt: "The lawn at the Holly Ridge job after the work, with no ruts or track marks across the grass.",
      caption: "Afterwards. Rubber tracks and matting are the reason there is nothing here to repair.",
    },
    facts: [
      {
        text:
          "Holly Ridge is in Onslow County, in Stump Sound Township, and the town calls itself the gateway to Topsail Island — the beaches are roughly seven miles east.",
        source: { url: "https://en.wikipedia.org/wiki/Holly_Ridge,_North_Carolina", label: "Holly Ridge, North Carolina" },
      },
      {
        text:
          "The town's size today is a direct consequence of Camp Davis. When the War Department announced the installation in December 1940, Holly Ridge had a population of 28. The camp grew to more than 45,000 acres and around 20,000 officers and men, one of the Army's seven antiaircraft artillery training centers of the Second World War, before being ordered closed on September 2, 1944.",
        source: { url: "https://hollyridgenc.gov/history", label: "Town of Holly Ridge — History" },
      },
      {
        text:
          "In our experience that history is still visible in the trees. Much of the land around town is even-aged pine that came back after the camp era, which is why so many Holly Ridge pines are the same height and the same age — and why they tend to reach the size where they become a problem at roughly the same time.",
      },
    ],
    faqs: [
      {
        q: "How much does it cost to remove a pine leaning over my house in Holly Ridge?",
        a: `It depends on diameter and what is underneath it rather than height. For a real figure: we removed a 24 inch, 60 foot pine overhanging the corner of a house here for ${CITY_JOBS.hollyRidge.price} in ${CITY_JOBS.hollyRidge.date}, including hauling and grinding the stump. A bigger trunk, or a tree hard against the structure, moves into a higher band.`,
      },
      {
        q: "Why do pines fall so easily around here?",
        a: "Sandy, fast-draining coastal soil gives a pine less to hold on to than heavier inland ground does, and after a wet week it holds water at depth and softens further. Combine that with a tree that grew in a stand and was later left standing alone in a cleared yard, and you have something carrying wind it was never shaped for.",
      },
      {
        q: "Do you respond to storm damage in Holly Ridge overnight?",
        a: "Yes, we run 24/7 emergency response and Holly Ridge is well inside the area we cover. If a tree is on the house, get everyone clear, treat any downed line as live, and call.",
      },
    ],
    why: [
      "Holly Ridge sits in hurricane country, and it shapes the work: shallow-rooted pines in sand, and a storm season that finds the weak ones every year.",
      `We have worked this coastal stretch of Onslow County since ${YEAR_FOUNDED_LOCAL}, which mostly means we have already seen which trees on your street come down first.`,
    ],
  },

  "Surf City": {
    county: "Onslow and Pender Counties",
    lead:
      "Godhans Tree Company serves Surf City and Topsail Island. Compact lots, houses close together and salt air make this the tightest-access tree work we do, and the trees here hide their problems better than most.",
    job: {
      heading: `A ${CITY_JOBS.surfCity.price} oak that was hollow a mile from the ocean`,
      price: CITY_JOBS.surfCity.price,
      body: [
        "An oak about a mile from the Atlantic, carrying heavy heartwood rot. None of it was visible from the outside — which is the whole problem with hardwoods, and the reason we drill them rather than look at them.",
        "It came down and was removed. What the cut face showed was a thin shell of sound wood around a hollow core, which is to say the tree had far less holding it up than its canopy suggested.",
        `${CITY_JOBS.surfCity.price} for the removal. If you have a mature hardwood on the island and no idea what is inside it, that is a measurement question before it is a removal question.`,
      ],
      photo: SURF_CITY_HOLLOW,
      alt: "Cut face of the Surf City oak, opened up to show hollow cavities where the heartwood had rotted away.",
      caption: "About a mile from the ocean. Nothing on the outside of this tree said that was underneath the bark.",
      link: { href: "/resistograph-tree-testing-jacksonville-nc", label: "Measuring what is left inside a trunk, instead of guessing" },
    },
    facts: [
      {
        text:
          "Surf City is one of the few towns around here that sits in two counties at once: it spans Onslow and Pender on Topsail Island, with the Onslow portion in the Jacksonville metro area and the Pender portion in Wilmington's. If an approval is ever needed, which county you are in is worth establishing first.",
        source: { url: "https://en.wikipedia.org/wiki/Surf_City,_North_Carolina", label: "Surf City, North Carolina" },
      },
      {
        text:
          "Hurricane Bertha came ashore near here on July 12, 1996, with sustained winds the National Weather Service puts at 105 mph before landfall. The largest surge, 8 to 10 feet, was measured up the coast at Swansboro and Emerald Isle.",
        source: { url: "https://www.weather.gov/ilm/Bertha1996", label: "NWS Wilmington — Hurricane Bertha 1996" },
      },
      {
        text:
          "In our experience salt air and island conditions do not usually kill a tree outright — they wear it down. What we find on Topsail is interior decay in hardwoods that still look healthy in leaf, which is exactly the failure mode you cannot assess from the driveway.",
      },
    ],
    faqs: [
      {
        q: "Can you get equipment onto a Topsail Island lot?",
        a: "Usually, and that is the question that decides the price here more than tree size does. Our spider lift collapses to about 36 inches and passes a standard four-foot gate on rubber tracks, which covers most island lots. Where it will not fit, we climb and rope the tree down instead.",
      },
      {
        q: "My oak looks fine but it is old. Should I worry?",
        a: "Possibly, and looking at it will not settle it. A hardwood can be substantially hollow and still leaf out green every spring — the Surf City oak above is exactly that case. A resistograph measures how much sound wood is actually left, which turns the question into a number instead of an opinion.",
      },
      {
        q: "Is Surf City in Onslow or Pender County?",
        a: "Both. The town straddles the county line on Topsail Island. We work the whole of it either way.",
      },
    ],
    why: [
      "Surf City is tight-access work: vacation and rental homes packed close, little room to drop anything, and salt-hardened oaks and pines that take a beating every season.",
      "A good share of our island calls come from owners managing a property from somewhere else, so we photograph what we find and send it rather than describing it over the phone.",
    ],
  },
};

/**
 * Fallback for a town with no entry above. Kept deliberately SHORT: a thin
 * generic page is better than a long generic one, because length is what makes
 * duplicate content look deliberate. If a town is worth a page it is worth an
 * entry in CITY_CONTENT.
 */
const defaultContent = (city: string): CityCopy => ({
  county: "Onslow County",
  lead: `Godhans Tree Company serves ${city} and the surrounding Onslow County area with tree removal, trimming, stump grinding, and 24/7 emergency response. Free estimates on every job.`,
  why: [
    `From routine trimming to high-risk removals in tight spaces, we handle the jobs other crews turn down. If you are in ${city}, call us for a free on-site estimate with no obligation.`,
  ],
});

export default function LocationPage({ city }: LocationPageProps) {
  const slug = city.toLowerCase().replace(/\s+/g, "-");
  const canonical = `${SITE_URL}/tree-service-${slug}-nc`;
  const title = `Tree Service in ${city}, NC | Godhans Tree Company`;
  const content = CITY_CONTENT[city] ?? defaultContent(city);
  /**
   * The meta description used to be one sentence with the town name swapped in,
   * which is the same duplicate-content problem the body copy had. Where a town
   * has a real job it leads with that price, because a specific number is the
   * most useful thing a search result can show and no other town can show it.
   */
  const description = content.job
    ? `Tree removal, trimming and stump grinding in ${city}, NC (${content.county}). A real local job: ${content.job.price} for ${CITY_JOB_SUMMARY[city] ?? "a removal here"}. Free estimates.`
    : `Tree removal, trimming, stump grinding and 24/7 emergency tree service in ${city}, NC (${content.county}). Free estimates from Godhans Tree Company.`;

  // These four city pages had no BreadcrumbList at all, unlike the six
  // ServicePage-backed city pages — and the visual trail below disagreed with
  // those pages too (Home > Service Area > City here, Home > Locations > City
  // there). Both now say Home > Service Area > City, and the schema is
  // generated from the same three values the visual trail renders so they can
  // never diverge.
  const breadcrumbTrail = [
    { name: "Home", href: "/", url: `${SITE_URL}/` },
    { name: "Service Area", href: "/service-area", url: `${SITE_URL}/service-area` },
    { name: `${city}, NC`, href: null, url: canonical },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbTrail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {/* Same FAQPage shape ServicePage emits, so the two kinds of page are
            marked up identically. Only rendered for towns that actually have
            local questions answered — an empty FAQPage is worse than none. */}
        {content.faqs && content.faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: content.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            })}
          </script>
        )}
      </Helmet>

      <main id="main-content" className="pt-20">
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-300">
              <ol className="flex flex-wrap items-center gap-2">
                {breadcrumbTrail.map((crumb, i) => (
                  <li key={crumb.name} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {/* hover:red-500 — see the note in BlogPage: a hover state
                        is invisible to Lighthouse but still has to clear AA. */}
                    {crumb.href ? (
                      <Link to={crumb.href} className="hover:text-red-500 transition-colors">{crumb.name}</Link>
                    ) : (
                      <span className="text-gray-200" aria-current="page">{crumb.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            {/* The county is stated rather than assumed: Maysville is in Jones,
                Beulaville in Duplin, and Surf City is in two at once. Three of
                these four pages previously implied Onslow by omission. */}
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--red-text)", letterSpacing: "0.12em" }}>
              Service Area · {content.county}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tree Service in {city}, NC</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
              {content.lead}
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Services We Provide in {city}</h2>
            <div className="grid md:grid-cols-2 gap-px" style={{ background: "#2A2A2A" }}>
              {SERVICES.map((service) => (
                <article key={service.href} className="p-8 flex flex-col gap-3" style={{ background: "#0A0A0A" }}>
                  <h3 className="text-lg font-bold text-white">{service.name}</h3>
                  <p className="text-base leading-relaxed flex-1" style={{ color: "#C8C8C2" }}>{service.desc}</p>
                  <Link to={service.href} aria-label={`Learn more about ${service.name}`} className="text-sm font-bold uppercase tracking-widest self-start" style={{ color: "var(--red-text)" }}>
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* A real job in this town, at the price the owner charged. This is the
            block that makes the page impossible to confuse with any other city
            page, so it renders high — directly after the services grid and
            before any of the general copy. */}
        {content.job && (
          <section className="py-16 border-t" style={{ background: "#111111", borderColor: "#2A2A2A" }}>
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--red-text)", letterSpacing: "0.12em" }}>
                A job we did in {city}
              </p>
              <h2 className="text-2xl font-bold text-white mb-6">{content.job.heading}</h2>
              {content.job.body.map((p, i) => (
                <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>{p}</p>
              ))}
              {content.job.photo && (
                <figure className="my-8">
                  <picture>
                    <source type="image/avif" srcSet={content.job.photo.avifSrcSet} sizes={PHOTO_SIZES} />
                    <img
                      src={content.job.photo.src}
                      srcSet={content.job.photo.srcSet}
                      sizes={PHOTO_SIZES}
                      alt={content.job.alt ?? ""}
                      width={content.job.photo.width}
                      height={content.job.photo.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto rounded-lg border-2 border-gray-800"
                    />
                  </picture>
                  {content.job.caption && (
                    <figcaption className="mt-3 text-base" style={{ color: "#9A9A94" }}>{content.job.caption}</figcaption>
                  )}
                </figure>
              )}
              {content.secondPhoto && (
                <figure className="my-8">
                  <picture>
                    <source type="image/avif" srcSet={content.secondPhoto.photo.avifSrcSet} sizes={PHOTO_SIZES} />
                    <img
                      src={content.secondPhoto.photo.src}
                      srcSet={content.secondPhoto.photo.srcSet}
                      sizes={PHOTO_SIZES}
                      alt={content.secondPhoto.alt}
                      width={content.secondPhoto.photo.width}
                      height={content.secondPhoto.photo.height}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto rounded-lg border-2 border-gray-800"
                    />
                  </picture>
                  <figcaption className="mt-3 text-base" style={{ color: "#9A9A94" }}>{content.secondPhoto.caption}</figcaption>
                </figure>
              )}
              {content.job.link && (
                <Link to={content.job.link.href} className="text-base font-bold" style={{ color: "var(--red-text)" }}>
                  {content.job.link.label} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </section>
        )}

        {/* Verified local facts. Every item either carries its source or is
            written in our own voice as an observation — there is no third
            category, and nothing here is a landmark somebody invented to make
            the page sound local. */}
        {content.facts && content.facts.length > 0 && (
          <section className="py-16 border-t" style={{ background: "#0A0A0A", borderColor: "#2A2A2A" }}>
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-6">{city}, and what it does to trees</h2>
              <ul className="space-y-6">
                {content.facts.map((fact, i) => (
                  <li key={i}>
                    <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>{fact.text}</p>
                    {fact.source && (
                      <a
                        href={fact.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm font-semibold underline underline-offset-2"
                        style={{ color: "var(--red-text)" }}
                      >
                        Source: {fact.source.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {content.faqs && content.faqs.length > 0 && (
          <section className="py-16 border-t" style={{ background: "#111111", borderColor: "#2A2A2A" }}>
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white mb-8">Questions we get from {city}</h2>
              <div className="space-y-6">
                {content.faqs.map((faq, i) => (
                  <div key={i} className="border-b pb-6" style={{ borderColor: "#2A2A2A" }}>
                    <h3 className="text-white font-semibold text-lg mb-2">{faq.q}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-4">Why {city} Homeowners Choose Godhans</h2>
            {content.why.map((paragraph, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed ${i < content.why.length - 1 ? "mb-4" : ""}`}
                style={{ color: "#C8C8C2" }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <WhyChooseGodhans />

        <section className="py-16 bg-brand-red">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Serving {city}, NC — Free Estimates</h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Veteran-owned, fully insured, and available 24/7 for emergencies throughout Onslow County and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="font-bold uppercase tracking-wide px-8 py-4 text-center bg-white text-brand-red">
                Request Free Estimate
              </Link>
              <a href={BUSINESS.phoneHref} className="font-bold uppercase tracking-wide px-8 py-4 text-center border-2 border-white text-white">
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
