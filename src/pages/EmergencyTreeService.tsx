import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { BUSINESS, PRICING, SOURCES } from '@/data/siteData';
import StormInsuranceLead from '@/components/sections/StormInsuranceLead';
import SampleEmergencyInvoice from '@/components/sections/SampleEmergencyInvoice';
import EmergencyJobGallery from '@/components/sections/EmergencyJobGallery';
import sitePrep from '@/assets/tree-removal-site-prep-jacksonville-nc-property-clearing.webp';
import sitePrep480 from '@/assets/tree-removal-site-prep-jacksonville-nc-property-clearing-480.webp';
import sitePrep800 from '@/assets/tree-removal-site-prep-jacksonville-nc-property-clearing-800.webp';
import sitePrep1200 from '@/assets/tree-removal-site-prep-jacksonville-nc-property-clearing-1200.webp';
import yardRestored from '@/assets/yard-restoration-after-tree-removal-jacksonville-nc.webp';
import yardRestored480 from '@/assets/yard-restoration-after-tree-removal-jacksonville-nc-480.webp';
import yardRestored800 from '@/assets/yard-restoration-after-tree-removal-jacksonville-nc-800.webp';
import yardRestored1200 from '@/assets/yard-restoration-after-tree-removal-jacksonville-nc-1200.webp';
import crane480Avif from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine-480.avif';
import crane480Webp from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine-480.webp';
import crane480Jpg from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine-480.jpg';
import crane800Avif from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine-800.avif';
import crane800Webp from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine-800.webp';
import crane800Jpg from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine-800.jpg';
import crane1125Avif from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine-1125.avif';
import crane1125Webp from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine-1125.webp';
import crane1125Jpg from '@/assets/emergency-tree-removal-jacksonville-nc-crane-cutting-pine-1125.jpg';

const craneAvifSrcSet = `${crane480Avif} 480w, ${crane800Avif} 800w, ${crane1125Avif} 1125w`;
const craneWebpSrcSet = `${crane480Webp} 480w, ${crane800Webp} 800w, ${crane1125Webp} 1125w`;
const craneJpgSrcSet = `${crane480Jpg} 480w, ${crane800Jpg} 800w, ${crane1125Jpg} 1125w`;

const sitePrepSrcSet = `${sitePrep480} 480w, ${sitePrep800} 800w, ${sitePrep1200} 1200w`;
const yardSrcSet = `${yardRestored480} 480w, ${yardRestored800} 800w, ${yardRestored1200} 1200w`;

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

export default function EmergencyTreeService() {
  return (
    <ServicePage
      title="24/7 Emergency Tree Service & Storm Cleanup in Jacksonville, NC"
      /**
       * Ship J. 1,046 impressions, 2 clicks, position 35.9.
       *
       * H1 unchanged. The metaTitle drops the "in" the H1 carries, on purpose:
       * the query is "emergency tree service jacksonville nc", with no
       * preposition, and dropping it both matches that exactly and buys the
       * room for the 24/7 hook. Same call Ship I made on storm cleanup.
       *
       * The description's old hook — "24/7 response from a fully insured local
       * crew" — is true and completely interchangeable. Every competitor says
       * 24/7. What they do not say, and what this page's own quickAnswer has
       * always said, is that a real person picks up at 2 a.m. That is the
       * concrete version of the same claim, and the tarp line is the one detail
       * that tells a homeowner we know what the actual emergency is.
       *
       * Ship M (2026-11-21): /storm-cleanup-jacksonville-nc was merged into
       * this page and 301s here, so the title and H1 now carry both intents.
       * Its cleanup scope, after-storm process, insurance account and
       * neighbour-tree answer are sections 5-7 below, and its FAQs were merged
       * with this page's, one copy of each question.
       *
       * INSURANCE in the description: only "we bill your insurer directly",
       * which states what WE do and makes no claim about the customer's cost
       * or the carrier's decision (the clause Ship I used on the storm page).
       * The hedged sentence DECISIONS.md requires on any cost/outcome claim
       * renders in full in STORM_LEAD above the fold and in the FAQ.
       */
      metaTitle="Emergency Tree & Storm Cleanup Jacksonville NC | Godhans"
      subtitle="Trees on Houses, Storm Debris & Downed Limbs — Same-Day & Next-Day Availability"
      slug="emergency-tree-service-jacksonville-nc"
      faqPosition="early"
      credentialBlock
      description="24/7 emergency tree service and storm cleanup in Jacksonville, NC. A real person answers at 2 a.m.; we tarp before we leave and bill your insurer directly."
      ctaText="Call Now — Rapid Response"
      /* Above the hero image on purpose: someone with a tree through their
         roof should not have to scroll to learn that we tarp the opening and
         bill the insurer. Wording lives in STORM_LEAD (siteData) — approved
         copy, rendered once. The storm page that also carried it now 301s
         here. */
      leadBlock={<StormInsuranceLead />}
      heroImage={{
        src: crane1125Jpg,
        avifSrcSet: craneAvifSrcSet,
        webpSrcSet: craneWebpSrcSet,
        jpgSrcSet: craneJpgSrcSet,
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px',
        alt: "Emergency tree removal crew in Jacksonville NC using a green crane to safely cut down a damaged pine tree near a home"
      }}
      quickAnswer="Emergency tree service in Jacksonville, NC means a real person answers at 2 a.m. and a crew is moving before the weather has finished. We handle fallen trees on houses, leaning trunks, hanging limbs, blocked driveways and the storm cleanup after them across Onslow County, with same-day and next-day availability — and on a tree-through-the-roof call the first job is stopping the water getting in."
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. The three city
       * names in this sentence were unlinked while those pages were starved of
       * in-sentence inbound links. Same copy; anchors added.
       */
      sectionBodies={{
        0: (
          <>
            {"We respond across Jacksonville, "}
            <Link to="/tree-service-richlands-nc" className={PROSE_LINK}>Richlands</Link>
            {", "}
            <Link to="/tree-service-hubert-nc" className={PROSE_LINK}>Hubert</Link>
            {", "}
            <Link to="/tree-service-sneads-ferry-nc" className={PROSE_LINK}>Sneads Ferry</Link>
            {", "}
            <Link to="/tree-service-swansboro-nc" className={PROSE_LINK}>Swansboro</Link>
            {", and the rest of Onslow County, same day or next morning, to handle every type of tree emergency:\n\n• Emergency Tree Removal — fallen trees on homes, vehicles, fences, and driveways\n• Storm Cleanup — full debris removal, broken limbs, and downed branches\n• Leaning & Dangerous Tree Removal — trees that have shifted, cracked, or partially uprooted\n• Tree Risk Assessment — fast on-site evaluation to determine which trees pose immediate danger\n\nEvery job is handled by experienced crews with the right equipment to work safely around houses, power lines, and tight residential lots. Longer write-ups on all of it are in our "}
            <Link to="/blog" className={PROSE_LINK}>tree care guides</Link>
            {"."}
          </>
        ),
        // Section 5, merged from /storm-cleanup-jacksonville-nc (Ship M). Same
        // copy as its `text` entry, with the in-sentence links the storm page
        // carried. Edit both or neither.
        5: (
          <>
            {"Once the immediate hazard is off the house, the rest of storm work is cleanup, and we handle every phase of it:\n\n• Downed tree removal from homes, fences, driveways and vehicles\n• Full debris removal and haul-away\n• Broken limb and hanging branch clearing\n• Hazard tree assessment and removal\n• Driveway and road clearance\n• Debris and brush chipping\n• Insurance damage documentation support\n\nThe order is the same on every storm call: photograph the damage before anyone moves anything, stop active damage (the tree comes off the structure and the opening gets tarped), then clear and haul the debris, and itemize the invoice so each line maps to something an adjuster can approve. Residential and "}
            <Link to="/commercial-tree-service-jacksonville-nc" className={PROSE_LINK}>commercial properties</Link>
            {" — we handle both, and on a commercial site we schedule around your hours rather than through them. If the storm is over, the tree is already down and the pile is the whole problem, "}
            <Link to="/debris-hauling-jacksonville-nc" className={PROSE_LINK}>debris hauling</Link>
            {" prices on its own by the trailer. What customers mention most in our "}
            <Link to="/reviews" className={PROSE_LINK}>Google reviews</Link>
            {" is the cleanup, which is the half of storm work people do not think to ask about. Our crews are local — we're not dispatching from Raleigh or Charlotte."}
          </>
        ),
      }}
      sections={[
        {
          heading: "Our Emergency Tree Services in Jacksonville, NC",
          text: "We respond across Jacksonville, Richlands, Hubert, and the rest of Onslow County, same day or next morning, to handle every type of tree emergency:\n\n• Emergency Tree Removal — fallen trees on homes, vehicles, fences, and driveways\n• Storm Cleanup — full debris removal, broken limbs, and downed branches\n• Leaning & Dangerous Tree Removal — trees that have shifted, cracked, or partially uprooted\n• Tree Risk Assessment — fast on-site evaluation to determine which trees pose immediate danger\n\nEvery job is handled by experienced crews with the right equipment to work safely around houses, power lines, and tight residential lots."
        },
        {
          heading: "When to Call Us Immediately",
          text: "If you see any of these warning signs, do not wait — call us right away:\n\n• A tree has fallen on your home, garage, vehicle, or fence\n• A tree is leaning at a new angle after a storm\n• Visible cracks or splits in the trunk or major limbs\n• Soil heaving or exposed roots near the base of a tree\n• Large broken limbs hanging in the canopy (\"widow makers\")\n• Branches resting on or near power lines\n• A tree blocking your driveway, road, or emergency access\n\nThese situations can get worse quickly — especially with rain, wind, or saturated soil. Faster response means less property damage."
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
          heading: "How much does emergency tree removal cost?",
          text: `Most tree-on-house emergencies run about ${PRICING.emergency.structure}, and occasionally more. Getting a tree off a structure is the most expensive work we do.

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
          heading: "Storm Cleanup in Jacksonville, NC",
          text: "Once the immediate hazard is off the house, the rest of storm work is cleanup, and we handle every phase of it:\n\n• Downed tree removal from homes, fences, driveways and vehicles\n• Full debris removal and haul-away\n• Broken limb and hanging branch clearing\n• Hazard tree assessment and removal\n• Driveway and road clearance\n• Debris and brush chipping\n• Insurance damage documentation support\n\nThe order is the same on every storm call: photograph the damage before anyone moves anything, stop active damage (the tree comes off the structure and the opening gets tarped), then clear and haul the debris, and itemize the invoice so each line maps to something an adjuster can approve. Residential and commercial properties — we handle both. Our crews are local — we're not dispatching from Raleigh or Charlotte."
        },
        {
          heading: "Does homeowners insurance cover tree removal after a storm in North Carolina?",
          text: "Generally yes when the tree has damaged a covered structure — the house, the garage, a fence or an outbuilding — and your deductible applies. When it has hit nothing, the North Carolina Department of Insurance describes the standard provision as paying up to $500 for any one loss. The mechanics of both are below.\n\nWe keep all of it on this page so there is one accurate version rather than four half-versions scattered across the site. We are a tree company, not your insurer — none of this is advice about your specific policy, and your declarations page beats anything written here.\n\nWHEN A TREE DAMAGES A COVERED STRUCTURE. This is the case people mean when they ask. A homeowners policy generally responds when a tree hits the house, the garage, a fence or an outbuilding, and the work to get the tree off the structure and repair it is the covered part. Your deductible applies.\n\nWHEN A TREE FALLS AND HITS NOTHING. This is the answer that surprises people, so it is worth being blunt: a tree lying in your yard having damaged nothing is usually your problem, not the insurer's. The North Carolina Department of Insurance puts the standard limit plainly — the policy “will pay reasonable expense, up to $500 for any one loss, for the removal of trees from your premises provided that the tree has damaged a structure or blocked the driveway.” Note both halves of that condition. Damaged a structure, OR blocked the driveway. A healthy tree that came down across the back lawn in a thunderstorm and hit nothing typically meets neither.\n\nSo the $500 figure is not the cleanup budget for a big tree, and a mature hardwood on the ground is several times that in hauling alone. Check your own declarations page — some carriers write more than the standard, and a few write less.\n\nLIGHTNING IS USUALLY DIFFERENT. Lightning is typically a named peril on a homeowners policy in its own right, which is why a lightning-struck tree is often treated differently from one the wind pushed over. If lightning is what took your tree, say so explicitly when you open the claim rather than filing it as storm damage generally.\n\nDO NOT WAIT FOR THE ADJUSTER TO STOP ACTIVE DAMAGE. This is the most expensive mistake we see. If there is a hole in your roof and rain coming through it, the damage is getting worse by the hour, and every policy expects you to take reasonable steps to prevent further loss — not to sit under it waiting for an appointment. Photograph everything first, from several angles, before anybody moves anything. Then get the tree off and the opening covered. Photographs are what let you prove what the storm did versus what the next three days of rain did.\n\nWHAT WE DO ON OUR SIDE. We photograph the damage before we touch it, tarp openings as part of the emergency call, itemize the invoice so each line maps to something an adjuster can approve, bill your insurance directly, and talk to your adjuster. We have worked a lot of these claims in Onslow County and we know what documentation moves them along. What we will not do is tell you an outcome is guaranteed — that decision is the carrier's, and any tree company promising otherwise is promising something it does not control.",
        },
        {
          heading: "My neighbor's tree fell on my property — who pays?",
          text: `Your policy, not theirs. A healthy tree blown down in a storm is treated as an act of nature, and the property it lands on is the one that claims it — which is usually not the answer people are hoping for. It is the most common question we get after a storm.\n\nYou file with your own homeowners insurance and handle the cleanup, even though the tree grew in someone else's yard. The Insurance Information Institute puts it in four words: "${SOURCES.iiiTreeFalls.quote}" In most cases an insurer is not going to spend time working out where a tree or its branches originally came from. The same limits apply as anywhere else on this page, including the $500 standard cap on removal itself.\n\nTHE EXCEPTION, AND IT IS A REAL ONE. If the tree was visibly dead, diseased or neglected, and the owner knew or reasonably should have known, that changes the picture — this is negligence rather than an act of nature, and the tree's owner may be liable. Poor maintenance is not something a homeowners policy is meant to cover. In practice your insurer may pay your claim and then pursue the neighbor's insurer to recover it, a process called subrogation; if that succeeds you can get your deductible back.\n\nWHAT THAT MEANS PRACTICALLY. If you have been looking at a dead tree leaning over your fence for two years, document it now, while it is still standing. Photographs with dates, and a written note to your neighbor, are worth considerably more than your recollection afterward. And if it is your tree that is dead, that is the cheapest possible moment to deal with it.\n\nNot legal or insurance advice; talk to your insurer. Your declarations page and your adjuster beat anything written here, and liability questions are for an attorney rather than a tree company. There is a fuller set of neighbour-tree answers, each one cited to a North Carolina source, on our neighbour tree problems page — linked below.`,
        },
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
        {/* Carried from /storm-cleanup-jacksonville-nc (Ship M): the insurance
            section above quotes the NC Department of Insurance, so the source
            is linked rather than just named. SampleEmergencyInvoice links here
            by this id. */}
        <section id="storm-insurance" className="py-12 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-4">Where the $500 Figure Comes From</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              The standard tree-removal provision quoted above is described by the state
              regulator, not by us —{' '}
              <a
                href={SOURCES.ncdoiHomeowners.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold"
              >
                {SOURCES.ncdoiHomeowners.label}
              </a>
              . Your own declarations page still governs your policy, and some carriers
              write more coverage than the standard.
            </p>
          </div>
        </section>

        <EmergencyJobGallery />
        <SampleEmergencyInvoice />
        </>
      }
      gallery={{
        heading: "Recent Emergency & Tree Removal Jobs in Jacksonville, NC",
        images: [
          {
            src: crane1125Jpg,
            srcSet: craneWebpSrcSet,
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
         4 another-crew · 5 storm cleanup · 6 insurance · 7 neighbour.
         Kept in sync by hand — if a section is added or removed above,
         re-check these. */
      sectionLinks={{
        3: { href: "/tree-removal-cost-north-carolina", label: "Full tree removal cost breakdown for North Carolina" },
        4: { href: "/resistograph-tree-testing-jacksonville-nc", label: "Resistograph testing — measuring a trunk instead of guessing" },
        7: {
          href: "/neighbor-tree-problems-jacksonville-nc",
          label: "Neighbor tree problems: who can cut, who pays, and what to do",
        }
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
          question: "Will homeowners insurance pay for storm damage tree removal?",
          answer: "Generally yes when the tree has damaged a covered structure — the house, garage, fence or an outbuilding — and your deductible applies. We photograph the damage before we touch anything, itemize the invoice so each line maps to something an adjuster can approve, bill your insurance directly and speak to your adjuster. What we will not do is tell you an outcome is guaranteed; that call belongs to your carrier."
        },
        {
          question: "Do you bill insurance directly?",
          answer: "Yes. We bill your insurance directly and work with your adjuster, doing everything we can so your cost stays at your normal deductible. Worth knowing where that applies: direct billing is for mitigation — a tree on the house or on another covered structure, where getting it off and tarping the opening is what stops the damage getting worse. A yard tree that came down and hit nothing is a different situation and frequently is not covered at all. We will tell you which of the two you have at the estimate rather than after the work."
        },
        {
          question: "How fast can you respond to an emergency call?",
          answer: "We prioritize active hazards — trees on homes, blocking driveways, or near power lines move to the front of the schedule. Most emergency calls in Jacksonville and surrounding areas are handled the same day or the next morning."
        },
        {
          question: "What should I do if a tree falls on my house?",
          answer: "Get everyone out of the affected area, shut off power to that part of the house if it's safe to do so, and avoid going near downed power lines. Take photos for insurance, then call us immediately. We'll safely stabilize and remove the tree to prevent further damage."
        },
        {
          question: "My tree fell but it did not hit anything. Is that covered?",
          answer: "Usually not, or only up to a small limit. The North Carolina Department of Insurance describes the standard provision as paying reasonable expense up to $500 for any one loss to remove trees from your premises, provided the tree has damaged a structure or blocked the driveway. A tree that came down across the lawn and hit nothing typically meets neither condition, and $500 does not go far on a mature hardwood. Check your declarations page — carriers vary.",
        },
        {
          question: "Does it matter whether lightning or wind brought the tree down?",
          answer: "It can. Lightning is typically a named peril on a homeowners policy in its own right, so a lightning-struck tree is often handled differently from one the wind pushed over. If lightning is what did it, say so explicitly when you open the claim rather than reporting it as general storm damage.",
          link: { href: "/resistograph-tree-testing-jacksonville-nc", label: "What a lightning strike does inside a pine" },
        },
        {
          question: "Should I wait for the adjuster before having the tree removed?",
          answer: "Not if damage is still happening. If there is an opening in your roof and rain is coming through it, the loss is growing by the hour, and policies expect you to take reasonable steps to prevent further damage rather than wait for an appointment. Photograph everything first from several angles, then get the tree off and the opening covered. Those photographs are what separate what the storm did from what the next three days of rain did.",
        },
        {
          /* Batch 4: this answer asserted two rules of North Carolina law with
             no citation behind either, on a page whose prose is otherwise
             carefully sourced. Both now carry the source they came from. */
          question: "What if a neighbor's tree fell onto my property?",
          answer: `In North Carolina the property owner where the damage occurred is generally responsible for removal costs, even if the tree grew on a neighbor's land — the Insurance Information Institute puts the insurance side in four words: "${SOURCES.iiiTreeFalls.quote}" Ward and Smith, P.A. state the healthy-tree case directly: "${SOURCES.wardSmithFallenTree.healthy}" If negligence can be shown — the neighbor knew the tree was dead or hazardous and did nothing — there may be grounds for recovery, because NC State Extension describes the duty as being "${SOURCES.ncExtensionTreeFall.duty}" Document everything before anything is moved and contact your insurer first. This is general information, not legal advice.`,
          link: { href: "/neighbor-tree-problems-jacksonville-nc", label: "All six neighbor-tree questions, each cited to an NC source →" },
        },
        {
          question: "Can you remove a tree that's leaning on power lines?",
          answer: "We can safely remove trees and limbs near power lines, but contact with active lines is handled by Duke Energy or your utility provider first. We'll assess the situation and coordinate the safest sequence — utility company clears any line contact, then we remove the tree.",
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
            href: "/debris-hauling-jacksonville-nc",
            label: "Debris hauling",
            blurb: "When the tree is already down and the pile is the whole problem."
          }
        ]
      }}
      finalCta={{
        heading: "Tree Emergency Right Now? Call Us Immediately.",
        text: "Don't wait for the damage to get worse. Call Godhans Tree Company now for fast, professional emergency tree service in Jacksonville, NC and across Onslow County.",
        buttonText: `Call ${BUSINESS.phone} Now`
      }}
    />
  );
}
