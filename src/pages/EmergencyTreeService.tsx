import ServicePage from './ServicePage';
import { BUSINESS } from '@/data/siteData';
import heroCrane from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine.webp';
import heroCrane480 from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine-480.webp';
import heroCrane800 from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine-800.webp';
import heroCrane1200 from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine-1200.webp';
import sitePrep from '@/assets/tree-removal-site-prep-jacksonville-nc-property-clearing.webp';
import sitePrep480 from '@/assets/tree-removal-site-prep-jacksonville-nc-property-clearing-480.webp';
import sitePrep800 from '@/assets/tree-removal-site-prep-jacksonville-nc-property-clearing-800.webp';
import sitePrep1200 from '@/assets/tree-removal-site-prep-jacksonville-nc-property-clearing-1200.webp';
import yardRestored from '@/assets/yard-restoration-after-tree-removal-jacksonville-nc.webp';
import yardRestored480 from '@/assets/yard-restoration-after-tree-removal-jacksonville-nc-480.webp';
import yardRestored800 from '@/assets/yard-restoration-after-tree-removal-jacksonville-nc-800.webp';
import yardRestored1200 from '@/assets/yard-restoration-after-tree-removal-jacksonville-nc-1200.webp';

const craneSrcSet = `${heroCrane480} 480w, ${heroCrane800} 800w, ${heroCrane1200} 1200w`;
const sitePrepSrcSet = `${sitePrep480} 480w, ${sitePrep800} 800w, ${sitePrep1200} 1200w`;
const yardSrcSet = `${yardRestored480} 480w, ${yardRestored800} 800w, ${yardRestored1200} 1200w`;

export default function EmergencyTreeService() {
  return (
    <ServicePage
      title="Emergency Tree Service in Jacksonville, NC"
      metaTitle="Emergency Tree Service in Jacksonville, NC | Godhans"
      subtitle="24/7 Storm Damage & Tree Removal — Same-Day & Next-Day Availability"
      slug="emergency-tree-service-jacksonville-nc"
      credentialBlock
      description="Fast emergency tree service in Jacksonville NC. We handle storm damage, leaning trees, and hazardous removals. Call now for rapid response."
      ctaText="Call Now — Rapid Response"
      heroImage={{
        src: heroCrane,
        webpSrcSet: craneSrcSet,
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px',
        alt: "Emergency tree removal crew in Jacksonville NC using a green crane to safely cut down a damaged pine tree near a home"
      }}
      quickAnswer="When a storm hits Jacksonville, Richlands, or anywhere in Onslow County, you don't have time to wait. Godhans Tree Company provides 24/7 emergency tree service for fallen trees, storm damage, leaning trunks, and dangerous limbs — with same-day and next-day availability. Call us now and we'll dispatch a fully insured crew to make your property safe again."
      sections={[
        {
          heading: "Our Emergency Tree Services in Jacksonville, NC",
          text: "Storms move fast — so do we. We respond across Jacksonville, Richlands, Hubert, and the rest of Onslow County to handle every type of tree emergency:\n\n• Emergency Tree Removal — fallen trees on homes, vehicles, fences, and driveways\n• Storm Cleanup — full debris removal, broken limbs, and downed branches\n• Leaning & Dangerous Tree Removal — trees that have shifted, cracked, or partially uprooted\n• Tree Risk Assessment — fast on-site evaluation to determine which trees pose immediate danger\n\nEvery job is handled by experienced crews with the right equipment to work safely around houses, power lines, and tight residential lots."
        },
        {
          heading: "When to Call Us Immediately",
          text: "If you see any of these warning signs, do not wait — call us right away:\n\n⚠ A tree has fallen on your home, garage, vehicle, or fence\n⚠ A tree is leaning at a new angle after a storm\n⚠ Visible cracks or splits in the trunk or major limbs\n⚠ Soil heaving or exposed roots near the base of a tree\n⚠ Large broken limbs hanging in the canopy (\"widow makers\")\n⚠ Branches resting on or near power lines\n⚠ A tree blocking your driveway, road, or emergency access\n\nThese situations can get worse quickly — especially with rain, wind, or saturated soil. Faster response means less property damage."
        },
        {
          heading: "Veteran-Owned, Family-Operated — Serving Onslow County Since 2013",
          text: "Godhans Tree Company isn't a national call center. We're your neighbors in Jacksonville, NC, and we've cleared storm damage across Onslow County since 2013.\n\nWhen you call, you get a real local crew that knows the terrain, the tree species, and the storm patterns of coastal North Carolina."
        },
        {
          heading: "Same-Day & Next-Day Availability",
          text: "We prioritize emergencies. Most calls are scheduled for the same day or the next morning, and active hazards (trees on homes, blocking access, or near power lines) get moved to the front of the line.\n\nCall us first — before the damage spreads, before water gets inside, and before a leaning tree decides to fall on its own."
        },
        {
          heading: "Will Insurance Cover Storm-Damaged Trees?",
          text: "In most cases, homeowners insurance covers tree removal when a tree damages a covered structure (home, garage, fence). Coverage typically includes the cost to remove the tree from the structure — not always the full yard cleanup.\n\nWe document the damage with photos before we start work, provide itemized invoices, and can speak with your adjuster if needed. If you're unsure, snap a few photos, save them, and call us — we'll help you understand what's typically covered and get the hazard removed right away."
        }
      ]}
      gallery={{
        heading: "Recent Emergency & Tree Removal Jobs in Jacksonville, NC",
        images: [
          {
            src: heroCrane,
            srcSet: craneSrcSet,
            alt: "Bucket crane removing a large pine tree in a Jacksonville NC backyard after storm damage",
            caption: "Crane removal of a damaged pine — Jacksonville, NC"
          },
          {
            src: sitePrep,
            srcSet: sitePrepSrcSet,
            alt: "Compact track loader clearing trees and prepping a residential lot in Jacksonville NC",
            caption: "Debris cleanup & haul-away — Onslow County"
          },
          {
            src: yardRestored,
            srcSet: yardSrcSet,
            alt: "Cleaned and restored yard after emergency tree removal in Jacksonville NC",
            caption: "Cleanup complete — yard restored after removal"
          }
        ]
      }}
      faqs={[
        {
          question: "Who do I call for emergency tree removal in Jacksonville NC?",
          answer: `Call Godhans Tree Company at ${BUSINESS.phone}. We're a veteran-owned, family-operated, fully insured tree service based in Jacksonville, NC, with 24/7 emergency response across Onslow County including Richlands, Hubert, Sneads Ferry, and Swansboro.`
        },
        {
          question: "Will insurance cover storm-damaged trees?",
          answer: "Most homeowners insurance policies cover tree removal when a tree damages a covered structure like your home, garage, or fence. The policy usually pays to remove the tree off the structure. We document damage with photos, provide itemized invoices, and can coordinate with your adjuster to make the claim process easier."
        },
        {
          question: "How fast can you respond to an emergency call?",
          answer: "We prioritize active hazards — trees on homes, blocking driveways, or near power lines move to the front of the schedule. Most emergency calls in Jacksonville and surrounding areas are handled the same day or the next morning."
        },
        {
          question: "What should I do if a tree falls on my house?",
          answer: "Get everyone out of the affected area, shut off power to that part of the house if it's safe to do so, and avoid going near downed power lines. Take photos for insurance, then call us immediately. We'll safely stabilize and remove the tree to prevent further damage."
        }
      ]}
      guides={{
        heading: "Guides & Pricing",
        intro: "If you're trying to work out how urgent it is, start here:",
        links: [
          {
            href: "/leaning-tree-dangerous-after-storm",
            label: "Is a leaning tree dangerous after a storm?",
            blurb: "The warning signs that mean call now rather than wait for morning."
          },
          {
            href: "/storm-damage-trees-guide",
            label: "What to do after storm damage to your trees",
            blurb: "Step by step, from making the area safe to documenting it for insurance."
          },
          {
            href: "/tree-removal-cost-north-carolina",
            label: "How much tree removal costs in North Carolina",
            blurb: "What an emergency removal runs, and what drives the number up."
          }
        ]
      }}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Tree Emergency Right Now? Call Us Immediately.",
        text: "Don't wait for the damage to get worse. Call Godhans Tree Company now for fast, professional emergency tree service in Jacksonville, NC and across Onslow County.",
        buttonText: `Call ${BUSINESS.phone} Now`
      }}
    />
  );
}
