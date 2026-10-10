import { Outlet, useLocation } from "react-router-dom";
import { Head as Helmet, type RouteRecord } from "vite-react-ssg";
import type { ComponentType } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BusinessSchema from "./components/BusinessSchema";
import { initAnalytics, trackPageView } from "./lib/analytics";
// NOTE: HomePage is lazy like every other route — see the note on the "/" index
// route below for why the eager import it used to have was a net loss.

// Lazy route helper: dynamically import a page's default export and expose it
// as a react-router `Component`. This code-splits every route into its own
// chunk so each page (and each prerendered HTML) only ships its own JS instead
// of one monolithic bundle containing all ~30 pages.
const page =
  (loader: () => Promise<{ default: ComponentType }>): RouteRecord["lazy"] =>
  async () => ({ Component: (await loader()).default });

// Location pages share one component parameterised by city, so they need the
// prop bound at route-resolution time rather than a bare default export.
const locationPage =
  (city: string): RouteRecord["lazy"] =>
  async () => {
    const { default: LocationPage } = await import("./pages/LocationPage");
    return { Component: () => <LocationPage city={city} /> };
  };

/**
 * Analytics. No-ops entirely unless VITE_GA_MEASUREMENT_ID is set at build
 * time — see src/lib/analytics.ts for why the script itself is deferred past
 * `load` + idle.
 *
 * initAnalytics() is idempotent and runs once; trackPageView fires for the
 * first route AND every client-side navigation, because a prerendered SPA does
 * not reload the document between pages. Both queue on window.dataLayer, so
 * events recorded before gtag.js finishes loading are replayed, not dropped.
 */
function Analytics() {
  const { pathname } = useLocation();
  useEffect(() => {
    initAnalytics();
  }, []);
  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);
  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

// Keyed to `pathname`, NOT dependency-free. Without a dependency array this
// effect re-ran after *every* render of RootLayout — including the one Navbar
// triggers on each scroll — tearing down the observer, re-running
// querySelectorAll, and re-observing every target. Each observe() makes the
// browser compute intersection geometry, which is what showed up as "Forced
// reflow" during load. Re-scanning once per navigation is all this needs,
// since new targets can only appear when a route swaps in.
function AnimateOnScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const targets = document.querySelectorAll(".animate-on-scroll");
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}

/**
 * Site-wide crawl directives, emitted once here instead of statically in
 * index.html. A page that needs different rules (NotFound: "noindex, follow")
 * puts its own `robots` meta in its Helmet; helmet dedupes by `name` and the
 * deeper, later-mounted page instance wins — so the page REPLACES this default
 * rather than adding a second contradictory tag beside it.
 *
 * Previously index.html hardcoded "index, follow, max-image-preview:large, …"
 * and eleven pages re-emitted a weaker "index, follow" on top of it, while /404
 * ended up shipping both "index, follow" and "noindex, follow".
 */
function DefaultRobots() {
  return (
    <Helmet>
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
    </Helmet>
  );
}

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0A0A0A" }}>
      <DefaultRobots />
      <BusinessSchema />
      <Analytics />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-bold focus:rounded focus:shadow-lg"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <AnimateOnScroll />
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

// All routes share RootLayout (Navbar + Footer). Paths are relative to the
// root "/" route. vite-react-ssg crawls this array to pre-render each path
// to its own static HTML file; each route is lazily imported so its JS lands
// in a separate chunk loaded only for that page.
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // The homepage was the one eager route, on the reasoning that it is
      // LCP-critical and lazy-loading it would cost the prerendered paint. It
      // does not: vite-react-ssg resolves a route's `lazy` before it renders,
      // so "/" is prerendered byte-for-byte the same either way, and the paint
      // comes from that HTML plus the CSS — not from the chunk. Hydration is
      // what waits for the chunk, and hydration is not LCP.
      //
      // What the eager import DID do was put HomePage and all six of its
      // sections (HeroCompare, ServicesSection, TrustSection, ReviewsSection,
      // ServiceAreaSection, CTABanner, plus homepageCopy) inside the entry
      // chunk that EVERY page loads — about 25 KB raw of code that 37 of the 38
      // routes parse and never render, on a site whose remaining score gap is
      // all FCP and LCP and whose fonts are competing for the same mobile
      // bandwidth. Measured both ways before changing it; see the commit.
      { index: true, lazy: page(() => import("./pages/HomePage")) },
      { path: "services", lazy: page(() => import("./pages/ServicesPage")) },
      { path: "about", lazy: page(() => import("./pages/MeetTheOwners")) },
      { path: "contact", lazy: page(() => import("./pages/ContactPage")) },
      { path: "service-area", lazy: page(() => import("./pages/ServiceAreaPage")) },
      { path: "reviews", lazy: page(() => import("./pages/ReviewsPage")) },
      { path: "blog", lazy: page(() => import("./pages/BlogPage")) },
      { path: "privacy-policy", lazy: page(() => import("./pages/PrivacyPolicy")) },
      { path: "terms-of-service", lazy: page(() => import("./pages/TermsOfService")) },
      { path: "tree-service-jacksonville-nc", lazy: page(() => import("./pages/TreeServiceJacksonvilleNC")) },
      { path: "tree-removal-jacksonville-nc", lazy: page(() => import("./pages/TreeRemoval")) },
      { path: "tree-trimming-jacksonville-nc", lazy: page(() => import("./pages/TreeTrimming")) },
      { path: "stump-grinding-jacksonville-nc", lazy: page(() => import("./pages/StumpGrinding")) },
      { path: "emergency-tree-service-jacksonville-nc", lazy: page(() => import("./pages/EmergencyTreeService")) },
      { path: "spider-lift-tree-removal-jacksonville-nc", lazy: page(() => import("./pages/SpiderLiftRemoval")) },
      { path: "commercial-tree-service-jacksonville-nc", lazy: page(() => import("./pages/CommercialTreeService")) },
      { path: "residential-tree-service-jacksonville-nc", lazy: page(() => import("./pages/ResidentialTreeService")) },
      { path: "tree-service-hubert-nc", lazy: page(() => import("./pages/TreeServiceHubert")) },
      { path: "tree-service-richlands-nc", lazy: page(() => import("./pages/TreeServiceRichlands")) },
      { path: "tree-service-swansboro-nc", lazy: page(() => import("./pages/TreeServiceSwansboro")) },
      { path: "tree-service-sneads-ferry-nc", lazy: page(() => import("./pages/TreeServiceSneadsFerry")) },
      { path: "tree-service-camp-lejeune-nc", lazy: page(() => import("./pages/TreeServiceCampLejeune")) },
      { path: "tree-service-maysville-nc", lazy: locationPage("Maysville") },
      { path: "tree-service-beulaville-nc", lazy: locationPage("Beulaville") },
      { path: "tree-service-holly-ridge-nc", lazy: locationPage("Holly Ridge") },
      { path: "tree-service-surf-city-nc", lazy: locationPage("Surf City") },
      { path: "storm-cleanup-jacksonville-nc", lazy: page(() => import("./pages/StormCleanup")) },
      { path: "storm-damage-trees-guide", lazy: page(() => import("./pages/StormDamageGuide")) },
      { path: "tree-removal-cost-north-carolina", lazy: page(() => import("./pages/TreeRemovalCost")) },
      { path: "tree-removal-near-house-jacksonville-nc", lazy: page(() => import("./pages/TreeRemovalNearHouse")) },
      { path: "do-you-need-a-permit-to-remove-a-tree-nc", lazy: page(() => import("./pages/TreeRemovalPermitNC")) },
      { path: "leaning-tree-dangerous-after-storm", lazy: page(() => import("./pages/LeaningTreeDangerous")) },
      { path: "neighbor-tree-problems-jacksonville-nc", lazy: page(() => import("./pages/NeighborTreeProblems")) },
      { path: "resistograph-tree-testing-jacksonville-nc", lazy: page(() => import("./pages/ResistographTesting")) },
      { path: "tree-cabling-bracing-jacksonville-nc", lazy: page(() => import("./pages/TreeCablingBracing")) },
      { path: "debris-hauling-jacksonville-nc", lazy: page(() => import("./pages/DebrisHauling")) },
      { path: "*", lazy: page(() => import("./pages/NotFound")) },
    ],
  },
];

export default routes;
