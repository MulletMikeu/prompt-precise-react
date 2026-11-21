import { BUSINESS } from "../data/siteData";

// Insured / 24-7 Response / Free Estimates are not repeated here: the trust
// banner under the hero states them above the fold. What is left is what the
// hero does NOT already say.
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

        {/* Ship L: the stats row that used to open this section is gone — the
            same four facts now sit in <TrustBanner/> directly under the hero.
            So is the why-us band photo at the bottom: it was the same job
            photo the hero now leads with. */}

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-14">
          <div>
            <p className="label-red mb-4">Why Godhans</p>
            <h2 id="trust-heading" className="text-display-xl text-white">
              Why Jacksonville
              <br />
              <span style={{ color: "var(--red-text)" }}>Chooses Us</span>
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
              since {BUSINESS.founded}.
            </p>
          </div>
        </div>

        {/* Trust blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#2A2A2A" }}>
          {TRUST_BLOCKS.map((block) => (
            <div key={block.label} className="p-8" style={{ background: "#111111" }}>
              <div
                className="w-8 h-0.5 mb-5"
                style={{ background: "var(--red)" }}
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

      </div>
    </section>
  );
}