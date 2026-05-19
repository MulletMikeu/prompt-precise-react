import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/siteData";

const TITLE = "About Godhans Tree Company | Veteran-Owned Tree Service Jacksonville, NC";
const DESC = `Veteran-owned tree service in Jacksonville, NC since ${BUSINESS.founded}. Licensed & insured. Meet the team behind Godhans Tree Company.`;
const CANONICAL = "https://godhans.com/about";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://godhans.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image.jpg" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Helmet>

      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="font-body text-xs font-600 uppercase tracking-widest mb-4" style={{ color: "#C41230", letterSpacing: "0.12em" }}>About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Godhans Tree Company</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
              Godhans Tree Company is a veteran-owned, disabled-veteran owned, family-operated tree service based in Jacksonville, NC. Founded in {BUSINESS.founded} by brothers Michael and James — both U.S. Marine Corps veterans — we've built our reputation on doing the jobs other companies won't: showing up on time, working safely in difficult conditions, and leaving every property cleaner than we found it.
            </p>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our History</h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#C8C8C2" }}>
              Godhans Tree Company was founded in {BUSINESS.founded} after Michael and James returned to Jacksonville following their service in the Marine Corps. They saw what was missing in the local market: a tree service company that approached the work the way the military approaches a mission — with preparation, accountability, and a commitment to completing the job right, no matter how difficult.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#C8C8C2" }}>
              What started as a two-man crew with a single truck has grown into one of Onslow County's most trusted tree service operations. Over {BUSINESS.yearsInBusiness} years, we've handled thousands of removals, storm cleanups, and land clearing projects across Jacksonville and the surrounding communities — building a reputation that brings us most of our business through word-of-mouth referrals from homeowners and property managers who've worked with us before.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>
              We specialize in the jobs that require more than a chainsaw and a bucket truck: tight residential lots where a single wrong cut can damage a home, trees leaning over structures after a storm, high-risk canopy work at 60 to 80 feet, and technical removals in confined spaces. Our crew trains for these scenarios, and we invest in the equipment to handle them safely.
            </p>
          </div>
        </section>

        {/* Veteran and Disabled-Veteran Owned */}
        <section className="py-16" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-4">Veteran-Owned & Disabled-Veteran Owned</h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#C8C8C2" }}>
              Godhans Tree Company is both veteran-owned and disabled-veteran owned. Michael and James served in the United States Marine Corps, and that service shapes how they run the business. Military culture is built on accountability, precision, and never leaving a job half-done — and those same standards apply to every tree we remove, every yard we clear, and every crew member we put in the field.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>
              For homeowners near Camp Lejeune and throughout the military community in Onslow County, working with a veteran-owned company means working with people who understand your standards and your schedule. PCS moves, deployment windows, and base access requirements are part of our daily conversations. We know how to work around them.
            </p>
          </div>
        </section>

        {/* Ownership and Expertise */}
        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">The Ownership Team</h2>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Michael — Co-Owner, Aerial Operations</h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
                Michael is a USMC veteran with a deep expertise in high-risk tree removal and technical rigging. He specializes in canopy work that requires precise cuts at extreme heights — the kind of removal where a miscalculation damages a roof, a fence, or a vehicle. Other tree companies in the region call on Michael when they encounter jobs too difficult or dangerous for their own crews. He works comfortably at 80 feet and applies the same rigor to tree safety that the Marine Corps applies to operational safety.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">James — Co-Owner, Ground Operations</h3>
              <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>
                James heads ground operations and manages the heavy equipment side of every project. He coordinates crew logistics, operates track loaders and grinding equipment, and ensures that the ground crew protects the property — landscaping, structures, and driveways — throughout every job. His approach to site management is methodical and property-first, which is why clients consistently note how little trace we leave behind.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/meet-the-owners" className="inline-block font-bold uppercase tracking-wide text-sm px-6 py-3 transition-colors" style={{ background: "#C41230", color: "white" }}>
                See Full Bios &amp; Photos
              </Link>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-4">Where We Work</h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#C8C8C2" }}>
              Our primary service area is Jacksonville, NC and all of Onslow County. We serve residential and commercial properties in Jacksonville, Camp Lejeune, Swansboro, Richlands, Hubert, Sneads Ferry, Maysville, Beulaville, Holly Ridge, and Surf City.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>
              Our crews are local — we live in this community. We're not dispatching from Wilmington or Raleigh. When a storm hits at midnight and you have a tree through your roof, you're calling someone who is 20 minutes away, not 90 minutes away. That proximity matters for emergencies, and it matters for routine jobs too: we can assess, schedule, and complete work faster than a company operating out of a regional hub.
            </p>
          </div>
        </section>

        {/* Why Choose Godhans */}
        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6">Why Homeowners Choose Godhans</h2>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-4 items-start">
                <span className="block w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: "#C41230" }} aria-hidden="true" />
                <div>
                  <p className="font-bold text-white mb-1">We take on the jobs others won't</p>
                  <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>Tight lots, trees on structures, confined spaces, heights above 60 feet — these are our specialty, not our exception. We have the training, rigging, and equipment to handle technical removals safely.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="block w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: "#C41230" }} aria-hidden="true" />
                <div>
                  <p className="font-bold text-white mb-1">No subcontractors — ever</p>
                  <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>The crew that shows up to your property is our crew, under our supervision, covered by our insurance. We don't broker jobs out to third parties.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="block w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: "#C41230" }} aria-hidden="true" />
                <div>
                  <p className="font-bold text-white mb-1">Insurance claim support</p>
                  <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>We photograph all damage before work begins and provide itemized invoices designed to work with homeowners insurance claims. We can coordinate with your adjuster if needed.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="block w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: "#C41230" }} aria-hidden="true" />
                <div>
                  <p className="font-bold text-white mb-1">Free estimates, honest pricing</p>
                  <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>We assess every job in person before quoting. No phone estimates, no bait-and-switch pricing. What we quote is what you pay.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Licensing and Insurance */}
        <section className="py-16" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-4">Licensed &amp; Insured in North Carolina</h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#C8C8C2" }}>
              Godhans Tree Company is fully licensed to operate in North Carolina and carries comprehensive general liability insurance and workers' compensation coverage on every job. This protects you as a property owner: if an uninsured or underinsured crew injures a worker on your property, you can be held liable. Our workers' comp coverage closes that exposure completely — any workplace injury during our time on your property is handled through our insurance, not yours.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>
              We're happy to provide proof of insurance before any job begins. If your HOA, landlord, or property manager requires documentation, just ask — we carry current certificates and can have them to you the same day.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16" style={{ background: "#C41230" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready for a Free Estimate?</h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Licensed, insured, and available 24/7. No pressure — just honest pricing from a local crew that shows up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="font-bold uppercase tracking-wide px-8 py-4 text-center transition-colors" style={{ background: "white", color: "#C41230" }}>Request Estimate</Link>
              <a href={BUSINESS.phoneHref} className="font-bold uppercase tracking-wide px-8 py-4 text-center border-2 border-white text-white">{BUSINESS.phone}</a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
