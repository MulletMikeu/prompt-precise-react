import { Head as Helmet } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/siteData";
import { PROSE } from "../data/homepageCopy";

const TITLE = "Terms of Service | Godhans Tree Company";
const DESC = "The terms that apply when you use godhans.com or hire Godhans Tree Company for tree removal, trimming, stump grinding, or emergency storm work.";
const CANONICAL = "https://godhans.com/terms-of-service";
const UPDATED = "September 14, 2026";

export default function TermsOfService() {
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
        <meta property="og:image" content="https://godhans.com/og-image-v2.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image-v2.jpg" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Helmet>

      <main id="main-content" className="pt-20">
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#E5424F", letterSpacing: "0.12em" }}>Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
              These terms cover how {BUSINESS.name} quotes, schedules, and performs tree work, and how we communicate with you along the way. Last updated {UPDATED}.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col gap-10" style={{ color: "#C8C8C2" }}>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-base leading-relaxed">
                By using godhans.com or engaging {BUSINESS.name} for services, you agree to these terms. If you do not agree with them, please do not use this website or hire us for work.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
              <p className="text-base leading-relaxed mb-4">
                {BUSINESS.name} provides tree removal, tree trimming, stump grinding, and emergency and storm services in {BUSINESS.primaryCity} and throughout {BUSINESS.county}.
              </p>
              <p className="text-base leading-relaxed">
                All estimates are free. A written quote reflects the scope of work described at the time of the estimate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Estimates and Pricing</h2>
              <p className="text-base leading-relaxed mb-4">
                Quotes are based on conditions we measure on site — tree size, access to the work area, and root flare among them. The written quote is the price you pay for the scope it describes.
              </p>
              <p className="text-base leading-relaxed">
                If the scope changes — additional trees, hidden hazards, or work outside what was quoted — we price the change and get your approval before any additional work proceeds.
              </p>
            </div>

            {/* Carrier/CTIA-mandated wording, mirrored from the SMS section of the
                Privacy Policy. Do not paraphrase: carrier reviewers fetch this page
                directly and check for these sentences. */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">SMS/Text Messaging Terms</h2>
              <p className="text-base leading-relaxed mb-4">
                By opting in to receive text messages from {BUSINESS.name}, you agree to receive service-related messages including estimate confirmations, scheduling updates, arrival notifications, follow-ups on requested quotes, and feedback requests. Message frequency varies. Message and data rates may apply. Reply STOP at any time to opt out, or HELP for help.
              </p>
              <p className="text-base leading-relaxed mb-4">
                {/* One expression, not interpolated JSX text: React SSR would otherwise
                    split this into separate text nodes and inject <!-- --> separators,
                    breaking an exact-string fetch of the sentence by a carrier reviewer. */}
                {`After you text STOP, we will send one final message confirming you have been unsubscribed, and no further messages will be sent unless you opt in again. For help, reply HELP or email ${BUSINESS.email}.`}
              </p>
              <p className="text-base leading-relaxed">
                Consent to receive text messages is not a condition of purchasing any services. Carriers are not liable for delayed or undelivered messages. Your opt-in consent will not be shared with third parties; see our{" "}
                <Link to="/privacy-policy" className="font-bold" style={{ color: "#E5424F" }}>Privacy Policy</Link> for details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Scheduling and Weather</h2>
              <p className="text-base leading-relaxed">
                Work is scheduled around safety. Severe weather may delay scheduled work, and during storm events emergency response takes priority over routine jobs. If your job moves, we will tell you and reschedule it as soon as conditions allow.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Payment</h2>
              <p className="text-base leading-relaxed mb-4">
                Payment is due as agreed on the written quote.
              </p>
              <p className="text-base leading-relaxed">
                {PROSE.financing}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Liability and Insurance</h2>
              <p className="text-base leading-relaxed mb-4">
                {BUSINESS.name} carries $2M general liability coverage and workers' compensation coverage. Certificates of insurance are available on request — ask and we will send them.
              </p>
              <p className="text-base leading-relaxed">
                Nothing in these terms limits your statutory rights as a consumer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Property Access</h2>
              <p className="text-base leading-relaxed mb-4">
                You grant us access to the work area and a reasonable path to it for the equipment the job requires.
              </p>
              <p className="text-base leading-relaxed">
                NC 811 locates cover public utilities, not private lines. Before work begins, you are responsible for identifying private underground items on your property that a locate will not mark — irrigation, private lighting, septic tanks and drain fields among them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to These Terms</h2>
              <p className="text-base leading-relaxed">
                We may update these terms from time to time. When we do, we will revise the "last updated" date at the top of this page, and that date governs which version applies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-base leading-relaxed">
                If you have any questions about these terms, please reach out:
              </p>
              <p className="text-base leading-relaxed mt-4">
                <span className="font-semibold text-white">{BUSINESS.name}</span><br />
                {BUSINESS.address.full}<br />
                Phone: <a href={BUSINESS.phoneHref} className="font-bold" style={{ color: "#E5424F" }}>{BUSINESS.phone}</a><br />
                Email: <a href={BUSINESS.emailHref} className="font-bold" style={{ color: "#E5424F" }}>{BUSINESS.email}</a>
              </p>
              <p className="text-sm mt-8">
                <Link to="/contact" className="font-bold uppercase tracking-widest" style={{ color: "#888888" }}>Contact Us →</Link>
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
