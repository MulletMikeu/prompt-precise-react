import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS, BUSINESS } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #2A2A2A" : "1px solid transparent",
      }}
    >
      <div style={{ background: "#C41230" }} className="hidden md:block text-white text-center py-1.5">
        <p className="text-sm tracking-wide">
          24/7 Emergency Service Available —{" "}
          <a href={BUSINESS.phoneHref} className="font-bold underline underline-offset-2">{BUSINESS.phone}</a>
        </p>
      </div>

      <nav className="container-brand" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Godhans Tree Company">
            <div
              className="w-9 h-9 flex items-center justify-center text-white text-lg font-bold"
              style={{ background: "#C41230" }}
            >
              G
            </div>
            <div className="leading-none">
              <span className="block font-bold text-white uppercase" style={{ fontSize: "1.25rem" }}>
                Godhans
              </span>
              <span className="block text-xs tracking-widest uppercase" style={{ color: "#888888" }}>
                Tree Company
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-6 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm font-semibold tracking-wide uppercase transition-colors"
                  style={{ color: pathname === link.href ? "#E5424F" : "#E8E8E2" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a href={BUSINESS.phoneHref} className="text-sm font-bold uppercase tracking-wider text-white">{BUSINESS.phone}</a>
            <Link to="/contact" className="btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}>
              Free Estimate
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }} />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </nav>

      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "100vh" : "0",
          // visibility:hidden removes the collapsed menu's links from the tab
          // order and a11y tree; as a stepped property under transition-all it
          // applies instantly on open and defers until close finishes.
          visibility: open ? "visible" : "hidden",
          background: "#0A0A0A",
          borderTop: open ? "1px solid #2A2A2A" : "none",
        }}
      >
        <div className="container-brand py-6">
          <ul className="list-none m-0 p-0 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block font-bold uppercase py-3 border-b transition-colors"
                  style={{
                    fontSize: "1.1rem",
                    letterSpacing: "0.06em",
                    color: pathname === link.href ? "#E5424F" : "#F5F5F0",
                    borderColor: "#1A1A1A",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a href={BUSINESS.phoneHref} className="btn-primary justify-center">Call {BUSINESS.phone}</a>
            <Link to="/contact" className="btn-outline justify-center">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}