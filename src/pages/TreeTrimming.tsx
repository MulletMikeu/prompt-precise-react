import ServicePage from './ServicePage';

export default function TreeTrimming() {
  return (
    <ServicePage
      title="Tree Trimming in Jacksonville, NC"
      subtitle="Professional Tree Trimming & Pruning to Keep Your Trees Healthy and Safe"
      slug="tree-trimming-jacksonville-nc"
      description="Professional Tree Trimming & Pruning to Keep Your Trees Healthy and Safe"
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Tree trimming in Jacksonville, NC helps improve tree health, safety, and appearance. Regular trimming removes dead or overgrown branches, reduces storm risk, and keeps your property looking its best. We provide safe, affordable trimming with free estimates."
      sections={[
        {
          heading: "Expert Tree Trimming Services in Jacksonville, NC",
          text: "Proper tree trimming is essential for maintaining healthy, strong, and attractive trees. Our team provides professional trimming and pruning services to remove dead limbs, improve structure, and prevent potential hazards.\n\nWhether your trees need seasonal maintenance or corrective pruning, we use the right techniques to promote long-term growth and safety."
        },
        {
          heading: "Benefits of Professional Tree Trimming",
          text: "• Improves tree health and growth\n• Removes dead or diseased branches\n• Reduces risk of falling limbs\n• Enhances curb appeal\n• Prevents interference with power lines or structures"
        },
        {
          heading: "When Should You Trim Your Trees?",
          text: "Trees should be trimmed regularly to maintain their health and structure. You may need trimming if branches are overgrown, blocking sunlight, or becoming a safety concern.\n\nSeasonal trimming is also recommended to prepare for storms and reduce the risk of damage during high winds."
        },
        {
          heading: "Our Tree Trimming Process",
          text: "We follow a careful process to ensure safe and effective trimming:\n\n• Inspection of tree health and structure\n• Identification of branches to remove\n• Precision trimming using proper techniques\n• Cleanup of all debris"
        },
        {
          heading: "Affordable Tree Trimming You Can Trust",
          text: "Tree trimming costs depend on the size of the tree and the amount of work required. We offer free estimates and transparent pricing so you know exactly what to expect.\n\n✔ Licensed & insured\n✔ Experienced crew\n✔ Safe, professional equipment\n✔ Honest pricing"
        }
      ]}
      faqs={[
        { question: "How often should trees be trimmed?", answer: "Most trees should be trimmed every 1–3 years depending on the species and growth rate." },
        { question: "What is the best time of year to trim trees?", answer: "Late winter or early spring is often ideal, but trimming can be done year-round depending on the situation." },
        { question: "Is tree trimming necessary?", answer: "Yes, regular trimming helps maintain tree health, prevent hazards, and improve appearance." },
        { question: "Can trimming damage a tree?", answer: "Improper trimming can harm a tree, which is why it's best handled by trained professionals." }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Schedule Your Tree Trimming Service Today",
        text: "Keep your trees healthy, safe, and looking their best with professional tree trimming services in Jacksonville, NC. Contact us today for a free estimate.",
        buttonText: "Call Now"
      }}
    />
  );
}
