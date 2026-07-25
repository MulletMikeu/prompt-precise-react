import { Link } from "react-router-dom";
import { SERVICE_CITIES, BUSINESS } from "../data/siteData";

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

export default function ServiceAreaSection() {
  return (
    <section
      className="section-pad"
      style={{ background: "#0A0A0A" }}
      aria-labelledby="area-heading"
    >
      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="label-red mb-4">Service Area</p>
            <h2 id="area-heading" className="text-display-xl text-white mb-6">
              Proudly Serving
              <br />
              <span style={{ color: "#E5424F" }}>Onslow County & Beyond</span>
            </h2>

            <p className="font-body text-base leading-relaxed mb-10" style={{ color: "#C8C8C2" }}>
              We provide tree services across Jacksonville and all surrounding
              communities in Onslow County. Not sure if we cover your area?
              Call us directly — we never want to leave a neighbor without help.
            </p>

            {/* City tags */}
            <ul className="flex flex-wrap gap-3 mb-10 list-none m-0 p-0" aria-label="Cities we serve">
              {SERVICE_CITIES.map((city) => {
                const pagePath = CITY_PAGE_MAP[city.slug];
                const sharedStyle = {
                  border: city.primary ? "1px solid #C41230" : "1px solid #2A2A2A",
                  color: city.primary ? "#E5424F" : "#888888",
                  letterSpacing: "0.08em",
                };
                const hoverHandlers = pagePath ? {
                  onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.borderColor = "#C41230";
                    e.currentTarget.style.color = "#E5424F";
                  },
                  onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.borderColor = city.primary ? "#C41230" : "#2A2A2A";
                    e.currentTarget.style.color = city.primary ? "#E5424F" : "#888888";
                  },
                } : {};
                return (
                  <li key={city.slug}>
                    {pagePath ? (
                      <Link
                        to={pagePath}
                        className="block font-body text-sm font-500 uppercase tracking-wider px-4 py-2 transition-all duration-200"
                        style={sharedStyle}
                        {...hoverHandlers}
                      >
                        {city.name}, {city.state}
                      </Link>
                    ) : (
                      <span
                        className="block font-body text-sm font-500 uppercase tracking-wider px-4 py-2"
                        style={sharedStyle}
                      >
                        {city.name}, {city.state}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>

            <a href={BUSINESS.phoneHref} className="btn-primary">Check Your Area — Call {BUSINESS.phone}</a>
          </div>

          {/* Right — map placeholder */}
          <div>
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "4/3", background: "#111111", border: "1px solid #2A2A2A" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.8!2d-77.458531!3d34.8202161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a911ae104ece11%3A0x6af5edd22ef362ab!2sGodhans!5e0!3m2!1sen!2sus!4v1715000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Godhans Tree Company - 4445 Gum Branch Rd Jacksonville NC"
              />
            </div>

            {/* Address block */}
            <div className="mt-4 p-5" style={{ background: "#111111", border: "1px solid #1A1A1A" }}>
              <address className="not-italic">
                <p className="font-display font-700 uppercase text-white mb-2" style={{ fontSize: "0.9rem", letterSpacing: "0.06em" }}>{BUSINESS.name}</p>
                <p className="font-body text-sm mb-3" style={{ color: "#888888" }}>{BUSINESS.address.full}</p>
                <a href={BUSINESS.phoneHref} className="font-bold block" style={{ color: "#E5424F" }}>{BUSINESS.phone}</a>
                <a href={BUSINESS.emailHref} className="text-sm block mt-1" style={{ color: "#888888" }}>{BUSINESS.email}</a>
              </address>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
