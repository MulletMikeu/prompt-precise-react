import { useState, useRef, useEffect } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';

const serviceLinks = [
  { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
  { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
  { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
  { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
];

const specialtyEquipmentLinks = [
  { label: 'Spider Lift Tree Removal', href: '/spider-lift-tree-removal-jacksonville-nc' },
  { label: 'Tree Removal Near House', href: '/tree-removal-near-house-jacksonville-nc' },
  { label: 'Tree Removal in Tight Spaces', href: '/tree-removal-tight-spaces-jacksonville-nc' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-black shadow-2xl sticky top-14 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img 
              src={logo} 
              alt="Godhans Tree Company Logo - Professional Tree Service Jacksonville NC" 
              className="h-16 w-auto sm:h-20"
              width="80"
              height="80"
              loading="eager"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-red-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-white hover:text-red-600 font-medium transition-colors inline-flex items-center gap-1"
              >
                Services <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-950 border border-gray-800 rounded-lg shadow-xl py-2 z-50">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 text-white hover:bg-gray-900 hover:text-red-600 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="my-2 border-t border-gray-800" />
                  <div className="px-4 pt-1 pb-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Specialty Equipment
                  </div>
                  {specialtyEquipmentLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 text-white hover:bg-gray-900 hover:text-red-600 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('contact-form')}
              className="text-white hover:text-red-600 font-medium transition-colors"
            >
              Get Quote
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-white hover:text-red-600 font-medium transition-colors"
            >
              Book Now
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-red-600 font-medium transition-colors"
            >
              Reviews
            </button>
            
            <a
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              📞 {BUSINESS_INFO.phone.display}
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden bg-black border-t border-gray-800 py-4 space-y-2 animate-fadeIn">
            {/* Mobile Services Accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex w-full items-center justify-between px-4 py-3 text-white hover:bg-gray-900 hover:text-red-600 transition-colors border-b border-gray-800"
            >
              Services <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-900 hover:text-red-600 transition-colors text-sm border-b border-gray-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => scrollToSection('contact-form')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-gray-900 hover:text-red-600 transition-colors border-b border-gray-800"
            >
              Get Quote
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-gray-900 hover:text-red-600 transition-colors border-b border-gray-800"
            >
              Book Now
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-gray-900 hover:text-red-600 transition-colors border-b border-gray-800"
            >
              Reviews
            </button>
            
            <a
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              className="block mx-4 mt-4 bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-red-700 transition-colors"
            >
              📞 {BUSINESS_INFO.phone.display}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
