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
        }
      ]}
    />
  );
}
