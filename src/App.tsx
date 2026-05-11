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
          {/* Standalone pages — have their own EmergencyBanner + Header + Footer */}
          <Route path="/tree-service-jacksonville-nc" element={<TreeServiceJacksonvilleNC />} />
          <Route path="/tree-removal-jacksonville-nc" element={<TreeRemoval />} />
          <Route path="/tree-trimming-jacksonville-nc" element={<TreeTrimming />} />
          <Route path="/stump-grinding-jacksonville-nc" element={<StumpGrinding />} />
          <Route path="/emergency-tree-service-jacksonville-nc" element={<EmergencyTreeService />} />
          <Route path="/spider-lift-tree-removal-jacksonville-nc" element={<SpiderLiftRemoval />} />
          <Route path="/tree-service-hubert-nc" element={<TreeServiceHubert />} />
          <Route path="/tree-service-richlands-nc" element={<TreeServiceRichlands />} />
          <Route path="/tree-service-swansboro-nc" element={<TreeServiceSwansboro />} />
          <Route path="/tree-service-sneads-ferry-nc" element={<TreeServiceSneadsFerry />} />
          <Route path="/tree-service-camp-lejeune-nc" element={<TreeServiceCampLejeune />} />
          <Route path="/storm-damage-trees-guide" element={<StormDamageGuide />} />
          <Route path="/tree-removal-cost-north-carolina" element={<TreeRemovalCost />} />
          <Route path="/tree-removal-near-house-jacksonville-nc" element={<TreeRemovalNearHouse />} />
          <Route path="/do-you-need-a-permit-to-remove-a-tree-nc" element={<TreeRemovalPermitNC />} />
          <Route path="/tree-removal-tight-spaces-jacksonville-nc" element={<TreeRemovalTightSpaces />} />
          <Route path="/tree-trimming-vs-pruning" element={<TreeTrimmingVsPruning />} />
          <Route path="/leaning-tree-dangerous-after-storm" element={<LeaningTreeDangerous />} />
          <Route path="/meet-the-owners" element={<MeetTheOwners />} />

          {/* Pages using shared Navbar/Footer Layout */}
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="/service-area" element={<Layout><ServiceAreaPage /></Layout>} />
          <Route path="/reviews" element={<Layout><ReviewsPage /></Layout>} />
          <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><HomePage /></Layout>} />

          {/* 404 */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
