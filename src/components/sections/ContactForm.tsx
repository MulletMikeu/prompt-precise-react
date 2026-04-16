import { useEffect, useState } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';

export function ContactForm() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // Defer script loading to improve initial page load
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://link.arcaffiliates.com/js/form_embed.js';
      script.async = true;
      script.defer = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    }, 100);

    return () => {
      clearTimeout(timer);
      const script = document.querySelector('script[src="https://link.arcaffiliates.com/js/form_embed.js"]');
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Request Free Estimate
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
            <a 
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              className="text-red-600 font-semibold hover:text-red-700 transition-colors inline-flex items-center gap-2"
            >
              📞 {BUSINESS_INFO.phone.display}
            </a>
            <span className="hidden sm:block text-gray-400">|</span>
            <a 
              href={`mailto:${BUSINESS_INFO.email}`}
              className="text-red-600 font-semibold hover:text-red-700 transition-colors inline-flex items-center gap-2"
            >
              📧 {BUSINESS_INFO.email}
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-gray-200">
            {!scriptLoaded && (
              <div className="flex items-center justify-center h-96 bg-gray-50">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading form...</p>
                </div>
              </div>
            )}
            
            <iframe
              src={`https://link.arcaffiliates.com/widget/form/${BUSINESS_INFO.integrations.arcFormId}`}
              style={{
                width: '100%',
                height: '1064px',
                border: 'none',
                display: scriptLoaded ? 'block' : 'none'
              }}
              id={`inline-${BUSINESS_INFO.integrations.arcFormId}`}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="GODHANS"
              data-height="1064"
              data-form-id={BUSINESS_INFO.integrations.arcFormId}
              title="GODHANS"
              loading="lazy"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🛡️', text: 'Licensed & Insured' },
              { icon: '💰', text: 'Free Estimates' },
              { icon: '⚡', text: '24/7 Emergency' },
              { icon: '🎖️', text: 'Military Discounts' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border-2 border-gray-200 text-center hover:border-red-600 transition-colors">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-semibold text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
