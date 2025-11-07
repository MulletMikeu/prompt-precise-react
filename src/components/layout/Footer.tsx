import { BUSINESS_INFO } from '@/lib/constants';

export function Footer() {
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
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-red-600 text-xl font-bold mb-4">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
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

          {/* Services */}
          <div>
            <h3 className="text-red-600 text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors">
                  Tree Trimming & Pruning
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors">
                  Tree Removal
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors">
                  Stump Grinding
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors">
                  Emergency Storm Damage
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors">
                  Land Clearing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition-colors">
                  Lot Cleanup
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-red-600 text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={() => scrollToSection('why-choose')} className="hover:text-red-600 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('service-area')} className="hover:text-red-600 transition-colors">
                  Service Areas
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="hover:text-red-600 transition-colors">
                  Customer Reviews
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-red-600 transition-colors">
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

          {/* Service Area */}
          <div>
            <h3 className="text-red-600 text-xl font-bold mb-4">Service Area</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Jacksonville, NC</li>
              <li>Camp Lejeune</li>
              <li>Swansboro</li>
              <li>Richlands</li>
              <li>Sneads Ferry</li>
              <li>& Surrounding Areas</li>
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
