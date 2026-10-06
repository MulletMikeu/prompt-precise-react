import { Head as Helmet } from 'vite-react-ssg';
import HeroCompare from "../components/HeroCompare";
import { PROSE } from "../data/homepageCopy";
import ServicesSection from "../components/ServicesSection";
import TrustSection from "../components/TrustSection";
import ReviewsSection from "../components/ReviewsSection";
import ServiceAreaSection from "../components/ServiceAreaSection";
import CTABanner from "../components/CTABanner";

const TITLE = "Tree Service Jacksonville NC | Godhans Tree Company";
const DESC = "Veteran-owned tree service in Jacksonville, NC. Tree removal, trimming, stump grinding & 24/7 emergency service. Fully insured. Free estimates.";

/**
 * Answers are verbatim sentences from PROSE (src/data/homepageCopy.ts), rendered on
 * the page — structured data must not assert anything a visitor cannot read.
 *
 * The cost question is deliberately absent even though the figures appear in the
 * hero paragraph and the comparison table: /tree-removal-cost-north-carolina already
 * carries it as an FAQPage entry, and duplicating an FAQ across pages risks both
 * losing the rich result. The cost guide owns the structured version.
 */
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does North Carolina license tree contractors?",
      acceptedAnswer: { "@type": "Answer", text: PROSE.license },
    },
    {
      "@type": "Question",
      name: "Does Godhans offer financing?",
      acceptedAnswer: { "@type": "Answer", text: PROSE.financing },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href="https://godhans.com/" />
        {/* No image preload: the hero no longer has a background photo, so the LCP
            element is the display H2. The face that renders it, Barlow Condensed
            800, now carries the LCP directly — and it IS preloaded for this
            page, but not from here and not from index.html.

            index.html is shared by all 38 prerendered pages, so the preload tag
            it used to carry fetched that file at highest priority on every one
            of them. An audit of the computed (font-family, font-weight) pair on
            every text node of every route found weight 800 used on exactly two:
            this page's hero, and one decorative aria-hidden quote mark on
            /reviews. On the other 36 it was a 22 KB high-priority download of a
            face nothing on the page renders, competing for mobile bandwidth
            with the stylesheet and with Condensed 700 — the face those pages'
            H1 actually needs.

            It is deliberately NOT a tag in THIS Helmet, which is the obvious
            place and is wrong: react-helmet-async dedupes
            `link rel="canonical"` but not `link rel="preload"`, and
            vite-react-ssg renders each page twice against a single provider, so
            a preload declared here lands in the emitted HTML TWICE. That was
            measured here, not assumed. It lives in ROUTE_FONT_PRELOADS in
            vite.config.ts instead, applied by the same onPageRendered hook that
            hoists `meta charset`.

            /reviews deliberately gets none: a below-the-fold decorative glyph
            is precisely what the metric-matched fallback faces in src/index.css
            exist to cover, and its swap cannot move the LCP. */}
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content="https://godhans.com/" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      <main id="main-content">
        <HeroCompare />
        <ServicesSection />
        <TrustSection />
        <ReviewsSection />
        <ServiceAreaSection />
        <CTABanner />
      </main>
    </>
  );
}
