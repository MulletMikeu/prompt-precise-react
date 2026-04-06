import { Button } from '@/components/ui/button';
import { BUSINESS_INFO } from '@/lib/constants';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Ready to get started? Contact us today for your free estimate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-red-600 mb-4">{BUSINESS_INFO.name}</h3>
              
              <div className="space-y-4 text-gray-200">
                <div>
                  <p className="font-semibold text-white mb-1">Address:</p>
                  <a 
                    href={BUSINESS_INFO.location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600 transition-colors flex items-start gap-2"
                  >
                    <span>📍</span>
                    <span>{BUSINESS_INFO.location.full}</span>
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-white mb-1">Phone:</p>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone.tel}`}
                    className="hover:text-red-600 transition-colors flex items-center gap-2 text-lg"
                  >
                    <span>📞</span>
                    <span>{BUSINESS_INFO.phone.display}</span>
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-white mb-1">Email:</p>
                  <a 
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="hover:text-red-600 transition-colors flex items-center gap-2"
                  >
                    <span>📧</span>
                    <span>{BUSINESS_INFO.email}</span>
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-white mb-2">Hours:</p>
                  <div className="space-y-1 text-gray-300">
                    <p className="text-red-600 font-bold">{BUSINESS_INFO.hours.emergency}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <Button 
                  variant="phone" 
                  size="lg"
                  href={`tel:${BUSINESS_INFO.phone.tel}`}
                  className="w-full"
                >
                  📞 Call Now for Free Estimate
                </Button>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.8!2d-77.4305!3d34.754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6af5edd22ef362ab!2sGodhans!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Godhans Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
