import ServicePage from './ServicePage';

export default function TreeServiceSwansboro() {
  return (
    <ServicePage
      title="Tree Service in Swansboro, NC"
      subtitle="Trusted Tree Removal, Trimming & Stump Grinding in Swansboro"
      slug="tree-service-swansboro-nc"
      description="Professional tree service in Swansboro, NC. Expert tree removal, trimming, stump grinding, and 24/7 emergency storm cleanup. Free estimates from Godhans Tree Company."
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Swansboro's mature oaks, pines, and waterfront live oaks need expert care to stay safe and healthy. Godhans Tree Company provides professional tree removal, trimming, stump grinding, and 24/7 storm response throughout Swansboro, Cedar Point, and the Crystal Coast area."
      sections={[
        {
          heading: "Local Tree Experts Serving Swansboro, NC",
          text: "Swansboro is known for its beautiful tree canopy — historic live oaks downtown, towering loblolly pines in surrounding neighborhoods, and waterfront properties exposed to coastal weather. Our crews have years of experience working in this exact environment.\n\nWe protect what matters: your home, your hardscaping, and your landscaping. Every job includes thorough cleanup, and we leave the worksite spotless."
        },
        {
          heading: "Complete Tree Services in Swansboro",
          text: "Our services include:\n\n• Tree Removal — including large oaks, pines, and hazard trees\n• Tree Trimming & Pruning — proper structural pruning that protects tree health\n• Stump Grinding — ground below grade, debris removed\n• 24/7 Emergency Tree Service — storm damage, fallen trees, hanging limbs\n• Lot Cleanup & Land Clearing"
        },
        {
          heading: "Why Swansboro Homeowners Choose Godhans",
          text: "✔ Local crew that knows Swansboro and Cedar Point\n✔ Fully licensed, bonded, and insured\n✔ Proper equipment for tight historic-district lots\n✔ Same-day storm response\n✔ Free, no-obligation estimates with honest pricing\n\nWe treat every property like our own — careful, efficient, and clean."
        }
      ]}
      faqs={[
        { question: "Do you service Swansboro, NC for tree work?", answer: "Yes — we provide full tree services in Swansboro including removal, trimming, stump grinding, and 24/7 emergency response." },
        { question: "Can you remove large oaks near my house in Swansboro?", answer: "Yes. We specialize in large hazardous removals near structures using proper rigging, cranes when needed, and full insurance coverage. Free on-site estimate included." },
        { question: "How fast can you respond to storm damage in Swansboro?", answer: "We offer 24/7 emergency response. Most storm calls in Swansboro are responded to within hours. Call (618) 704-4861 anytime." }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Schedule Tree Service in Swansboro, NC",
        text: "Need professional tree service in Swansboro? Contact Godhans today for a free estimate and reliable, careful tree care.",
        buttonText: "Call Now"
      }}
    />
  );
}
