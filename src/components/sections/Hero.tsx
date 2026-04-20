import { Button } from '@/components/ui/CustomButton';
import { BUSINESS_INFO } from '@/lib/constants';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form');
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

  const scrollToServices = () => {
    const element = document.getElementById('services');
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
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-red-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-700 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional Tree Service in Jacksonville, NC
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your Trusted Tree Care Experts Since {BUSINESS_INFO.yearEstablished}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-red-600/20 border border-red-600/30 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold">
              ✓ Licensed & Insured
            </div>
            <div className="bg-red-600/20 border border-red-600/30 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold">
              ✓ Free Estimates
            </div>
            <div className="bg-red-600/20 border border-red-600/30 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold">
              ✓ Military Discounts
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="phone"
              size="lg"
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              className="w-full sm:w-auto"
            >
              📞 Call Now {BUSINESS_INFO.phone.display}
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto"
            >
              Get a Fast Quote
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToServices}
              className="w-full sm:w-auto"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
