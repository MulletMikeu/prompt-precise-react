import { Link } from "react-router-dom";
import { SERVICES } from "../data/siteData";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-pad"
      style={{ background: "#0A0A0A" }}
      aria-labelledby="services-heading"
    >
      <div className="container-brand">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="label-red mb-4">What We Do</p>
            <h2 id="services-heading" className="text-display-xl text-white">
              Tree Services in
              <br />
              <span style={{ color: "#C41230" }}>Jacksonville & Onslow County</span>
            </h2>
          </div>
          <p className="font-body text-base max-w-sm md:text-right" style={{ color: "#888888" }}>
            From single-tree removal to full lot clearing — if it involves trees, we handle it.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#1A1A1A" }}>
          {SERVICES.map((service, i) => (
            <Link
              key={service.id}
              to={service.href}
              className="group block p-8 transition-colors duration-200"
              style={{ background: "#0A0A0A" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#111111")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0A0A0A")}
              aria-label={`Learn about ${service.name}`}
            >
              {/* Number */}
              <span
                className="block font-display font-800 mb-4"
                style={{ fontSize: "3rem", lineHeight: 1, color: "#1A1A1A" }}
              >
                0{i + 1}
              </span>

              {/* Name */}
              <h3
                className="text-white mb-3 group-hover:text-red-500 transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, textTransform: "uppercase" }}
              >
                {service.name}
              </h3>

              {/* Divider */}
              <div
                className="w-8 h-0.5 mb-4 transition-all duration-300 group-hover:w-16"
                style={{ background: "#C41230" }}
                aria-hidden="true"
              />

              {/* Description */}
              <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "#888888" }}>
                {service.description}
              </p>

              {/* Arrow */}
              <span
                className="inline-flex items-center gap-2 font-display font-700 text-sm uppercase tracking-widest transition-all duration-200 group-hover:gap-4"
                style={{ color: "#C41230", letterSpacing: "0.1em" }}
              >
                Learn More <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}