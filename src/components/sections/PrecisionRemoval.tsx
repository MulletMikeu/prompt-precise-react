import { Link } from 'react-router-dom';
import { Shield, Wrench, TreePine } from 'lucide-react';
import spiderLiftImage from '@/assets/spider-lift-tree-removal-jacksonville-nc.webp';
import { BUSINESS_INFO } from '@/lib/constants';

interface PrecisionRemovalProps {
  /** Light variant uses white bg + black text (homepage). Dark variant uses gray-950 bg + white text (service pages). */
  variant?: 'light' | 'dark';
  /** Override the heading if needed for a specific page context. */
  heading?: string;
}

export function PrecisionRemoval({ variant = 'light', heading }: PrecisionRemovalProps) {
  const isDark = variant === 'dark';

  return (
    <section
      id="precision-removal"
      className={isDark ? 'bg-gray-950 py-16 border-t border-gray-800' : 'bg-white py-20 border-t border-gray-200'}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Image */}
        <div className="mb-10 rounded-lg overflow-hidden shadow-2xl border-2 border-gray-800 bg-black">
          <img
            src={spiderLiftImage}
            alt="Spider lift removing large pine tree in tight space near power lines in Jacksonville NC with minimal property damage"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            width={1600}
            height={1200}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            {heading || 'Precision Tree Removal Without Property Damage'}
          </h2>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Most tree removals in Jacksonville happen feet away from a roof, fence, septic line, or power drop. The wrong drop or a heavy machine on the lawn can cost more to fix than the tree work itself. We use a tracked spider lift so we can reach high limbs safely without rolling heavy bucket trucks across your yard.
          </p>
        </div>

        {/* Three benefit blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div className={`p-6 rounded-lg border-2 ${isDark ? 'bg-black border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
            <Shield className="w-8 h-8 text-red-600 mb-3" aria-hidden="true" />
            <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              Why Tight Spaces Are Dangerous
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Limbs near power lines, structures, or fences cannot be free-dropped. One wrong cut can damage the roof, pull a service line, or land on a vehicle. Proper rigging and lift access are non-negotiable.
            </p>
          </div>
          <div className={`p-6 rounded-lg border-2 ${isDark ? 'bg-black border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
            <Wrench className="w-8 h-8 text-red-600 mb-3" aria-hidden="true" />
            <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              Spider Lift Advantage
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Tracked, lightweight, and able to fit through a standard gate. We reach 50+ feet up without parking a crane in your driveway or rutting up the lawn the way bucket trucks do.
            </p>
          </div>
          <div className={`p-6 rounded-lg border-2 ${isDark ? 'bg-black border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
            <TreePine className="w-8 h-8 text-red-600 mb-3" aria-hidden="true" />
            <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              Lawn & Property Protected
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Rubber tracks distribute weight, plywood mats protect soft ground, and every limb is rigged down — not dropped. We leave the yard the way we found it.
            </p>
          </div>
        </div>

        {/* CTA + internal links */}
        <div className="text-center max-w-2xl mx-auto">
          <a
            href={`tel:${BUSINESS_INFO.phone.tel}`}
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 shadow-lg inline-flex items-center gap-2 text-lg mb-4"
          >
            📞 Free Estimate — Call {BUSINESS_INFO.phone.display}
          </a>
          <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Licensed, fully insured, and experienced with tight-access removals. No-pressure on-site quote.
          </p>
          <div className={`flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
            <Link to="/tree-removal-jacksonville-nc" className="hover:underline underline-offset-2">
              Tree Removal →
            </Link>
            <Link to="/emergency-tree-service-jacksonville-nc" className="hover:underline underline-offset-2">
              Emergency Tree Service →
            </Link>
            <Link to="/tree-service-jacksonville-nc#contact" className="hover:underline underline-offset-2">
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
