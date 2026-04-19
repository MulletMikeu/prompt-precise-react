import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const CITIES = [
  {
    name: 'Jacksonville, NC',
    href: '/tree-service-jacksonville-nc',
    description: 'Our home base — full tree service across Onslow County.',
  },
  {
    name: 'Camp Lejeune, NC',
    href: '/tree-service-camp-lejeune-nc',
    description: 'Military-friendly tree care with PCS-ready turnaround.',
  },
  {
    name: 'Swansboro, NC',
    href: '/tree-service-swansboro-nc',
    description: 'Live oaks, historic district, waterfront properties.',
  },
  {
    name: 'Sneads Ferry, NC',
    href: '/tree-service-sneads-ferry-nc',
    description: 'Coastal storm response and hurricane cleanup.',
  },
  {
    name: 'Richlands, NC',
    href: '/tree-service-richlands-nc',
    description: 'Rural property and large-tree removal experts.',
  },
  {
    name: 'Hubert, NC',
    href: '/tree-service-hubert-nc',
    description: 'Reliable tree removal, trimming, and stump grinding.',
  },
];

export function CitiesWeServe() {
  return (
    <section id="cities-we-serve" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Cities We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted tree service across Onslow County and the Crystal Coast.
            Click your city for local details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CITIES.map((city) => (
            <Link
              key={city.href}
              to={city.href}
              className="group bg-white border-2 border-gray-200 rounded-lg p-6 transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-black group-hover:text-red-600 transition-colors flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" aria-hidden="true" />
                  {city.name}
                </h3>
                <span className="text-red-600 text-2xl font-bold transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{city.description}</p>
              <div className="mt-4 text-red-600 font-semibold text-sm uppercase tracking-wide">
                View Local Tree Service
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
