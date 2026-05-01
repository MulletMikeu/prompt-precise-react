import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '@/lib/constants';

const SERVICE_URLS = {
  trimming: '/tree-trimming-jacksonville-nc',
  removal: '/tree-removal-jacksonville-nc',
  stump: '/stump-grinding-jacksonville-nc',
  emergency: '/emergency-tree-service-jacksonville-nc',
};

function scrollToContact() {
  const el = document.getElementById('contact');
  if (el) {
    const offset = el.getBoundingClientRect().top + window.pageYOffset - 150;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
}

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Tree work, done right the first time.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We&apos;re a small, owner-run crew handling tree removal, trimming, and stump grinding across
            Jacksonville, Richlands, Hubert, Sneads Ferry, Swansboro, and Camp Lejeune. No salespeople,
            no subcontractors — just the guys who&apos;ll be on your property.
          </p>
        </div>

        {/* Emergency — full-width highlight */}
        <div className="mb-6 bg-black text-white rounded-lg p-8 md:p-10 border-l-4 border-red-600">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-red-500 font-semibold uppercase tracking-wider text-sm mb-2">
                24/7 Storm Response
              </p>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                Emergency Tree Service in Jacksonville, NC
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Tree on the house? Limb through the roof? Power line tangled up after a storm? Call us
                directly — day, night, weekends, holidays. We bring rigging gear and insurance, not
                excuses.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phone.tel}`}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-4 rounded-lg whitespace-nowrap transition-colors"
            >
              Call {BUSINESS_INFO.phone.display}
            </a>
          </div>
          <Link
            to={SERVICE_URLS.emergency}
            className="inline-block mt-4 text-red-400 hover:text-red-300 font-semibold"
          >
            More on storm &amp; emergency response →
          </Link>
        </div>

        {/* Two wide cards: Removal + Trimming */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          <Link
            to={SERVICE_URLS.removal}
            className="md:col-span-3 bg-white border border-gray-200 hover:border-red-600 rounded-lg p-8 transition-colors group"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
              Tree Removal in Jacksonville NC
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Big pines leaning over the house. Dead oaks near the fence line. Tight backyards where a
              bucket truck won&apos;t fit. We rig trees down piece by piece in spaces other crews won&apos;t touch,
              then haul everything off so you&apos;re not left with a yard full of brush.
            </p>
            <span className="text-red-600 font-semibold group-hover:text-red-700">
              See how we handle removals →
            </span>
          </Link>

          <Link
            to={SERVICE_URLS.trimming}
            className="md:col-span-2 bg-white border border-gray-200 hover:border-red-600 rounded-lg p-8 transition-colors group"
          >
            <h3 className="text-2xl font-bold text-black mb-3">
              Tree Trimming &amp; Pruning
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clearing limbs off the roof, opening up driveways, deadwooding hardwoods, and shaping
              trees so they grow strong instead of breaking in the next storm.
            </p>
            <span className="text-red-600 font-semibold group-hover:text-red-700">
              Trimming &amp; pruning details →
            </span>
          </Link>
        </div>

        {/* Bottom row — three smaller, varied */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to={SERVICE_URLS.stump}
            className="bg-white border border-gray-200 hover:border-red-600 rounded-lg p-6 transition-colors group"
          >
            <h3 className="text-xl font-bold text-black mb-2">Stump Grinding</h3>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              We grind stumps below grade so you can put grass, mulch, or a new tree right over the
              spot. Chips hauled off on request.
            </p>
            <span className="text-red-600 font-semibold text-sm group-hover:text-red-700">
              Stump grinding →
            </span>
          </Link>

          <button
            onClick={scrollToContact}
            className="text-left bg-white border border-gray-200 hover:border-red-600 rounded-lg p-6 transition-colors group"
          >
            <h3 className="text-xl font-bold text-black mb-2">Land Clearing</h3>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              Clearing lots for builds, opening up overgrown property lines, and pulling out brush so
              you can actually use your land. Residential and small commercial.
            </p>
            <span className="text-red-600 font-semibold text-sm group-hover:text-red-700">
              Get a quote →
            </span>
          </button>

          <button
            onClick={scrollToContact}
            className="text-left bg-white border border-gray-200 hover:border-red-600 rounded-lg p-6 transition-colors group"
          >
            <h3 className="text-xl font-bold text-black mb-2">Lot &amp; Storm Cleanup</h3>
            <p className="text-gray-700 leading-relaxed text-sm mb-3">
              Downed limbs, leftover brush, broken tops after a storm — we load it out and rake the
              site so it looks better than when we showed up.
            </p>
            <span className="text-red-600 font-semibold text-sm group-hover:text-red-700">
              Get a quote →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
