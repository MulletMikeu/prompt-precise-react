import { Link } from "react-router-dom";
import { BUSINESS } from "../data/siteData";

export default function CTABanner() {
  return (
    <section
      className="section-pad-sm relative overflow-hidden"
      style={{ background: "#C41230" }}
      aria-label="Call to action"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.03) 40px, rgba(0,0,0,0.03) 80px)",
        }}
        aria-hidden="true"
      />

      <div className="container-brand relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          {/* Text */}
          <div className="max-w-2xl">
            <p
              className="font-body text-sm uppercase tracking-widest mb-3"
              style={{ color: "rgba(255,255,255,0.65)", letterSpacing: "0.12em" }}
            >
              Ready to get started?
            </p>
            <h2
              className="text-display-xl text-white mb-4"
              style={{ lineHeight: 0.95 }}
            >
              Get Your Free
              <br />
              Estimate Today.
            </h2>
            <p className="font-body text-base" style={{ color: "rgba(255,255,255,0.8)" }}>
              No pressure. No obligation. A straight, honest quote from a local
              team that shows up on time, does the job right, and treats your
              property with respect.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="font-display font-700 uppercase text-base tracking-wider px-8 py-4 text-center transition-all duration-200"
              style={{
                background: "white",
                color: "#C41230",
                letterSpacing: "0.06em",
                border: "2px solid white",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#F5F5F0";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "white";
              }}
            >
              Request Free Estimate
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="font-display font-700 uppercase text-base tracking-wider px-8 py-4 text-center transition-all duration-200"
              style={{
                background: "transparent",
                color: "white",
                letterSpacing: "0.06em",
                border: "2px solid rgba(255,255,255,0.6)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "white";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.6)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}