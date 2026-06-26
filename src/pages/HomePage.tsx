import { Head as Helmet } from 'vite-react-ssg';
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import TrustSection from "../components/TrustSection";
import VideoSection from "../components/VideoSection";
import ReviewsSection from "../components/ReviewsSection";
import ServiceAreaSection from "../components/ServiceAreaSection";
import CTABanner from "../components/CTABanner";

const TITLE = "Tree Service Jacksonville NC | Godhans Tree Company";
const DESC = "Veteran-owned tree service in Jacksonville, NC. Tree removal, trimming, stump grinding & 24/7 emergency service. Licensed & insured. Free estimates.";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href="https://godhans.com/" />
        {/* Preload the LCP hero image (AVIF) so it is discovered before the JS/CSS parse */}
        <link
          rel="preload"
          as="image"
          type="image/avif"
          href="/images/hero-godhans-tree-removal-jacksonville-nc-1280.avif"
          imageSrcSet="/images/hero-godhans-tree-removal-jacksonville-nc-768.avif 768w, /images/hero-godhans-tree-removal-jacksonville-nc-1280.avif 1280w, /images/hero-godhans-tree-removal-jacksonville-nc-1920.avif 1920w"
          imageSizes="100vw"
          fetchPriority="high"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content="https://godhans.com/" />
        <meta property="og:image" content="https://godhans.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image.jpg" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Helmet>

      <main id="main-content">
        <Hero />
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
