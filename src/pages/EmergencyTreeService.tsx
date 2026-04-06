import ServicePage from './ServicePage';

export default function EmergencyTreeService() {
  return (
    <ServicePage
      title="Emergency Tree Service in Jacksonville, NC"
      subtitle="24/7 Fast Response for Fallen, Damaged, or Dangerous Trees"
      slug="emergency-tree-service-jacksonville-nc"
      description="24/7 emergency tree service in Jacksonville, NC. Fast response for fallen trees, storm damage, and hazardous limbs. Call Godhans Tree Company now."
      ctaText="Call Now — Immediate Assistance"
      quickAnswer="If you have a fallen or dangerous tree in Jacksonville, NC, you need immediate professional help. Our emergency tree service provides fast response to remove hazardous trees, prevent further damage, and restore safety to your property."
      sections={[
        {
          heading: "When You Need Emergency Tree Service",
          text: "Call us immediately if:\n\n• A tree has fallen on your home, driveway, or vehicle\n• A tree is leaning dangerously after a storm\n• Large branches have broken and are at risk of falling\n• Storm damage has weakened a tree's structure\n• A tree is blocking access to your property"
        },
        {
          heading: "Our Emergency Response Process",
          text: "We act quickly to secure your property and remove hazards:\n\n• Immediate call response and dispatch\n• On-site assessment of the situation\n• Safe removal of dangerous trees or limbs\n• Cleanup and debris removal\n\nOur team is equipped to handle urgent situations safely and efficiently."
        },
        {
          heading: "Trusted Emergency Tree Service in Jacksonville, NC",
          text: "When you're dealing with a tree emergency, you need a team you can trust to respond quickly and work safely.\n\n✔ Fast response times\n✔ Licensed & insured professionals\n✔ Experienced with storm damage\n✔ Safe and efficient equipment"
        },
        {
          heading: "Emergency Service Pricing",
          text: "Emergency tree service costs can vary depending on the situation, time, and complexity. We provide clear communication and upfront pricing so you know what to expect."
        }
      ]}
      faqs={[
        { question: "Do you offer 24/7 emergency tree service?", answer: "Yes, we are available for emergency situations and respond as quickly as possible." },
        { question: "How fast can you arrive?", answer: "Response times vary, but we prioritize urgent calls and aim to arrive as quickly as possible." },
        { question: "What should I do if a tree falls on my house?", answer: "Stay safe, avoid the area, and call a professional immediately. We can safely remove the tree and assess the situation." },
        { question: "Is emergency tree service more expensive?", answer: "Emergency services may cost more due to urgency and conditions, but we provide clear pricing before work begins." }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Call Now for Emergency Tree Service",
        text: "If you have a tree emergency in Jacksonville, NC, don't wait. Call now for fast, professional assistance and protect your property from further damage.",
        buttonText: "Call Now — We're Ready to Help"
      }}
    />
  );
}
