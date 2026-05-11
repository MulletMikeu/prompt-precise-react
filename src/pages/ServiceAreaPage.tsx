import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BUSINESS, SERVICE_CITIES } from "../data/siteData";

const TITLE = "Tree Service Area | Onslow County, NC | Godhans Tree Company";
const DESC = "Godhans Tree Company provides tree removal, trimming, and emergency services throughout Jacksonville, NC and all of Onslow County. See all cities and communities we serve.";
const CANONICAL = "https://godhans.com/service-area";

const CITY_PAGE_MAP: Record<string, string> = {
  "jacksonville-nc": "/tree-service-jacksonville-nc",
  "hubert-nc": "/tree-service-hubert-nc",
  "richlands-nc": "/tree-service-richlands-nc",
  "swansboro-nc": "/tree-service-swansboro-nc",
  "sneads-ferry-nc": "/tree-service-sneads-ferry-nc",
  "camp-lejeune-nc": "/tree-service-camp-lejeune-nc",
};

export default function ServiceAreaPage() {
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
      </Helmet>

      <main id="main-content" className="pt-20">
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="font-body text-xs font-600 uppercase tracking-widest mb-4" style={{ color: "#C41230", letterSpacing: "0.12em" }}>Service Area</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tree Service Throughout Onslow County</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
              Godhans Tree Company is based in Jacksonville, NC and serves communities across Onslow County and beyond. Not sure if we cover your area? Call us — we never want to leave a neighbor without help.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Cities We Serve</h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {SERVICE_CITIES.map((city) => {
                const pagePath = CITY_PAGE_MAP[city.slug];
                return pagePath ? (
                  <Link
                    key={city.slug}
                    to={pagePath}
                    className="font-body text-sm font-500 uppercase tracking-wider px-4 py-2 transition-colors"
                    style={{
                      border: city.primary ? "1px solid #C41230" : "1px solid #2A2A2A",
                      color: city.primary ? "#C41230" : "#888888",
                    }}
                  >
                    {city.name}, {city.state}
                  </Link>
                ) : (
                  <span
                    key={city.slug}
                    className="font-body text-sm font-500 uppercase tracking-wider px-4 py-2"
                    style={{ border: "1px solid #2A2A2A", color: "#888888" }}
                  >
                    {city.name}, {city.state}
                  </span>
                );
              })}
            </div>

            <div className="p-6" style={{ background: "#111111", border: "1px solid #1A1A1A" }}>
              <h2 className="text-lg font-bold text-white mb-2">Don't See Your Town?</h2>
              <p className="text-base mb-4" style={{ color: "#C8C8C2" }}>
                We serve many communities within 20–30 minutes of Jacksonville. Give us a call and we'll let you know if we can help.
              </p>
              <a href={BUSINESS.phoneHref} className="btn-primary inline-flex">Call {BUSINESS.phone}</a>
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#C41230" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Schedule?</h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Fast response times throughout Onslow County. Free estimates, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="font-bold uppercase tracking-wide px-8 py-4 text-center" style={{ background: "white", color: "#C41230" }}>Request Estimate</Link>
              <a href={BUSINESS.phoneHref} className="font-bold uppercase tracking-wide px-8 py-4 text-center border-2 border-white text-white">{BUSINESS.phone}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
