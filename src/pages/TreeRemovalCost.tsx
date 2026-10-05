import ServicePage from './ServicePage';
import CompletedJobsTable from '@/components/sections/CompletedJobsTable';
import PriceReconciliation from '@/components/sections/PriceReconciliation';
import RemovalPriceTable from '@/components/sections/RemovalPriceTable';
import { PRICING } from '../data/siteData';

/**
 * ============================================================================
 * ⚠️  SHIP DATE — MUST BE SET AT MERGE TIME. DO NOT SHIP THIS PLACEHOLDER.  ⚠️
 * ============================================================================
 *
 * This is the date rendered in the visible byline ("Updated November 1, 2026")
 * and it is a freshness claim, so it has to be the date the page actually went
 * live — not the date the branch was cut, and not today's date computed at
 * build time (see the note in <AuthorByline/> on why the date is never
 * computed). The value below is a PLACEHOLDER chosen only so the byline renders
 * correctly on the preview deploy.
 *
 * At merge: set this to the real ship date in YYYY-MM-DD form, in the same
 * commit as the merge, and nowhere else.
 */
const SHIP_DATE = '2026-11-01';

/**
 * /tree-removal-cost-north-carolina — the TREATMENT arm of the live A/B test
 * against /stump-grinding-jacksonville-nc.
 *
 * Two rules this page lives under:
 *
 *  1. EVERY FIGURE COMES FROM PRICING. There is not one hardcoded dollar amount
 *     below — all of them interpolate from siteData. No national averages, no
 *     "industry standard" numbers, no invented jobs, customers or quotes.
 *
 *  2. NO STUMP-GRINDING PRICES. Stump pricing is the control arm's claim, and
 *     it prices on a different basis entirely (measured per-inch work rather
 *     than a crew-day). The link in `relatedServices` is fine; a stump figure
 *     on this page is not. PRICING.stump is deliberately never imported here.
 *
 * Every H2 leads with its figure, because the figure is what the reader came
 * for and a heading that makes them read a sentence to find it has wasted the
 * only glance they were going to give it.
 *
 * KNOWN UNRESOLVED CONFLICT, flagged for the owner and NOT resolved in code:
 * PRICING.largePine.openYard is $3,000–$4,000 for an 80 ft+ pine in an open
 * yard, while the owner's same-tree example is ~$6,000 for an 80–90 ft pine of
 * 3+ ft diameter in an open yard. Section 3 below distinguishes the two by
 * DIAMETER, which is the only variable that separates them — that wording is a
 * proposal awaiting the owner's ruling, not a decision taken here.
 */
export default function TreeRemovalCost() {
  return (
    <ServicePage
      title="How Much Does Tree Removal Cost in North Carolina? (2026 Guide)"
      metaTitle="Tree Removal Cost in North Carolina (2026 Guide)"
      slug="tree-removal-cost-north-carolina"
      description={`Tree removal in Jacksonville, NC starts at an ${PRICING.removal.minimum} minimum; most jobs run ${PRICING.removal.most} and large or hazardous trees ${PRICING.removal.large}. Our real price bands, itemized.`}
      quickAnswer={PRICING.removal.summary}
      authorUpdated={SHIP_DATE}
      priceBlock={<RemovalPriceTable />}
      /* Positional keys — recount these against the `sections` array below
         after inserting or removing any section. */
      sectionLinks={{
        // Section 2 (large pine) — access is what moves it off the open-yard
        // band, and the lift is how we get access back.
        2: {
          href: '/spider-lift-tree-removal-jacksonville-nc',
          label: 'How spider lift access changes what a backyard removal costs',
        },
        // Section 4 (close to the house) has a whole page behind it.
        4: {
          href: '/tree-removal-near-house-jacksonville-nc',
          label: 'Tree removal near a house: what changes when position sets the price',
        },
        // Section 9 (Onslow access) — tight access is the single biggest driver.
        9: {
          href: '/tree-removal-tight-spaces-jacksonville-nc',
          label: 'Why tight-access removals cost more',
        },
      }}
      sections={[
        /* --- q-011: How much does tree removal cost in Jacksonville, NC? --- */
        {
          heading: `${PRICING.removal.minimum} minimum, ${PRICING.removal.most} for most removals in Jacksonville, NC`,
          text: `That is the direct answer. Tree removal in Jacksonville and the rest of Onslow County starts at an ${PRICING.removal.minimum} minimum, and most removals we do land between ${PRICING.removal.most}.\n\nAbove that band there are three more: large or hazardous trees run ${PRICING.removal.large}; a tree hard against or leaning over the house runs ${PRICING.nearHouse.besideStructure}; and exceptional jobs — tight access, severe hazards, complex rigging — start at ${PRICING.removal.exceptional} and go up.\n\nThe table above is all five bands in one place, with what moves a job from one to the next. Those are our numbers for our crew and our equipment in this county. They are not a state or national average, and we would rather give you a band we actually quote than an average that matches nobody's tree.`,
        },
        {
          heading: `${PRICING.removal.minimum} is a floor, not a starting tier`,
          text: PRICING.stories.mobilization,
        },

        /* ------- q-012: Average cost to remove a large pine tree in NC ------ */
        {
          heading: `${PRICING.largePine.openYard} for a large pine in an open yard`,
          text: `Loblolly pine is the tree we remove most in Onslow County, so it is worth pricing on its own rather than leaving it inside a general range. These are 80 feet and up.\n\nOPEN YARD — ${PRICING.largePine.openYard}. Room to work, somewhere to drop it, nothing underneath that matters. This is the cheap version of a big tree, and it is cheaper than people expect.\n\nLEANING OVER THE HOUSE — ${PRICING.largePine.leaningOverHouse}. Same tree, same height, same diameter. What changed is that nothing can be dropped, so every piece comes down on a rope and the crew is working above a roof all day.\n\nOVER THE HOUSE PLUS OBSTACLES — ${PRICING.largePine.withObstacles}. Sheds, driveways, power lines, hard access, and no way to get a crane into position. Each of those removes an option, and the job becomes rigging every piece out of a space that has no room for it.\n\nThe pattern is the one that runs through this whole guide: the tree is not what sets the price. What is underneath it is.`,
        },
        {
          heading: `About ${PRICING.stories.sameTreeExample.openYard} in an open yard, ${PRICING.stories.sameTreeExample.withObstacles} with obstacles — one tree, two prices`,
          text: `${PRICING.stories.sameTree}\n\nOne thing to be clear about, because the two numbers above sit next to a ${PRICING.largePine.openYard} band: that band is an ordinary 80-foot-plus loblolly, where the height is what makes it large. This tree is not that. Three feet or more through the trunk is far more wood in every piece, and diameter — not height — is what decides whether a trunk comes down in a few picks or a dozen, and whether the crew is rigging weight the lift can take in one go.`,
        },

        /* --- q-018: How much to remove a tree close to a house? ------------- */
        {
          heading: `${PRICING.nearHouse.typical} to ${PRICING.nearHouse.besideStructure} when the tree is close to the house`,
          text: `"Close to the house" is three different jobs, and the gap between them is wide enough that one number would be useless.\n\nSMALL TREE NEAR THE HOUSE — ${PRICING.nearHouse.typical} typical, stump included. Close enough that it cannot be dropped, small enough that the pieces are hand-liftable and the whole thing is over well inside a day.\n\nMATURE TREE NEAR THE HOUSE — ${PRICING.nearHouse.mature}. Now the sections are heavy enough to need rigging rather than hands, and the day fills up.\n\nHARD AGAINST, OR LEANING OVER, THE HOUSE — ${PRICING.nearHouse.besideStructure}. This is the band where position has taken over from size completely.\n\n${PRICING.stories.position}`,
        },

        /* --- q-029: What should be included in a tree removal estimate? ---- */
        {
          heading: '7 line items a real estimate itemizes — and a written quote before work starts',
          text: `Ask for the estimate in writing and ask for it itemized. This is how ours are actually built, line by line, straight off the invoice structure:\n\n1. MOBILIZATION AND DEMOBILIZATION — getting the crew and the machines to you and away again, as its own line. This is the biggest fixed cost on any job and it is why there is a minimum at all.\n\n2. EQUIPMENT BY THE HOUR — the lift, the crane, the loader, each at its own hourly rate for the hours it is actually running. Machine time is the largest variable line on a removal.\n\n3. CREW LABOUR BY ROLE AND HOURS — lead arborist, safety supervisor, equipment operator, ground crew, each at their own rate for their own hours. Not "labor: one lump".\n\n4. DEBRIS HAULING BY THE LOAD — counted in loads, priced per load.\n\n5. DISPOSAL FEES — what the landfill or the yard charges to take it, separately from what it costs us to haul it there.\n\n6. STUMP HANDLING — the stump is its own decision and its own line, whether that is grinding it, cutting it flush, or leaving it. Priced separately on our quotes, and separately on this site.\n\n7. ON INSURANCE JOBS, THE SPLIT — emergency mitigation on one side, debris removal on the other. That split is not bookkeeping: the small tree-debris sublimit on a homeowner's policy generally applies to the debris side and generally does not apply to the mitigation side, and an estimate that lumps them together makes it impossible for your adjuster to see which is which.\n\nAnd the part that matters more than any single line: a written quote before any work starts. If a number was only ever said out loud, it is not a quote.`,
        },

        /* ---------------- Photo ballpark + the honest limit ---------------- */
        {
          heading: `${PRICING.photoEstimate.smallPine} from a photo for a small pine — above that we come and look`,
          text: `People send us photos and ask for a ballpark, and for the small end we will give one. A pine that is ${PRICING.photoEstimate.smallPineSize} runs roughly ${PRICING.photoEstimate.smallPine}.\n\nIf it is big and anywhere near a structure, the honest ballpark is ${PRICING.photoEstimate.nearStructureFloor} — and we need to come look.\n\nThat is not us being cagey. ${PRICING.stories.photoLimit}`,
        },

        /* ----------------------------- Emergency ----------------------------- */
        {
          heading: `${PRICING.emergency.structure} when the tree is already on the structure`,
          text: `Emergency work on a tree that is ON a house prices separately from everything above, because almost none of the cost is the tree. It is after-hours mobilization, crane or lift time, rigging a loaded trunk off a roof in pieces, working around the weather, and tarping the opening before we leave — water getting in is what turns a bad day into a major repair.\n\nWe bill your insurance directly and work with your adjuster. That is also where the mitigation-versus-debris split in an itemized estimate stops being paperwork and starts being money.`,
        },

        /* ------------------------- Regional detail -------------------------- */
        {
          heading: `Still ${PRICING.removal.most} on the coast — but at the top of the band`,
          text: `Coastal North Carolina removals sit at the higher end of the state's ranges — usually ${PRICING.removal.most} for a job that would price lower inland — because the ground, the season, and the condition of the trees all push toward machine work.\n\nThe soil is the first reason. Sandy coastal soil drains fast but holds water at depth, and after a wet week it won't carry a loaded truck. A crew that would have driven a bucket truck to the trunk in the Piedmont has to mat the ground, work from the street with more rigging, or bring a tracked lift instead. Every one of those adds hours.\n\nHurricane season is the second. From June through November, demand compresses into the days after each storm, and the trees that need attention are the ones nobody can safely defer. Scheduled work booked in the calm stretches of late winter and early spring prices better than the same tree booked the week after a named storm.\n\nStorm-weakened trees are the third, and the most expensive. A pine with a lifted root plate or a cracked trunk can't be climbed — the structure a climber would be tying into is the part that failed. That forces the job onto a lift or a crane, and machine time is the single largest line item on any removal.`,
        },
        {
          heading: `${PRICING.largePine.withObstacles} territory: when Onslow County access removes every option`,
          text: `Onslow County prices reflect access more than size, because the properties here are laid out in ways that limit what equipment can reach the tree — and the ${PRICING.largePine.withObstacles} band is what it looks like when access has removed every option at once.\n\nBase-adjacent lots around Camp Lejeune are the clearest case. The housing is dense, the setbacks between structures are narrow, and the backyards are fenced — which means the tree gets removed through a gate or not at all. That rules out cranes on a large share of jobs and rules in the spider lift, which collapses to about 36 inches, crosses a lawn on rubber tracks without rutting it, and still reaches the canopy. It is slower per limb than a crane, but it is the difference between a clean removal and a job no one will quote.\n\nMilitary scheduling is the other factor. PCS timelines are fixed dates, not preferences, and work that has to land inside a two- or three-week window before a handover can't be moved to a cheaper slot in the calendar. When you have the flexibility to book ahead, use it — the same tree, same crew, same equipment, booked in a normal week rather than against a report date, is a straightforwardly cheaper job.`,
        },
      ]}
      caseStudy={
        <>
          <PriceReconciliation />
          {/* Renders nothing until the owner publishes 3+ rows in
              src/data/jobs.ts. That is deliberate — see the file header. */}
          <CompletedJobsTable />
        </>
      }
      faqs={[
        {
          question: 'How much does tree removal cost in Jacksonville, NC?',
          answer: `Tree removal in Jacksonville, NC starts at an ${PRICING.removal.minimum} minimum. Most removals run ${PRICING.removal.most}. Large or hazardous trees run ${PRICING.removal.large}, a tree beside or leaning over the house runs ${PRICING.nearHouse.besideStructure}, and exceptional jobs with tight access, severe hazards or complex rigging start at ${PRICING.removal.exceptional}. These are our own bands for our crew and equipment in Onslow County, not a national average.`,
        },
        {
          question: 'What is the average cost to remove a large pine tree in NC?',
          answer: `For a loblolly pine of 80 feet or more, an open yard with room to work and somewhere to drop it runs ${PRICING.largePine.openYard}. The same pine leaning over the house runs ${PRICING.largePine.leaningOverHouse}, because nothing can be dropped and every piece comes down on a rope. Add obstacles — sheds, fences, power lines, no crane position — and it is ${PRICING.largePine.withObstacles}. A notably thicker pine — an ${PRICING.stories.sameTreeExample.size} — is about ${PRICING.stories.sameTreeExample.openYard} even in an open yard, because diameter rather than height decides how many picks the trunk takes.`,
        },
        {
          question: 'How much does it cost to remove a tree close to a house?',
          answer: `It depends on size once position has already ruled out dropping the tree. A small tree near the house is typically ${PRICING.nearHouse.typical} including the stump. A mature tree near the house runs ${PRICING.nearHouse.mature}. A tree hard against the house or leaning over it runs ${PRICING.nearHouse.besideStructure}, because every piece has to be rigged down over a roof. If the tree is already on the structure, that is emergency work and runs ${PRICING.emergency.structure}.`,
        },
        {
          question: 'What should be included in a tree removal estimate?',
          answer:
            'Seven things, itemized, in writing before any work starts: mobilization and demobilization as its own line; equipment by the hour for the lift, crane and loader; crew labour broken out by role and hours rather than one lump; debris hauling counted and priced by the load; disposal fees separate from hauling; stump handling as its own line; and on insurance jobs the split between emergency mitigation and debris removal, because the tree-debris sublimit on a homeowner policy generally applies to the debris side and generally does not apply to the mitigation side.',
        },
        {
          question: 'Why can the same tree be two different prices?',
          answer: `Because we price a crew-day plus the equipment that crew needs, not the tree. A removal that finishes inside one crew-day prices one way; the same removal that runs four hours into a second morning costs another mobilization, another day of lift time and another day of wages. An ${PRICING.stories.sameTreeExample.size} is about ${PRICING.stories.sameTreeExample.openYard} in an open yard and ${PRICING.stories.sameTreeExample.withObstacles} once the house, fences, sheds and power lines force sectioning and rigging. The tree did not change — the obstacles did.`,
        },
        {
          question: 'Can you give me a price from a photo?',
          answer: `For a small pine, yes — one that is ${PRICING.photoEstimate.smallPineSize} runs roughly ${PRICING.photoEstimate.smallPine}. For anything big or near a structure the honest answer is ${PRICING.photoEstimate.nearStructureFloor} and we need to come look. From a photo you cannot tell a 28-inch, 75-foot pine from a 34-inch, 95-foot pine, and that difference is the difference between a lift and a climb, and between one day and two.`,
        },
        {
          question: 'How long does a tree removal take?',
          answer:
            'A small tree in an open yard is about three hours start to finish, including stump grinding and cleanup. A large pine near a house takes a full day to cut and haul, with stump grinding at the end of that day or the next morning — call it a day and a half, up to two. Crane jobs run about the same total time; the crane buys reach in tight quarters rather than speed.',
        },
        {
          question: 'Does insurance cover tree removal?',
          answer:
            'Insurance may cover removal if the tree caused damage to a structure. We bill your insurance directly and work with your adjuster. Ask for the estimate split between emergency mitigation and debris removal — the tree-debris sublimit generally applies to the debris side and generally does not apply to the mitigation side.',
        },
      ]}
      finalCta={{
        heading: 'Get a Written Quote Before Any Work Starts',
        text: 'We walk the site, price the crew-days and the equipment it actually needs, and put the number in writing. Free estimates in Jacksonville and surrounding areas.',
        buttonText: 'Call Now',
      }}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
    />
  );
}
