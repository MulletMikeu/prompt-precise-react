import ServicePage from './ServicePage';

export default function StormCleanup() {
  return (
    <ServicePage
      title="Storm Cleanup Jacksonville NC"
      subtitle="Fast Debris Removal & Downed Tree Extraction — Same-Day Response Available"
      slug="storm-cleanup-jacksonville-nc"
      description="Storm cleanup in Jacksonville, NC. Fast response for downed trees, debris removal & hazardous limbs across Onslow County. Call 24/7 — Godhans Tree Company."
      ctaText="Call Now — 24/7 Response"
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
          heading: "Does Insurance Cover Storm Damage Cleanup?",
          text: "In most cases, homeowners insurance covers tree removal costs when a tree falls on a covered structure — home, garage, fence, or outbuilding. Coverage typically includes removal from the structure itself, not always full yard cleanup.\n\nWe photograph all damage before work begins and provide itemized invoices that work with most insurance claims. If your adjuster needs to see the site, we can coordinate around their schedule. We're not insurance advisors, but we've worked with hundreds of Jacksonville homeowners through storm claims and know how the process works.",
        },
        {
          heading: "Serving All of Onslow County",
          text: "We respond to storm calls across Jacksonville, Richlands, Swansboro, Sneads Ferry, Hubert, Surf City, and all surrounding communities in Onslow County. Our crews are local — we're not dispatching from Raleigh or Charlotte. When a storm hits here, we're ready here.",
        },
      ]}
      faqs={[
        {
          question: "How quickly can you respond after a storm in Jacksonville, NC?",
          answer: "Most storm calls are handled same-day or next-day. Active hazards — trees on structures, blocking roads, or near power lines — are prioritized and moved to the front of the queue. Call us as soon as it's safe to do so and we'll get a crew dispatched.",
        },
        {
          question: "Will my homeowners insurance pay for storm damage tree removal?",
          answer: "Typically yes, when a tree has fallen on a covered structure. Insurance usually covers the cost of removing the tree from the structure, plus damage repairs. Cleanup of trees that fell in the yard without hitting anything may not be covered. We document all damage and provide detailed invoices that work with insurance claims.",
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
      relatedServices={[
        { label: "Emergency Tree Service", href: "/emergency-tree-service-jacksonville-nc" },
        { label: "Tree Removal", href: "/tree-removal-jacksonville-nc" },
        { label: "Tree Trimming", href: "/tree-trimming-jacksonville-nc" },
      ]}
      finalCta={{
        heading: "Storm Hit? We're Ready to Help.",
        text: "Call Godhans Tree Company 24/7 for storm cleanup in Jacksonville, NC and across Onslow County. Fast response, fully insured.",
        buttonText: "Call Now — 24/7",
      }}
    />
  );
}
