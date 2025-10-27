import { useState } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-black shadow-2xl sticky top-14 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 text-red-600 hover:text-red-500 transition-colors">
            <span className="text-4xl">🌲</span>
            <div>
              <div className="text-xl sm:text-2xl font-bold">
                {BUSINESS_INFO.name}
              </div>
              <div className="text-xs text-gray-400">
                {BUSINESS_INFO.location.city}, {BUSINESS_INFO.location.state}
              </div>
            </div>
          </a>

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
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-red-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose')}
              className="text-white hover:text-red-600 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('service-area')}
              className="text-white hover:text-red-600 font-medium transition-colors"
            >
              Service Area
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
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-gray-900 hover:text-red-600 transition-colors border-b border-gray-800"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-gray-900 hover:text-red-600 transition-colors border-b border-gray-800"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('service-area')}
              className="block w-full text-left px-4 py-3 text-white hover:bg-gray-900 hover:text-red-600 transition-colors border-b border-gray-800"
            >
              Service Area
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
