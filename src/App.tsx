import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

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
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<HomePage />} />
            <Route path="/services/:slug" element={<HomePage />} />
            <Route path="/locations/:slug" element={<HomePage />} />
            <Route path="/about" element={<HomePage />} />
            <Route path="/contact" element={<HomePage />} />
            <Route path="/service-area" element={<HomePage />} />
            <Route path="/reviews" element={<HomePage />} />
            <Route path="/blog" element={<HomePage />} />
            <Route path="/privacy-policy" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}