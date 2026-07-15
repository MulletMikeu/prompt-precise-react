import ServicePage from './ServicePage';

export default function TreeServiceCampLejeune() {
  return (
    <ServicePage
      title="Tree Service in Camp Lejeune, NC"
      subtitle="Military-Friendly Tree Removal, Trimming & Stump Grinding"
      slug="tree-service-camp-lejeune-nc"
      credentialBlock
      description="Tree service for Camp Lejeune families: removal, trimming, stump grinding, and 24/7 storm cleanup. Military discounts and free estimates."
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Godhans Tree Company proudly serves Camp Lejeune military families and surrounding base housing communities with expert tree removal, trimming, stump grinding, and 24/7 emergency response. We offer military discounts, fast turnaround for PCS moves, and fully insured work that meets base property standards."
      sections={[
        {
          heading: "Tree Service for Camp Lejeune Military Families",
          text: "We understand military life — short timelines for PCS moves, base housing rules, and the need for fast, reliable, fairly-priced service. Our crew has worked with hundreds of Marine and Navy families stationed at Camp Lejeune over the years.\n\nWhether you're prepping a property for a move-out inspection, dealing with storm damage, or need routine trimming for base-adjacent housing, we handle it quickly and professionally."
        },
        {
          heading: "Complete Tree Services Near Camp Lejeune",
          text: "Our services include:\n\n• Tree Removal — including hazard trees and PCS prep\n• Tree Trimming & Pruning\n• Stump Grinding — full removal below grade\n• 24/7 Emergency Tree Service — storm and hurricane response\n• Lot Cleanup — debris hauled, property left spotless"
        },
        {
          heading: "Why Camp Lejeune Families Choose Godhans",
          text: "✔ Military discount on every job\n✔ Fast scheduling around PCS timelines\n✔ Proof of insurance available for base/landlord requirements\n✔ Free, no-obligation estimates with transparent pricing\n✔ 24/7 emergency response for storm damage\n\nWe're proud to support the Marines, Navy, and military families who call Camp Lejeune home."
        }
      ]}
      faqs={[
        { question: "Do you offer a military discount?", answer: "Yes — we offer a military discount for active duty, retired, and veteran families. Just mention it when you call for your free estimate." },
        { question: "Can you provide proof of insurance for base housing or landlords?", answer: "Absolutely. We're fully insured and bondable for commercial work, and we'll provide a current certificate of insurance on request before any work begins." },
        { question: "How fast can you schedule for a PCS move?", answer: "We prioritize military families on tight timelines. Most jobs can be scheduled within 1–2 weeks, and emergency situations are handled same-day." }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Tree Service for Camp Lejeune Families",
        text: "Need fast, reliable tree service near Camp Lejeune? Contact Godhans today for a free estimate and military discount.",
        buttonText: "Call Now"
      }}
    />
  );
}
