import { Helmet } from "react-helmet-async";
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

export default function LocationPage({ city }: LocationPageProps) {
  const slug = city.toLowerCase().replace(/\s+/g, "-");
  const canonical = `https://godhans.com/tree-service-${slug}-nc`;
  const title = `Tree Service in ${city}, NC | Godhans Tree Company`;
  const description = `Tree removal, trimming, stump grinding & 24/7 emergency tree service in ${city}, NC. Veteran-owned, insured — Godhans Tree Company. Free estimates.`;

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
            <p className="font-body text-xs font-600 uppercase tracking-widest mb-4" style={{ color: "#C41230", letterSpacing: "0.12em" }}>Service Area</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tree Service in {city}, NC</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
              Godhans Tree Company serves {city} and the surrounding Onslow County area with professional tree removal, trimming, stump grinding, and 24/7 emergency response. Veteran-owned, fully licensed and insured — free estimates on every job.
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
                  <Link to={service.href} className="text-sm font-bold uppercase tracking-widest self-start" style={{ color: "#C41230" }}>
                    Learn More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-4">Why {city} Homeowners Choose Godhans</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              Godhans Tree Company is a veteran-owned, family-operated business based in Jacksonville, NC. We've been serving Onslow County communities since 2013 — and that means we know the terrain, the tree species, and the storm patterns of coastal North Carolina better than anyone.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              Our crew carries full liability insurance and workers' compensation coverage on every job. No subcontractors — every person on your property is part of the Godhans team. We show up on time, communicate clearly, and leave your property cleaner than we found it.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>
              From routine tree trimming to high-risk removals in tight spaces, we handle jobs other companies won't take on. If you're in {city} and need a tree service you can trust, call us for a free on-site estimate with no obligation.
            </p>
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
