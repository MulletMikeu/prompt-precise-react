import ServicePage from './ServicePage';
import { PrecisionRemoval } from '@/components/sections/PrecisionRemoval';

export default function SpiderLiftRemoval() {
  return (
    <>
      <ServicePage
        title="Spider Lift Tree Removal in Jacksonville, NC"
        subtitle="Reach 50+ Feet Without Damaging Your Lawn or Hardscape"
        slug="spider-lift-tree-removal-jacksonville-nc"
        description="Spider lift tree removal in Jacksonville, NC. Reach high limbs in tight spots near power lines, pools, and homes — no bucket truck needed."
        ctaText="Call Now for a Free Estimate"
        quickAnswer="A spider lift is a tracked, lightweight aerial platform that fits through standard gates, distributes weight to protect lawns, and reaches 50+ feet up. We use it on Jacksonville properties where bucket trucks or cranes can't go — backyards, near pools, over fences, and right up against structures and power lines."
        sections={[
          {
            heading: "Why a Spider Lift Beats a Bucket Truck",
            text: "Bucket trucks weigh 25,000–40,000 lbs. They sink into wet North Carolina soil, crack pavers, snap irrigation lines, and can't fit through a backyard gate. A spider lift weighs a fraction of that, runs on rubber tracks, and reaches the same height — without ever leaving the side of the house.\n\nFor most Jacksonville backyard removals, this is the difference between a clean job and a $4,000 lawn-repair bill."
          },
          {
            heading: "Where We Use the Spider Lift",
            text: "• Backyards with no truck access\n• Near in-ground pools and patios\n• Tight setbacks between houses\n• Around power lines (insulated boom available)\n• Septic fields and drainage areas\n• Soft, wet, or recently landscaped lawns"
          },
          {
            heading: "What This Means for You",
            text: "✔ No torn-up lawn\n✔ No cranes blocking the road\n✔ No driveway damage\n✔ Faster setup, cleaner job\n✔ Safer rigging — every limb roped down, not dropped\n✔ Same-day estimates, fully insured"
          }
        ]}
        faqs={[
          { question: "How tall a tree can you remove with a spider lift?", answer: "Our spider lift reaches 50+ feet of working height, which covers the vast majority of residential trees in Jacksonville. For larger trees, we combine the lift with climbing and rigging." },
          { question: "Will the spider lift damage my lawn?", answer: "Rubber tracks distribute weight far better than truck tires. On wet or soft ground we lay plywood mats. The footprint is similar to a riding mower, not a service truck." },
          { question: "Can it fit through my gate?", answer: "Most spider lifts collapse to about 36 inches wide — narrower than a standard 4-foot gate. We confirm gate width during the free on-site estimate." }
        ]}
        relatedServices={[
          { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
          { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
          { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
          { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        ]}
        finalCta={{
          heading: "Need a Tree Removed in a Tight Space?",
          text: "Get a free on-site estimate from Godhans Tree Company. We'll show you exactly how the spider lift will access your tree — and what it will cost.",
          buttonText: "Call for Free Estimate"
        }}
      />
      <div className="bg-black">
        <PrecisionRemoval variant="dark" />
      </div>
    </>
  );
}
