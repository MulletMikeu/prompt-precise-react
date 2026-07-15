import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { PRICING } from '../data/siteData';

export default function TreeServiceJacksonvilleNC() {
  return (
    <ServicePage
      title="Tree Service in Jacksonville, NC"
      subtitle="Professional Tree Removal, Trimming, Stump Grinding & Emergency Services"
      slug="tree-service-jacksonville-nc"
      credentialBlock
      description="Local tree service in Jacksonville, NC: removal, trimming, stump grinding, and 24/7 emergency response. Free estimates from Godhans Tree Company."
      ctaText="Call Now"
      quickAnswer="Looking for reliable tree service in Jacksonville, NC? Godhans Tree Company provides professional tree removal, tree trimming, stump grinding, and emergency tree services throughout Jacksonville and Onslow County. Fully insured and trusted by local homeowners."
      sections={[
        {
          heading: "Jacksonville's Trusted Tree Service Professionals",
          text: "When it comes to tree care in Jacksonville, NC, you need a team that understands the local landscape and responds quickly. Godhans Tree Company has been serving Jacksonville and the surrounding communities with professional tree services that homeowners and property managers trust.\n\nOur crew is fully insured, equipped with professional-grade tools, and ready to handle any tree situation — from routine trimming to emergency storm damage. We know the trees, soil, and weather patterns in Onslow County, and that local expertise makes a difference in every job we do.\n\nWhether you're in downtown Jacksonville, near Camp Lejeune, or in nearby areas like Richlands, Hubert, Sneads Ferry, or Swansboro, we provide fast response times and reliable service you can count on."
        },
        {
          heading: "Tree Removal in Jacksonville, NC",
          text: "Need a tree removed safely? Our tree removal team handles everything from small yard trees to large, hazardous removals near structures and power lines. We assess every job carefully to ensure safety and efficiency."
        },
        {
          heading: "Tree Trimming in Jacksonville, NC",
          text: "Regular tree trimming keeps your property looking great and prevents overgrown branches from becoming safety hazards. Our team provides expert trimming that maintains tree health while improving curb appeal."
        },
        {
          heading: "Stump Grinding in Jacksonville, NC",
          text: "After a tree is removed, the stump doesn't have to stay. Our stump grinding service removes unsightly stumps quickly and efficiently, giving you back usable yard space."
        },
        {
          heading: "Emergency Tree Service in Jacksonville, NC",
          text: "Storms and severe weather can cause dangerous tree damage at any time. Our emergency tree service team is ready to respond quickly to fallen trees, broken limbs, and hazardous situations throughout Jacksonville and surrounding areas."
        },
        {
          heading: "Why Choose Godhans Tree Company in Jacksonville?",
          text: "There are many reasons Jacksonville homeowners trust us with their tree care:\n\n• Local Jacksonville experts who know the area\n• Fast emergency response — available when you need us\n• Affordable, transparent pricing with free estimates\n• Professional equipment for safe, efficient work\n• Military discounts for Camp Lejeune families"
        },
        {
          heading: "Areas We Serve Near Jacksonville, NC",
          text: "While Jacksonville is our home base, we proudly serve communities throughout Onslow County and beyond:\n\n• Jacksonville, NC (primary service area)\n• Richlands, NC\n• Hubert, NC\n• Sneads Ferry, NC\n• Swansboro, NC\n• Holly Ridge, NC\n• Hampstead, NC\n• And nearby communities within 20 minutes\n\nNo matter where you are in the greater Jacksonville area, we can help with your tree service needs."
        },
        {
          heading: "Storm Damage & Tree Safety Resources",
          text: "Living in coastal North Carolina means dealing with storms. We've put together helpful guides to keep you informed."
        }
      ]}
      sectionLinks={{
        1: { href: "/tree-removal-jacksonville-nc", label: "Learn more about our tree removal services →" },
        2: { href: "/tree-trimming-jacksonville-nc", label: "Learn more about our tree trimming services →" },
        3: { href: "/stump-grinding-jacksonville-nc", label: "Learn more about our stump grinding services →" },
        4: { href: "/emergency-tree-service-jacksonville-nc", label: "Learn more about our emergency tree services →" },
        7: [
          { href: "/storm-damage-trees-guide", label: "What to Do After Storm Damage to Trees" },
          { href: "/tree-removal-cost-north-carolina", label: "How Much Does Tree Removal Cost in NC?" },
          { href: "/do-you-need-a-permit-to-remove-a-tree-nc", label: "Do You Need a Permit to Remove a Tree in NC?" },
          { href: "/tree-trimming-vs-pruning", label: "Tree Trimming vs Pruning: What's the Difference?" },
          { href: "/leaning-tree-dangerous-after-storm", label: "Is a Leaning Tree Dangerous After a Storm?" }
        ]
      }}
      faqs={[
        {
          question: "How much does tree service cost in Jacksonville, NC?",
          answer: `Tree service costs vary by service, tree size, and complexity. Tree removal starts at an ${PRICING.removal.minimum} minimum and most jobs run ${PRICING.removal.most}; trimming runs ${PRICING.trimming.standard}. Contact us for a free estimate specific to your situation.`
        },
        {
          question: "Do I need a permit to remove a tree in Jacksonville, NC?",
          answer: "In most cases, you do not need a permit to remove a tree on private residential property in Jacksonville, NC. However, certain situations may require approval. We can help you navigate local guidelines."
        },
        {
          question: "How quickly can you respond to tree emergencies?",
          answer: "We offer fast emergency response for storm damage and hazardous tree situations in Jacksonville and surrounding areas. Contact us immediately and we'll prioritize your safety."
        },
        {
          question: "Do you offer free estimates for tree service?",
          answer: "Yes, we provide free estimates for all tree services in Jacksonville, NC. Call us or fill out our contact form to schedule yours."
        },
        {
          question: "What tree services do you offer in Jacksonville?",
          answer: "We offer complete tree care including tree removal, tree trimming, stump grinding, emergency tree service, and storm damage cleanup throughout Jacksonville and Onslow County."
        }
      ]}
      finalCta={{
        heading: "Call Now for Tree Service in Jacksonville, NC",
        text: "Ready to get started? Contact Godhans Tree Company today for fast, professional tree service in Jacksonville, NC. Free estimates, affordable pricing, and reliable results.",
        buttonText: "Call Now"
      }}
      relatedServices={[
        { label: "Tree Removal", href: "/tree-removal-jacksonville-nc" },
        { label: "Tree Trimming", href: "/tree-trimming-jacksonville-nc" },
        { label: "Stump Grinding", href: "/stump-grinding-jacksonville-nc" },
        { label: "Emergency Tree Service", href: "/emergency-tree-service-jacksonville-nc" },
        { label: "Tree Service in Richlands", href: "/tree-service-richlands-nc" },
        { label: "Tree Service in Hubert", href: "/tree-service-hubert-nc" },
        { label: "Tree Service in Sneads Ferry", href: "/tree-service-sneads-ferry-nc" },
        { label: "Tree Service in Swansboro", href: "/tree-service-swansboro-nc" },
        { label: "Tree Service in Camp Lejeune", href: "/tree-service-camp-lejeune-nc" }
      ]}
    />
  );
}
