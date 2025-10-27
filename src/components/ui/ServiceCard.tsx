import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  cta: string;
  emergency?: boolean;
  onClick?: () => void;
}

export function ServiceCard({ 
  icon, 
  title, 
  description, 
  cta, 
  emergency = false,
  onClick 
}: ServiceCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:shadow-xl group">
      <div className="text-5xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-black">{title}</h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <button
        onClick={onClick}
        className="text-red-600 font-semibold inline-flex items-center gap-2 hover:text-red-700 transition-colors"
      >
        {cta} <span>→</span>
      </button>
    </div>
  );
}
