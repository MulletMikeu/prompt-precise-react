import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import ReviewsPage from "./pages/ReviewsPage";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";

// Standalone pages — each renders its own Header/Footer via ServicePage template
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

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0A0A0A" }}>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnimateOnScroll />
        <Routes>
          {/* All routes use the shared Layout (new Navbar + Footer) */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="/service-area" element={<Layout><ServiceAreaPage /></Layout>} />
          <Route path="/reviews" element={<Layout><ReviewsPage /></Layout>} />
          <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><HomePage /></Layout>} />
          <Route path="/meet-the-owners" element={<Layout><MeetTheOwners /></Layout>} />
          <Route path="/tree-service-jacksonville-nc" element={<Layout><TreeServiceJacksonvilleNC /></Layout>} />
          <Route path="/tree-removal-jacksonville-nc" element={<Layout><TreeRemoval /></Layout>} />
          <Route path="/tree-trimming-jacksonville-nc" element={<Layout><TreeTrimming /></Layout>} />
          <Route path="/stump-grinding-jacksonville-nc" element={<Layout><StumpGrinding /></Layout>} />
          <Route path="/emergency-tree-service-jacksonville-nc" element={<Layout><EmergencyTreeService /></Layout>} />
          <Route path="/spider-lift-tree-removal-jacksonville-nc" element={<Layout><SpiderLiftRemoval /></Layout>} />
          <Route path="/tree-service-hubert-nc" element={<Layout><TreeServiceHubert /></Layout>} />
          <Route path="/tree-service-richlands-nc" element={<Layout><TreeServiceRichlands /></Layout>} />
          <Route path="/tree-service-swansboro-nc" element={<Layout><TreeServiceSwansboro /></Layout>} />
          <Route path="/tree-service-sneads-ferry-nc" element={<Layout><TreeServiceSneadsFerry /></Layout>} />
          <Route path="/tree-service-camp-lejeune-nc" element={<Layout><TreeServiceCampLejeune /></Layout>} />
          <Route path="/tree-service-maysville-nc" element={<Layout><LocationPage city="Maysville" /></Layout>} />
          <Route path="/tree-service-beulaville-nc" element={<Layout><LocationPage city="Beulaville" /></Layout>} />
          <Route path="/tree-service-holly-ridge-nc" element={<Layout><LocationPage city="Holly Ridge" /></Layout>} />
          <Route path="/tree-service-surf-city-nc" element={<Layout><LocationPage city="Surf City" /></Layout>} />
          <Route path="/storm-damage-trees-guide" element={<Layout><StormDamageGuide /></Layout>} />
          <Route path="/tree-removal-cost-north-carolina" element={<Layout><TreeRemovalCost /></Layout>} />
          <Route path="/tree-removal-near-house-jacksonville-nc" element={<Layout><TreeRemovalNearHouse /></Layout>} />
          <Route path="/do-you-need-a-permit-to-remove-a-tree-nc" element={<Layout><TreeRemovalPermitNC /></Layout>} />
          <Route path="/tree-removal-tight-spaces-jacksonville-nc" element={<Layout><TreeRemovalTightSpaces /></Layout>} />
          <Route path="/tree-trimming-vs-pruning" element={<Layout><TreeTrimmingVsPruning /></Layout>} />
          <Route path="/leaning-tree-dangerous-after-storm" element={<Layout><LeaningTreeDangerous /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
