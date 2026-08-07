import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { PRICING } from '../data/siteData';

export default function TreeRemovalCost() {
  return (
    <ServicePage
      title="How Much Does Tree Removal Cost in North Carolina? (2026 Guide)"
      metaTitle="Tree Removal Cost in North Carolina (2026 Guide)"
      slug="tree-removal-cost-north-carolina"
      description={`Tree removal in Jacksonville, NC starts at an ${PRICING.removal.minimum} minimum; most jobs run ${PRICING.removal.most} and large or hazardous trees ${PRICING.removal.large}. See full price ranges.`}
      quickAnswer={PRICING.removal.summary}
      sectionLinks={{
        // Section 2 explains why identical trees price differently; tight access is
        // the single biggest driver, so link out to the detail there.
        2: { href: "/tree-removal-tight-spaces-jacksonville-nc", label: "Why tight-access removals cost more" },
      }}
      sections={[
        {
          heading: "Understanding Tree Removal Costs",
          text: "If you're dealing with a damaged, dead, or unwanted tree, one of the first questions you'll have is how much it will cost to remove it. Tree removal pricing can vary widely depending on several key factors.\n\nIn this guide, we break down what affects the cost and what you can expect when hiring a professional tree service in North Carolina."
        },
        {
          heading: "Average Tree Removal Costs",
          text: `Here's the breakdown of tree removal pricing:\n\n• Minimum, any removal: ${PRICING.removal.minimum}\n• Most removals: ${PRICING.removal.most}\n• Large or hazardous trees: ${PRICING.removal.large}\n• Exceptional jobs (tight access, severe hazards, complex rigging): ${PRICING.removal.exceptional}\n\nThese are ranges — actual cost depends on your specific tree and site.`
        },
        {
          heading: "Why the Same Tree Can Cost Double",
          text: PRICING.stories.sameTree
        },
        {
          heading: "What Affects Tree Removal Cost?",
          text: "Several factors influence the final price:\n\n• Tree size and height\n• Tree condition (dead, leaning, damaged)\n• Location near structures or power lines\n• Accessibility of the area\n• Emergency vs scheduled service"
        },
        {
          heading: "Tree Removal Costs in Jacksonville, NC",
          text: "In Jacksonville, NC and surrounding areas like Richlands and Hubert, tree removal costs can vary based on storm exposure, tree density, and property layout.\n\nHomes with limited access or trees close to structures may require more time and specialized equipment, increasing the cost."
        },
        {
          heading: "How to Save on Tree Removal",
          text: "There are several ways to keep costs down:\n\n• Schedule removal before emergencies happen\n• Combine multiple tree jobs\n• Get a free estimate to compare options\n• Work with a local, experienced provider"
        },
        {
          heading: "Professional Tree Removal Services",
          text: "If you need professional tree removal in Jacksonville, NC, our team provides safe, affordable service with free estimates."
        }
      ]}
      faqs={[
        {
          question: "What is the average cost to remove a tree in NC?",
          answer: PRICING.removal.summary
        },
        {
          question: "Does insurance cover tree removal?",
          answer: "Insurance may cover removal if the tree caused damage to a structure."
        },
        {
          question: "Can I remove a tree myself?",
          answer: "Tree removal can be dangerous and is best handled by professionals."
        }
      ]}
      finalCta={{
        heading: "Get a Free Tree Removal Estimate",
        text: "If you want an exact price for your tree removal project, contact us today for a free estimate. We provide fast, reliable service in Jacksonville and surrounding areas.",
        buttonText: "Call Now"
      }}
      relatedServices={[
        { label: "Tree Removal", href: "/tree-removal-jacksonville-nc" },
        { label: "Tree Trimming", href: "/tree-trimming-jacksonville-nc" },
        { label: "Stump Grinding", href: "/stump-grinding-jacksonville-nc" },
        { label: "Emergency Tree Service", href: "/emergency-tree-service-jacksonville-nc" }
      ]}
    />
  );
}
