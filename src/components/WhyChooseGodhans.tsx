import { Link } from 'react-router-dom';
import { CREDENTIAL, type DamageNoun } from '../data/siteData';

/**
 * The insurance paragraph names the spider lift, which has its own page. Rather
 * than duplicate the sentence in siteData just to carry an anchor, we split the
 * single-source string on the phrase and link that occurrence. If the copy ever
 * stops mentioning the lift, `split` returns one part and this renders the
 * plain sentence unchanged.
 */
const SPIDER_LIFT_PHRASE = 'the spider lift';
const SPIDER_LIFT_HREF = '/spider-lift-tree-removal-jacksonville-nc';

function InsuranceCopy({ damageNoun }: { damageNoun?: DamageNoun }) {
  const copy = CREDENTIAL.equipmentInsurance(damageNoun);
  const [before, ...rest] = copy.split(SPIDER_LIFT_PHRASE);
  if (rest.length === 0) return <>{copy}</>;
  return (
    <>
      {before}
      <Link
        to={SPIDER_LIFT_HREF}
        className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold"
      >
        {SPIDER_LIFT_PHRASE}
      </Link>
      {rest.join(SPIDER_LIFT_PHRASE)}
    </>
  );
}

/**
 * WhyChooseGodhans — shared credential / "why choose us" block. Content comes
 * entirely from CREDENTIAL in siteData (single source) — no page hardcodes
 * credential text. Rendered on service + city pages via ServicePage's
 * `credentialBlock` prop and directly in LocationPage.
 */
export default function WhyChooseGodhans({ damageNoun }: { damageNoun?: DamageNoun } = {}) {
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
          <InsuranceCopy damageNoun={damageNoun} />
        </p>
      </div>
    </section>
  );
}
