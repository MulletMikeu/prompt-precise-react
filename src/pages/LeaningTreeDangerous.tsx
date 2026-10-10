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
function PageSources() {
  return (
    <section id="insurance-source" className="py-12 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-2xl font-bold text-white mb-4">Sources</h2>
        <ul className="space-y-5">
          <li>
            <a
              href={SOURCES.ufifasTreeFailure.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
            >
              {SOURCES.ufifasTreeFailure.label}
            </a>
            <span className="block text-gray-400 text-base mt-1">
              McLean, Koeser, Northrop &amp; Hasing. The source of the four quotations
              above about reaction wood, compensating growth, rapidly formed leans and
              soil upheaval. Note what it does <em>not</em> say: reaction wood means the
              risk &ldquo;can be significantly reduced&rdquo;, not that a long-leaning
              tree is safe. And where we recommend removal on a lifted root plate, that
              is our practice &mdash; the publication&rsquo;s own instruction is to treat
              the tree as high risk and have an arborist inspect it immediately.
            </span>
          </li>
          <li>
            <a
              href={SOURCES.ncdoiHomeowners.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
            >
              {SOURCES.ncdoiHomeowners.label}
            </a>
            <span className="block text-gray-400 text-base mt-1">
              The $500 removal cap in the FAQ is the state regulator&rsquo;s description
              of the standard provision, not ours. Your own declarations page still
              governs your policy, and some carriers write more coverage than the
              standard.
            </span>
          </li>
        </ul>
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
      caseStudy={<PageSources />}
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. The recoverable
       * -vs-removal section named neither of the two things that actually decide
       * it on this site: a measurement, and support hardware. Same copy, anchors
       * added. Edit both or neither.
       */
      sectionBodies={{
        // 4 is "Can a Leaning Tree Be Saved?" — was 3 before Batch 2 inserted
        // the grew-leaning / started-leaning section at index 1.
        4: (
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
          /*
           * Batch 2 item 7. Inserted at index 1, which moved "Can a Leaning
           * Tree Be Saved?" from 3 to 4 — the sectionBodies key below was
           * updated to match.
           *
           * The three quotes are verbatim from UF/IFAS EP507 via
           * SOURCES.ufifasTreeFailure. Two limits are deliberately preserved
           * in the wording and should survive any future edit: the source says
           * reaction wood means risk "can be significantly reduced", not that a
           * long-leaning tree is safe; and on soil upheaval its instruction is
           * to treat the tree as high risk and have an arborist inspect it
           * immediately — recommending removal at that point is OUR practice,
           * and the copy says so in our own voice rather than theirs.
           */
          heading: "A tree that grew leaning is a different thing from a tree that started leaning",
          text: `This is the distinction that decides it, and it is the one most storm advice skips straight past.\n\nA tree that has stood at an angle for years has spent those years building wood to deal with it. UF/IFAS Extension puts it plainly: "${SOURCES.ufifasTreeFailure.reactionWood}" You can often see the evidence from the driveway — "${SOURCES.ufifasTreeFailure.compensating}" That thickened, slightly pear-shaped base is the tree's own answer to its lean, and it took years to build. So no, the pine that has leaned over your fence since you moved in is not, by virtue of leaning, more likely to come down.\n\nWhat matters is not the angle. It is whether the angle is changing.\n\nSO ASK YOURSELF ONE QUESTION: IS IT LEANING MORE THAN IT WAS LAST SEASON? That is the whole test, and you are better placed to answer it than we are, because you see the tree every day. A lean that has moved is a lean the tree has not had time to compensate for. Extension is direct about the storm case: "${SOURCES.ufifasTreeFailure.rapidLean}" A new lean is not a tree that bent. It is a tree whose roots have partly let go.\n\nAND ONE SIGN THAT ENDS THE CONVERSATION: SOIL LIFTING AT THE BASE. If the ground on the high side of the lean is raised, cracked, or has started to heave into a ridge, the root plate is coming up and you are looking at the beginning of a failure, not a feature of the tree. Extension's instruction is that trees increasing their lean or "${SOURCES.ufifasTreeFailure.upheaval.slice(SOURCES.ufifasTreeFailure.upheaval.indexOf('begin to show'))}"\n\nOur own practice goes one step further than that, and we will say so in our own voice rather than theirs: when we see a lifted or lifting root plate, we recommend removal. Not monitoring, not cabling. At that point the wood quality of the trunk is beside the point — there is nothing left to measure, because the problem is underneath it.`
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
        },
        {
          question: "Is a tree that has always leaned more likely to fall?",
          answer: "No — not by virtue of the lean itself. A tree that grew at an angle has been building wood to compensate the whole time, and UF/IFAS Extension notes that where a tree produces that additional reaction wood, the risk associated with the lean can be significantly reduced. You can often see it: a thickened, slightly pear-shaped lower trunk on the low side. What matters is change, not angle. Ask whether it is leaning more than it was last season, and look at the ground on the high side — raised, cracked or heaving soil means the root plate is lifting, and at that point we recommend removal rather than monitoring.",
        },
        {
          question: "Do you bill insurance directly?",
          answer: "Yes. We bill your insurance directly and work with your adjuster, doing everything we can so your cost stays at your normal deductible. Direct billing applies to mitigation work — a tree on the house or on another covered structure, where getting it off and tarping the opening is what stops the damage getting worse. A yard tree that came down and hit nothing is a different matter and frequently is not covered at all, so we will tell you which of the two you have before we start rather than after.",
          link: { href: "/storm-cleanup-jacksonville-nc", label: "What insurance typically covers after a storm" }
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
