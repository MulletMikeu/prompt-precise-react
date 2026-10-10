import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/siteData";
import { PROSE } from "../data/homepageCopy";

/**
 * This page is the SERVICES HUB and nothing else.
 *
 * It used to be titled "Tree Services in Jacksonville, NC", which put it in
 * direct competition with the homepage — whose whole job is "tree service
 * jacksonville nc" — and with /tree-service-jacksonville-nc, which is the local
 * crew / trust hub. Three pages on one head term is two too many.
 *
 * So the geo is deliberately out of the title, the H1 and the description here.
 * This page exists to route people to the right service page and to be the honest
 * target of the "Services" breadcrumb; the homepage owns the head term and
 * /tree-service-jacksonville-nc owns the local-crew intent. Do not put
 * "Jacksonville" back in the title.
 */
const TITLE = "All Tree Services We Offer | Godhans Tree Company";
const DESC = `Every service we offer: removal, trimming, stump grinding, emergency response, storm cleanup, debris hauling and testing. Free estimates — ${BUSINESS.phone}.`;
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
    desc: "Stumps ground 10 inches below grade as standard. Grindings hauled away. Ready to replant or landscape — grinding is not full excavation.",
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
  {
    name: "Debris Hauling",
    href: "/debris-hauling-jacksonville-nc",
    desc: "Organic debris only — trees, brush, leaves. Already cut it yourself? We load and haul, priced by the trailer.",
  },
  {
    name: "Resistograph Tree Testing",
    href: "/resistograph-tree-testing-jacksonville-nc",
    desc: "Measures internal decay in a standing trunk, so a sound hardwood does not get removed on somebody's guess.",
  },
  {
    name: "Tree Cabling & Bracing",
    href: "/tree-cabling-bracing-jacksonville-nc",
    desc: "Support hardware for a split fork or weak union — steel or non-invasive synthetic, installed on trees worth keeping.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Helmet>

      <main id="main-content" className="pt-20">
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--red-text)", letterSpacing: "0.12em" }}>What We Do</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">All Tree Services We Offer</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
              Full-service tree care for residential and commercial properties across Jacksonville, NC and Onslow County. From routine trimming to complex emergency removals — we handle it all.
            </p>
          </div>
        </section>

        {/* Triage first, tiles second.
            This section used to sit BELOW the ten service tiles, which meant the
            page opened with a menu for a reader who does not yet know which item
            to pick — and it is the only part of this page that answers a
            question rather than listing an offering. It leads now, and it
            carries in-prose links to the pages it names. */}
        <section className="py-16" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-4">Which service do you actually need?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              Trimming keeps a tree, removal ends it, and grinding cleans up after removal. Most
              people call us knowing something is wrong with a tree and not knowing which of those
              three fixes it, so here is how to tell.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              <Link to="/tree-trimming-jacksonville-nc" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>Trimming</Link>{' '}
              is the right call when the tree is structurally sound and the problem is its shape or
              its reach — limbs over the roof, deadwood in the canopy, growth into power lines, or
              the clearance an insurance carrier is asking for. Species matters here. Oaks respond
              well to a hard prune and fill back in, which is why a good crew will try to save one
              before removing it. If the weak point is a split fork rather than the shape,{' '}
              <Link to="/tree-cabling-bracing-jacksonville-nc" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>cabling and bracing</Link>{' '}
              runs $1,500–$2,500 and is often the cheaper answer than losing the tree.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              <Link to="/tree-removal-jacksonville-nc" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>Removal</Link>{' '}
              is the call when the structure itself is the problem: a dead or dying tree, a lean
              that appeared after a storm, a lifted root plate, or a species that simply can't be
              pruned out of trouble. Pines and sweetgums land here most often — long, heavy limbs
              and few safe pruning options. What it costs depends far more on position than size,
              and the{' '}
              <Link to="/tree-removal-cost-north-carolina" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>full price bands are here</Link>.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              <Link to="/stump-grinding-jacksonville-nc" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>Stump grinding</Link>{' '}
              is the follow-on. It's what makes the spot usable again — ready for sod, concrete, or
              a replant — rather than a hole in the yard you mow around.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              The borderline cases are the ones worth paying attention to: a mature tree that looks
              fine but might be hollow. That's what our{' '}
              <Link to="/resistograph-tree-testing-jacksonville-nc" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>resistograph</Link>{' '}
              is for. It drills a fine needle through the standing trunk and records the wood's
              density, so the remove-or-keep decision comes from a reading instead of an opinion.
              It condemns trees that look healthy from the driveway, and just as often it saves one
              that a less-equipped crew would have quoted for removal.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              {PROSE.financing}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>
              Not sure which one you're looking at? That's what the free estimate is for — we'll
              tell you if a tree can be kept. If you want to vet us first, the{' '}
              <Link to="/tree-service-jacksonville-nc" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>eight questions to ask before hiring anyone</Link>{' '}
              are on our Jacksonville page, and our{' '}
              <Link to="/reviews" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>27 Google reviews</Link>{' '}
              are worth reading before you call. Longer pieces live in our{' '}
              <Link to="/blog" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>tree care guides</Link>.
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
                    style={{ color: "var(--red-text)" }}
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-red">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Get a Free Estimate on Any Service</h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Veteran-owned, fully insured, and available 24/7 for emergencies in Jacksonville, NC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="font-bold uppercase tracking-wide px-8 py-4 text-center transition-colors bg-white text-brand-red">Request Estimate</Link>
              <a href={BUSINESS.phoneHref} className="font-bold uppercase tracking-wide px-8 py-4 text-center border-2 border-white text-white">{BUSINESS.phone}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
