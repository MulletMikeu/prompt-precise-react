import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '@/lib/constants';

export function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleScrollOrNavigate = (sectionId: string) => {
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
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h2 className="text-red-600 text-xl font-bold mb-4">
              {BUSINESS_INFO.name}
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional tree service serving Jacksonville, NC and surrounding areas since {BUSINESS_INFO.yearEstablished}.
            </p>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-white mb-2">{BUSINESS_INFO.name}</p>
              <p className="text-gray-300">
                <a 
                  href={BUSINESS_INFO.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors"
                >
                  {BUSINESS_INFO.location.full}
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a 
                  href={`tel:${BUSINESS_INFO.phone.tel}`}
                  className="text-gray-200 hover:text-red-500 transition-colors font-medium"
                >
                  {BUSINESS_INFO.phone.display}
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a 
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Services — real links for SEO */}
          <div>
            <h2 className="text-red-600 text-xl font-bold mb-4">Services</h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/tree-trimming-jacksonville-nc" className="hover:text-red-600 transition-colors">
                  Tree Trimming & Pruning
                </Link>
              </li>
              <li>
                <Link to="/tree-removal-jacksonville-nc" className="hover:text-red-600 transition-colors">
                  Tree Removal
                </Link>
              </li>
              <li>
                <Link to="/stump-grinding-jacksonville-nc" className="hover:text-red-600 transition-colors">
                  Stump Grinding
                </Link>
              </li>
              <li>
                <Link to="/emergency-tree-service-jacksonville-nc" className="hover:text-red-600 transition-colors">
                  Emergency Storm Damage
                </Link>
              </li>
              <li>
                <Link to="/tree-service-jacksonville-nc" className="hover:text-red-600 transition-colors font-semibold">
                  All Jacksonville Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-red-600 text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={() => handleScrollOrNavigate('why-choose')} className="hover:text-red-600 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <Link to="/meet-the-owners" className="hover:text-red-600 transition-colors">
                  Meet the Owners
                </Link>
              </li>
              <li>
                <Link to="/tree-service-richlands-nc" className="hover:text-red-600 transition-colors">
                  Richlands NC
                </Link>
              </li>
              <li>
                <Link to="/tree-service-hubert-nc" className="hover:text-red-600 transition-colors">
                  Hubert NC
                </Link>
              </li>
              <li>
                <Link to="/tree-service-sneads-ferry-nc" className="hover:text-red-600 transition-colors">
                  Sneads Ferry NC
                </Link>
              </li>
              <li>
                <Link to="/tree-service-swansboro-nc" className="hover:text-red-600 transition-colors">
                  Swansboro NC
                </Link>
              </li>
              <li>
                <Link to="/tree-service-camp-lejeune-nc" className="hover:text-red-600 transition-colors">
                  Camp Lejeune NC
                </Link>
              </li>
              <li>
                <button onClick={() => handleScrollOrNavigate('testimonials')} className="hover:text-red-600 transition-colors">
                  Customer Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollOrNavigate('contact')} className="hover:text-red-600 transition-colors">
                  Get Free Estimate
                </button>
              </li>
              <li>
                <a href={`tel:${BUSINESS_INFO.phone.tel}`} className="hover:text-red-600 transition-colors">
                  Emergency Service
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Service Area */}
          <div>
            <h2 className="text-red-600 text-xl font-bold mb-4">Resources</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="/tree-removal-cost-north-carolina" className="hover:text-red-600 transition-colors">
                  Tree Removal Cost Guide
                </Link>
              </li>
              <li>
                <Link to="/storm-damage-trees-guide" className="hover:text-red-600 transition-colors">
                  Storm Damage Guide
                </Link>
              </li>
              <li>
                <Link to="/tree-trimming-vs-pruning" className="hover:text-red-600 transition-colors">
                  Trimming vs Pruning
                </Link>
              </li>
              <li>
                <Link to="/do-you-need-a-permit-to-remove-a-tree-nc" className="hover:text-red-600 transition-colors">
                  Tree Removal Permits NC
                </Link>
              </li>
              <li>
                <Link to="/leaning-tree-dangerous-after-storm" className="hover:text-red-600 transition-colors">
                  Leaning Tree Safety
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm space-y-2">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. | Licensed & Insured
          </p>
          <p>{BUSINESS_INFO.location.full}</p>
          <p>Professional Tree Service | 24/7 Emergency Service | Free Estimates</p>
        </div>
      </div>
    </footer>
  );
}
