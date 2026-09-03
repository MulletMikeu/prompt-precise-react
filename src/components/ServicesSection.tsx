import { Link } from "react-router-dom";
import { BUSINESS, SERVICES } from "../data/siteData";

/**
 * The gallery is one column below Tailwind's `sm` (640px) and three columns
 * above it, inside `.container-brand` (max-width 1280px, padding clamped to
 * 3rem). So past a 1280px viewport each cell is a fixed (1280 - 96) / 3 ≈ 394px
 * and `33vw` would over-request by ~60%.
 */
const GALLERY_SIZES = "(min-width: 1280px) 394px, (min-width: 640px) 33vw, 100vw";

/** Widths that scripts/gen-images.mjs emits, minus any above a master's own width. */
const GALLERY = [
  {
    base: "pine-spar-rigging-tree-removal-jacksonville-nc",
    alt: "Sectioned pine spar rigged for lowering during a tree removal in Jacksonville, NC",
    widths: [480, 768, 1024, 1280],
  },
  {
    base: "stump-grinding-operator-jacksonville-nc",
    alt: "Godhans operator grinding a large oak stump in Jacksonville, NC",
    widths: [480, 768, 1024, 1280],
  },
  {
    base: "spider-lift-tight-backyard-jacksonville-nc",
    alt: "Compact spider lift set up in a tight fenced backyard for tree removal in Jacksonville, NC",
    widths: [480, 768, 1024, 1280],
  },
];

const srcSet = (photo: (typeof GALLERY)[number], ext: string) =>
  photo.widths.map((w) => `/images/${photo.base}-${w}.${ext} ${w}w`).join(", ");

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
              <span style={{ color: "#E5424F" }}>Jacksonville & Onslow County</span>
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
                style={{ background: "#C41230" }}
                aria-hidden="true"
              />

              {/* Description */}
              <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "#888888" }}>
                {service.description}
              </p>

              {/* Arrow */}
              <span
                className="inline-flex items-center gap-2 font-display font-bold text-sm uppercase tracking-widest transition-all duration-200 group-hover:gap-4"
                style={{ color: "#E5424F", letterSpacing: "0.1em" }}
              >
                {/* Keyword anchor rather than "Learn More". The whole card is a
                    <Link>, so a link inside the description would be nested
                    anchors — invalid HTML — and this is the one place the card's
                    visible anchor text can carry the service + geo. */}
                {service.name} in {BUSINESS.primaryCity} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}

          {/* Sixth cell. The grid is 3 columns and SERVICES has five entries, so
              this slot was empty at lg. Styled to match a card — same background,
              same 1px seam — with the photo filling it rather than a text block. */}
          <div className="relative overflow-hidden" style={{ background: "#0A0A0A", aspectRatio: "4/3" }}>
            <picture className="absolute inset-0 block w-full h-full">
              <source
                type="image/avif"
                srcSet="/images/spider-lift-full-extension-over-house-jacksonville-nc-480.avif 480w, /images/spider-lift-full-extension-over-house-jacksonville-nc-768.avif 768w, /images/spider-lift-full-extension-over-house-jacksonville-nc-1024.avif 1024w, /images/spider-lift-full-extension-over-house-jacksonville-nc-1280.avif 1280w"
                sizes={GALLERY_SIZES}
              />
              <img
                src="/images/spider-lift-full-extension-over-house-jacksonville-nc-768.webp"
                srcSet="/images/spider-lift-full-extension-over-house-jacksonville-nc-480.webp 480w, /images/spider-lift-full-extension-over-house-jacksonville-nc-768.webp 768w, /images/spider-lift-full-extension-over-house-jacksonville-nc-1024.webp 1024w, /images/spider-lift-full-extension-over-house-jacksonville-nc-1280.webp 1280w"
                sizes={GALLERY_SIZES}
                alt="90-foot spider lift fully extended for tree removal over a house in Onslow County, NC"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="1024"
                height="768"
              />
            </picture>
          </div>
        </div>

        {/* Commercial & residential split, directly under the grid.
            The commercial anchor text is fixed at "commercial tree service in
            Jacksonville" — the site already ranks #1 on non-geo commercial
            terms, so this anchor is deliberate and must not be varied or
            duplicated elsewhere on the homepage. */}
        <p className="font-body text-base leading-relaxed mt-8" style={{ color: "#888888" }}>
          Commercial &amp; Residential: we handle{' '}
          <Link to="/commercial-tree-service-jacksonville-nc" className="underline underline-offset-2" style={{ color: "#E5424F" }}>
            commercial tree service in Jacksonville
          </Link>
          {' '}for HOAs, apartment complexes, churches, and storefronts — and{' '}
          <Link to="/residential-tree-service-jacksonville-nc" className="underline underline-offset-2" style={{ color: "#E5424F" }}>
            residential tree service
          </Link>
          {' '}for homeowners across Onslow County.
        </p>

        {/* Job photo gallery.
            Variants come from scripts/gen-images.mjs, pre-cropped to the same 4/3 box
            these render in. `widths` there must stay in sync with GALLERY_WIDTHS. */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-px" style={{ background: "#1A1A1A" }}>
          {GALLERY.map((photo) => (
            <div key={photo.base} className="relative overflow-hidden" style={{ aspectRatio: "4/3", background: "#111111" }}>
              <picture>
                <source type="image/avif" srcSet={srcSet(photo, "avif")} sizes={GALLERY_SIZES} />
                <img
                  src={`/images/${photo.base}-768.webp`}
                  srcSet={srcSet(photo, "webp")}
                  sizes={GALLERY_SIZES}
                  alt={photo.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="1024"
                  height="768"
                />
              </picture>
            </div>
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