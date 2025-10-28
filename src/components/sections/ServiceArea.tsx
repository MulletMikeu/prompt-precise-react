import { CityBadge } from '@/components/ui/CityBadge';
import { SERVICE_AREAS, BUSINESS_INFO } from '@/lib/constants';

export function ServiceArea() {
  return (
    <section id="service-area" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Areas We Serve
          </h2>
          <p className="text-xl text-gray-600">
            Professional tree service throughout Onslow County, NC
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {SERVICE_AREAS.map((area) => (
            <CityBadge key={area.name} city={area.name} />
          ))}
        </div>

        <p className="text-center mt-12 text-gray-600 text-lg">
          Don't see your area?{' '}
          <a 
            href={`tel:${BUSINESS_INFO.phone.tel}`}
            className="text-red-600 font-semibold hover:text-red-700 transition-colors"
          >
            Call us
          </a>
          {' '}- we may still be able to help!
        </p>
      </div>
    </section>
  );
}
