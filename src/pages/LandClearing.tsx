import ServicePage from './ServicePage';

export default function LandClearing() {
  return (
    <ServicePage
      title="Land Clearing Jacksonville NC"
      subtitle="Lot Clearing, Rough Grading & Full Site Prep — Free Estimates"
      slug="land-clearing-jacksonville-nc"
      description="Land clearing and lot prep in Jacksonville, NC. Veteran-owned crew with heavy equipment handles residential and commercial clearing, grading, and debris removal. Free estimates — call Godhans Tree Company."
      ctaText="Call for a Free Estimate"
      quickAnswer="Godhans Tree Company provides full land clearing services in Jacksonville, NC and across Onslow County. Whether you need a residential lot cleared for construction or a commercial site prepped for development, our veteran-owned crew brings the heavy equipment and the experience to take it down to bare earth fast."
      sections={[
        {
          heading: "Land Clearing Services We Provide",
          text: "From a single residential lot to large-scale commercial acreage, our crew handles every phase of site clearing:\n\n• Full lot clearing — trees, brush, stumps, and understory\n• Rough grading and site leveling\n• Ditch work and basic drainage prep\n• Debris removal and haul-away\n• Brush and vegetation clearing for fence lines and access roads\n• Stump grinding and root removal after clearing\n\nWe use the right equipment for the job — from compact machines for tight residential access to full-size excavators and heavy equipment for large commercial sites.",
        },
        {
          heading: "Built for Jacksonville's Terrain",
          text: "Clearing land in coastal North Carolina comes with challenges: sandy soil, high water tables, dense pine and hardwood growth, and properties that back up to wetlands or creeks. Our crew knows the terrain and knows what equipment and techniques work here.\n\nWe assess each site before we start — looking at soil conditions, slope, drainage patterns, and access — so the job gets done right the first time without surprises.",
        },
        {
          heading: "Veteran-Owned, Fully Licensed & Insured",
          text: "Godhans Tree Company is veteran-owned and family-operated. Every crew member is part of our team — no subcontractors, no strangers on your property. We carry full liability and workers' comp coverage on every job.\n\n✔ Veteran-owned and community-driven\n✔ Fully licensed and insured\n✔ No subcontractors — our crew, our accountability\n✔ Free on-site estimates, no obligation\n✔ Serving Jacksonville, Richlands, Swansboro, Sneads Ferry, and all of Onslow County",
        },
        {
          heading: "What to Expect After We Finish",
          text: "When we leave, your site will be cleared, graded to rough grade, and ready for the next phase — whether that's a foundation pour, a fence installation, or a landscaping build-out. We haul away all debris and leave the property clean.\n\nIf you need stump grinding as part of the clearing process, we handle that too. Just let us know during the estimate.",
        },
      ]}
      faqs={[
        {
          question: "How much does land clearing cost in Jacksonville, NC?",
          answer: "Land clearing costs vary based on acreage, density of growth, terrain, and whether grading or stump removal is included. Residential lot clearing in Jacksonville typically starts around $1,500 for a quarter-acre lot. Larger or more heavily wooded properties will cost more. We provide free on-site estimates so you get an accurate number before committing.",
        },
        {
          question: "Do you handle permits for land clearing in NC?",
          answer: "Permit requirements for land clearing in North Carolina depend on the size of the disturbed area and whether it's in a regulated watershed or floodplain. For sites disturbing more than one acre, a land-disturbance permit is typically required from the NC DEMLR. We can advise on what you're likely to need and help coordinate, but permits are the responsibility of the property owner or developer.",
        },
        {
          question: "Can you clear land near wetlands or a creek?",
          answer: "Yes, but wetland buffers and riparian setbacks must be respected. In North Carolina, clearing within 50 feet of a stream or wetland typically requires a buffer authorization from the NC Division of Water Resources. We assess these boundaries before we start work so the job stays compliant.",
        },
        {
          question: "How long does it take to clear a residential lot?",
          answer: "Most residential lots in Jacksonville can be cleared in one to two days, depending on the density of growth and site conditions. Larger commercial properties take longer — we'll give you a timeline during the estimate.",
        },
      ]}
      relatedServices={[
        { label: "Tree Removal", href: "/tree-removal-jacksonville-nc" },
        { label: "Stump Grinding", href: "/stump-grinding-jacksonville-nc" },
        { label: "Emergency Tree Service", href: "/emergency-tree-service-jacksonville-nc" },
      ]}
      finalCta={{
        heading: "Ready to Clear Your Property?",
        text: "Call Godhans Tree Company for a free on-site land clearing estimate in Jacksonville, NC and across Onslow County.",
        buttonText: "Call for a Free Estimate",
      }}
    />
  );
}
