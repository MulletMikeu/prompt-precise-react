import { BUSINESS, STORM_LEAD } from '@/data/siteData';

/**
 * The storm / insurance lead block, above the fold on
 * /emergency-tree-service-jacksonville-nc and /storm-cleanup-jacksonville-nc.
 *
 * The body copy lives in STORM_LEAD (siteData) rather than here, because it is
 * approved wording that must be byte-identical on both pages. Do not edit it in
 * this file, and do not strengthen it anywhere: "we bill your insurance and work
 * your claim" is a description of what we do, not a promise about the outcome.
 * Never "you pay nothing", "we waive your deductible", or "guaranteed covered".
 *
 * One <p>, not interpolated JSX text: React SSR splits interpolated text into
 * separate nodes and injects <!-- --> between them, which would break an exact
 * phrase match for anyone (an adjuster, a carrier reviewer) checking that the
 * page says what we told them it says.
 */
export default function StormInsuranceLead() {
  return (
    <section
      className="bg-brand-red py-8 sm:py-10"
      aria-labelledby="storm-lead-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 id="storm-lead-heading" className="sr-only">
          Tree on your house — what we do first
        </h2>
        <p className="text-white text-lg sm:text-xl leading-relaxed font-semibold">
          {STORM_LEAD.body}
        </p>
        <a
          href={BUSINESS.phoneHref}
          className="mt-6 inline-flex items-center gap-2 bg-white text-brand-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          <span aria-hidden="true">📞</span>
          {STORM_LEAD.ctaLabel}
        </a>
      </div>
    </section>
  );
}
