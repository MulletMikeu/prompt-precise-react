import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const CITIES = [
  {
    name: 'Jacksonville, NC',
    slug: 'tree-service-jacksonville-nc',
    description: 'Our home base — full tree service across Onslow County.',
  },
  {
    name: 'Camp Lejeune, NC',
    slug: 'tree-service-camp-lejeune-nc',
    description: 'Military-friendly tree care with PCS-ready turnaround.',
  },
  {
    name: 'Swansboro, NC',
    slug: 'tree-service-swansboro-nc',
    description: 'Live oaks, historic district, waterfront properties.',
  },
  {
    name: 'Sneads Ferry, NC',
    slug: 'tree-service-sneads-ferry-nc',
    description: 'Coastal storm response and hurricane cleanup.',
  },
  {
    name: 'Richlands, NC',
    slug: 'tree-service-richlands-nc',
    description: 'Rural property and large-tree removal experts.',
  },
  {
    name: 'Hubert, NC',
    slug: 'tree-service-hubert-nc',
    description: 'Reliable tree removal, trimming, and stump grinding.',
  },
];

interface OtherCitiesWeServeProps {
  currentSlug: string;
}

export function OtherCitiesWeServe({ currentSlug }: OtherCitiesWeServeProps) {
  const others = CITIES.filter((c) => c.slug !== currentSlug);

  return (
    <section className="bg-gray-950 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Other Cities We Serve
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Switch to a nearby city for local tree service details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((city) => (
            <Link
              key={city.slug}
              to={`/${city.slug}`}
              className="group bg-black border-2 border-gray-800 rounded-lg p-5 transition-all duration-300 hover:border-red-600 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" aria-hidden="true" />
                  {city.name}
                </h3>
                <span className="text-red-500 text-xl font-bold transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{city.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
