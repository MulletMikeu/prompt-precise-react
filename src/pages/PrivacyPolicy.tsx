import { Head as Helmet } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/siteData";

const TITLE = "Privacy Policy | Godhans Tree Company";
const DESC = "How Godhans Tree Company collects, uses, and protects the information you share with us when you request an estimate or use our website.";
const CANONICAL = "https://godhans.com/privacy-policy";
const UPDATED = "June 25, 2026";

export default function PrivacyPolicy() {
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
            <p className="font-body text-xs font-600 uppercase tracking-widest mb-4" style={{ color: "#E5424F", letterSpacing: "0.12em" }}>Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
              {BUSINESS.name} respects your privacy. This page explains what information we collect when you contact us or use this website, how we use it, and the choices you have. Last updated {UPDATED}.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col gap-10" style={{ color: "#C8C8C2" }}>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-base leading-relaxed mb-4">
                We only collect the information we need to respond to your request and provide tree services:
              </p>
              <ul className="list-disc pl-6 flex flex-col gap-2 text-base leading-relaxed">
                <li><span className="font-semibold text-white">Contact details you give us</span> — such as your name, phone number, email address, and property address when you call, email, or submit a form requesting a quote or estimate.</li>
                <li><span className="font-semibold text-white">Job details</span> — information you share about the work you need so we can prepare an accurate estimate.</li>
                <li><span className="font-semibold text-white">Website usage data</span> — anonymous, aggregated information (such as pages visited and general location) collected automatically through analytics, as described below.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-base leading-relaxed mb-4">We use the information you provide to:</p>
              <ul className="list-disc pl-6 flex flex-col gap-2 text-base leading-relaxed">
                <li>Respond to your inquiry and provide a free estimate;</li>
                <li>Schedule, perform, and follow up on tree services;</li>
                <li>Contact you about your request or an existing job;</li>
                <li>Improve our website and the services we offer.</li>
              </ul>
              <p className="text-base leading-relaxed mt-4">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Forms and Analytics</h2>
              <p className="text-base leading-relaxed mb-4">
                Our quote and contact forms are processed by Formspree, a third-party form provider that delivers your message to us by email. Information you submit through these forms is handled according to Formspree's privacy practices.
              </p>
              <p className="text-base leading-relaxed">
                This site uses Google Analytics to understand how visitors use our pages. Google Analytics uses cookies and similar technologies to collect anonymous, aggregated usage data, which helps us improve the site. This data does not personally identify you. You can opt out of Google Analytics using Google's browser add-on, or by blocking cookies in your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
              <p className="text-base leading-relaxed">
                A cookie is a small text file stored on your device. We use only the cookies needed for basic site functionality and for the anonymous analytics described above. You can set your browser to refuse cookies or to alert you when cookies are being sent; some parts of the site may not function as intended if you do.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Protect Your Information</h2>
              <p className="text-base leading-relaxed">
                We take reasonable measures to keep your information secure and limit access to it. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Choices</h2>
              <p className="text-base leading-relaxed">
                You may ask us to update or delete the contact information you have shared with us at any time. To do so, call us at{" "}
                <a href={BUSINESS.phoneHref} className="font-bold" style={{ color: "#E5424F" }}>{BUSINESS.phone}</a> or email{" "}
                <a href={BUSINESS.emailHref} className="font-bold" style={{ color: "#E5424F" }}>{BUSINESS.email}</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-base leading-relaxed">
                We may update this Privacy Policy from time to time. When we do, we will revise the "last updated" date at the top of this page. Continued use of our website after changes are posted means you accept the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-base leading-relaxed">
                If you have any questions about this Privacy Policy or how we handle your information, please reach out:
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
