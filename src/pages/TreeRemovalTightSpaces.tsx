import ServicePage from './ServicePage';
import { PrecisionRemoval } from '@/components/sections/PrecisionRemoval';

export default function TreeRemovalTightSpaces() {
  return (
    <>
      <ServicePage
        title="Tree Removal in Tight Spaces — Jacksonville, NC"
        subtitle="Backyard Trees, Narrow Lots, Pool Areas, and Fenced Properties"
        slug="tree-removal-tight-spaces-jacksonville-nc"
        description="Tight-space tree removal in Jacksonville, NC: backyards, fenced lots, near pools and septic. Spider lift access, no lawn damage."
        ctaText="Call Now for a Free Estimate"
        quickAnswer="If a bucket truck or crane can't reach your tree, we can. Godhans Tree Company specializes in tight-space tree removal across Jacksonville — backyards, narrow side yards, pool decks, septic fields, and fully fenced lots — using a tracked spider lift and proper rigging instead of heavy equipment on your lawn."
        sections={[
          {
            heading: "Why Tight Spaces Are Different",
            text: "On an open lot, a tree can be felled and limbed where it lands. In a backyard with a pool, a fence on three sides, and a neighbor's window 15 feet away, that's not an option.\n\nTight-space removal is slower, more technical, and requires the right equipment. Climbers rig limbs down by rope. Lifts position the operator above each cut. Nothing is dropped without control."
          },
          {
            heading: "Tight-Space Scenarios We Handle",
            text: "• Backyards with no driveway access\n• Trees behind 6-foot privacy fences\n• Removals near in-ground pools and concrete patios\n• Trees over septic tanks and drain fields\n• Side yards between houses (10 feet or less)\n• Trees against sheds, garages, and outbuildings\n• Properties with new sod or recent landscaping"
          },
          {
            heading: "What You Get With Godhans",
            text: "✔ Tracked spider lift — fits through 4-foot gates\n✔ No bucket truck on the lawn\n✔ Plywood mats over irrigation and septic\n✔ Climbers and rigging gear for every cut\n✔ Full cleanup — debris hauled off, yard raked\n✔ Licensed, insured, and locally owned\n✔ Free on-site estimates, no pressure"
          }
        ]}
        faqs={[
          { question: "Can you remove a tree in a fully fenced backyard?", answer: "Yes. Our spider lift fits through most standard gates (about 36 inches wide collapsed). If the gate is too narrow, we can climb and rope down. We'll confirm during the free estimate." },
          { question: "Will you damage my pool deck or pavers?", answer: "No. The spider lift weighs a fraction of a bucket truck and runs on rubber tracks. On hard surfaces we lay protective matting. Pools and pavers stay intact." },
          { question: "How much extra does tight-space removal cost?", answer: "Tight-access jobs typically run 20–40% more than open-lot removals because they take longer and require more rigging. We'll give you exact pricing during the free on-site estimate." }
        ]}
        relatedServices={[
          { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
          { label: 'Spider Lift Tree Removal', href: '/spider-lift-tree-removal-jacksonville-nc' },
          { label: 'Tree Removal Near House', href: '/tree-removal-near-house-jacksonville-nc' },
          { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
        ]}
        finalCta={{
          heading: "Got a Tree in a Tight Spot?",
          text: "We do this every week in Jacksonville. Free on-site estimate — we'll show you the access plan before any work begins.",
          buttonText: "Call for Free Estimate"
        }}
      />
      <div className="bg-black">
        <PrecisionRemoval variant="dark" />
      </div>
    </>
  );
}
