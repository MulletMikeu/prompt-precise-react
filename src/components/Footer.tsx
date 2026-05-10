import { Link } from "react-router-dom";
import { BUSINESS, SERVICES, SERVICE_CITIES, NAV_LINKS } from "../data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#080808" }} aria-label="Site footer">

      {/* Main grid */}
      <div className="container-brand py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6" aria-label="Godhans Tree Company home">
              <div
                className="w-9 h-9 flex items-center justify-center font-display font-800 text-white text-lg flex-shrink-0"
                style={{ background: "#C41230" }}
                aria-hidden="true"
              >
                G
              </div>
              <div className="leading-none">
                <span className="block font-display font-800 text-white uppercase" style={{ fontSize: "1.15rem" }}>
                  Godhans
                </span>
                <span className="block text-xs font-body tracking-widest uppercase" style={{ color: "#555555" }}>
                  Tree Company
                </span>
              </div>
            </Link>

            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "#555555" }}>
              Veteran-owned tree service in Jacksonville, NC. We take on the
              jobs others won't. Licensed, insured, and available 24/7.
            </p>

            <address className="not-italic mb-6">
              <p className="font-body text-sm mb-1" style={{ color: "#888888" }}>
                {BUSINESS.address.full}
              </p>
              
                href={BUSINESS.phoneHref}
                className="font-display font-700 block mt-2 transition-colors"
                style={{ color: "#C41230", fontSize: "1.05rem" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8173A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#C41230")}
              >
                {BUSINESS.phone}
              </a>
              
                href={BUSINESS.emailHref}
                className="font-body text-sm block mt-1 transition-colors"
                style={{ color: "#555555" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#888888")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
              >
                {BUSINESS.email}
              </a>
            </address>

            {/* Social */}
            <div className="flex gap-4">
              
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs uppercase tracking-widest transition-colors"
                style={{ color: "#555555", letterSpacing: "0.1em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C41230")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
                aria-label="Godhans on Facebook"
              >
                Facebook
              </a>
              
                href={BUSINESS.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs uppercase tracking-widest transition-colors"
                style={{ color: "#555555", letterSpacing: "0.1em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C41230")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555555")}
                aria-label="Godhans on YouTube"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div>
            <h3
              className="font-display font-700 uppercase text-white mb-6"
              style={{ fontSize: "0.8rem", letterSpacing: "0.12em" }}
            >
              Our Services
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={s.href}
                    className="font-body text-sm transition-colors"
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

          {/* Col 3 - Service Area */}
          <div>
            <h3
              className="font-display font-700 uppercase text-white mb-6"
              style={{ fontSize: "0.8rem", letterSpacing: "0.12em" }}
            >
              Service Area
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col