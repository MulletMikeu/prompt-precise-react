import ServicePage from './ServicePage';
import { PRICING } from '../data/siteData';

export default function LeaningTreeDangerous() {
  return (
    <ServicePage
      title="Is a Leaning Tree Dangerous After a Storm?"
      metaTitle="Is a Leaning Tree Dangerous After a Storm?"
      slug="leaning-tree-dangerous-after-storm"
      description="How to tell if a leaning tree is dangerous after a storm, when to call a pro, and steps to protect your home. Expert guide from Godhans."
      ctaText="Call Now — Emergency Tree Service"
      quickAnswer="Yes, a leaning tree after a storm can be extremely dangerous. A tree that suddenly shifts or leans following high winds or heavy rain may have compromised roots or structural damage. It could fall without warning, putting your home, family, and property at serious risk. Contact a professional tree service immediately for an assessment."
      sections={[
        {
          heading: "Why Leaning Trees Are Dangerous After Storms",
          text: "Storms put enormous stress on trees through high winds, heavy rain, and saturated soil. A tree that was standing straight before a storm but is now leaning has likely suffered root damage or internal structural failure.\n\nUnlike trees that naturally grow at an angle, a sudden lean is a warning sign that the tree could fall at any time. The longer you wait, the greater the risk to your home, vehicles, fences, and anyone nearby."
        },
        {
          heading: "Signs a Tree Is Dangerous After a Storm",
          text: "Watch for these warning signs:\n\n• Sudden leaning that wasn't there before the storm\n• Cracked or heaving soil around the base\n• Exposed or lifted roots on one side\n• Hanging or broken limbs caught in the canopy\n• Cracks or splits in the trunk\n• Leaning toward a structure, power line, or walkway\n\nIf you notice any of these signs, keep a safe distance and call a professional immediately."
        },
        {
          heading: "When to Call a Professional Tree Service",
          text: "You should contact a tree service right away if:\n\n• The tree is leaning toward your house, garage, or vehicle\n• There is any risk of the tree falling on a structure or road\n• The lean appeared suddenly after a storm\n• You see exposed roots, soil movement, or trunk cracks\n• The tree is near power lines\n\nA certified tree professional can assess the situation safely and determine whether the tree needs to be removed or can be stabilized."
        },
        {
          heading: "Can a Leaning Tree Be Saved?",
          text: "In some cases, a leaning tree can be saved — but it depends on the severity of the damage.\n\nA tree may be recoverable if:\n• The lean is minor and roots are mostly intact\n• The tree is young and flexible\n• There is no trunk splitting or major root exposure\n\nA tree likely needs removal if:\n• The lean is severe or sudden\n• Roots are torn or lifted from the ground\n• The trunk is cracked or split\n• It poses an immediate threat to structures or people\n\nOnly a professional can make this determination safely."
        },
        {
          heading: "Cost to Remove a Dangerous Leaning Tree",
          text: `Removing a dangerous or storm-damaged tree starts at an ${PRICING.removal.minimum} minimum, with most jobs ${PRICING.removal.most} and large or hazardous trees ${PRICING.removal.large}, depending on:\n\n• Size and height of the tree\n• Proximity to structures or power lines\n• Severity of the lean or damage\n• Emergency vs. scheduled service\n\nEmergency removals may cost more due to urgency, but acting quickly can prevent far more expensive property damage. We provide free estimates so you know exactly what to expect.`
        },
        {
          heading: "What to Do Immediately After a Storm",
          text: "Follow these steps to stay safe:\n\n1. Stay away from leaning or damaged trees\n2. Keep children and pets clear of the area\n3. Do not attempt to cut or remove the tree yourself\n4. Avoid downed power lines — call your utility company\n5. Document damage with photos for insurance\n6. Contact a professional tree service for emergency assessment\n\nActing quickly reduces the risk of further damage and keeps your family safe."
        },
        {
          heading: "Emergency Tree Service in Jacksonville, NC",
          text: "If you're in Jacksonville, NC or nearby areas like Richlands, Hubert, Sneads Ferry, or Camp Lejeune, our team is ready to respond to storm damage emergencies. We provide fast, safe tree removal and hazard assessment for homeowners across Onslow County.\n\nDon't wait for a dangerous tree to fall — call local tree experts in Jacksonville for immediate help."
        }
      ]}
      faqs={[
        {
          question: "Is a leaning tree an emergency?",
          answer: "Yes, especially if the lean appeared suddenly after a storm. A newly leaning tree can fall without warning and should be assessed by a professional immediately."
        },
        {
          question: "How quickly should I act after noticing a leaning tree?",
          answer: "As soon as possible. Storm-damaged trees are unpredictable and can fall at any time. Contact a tree service right away for an emergency assessment."
        },
        {
          question: "Will insurance cover tree removal after a storm?",
          answer: "Homeowners insurance may cover tree removal if the tree caused damage to a structure. Check with your insurance provider and document all damage with photos."
        },
        {
          question: "Can I remove a dangerous tree myself?",
          answer: "No. Removing a leaning or storm-damaged tree is extremely dangerous without proper training and equipment. Always hire a professional tree service."
        },
        {
          question: "How can I tell if a leaning tree will fall?",
          answer: "Warning signs include cracked soil at the base, exposed roots, trunk splits, and a sudden change in lean angle. A professional can evaluate the risk accurately."
        }
      ]}
      relatedServices={[
        { label: "Emergency Tree Service", href: "/emergency-tree-service-jacksonville-nc" },
        { label: "Tree Removal", href: "/tree-removal-jacksonville-nc" },
        { label: "Tree Service in Jacksonville NC", href: "/tree-service-jacksonville-nc" },
        { label: "Storm Damage Guide", href: "/storm-damage-trees-guide" }
      ]}
      finalCta={{
        heading: "Don't Wait — Get Emergency Tree Help Now",
        text: "A leaning tree after a storm is a serious safety risk. Contact us today for fast, professional emergency tree service in Jacksonville, NC and surrounding areas.",
        buttonText: "Call Now — We're Ready to Help"
      }}
    />
  );
}
