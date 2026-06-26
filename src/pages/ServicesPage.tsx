import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/siteData";

const TITLE = "Tree Services in Jacksonville, NC | Godhans Tree Company";
const DESC = "Tree removal, trimming, stump grinding, land clearing & storm cleanup in Jacksonville, NC. Veteran-owned. Free estimates — call (618) 704-4861.";
const CANONICAL = "https://godhans.com/services";

const SERVICES = [
  {
    name: "Tree Removal",
    href: "/tree-removal-jacksonville-nc",
    desc: "Safe, controlled removal of any size tree. Licensed crew, full debris haul-away, and zero property damage.",
  },
  {
    name: "Tree Trimming",
    href: "/tree-trimming-jacksonville-nc",
    desc: "Crown thinning, deadwood removal, canopy raising, and precision pruning to keep your trees healthy.",
  },
  {
    name: "Stump Grinding",
    href: "/stump-grinding-jacksonville-nc",
    desc: "Stumps ground to 6–12 inches below grade. All grindings removed. Property ready to replant or landscape.",
  },
  {
    name: "Emergency Tree Service",
    href: "/emergency-tree-service-jacksonville-nc",
    desc: "True 24/7 response for storm damage, fallen trees, and hazardous situations. We answer day and night.",
  },
  {
    name: "Land Clearing",
    href: "/land-clearing-jacksonville-nc",
    desc: "Residential and commercial lot clearing, rough grading, brush removal, and full site prep.",
  },
  {
    name: "Storm Cleanup",
    href: "/storm-cleanup-jacksonville-nc",
    desc: "Fast debris removal after storms. Downed tree extraction, limb and brush cleanup, same or next day.",
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
        <meta property="og:image" content="https://godhans.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image.jpg" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Helmet>

      <main id="main-content" className="pt-20">
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="font-body text-xs font-600 uppercase tracking-widest mb-4" style={{ color: "#E5424F", letterSpacing: "0.12em" }}>What We Do</p>
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
