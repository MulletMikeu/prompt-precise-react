import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import TrustSection from "../components/TrustSection";
import VideoSection from "../components/VideoSection";
import ReviewsSection from "../components/ReviewsSection";
import ServiceAreaSection from "../components/ServiceAreaSection";
import CTABanner from "../components/CTABanner";
import { BUSINESS } from "../data/siteData";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Tree Service Jacksonville NC | Godhans Tree Company</title>
        <meta
          name="description"
          content="Veteran-owned tree service in Jacksonville, NC. Expert tree removal, trimming, stump grinding & 24/7 emergency service. Licensed & insured. Free estimates — call (618) 704-4861."
        />
        <link rel="canonical" href="https://godhans.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tree Service Jacksonville NC | Godhans Tree Company" />
        <meta
          property="og:description"
          content="Veteran-owned tree service in Jacksonville, NC. Expert tree removal, trimming, stump grinding & 24/7 emergency service. Free estimates."
        />
        <meta property="og:url" content="https://godhans.com/" />
        <meta property="og:image" content="https://godhans.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image.jpg" />
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