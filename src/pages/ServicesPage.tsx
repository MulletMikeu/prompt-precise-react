import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/siteData";
import { PROSE } from "../data/homepageCopy";

const TITLE = "Tree Services in Jacksonville, NC | Godhans Tree Company";
const DESC = `Tree removal, trimming, stump grinding & storm cleanup in Jacksonville, NC. Veteran-owned. Free estimates — call ${BUSINESS.phone}.`;
const CANONICAL = "https://godhans.com/services";

const SERVICES = [
  {
    name: "Tree Removal",
    href: "/tree-removal-jacksonville-nc",
    desc: "Safe, controlled removal of any size tree. Insured crew, full debris haul-away, and zero property damage.",
  },
  {
    name: "Tree Trimming",
    href: "/tree-trimming-jacksonville-nc",
    desc: "Crown thinning, deadwood removal, canopy raising, and precision pruning to keep your trees healthy.",
  },
  {
    name: "Stump Grinding",
    href: "/stump-grinding-jacksonville-nc",
    desc: "Stumps ground 10+ inches below grade. All grindings removed. Property ready to replant or landscape.",
  },
  {
    name: "Emergency Tree Service",
    href: "/emergency-tree-service-jacksonville-nc",
    desc: "True 24/7 response for storm damage, fallen trees, and hazardous situations. We answer day and night.",
  },
  {
    name: "Storm Cleanup",
    href: "/storm-cleanup-jacksonville-nc",
    desc: "Fast debris removal after storms. Downed tree extraction, limb and brush cleanup, same or next day.",
  },
  {
    name: "Commercial Tree Service",
    href: "/commercial-tree-service-jacksonville-nc",
    desc: "HOAs, apartment complexes, churches, and storefronts. $2M liability, COI on request, scheduled around your hours.",
  },
  {
    name: "Residential Tree Service",
    href: "/residential-tree-service-jacksonville-nc",
    desc: "Homeowner tree work with the lawn, fence, driveway, and septic field protected — and every stick hauled away.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://godhans.com/og-image-v2.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image-v2.jpg" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Helmet>

      <main id="main-content" className="pt-20">
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#E5424F", letterSpacing: "0.12em" }}>What We Do</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Tree Services</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
              Full-service tree care for residential and commercial properties across Jacksonville, NC and Onslow County. From routine trimming to complex emergency removals — we handle it all.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "#2A2A2A" }}>
              {SERVICES.map((service) => (
                <article key={service.href} className="p-8 flex flex-col gap-4" style={{ background: "#0A0A0A" }}>
                  <h2 className="text-xl font-bold text-white">{service.name}</h2>
                  <p className="text-base leading-relaxed flex-1" style={{ color: "#C8C8C2" }}>{service.desc}</p>
                  <Link
                    to={service.href}
                    aria-label={`Learn more about ${service.name}`}
                    className="text-sm font-bold uppercase tracking-widest self-start"
                    style={{ color: "#E5424F" }}
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-4">Which Service Do You Actually Need?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              Most people call us knowing something is wrong with a tree, not knowing which of these three jobs fixes it. The short version: trimming keeps a tree, removal ends it, and grinding cleans up after removal.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              <strong className="text-white">Trimming</strong> is the right call when the tree is structurally sound and the problem is its shape or its reach — limbs over the roof, deadwood in the canopy, growth into power lines, or the clearance an insurance carrier is asking for. Species matters here. Oaks respond well to a hard prune and fill back in, which is why a good crew will try to save one before removing it.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              <strong className="text-white">Removal</strong> is the call when the structure itself is the problem: a dead or dying tree, a lean that appeared after a storm, a lifted root plate, or a species that simply can't be pruned out of trouble. Pines and sweetgums land here most often — long, heavy limbs and few safe pruning options.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              <strong className="text-white">Stump grinding</strong> is the follow-on. It's what makes the spot usable again — ready for sod, concrete, or a replant — rather than a hole in the yard you mow around.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              The borderline cases are the ones worth paying attention to: a mature tree that looks fine but might be hollow. That's what our resistograph is for. It drills a fine needle through the standing trunk and records the wood's density, so the remove-or-keep decision comes from a reading instead of an opinion. It condemns trees that look healthy from the driveway, and just as often it saves one that a less-equipped crew would have quoted for removal.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              {PROSE.financing}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>
              Not sure which one you're looking at? That's what the free estimate is for — we'll tell you if a tree can be kept.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: "#C41230" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Get a Free Estimate on Any Service</h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Veteran-owned, fully insured, and available 24/7 for emergencies in Jacksonville, NC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="font-bold uppercase tracking-wide px-8 py-4 text-center transition-colors" style={{ background: "white", color: "#C41230" }}>Request Estimate</Link>
              <a href={BUSINESS.phoneHref} className="font-bold uppercase tracking-wide px-8 py-4 text-center border-2 border-white text-white">{BUSINESS.phone}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
