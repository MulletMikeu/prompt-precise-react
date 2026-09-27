import ServicePage from './ServicePage';
import { PrecisionRemoval } from '@/components/sections/PrecisionRemoval';
import { BUSINESS, PRICING } from '@/data/siteData';

export default function TreeRemovalNearHouse() {
  return (
    <>
      <ServicePage
        title="Tree Removal Near House in Jacksonville, NC"
        metaTitle="Tree Removal Near a House in Jacksonville, NC"
        subtitle="Safe Removal of Trees Close to Your Home, Roof, and Power Lines"
        slug="tree-removal-near-house-jacksonville-nc"
        description="Tree removal near houses in Jacksonville, NC. Safe rigging, spider lift access, and full insurance for trees over roofs and power lines."
        ctaText="Call Now for a Free Estimate"
        quickAnswer="Trees within 20 feet of a house cannot be free-dropped. Every limb has to be rigged down by rope or lowered by lift. Godhans Tree Company specializes in tight, near-structure removals in Jacksonville using spider lifts, proper rigging, and full liability insurance — protecting your roof, gutters, deck, and landscaping."
        /* Indices: 0 risky · 1 cost · 2 access · 3 how-we-handle · 4 why-trust.
           Re-check these if a section is added above. */
        sectionLinks={{
          1: { href: "/tree-removal-cost-north-carolina", label: "Full tree removal cost breakdown for North Carolina" },
          2: { href: "/spider-lift-tree-removal-jacksonville-nc", label: "How the spider lift reaches trunks a truck cannot" },
          3: { href: "/tree-removal-tight-spaces-jacksonville-nc", label: "Tree removal in tight spaces: equipment and techniques" },
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
            heading: "Getting to the Tree: Sand, Clay and Cul-de-Sacs",
            text: "How we reach the trunk decides the price, and around here that comes down to which side of the county you are on.\n\nOur shop sits on Gum Branch Road, which is roughly where the ground changes. On the coastal side — Sneads Ferry, Swansboro, Hubert and about half of Jacksonville — it is sandy loam. A yard can look perfectly solid and then give way under a loaded machine, and grass tears easily when you turn heavy logs on it. We say that at the quote rather than after, and we offer ground mats for a small added cost where the route crosses lawn you care about.\n\nInland, toward Richlands, it is regular dirt going to hard-pack clay, and on those jobs there is usually no grass lost at all.\n\nThen there is access in the ordinary sense. Jacksonville has a lot of tight cul-de-sacs — Brynn Marr is the one we think of first — where the job is won or lost on where the truck, the trailer and the chip truck can physically sit. We work that out during the quote, not on the morning of the job."
          },
          {
            heading: "How We Handle Trees Right Next to Your Home",
            text: "1. On-site assessment — we walk the tree, identify lean, decay, and hazards\n2. Rigging plan — every limb is roped, lowered, and stacked\n3. Spider lift access for high cuts (when needed)\n4. Power line coordination if the drop is involved\n5. Cleanup — debris hauled, lawn raked, no nails or sawdust left behind"
          },
          {
            heading: "Why Homeowners Trust Godhans for This Work",
            text: "✔ Fully insured — every machine individually covered\n✔ Certificate of insurance available before work begins\n✔ Spider lift for tight access — no truck on the lawn\n✔ Years of experience with near-structure removals\n✔ Free, no-pressure on-site estimates\n✔ Same-day storm response if the tree is already on the house"
          }
        ]}
        faqs={[
          { question: "How much does it cost to remove a tree next to a house?", answer: `Position matters more than size. A straightforward near-house removal with room to work typically runs about ${PRICING.nearHouse.typical} including the stump; a mature tree of 40 to 65 feet close to the house runs ${PRICING.nearHouse.mature}; and a tree hard against the structure or tangled with the service drop runs ${PRICING.nearHouse.besideStructure}. What moves a job between bands is whether we can get a lift or loader to the trunk, and what is directly underneath it.`, link: { href: "/tree-removal-cost-north-carolina", label: "Full cost breakdown for North Carolina" } },
          { question: "Can you remove a tree leaning toward my house?", answer: "Yes. A leaning tree near a structure is one of the most common calls we get. We use rigging and a spider lift to take it down piece by piece, against the lean if necessary. Free on-site estimate." },
          { question: "Are you insured if something goes wrong?", answer: "Fully. We carry general liability and workers' comp, and we'll provide a current certificate of insurance on request before any work starts." },
          { question: "What if a tree is already on my house?", answer: `Call ${BUSINESS.phone} anytime — we offer 24/7 emergency response for trees on homes, garages, and vehicles in Jacksonville and surrounding areas.` }
        ]}
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
