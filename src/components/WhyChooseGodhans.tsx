import { CREDENTIAL } from '../data/siteData';

/**
 * WhyChooseGodhans — shared credential / "why choose us" block. Content comes
 * entirely from CREDENTIAL in siteData (single source) — no page hardcodes
 * credential text. Rendered on service + city pages via ServicePage's
 * `credentialBlock` prop and directly in LocationPage.
 */
export default function WhyChooseGodhans() {
  return (
    <section className="py-16 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          {CREDENTIAL.heading}
        </h2>
        <ul className="space-y-3 mb-8">
          {CREDENTIAL.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-gray-300 text-lg leading-relaxed">
              <span aria-hidden="true" className="text-red-500 mt-1 flex-shrink-0">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-red-600 pl-4">
          {CREDENTIAL.equipmentInsurance}
        </p>
      </div>
    </section>
  );
}
