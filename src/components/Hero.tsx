import { Link } from "react-router-dom";
import { BUSINESS } from "../data/siteData";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden"
      aria-label="Hero"
      style={{ paddingTop: "5rem" }}
    >
      {/* Background image — replace src with your real hero photo */}
      <div className="absolute inset-0 z-0" style={{ background: "#111111" }}>
        <img
          src="/images/hero-godhans-tree-removal-jacksonville-nc.webp"
          alt="Godhans Tree Company spider lift tree removal in Jacksonville NC"
          className="w-full h-full object-cover object-top"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.75) 45%, rgba(10,10,10,0.35) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-0 right-0 h-1 z-10"
          style={{ background: "#C41230" }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-brand w-full pb-16 md:pb-24">
        <div className="max-w-4xl">

          {/* Label */}
          <p className="label-red mb-6 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            Veteran-Owned · Jacksonville, NC · Est. 2013
          </p>

          {/* H1 */}
          <h1
            className="text-display-2xl text-white mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Tree Service
            <br />
            <span style={{ color: "#C41230" }}>Jacksonville, NC</span>
            <br />
            Done Right.
          </h1>

          {/* Subheadline */}
          <p
            className="font-body text-lg md:text-xl mb-10 max-w-2xl animate-fade-up"
            style={{ color: "#C8C8C2", animationDelay: "0.35s", opacity: 0 }}
          >
            Godhans takes on the jobs other companies won't. No job too big, no
            property too complex. We show up on time, work hard, and leave your
            yard cleaner than we found it — guaranteed.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.45s", opacity: 0 }}
          >
            <Link to="/contact" className="btn-primary text-base sm:text-lg">
              Get Your Free Estimate
            </Link>
            <a href={BUSINESS.phoneHref} className="btn-outline text-base sm:text-lg">Call {BUSINESS.phone}</a>
          </div>

          {/* Trust bar */}
          <div
            className="flex flex-wrap gap-x-8 gap-y-3 animate-fade-up"
            style={{ animationDelay: "0.55s", opacity: 0 }}
          >
            {[
              "Licensed & Insured",
              "Free Estimates",
              "24/7 Emergency Service",
              `${BUSINESS.yearsInBusiness}+ Years Experience`,
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span
                  className="block w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#C41230" }}
                  aria-hidden="true"
                />
                <span
                  className="font-body text-sm font-600 uppercase tracking-wider"
                  style={{ color: "#C8C8C2", letterSpacing: "0.08em" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1s", opacity: 0 }}
        aria-hidden="true"
      >
        <span
          className="font-body text-xs uppercase tracking-widest"
          style={{ color: "#555", writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, #555, transparent)" }}
        />
      </div>
    </section>
  );
}