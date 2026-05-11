import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/siteData";

const TITLE = "Contact Godhans Tree Company | Free Estimates in Jacksonville, NC";
const DESC = "Request a free estimate from Godhans Tree Company in Jacksonville, NC. Call (618) 704-4861 or email us — 24/7 emergency tree service available.";
const CANONICAL = "https://godhans.com/contact";

export default function ContactPage() {
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
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="font-body text-xs font-600 uppercase tracking-widest mb-4" style={{ color: "#C41230", letterSpacing: "0.12em" }}>Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us for a Free Estimate</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
              No automated phone trees. No long waits. When you call Godhans, you reach a real person — and we always call back the same day.
            </p>
          </div>
        </section>

        <section id="contact" className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              <div>
                <h2 className="text-xl font-bold text-white mb-6">Contact Details</h2>
                <dl className="flex flex-col gap-6">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#888888" }}>Phone</dt>
                    <dd>
                      <a href={BUSINESS.phoneHref} className="text-lg font-bold" style={{ color: "#C41230" }}>{BUSINESS.phone}</a>
                      <p className="text-sm mt-0.5" style={{ color: "#888888" }}>Available 24/7 for emergencies</p>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#888888" }}>Email</dt>
                    <dd>
                      <a href={BUSINESS.emailHref} className="text-base" style={{ color: "#C8C8C2" }}>{BUSINESS.email}</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#888888" }}>Address</dt>
                    <dd className="text-base" style={{ color: "#C8C8C2" }}>{BUSINESS.address.full}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#888888" }}>Hours</dt>
                    <dd className="text-base" style={{ color: "#C8C8C2" }}>{BUSINESS.hours}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-6">Request a Free Estimate</h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#C8C8C2" }}>
                  The fastest way to get a quote is to call us directly at <a href={BUSINESS.phoneHref} className="font-bold" style={{ color: "#C41230" }}>{BUSINESS.phone}</a>. We can often schedule same-day or next-day estimates.
                </p>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#C8C8C2" }}>
                  You can also reach us by email at <a href={BUSINESS.emailHref} className="font-bold" style={{ color: "#C41230" }}>{BUSINESS.email}</a> and we'll respond within a few hours.
                </p>
                <a href={BUSINESS.phoneHref} className="btn-primary inline-flex">Call Now — {BUSINESS.phone}</a>
                <p className="text-sm mt-5">
                  <Link to="/services" className="font-bold uppercase tracking-widest" style={{ color: "#888888" }}>View All Services →</Link>
                </p>
              </div>

            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#C41230" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">24/7 Emergency Tree Service</h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Storm damage doesn't wait for business hours. Neither do we. Call any time.
            </p>
            <a href={BUSINESS.phoneHref} className="font-bold uppercase tracking-wide px-8 py-4 text-center inline-block" style={{ background: "white", color: "#C41230" }}>
              Call {BUSINESS.phone}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
