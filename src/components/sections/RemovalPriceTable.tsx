import { PRICING } from '@/data/siteData';

/**
 * The real price bands for tree removal, as a table.
 *
 * Every figure interpolates from PRICING — there is not one hardcoded dollar
 * amount in this file, so the table cannot drift from the rest of the site.
 *
 * NO STUMP FIGURES. Stump grinding prices on a completely different basis
 * (measured per-inch work, not a crew-day) and belongs to
 * /stump-grinding-jacksonville-nc. Putting a stump number in this table would
 * both mislead — a $200 figure next to an $800 removal minimum invites the
 * reader to think the minimum is negotiable — and cross a live A/B test
 * boundary. Link to that page instead; never quote it here.
 *
 * Accessibility / responsiveness notes, because this is the one block on the
 * page that can fail on a phone:
 *  - It is a real <table> with a <caption>, a <thead>, column <th scope="col">
 *    and a row <th scope="row"> per situation, so a screen reader announces
 *    "Situation: Most removals, Price range: …" rather than reading 21 loose
 *    cells.
 *  - Cell text wraps rather than forcing a fixed width, which is what lets
 *    three columns survive a 360px viewport.
 *  - The wrapper is still a focusable scroll region (role="region" + tabIndex)
 *    as a backstop for very narrow viewports and large text settings: if the
 *    table does overflow, a keyboard user can reach and scroll it. A scroll
 *    container that cannot be focused is a WCAG 2.1.1 failure, which is the
 *    easy way to lose a 100 on this page.
 */

interface Band {
  situation: string;
  range: string;
  driver: string;
  /** PRICING path, for the audit trail in the report. Not rendered. */
  source: string;
}

const BANDS: Band[] = [
  {
    situation: 'Minimum, any removal',
    range: PRICING.removal.minimum,
    driver:
      'Getting a full crew and the equipment onto your property. This is a fixed cost and it does not scale down, which is why there is no cheaper tier below it.',
    source: 'PRICING.removal.minimum',
  },
  {
    situation: 'Most removals',
    range: PRICING.removal.most,
    driver:
      'One crew, one day, room to work. The tree comes down in manageable pieces and the debris goes straight onto the trailer.',
    source: 'PRICING.removal.most',
  },
  {
    situation: 'Large or hazardous tree',
    range: PRICING.removal.large,
    driver:
      'Size, or a defect that rules out climbing — a lifted root plate or a cracked trunk means the structure a climber would tie into is the part that failed. That forces the job onto a lift.',
    source: 'PRICING.removal.large',
  },
  {
    situation: 'Large pine, open yard (80 ft+)',
    range: PRICING.largePine.openYard,
    driver:
      'Height without obstacles. There is somewhere to drop it and nothing underneath that matters, which makes this the cheap end of a big tree.',
    source: 'PRICING.largePine.openYard',
  },
  {
    situation: 'Beside, or leaning over, the house',
    range: PRICING.nearHouse.besideStructure,
    driver:
      'Position, not size. Nothing can be dropped, so every piece comes down on a rope and the crew works above a roof all day.',
    source: 'PRICING.nearHouse.besideStructure / PRICING.largePine.leaningOverHouse',
  },
  {
    situation: 'Over the house plus obstacles',
    range: PRICING.largePine.withObstacles,
    driver:
      'Sheds, fences, driveways, power lines and no way to get a crane into position. Each one removes an option until every piece has to be rigged out of a space with no room for it.',
    source: 'PRICING.largePine.withObstacles (= PRICING.removal.exceptional)',
  },
  {
    situation: 'Emergency — tree already on the structure',
    range: PRICING.emergency.structure,
    driver:
      'Almost none of this is the tree. It is after-hours mobilization, crane or lift time, rigging a loaded trunk off a roof in pieces, working around weather, and tarping the opening before we leave.',
    source: 'PRICING.emergency.structure',
  },
];

/** Exported so the page can cite the same list it renders. */
export { BANDS as REMOVAL_BANDS };

export default function RemovalPriceTable() {
  return (
    <section className="bg-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2
          id="price-table-heading"
          className="text-2xl sm:text-3xl font-bold text-white mb-6"
        >
          {PRICING.removal.minimum} minimum to {PRICING.emergency.structure}: every
          band we quote
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          These are our bands, not a national average. The third column is the
          part worth reading — it is what moves a job from one row to the next.
        </p>

        <div
          role="region"
          aria-labelledby="price-table-heading"
          tabIndex={0}
          className="overflow-x-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-lg border border-gray-800"
        >
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Tree removal price bands by situation, with the price range for each
              and what drives it.
            </caption>
            <thead>
              <tr className="bg-gray-900">
                <th
                  scope="col"
                  className="px-3 py-3 text-sm sm:text-base font-bold text-white align-top border-b border-gray-700"
                >
                  Situation
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-sm sm:text-base font-bold text-white align-top border-b border-gray-700 whitespace-nowrap"
                >
                  Price range
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-sm sm:text-base font-bold text-white align-top border-b border-gray-700"
                >
                  What drives it
                </th>
              </tr>
            </thead>
            <tbody>
              {BANDS.map((band) => (
                <tr key={band.situation} className="border-b border-gray-800 last:border-0">
                  <th
                    scope="row"
                    className="px-3 py-4 text-sm sm:text-base font-semibold text-white align-top text-left"
                  >
                    {band.situation}
                  </th>
                  {/* The figure is the thing a reader came for, so it gets the
                      brand weight and does not wrap mid-range. */}
                  <td className="px-3 py-4 text-sm sm:text-base font-bold text-white align-top whitespace-nowrap">
                    {band.range}
                  </td>
                  <td className="px-3 py-4 text-sm sm:text-base text-gray-300 align-top leading-relaxed">
                    {band.driver}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
