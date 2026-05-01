import { useForm, ValidationError } from '@formspree/react';
import { BUSINESS_INFO } from '@/lib/constants';

export function ContactForm() {
  const [state, handleSubmit] = useForm('xkokzrjp');

  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get a Fast Quote
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Fill out the form and we'll contact you shortly. For fastest response, call us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-lg">
            <a
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              className="text-red-600 font-semibold hover:text-red-700 transition-colors inline-flex items-center gap-2"
            >
              📞 Call Now: {BUSINESS_INFO.phone.display}
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

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl border-2 border-gray-200 p-6 md:p-10">
            {state.succeeded ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  Thank you, we'll contact you shortly.
                </h3>
                <p className="text-gray-600 mb-6">
                  For immediate assistance or emergencies, call us 24/7.
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phone.tel}`}
                  className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors text-lg"
                >
                  📞 Call Now: {BUSINESS_INFO.phone.display}
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    maxLength={100}
                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    maxLength={20}
                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="(555) 555-5555"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-bold text-gray-700 mb-2">
                    Service Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    required
                    autoComplete="street-address"
                    maxLength={200}
                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="Street, City, NC"
                  />
                  <ValidationError prefix="Address" field="address" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
                    Service Needed <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors bg-white"
                  >
                    <option value="" disabled>Select a service…</option>
                    <option value="Tree Removal">Tree Removal</option>
                    <option value="Tree Trimming">Tree Trimming</option>
                    <option value="Stump Grinding">Stump Grinding</option>
                    <option value="Emergency Tree Service">Emergency Tree Service</option>
                  </select>
                  <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your tree (size, location, urgency)…"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1" />
                </div>

                {state.errors && typeof (state.errors as { getFormErrors?: () => readonly unknown[] }).getFormErrors === 'function' &&
                  ((state.errors as { getFormErrors: () => readonly unknown[] }).getFormErrors().length > 0) && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm">
                      Something went wrong. Please call us directly at {BUSINESS_INFO.phone.display}.
                    </div>
                  )}

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                >
                  {state.submitting ? 'Sending…' : 'Get a Fast Quote'}
                </button>

                <p className="text-center text-sm text-gray-500">
                  Or call us 24/7:{' '}
                  <a href={`tel:${BUSINESS_INFO.phone.tel}`} className="text-red-600 font-bold hover:underline">
                    {BUSINESS_INFO.phone.display}
                  </a>
                </p>
              </form>
            )}
          </div>

          <div className="mt-6 border-t border-gray-200 pt-5">
            <p className="text-sm text-gray-700 text-center sm:text-left flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center gap-y-1.5 sm:gap-x-3">
              <span className="font-semibold">Licensed &amp; Insured</span>
              <span className="hidden sm:inline text-gray-300" aria-hidden="true">|</span>
              <span>Free Estimates</span>
              <span className="hidden sm:inline text-gray-300" aria-hidden="true">|</span>
              <span>24/7 Emergency Service</span>
              <span className="hidden sm:inline text-gray-300" aria-hidden="true">|</span>
              <span>Military Discounts <span className="text-gray-500">(Camp Lejeune friendly)</span></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
