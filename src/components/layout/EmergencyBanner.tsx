import { BUSINESS_INFO } from '@/lib/constants';

export function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-4 px-4 font-bold text-lg sticky top-0 z-50 shadow-lg shadow-red-500/30 animate-pulse">
      ⚠️ 24/7 Emergency Tree Service Available -{' '}
      <a 
        href={`tel:${BUSINESS_INFO.phone.tel}`}
        className="underline hover:text-red-100 transition-colors"
      >
        Call Now: {BUSINESS_INFO.phone.display}
      </a>
    </div>
  );
}
