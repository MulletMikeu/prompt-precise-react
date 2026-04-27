import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';

export default function TreeRemovalCost() {
  return (
    <ServicePage
      title="How Much Does Tree Removal Cost in North Carolina? (2026 Guide)"
      slug="tree-removal-cost-north-carolina"
      description="Tree removal in NC typically costs $800–$3,500 depending on tree size, location, and job difficulty. See full price ranges and what affects cost."
      quickAnswer="Tree removal in North Carolina typically costs between $800 and $3,500 depending on the size of the tree, location, and difficulty of the job. Smaller trees may cost less, while large or hazardous trees can cost significantly more."
      sections={[
        {
          heading: "Understanding Tree Removal Costs",
          text: "If you're dealing with a damaged, dead, or unwanted tree, one of the first questions you'll have is how much it will cost to remove it. Tree removal pricing can vary widely depending on several key factors.\n\nIn this guide, we break down what affects the cost and what you can expect when hiring a professional tree service in North Carolina."
        },
        {
          heading: "Average Tree Removal Costs",
          text: "Here's a general breakdown of tree removal pricing:\n\n• Small trees (under 30 ft): $800 – $1,200\n• Medium trees (30–60 ft): $1,300 – $2,000\n• Large trees (60+ ft): $2,100 – $3,500+\n\nKeep in mind that these are estimates, and actual costs depend on your specific situation."
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
          answer: "Most tree removals range from $800 to $3,500 depending on size and difficulty."
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
