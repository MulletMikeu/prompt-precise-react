import ServicePage from './ServicePage';
import CompletedJobsTable from '@/components/sections/CompletedJobsTable';
import PriceReconciliation from '@/components/sections/PriceReconciliation';
import RemovalPriceTable from '@/components/sections/RemovalPriceTable';
import { PRICING } from '../data/siteData';

/**
 * The date in the visible byline. This is the date the page actually shipped to
 * production, taken from the merge — NOT today's date computed at build time
 * (see the note in <AuthorByline/> on why the date is never computed), and not
 * a placeholder. If this page is substantially revised again, move it then and
 * not otherwise: a byline that restamps itself on every deploy is a freshness
 * claim we did not earn.
 */
const SHIP_DATE = '2026-10-05';

/** Shorthands — the pine ladder is referenced constantly below. */
const PINE = PRICING.largePine.ladder;
const WHY = PRICING.largePine.whyDouble;

/**
 * /tree-removal-cost-north-carolina — the TREATMENT arm of the A/B test against
 * /stump-grinding-jacksonville-nc.
 *
 * Three rules this page lives under:
 *
 *  1. EVERY FIGURE COMES FROM PRICING. There is not one hardcoded dollar amount
 *     below — all of them interpolate from siteData. No national averages, no
 *     "industry standard" numbers, no invented jobs, customers or quotes. The
 *     jobs block reads real, redacted jobs from src/data/jobs.ts.
 *
 *  2. NO STUMP-ONLY PRICES. Stump pricing is the control arm's claim and prices
 *     on a different basis (measured per-inch work, not a crew-day). Bundled
 *     totals that say "stump grinding included" are fine — the pine tier-2
 *     figure and two of the jobs are exactly that. A stump-ONLY figure is not:
 *     PRICING.stump is deliberately never imported here.
 *
 *  3. NO SECTION RESTATES ANOTHER. The page carries a price table, a pine
 *     ladder, a reconciliation block and a jobs table, all of which touch the
 *     same bands. Each has to earn its place by adding what the others do not —
 *     the table gives the shape, the ladder gives the sizes, the reconciliation
 *     gives the mechanism, the jobs give the proof. Prose that merely re-listed
 *     the bands was cut; it was costing real page weight for nothing.
 *
 * Every H2 leads with its figure, because the figure is what the reader came
 * for and a heading that makes them read a sentence to find it has wasted the
 * only glance they were going to give it.
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
        // Section 1 (the ladder) ends on access and the lift.
        1: {
          href: '/spider-lift-tree-removal-jacksonville-nc',
          label: 'How spider lift access changes what a backyard removal costs',
        },
        // Section 3 (close to the house) has a whole page behind it.
        3: {
          href: '/tree-removal-near-house-jacksonville-nc',
          label: 'Tree removal near a house: what changes when position sets the price',
        },
      }}
      sections={[
        /* --- q-011: How much does tree removal cost in Jacksonville, NC? --- */
        {
          heading: `${PRICING.removal.minimum} minimum, ${PRICING.removal.most} for most removals in Jacksonville, NC`,
          text: `That is the direct answer. Tree removal in Jacksonville and the rest of Onslow County starts at an ${PRICING.removal.minimum} minimum, and most removals we do land between ${PRICING.removal.most}. The table above is every band we quote. These are our numbers for our crew in this county — not a state or national average.\n\nThe ${PRICING.removal.minimum} is a floor rather than a starting tier. ${PRICING.stories.mobilization}`,
        },

        /* ------- q-012: Average cost to remove a large pine tree in NC ------ */
        {
          heading: `${PINE.tier1.price}, about ${PINE.tier2.price}, ${PINE.tier3.price}: the three pines we actually remove`,
          text: `Loblolly pine is the tree we remove most in Onslow County, so it prices on its own rather than disappearing into a general range. There are three tiers, and it is diameter — not height on its own — that decides which one you are in.\n\nOPEN YARD — ${PINE.tier1.size}, ${PINE.tier1.site}: ${PINE.tier1.price}. ${PINE.tier1.note}\n\nBEHIND THE HOUSE — ${PINE.tier2.size}, ${PINE.tier2.site}: about ${PINE.tier2.price}, stump grinding included. Bring that same size closer in and it sits in the ${PRICING.nearHouse.besideStructure} beside-the-structure band instead.\n\nLEANING OVER THE HOUSE WITH OBSTACLES — ${PINE.tier3.size}, ${PINE.tier3.site}: ${PINE.tier3.price}. ${PINE.tier3.note} One of ours was a 100 foot pine crammed in behind two sheds and fences, in an almost impossible spot to work — that was a ${PINE.tier3.price} removal.\n\nWhat pushes a job into that top tier here is usually access. Base-adjacent lots around Camp Lejeune are dense, the setbacks are narrow and the backyards are fenced, so the tree leaves through a gate or it does not leave — which rules out a crane on a large share of jobs and rules in the spider lift, which collapses to about 36 inches and crosses a lawn on rubber tracks without rutting it. Coastal ground adds to it: sandy soil holds water at depth, and after a wet week it will not carry a loaded truck, so the crew mats the ground or works from the street with more rigging. A storm-weakened pine cannot be climbed at all, because the structure a climber would tie into is the part that failed.\n\nIf you have the flexibility, booking in a calm stretch rather than the week after a named storm, or against a fixed PCS date, is straightforwardly cheaper for the same tree.`,
        },

        /* ------------- Why tier 2 costs almost double tier 1 ---------------- */
        {
          heading: `${PINE.tier1.price} to ${PRICING.nearHouse.besideStructure}: why a 90 foot pine costs almost double an 80 foot pine`,
          text: `From a photo you cannot tell a 75–80 foot, 30 inch pine from a 90 foot, 38 inch pine. In person the difference is significant. Here is what actually changes between them:\n\nTHE SAW. Past ${WHY.sawThreshold} in diameter we bring out a ${WHY.sawBig} saw to cut across the trunk. A 30 inch tree can be done with ${WHY.sawSmall} saw.\n\nTHE LOGS. A 70 foot, 28 inch pine gives ${WHY.tier1Logs}, ${WHY.tier1Loads} on our single-axle log truck. A 90 foot, 36–38 inch pine is ${WHY.tier2Logs}, and the heavy bottom half almost always needs a second log-truck run.\n\nTHE DEBRIS. A bigger tree carries more limb structure, and all of it has to be processed and hauled.\n\nTHE REACH. Most bucket trucks reach only ${WHY.bucketReach}. We run a ${WHY.ourLift} lift. Across the whole market a 70–80 foot tree is a different ball game than a 90–100 foot tree.\n\nThe most common surprise is exactly this one: someone hoping for a ${PINE.tier1.price} tree, which turns out to be a 90 footer 10 to 12 inches bigger around, and that pushes it to ${PRICING.nearHouse.besideStructure} — almost double. It is not the news anybody wants, but we try to be fair with our prices.`,
        },

        /* --- q-018: How much to remove a tree close to a house? ------------- */
        {
          heading: `${PRICING.nearHouse.typical} to ${PRICING.nearHouse.besideStructure} when the tree is close to the house`,
          text: `"Close to the house" is three different jobs, and the gap between them is wide enough that one number would be useless.\n\nSMALL TREE NEAR THE HOUSE — ${PRICING.nearHouse.typical} typical, stump included. Close enough that it cannot be dropped, small enough that the pieces are hand-liftable and the whole thing is over well inside a day.\n\nMATURE TREE NEAR THE HOUSE — ${PRICING.nearHouse.mature}. Now the sections are heavy enough to need rigging rather than hands, and the day fills up.\n\nHARD AGAINST, OR LEANING OVER, THE HOUSE — ${PRICING.nearHouse.besideStructure}. This is the band where position has taken over from size completely.\n\n${PRICING.stories.position}`,
        },

        /* --- q-029: What should be included in a tree removal estimate? ---- */
        {
          heading: '7 line items a real estimate itemizes — and a written quote before work starts',
          text: `Ask for the estimate in writing and ask for it itemized. This is how ours are actually built, line by line, straight off the invoice structure:\n\n1. MOBILIZATION AND DEMOBILIZATION — getting the crew and the machines to you and away again, as its own line. This is the biggest fixed cost on any job and it is why there is a minimum at all.\n\n2. EQUIPMENT BY THE HOUR — the lift, the crane, the loader, each at its own hourly rate for the hours it is actually running.\n\n3. CREW LABOUR BY ROLE AND HOURS — lead arborist, safety supervisor, equipment operator, ground crew, each at their own rate for their own hours. Not "labor: one lump".\n\n4. DEBRIS HAULING BY THE LOAD — counted in loads, priced per load.\n\n5. DISPOSAL FEES — what the landfill or the yard charges to take it, separately from what it costs us to haul it there.\n\n6. STUMP HANDLING — the stump is its own decision and its own line, whether that is grinding it, cutting it flush, or leaving it.\n\n7. ON INSURANCE JOBS, THE SPLIT — emergency mitigation on one side, debris removal on the other. That split is not bookkeeping: the small tree-debris sublimit on a homeowner's policy generally applies to the debris side and generally does not apply to the mitigation side, and an estimate that lumps them together makes it impossible for your adjuster to see which is which.\n\nAnd the part that matters more than any single line: a written quote before any work starts. If a number was only ever said out loud, it is not a quote.`,
        },

        /* ---------------- Photo ballpark + the honest limit ---------------- */
        {
          heading: `${PRICING.photoEstimate.smallPine} from a photo for a small pine — above that we come and look`,
          text: `People send us photos and ask for a ballpark, and for the small end we will give one. A pine that is ${PRICING.photoEstimate.smallPineSize} runs roughly ${PRICING.photoEstimate.smallPine}.\n\nIf it is big and anywhere near a structure, the honest ballpark is ${PRICING.photoEstimate.nearStructureFloor} — and we need to come look. ${PRICING.stories.photoLimit}`,
        },

        /* ----------------------------- Emergency ----------------------------- */
        {
          heading: `${PRICING.emergency.structure} when the tree is already on the structure`,
          text: `A tree already on a house prices separately from everything above, and the reason is in the table: almost none of the cost is the tree. Our first job is stopping the damage — getting the tree off and tarping the opening, because water getting in is what turns a bad day into a major repair.\n\nWe bill your insurance directly and work with your adjuster, so you are not paying the whole job up front and waiting for reimbursement. This is where the mitigation-versus-debris split in an itemized estimate stops being paperwork and starts being money.`,
        },
      ]}
      caseStudy={
        <>
          <PriceReconciliation />
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
          answer: `Diameter decides it more than height, and there are three tiers. ${PINE.tier1.size}, ${PINE.tier1.site}: ${PINE.tier1.price}, and we do these quite frequently. ${PINE.tier2.size}, ${PINE.tier2.site}: about ${PINE.tier2.price} with stump grinding included. ${PINE.tier3.size}, ${PINE.tier3.site}: ${PINE.tier3.price}. Bring the middle size closer to the house and it sits in the ${PRICING.nearHouse.besideStructure} band.`,
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
          question: 'Why does a 90 foot pine cost almost double an 80 foot pine?',
          answer: `Because past ${WHY.sawThreshold} in diameter the job changes tools and trips. A 30 inch trunk can be cut with ${WHY.sawSmall} saw; past that we bring out a ${WHY.sawBig} one. A 70 foot, 28 inch pine is ${WHY.tier1Logs} and ${WHY.tier1Loads} on our single-axle log truck, while a 90 foot, 36–38 inch pine is ${WHY.tier2Logs} and the heavy bottom half needs a second run. There is more limb structure to haul, and most bucket trucks only reach ${WHY.bucketReach} where we run a ${WHY.ourLift} lift.`,
        },
        {
          question: 'Does insurance cover tree removal?',
          answer:
            'Insurance may cover removal if the tree caused damage to a structure. We bill your insurance directly and work with your adjuster, so you are not paying the whole job up front and waiting for reimbursement. Ask for the estimate split between emergency mitigation and debris removal — the tree-debris sublimit generally applies to the debris side and generally does not apply to the mitigation side. Where a standing trunk is left badly compromised, we make the case to the adjuster for removing the rest of the tree, though that depends on the policy and the adjuster.',
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
