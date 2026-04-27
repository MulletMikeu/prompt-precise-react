import { Button } from '@/components/ui/CustomButton';
import { BUSINESS_INFO } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock, Shield, Award } from 'lucide-react';

export function Contact() {
  const mapQuery = encodeURIComponent(BUSINESS_INFO.location.full);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  const contactItems = [
    {
      icon: Phone,
      label: 'Call 24/7',
      value: BUSINESS_INFO.phone.display,
      href: `tel:${BUSINESS_INFO.phone.tel}`,
      highlight: true,
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: BUSINESS_INFO.email,
      href: `mailto:${BUSINESS_INFO.email}`,
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: BUSINESS_INFO.location.full,
      href: directionsUrl,
      external: true,
    },
    {
      icon: Clock,
      label: 'Hours',
      value: BUSINESS_INFO.hours.emergency,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block bg-red-600/20 text-red-400 text-sm font-bold px-4 py-1.5 rounded-full mb-4 border border-red-600/30">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-300">
            Free estimates. Fast response. Available 24/7 for emergencies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact info grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      item.highlight
                        ? 'bg-red-600 text-white'
                        : 'bg-white/10 text-red-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-400 font-medium">
                      {item.label}
                    </p>
                    <p
                      className={`font-bold truncate ${
                        item.highlight ? 'text-red-400 text-lg' : 'text-white'
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                </>
              );

              const baseClasses =
                'flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all';

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className={`${baseClasses} hover:bg-white/10 hover:border-red-600/40 hover:-translate-y-0.5`}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className={baseClasses}>
                  {content}
                </div>
              );
            })}
          </div>

          {/* Primary CTA card */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 md:p-10 shadow-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Ready for Your Free Estimate?
            </h3>
            <p className="text-white/90 mb-6 text-lg max-w-xl mx-auto">
              Talk to a real arborist in under 60 seconds. No obligation, no
              pressure — just honest answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="phone"
                size="lg"
                href={`tel:${BUSINESS_INFO.phone.tel}`}
                className="bg-white !text-red-600 hover:bg-gray-100 shadow-lg"
              >
                📞 Call {BUSINESS_INFO.phone.display}
              </Button>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center bg-black/30 hover:bg-black/40 text-white py-3 px-6 rounded-lg font-semibold transition-colors border border-white/20"
              >
                Request a Quote Online →
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-white/20 text-sm">
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="w-4 h-4" aria-hidden="true" />
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Award className="w-4 h-4" aria-hidden="true" />
                <span className="font-semibold">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span className="font-semibold">24/7 Emergency Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
