import { Link } from "react-router-dom";
import { BUSINESS, PRICING, TRUST_STATS } from "../data/siteData";
import { PROSE } from "../data/homepageCopy";

/**
 * Homepage hero.
 *
 * Deliberately has no background photo and no entrance animation. The previous
 * hero's content shipped in the prerendered HTML but carried inline opacity:0
 * behind a fade utility, so none of it could paint until the CSS arrived and an
 * animation delay elapsed — an element at opacity 0 is not an LCP candidate at
 * all. Everything here paints with first paint. Any motion added later must be
 * transform-only on already-visible elements.
 *
 * Dropping the photo also makes the LCP element a text node (the display H2)
 * rather than a 1280px AVIF, which is why the image preload is gone from
 * HomePage.tsx and the font preload in index.html now carries the LCP.
 */

const COMPARISON = [
  {
    label: "Pricing",
    us: (
      <>
        Straight pricing — {PRICING.removal.minimum} minimum, most removals run{" "}
        {PRICING.removal.most}, written quote before work starts.{" "}
        <Link to="/tree-removal-cost-north-carolina" className="underline underline-offset-2" style={{ color: "#E5424F" }}>
          See the full 2026 cost breakdown
        </Link>
        .
      </>
    ),
    them: "Quote depends on who answers the phone",
  },
  {
    label: "Insurance",
    us: "NC doesn't license tree contractors — we hand you our insurance certificate instead: $2M, every machine individually covered",
    them: 'Claims "licensed" with nothing to show',
  },
  {
    label: "Response",
    us: "A real person answers 24/7 — same-day response for hazardous trees",
    them: "Voicemail until Monday",
  },
];

const chips = [
  "Fully Insured",
  "Free Estimates",
  `${BUSINESS.reviewRating}★ Google`,
  `${BUSINESS.reviewCount} Reviews`,
  ...TRUST_STATS.filter((s) => s.label === "Jobs Completed").map((s) => `${s.value} Jobs`),
  `${BUSINESS.yearsInBusiness}+ Years`,
];

export default function HeroCompare() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0A0A0A", paddingTop: "7rem" }} aria-labelledby="hero-heading">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "#C41230" }} aria-hidden="true" />

      <div className="container-brand pb-16 md:pb-24">
        <div className="max-w-4xl">
          {/* H1 carries the keyword+geo but is styled as the small kicker; the H2
              below gets the display treatment. Heading order stays h1 -> h2. */}
          <h1 id="hero-heading" className="label-red mb-4">
            Tree Service Jacksonville, NC
          </h1>
          <h2 className="text-display-2xl text-white mb-8">What Every Client Should Know.</h2>
        </div>

        {/* Comparison table. A real <table> at every width — below `sm` the CSS in
            index.css restacks each row into a block with its row header visible,
            which keeps the semantics identical for assistive tech and crawlers
            instead of swapping in a divs-and-roles copy. */}
        <div className="compare-wrap">
          <table className="compare">
            <caption>
              How Godhans compares to the typical tree company
            </caption>
            <thead>
              <tr>
                <td />
                <th scope="col">Godhans</th>
                <th scope="col">The typical tree company</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td className="compare-us">
                    <span className="tick" aria-hidden="true" />
                    {row.us}
                  </td>
                  <td className="compare-them">{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Prose restatement. Same claims as the table, as complete standalone
            sentences — this is what the FAQPage JSON-LD quotes. */}
        <div className="max-w-3xl mt-12">
          <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
            {PROSE.pricing} {PROSE.license} {PROSE.response} {PROSE.financing}
          </p>
        </div>

        {/* Trust chips */}
        <ul className="flex flex-wrap gap-3 mt-10 list-none p-0">
          {chips.map((chip) => (
            <li key={chip} className="chip">
              {chip}
            </li>
          ))}
        </ul>

        {/* Financing. Deliberately states no down payment, approval speed or
            payoff period — "flexible terms" and "ask us" is the whole promise. */}
        <div className="financing-band mt-12">
          <h2 className="mb-3">Get it done now. Pay over time.</h2>
          <p className="font-body mb-6">
            In-house financing with flexible terms — we work with every customer's budget. Ask us.
          </p>
          <Link to="/contact#financing" className="btn-on-red">
            How financing works
          </Link>
        </div>

        {/* CTAs. The thumbnail is 64px with explicit dimensions and a fixed-size
            box, so it reserves its space immediately and cannot shift the row —
            and it sits inline with the buttons rather than above them, so the
            CTAs do not move down. 8 KiB at 2x, lazy. */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-10">
          <picture className="hidden sm:block flex-shrink-0">
            <source
              type="image/avif"
              srcSet="/images/michael-godbersen-thumb-jacksonville-nc-160.avif 160w, /images/michael-godbersen-thumb-jacksonville-nc-320.avif 320w"
              sizes="64px"
            />
            <img
              src="/images/michael-godbersen-thumb-jacksonville-nc-160.webp"
              srcSet="/images/michael-godbersen-thumb-jacksonville-nc-160.webp 160w, /images/michael-godbersen-thumb-jacksonville-nc-320.webp 320w"
              sizes="64px"
              width={64}
              height={64}
              alt="Michael Godbersen of Godhans Tree Company"
              loading="lazy"
              decoding="async"
              className="rounded-full object-cover"
              style={{ width: "64px", height: "64px", border: "2px solid #C41230" }}
            />
          </picture>
          <Link to="/contact" className="btn-primary btn-hero">
            Schedule with Mike Today
          </Link>
          <a href={BUSINESS.phoneHref} className="btn-outline text-base sm:text-lg">
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
