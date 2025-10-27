import { ServiceCard } from '@/components/ui/ServiceCard';
import { SERVICES, BUSINESS_INFO } from '@/lib/constants';

export function Services() {
  const handleServiceClick = (serviceId: string, emergency: boolean = false) => {
    if (emergency) {
      window.location.href = `tel:${BUSINESS_INFO.phone.tel}`;
    } else {
      const element = document.getElementById('contact');
      if (element) {
        const headerOffset = 150;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

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
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              cta={service.cta}
              emergency={service.emergency}
              onClick={() => handleServiceClick(service.id, service.emergency)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
