import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export function StickyCallButton() {
  return (
    <a
      href={`tel:${BUSINESS_INFO.phone.tel}`}
      aria-label={`Call ${BUSINESS_INFO.phone.display}`}
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-lg py-4 px-6 rounded-full shadow-2xl flex items-center justify-center gap-3 transition-colors"
      style={{ boxShadow: '0 10px 30px rgba(220, 38, 38, 0.5)' }}
    >
      <Phone className="w-5 h-5" />
      <span>Call Now: {BUSINESS_INFO.phone.display}</span>
    </a>
  );
}
