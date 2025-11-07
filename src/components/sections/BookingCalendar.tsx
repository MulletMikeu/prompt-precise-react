import { useState } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';
import { Calendar, Phone, Mail } from 'lucide-react';

export function BookingCalendar() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Schedule Your Service
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book an appointment online or contact us directly
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              className="bg-red-600 text-white p-6 rounded-lg text-center hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Phone className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Call to Book</h3>
              <p className="text-sm opacity-90">{BUSINESS_INFO.phone.display}</p>
            </a>

            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="bg-black text-white p-6 rounded-lg text-center hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Mail className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-sm opacity-90">{BUSINESS_INFO.email}</p>
            </a>

            <div className="bg-gray-900 text-white p-6 rounded-lg text-center shadow-lg">
              <Calendar className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Emergency?</h3>
              <p className="text-sm opacity-90">Available 24/7</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-gray-200">
            {isLoading && (
              <div className="flex items-center justify-center h-96 bg-gray-50">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading calendar...</p>
                </div>
              </div>
            )}
            
            <iframe
              src={`https://link.arcaffiliates.com/widget/booking/${BUSINESS_INFO.integrations.arcBookingId}`}
              style={{ 
                border: 0,
                width: '100%',
                height: '600px',
                display: isLoading ? 'none' : 'block'
              }}
              title="Book Appointment with Godhans"
              onLoad={() => setIsLoading(false)}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
