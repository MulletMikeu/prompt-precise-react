import { Link } from "react-router-dom";
import { SERVICE_CITIES, BUSINESS } from "../data/siteData";

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
              <span style={{ color: "#C41230" }}>Onslow County & Beyond</span>
            </h2>

            <p className="font-body text-base leading-relaxed mb-10" style={{ color: "#C8C8C2" }}>
              We provide tree services across Jacksonville and all surrounding
              communities in Onslow County. Not sure if we cover your area?
              Call us directly — we never want to leave a neighbor without help.
            </p>

            {/* City tags */}
            <div className="flex flex-wrap gap-3 mb-10" role="list" aria-label="Cities we serve">
              {SERVICE_CITIES.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locations/${city.slug}`}
                  role="listitem"
                  className="font-body text-sm font-500 uppercase tracking-wider px-4 py-2 transition-all duration-200"
                  style={{
                    border: city.primary ? "1px solid #C41230" : "1px solid #2A2A2A",
                    color: city.primary ? "#C41230" : "#888888",
                    letterSpacing: "0.08em",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C41230";
                    e.currentTarget.style.color = "#C41230";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = city.primary ? "#C41230" : "#2A2A2A";
                    e.currentTarget.style.color = city.primary ? "#C41230" : "#888888";
                  }}
                >
                  {city.name}, {city.state}
                </Link>
              ))}
            </div>

            <a href={BUSINESS.phoneHref} className="btn-primary">Check Your Area — Call {BUSINESS.phone}</a>
          </div>

          {/* Right — map placeholder */}
          <div>
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "4/3", background: "#111111", border: "1px solid #2A2A2A" }}
            >
              {/*
                MANUAL STEP — replace this block with your Google Maps embed:
                1. Go to maps.google.com
                2. Search "Godhans Tree Company Jacksonville NC"
                3. Click Share → Embed a map → Copy HTML
                4. Paste the iframe here, set width="100%" height="100%" style="border:0;"
              */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <p
                  className="font-display font-700 uppercase text-white"
                  style={{ fontSize: "1rem", letterSpacing: "0.06em" }}
                >
                  Google Map
                </p>
                <p className="font-body text-sm" style={{ color: "#555555" }}>
                  Replace this block with Google Maps embed code
                </p>
                <p
                  className="font-body text-xs px-4 py-2"
                  style={{
                    color: "#C41230",
                    border: "1px solid #C41230",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                  }}
                >
                  4445 Gum Branch Rd, Jacksonville, NC 28540
                </p>
              </div>
            </div>

            {/* Address block */}
            <div className="mt-4 p-5" style={{ background: "#111111", border: "1px solid #1A1A1A" }}>
              <address className="not-italic">
                <p className="font-display font-700 uppercase text-white mb-2" style={{ fontSize: "0.9rem", letterSpacing: "0.06em" }}>{BUSINESS.name}</p>
                <p className="font-body text-sm mb-3" style={{ color: "#555555" }}>{BUSINESS.address.full}</p>
                <a href={BUSINESS.phoneHref} className="font-bold block" style={{ color: "#C41230" }}>{BUSINESS.phone}</a>
                <a href={BUSINESS.emailHref} className="text-sm block mt-1" style={{ color: "#555555" }}>{BUSINESS.email}</a>
              </address>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
