import { Head as Helmet } from 'vite-react-ssg';
import { BUSINESS } from "../data/siteData";
import HomeHero from "../components/HomeHero";
import TrustBanner from "../components/TrustBanner";
import ServicesSection from "../components/ServicesSection";
import TrustSection from "../components/TrustSection";
import ReviewsSection from "../components/ReviewsSection";
import ServiceAreaSection from "../components/ServiceAreaSection";
import CTABanner from "../components/CTABanner";

/**
 * Homepage, rebuilt in Ship L (2026-11-21): photo hero + two-step estimate form
 * + trust banner.
 *
 * Pricing and the FAQ were taken OFF this page on the owner's ruling. The
 * comparison table (HeroCompare), the price paragraph (homepageCopy.ts), the
 * cost-breakdown link, the financing band and the two-question FAQ with its
 * FAQPage JSON-LD are no longer rendered here. Pricing lives on
 * /tree-removal-cost-north-carolina and the service pages; FAQ answers live on
 * the service pages. HeroCompare.tsx and homepageCopy.ts are left in the repo —
 * PROSE is still read by /contact, /services, /residential-… and /terms.
 *
 * TITLE is unchanged from Ship I: the exact-match head term in front, then the
 * one claim no competitor here can copy. DESC dropped its price floor; every
 * figure in it is interpolated from BUSINESS, never typed.
 */
const TITLE = "Tree Service Jacksonville NC | Veteran-Owned | Godhans";
const DESC = `Veteran-owned tree service in Jacksonville, NC. ${BUSINESS.jobsCompleted} jobs in ${BUSINESS.county} since ${BUSINESS.founded}, ${BUSINESS.reviewRating}★ on ${BUSINESS.reviewCount} Google reviews. Open ${BUSINESS.hoursShort} — free estimates.`;

/** One string, so SSR emits one text node (no <!-- --> splits) — no prices. */
const INTRO = `Godhans Tree Company is a veteran-owned tree service in Jacksonville, NC. Since ${BUSINESS.founded} we've completed ${BUSINESS.jobsCompleted} jobs across ${BUSINESS.county} — removals, trimming, stump grinding and 24/7 storm work — with our own crew and a 90-ft spider lift for the trees others can't reach.`;

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href="https://godhans.com/" />
        {/* Preloads for this page (the hero AVIF srcset and Barlow Condensed
            800 for the H1) are deliberately NOT declared here: helmet does not
            dedupe rel="preload" and vite-react-ssg renders each page twice, so
            a preload in this Helmet ships twice. They are added once, by the
            onPageRendered hook in vite.config.ts. */}
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content="https://godhans.com/" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Helmet>

      <main id="main-content">
        <HomeHero />
        <TrustBanner />
        <section className="home-intro" aria-label="About Godhans Tree Company">
          <div className="container-brand">
            <p className="home-intro-text">{INTRO}</p>
          </div>
        </section>
        <ServicesSection />
        <ReviewsSection />
        <ServiceAreaSection />
        <TrustSection />
        <CTABanner />
      </main>
    </>
  );
}
