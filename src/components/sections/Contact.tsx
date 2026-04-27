import { Button } from '@/components/ui/CustomButton';
import { BUSINESS_INFO } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const { latitude, longitude } = BUSINESS_INFO.location.coordinates;
  const mapQuery = encodeURIComponent(BUSINESS_INFO.location.full);
  // Reliable, key-less Google Maps embed
  const mapEmbedSrc = `https://maps.google.com/maps?q=${mapQuery}&ll=${latitude},${longitude}&z=15&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black to-gray-900 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Ready to get started? Call now for your free estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Contact Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl flex flex-col">
            <h3 className="text-2xl font-bold text-red-500 mb-6">
              {BUSINESS_INFO.name}
            </h3>

            <ul className="space-y-5 text-gray-200 flex-grow">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600/15 text-red-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <a
                    href={BUSINESS_INFO.location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-400 transition-colors"
                  >
                    {BUSINESS_INFO.location.full}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600/15 text-red-500 flex items-center justify-center">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.tel}`}
                    className="text-lg hover:text-red-400 transition-colors"
                  >
                    {BUSINESS_INFO.phone.display}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600/15 text-red-500 flex items-center justify-center">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="hover:text-red-400 transition-colors break-all"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600/15 text-red-500 flex items-center justify-center">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-white">Hours</p>
                  <p className="text-red-500 font-bold">
                    {BUSINESS_INFO.hours.emergency}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
              <Button
                variant="phone"
                size="lg"
                href={`tel:${BUSINESS_INFO.phone.tel}`}
                className="w-full"
              >
                📞 Call Now for Free Estimate
              </Button>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white/10 hover:bg-white/15 text-white py-3 px-6 rounded-lg font-semibold transition-colors border border-white/15"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-800 min-h-[420px] lg:min-h-0">
            <iframe
              src={mapEmbedSrc}
              title={`Map showing ${BUSINESS_INFO.name} at ${BUSINESS_INFO.location.full}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px] block border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
