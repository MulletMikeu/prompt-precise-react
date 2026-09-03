import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import { BUSINESS, SERVICE_CITIES } from "../data/siteData";

const TITLE = "Tree Service Area | Onslow County, NC | Godhans Tree Company";
const DESC = "Godhans Tree Company serves Jacksonville, NC and Onslow County with tree removal, trimming & emergency service. See all cities we cover.";
const CANONICAL = "https://godhans.com/service-area";

const CITY_PAGE_MAP: Record<string, string> = {
  "jacksonville-nc": "/tree-service-jacksonville-nc",
  "hubert-nc": "/tree-service-hubert-nc",
  "richlands-nc": "/tree-service-richlands-nc",
  "swansboro-nc": "/tree-service-swansboro-nc",
  "sneads-ferry-nc": "/tree-service-sneads-ferry-nc",
  "camp-lejeune-nc": "/tree-service-camp-lejeune-nc",
  "maysville-nc": "/tree-service-maysville-nc",
  "beulaville-nc": "/tree-service-beulaville-nc",
  "holly-ridge-nc": "/tree-service-holly-ridge-nc",
  "surf-city-nc": "/tree-service-surf-city-nc",
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
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#E5424F", letterSpacing: "0.12em" }}>Service Area</p>
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
                    className="font-body text-sm font-medium uppercase tracking-wider px-4 py-2 transition-colors"
                    style={{
                      border: city.primary ? "1px solid #C41230" : "1px solid #2A2A2A",
                      color: city.primary ? "#E5424F" : "#888888",
                    }}
                  >
                    {city.name}, {city.state}
                  </Link>
                ) : (
                  <span
                    key={city.slug}
                    className="font-body text-sm font-medium uppercase tracking-wider px-4 py-2"
                    style={{ border: "1px solid #2A2A2A", color: "#888888" }}
                  >
                    {city.name}, {city.state}
                  </span>
                );
              })}
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">How Far Do You Travel?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              Our radius is drawn around drive time from Gum Branch Road in Jacksonville, not around a county line. Most of Onslow County sits inside 20–30 minutes of the shop, which is why the whole county is standard service area rather than a special trip.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#C8C8C2" }}>
              Past that, it depends on the job. A single removal an hour out may not price well on its own, but multiple trees or a contract makes the drive worth it for both of us — mobilization is the fixed cost, so it matters far less once we're staging a full day on your property. Call and ask; we'd rather tell you honestly than have you assume you're out of range.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">How Fast Can You Get Here?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              It depends which of three clusters you're in, and being honest about that is more useful than promising everyone the same number.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              <strong className="text-white">Jacksonville core and Camp Lejeune</strong> is where we're fastest. We're based here, we're usually already working here, and an active hazard often gets a crew the same day.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              The <strong className="text-white">southern corridor</strong> — Sneads Ferry, Holly Ridge, and Surf City — runs down toward the coast. Emergencies still get prioritized, but scheduled work out there tends to get grouped, so if you're flexible on the day you'll usually get a better slot and a better price.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#C8C8C2" }}>
              <strong className="text-white">Inland towns</strong> like Richlands, Beulaville, and Maysville work the same way. Storm calls move to the front of the line regardless of where you are; routine trimming and stump work gets scheduled around whichever direction the crew is already headed.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Do Coastal and Inland Properties Have Different Tree Problems?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              Yes, and the difference shows up in how the trees fail rather than in which species grow.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              Nearer the coast, the soil is sandier and holds water at depth. After a wet stretch it stops gripping, and sustained wind levers a tree over at the root plate instead of snapping the trunk — which is why so much of our storm work down there is uprooted pines. Wind exposure is simply higher with less standing timber to break it up, so canopies take more direct loading.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "#C8C8C2" }}>
              Inland, the ground holds better and the failures skew toward the trees themselves: overgrown loblollies and sweetgums with long, heavy limbs that break at their weak points, and dead tops that come down in a summer thunderstorm. Both ends of the county share the same humidity problem — internal decay is a constant here, and a hollow trunk can sit under bark that looks perfect.
            </p>

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
