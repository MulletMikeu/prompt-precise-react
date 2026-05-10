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
      {/* Top bar */}
      <div style={{ background: "#C41230" }} className="hidden md:block text-white text-center py-1.5">
        <p className="text-sm font-body font-600 tracking-wide">
          24/7 Emergency Service Available —{" "}
          <a href={BUSINESS.phoneHref} className="font-bold underline underline-offset-2">
            {BUSINESS.phone}
          </a>
        </p>
      </div>

      {/* Main nav */}
      <nav className="container-brand" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0" aria-label="Godhans Tree Company — Home">
            <div
              className="w-9 h-9 flex items-center justify-center font-display font-800 text-white text-lg"
              style={{ background: "#C41230" }}
              aria-hidden="true"
            >
              G
            </div>
            <div className="leading-none">
              <span className="block font-display font-800 text-white uppercase tracking-tight" style={{ fontSize: "1.25rem" }}>
                Godhans
              </span>
              <span className="block text-xs font-body tracking-widest uppercase" style={{ color: "#888888" }}>
                Tree Company
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="font-body text-sm font-600 tracking-wide uppercase transition-colors"
                  style={{
                    color: pathname === link.href ? "#C41230" : "#E8E8E2",
                    letterSpacing: "0.08em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C41230")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = pathname === link.href ? "#C41230" : "#E8E8E2")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="font-display font-700 text-sm uppercase tracking-wider text-white transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C41230")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              {BUSINESS.phone}
            </a>
            <Link to="/contact" className="btn-primary text-sm" style={{ padding: "0.6rem 1.25rem" }}>
              Free Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="block w-6 h-0.5 bg-white transition-all duration-300" style={{ transform: open ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300" style={{ opacity: open ? 0 : 1 }} />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300" style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "100vh" : "0",
          background: "#0A0A0A",
          borderTop: open ? "1px solid #2A2A2A" : "none",
        }}
        aria-hidden={!open}
      >
        <nav className="container-brand py-6" aria-label="Mobile navigation">
          <ul className="list-none m-0 p-0 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block font-display font-700 uppercase py-3 border-b transition-colors"
                  style={{
                    fontSize: "1.1rem",
                    letterSpacing: "0.06em",
                    color: pathname === link.href ? "#C41230" : "#F5F5F0",
                    borderColor: "#1A1A1A",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a href={BUSINESS.phoneHref} className="btn-primary justify-center text-base">
              Call {BUSINESS.phone}
            </a>
            <Link to="/contact" className="btn-outline justify-center text-base">
              Get Free Estimate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}