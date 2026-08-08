import { Head as Helmet } from 'vite-react-ssg';
import HeroCompare from "../components/HeroCompare";
import { PROSE } from "../data/homepageCopy";
import ServicesSection from "../components/ServicesSection";
import TrustSection from "../components/TrustSection";
import VideoSection from "../components/VideoSection";
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
            element is the display H2. The face that renders it (Barlow Condensed
            800) is preloaded in index.html and now carries the LCP directly. */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content="https://godhans.com/" />
        <meta property="og:image" content="https://godhans.com/og-image-v2.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image-v2.jpg" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
        <script type="application/ld+json">{JSON.stringify(FAQ_SCHEMA)}</script>
      </Helmet>

      <main id="main-content">
        <HeroCompare />
        <ServicesSection />
        <TrustSection />
        <VideoSection />
        <ReviewsSection />
        <ServiceAreaSection />
        <CTABanner />
      </main>
    </>
  );
}
