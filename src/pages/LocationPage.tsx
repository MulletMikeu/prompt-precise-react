import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/siteData";

interface LocationPageProps {
  city: string;
}

const SERVICES = [
  { name: "Tree Removal", href: "/tree-removal-jacksonville-nc", desc: "Safe removal of any size tree. Full debris haul-away included." },
  { name: "Tree Trimming", href: "/tree-trimming-jacksonville-nc", desc: "Crown work, deadwood removal, and precision pruning." },
  { name: "Stump Grinding", href: "/stump-grinding-jacksonville-nc", desc: "Ground to grade, grindings removed, yard ready to use." },
  { name: "Emergency Service", href: "/emergency-tree-service-jacksonville-nc", desc: "24/7 response for storm damage and hazardous situations." },
];

interface CityCopy {
  lead: string;
  why: string[];
}

// Per-city copy so each location page reads as genuinely local instead of the
// same paragraphs with the town name swapped (which Google treats as thin /
// duplicate content). Keep these truthful and specific to each community.
const CITY_CONTENT: Record<string, CityCopy> = {
  Maysville: {
    lead:
      "Godhans Tree Company brings full-service tree care to Maysville and the rural stretches along the White Oak River and the edge of the Croatan National Forest. Out here lots run large and the trees run old — towering pines and mature hardwoods that need the right equipment and a careful hand. We handle removals, trimming, stump grinding, and 24/7 storm response, and we're set up to reach trees that smaller crews can't.",
    why: [
      "Maysville sits on the quieter, more wooded side of our service area, and the tree work reflects it — big hardwoods close to farmhouses, pines along property lines, and plenty of acreage where access is half the battle. We bring boom trucks and rigging built for exactly that kind of job.",
      "Godhans is veteran-owned and family-operated out of nearby Jacksonville, fully insured, with no subcontractors — every person on your property is part of our crew. We've worked Onslow and Jones County since 2013, so we know the local soil, species, and storm patterns.",
      "Whether you've got a single dangerous pine or a wooded lot that needs clearing, we'll give you a straight, free estimate and leave the property cleaner than we found it. Call us for tree service in Maysville with no obligation.",
    ],
  },
  Beulaville: {
    lead:
      "Godhans Tree Company serves Beulaville and the surrounding Duplin County farmland with professional tree removal, trimming, stump grinding, and emergency storm cleanup. In farm country that often means tall longleaf pines, hardwoods crowding outbuildings, and storm-snapped limbs along field edges — all work we're equipped to handle.",
    why: [
      "Beulaville is farm and timber country, and the trees here are no different — mature pines and hardwoods, often on large lots with barns, fence lines, and equipment nearby. We plan every removal around what's on the ground so nothing gets damaged in the process.",
      "We're a veteran-owned, family-run crew based in Jacksonville, fully insured, and we never sub the work out. We've served Duplin and Onslow County since 2013, and we know how this region's soil and seasonal storms stress a tree.",
      "From a hazardous tree near the house to clearing a few acres, you'll get an honest free estimate and a thorough cleanup. If you need tree service in Beulaville, give us a call — no pressure, no obligation.",
    ],
  },
  "Holly Ridge": {
    lead:
      "Godhans Tree Company provides tree removal, trimming, stump grinding, and 24/7 storm response throughout Holly Ridge and the coastal communities around Stump Sound. This close to the water, sandy soil and hurricane-season winds are hard on trees — shallow-rooted pines come down fast, and we're on call when they do.",
    why: [
      "Holly Ridge sits in hurricane country, and that shapes the work: sandy, fast-draining soil leaves pines shallow-rooted and prone to toppling, and every storm season brings down limbs and whole trees. We respond around the clock when that happens.",
      "Godhans is veteran-owned, fully insured, and family-operated out of Jacksonville — no subcontractors, ever. We've worked this coastal stretch of Onslow County since 2013, so we know which trees the next storm is most likely to take.",
      "Before a storm or after one, we'll assess your trees and give you a free, no-pressure estimate, then leave your property clean. For tree service in Holly Ridge, call the crew that's already nearby.",
    ],
  },
  "Surf City": {
    lead:
      "Godhans Tree Company serves Surf City and Topsail Island with tree removal, trimming, stump grinding, and emergency storm cleanup. On the island, salt air, sandy lots, and hurricane season make for tough conditions — wind-sculpted live oaks, storm-stressed pines, and tight spaces between beach homes — and we're equipped for all of it.",
    why: [
      "Surf City and the Topsail beaches are a different kind of tree job — compact lots, vacation and rental homes packed close together, and salt-hardened live oaks and pines that take a beating every hurricane season. Tight-access removals are exactly what we specialize in.",
      "We're a veteran-owned, fully insured, family-run crew out of Jacksonville, and we never hand the work to subcontractors. We've served the Topsail area and the rest of Onslow County since 2013, so coastal conditions and storm patterns are second nature to us.",
      "Whether you're a year-round resident or managing a rental property from out of town, we'll send a straight free estimate and handle the job cleanly and safely. For tree service in Surf City, give us a call any time.",
    ],
  },
};

const defaultContent = (city: string): CityCopy => ({
  lead: `Godhans Tree Company serves ${city} and the surrounding Onslow County area with professional tree removal, trimming, stump grinding, and 24/7 emergency response. Veteran-owned, fully insured — free estimates on every job.`,
  why: [
    "Godhans Tree Company is a veteran-owned, family-operated business based in Jacksonville, NC. We've been serving Onslow County communities since 2013 — and that means we know the terrain, the tree species, and the storm patterns of coastal North Carolina better than anyone.",
    "Our crew carries full liability insurance and workers' compensation coverage on every job. No subcontractors — every person on your property is part of the Godhans team. We show up on time, communicate clearly, and leave your property cleaner than we found it.",
    `From routine tree trimming to high-risk removals in tight spaces, we handle jobs other companies won't take on. If you're in ${city} and need a tree service you can trust, call us for a free on-site estimate with no obligation.`,
  ],
});

export default function LocationPage({ city }: LocationPageProps) {
  const slug = city.toLowerCase().replace(/\s+/g, "-");
  const canonical = `https://godhans.com/tree-service-${slug}-nc`;
  const title = `Tree Service in ${city}, NC | Godhans Tree Company`;
  const description = `Tree removal, trimming, stump grinding & 24/7 emergency tree service in ${city}, NC. Veteran-owned, insured — Godhans Tree Company. Free estimates.`;
  const content = CITY_CONTENT[city] ?? defaultContent(city);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://godhans.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image.jpg" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <main id="main-content" className="pt-20">
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-300">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="hover:text-red-600 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link to="/service-area" className="hover:text-red-600 transition-colors">Service Area</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-200" aria-current="page">{city}, NC</li>
              </ol>
            </nav>
            <p className="font-body text-xs font-600 uppercase tracking-widest mb-4" style={{ color: "#E5424F", letterSpacing: "0.12em" }}>Service Area</p>
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
                  <Link to={service.href} aria-label={`Learn more about ${service.name}`} className="text-sm font-bold uppercase tracking-widest self-start" style={{ color: "#E5424F" }}>
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#111111" }}>
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

        <section className="py-16" style={{ background: "#C41230" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Serving {city}, NC — Free Estimates</h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Veteran-owned, fully insured, and available 24/7 for emergencies throughout Onslow County and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="font-bold uppercase tracking-wide px-8 py-4 text-center" style={{ background: "white", color: "#C41230" }}>
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
