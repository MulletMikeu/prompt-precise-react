import { PRICING } from '@/data/siteData';

/**
 * "Why our numbers differ" — the block that reconciles five price bands a
 * reader would otherwise read as five contradictions.
 *
 * Every figure interpolates from PRICING; nothing here is hardcoded. The
 * argument is the owner's and it is one idea: we price a crew-day plus the
 * equipment that crew needs, so the bands are not five opinions about what a
 * tree is worth — they are the number of crew-days and the machine required to
 * finish safely. The day-two threshold is the hinge, and it is why the same
 * tree honestly has two prices.
 *
 * Deliberately NOT hedged. No "varies", no "starting from", no "contact us for
 * pricing" — the page's entire claim is that we will put numbers in public, and
 * a reconciliation block that dissolves into qualifiers gives that back.
 */
export default function PriceReconciliation() {
  return (
    <section className="bg-black py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Why our numbers differ: we price a crew-day, not a tree
        </h2>

        <div className="text-gray-300 text-lg leading-relaxed space-y-5">
          <p>
            You will see five different ranges on this page, and they are not
            five guesses at the same thing. We price what a job actually
            consumes: a crew for a day, plus the equipment that crew needs to
            finish it safely. Count those two and you have the number.
          </p>

          <p>
            The hinge is the second day. A removal that finishes inside one
            crew-day prices one way. The same removal that bleeds four hours into
            a second morning does not cost a sixth more — it costs another
            mobilization, another day of lift time, and another day of three
            people's wages. That is the single biggest reason the same tree can
            carry two prices, and it is why we would rather look at it than guess
            from a photo.
          </p>

          <p className="text-white font-semibold">
            Here is how the five coexist:
          </p>

          <ul className="space-y-4 list-none pl-0">
            <li>
              <strong className="text-white">{PRICING.removal.minimum} minimum.</strong>{' '}
              Not a tier — a floor. Getting a full crew and the equipment onto
              your property costs the same whether we then cut one limb or a
              whole pine, so there is nothing below it to sell.
            </li>
            <li>
              <strong className="text-white">{PRICING.removal.most} for most removals.</strong>{' '}
              One crew, one day, room to work. This is the band when nothing
              about the site is fighting us.
            </li>
            <li>
              <strong className="text-white">{PRICING.removal.large} large or hazardous.</strong>{' '}
              Still one day, but now it needs the lift — either because of the
              height or because a defect means the tree cannot be climbed. Machine
              time is the largest line on any removal.
            </li>
            <li>
              <strong className="text-white">
                {PRICING.nearHouse.besideStructure} beside or over the house.
              </strong>{' '}
              The same tree as the row above, and often the same height and
              diameter. What changed is that nothing can be dropped: every piece
              comes down on a rope, and rigging is slow. This is the band where
              day two starts showing up.
            </li>
            <li>
              <strong className="text-white">
                {PRICING.emergency.structure} emergency, tree already on the
                structure.
              </strong>{' '}
              Almost none of this is the tree. It is after-hours mobilization, a
              crane or a lift, taking a loaded trunk off a roof in pieces,
              working around the weather, and tarping the opening before we
              leave — and it is two days more often than one.
            </li>
          </ul>

          <p>
            Read down that list and the price is not tracking the tree getting
            bigger. It is tracking options being taken away — somewhere to drop
            it, room for the machine, a trunk sound enough to climb, a day that
            ends when the light does. Every option removed is hours added, and
            past a certain point hours become a second day.
          </p>

          <p className="text-white font-semibold">
            Which is why the number you get from us is a written quote before any
            work starts, against a scope we have walked.
          </p>
        </div>
      </div>
    </section>
  );
}
