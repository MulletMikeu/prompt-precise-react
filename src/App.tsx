import { Outlet, useLocation } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import type { ComponentType } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function AnimateOnScroll() {
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
  });
  return null;
}

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0A0A0A" }}>
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
      { index: true, lazy: page(() => import("./pages/HomePage")) },
      { path: "services", lazy: page(() => import("./pages/ServicesPage")) },
      { path: "about", lazy: page(() => import("./pages/MeetTheOwners")) },
      { path: "contact", lazy: page(() => import("./pages/ContactPage")) },
      { path: "service-area", lazy: page(() => import("./pages/ServiceAreaPage")) },
      { path: "reviews", lazy: page(() => import("./pages/ReviewsPage")) },
      { path: "blog", lazy: page(() => import("./pages/BlogPage")) },
      { path: "privacy-policy", lazy: page(() => import("./pages/PrivacyPolicy")) },
      { path: "tree-service-jacksonville-nc", lazy: page(() => import("./pages/TreeServiceJacksonvilleNC")) },
      { path: "tree-removal-jacksonville-nc", lazy: page(() => import("./pages/TreeRemoval")) },
      { path: "tree-trimming-jacksonville-nc", lazy: page(() => import("./pages/TreeTrimming")) },
      { path: "stump-grinding-jacksonville-nc", lazy: page(() => import("./pages/StumpGrinding")) },
      { path: "emergency-tree-service-jacksonville-nc", lazy: page(() => import("./pages/EmergencyTreeService")) },
      { path: "spider-lift-tree-removal-jacksonville-nc", lazy: page(() => import("./pages/SpiderLiftRemoval")) },
      { path: "tree-service-hubert-nc", lazy: page(() => import("./pages/TreeServiceHubert")) },
      { path: "tree-service-richlands-nc", lazy: page(() => import("./pages/TreeServiceRichlands")) },
      { path: "tree-service-swansboro-nc", lazy: page(() => import("./pages/TreeServiceSwansboro")) },
      { path: "tree-service-sneads-ferry-nc", lazy: page(() => import("./pages/TreeServiceSneadsFerry")) },
      { path: "tree-service-camp-lejeune-nc", lazy: page(() => import("./pages/TreeServiceCampLejeune")) },
      { path: "tree-service-maysville-nc", lazy: locationPage("Maysville") },
      { path: "tree-service-beulaville-nc", lazy: locationPage("Beulaville") },
      { path: "tree-service-holly-ridge-nc", lazy: locationPage("Holly Ridge") },
      { path: "tree-service-surf-city-nc", lazy: locationPage("Surf City") },
      { path: "land-clearing-jacksonville-nc", lazy: page(() => import("./pages/LandClearing")) },
      { path: "storm-cleanup-jacksonville-nc", lazy: page(() => import("./pages/StormCleanup")) },
      { path: "storm-damage-trees-guide", lazy: page(() => import("./pages/StormDamageGuide")) },
      { path: "tree-removal-cost-north-carolina", lazy: page(() => import("./pages/TreeRemovalCost")) },
      { path: "tree-removal-near-house-jacksonville-nc", lazy: page(() => import("./pages/TreeRemovalNearHouse")) },
      { path: "do-you-need-a-permit-to-remove-a-tree-nc", lazy: page(() => import("./pages/TreeRemovalPermitNC")) },
      { path: "tree-removal-tight-spaces-jacksonville-nc", lazy: page(() => import("./pages/TreeRemovalTightSpaces")) },
      { path: "tree-trimming-vs-pruning", lazy: page(() => import("./pages/TreeTrimmingVsPruning")) },
      { path: "leaning-tree-dangerous-after-storm", lazy: page(() => import("./pages/LeaningTreeDangerous")) },
      { path: "*", lazy: page(() => import("./pages/NotFound")) },
    ],
  },
];

export default routes;
