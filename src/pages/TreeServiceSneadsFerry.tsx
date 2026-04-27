import ServicePage from './ServicePage';

export default function TreeServiceSneadsFerry() {
  return (
    <ServicePage
      title="Tree Service in Sneads Ferry, NC"
      subtitle="Trusted Tree Removal, Trimming & Stump Grinding in Sneads Ferry"
      slug="tree-service-sneads-ferry-nc"
      description="Tree service in Sneads Ferry, NC: removal, trimming, stump grinding, and 24/7 coastal storm cleanup. Free estimates from Godhans."
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Sneads Ferry homeowners face unique coastal challenges — high winds, salt air, and storm-prone trees. Godhans Tree Company provides expert tree removal, trimming, stump grinding, and emergency storm cleanup throughout Sneads Ferry and the Topsail area, with fast response times and free estimates."
      sections={[
        {
          heading: "Local Tree Experts Serving Sneads Ferry, NC",
          text: "Sneads Ferry's coastal location means trees take a beating from hurricanes, nor'easters, and constant salt-laden winds off the New River Inlet. Our crews understand how coastal pines, live oaks, and palms behave under storm stress and how to remove or maintain them safely.\n\nFrom waterfront properties to inland subdivisions, we handle every job with the right equipment and proper insurance — protecting your home, deck, fence, and landscaping."
        },
        {
          heading: "Complete Tree Services in Sneads Ferry",
          text: "Our services include:\n\n• Tree Removal — large pines, oaks, and storm-damaged trees\n• Tree Trimming & Pruning — health, safety, and view clearing\n• Stump Grinding — flush with grade, debris hauled off\n• 24/7 Emergency Tree Service — fallen trees on homes, vehicles, or roads\n• Land & Lot Clearing — for new builds and waterfront access"
        },
        {
          heading: "Why Sneads Ferry Homeowners Choose Godhans",
          text: "✔ Fast response across Sneads Ferry, North Topsail Beach, and Surf City\n✔ Fully licensed, bonded, and insured\n✔ Right-sized equipment for tight coastal lots\n✔ Storm response prioritization for hurricane damage\n✔ Free, no-obligation estimates\n\nWe show up on time, work safely, and leave your property cleaner than we found it."
        }
      ]}
      faqs={[
        { question: "Do you service Sneads Ferry, NC for tree work?", answer: "Yes — we provide full tree services in Sneads Ferry including removal, trimming, stump grinding, and 24/7 emergency response." },
        { question: "Can you handle hurricane and storm-damaged trees?", answer: "Absolutely. Storm response is one of our specialties. Call (618) 704-4861 anytime — we respond same-day to fallen trees on homes, vehicles, and roads in Sneads Ferry." },
        { question: "How much does tree removal cost in Sneads Ferry?", answer: "Most removals run $300–$2,500+ depending on tree size, access, and proximity to structures. We provide free on-site estimates with transparent, no-pressure pricing." }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Schedule Tree Service in Sneads Ferry, NC",
        text: "Need professional tree service in Sneads Ferry? Contact Godhans today for a free estimate and fast, reliable coastal tree care.",
        buttonText: "Call Now"
      }}
    />
  );
}
