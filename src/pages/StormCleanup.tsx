import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import StormInsuranceLead from '@/components/sections/StormInsuranceLead';
import { SOURCES } from '@/data/siteData';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

export default function StormCleanup() {
  return (
    <ServicePage
      title="Storm Cleanup Jacksonville NC"
      subtitle="Fast Debris Removal & Downed Tree Extraction — Same-Day Response Available"
      slug="storm-cleanup-jacksonville-nc"
      faqPosition="early"
      credentialBlock
      description="Storm cleanup in Jacksonville, NC. Fast response for downed trees, debris removal & hazardous limbs across Onslow County. Call 24/7 — Godhans Tree Company."
      ctaText="Call Now — 24/7 Response"
      /* Same approved STORM_LEAD wording as the emergency page, above the
         fold on both. Do not edit it here — it lives in siteData. */
      leadBlock={<StormInsuranceLead />}
      quickAnswer="When a storm hits Onslow County, Godhans Tree Company is ready to move. We handle downed trees, scattered debris, hanging limbs, and structural damage — with same-day and next-day availability. Call us anytime and we'll dispatch an insured crew to clear the hazard and get your property safe again."
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. Same copy as the
       * `text` entry it replaces, with anchors inside sentences that already
       * named the destination. Feeds /debris-hauling-*, /commercial-* and
       * /reviews, all of which an audit found at two or fewer in-sentence
       * inbound links.
       */
      /* Section 3 is the neighbour question. Its prose ends by promising a
         fuller, individually cited set of answers — this is the link that
         keeps that promise. Indices: 0 services · 1 when-to-call · 2 insurance ·
         3 neighbour · 4 serving-onslow. */
      sectionLinks={{
        3: {
          href: "/neighbor-tree-problems-jacksonville-nc",
          label: "Neighbor tree problems: who can cut, who pays, and what to do",
        },
      }}
      sectionBodies={{
        0: (
          <>
            {"Eastern NC storms can hit hard and fast. We're on the ground quickly to handle every phase of the cleanup:\n\n• Downed tree removal from homes, fences, driveways, and vehicles\n• Full debris removal and haul-away\n• Broken limb and hanging branch clearing\n• Hazard tree assessment and removal\n• Driveway and road clearance\n• Debris and brush chipping\n• Insurance damage documentation support\n\nResidential and "}
            <Link to="/commercial-tree-service-jacksonville-nc" className={PROSE_LINK}>commercial properties</Link>
            {" — we handle both, and on a commercial site we schedule around your hours rather than through them. If the storm is over, the tree is already down and the pile is the whole problem, "}
            <Link to="/debris-hauling-jacksonville-nc" className={PROSE_LINK}>debris hauling</Link>
            {" prices on its own by the trailer. What customers mention most in our "}
            <Link to="/reviews" className={PROSE_LINK}>Google reviews</Link>
            {" is the cleanup, which is the half of storm work people do not think to ask about."}
          </>
        ),
        // "Serving All of Onslow County" — six place names in a sentence, none
        // of them linked, while each of those city pages was starved of
        // in-sentence inbound links.
        4: (
          <>
            {"We respond to storm calls across Jacksonville, "}
            <Link to="/tree-service-richlands-nc" className={PROSE_LINK}>Richlands</Link>
            {", "}
            <Link to="/tree-service-swansboro-nc" className={PROSE_LINK}>Swansboro</Link>
            {", "}
            <Link to="/tree-service-sneads-ferry-nc" className={PROSE_LINK}>Sneads Ferry</Link>
            {", "}
            <Link to="/tree-service-hubert-nc" className={PROSE_LINK}>Hubert</Link>
            {", "}
            <Link to="/tree-service-surf-city-nc" className={PROSE_LINK}>Surf City</Link>
            {", "}
            <Link to="/tree-service-camp-lejeune-nc" className={PROSE_LINK}>Camp Lejeune</Link>
            {", and all surrounding communities in Onslow County — the full list is on our "}
            <Link to="/service-area" className={PROSE_LINK}>service area page</Link>
            {". Our crews are local — we're not dispatching from Raleigh or Charlotte. When a storm hits here, we're ready here."}
          </>
        ),
      }}
      sections={[
        {
          heading: "Storm Cleanup Services We Provide",
          text: "Eastern NC storms can hit hard and fast. We're on the ground quickly to handle every phase of the cleanup:\n\n• Downed tree removal from homes, fences, driveways, and vehicles\n• Full debris removal and haul-away\n• Broken limb and hanging branch clearing\n• Hazard tree assessment and removal\n• Driveway and road clearance\n• Debris and brush chipping\n• Insurance damage documentation support\n\nResidential and commercial properties — we handle both.",
        },
        {
          heading: "When to Call Us Right Away",
          text: "Call us without waiting if:\n\n⚠ A tree or large limb has fallen on your home, garage, or vehicle\n⚠ A tree is blocking your driveway or emergency access\n⚠ Limbs are resting on or near power lines\n⚠ A tree is leaning at a new angle after the storm\n⚠ You see visible splits or cracks in trunk or major limbs\n\nLeaning trees and hung-up limbs can fall without warning — especially with wet, unstable soil after heavy rain. The sooner we assess it, the better.",
        },
        {
          heading: "Does homeowners insurance cover tree removal after a storm in North Carolina?",
          text: "Generally yes when the tree has damaged a covered structure — the house, the garage, a fence or an outbuilding — and your deductible applies. When it has hit nothing, the North Carolina Department of Insurance describes the standard provision as paying up to $500 for any one loss. The mechanics of both are below.\n\nWe keep all of it on this page so there is one accurate version rather than four half-versions scattered across the site. We are a tree company, not your insurer — none of this is advice about your specific policy, and your declarations page beats anything written here.\n\nWHEN A TREE DAMAGES A COVERED STRUCTURE. This is the case people mean when they ask. A homeowners policy generally responds when a tree hits the house, the garage, a fence or an outbuilding, and the work to get the tree off the structure and repair it is the covered part. Your deductible applies.\n\nWHEN A TREE FALLS AND HITS NOTHING. This is the answer that surprises people, so it is worth being blunt: a tree lying in your yard having damaged nothing is usually your problem, not the insurer's. The North Carolina Department of Insurance puts the standard limit plainly — the policy “will pay reasonable expense, up to $500 for any one loss, for the removal of trees from your premises provided that the tree has damaged a structure or blocked the driveway.” Note both halves of that condition. Damaged a structure, OR blocked the driveway. A healthy tree that came down across the back lawn in a thunderstorm and hit nothing typically meets neither.\n\nSo the $500 figure is not the cleanup budget for a big tree, and a mature hardwood on the ground is several times that in hauling alone. Check your own declarations page — some carriers write more than the standard, and a few write less.\n\nLIGHTNING IS USUALLY DIFFERENT. Lightning is typically a named peril on a homeowners policy in its own right, which is why a lightning-struck tree is often treated differently from one the wind pushed over. If lightning is what took your tree, say so explicitly when you open the claim rather than filing it as storm damage generally.\n\nDO NOT WAIT FOR THE ADJUSTER TO STOP ACTIVE DAMAGE. This is the most expensive mistake we see. If there is a hole in your roof and rain coming through it, the damage is getting worse by the hour, and every policy expects you to take reasonable steps to prevent further loss — not to sit under it waiting for an appointment. Photograph everything first, from several angles, before anybody moves anything. Then get the tree off and the opening covered. Photographs are what let you prove what the storm did versus what the next three days of rain did.\n\nWHAT WE DO ON OUR SIDE. We photograph the damage before we touch it, tarp openings as part of the emergency call, itemize the invoice so each line maps to something an adjuster can approve, bill your insurance directly, and talk to your adjuster. We have worked a lot of these claims in Onslow County and we know what documentation moves them along. What we will not do is tell you an outcome is guaranteed — that decision is the carrier's, and any tree company promising otherwise is promising something it does not control.",
        },
        {
          heading: "My neighbor's tree fell on my property — who pays?",
          text: `Your policy, not theirs. A healthy tree blown down in a storm is treated as an act of nature, and the property it lands on is the one that claims it — which is usually not the answer people are hoping for. It is the most common question we get after a storm.\n\nYou file with your own homeowners insurance and handle the cleanup, even though the tree grew in someone else's yard. The Insurance Information Institute puts it in four words: "${SOURCES.iiiTreeFalls.quote}" In most cases an insurer is not going to spend time working out where a tree or its branches originally came from. The same limits apply as anywhere else on this page, including the $500 standard cap on removal itself.\n\nTHE EXCEPTION, AND IT IS A REAL ONE. If the tree was visibly dead, diseased or neglected, and the owner knew or reasonably should have known, that changes the picture — this is negligence rather than an act of nature, and the tree's owner may be liable. Poor maintenance is not something a homeowners policy is meant to cover. In practice your insurer may pay your claim and then pursue the neighbor's insurer to recover it, a process called subrogation; if that succeeds you can get your deductible back.\n\nWHAT THAT MEANS PRACTICALLY. If you have been looking at a dead tree leaning over your fence for two years, document it now, while it is still standing. Photographs with dates, and a written note to your neighbor, are worth considerably more than your recollection afterward. And if it is your tree that is dead, that is the cheapest possible moment to deal with it.\n\nNot legal or insurance advice; talk to your insurer. Your declarations page and your adjuster beat anything written here, and liability questions are for an attorney rather than a tree company. There is a fuller set of neighbour-tree answers, each one cited to a North Carolina source, on our neighbour tree problems page — linked below.`,
        },
        {
          heading: "Serving All of Onslow County",
          text: "We respond to storm calls across Jacksonville, Richlands, Swansboro, Sneads Ferry, Hubert, Surf City, and all surrounding communities in Onslow County. Our crews are local — we're not dispatching from Raleigh or Charlotte. When a storm hits here, we're ready here.",
        },
      ]}
      /* The insurance section above quotes the NC Department of Insurance, so the
         source is linked rather than just named. `sections` takes plain text, so
         an outbound link needs the caseStudy slot. */
      caseStudy={
        <section id="insurance-source" className="py-12 bg-black border-t border-gray-800">
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
      }
      faqs={[
        {
          question: "How quickly can you respond after a storm in Jacksonville, NC?",
          answer: "Most storm calls are handled same-day or next-day. Active hazards — trees on structures, blocking roads, or near power lines — are prioritized and moved to the front of the queue. Call us as soon as it's safe to do so and we'll get a crew dispatched.",
        },
        {
          question: "Will my homeowners insurance pay for storm damage tree removal?",
          answer: "Generally yes when the tree has damaged a covered structure — the house, garage, fence or an outbuilding — and your deductible applies. We photograph the damage before we touch anything, itemize the invoice so each line maps to something an adjuster can approve, bill your insurance directly and speak to your adjuster. What we will not do is tell you an outcome is guaranteed; that call belongs to your carrier.",
        },
        {
          question: "Do you bill insurance directly?",
          answer: "Yes. We bill your insurance directly and work with your adjuster, doing everything we can so your cost stays at your normal deductible. Direct billing applies to mitigation work — a tree on the house or on another covered structure, where getting it off and tarping the opening is what stops the damage getting worse. A yard tree that came down and hit nothing often is not covered at all, as the $500 standard provision above explains, so that one is usually a job you are paying for directly. We will tell you which of the two you have before we start.",
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
        },
      ]}
      guides={{
        heading: "Guides & Pricing",
        intro: "What to check on your property once the weather clears:",
        links: [
          {
            href: "/storm-damage-trees-guide",
            label: "What to do after storm damage to your trees",
            blurb: "How to assess the damage safely and what to photograph before cleanup starts."
          },
          {
            href: "/leaning-tree-dangerous-after-storm",
            label: "Is a leaning tree dangerous after a storm?",
            blurb: "Why a tree that survived the storm can still come down on a calm day."
          },
          {
            href: "/tree-removal-cost-north-carolina",
            label: "How much tree removal costs in North Carolina",
            blurb: "Price ranges for storm-damaged and hazardous trees across the state."
          },
          {
            href: "/debris-hauling-jacksonville-nc",
            label: "Debris hauling",
            blurb: "When the tree is already down and the pile is the whole problem."
          },
          {
            href: "/resistograph-tree-testing-jacksonville-nc",
            label: "Resistograph tree testing",
            blurb: "Finding the hollow trunk before the next storm does."
          }
        ]
      }}
      relatedServices={[
        { label: "Emergency Tree Service", href: "/emergency-tree-service-jacksonville-nc" },
        { label: "Tree Removal", href: "/tree-removal-jacksonville-nc" },
        { label: "Debris Hauling", href: "/debris-hauling-jacksonville-nc" },
        { label: "Residential Tree Service", href: "/residential-tree-service-jacksonville-nc" },
        { label: "Commercial Tree Service", href: "/commercial-tree-service-jacksonville-nc" },
      ]}
      finalCta={{
        heading: "Storm Hit? We're Ready to Help.",
        text: "Call Godhans Tree Company 24/7 for storm cleanup in Jacksonville, NC and across Onslow County. Fast response, fully insured.",
        buttonText: "Call Now — 24/7",
      }}
    />
  );
}
