import ServicePage from './ServicePage';
import { PrecisionRemoval } from '@/components/sections/PrecisionRemoval';
import { BUSINESS, PRICING, YEAR_FOUNDED_LOCAL } from '@/data/siteData';
import {
  TOWABLE_OVER_SHED,
  TOWABLE_BEHIND_FENCE,
  TOWABLE_OVER_FENCE,
  TRACKED_OUTRIGGERS,
  BOOM_OVER_TARP,
  TARPED_ROOF,
} from '@/data/batch2Photos';

export default function TreeRemovalNearHouse() {
  return (
    <>
      <ServicePage
        title="Tree Removal Near House in Jacksonville, NC"
        metaTitle="Tree Removal Near a House in Jacksonville, NC"
        subtitle="Safe Removal of Trees Close to Your Home, Roof, and Power Lines"
        slug="tree-removal-near-house-jacksonville-nc"
        faqPosition="early"
        authorUpdated="2026-09-28"
        description="Tree removal near houses in Jacksonville, NC. Safe rigging, spider lift access, and full insurance for trees over roofs and power lines."
        ctaText="Call Now for a Free Estimate"
        quickAnswer="Trees within 20 feet of a house cannot be free-dropped. Every limb has to be rigged down by rope or lowered by lift. Godhans Tree Company specializes in tight, near-structure removals in Jacksonville using spider lifts, proper rigging, and full liability insurance — protecting your roof, gutters, deck, and landscaping."
        /* Indices: 0 risky · 1 cost · 2 tight-access · 3 access-ground ·
           4 how-we-handle · 5 why-trust. Section 2 arrived with the
           /tree-removal-tight-spaces-jacksonville-nc consolidation, which pushed
           everything from the old 2 down by one. Re-check if a section moves. */
        sectionLinks={{
          1: { href: "/tree-removal-cost-north-carolina", label: "Full tree removal cost breakdown for North Carolina" },
          3: { href: "/spider-lift-tree-removal-jacksonville-nc", label: "How the spider lift reaches trunks a truck cannot" },
        }}
        sections={[
          {
            heading: "What Makes Near-House Removals Risky",
            text: "Most homeowner accidents in tree work happen because someone underestimated a fall zone. A 60-foot pine has a fall zone of 60+ feet — your house, the neighbor's house, the power drop, and the fence are all in play.\n\nProfessionals don't take that risk. We climb, rig, and lower every section by rope, or use a spider lift to bring the tree down piece by piece. Slower, but zero damage."
          },
          {
            heading: "What a Near-House Removal Costs",
            text: `Position matters more than size. That is the whole thing, and it is why a quote over the phone for this work is a guess. A 70-foot pine standing in an open yard drops in one piece; the same tree three feet off your bedroom wall comes down in sections on ropes, and that is the difference in the number.\n\nRoughly where near-house removals land:\n\n• A straightforward near-house removal — a mid-size tree, room to work, nothing overhead — typically comes in around ${PRICING.nearHouse.typical}, and that includes grinding the stump.\n\n• A mature tree, call it 40 to 65 feet, close to the house: ${PRICING.nearHouse.mature}. More rigging, more pieces, more time in the air.\n\n• A tree hard against the structure or tangled with the service drop: ${PRICING.nearHouse.besideStructure}. At that point every piece is roped, lowered and hand-carried, and if the lines are involved the utility has to be sequenced in before we start.\n\nTwo things push a job from one band to the next more than anything else: whether we can get a lift or a loader to the trunk, and what is directly underneath. A tree over a patio, a pool, a septic field or a conservatory is a different job from the same tree over open grass.\n\nWe measure and quote on site, in writing, before anything is cut. If the number moves once we can see the whole tree, you hear it before we touch it.`
          },
          {
            /**
             * Merged in from /tree-removal-tight-spaces-jacksonville-nc, which
             * 301s here. That page shared 33% of its 5-grams with this one and
             * had no prices; everything specific it carried that this page did
             * not is in this section: the 20-40% tight-access premium, the
             * scenario list with its measurements (6-foot fences, side yards of
             * 10 feet or less, a neighbour's window 15 feet away), and the
             * 4-foot gate figure.
             */
            heading: "How much more does a tight-access removal cost?",
            text: "Tight-access jobs typically run 20–40% more than open-lot removals, because they take longer and need more rigging. On an open lot a tree can be felled and limbed where it lands. In a backyard with a pool, a fence on three sides and a neighbor's window 15 feet away, that is not an option: climbers rig limbs down by rope, the lift positions the operator above each cut, and nothing is dropped without control.\n\nThe situations that put a job in this band:\n\n• Backyards with no driveway access\n• Trees behind 6-foot privacy fences\n• Removals near in-ground pools and concrete patios\n• Trees over septic tanks and drain fields\n• Side yards between houses, 10 feet or less\n• Trees against sheds, garages, and outbuildings\n• Properties with new sod or recent landscaping\n\nThe tracked spider lift is what makes most of these possible: it fits through a 4-foot gate, runs on rubber tracks rather than tires, and takes plywood matting over irrigation and septic. We will show you the access plan at the estimate, before any work begins."
          },
          {
            heading: "Getting to the Tree: Sand, Clay and Cul-de-Sacs",
            text: "How we reach the trunk decides the price, and around here that comes down to which side of the county you are on.\n\nOur shop sits on Gum Branch Road, which is roughly where the ground changes. On the coastal side — Sneads Ferry, Swansboro, Hubert and about half of Jacksonville — it is sandy loam. A yard can look perfectly solid and then give way under a loaded machine, and grass tears easily when you turn heavy logs on it. We say that at the quote rather than after, and we offer ground mats for a small added cost where the route crosses lawn you care about.\n\nInland, toward Richlands, it is regular dirt going to hard-pack clay, and on those jobs there is usually no grass lost at all.\n\nThen there is access in the ordinary sense. Jacksonville has a lot of tight cul-de-sacs — Brynn Marr is the one we think of first — where the job is won or lost on where the truck and the trailer can physically sit. We work that out during the quote, not on the morning of the job."
          },
          {
            heading: "How We Handle Trees Right Next to Your Home",
            text: "1. On-site assessment — we walk the tree, identify lean, decay, and hazards\n2. Rigging plan — every limb is roped, lowered, and stacked\n3. Spider lift access for high cuts (when needed)\n4. Power line coordination if the drop is involved\n5. Cleanup — debris hauled, lawn raked, no nails or sawdust left behind"
          },
          {
            heading: "Why Homeowners Trust Godhans for This Work",
            text: `✔ Fully insured — every machine individually covered\n✔ Certificate of insurance available before work begins\n✔ Spider lift for tight access — no truck on the lawn\n✔ Near-structure removals in Onslow County since ${YEAR_FOUNDED_LOCAL}\n✔ Free, no-pressure on-site estimates\n✔ Same-day storm response if the tree is already on the house`
          }
        ]}
        faqs={[
          { question: "How much does it cost to remove a tree next to a house?", answer: `Position matters more than size. A straightforward near-house removal with room to work typically runs about ${PRICING.nearHouse.typical} including the stump; a mature tree of 40 to 65 feet close to the house runs ${PRICING.nearHouse.mature}; and a tree hard against the structure or tangled with the service drop runs ${PRICING.nearHouse.besideStructure}. What moves a job between bands is whether we can get a lift or loader to the trunk, and what is directly underneath it.`, link: { href: "/tree-removal-cost-north-carolina", label: "Full cost breakdown for North Carolina" } },
          { question: "Can you remove a tree leaning toward my house?", answer: "Yes. A leaning tree near a structure is one of the most common calls we get. We use rigging and a spider lift to take it down piece by piece, against the lean if necessary. Free on-site estimate." },
          { question: "Are you insured if something goes wrong?", answer: "Fully. We carry general liability and workers' comp, and we'll provide a current certificate of insurance on request before any work starts." },
          { question: "What if a tree is already on my house?", answer: `Call ${BUSINESS.phone} anytime — we offer 24/7 emergency response for trees on homes, garages, and vehicles in Jacksonville and surrounding areas.` },
          // Both carried over from the consolidated tight-spaces page.
          { question: "Can you remove a tree in a fully fenced backyard?", answer: "Yes. Our spider lift fits through most standard gates — about 36 inches wide collapsed, against a standard 4-foot gate. If the gate is too narrow, we climb and rope down instead. We confirm gate width during the free estimate." },
          { question: "Will you damage my pool deck or pavers?", answer: "No. The spider lift weighs a fraction of a bucket truck and runs on rubber tracks. On hard surfaces we lay protective matting. Pools and pavers stay intact." },
          {
            question: "The tree is on the boundary, or we would need to work from next door. Is that a problem?",
            answer: "Usually not. We will work from a neighbor's yard with their permission — and only with it, since entering another's land without consent is what North Carolina's treble-damages statute attaches to. In practice the neighbor almost always says yes, because rigging into open ground is safer for their property than lowering sections over a roof. On boundary trees we are also happy to talk to both households and split the cost: one crew making one trip is genuinely cheaper than two jobs, because mobilisation is the biggest fixed cost on any job.",
            link: { href: "/neighbor-tree-problems-jacksonville-nc", label: "Neighbor tree problems: who can cut, who pays, what to do" }
          }
        ]}
        /*
         * Batch 2 item 9. Two jobs, in the order the page argues them: the
         * fence-and-yard access problem first, then the tree that was already
         * on the house. The tarped roof is doing real work here — it is the
         * only picture on the page of the outcome the whole rigging argument
         * exists to prevent, and of the tarping we say we do first.
         */
        gallery={{
          heading: 'Working over fences, pools and roofs',
          images: [
            {
              ...TOWABLE_OVER_SHED,
              alt: 'Green towable lift with an operator in the basket, working a tree above a backyard shed and fence.',
              caption: 'Operator in the basket above the shed — every piece roped, nothing dropped.',
            },
            {
              ...TOWABLE_BEHIND_FENCE,
              alt: 'The lift set up behind a metal fence beside a large oak, with water behind the property.',
              caption: 'Set up outside the fence line, reaching in. No machine on the lawn at all.',
            },
            {
              ...TOWABLE_OVER_FENCE,
              alt: 'The lift reaching over a metal fence into a large oak standing between two houses.',
              caption: 'Fifty feet of outreach is what lets the machine stay here and the basket go there.',
            },
            {
              ...TRACKED_OUTRIGGERS,
              alt: 'Red tracked lift set down on its four outriggers on bare ground tight against the side of a house.',
              caption: 'Four outriggers, hard against the house. This is the footprint a crane cannot match.',
            },
            {
              ...BOOM_OVER_TARP,
              alt: 'Looking down the lift boom to a blue tarp covering the damaged section of roof below.',
              caption: 'Looking down the boom at the tarp. The tarp goes on before the tree is finished.',
            },
            {
              ...TARPED_ROOF,
              alt: 'A tarped roof seen from the lift basket, with the boom rigged clear of the shingles.',
              caption: 'Water getting in is what turns a bad day into a major repair, so this is job one.',
            },
          ],
        }}
        relatedServices={[
          { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
          { label: 'Spider Lift Tree Removal', href: '/spider-lift-tree-removal-jacksonville-nc' },
          { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
          { label: 'Residential Tree Service', href: '/residential-tree-service-jacksonville-nc' },
          { label: 'Resistograph Tree Testing', href: '/resistograph-tree-testing-jacksonville-nc' },
        ]}
        finalCta={{
          heading: "Tree Too Close to Your House?",
          text: "Don't wait for a storm. Get a free on-site estimate from Godhans — we'll tell you honestly whether it needs to come down and how we'll do it safely.",
          buttonText: "Call for Free Estimate"
        }}
      />
      <div className="bg-black">
        <PrecisionRemoval variant="dark" />
      </div>
    </>
  );
}
