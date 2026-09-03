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
        // Section 5 (Onslow County) turns on gate-only access, which is the
        // spider lift's whole reason for existing on this crew.
        5: { href: "/spider-lift-tree-removal-jacksonville-nc", label: "How spider lift access changes what a backyard removal costs" },
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
          heading: "Tree Removal Cost in Coastal North Carolina",
          text: `Coastal North Carolina removals sit at the higher end of the state's ranges — usually ${PRICING.removal.most} for a job that would price lower inland — because the ground, the season, and the condition of the trees all push toward machine work.\n\nThe soil is the first reason. Sandy coastal soil drains fast but holds water at depth, and after a wet week it won't carry a loaded truck. A crew that would have driven a bucket truck to the trunk in the Piedmont has to mat the ground, work from the street with more rigging, or bring a tracked lift instead. Every one of those adds hours.\n\nHurricane season is the second. From June through November, demand compresses into the days after each storm, and the trees that need attention are the ones nobody can safely defer. Scheduled work booked in the calm stretches of late winter and early spring prices better than the same tree booked the week after a named storm.\n\nStorm-weakened trees are the third, and the most expensive. A pine with a lifted root plate or a cracked trunk can't be climbed — the structure a climber would be tying into is the part that failed. That forces the job onto a lift or a crane, and machine time is the single largest line item on any removal.`
        },
        {
          heading: "Why Onslow County Jobs Price the Way They Do",
          text: "Onslow County prices reflect access more than size, because the properties here are laid out in ways that limit what equipment can reach the tree.\n\nBase-adjacent lots around Camp Lejeune are the clearest case. The housing is dense, the setbacks between structures are narrow, and the backyards are fenced — which means the tree gets removed through a gate or not at all. That rules out cranes on a large share of jobs and rules in the spider lift, which collapses to about 36 inches, crosses a lawn on rubber tracks without rutting it, and still reaches the canopy. It is slower per limb than a crane, but it is the difference between a clean removal and a job no one will quote.\n\nMilitary scheduling is the other factor. PCS timelines are fixed dates, not preferences, and work that has to land inside a two- or three-week window before a handover can't be moved to a cheaper slot in the calendar. When you have the flexibility to book ahead, use it — the same tree, same crew, same equipment, booked in a normal week rather than against a report date, is a straightforwardly cheaper job.",
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
