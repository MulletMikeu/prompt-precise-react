import { Link } from "react-router-dom";
import { BUSINESS, SERVICES } from "../data/siteData";

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
              <span style={{ color: "var(--red-text)" }}>Jacksonville & Onslow County</span>
            </h2>
          </div>
          <p className="font-body text-base max-w-sm md:text-right" style={{ color: "#888888" }}>
            From single-tree removal to full-property cleanup — if it involves trees, we handle it.
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
            >
              {/* Number */}
              <span
                className="block font-display font-extrabold mb-4"
                style={{ fontSize: "3rem", lineHeight: 1, color: "#888888" }}
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
                style={{ background: "var(--red)" }}
                aria-hidden="true"
              />

              {/* Description */}
              <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "#888888" }}>
                {service.description}
              </p>

              {/* Arrow */}
              <span
                className="inline-flex items-center gap-2 font-display font-bold text-sm uppercase tracking-widest transition-all duration-200 group-hover:gap-4"
                style={{ color: "var(--red-text)", letterSpacing: "0.1em" }}
              >
                {/* Keyword anchor rather than "Learn More". The whole card is a
                    <Link>, so a link inside the description would be nested
                    anchors — invalid HTML — and this is the one place the card's
                    visible anchor text can carry the service + geo. */}
                {service.name} in {BUSINESS.primaryCity} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}

          {/* No filler cell. SERVICES has six entries (Ship M merged storm
              cleanup into emergency and added commercial), so the grid is
              exactly 2 rows x 3 and a seventh cell would orphan itself on a
              third row. The spider-lift-over-house photo that used to sit here
              is no longer on the homepage; the job-photo row in HomeLocal still
              carries a different spider-lift shot. */}
        </div>

        {/* Ship I — the four owner pages the homepage was only linking from a
            card tile.
            WHY. The grid above links all six services, but a card is a tile:
            the anchor is the service name on its own, inside a templated
            component, and an audit of the whole site found the homepage's only
            in-prose service anchors were the commercial and residential pair
            below. Meanwhile the homepage ranks ~4th for nearly every money
            query while the page that should own each one ranks 40th–65th. This
            sentence is the homepage pointing down at the four owners it was
            competing with instead.
            ANCHOR RULES. Each anchor is the query family, not the page title,
            and each one is unique on this page — "commercial tree service in
            Jacksonville" is the commercial card's and is not reused here.
            Four anchors in one sentence is the limit; if a fifth is ever
            wanted it belongs in its own sentence, not appended to this list.
            Ship S (2026-11-24, owner-approved): the cost page is linked from
            its own closing sentence. The homepage still carries no prices
            (owner ruling, Ship L). */}
        <p className="font-body text-base leading-relaxed mt-8" style={{ color: "#888888" }}>
          Most calls are one of three jobs:{' '}
          <Link to="/tree-removal-jacksonville-nc" className="underline underline-offset-2" style={{ color: "var(--red-text)" }}>
            hazardous and large tree removal
          </Link>
          {', '}
          <Link to="/tree-trimming-jacksonville-nc" className="underline underline-offset-2" style={{ color: "var(--red-text)" }}>
            tree trimming
          </Link>
          {' '}before hurricane season, and{' '}
          <Link to="/emergency-tree-service-jacksonville-nc" className="underline underline-offset-2" style={{ color: "var(--red-text)" }}>
            24/7 emergency tree service and storm cleanup
          </Link>
          {' '}when something is already on the house or the wind has just passed. If price is your first question, see{' '}
          <Link to="/tree-removal-cost-north-carolina" className="underline underline-offset-2" style={{ color: "var(--red-text)" }}>
            tree removal cost in Jacksonville
          </Link>
          .
        </p>

        {/* Ship M: the commercial/residential sentence that sat here is gone.
            Residential 301s to "/" (this page), and commercial is now a card in
            the grid above, whose anchor already reads "Commercial Tree Service
            in Jacksonville, NC" — a second link to it here would repeat it. */}

        {/* Ship N: the three-photo job gallery that sat here moved into
            HomeLocal, under the neighborhoods block, with the mid-page CTA. */}

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