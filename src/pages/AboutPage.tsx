import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/siteData";

const TITLE = "About Godhans Tree Company | Veteran-Owned Tree Service Jacksonville, NC";
const DESC = `Veteran-owned tree service in Jacksonville, NC since ${BUSINESS.founded}. Licensed & insured. Meet the team behind Godhans Tree Company.`;
const CANONICAL = "https://godhans.com/about";

export default function AboutPage() {
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
            <p className="font-body text-xs font-600 uppercase tracking-widest mb-4" style={{ color: "#C41230", letterSpacing: "0.12em" }}>About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Godhans Tree Company</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
              Godhans Tree Company is a veteran-owned, family-operated tree service based in Jacksonville, NC. Founded in {BUSINESS.founded}, we've built our reputation on doing the jobs other companies won't — showing up on time, working safely, and leaving every property cleaner than we found it.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#C8C8C2" }}>
              What started as a one-truck operation has grown into one of Onslow County's most trusted tree service companies. Our crew is made up of trained professionals who take pride in their craft — from high-risk canopy work to precision stump grinding.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>
              Being veteran-owned isn't just a label — it shapes everything we do. Discipline, reliability, and a commitment to the job define every project we take on. We serve Jacksonville and the surrounding communities including Camp Lejeune, Swansboro, Richlands, Hubert, and Sneads Ferry.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Why Homeowners Choose Us</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BUSINESS.credentials.map((cred) => (
                <li key={cred} className="flex items-center gap-3">
                  <span className="block w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#C41230" }} aria-hidden="true" />
                  <span className="text-base" style={{ color: "#C8C8C2" }}>{cred}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">Meet the Owners</h2>
              <p className="text-base" style={{ color: "#C8C8C2" }}>Get to know Michael and James — the veterans behind Godhans Tree Company.</p>
            </div>
            <Link to="/meet-the-owners" className="btn-primary flex-shrink-0">Meet the Team</Link>
          </div>
        </section>

        <section className="py-16" style={{ background: "#C41230" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready for a Free Estimate?</h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Licensed, insured, and available 24/7. No pressure — just honest pricing.
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
