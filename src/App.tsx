import { Outlet, useLocation } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import ReviewsPage from "./pages/ReviewsPage";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";

// Standalone service and location pages
import TreeServiceJacksonvilleNC from "./pages/TreeServiceJacksonvilleNC";
import TreeRemoval from "./pages/TreeRemoval";
import TreeTrimming from "./pages/TreeTrimming";
import StumpGrinding from "./pages/StumpGrinding";
import EmergencyTreeService from "./pages/EmergencyTreeService";
import SpiderLiftRemoval from "./pages/SpiderLiftRemoval";
import TreeServiceHubert from "./pages/TreeServiceHubert";
import TreeServiceRichlands from "./pages/TreeServiceRichlands";
import TreeServiceSwansboro from "./pages/TreeServiceSwansboro";
import TreeServiceSneadsFerry from "./pages/TreeServiceSneadsFerry";
import TreeServiceCampLejeune from "./pages/TreeServiceCampLejeune";
import StormDamageGuide from "./pages/StormDamageGuide";
import TreeRemovalCost from "./pages/TreeRemovalCost";
import TreeRemovalNearHouse from "./pages/TreeRemovalNearHouse";
import TreeRemovalPermitNC from "./pages/TreeRemovalPermitNC";
import TreeRemovalTightSpaces from "./pages/TreeRemovalTightSpaces";
import TreeTrimmingVsPruning from "./pages/TreeTrimmingVsPruning";
import LeaningTreeDangerous from "./pages/LeaningTreeDangerous";
import MeetTheOwners from "./pages/MeetTheOwners";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LandClearing from "./pages/LandClearing";
import StormCleanup from "./pages/StormCleanup";
import LocationPage from "./pages/LocationPage";

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
// to its own static HTML file.
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "about", element: <MeetTheOwners /> },
      { path: "contact", element: <ContactPage /> },
      { path: "service-area", element: <ServiceAreaPage /> },
      { path: "reviews", element: <ReviewsPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "tree-service-jacksonville-nc", element: <TreeServiceJacksonvilleNC /> },
      { path: "tree-removal-jacksonville-nc", element: <TreeRemoval /> },
      { path: "tree-trimming-jacksonville-nc", element: <TreeTrimming /> },
      { path: "stump-grinding-jacksonville-nc", element: <StumpGrinding /> },
      { path: "emergency-tree-service-jacksonville-nc", element: <EmergencyTreeService /> },
      { path: "spider-lift-tree-removal-jacksonville-nc", element: <SpiderLiftRemoval /> },
      { path: "tree-service-hubert-nc", element: <TreeServiceHubert /> },
      { path: "tree-service-richlands-nc", element: <TreeServiceRichlands /> },
      { path: "tree-service-swansboro-nc", element: <TreeServiceSwansboro /> },
      { path: "tree-service-sneads-ferry-nc", element: <TreeServiceSneadsFerry /> },
      { path: "tree-service-camp-lejeune-nc", element: <TreeServiceCampLejeune /> },
      { path: "tree-service-maysville-nc", element: <LocationPage city="Maysville" /> },
      { path: "tree-service-beulaville-nc", element: <LocationPage city="Beulaville" /> },
      { path: "tree-service-holly-ridge-nc", element: <LocationPage city="Holly Ridge" /> },
      { path: "tree-service-surf-city-nc", element: <LocationPage city="Surf City" /> },
      { path: "land-clearing-jacksonville-nc", element: <LandClearing /> },
      { path: "storm-cleanup-jacksonville-nc", element: <StormCleanup /> },
      { path: "storm-damage-trees-guide", element: <StormDamageGuide /> },
      { path: "tree-removal-cost-north-carolina", element: <TreeRemovalCost /> },
      { path: "tree-removal-near-house-jacksonville-nc", element: <TreeRemovalNearHouse /> },
      { path: "do-you-need-a-permit-to-remove-a-tree-nc", element: <TreeRemovalPermitNC /> },
      { path: "tree-removal-tight-spaces-jacksonville-nc", element: <TreeRemovalTightSpaces /> },
      { path: "tree-trimming-vs-pruning", element: <TreeTrimmingVsPruning /> },
      { path: "leaning-tree-dangerous-after-storm", element: <LeaningTreeDangerous /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
