import { BUSINESS, TRUST_STATS } from "../data/siteData";

// Insured / 24-7 Response / Free Estimates were dropped when the homepage hero
// gained the comparison table and trust-chip strip, which state all three above
// the fold. What is left is what the hero does NOT already say.
const TRUST_BLOCKS = [
  {
    label: "Veteran-Owned & Operated",
    body: `Founded by Michael Godbersen, a veteran who brought military discipline to the tree care industry. We show up. We do the work. We leave it right.`,
  },
  {
    label: "No Subcontractors",
    body: `Every crew member is part of the Godhans team. No strangers on your property, no accountability gaps, no surprises.`,
  },
  {
    label: "We Take On The Hard Jobs",
    body: `Tight access, large trees, storm damage, complex site conditions — we take on the jobs other companies turn down.`,
  },
] as const;

export default function TrustSection() {
  return (
    <section
      className="section-pad"
      style={{ background: "#111111" }}
      aria-labelledby="trust-heading"
    >
      <div className="container-brand">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20" style={{ background: "#2A2A2A" }}>
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center py-10 px-6" style={{ background: "#111111" }}>
              <p
                className="font-display font-extrabold mb-2"
                style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#E5424F", lineHeight: 1 }}
              >
                {stat.value}
              </p>
              <p
                className="font-body text-sm uppercase tracking-widest"
                style={{ color: "#888888", letterSpacing: "0.1em" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-14">
          <div>
            <p className="label-red mb-4">Why Godhans</p>
            <h2 id="trust-heading" className="text-display-xl text-white">
              Why Jacksonville
              <br />
              <span style={{ color: "#E5424F" }}>Chooses Us</span>
            </h2>
          </div>
          <div className="md:pt-12">
            <p className="font-body text-base leading-relaxed mb-6" style={{ color: "#C8C8C2" }}>
              Godhans was built on one simple idea: do the job right, leave the
              property better than you found it, and stand behind your work. After{" "}
              {BUSINESS.yearsInBusiness} years serving Onslow County, that's still
              the only rule that matters.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: "#888888" }}>
              $2M insured, every machine covered · Veteran and disabled-veteran owned ·
              Serving Jacksonville, NC and surrounding Onslow County communities
              since 2013.
            </p>
          </div>
        </div>

        {/* Trust blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#2A2A2A" }}>
          {TRUST_BLOCKS.map((block) => (
            <div key={block.label} className="p-8" style={{ background: "#111111" }}>
              <div
                className="w-8 h-0.5 mb-5"
                style={{ background: "#C41230" }}
                aria-hidden="true"
              />
              <h3
                className="font-display font-bold uppercase mb-4 text-white"
                style={{ fontSize: "1.15rem", letterSpacing: "0.03em" }}
              >
                {block.label}
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#888888" }}>
                {block.body}
              </p>
            </div>
          ))}
        </div>

        {/* Why-us band photo. 16:9 to match the generated crop exactly, so the
            width/height attributes are honest and object-cover has nothing to
            trim — no CLS regardless of when it loads. */}
        <div className="mt-px relative overflow-hidden" style={{ aspectRatio: "16/9", background: "#111111" }}>
          <picture className="absolute inset-0 block w-full h-full">
            <source
              type="image/avif"
              srcSet="/images/godhans-crew-skid-steer-jacksonville-nc-480.avif 480w, /images/godhans-crew-skid-steer-jacksonville-nc-768.avif 768w, /images/godhans-crew-skid-steer-jacksonville-nc-1024.avif 1024w, /images/godhans-crew-skid-steer-jacksonville-nc-1280.avif 1280w"
              sizes="(min-width: 1280px) 1184px, 100vw"
            />
            <img
              src="/images/godhans-crew-skid-steer-jacksonville-nc-768.webp"
              srcSet="/images/godhans-crew-skid-steer-jacksonville-nc-480.webp 480w, /images/godhans-crew-skid-steer-jacksonville-nc-768.webp 768w, /images/godhans-crew-skid-steer-jacksonville-nc-1024.webp 1024w, /images/godhans-crew-skid-steer-jacksonville-nc-1280.webp 1280w"
              sizes="(min-width: 1280px) 1184px, 100vw"
              alt="Godhans crew running a skid steer and spider lift during a tree removal in Jacksonville, NC"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width="1280"
              height="720"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}