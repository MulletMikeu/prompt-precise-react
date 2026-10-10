import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { PRICING, SOURCES } from '../data/siteData';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

/**
 * The page had zero outbound citations while quoting a figure from a state
 * regulator second-hand ("a few hundred dollars"). The figure is now the actual
 * $500 and the regulator is linked, reading the URL from SOURCES so it cannot
 * drift from the version on /storm-cleanup-jacksonville-nc.
 */
function InsuranceSource() {
  return (
    <section id="insurance-source" className="py-12 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-2xl font-bold text-white mb-4">Where the $500 Figure Comes From</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          The removal cap in the FAQ below is the state regulator&rsquo;s description of the
          standard provision, not ours &mdash;{' '}
          <a
            href={SOURCES.ncdoiHomeowners.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold"
          >
            {SOURCES.ncdoiHomeowners.label}
          </a>
          . Your own declarations page still governs your policy, and some carriers write more
          coverage than the standard.
        </p>
      </div>
    </section>
  );
}

export default function LeaningTreeDangerous() {
  return (
    <ServicePage
      title="Is a Leaning Tree Dangerous After a Storm?"
      metaTitle="Is a Leaning Tree Dangerous After a Storm?"
      slug="leaning-tree-dangerous-after-storm"
      faqPosition="early"
      authorUpdated="2026-09-27"
      description="How to tell if a leaning tree is dangerous after a storm, when to call a pro, and steps to protect your home. Expert guide from Godhans."
      ctaText="Call Now — Emergency Tree Service"
      quickAnswer="Yes, a leaning tree after a storm can be extremely dangerous. A tree that suddenly shifts or leans following high winds or heavy rain may have compromised roots or structural damage. It could fall without warning, putting your home, family, and property at serious risk. Contact a professional tree service immediately for an assessment."
      caseStudy={<InsuranceSource />}
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. The recoverable
       * -vs-removal section named neither of the two things that actually decide
       * it on this site: a measurement, and support hardware. Same copy, anchors
       * added. Edit both or neither.
       */
      sectionBodies={{
        3: (
          <>
            {"In some cases, a leaning tree can be saved — but it depends on the severity of the damage.\n\nA tree may be recoverable if:\n• The lean is minor and roots are mostly intact\n• The tree is young and flexible\n• There is no trunk splitting or major root exposure\n\nA tree likely needs removal if:\n• The lean is severe or sudden\n• Roots are torn or lifted from the ground\n• The trunk is cracked or split\n• It poses an immediate threat to structures or people\n\nTwo things move this from a judgment call to a decision. If the trunk is the question, it can be "}
            <Link to="/resistograph-tree-testing-jacksonville-nc" className={PROSE_LINK}>drilled and measured</Link>
            {" rather than guessed at — and a storm-weakened trunk cannot be climbed at all, because the structure a climber would tie into is the part that failed. If the problem is a split fork on a tree otherwise worth keeping, "}
            <Link to="/tree-cabling-bracing-jacksonville-nc" className={PROSE_LINK}>cabling and bracing</Link>
            {` runs ${PRICING.cabling.typical} and is often the cheaper answer. Only a professional can make this determination safely — and before any of that, `}
            <Link to="/storm-damage-trees-guide" className={PROSE_LINK}>what to do in the first hours after storm damage</Link>
            {" matters more than the keep-or-remove call does."}
          </>
        ),
      }}
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
          // Deliberately short and pointed at the hub. This answer used to be a
          // third partial version of the same explanation; /storm-cleanup-* now
          // owns the topic so there is one accurate account of it.
          answer: "Generally when the tree has damaged a covered structure, and your deductible applies. A tree that came down and hit nothing is usually your cost — the North Carolina Department of Insurance describes the standard provision as paying up to $500 for any one loss, and only where the tree damaged a structure or blocked the driveway. Photograph everything before anything is moved. We keep the full explanation on one page so it stays accurate.",
          link: { href: "/storm-cleanup-jacksonville-nc", label: "What insurance typically covers after a storm" }
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
        { label: "Storm Cleanup", href: "/storm-cleanup-jacksonville-nc" },
        { label: "Resistograph Tree Testing", href: "/resistograph-tree-testing-jacksonville-nc" }
      ]}
      finalCta={{
        heading: "Don't Wait — Get Emergency Tree Help Now",
        text: "A leaning tree after a storm is a serious safety risk. Contact us today for fast, professional emergency tree service in Jacksonville, NC and surrounding areas.",
        buttonText: "Call Now — We're Ready to Help"
      }}
    />
  );
}
