import { ServiceCard } from '@/components/ui/ServiceCard';
import { SERVICES, BUSINESS_INFO } from '@/lib/constants';

const SERVICE_URLS: Record<string, string> = {
  trimming: '/tree-trimming-jacksonville-nc',
  removal: '/tree-removal-jacksonville-nc',
  stump: '/stump-grinding-jacksonville-nc',
  emergency: '/emergency-tree-service-jacksonville-nc',
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Tree Services
          </h2>
          <p className="text-xl text-gray-600">
            Complete tree care solutions for Jacksonville & surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const href = SERVICE_URLS[service.id];
            return (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                cta={service.cta}
                emergency={service.emergency}
                href={href}
                onClick={!href ? () => {
                  if (service.emergency) {
                    window.location.href = `tel:${BUSINESS_INFO.phone.tel}`;
                  } else {
                    const el = document.getElementById('contact');
                    if (el) {
                      const offset = el.getBoundingClientRect().top + window.pageYOffset - 150;
                      window.scrollTo({ top: offset, behavior: 'smooth' });
                    }
                  }
                } : undefined}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
