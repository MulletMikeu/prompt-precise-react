import ServicePage from './ServicePage';
import { PrecisionRemoval } from '@/components/sections/PrecisionRemoval';
import { BUSINESS } from '@/data/siteData';

export default function TreeRemovalNearHouse() {
  return (
    <>
      <ServicePage
        title="Tree Removal Near House in Jacksonville, NC"
        subtitle="Safe Removal of Trees Close to Your Home, Roof, and Power Lines"
        slug="tree-removal-near-house-jacksonville-nc"
        description="Tree removal near houses in Jacksonville, NC. Safe rigging, spider lift access, and full insurance for trees over roofs and power lines."
        ctaText="Call Now for a Free Estimate"
        quickAnswer="Trees within 20 feet of a house cannot be free-dropped. Every limb has to be rigged down by rope or lowered by lift. Godhans Tree Company specializes in tight, near-structure removals in Jacksonville using spider lifts, proper rigging, and full liability insurance — protecting your roof, gutters, deck, and landscaping."
        sections={[
          {
            heading: "What Makes Near-House Removals Risky",
            text: "Most homeowner accidents in tree work happen because someone underestimated a fall zone. A 60-foot pine has a fall zone of 60+ feet — your house, the neighbor's house, the power drop, and the fence are all in play.\n\nProfessionals don't take that risk. We climb, rig, and lower every section by rope, or use a spider lift to bring the tree down piece by piece. Slower, but zero damage."
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
          { question: "Can you remove a tree leaning toward my house?", answer: "Yes. A leaning tree near a structure is one of the most common calls we get. We use rigging and a spider lift to take it down piece by piece, against the lean if necessary. Free on-site estimate." },
          { question: "Are you insured if something goes wrong?", answer: "Fully. We carry general liability and workers' comp, and we'll provide a current certificate of insurance on request before any work starts." },
          { question: "What if a tree is already on my house?", answer: `Call ${BUSINESS.phone} anytime — we offer 24/7 emergency response for trees on homes, garages, and vehicles in Jacksonville and surrounding areas.` }
        ]}
        relatedServices={[
          { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
          { label: 'Spider Lift Tree Removal', href: '/spider-lift-tree-removal-jacksonville-nc' },
          { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
          { label: 'Storm Damage Guide', href: '/storm-damage-trees-guide' },
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
