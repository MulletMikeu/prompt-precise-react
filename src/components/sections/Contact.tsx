import { Button } from '@/components/ui/Button';
import { BUSINESS_INFO } from '@/lib/constants';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-gray-300">
          Contact us today for your free, no-obligation estimate
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="phone" 
            size="lg"
            href={`tel:${BUSINESS_INFO.phone.tel}`}
            className="w-full sm:w-auto"
          >
            📞 Call {BUSINESS_INFO.phone.display}
          </Button>
          <Button 
            variant="primary" 
            size="lg"
            href={`mailto:${BUSINESS_INFO.email}`}
            className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 border-2 border-white"
          >
            📧 Email Us
          </Button>
        </div>

        <div className="max-w-2xl mx-auto space-y-3 text-gray-300">
          <p className="text-xl font-semibold text-white">Business Hours:</p>
          <p>{BUSINESS_INFO.hours.weekday}</p>
          <p>{BUSINESS_INFO.hours.saturday}</p>
          <p>{BUSINESS_INFO.hours.sunday}</p>
          <p className="text-xl font-bold text-red-600 mt-6">
            24/7 Emergency Service Available
          </p>
        </div>
      </div>
    </section>
  );
}
