import { Link } from "react-router-dom";
import { BUSINESS, SERVICES, SERVICE_CITIES, NAV_LINKS } from "../data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#080808" }} aria-label="Site footer">
      <div className="container-brand py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6" aria-label="Godhans Tree Company home">
              <div
                className="w-9 h-9 flex items-center justify-center font-bold text-white text-lg flex-shrink-0"
                style={{ background: "#C41230" }}
              >
                G
              </div>
              <div className="leading-none">
                <span className="block font-bold text-white uppercase" style={{ fontSize: "1.15rem" }}>
                  Godhans
                </span>
                <span className="block text-xs tracking-widest uppercase" style={{ color: "#555555" }}>
                  Tree Company
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "#555555" }}>
              Veteran-owned tree service in Jacksonville, NC. We take on the
              jobs others won't. Licensed, insured, and available 24/7.
            </p>

            <address className="not-italic mb-6">
              <p className="text-sm mb-1" style={{ color: "#888888" }}>
                {BUSINESS.address.full}
              </p>
              
                href={BUSINESS.phoneHref}
                className="font-bold block mt-2 transition-colors"
                style={{ color: "#C41230", fontSize: "1.05rem" }}
              >
                {BUSINESS.phone}
              </a>
              
                href={BUSINESS.emailHref}
                className="text-sm block mt-1 transition-colors"
                style={{ color: "#555555" }}
              >
                {BUSINESS.email}
              </a>
            </address>

            <div className="flex gap-4">
              
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest transition-colors"
                style={{ color: "#555555" }}
                aria-label="Godhans on Facebook"
              >
                Facebook
              </a>
              
                href={BUSINESS.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest transition-colors"
                style={{ color: "#555555" }}
                aria-label="Godhans on YouTube"
              >
                YouTube
              </a>
            </div>
          </div>

          <div>
            <h3
              className="font-bold uppercase text-white mb-6"
              style={{ fontSize: "0.8rem", letterSpacing: "0.12em" }}
            >
              Our Services
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={s.href}
                    className="text-sm transition-colors"
                    style={{ color: "#555555" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C41230")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="font-bold uppercase text-white mb-6"
              style={{ fontSize: "0.8rem", letterSpacing: "0.12em" }}
            >
              Service Area
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              {SERVICE_CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/locations/${city.slug}`}
                    className="text-sm transition-colors"
                    style={{ color: city.primary ? "#888888" : "#555555" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C41230")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = city.primary ? "#888888" : "#555555")}
                  >
                    {city.name}, {city.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="font-bold uppercase text-white mb-6"
              style={{ fontSize: "0.8rem", letterSpacing: "0.12em" }}
            >
              Quick Links
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5 mb-10">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "#555555" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C41230")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-sm" style={{ color: "#C41230" }}>
                  Get Free Estimate
                </Link>
              </li>
            </ul>

            <div className="p-4" style={{ border: "1px solid #1A1A1A", background: "#0A0A0A" }}>
              <p className="font-bold uppercase text-white mb-1" style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}>
                Hours
              </p>
              <p className="text-sm" style={{ color: "#C41230" }}>Open 24 Hours</p>
              <p className="text-xs mt-1" style={{ color: "#555555" }}>7 Days a Week · 365 Days a Year</p>
            </div>
          </div>

        </div>
      </div>

      <div style={{ borderTop: "1px solid #141414" }}>
        <div className="container-brand py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#3A3A3A" }}>
            {year} Godhans Tree Company. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs" style={{ color: "#3A3A3A" }}>
              Privacy Policy
            </Link>
            <Link to="/sitemap" className="text-xs" style={{ color: "#3A3A3A" }}>
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}