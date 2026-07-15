import ServicePage from './ServicePage';

export default function TreeServiceHubert() {
  return (
    <ServicePage
      title="Tree Service in Hubert, NC"
      subtitle="Trusted Tree Removal, Trimming & Stump Grinding in Hubert, NC"
      slug="tree-service-hubert-nc"
      credentialBlock
      description="Professional tree service in Hubert, NC. Expert tree removal, trimming, stump grinding, and storm cleanup. Free estimates from Godhans Tree Company."
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Tree service in Hubert, NC helps keep your property safe, clean, and well-maintained. We provide expert tree removal, trimming, and stump grinding services with fast response times and free estimates for residents in the Hubert area."
      sections={[
        {
          heading: "Local Tree Experts Serving Hubert, NC",
          text: "We provide reliable tree services throughout Hubert, NC, helping homeowners manage tree growth, storm damage, and property safety. Our team understands the challenges trees can present in coastal North Carolina, including storm exposure and rapid growth.\n\nWhether you need routine trimming or emergency tree removal, we're ready to help with professional service you can trust."
        },
        {
          heading: "Complete Tree Services in Hubert",
          text: "Our services include:\n\n• Tree Removal\n• Tree Trimming & Pruning\n• Stump Grinding\n• Emergency Tree Service"
        },
        {
          heading: "Why Homeowners in Hubert Choose Us",
          text: "We know Hubert and the Swansboro-area terrain, and we focus on delivering safe, high-quality results with every job."
        }
      ]}
      faqs={[
        { question: "Do you service Hubert NC for tree work?", answer: "Yes, we provide full tree services in Hubert, including removal, trimming, and stump grinding." },
        { question: "Can you handle storm-damaged trees in Hubert?", answer: "Absolutely. We offer emergency tree services for storm damage and hazardous trees." },
        { question: "How do I get a quote for tree service in Hubert?", answer: "Simply contact us and we'll provide a free estimate based on your needs." }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Schedule Tree Service in Hubert, NC",
        text: "Need professional tree service in Hubert, NC? Contact us today for a free estimate and fast, reliable service.",
        buttonText: "Call Now"
      }}
    />
  );
}
