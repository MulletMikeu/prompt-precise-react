import ServicePage from './ServicePage';
import StormInsuranceLead from '@/components/sections/StormInsuranceLead';

export default function StormCleanup() {
  return (
    <ServicePage
      title="Storm Cleanup Jacksonville NC"
      subtitle="Fast Debris Removal & Downed Tree Extraction — Same-Day Response Available"
      slug="storm-cleanup-jacksonville-nc"
      credentialBlock
      description="Storm cleanup in Jacksonville, NC. Fast response for downed trees, debris removal & hazardous limbs across Onslow County. Call 24/7 — Godhans Tree Company."
      ctaText="Call Now — 24/7 Response"
      /* Same approved STORM_LEAD wording as the emergency page, above the
         fold on both. Do not edit it here — it lives in siteData. */
      leadBlock={<StormInsuranceLead />}
      quickAnswer="When a storm hits Onslow County, Godhans Tree Company is ready to move. We handle downed trees, scattered debris, hanging limbs, and structural damage — with same-day and next-day availability. Call us anytime and we'll dispatch an insured crew to clear the hazard and get your property safe again."
      sections={[
        {
          heading: "Storm Cleanup Services We Provide",
          text: "Eastern NC storms can hit hard and fast. We're on the ground quickly to handle every phase of the cleanup:\n\n• Downed tree removal from homes, fences, driveways, and vehicles\n• Full debris removal and haul-away\n• Broken limb and hanging branch clearing\n• Hazard tree assessment and removal\n• Driveway and road clearance\n• Debris and brush chipping\n• Insurance damage documentation support\n\nResidential and commercial properties — we handle both.",
        },
        {
          heading: "When to Call Us Right Away",
          text: "Some storm situations need immediate attention. Call us without waiting if:\n\n⚠ A tree or large limb has fallen on your home, garage, or vehicle\n⚠ A tree is blocking your driveway or emergency access\n⚠ Limbs are resting on or near power lines\n⚠ A tree is leaning at a new angle after the storm\n⚠ You see visible splits or cracks in trunk or major limbs\n\nLeaning trees and hung-up limbs can fall without warning — especially with wet, unstable soil after heavy rain. The sooner we assess it, the better.",
        },
        {
          heading: "What Insurance Typically Covers After a Storm",
          text: "This is the page where we keep all of it, so there is one accurate version rather than four half-versions scattered across the site. We are a tree company, not your insurer — none of this is advice about your specific policy, and your declarations page beats anything written here.\n\nWHEN A TREE DAMAGES A COVERED STRUCTURE. This is the case people mean when they ask. A homeowners policy generally responds when a tree hits the house, the garage, a fence or an outbuilding, and the work to get the tree off the structure and repair it is the covered part. Your deductible applies.\n\nWHEN A TREE FALLS AND HITS NOTHING. This is the answer that surprises people, so it is worth being blunt: a tree lying in your yard having damaged nothing is usually your problem, not the insurer's. The North Carolina Department of Insurance puts the standard limit plainly — the policy “will pay reasonable expense, up to $500 for any one loss, for the removal of trees from your premises provided that the tree has damaged a structure or blocked the driveway.” Note both halves of that condition. Damaged a structure, OR blocked the driveway. A healthy tree that came down across the back lawn in a thunderstorm and hit nothing typically meets neither.\n\nSo the $500 figure is not the cleanup budget for a big tree, and a mature hardwood on the ground is several times that in hauling alone. Check your own declarations page — some carriers write more than the standard, and a few write less.\n\nLIGHTNING IS USUALLY DIFFERENT. Lightning is typically a named peril on a homeowners policy in its own right, which is why a lightning-struck tree is often treated differently from one the wind pushed over. If lightning is what took your tree, say so explicitly when you open the claim rather than filing it as storm damage generally.\n\nDO NOT WAIT FOR THE ADJUSTER TO STOP ACTIVE DAMAGE. This is the most expensive mistake we see. If there is a hole in your roof and rain coming through it, the damage is getting worse by the hour, and every policy expects you to take reasonable steps to prevent further loss — not to sit under it waiting for an appointment. Photograph everything first, from several angles, before anybody moves anything. Then get the tree off and the opening covered. Photographs are what let you prove what the storm did versus what the next three days of rain did.\n\nWHAT WE DO ON OUR SIDE. We photograph the damage before we touch it, tarp openings as part of the emergency call, itemize the invoice so each line maps to something an adjuster can approve, bill your insurance directly, and talk to your adjuster. We have worked a lot of these claims in Onslow County and we know what documentation moves them along. What we will not do is tell you an outcome is guaranteed — that decision is the carrier's, and any tree company promising otherwise is promising something it does not control.",
        },
        {
          heading: "My Neighbor's Tree Fell on My Property — Who Pays?",
          text: "This is the single most common question we get after a storm, and the answer is usually not the one people are hoping for.\n\nTHE GENERAL RULE: YOUR POLICY, NOT THEIRS. A healthy tree blown down in a storm is treated as an act of nature. The property it lands on is the one that claims it — you file with your own homeowners insurance and handle the cleanup, even though the tree grew in someone else's yard. The Insurance Information Institute puts it plainly: you are insured no matter who owns the tree, and in most cases an insurer is not going to spend time working out where a tree or its branches originally came from. Same limits apply as anywhere else on this page, including the modest cap on removal itself.\n\nTHE EXCEPTION, AND IT IS A REAL ONE. If the tree was visibly dead, diseased or neglected, and the owner knew or reasonably should have known, that changes the picture — this is negligence rather than an act of nature, and the tree's owner may be liable. Poor maintenance is not something a homeowners policy is meant to cover. In practice your insurer may pay your claim and then pursue the neighbor's insurer to recover it, a process called subrogation; if that succeeds you can get your deductible back.\n\nWHAT THAT MEANS PRACTICALLY. If you have been looking at a dead tree leaning over your fence for two years, document it now, while it is still standing. Photographs with dates, and a written note to your neighbor, are worth considerably more than your recollection afterward. And if it is your tree that is dead, that is the cheapest possible moment to deal with it.\n\nNot legal or insurance advice; talk to your insurer. Your declarations page and your adjuster beat anything written here, and liability questions are for an attorney rather than a tree company.",
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
                href="https://www.ncdoi.gov/consumers/homeowners-insurance/faqs-about-homeowners-insurance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold"
              >
                North Carolina Department of Insurance, homeowners insurance FAQs
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
          question: "What if a neighbor's tree fell onto my property?",
          answer: "In North Carolina, the property owner where the damage occurred is generally responsible for removal costs — even if the tree originated on a neighbor's property. However, if negligence can be shown (the neighbor knew the tree was dead or hazardous and failed to act), there may be grounds for recovery. We recommend documenting everything and contacting your insurance company first.",
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
