import { Link } from "react-router-dom";
import { BUSINESS, SERVICES, SERVICE_CITIES, NAV_LINKS } from "../data/siteData";

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

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#080808" }}>
      <div className="container-brand py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-9 h-9 flex items-center justify-center font-bold text-white" style={{ background: "#C41230" }}>G</div>
              <div className="leading-none">
                <span className="block font-bold text-white uppercase" style={{ fontSize: "1.15rem" }}>Godhans</span>
                <span className="block text-xs tracking-widest uppercase" style={{ color: "#888888" }}>Tree Company</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#888888" }}>
              Veteran-owned tree service in Jacksonville, NC. Licensed, insured, and available 24/7.
            </p>
            <p className="text-sm mb-1" style={{ color: "#888888" }}>{BUSINESS.address.full}</p>
            <a href={BUSINESS.phoneHref} className="font-bold block mt-2" style={{ color: "#C41230" }}>{BUSINESS.phone}</a>
            <a href={BUSINESS.emailHref} className="text-sm block mt-1" style={{ color: "#888888" }}>{BUSINESS.email}</a>
            <div className="flex gap-4 mt-4">
              <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest" style={{ color: "#888888" }}>Facebook</a>
              <a href={BUSINESS.social.youtube} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest" style={{ color: "#888888" }}>YouTube</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold uppercase text-white mb-6" style={{ fontSize: "0.8rem", letterSpacing: "0.12em" }}>Our Services</h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={s.href} className="text-sm" style={{ color: "#888888" }}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase text-white mb-6" style={{ fontSize: "0.8rem", letterSpacing: "0.12em" }}>Service Area</h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              {SERVICE_CITIES.map((city) => {
                const pagePath = CITY_PAGE_MAP[city.slug];
                return pagePath ? (
                  <li key={city.slug}>
                    <Link to={pagePath} className="text-sm" style={{ color: city.primary ? "#888888" : "#888888" }}>
                      {city.name}, {city.state}
                    </Link>
                  </li>
                ) : (
                  <li key={city.slug}>
                    <span className="text-sm" style={{ color: "#888888" }}>{city.name}, {city.state}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase text-white mb-6" style={{ fontSize: "0.8rem", letterSpacing: "0.12em" }}>Quick Links</h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5 mb-10">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm" style={{ color: "#888888" }}>{link.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-sm" style={{ color: "#C41230" }}>Get Free Estimate</Link>
              </li>
            </ul>
            <div className="p-4" style={{ border: "1px solid #1A1A1A", background: "#0A0A0A" }}>
              <p className="font-bold uppercase text-white mb-1" style={{ fontSize: "0.8rem" }}>Hours</p>
              <p className="text-sm" style={{ color: "#C41230" }}>Open 24 Hours</p>
              <p className="text-xs mt-1" style={{ color: "#888888" }}>7 Days a Week</p>
            </div>
          </div>

        </div>
      </div>
      <div style={{ borderTop: "1px solid #141414" }}>
        <div className="container-brand py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#777777" }}>© {year} Godhans Tree Company. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs" style={{ color: "#777777" }}>Privacy Policy</Link>
            <Link to="/sitemap" className="text-xs" style={{ color: "#777777" }}>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}