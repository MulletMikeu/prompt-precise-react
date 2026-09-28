import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { BUSINESS, PRICING } from '@/data/siteData';
import StormInsuranceLead from '@/components/sections/StormInsuranceLead';
import SampleEmergencyInvoice from '@/components/sections/SampleEmergencyInvoice';
import EmergencyJobGallery from '@/components/sections/EmergencyJobGallery';
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
      description="Fast emergency tree service in Jacksonville, NC — storm damage, leaning trees, and hazardous tree removal. 24/7 response from a fully insured local crew."
      ctaText="Call Now — Rapid Response"
      /* Above the hero image on purpose: someone with a tree through their
         roof should not have to scroll to learn that we tarp the opening and
         bill the insurer. Wording lives in STORM_LEAD (siteData) — approved
         copy, byte-identical with /storm-cleanup-jacksonville-nc. */
      leadBlock={<StormInsuranceLead />}
      heroImage={{
        src: heroCrane,
        webpSrcSet: craneSrcSet,
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px',
        alt: "Emergency tree removal crew in Jacksonville NC using a green crane to safely cut down a damaged pine tree near a home"
      }}
      quickAnswer="Emergency tree service in Jacksonville, NC means a real person answers at 2 a.m. and a crew is moving before the weather has finished. We handle fallen trees on houses, leaning trunks, hanging limbs and blocked driveways across Onslow County, with same-day and next-day availability — and on a tree-through-the-roof call the first job is stopping the water getting in."
      sections={[
        {
          heading: "Our Emergency Tree Services in Jacksonville, NC",
          text: "Storms move fast — so do we. We respond across Jacksonville, Richlands, Hubert, and the rest of Onslow County to handle every type of tree emergency:\n\n• Emergency Tree Removal — fallen trees on homes, vehicles, fences, and driveways\n• Storm Cleanup — full debris removal, broken limbs, and downed branches\n• Leaning & Dangerous Tree Removal — trees that have shifted, cracked, or partially uprooted\n• Tree Risk Assessment — fast on-site evaluation to determine which trees pose immediate danger\n\nEvery job is handled by experienced crews with the right equipment to work safely around houses, power lines, and tight residential lots."
        },
        {
          heading: "When to Call Us Immediately",
          text: "If you see any of these warning signs, do not wait — call us right away:\n\n⚠ A tree has fallen on your home, garage, vehicle, or fence\n⚠ A tree is leaning at a new angle after a storm\n⚠ Visible cracks or splits in the trunk or major limbs\n⚠ Soil heaving or exposed roots near the base of a tree\n⚠ Large broken limbs hanging in the canopy (\"widow makers\")\n⚠ Branches resting on or near power lines\n⚠ A tree blocking your driveway, road, or emergency access\n\nThese situations can get worse quickly — especially with rain, wind, or saturated soil. Faster response means less property damage."
        },
        /* No hardcoded credential section here. This page passes
           `credentialBlock`, which renders <WhyChooseGodhans/> with
           CREDENTIAL.heading — the identical string this section used — so the
           page carried the same H2 twice with near-duplicate trust copy. The
           shared block is the one that stays; it is single-sourced from
           siteData and already says everything this section said. */
        {
          heading: "Same-Day & Next-Day Availability",
          text: "We prioritize emergencies. Most calls are scheduled for the same day or the next morning, and active hazards (trees on homes, blocking access, or near power lines) get moved to the front of the line.\n\nCall us first — before the damage spreads, before water gets inside, and before a leaning tree decides to fall on its own."
        },
        {
          heading: "What Emergency Tree Work Costs",
          text: `Getting a tree off a structure is the most expensive work we do. Most tree-on-house emergencies run about ${PRICING.emergency.structure}, and occasionally more.

That number surprises people, so here is where it goes. Almost none of it is the tree:

• After-hours mobilization — a full crew and equipment rolling at night, on a weekend, or in the middle of a storm
• Crane or spider-lift time, which is how you take weight off a roof instead of dragging it across one
• Rigging a loaded trunk — a tree resting on a structure is under tension, and it comes off in measured pieces on ropes, not in one cut
• Weather, which slows everything down and sometimes stops it
• Tarping the opening before we leave

A storm-damaged tree that is NOT on a structure is ordinary removal work and prices like it. The premium is for the load sitting on your house, not for the hour of the night.`
        },
        {
          heading: "When Another Crew Drops One",
          text: "Two or three times a year we get called out to a tree that another company put on a house.\n\nWe are not naming anyone and we are not telling you this to sell fear. We are telling you because it is the clearest answer to why the insurance question matters more than the price on a tree job. If the crew that drops a tree on your roof does not carry general liability, and does not have every machine on the policy, the bill lands on you and your insurer — and then you are arguing about it for months while the hole is still there.\n\nThose calls are also why we would rather measure a questionable trunk than take a big tree down beside a house on a guess."
        },
        {
          heading: "Will Insurance Cover It?",
          text: "Usually, when the tree has damaged a covered structure — and the mechanics are worth reading properly rather than skimming a paragraph here.\n\nWe keep all of it on one page so it stays accurate and consistent: what a homeowners policy typically pays toward removal, the small sublimit that applies to debris, what happens when a tree falls and hits nothing at all, and why you should photograph the damage rather than wait for the adjuster before stopping active damage.\n\nWhat we do on our side of it, every time: photograph the damage before we touch anything, itemize the invoice, bill your insurance directly, and speak to your adjuster."
        }
      ]}
      /* Rendered through the caseStudy slot rather than `sections` because this
         block needs an anchor id and links inside the prose — `sections` takes
         plain text and puts its links underneath. */
      caseStudy={
        <>
        <section id="hazardous-tree-removal" className="py-16 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Hazardous Tree Removal in Jacksonville, NC
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              A hazardous tree is one that is likely to fail and has something worth hitting underneath it. That combination — not size, not species — is what moves a tree to the front of our schedule.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Three conditions account for most of what we take down as hazardous work. The first is a tree{' '}
              <Link to="/leaning-tree-dangerous-after-storm" className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors">
                leaning at a new angle after a storm
              </Link>
              , which usually means the roots have already let go on one side. The second is a lifted root plate: soil cracked or heaved around the base, a tree still standing only because the remaining roots haven't finished tearing. Those can hold for weeks and then come down on a calm day. The third is a decayed trunk — a tree a climber cannot safely tie into, because the wood that would hold the rigging is shell.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              That last one is where guessing gets people hurt, so we measure it. Our resistograph drills a fine needle through the standing trunk and records the wood's density, which tells us whether we're looking at a hazardous{' '}
              <Link to="/tree-removal-jacksonville-nc" className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors">
                tree removal
              </Link>
              {' '}that has to happen now, or a structurally sound tree that can wait for a scheduled visit. Both answers save you money — one by preventing the failure, the other by not removing a tree that didn't need to go.
            </p>
          </div>
        </section>

        {/* Photo proof first, then the bill for the same kind of work. Both
            render nothing while their arrays in src/data/ownerContent.ts are
            empty — a fabricated job or invoice would be worse than none. */}
        <EmergencyJobGallery />
        <SampleEmergencyInvoice />
        </>
      }
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
      /* Section indices: 0 services · 1 when-to-call · 2 same-day · 3 cost ·
         4 another-crew · 5 insurance. Kept in sync by hand — if a section is
         added or removed above, re-check these. */
      sectionLinks={{
        3: { href: "/tree-removal-cost-north-carolina", label: "Full tree removal cost breakdown for North Carolina" },
        4: { href: "/resistograph-tree-testing-jacksonville-nc", label: "Resistograph testing — measuring a trunk instead of guessing" },
        5: { href: "/storm-cleanup-jacksonville-nc", label: "Storm cleanup and what insurance typically covers" }
      }}
      faqs={[
        {
          question: "Who do I call for emergency tree removal in Jacksonville NC?",
          answer: `Call Godhans Tree Company at ${BUSINESS.phone}. We're a veteran-owned, family-operated, fully insured tree service based in Jacksonville, NC, with 24/7 emergency response across Onslow County including Richlands, Hubert, Sneads Ferry, and Swansboro.`
        },
        {
          question: "How much does emergency tree removal cost in Jacksonville NC?",
          answer: `Most tree-on-house emergencies run about ${PRICING.emergency.structure}, and occasionally more. Almost none of that is the tree itself — it is after-hours mobilisation, crane or spider-lift time, rigging a loaded trunk off the roof in pieces, working around the weather, and tarping the opening before we leave. A storm-damaged tree that is not on a structure prices as ordinary removal work.`
        },
        {
          question: "Will insurance cover storm-damaged trees?",
          answer: "Usually, when the tree has damaged a covered structure. We photograph the damage before we touch anything, itemize the invoice, bill your insurance directly, and speak to your adjuster. The detail — what is typically covered, the small debris sublimit, and what happens when a tree hits nothing — is all on our storm cleanup page so there is one accurate version of it.",
          link: { href: "/storm-cleanup-jacksonville-nc", label: "Storm cleanup and what insurance covers" }
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
          },
          {
            href: "/resistograph-tree-testing-jacksonville-nc",
            label: "Resistograph tree testing",
            blurb: "Measuring internal decay before a storm finds it for you."
          },
          {
            href: "/storm-cleanup-jacksonville-nc",
            label: "Storm cleanup and insurance",
            blurb: "What a homeowners policy typically covers, in one place."
          }
        ]
      }}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Storm Cleanup', href: '/storm-cleanup-jacksonville-nc' },
        { label: 'Debris Hauling', href: '/debris-hauling-jacksonville-nc' },
        { label: 'Residential Tree Service', href: '/residential-tree-service-jacksonville-nc' },
        { label: 'Commercial Tree Service', href: '/commercial-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Tree Emergency Right Now? Call Us Immediately.",
        text: "Don't wait for the damage to get worse. Call Godhans Tree Company now for fast, professional emergency tree service in Jacksonville, NC and across Onslow County.",
        buttonText: `Call ${BUSINESS.phone} Now`
      }}
    />
  );
}
