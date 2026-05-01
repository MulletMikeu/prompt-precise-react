import { Link } from 'react-router-dom';

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <div className="lg:col-span-5">
            <p className="text-red-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Why Godhans
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              Two brothers. One crew. 15+ years in Eastern NC.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We started Godhans Tree Company because too many people in Jacksonville were getting
              burned by no-shows, sloppy cleanup, and uninsured guys with a chainsaw and a pickup. We
              run this company the way we&apos;d want someone to work on our own house.
            </p>
          </div>

          {/* Three headline reasons — staggered weight */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2 bg-black text-white rounded-lg p-7">
              <h3 className="text-2xl font-bold mb-2">
                Licensed &amp; Insured Tree Service in Jacksonville, NC
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Full general liability and workers&apos; comp. If something goes sideways on your property,
                you&apos;re not the one paying for it. Ask for our certificate before any tree comes down —
                we&apos;re happy to send it.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-2">15+ years in the trees</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Working in Onslow County since 2010. We know the soil, the storms, and how Eastern NC
                pines and oaks fail.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-black mb-2">24/7 emergency response</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Storm hits at 2 a.m.? Call. We pick up the phone and roll a truck when it actually
                matters.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary reasons — plain list, not boxed */}
        <div className="border-t border-gray-200 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-lg font-bold text-black mb-2">We show up when we say we will.</h3>
              <p className="text-gray-700 leading-relaxed">
                If we book a Tuesday morning, you see our truck Tuesday morning. If weather pushes a
                job, we call — we don&apos;t ghost.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-black mb-2">Our crew, our equipment.</h3>
              <p className="text-gray-700 leading-relaxed">
                No subcontractors, no random guys borrowed off another job. The same trained crew runs
                every removal, top to bottom.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-black mb-2">Free, honest estimates.</h3>
              <p className="text-gray-700 leading-relaxed">
                We&apos;ll walk the property, tell you what actually needs to come down, and quote it on the
                spot. No pressure, no upsells.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-black mb-2">Camp Lejeune &amp; military families.</h3>
              <p className="text-gray-700 leading-relaxed">
                We work with military families across Camp Lejeune, MCAS New River, and base housing
                all the time. PCS timing, deployments, rentals — we get it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-black mb-2">We clean up better than we found it.</h3>
              <p className="text-gray-700 leading-relaxed">
                Brush hauled, ruts raked, driveway blown off. You shouldn&apos;t be able to tell where the
                tree used to be — except for the empty sky.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-black mb-2">Tight-access &amp; high-risk work.</h3>
              <p className="text-gray-700 leading-relaxed">
                Trees over houses, pools, fences, and power lines. We rig them down in pieces using
                proper climbing and lowering systems — not luck.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/meet-the-owners"
              className="inline-block text-red-600 hover:text-red-700 font-semibold text-lg underline underline-offset-4"
            >
              Meet the brothers behind Godhans Tree Company →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
