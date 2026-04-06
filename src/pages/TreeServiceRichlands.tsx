import ServicePage from './ServicePage';

export default function TreeServiceRichlands() {
  return (
    <ServicePage
      title="Tree Service in Richlands, NC"
      subtitle="Trusted Tree Care for Richlands Homeowners & Businesses"
      slug="tree-service-richlands-nc"
      description="Professional tree service in Richlands, NC. Tree removal, trimming, stump grinding, and emergency response. Free estimates from Godhans Tree Company."
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Looking for reliable tree service in Richlands, NC? Our team provides professional tree removal, trimming, stump grinding, and emergency tree care for residential and commercial properties throughout the Richlands area."
      sections={[
        {
          heading: "Full-Service Tree Care in Richlands, NC",
          text: "From routine trimming to emergency storm response, our crew serves Richlands and the surrounding Onslow County area with safe, professional tree care.\n\nWhether you need a hazardous tree removed, branches trimmed back from your roof, or an old stump ground down, we have the equipment and experience to get it done right."
        },
        {
          heading: "Our Services in Richlands",
          text: "• Tree removal – safe takedown of any size tree\n• Tree trimming & pruning – maintain health and appearance\n• Stump grinding – reclaim your yard space\n• Emergency tree service – fast response after storms\n• Lot clearing – prepare land for building or landscaping"
        },
        {
          heading: "Why Richlands Residents Choose Us",
          text: "We're a local team that understands the trees and weather conditions in Onslow County. Richlands homeowners trust us because we show up on time, communicate clearly, and leave properties clean.\n\n✔ Licensed & insured\n✔ Free on-site estimates\n✔ Military discounts available\n✔ Same-week scheduling for most jobs"
        }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Need Tree Service in Richlands?",
        text: "Contact Godhans Tree Company today for a free estimate. We're proud to serve Richlands, NC and the surrounding communities.",
        buttonText: "Call Now"
      }}
    />
  );
}
