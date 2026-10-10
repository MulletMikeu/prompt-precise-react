import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { PRICING, SOURCES } from '@/data/siteData';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

/**
 * /neighbor-tree-problems-jacksonville-nc — the one page on this site that
 * makes legal statements.
 *
 * THE RULE THIS PAGE IS BUILT UNDER, and it is stricter than anywhere else:
 *
 *   1. Every legal statement is tied to a North Carolina source — the General
 *      Statutes, NC State Extension, the NC Department of Insurance, or a
 *      case-law summary from a named North Carolina firm. All of them live in
 *      SOURCES in siteData, with the quoted text stored verbatim and confirmed
 *      against the live page.
 *   2. Anything that could not be sourced is the OWNER'S PRACTICE, written in
 *      his voice, and is never dressed up as law. The roots question is the
 *      clearest case: the honest answer is "this is tricky, get an expert", and
 *      that is what it says.
 *   3. A plain not-legal-advice line sits near the top, not buried at the foot.
 *
 * If you add a claim here and cannot cite it from that list, write it as
 * practice or leave it out. The failure mode for this page is not being dull;
 * it is telling somebody something about their rights that turns out to be
 * wrong.
 *
 * The six questions are the owner's, in his order. The schema below marks all
 * six as an FAQPage, which is why each section heading is phrased exactly as
 * somebody would ask it.
 */

/** The not-legal-advice line, rendered directly under the hero. */
function LegalNotice() {
  return (
    <section className="bg-gray-950 py-8 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <p className="text-gray-300 text-base leading-relaxed">
          <strong className="font-semibold text-white">This is general information, not legal advice.</strong>{' '}
          We are a tree company, not attorneys. Everything below that states a rule of
          North Carolina law is sourced at the foot of the page so you can read it
          yourself; everything else is how we handle these jobs in practice, and is
          written as such. For an actual dispute, talk to an NC attorney.
        </p>
      </div>
    </section>
  );
}

function Sources() {
  const entries = [
    {
      href: SOURCES.ncgsTreble.url,
      label: SOURCES.ncgsTreble.label,
      note: 'The treble-damages statute, from the General Assembly’s own site. Quoted in full under question 1 — it is what makes "stop at the property line" a practical rule rather than an etiquette one.',
    },
    {
      href: SOURCES.adkinsTrimming.url,
      label: SOURCES.adkinsTrimming.label,
      note: `The self-help trimming rule as summarised by a North Carolina firm, and the source of the ${SOURCES.ncExtensionTreeFall.caseCite} citation for boundary-line pruning. NC State Extension's tree-fall publication does not cover trimming rights, which is why a firm summary is cited here instead.`,
    },
    {
      href: SOURCES.ncExtensionTreeFall.url,
      label: SOURCES.ncExtensionTreeFall.label,
      note: 'The duty owed by a landowner with a dangerous tree, and the point that an "act of god" does not by itself settle liability. This is the most authoritative North Carolina source on the page.',
    },
    {
      href: SOURCES.wardSmithFallenTree.url,
      label: SOURCES.wardSmithFallenTree.label,
      note: 'The dead-or-leaning versus healthy-and-upright distinction, from a North Carolina firm. Quoted under questions 2 and 3.',
    },
    {
      href: SOURCES.ncdoiHomeowners.url,
      label: SOURCES.ncdoiHomeowners.label,
      note: 'The standard removal provision — up to $500 for any one loss, and only where the tree damaged a structure or blocked the driveway. Your own declarations page still governs your policy.',
    },
    {
      href: SOURCES.iiiTreeFalls.url,
      label: SOURCES.iiiTreeFalls.label,
      note: '"You are insured no matter who owns the tree." Not a North Carolina source, so it is used only for the general insurance mechanic and never for a statement of NC law.',
    },
  ];

  return (
    <section id="sources" className="py-16 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Sources</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Every legal statement on this page comes from one of these. Where something is
          our own practice rather than a rule, the copy says so in our own voice —
          questions 4, 5 and 6 are largely that, and we have not pretended otherwise.
        </p>
        <ul className="space-y-5">
          {entries.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
              >
                {s.label}
              </a>
              <span className="block text-gray-400 text-base mt-1">{s.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function NeighborTreeProblems() {
  return (
    <ServicePage
      title="Neighbor's tree problems in Jacksonville, NC: who can cut, who pays, what to do"
      metaTitle="Neighbor's Tree Problems in NC: Who Can Cut, Who Pays"
      slug="neighbor-tree-problems-jacksonville-nc"
      faqPosition="early"
      authorUpdated="2026-10-10"
      credentialBlock
      description="Can you cut a neighbor's overhanging branches in NC? Who pays when their tree falls? Six answers, each cited to North Carolina law, plus how we handle it."
      ctaText="Call for a Free Estimate"
      leadBlock={<LegalNotice />}
      quickAnswer="Short answers: you can generally trim a neighbor's branches back to the property line at your own cost, but not cross the line or kill the tree. If their tree looks dangerous, get an arborist's opinion and put it in writing to them — written notice is what matters later. If a healthy tree falls and hits your house, it is usually your policy, not theirs. And yes, we will work from a neighbor's yard with their permission, and we will talk to both households and split the bill."
      sections={[
        {
          heading: "Can I cut my neighbor's branches that hang over my yard?",
          text: `Generally yes, back to the property line, at your own expense — and no further.\n\nA North Carolina firm summarising the rule puts it this way: "${SOURCES.adkinsTrimming.quote}" The principle traces back to ${SOURCES.ncExtensionTreeFall.caseCite}.\n\nWHAT THAT PERMITS. Cutting the part of the branch that is in your airspace, standing on your own ground, paying for it yourself. The cost is yours even though the tree is not — that surprises people, and it is the usual answer.\n\nWHAT IT DOES NOT PERMIT, and this is the part worth being careful about:\n\n• Crossing the line. You cannot step into their yard to make the cut, or reach past the boundary, without permission.\n• Killing or destabilising the tree. Trimming so hard that the tree dies or becomes unsound is not trimming.\n• Touching the trunk. The trunk belongs to whoever's land it stands on.\n\nTHE REASON TO TAKE THAT SERIOUSLY IS A STATUTE. N.C. Gen. Stat. § 1-539.1(a) provides that someone who, without permission, "enter[s] upon the land of another and injure[s], cut[s] or remove[s] any valuable wood, timber, shrub or tree therefrom, shall be liable to the owner of said land for triple the value of such wood, timber, shrubs or trees so injured, cut or removed."\n\nTriple the value of a mature tree is not a small number. In practice this is the single most expensive mistake a homeowner can make with a chainsaw and a grievance.\n\nOUR PRACTICE. We will do boundary trimming, and when we do we work from your side and stop at the line. If the honest answer is that the tree needs work from the other side to be done properly, we will tell you that and suggest you ask the neighbor — which is usually a short conversation and occasionally a shared bill.`
        },
        {
          heading: "My neighbor's tree looks dead or dangerous. What can I do?",
          text: `Get an arborist's opinion, then put it in writing to your neighbor. In that order.\n\nWHY THE WRITING MATTERS MORE THAN THE WORRYING. North Carolina liability for a falling tree turns on what the tree's owner knew or reasonably should have known. NC State Extension's publication on tree-fall liability states the duty directly: "${SOURCES.ncExtensionTreeFall.duty}" A North Carolina firm puts the practical version this way: "${SOURCES.wardSmithFallenTree.defective}"\n\nRead those together and the mechanism is clear. A neighbor who has never been told anything can argue the danger was not foreseeable to them. A neighbor holding a letter from you, with photographs and an arborist's assessment attached, cannot.\n\nSO THE SEQUENCE IS:\n\n1. GET IT LOOKED AT PROPERLY. Not a guess over the fence. An arborist's health and risk assessment is a considered written opinion on the tree's condition and what it needs.\n2. PUT IT IN WRITING. Identify the tree, describe what is actually wrong with it — dead canopy, a split, a lifted root plate, a hanging limb — attach photographs and the assessment, and date it. Keep a copy.\n3. KEEP THE TONE CIVIL. You want the tree dealt with, not a feud. Most of these end with the neighbor simply not having realised.\n\nWHAT WE CAN DO FOR THAT. A standalone arborist health and risk assessment runs ${PRICING.inspection.assessment}, covering ${PRICING.inspection.assessmentScope} and stretching to ${PRICING.inspection.assessmentMaxTrees} on one visit. Where the question is whether a trunk is sound rather than whether the canopy looks bad, resistograph testing measures how much solid wood is actually left and gives you a number instead of an opinion — which is a considerably better thing to attach to a letter.\n\nOne thing we will not do is tell you the tree is dangerous because you would like it to be. If it measures sound, the assessment will say so, and you should want it to.`
        },
        {
          heading: "Who cleans up when a neighbor's tree falls in my yard but hits nothing?",
          text: `Each owner is responsible for what ends up on their own property. If it landed in your yard, it is generally yours to deal with.\n\nThat is the answer nobody wants, and it follows from how the liability rule works. A North Carolina firm states the healthy-tree case plainly: "${SOURCES.wardSmithFallenTree.healthy}" If the tree was sound and the wind took it, there is usually no negligence to point at, and no negligence means no bill to send next door.\n\nTHE INSURANCE SIDE IS WORSE THAN PEOPLE EXPECT. A tree lying across your lawn having damaged nothing is frequently not a claim at all. The North Carolina Department of Insurance describes the standard provision as paying "${SOURCES.ncdoiHomeowners.quote}" Note both halves of that condition — damaged a structure, OR blocked the driveway. A healthy tree down across the back lawn typically meets neither, and $500 does not go far on a mature hardwood.\n\nIF IT DID HIT SOMETHING, the picture changes: your own policy generally responds, regardless of whose tree it was. The Insurance Information Institute puts it in four words — "${SOURCES.iiiTreeFalls.quote}" Your insurer may then pursue the neighbor's insurer to recover, which is called subrogation, and if that works you can get your deductible back. That is far more likely where the tree was visibly dead and had been reported.\n\nWHICH IS WHY THE LETTER IN QUESTION 2 IS THE WHOLE GAME. The difference between "a tree fell" and "a tree they were warned about fell" is the difference between your deductible and theirs.\n\nOUR PRACTICE. We will clear what is on your property and quote it as its own job — see debris hauling for what that costs when the tree is already down and the pile is the entire problem.`
        },
        {
          heading: "Roots from my neighbor's tree are damaging my driveway or foundation.",
          text: `This one is genuinely tricky, and anybody who gives you a confident one-line answer is overselling it. Get an expert to look before you do anything.\n\nWe are deliberately not going to tell you where the law lands on roots. The sourced principle from question 1 is about branches crossing a boundary, and roots raise questions — about what counts as damage, about what a reasonable remedy is, and about whether cutting the roots makes you the person who destabilised the tree — that we are not qualified to answer and have not found an NC source that settles cleanly. For a real dispute, that is an attorney's question.\n\nWHAT WE CAN TELL YOU IS THE TREE SIDE OF IT, which is usually the part that actually decides what to do:\n\n• CUTTING STRUCTURAL ROOTS DESTABILISES TREES. The roots near the trunk are what keep it standing. Severing them to save a driveway can convert a sound tree into one that comes down in the next storm — onto somebody. If that somebody is your neighbor, you have swapped a cracked slab for a much larger problem.\n• THE DAMAGE IS OFTEN SLOWER THAN IT LOOKS. Surface roots lifting a driveway are ugly and are not usually structural urgency. Foundation claims against tree roots are much rarer than the internet suggests.\n• THERE ARE MIDDLE OPTIONS. Root pruning done properly, at a distance the tree can survive, with a barrier installed. Replacing a slab section rather than fighting the tree. Occasionally, removal — but as a decision, not a reflex.\n\nHOW WE ACTUALLY HANDLE IT, in the owner's words: I talk it through with both homeowners and give the best honest advice I can. Most of the time that conversation gets further than any letter would, because neither household actually wants the expensive version of this.`
        },
        {
          heading: "Can you work from my neighbor's yard?",
          text: `Yes — with their permission. Without it, no, and that is not us being cautious.\n\nThe same boundary that limits your trimming limits our access. The statute quoted under question 1 attaches to entering the land of another without consent, so a crew working off the wrong side of a fence line is not a technicality.\n\nIN PRACTICE IT IS RARELY A PROBLEM. We ask, the neighbor says yes, and the job gets easier for everybody — including them, because a tree that can be rigged into open ground is a tree that is not being lowered in small pieces over somebody's roof.\n\nTHE GENE CIRCLE PINE IS THE EXAMPLE WE POINT AT. A 120 foot pine, 28 inches at the base, wedged behind a shed with fences on three sides and no crane access. There was no way to bring it down on its own side. With the neighbor's permission we rigged it out over the fence and picked the 10 to 12 foot logs up from their yard, section by section. Under two days, nothing touched, and the neighbor got their afternoon back.\n\nWHAT WE NEED FROM YOU: just tell us at the estimate that the neighbor's side might be involved, so we can ask before the morning of the job rather than standing in the driveway working out a plan B.`
        },
        {
          heading: "Do you talk to both neighbors and split the cost?",
          text: `All the time, and we are happy to.\n\nThis is the most common unglamorous resolution to everything above. A tree on a boundary, or hanging over both yards, is frequently a shared problem with a shared answer, and the cheapest version of it is one crew, one mobilisation, one visit, with the bill split between two households.\n\nWHY IT IS CHEAPER THAN TWO JOBS. Mobilisation — getting the crew and the machines to the property and away again — is the biggest fixed cost on any job, and it is the reason we have a minimum at all. Paying it once instead of twice is real money, and on a boundary tree it is often most of the difference.\n\nHOW IT USUALLY GOES. One household calls, we come and look, and if the tree is genuinely a both-of-you problem we will say so and offer to talk to the other household directly. People are frequently relieved to have someone neutral explain what the tree actually needs — we are not on either side of the fence, we just want the tree dealt with properly.\n\nWE WILL ALSO TELL YOU WHEN IT IS NOT SHARED. If the tree is squarely on one property and the work is squarely one owner's responsibility, we will say that too, to whichever of you asked. Being willing to split a bill is not the same as pretending every tree is a joint one.`
        },
      ]}
      /* Positional keys against `sections` above:
           0 trimming · 1 dangerous-tree · 2 cleanup · 3 roots · 4 neighbor-yard ·
           5 split-cost
         Recount after any insertion — these are positional and fail silently. */
      sectionBodies={{
        1: (
          <>
            {`Get an arborist's opinion, then put it in writing to your neighbor. In that order.\n\nWHY THE WRITING MATTERS MORE THAN THE WORRYING. North Carolina liability for a falling tree turns on what the tree's owner knew or reasonably should have known. NC State Extension's publication on tree-fall liability states the duty directly: "${SOURCES.ncExtensionTreeFall.duty}" A North Carolina firm puts the practical version this way: "${SOURCES.wardSmithFallenTree.defective}"\n\nRead those together and the mechanism is clear. A neighbor who has never been told anything can argue the danger was not foreseeable to them. A neighbor holding a letter from you, with photographs and an arborist's assessment attached, cannot.\n\nSO THE SEQUENCE IS:\n\n1. GET IT LOOKED AT PROPERLY. Not a guess over the fence. An arborist's health and risk assessment is a considered written opinion on the tree's condition and what it needs.\n2. PUT IT IN WRITING. Identify the tree, describe what is actually wrong with it — dead canopy, a split, a lifted root plate, a hanging limb — attach photographs and the assessment, and date it. Keep a copy.\n3. KEEP THE TONE CIVIL. You want the tree dealt with, not a feud. Most of these end with the neighbor simply not having realised.\n\nWHAT WE CAN DO FOR THAT. A standalone `}
            <Link to="/resistograph-tree-testing-jacksonville-nc" className={PROSE_LINK}>arborist health and risk assessment</Link>
            {` runs ${PRICING.inspection.assessment}, covering ${PRICING.inspection.assessmentScope} and stretching to ${PRICING.inspection.assessmentMaxTrees} on one visit. Where the question is whether a trunk is sound rather than whether the canopy looks bad, `}
            <Link to="/resistograph-tree-testing-jacksonville-nc" className={PROSE_LINK}>resistograph testing</Link>
            {` measures how much solid wood is actually left and gives you a number instead of an opinion — which is a considerably better thing to attach to a letter. If the problem is a lean rather than the canopy, `}
            <Link to="/leaning-tree-dangerous-after-storm" className={PROSE_LINK}>the signs that a lean is actually dangerous</Link>
            {` are worth reading first.\n\nOne thing we will not do is tell you the tree is dangerous because you would like it to be. If it measures sound, the assessment will say so, and you should want it to.`}
          </>
        ),
        2: (
          <>
            {`Each owner is responsible for what ends up on their own property. If it landed in your yard, it is generally yours to deal with.\n\nThat is the answer nobody wants, and it follows from how the liability rule works. A North Carolina firm states the healthy-tree case plainly: "${SOURCES.wardSmithFallenTree.healthy}" If the tree was sound and the wind took it, there is usually no negligence to point at, and no negligence means no bill to send next door.\n\nTHE INSURANCE SIDE IS WORSE THAN PEOPLE EXPECT. A tree lying across your lawn having damaged nothing is frequently not a claim at all. The North Carolina Department of Insurance describes the standard provision as paying "${SOURCES.ncdoiHomeowners.quote}" Note both halves of that condition — damaged a structure, OR blocked the driveway. A healthy tree down across the back lawn typically meets neither, and $500 does not go far on a mature hardwood.\n\nIF IT DID HIT SOMETHING, the picture changes: your own policy generally responds, regardless of whose tree it was. The Insurance Information Institute puts it in four words — "${SOURCES.iiiTreeFalls.quote}" Your insurer may then pursue the neighbor's insurer to recover, which is called subrogation, and if that works you can get your deductible back. That is far more likely where the tree was visibly dead and had been reported. `}
            <Link to="/storm-cleanup-jacksonville-nc" className={PROSE_LINK}>The full account of what a policy covers after a storm</Link>
            {` is on one page so there is a single accurate version of it.\n\nWHICH IS WHY THE LETTER IN QUESTION 2 IS THE WHOLE GAME. The difference between "a tree fell" and "a tree they were warned about fell" is the difference between your deductible and theirs.\n\nOUR PRACTICE. We will clear what is on your property and quote it as its own job — see `}
            <Link to="/debris-hauling-jacksonville-nc" className={PROSE_LINK}>debris hauling</Link>
            {` for what that costs when the tree is already down and the pile is the entire problem.`}
          </>
        ),
        4: (
          <>
            {`Yes — with their permission. Without it, no, and that is not us being cautious.\n\nThe same boundary that limits your trimming limits our access. The statute quoted under question 1 attaches to entering the land of another without consent, so a crew working off the wrong side of a fence line is not a technicality.\n\nIN PRACTICE IT IS RARELY A PROBLEM. We ask, the neighbor says yes, and the job gets easier for everybody — including them, because a tree that can be rigged into open ground is a tree that is not being lowered in small pieces over somebody's roof.\n\nTHE GENE CIRCLE PINE IS THE EXAMPLE WE POINT AT. A 120 foot pine, 28 inches at the base, wedged behind a shed with fences on three sides and no crane access. There was no way to bring it down on its own side. With the neighbor's permission we rigged it out over the fence and picked the 10 to 12 foot logs up from their yard, section by section. Under two days, nothing touched, and the neighbor got their afternoon back. `}
            <Link to="/tree-removal-jacksonville-nc" className={PROSE_LINK}>The full write-up of that job</Link>
            {` is on the removal page, along with what it cost and why.\n\nWHAT WE NEED FROM YOU: just tell us at the estimate that the neighbor's side might be involved, so we can ask before the morning of the job rather than standing in the driveway working out a plan B. Tight-access jobs like this are `}
            <Link to="/tree-removal-near-house-jacksonville-nc" className={PROSE_LINK}>most of what we do near a house</Link>
            {`.`}
          </>
        ),
      }}
      caseStudy={<Sources />}
      faqs={[
        {
          question: "Can I cut my neighbor's tree branches that hang over my property in North Carolina?",
          answer: `Generally yes, back to the property line and at your own expense. A North Carolina firm summarises the rule as: "${SOURCES.adkinsTrimming.quote}" What you cannot do is cross onto their land, cut the trunk, or trim so hard that the tree dies or becomes unstable. The reason to take that limit seriously is N.C. Gen. Stat. § 1-539.1, which makes someone who enters another's land without permission and injures, cuts or removes a tree liable for triple its value. This is general information, not legal advice.`,
        },
        {
          question: "What should I do if my neighbor's tree looks dead or dangerous?",
          answer: `Get an arborist's opinion and then put it in writing to your neighbor, with photographs and a date. North Carolina liability turns on what the tree's owner knew or should have known — NC State Extension states that "${SOURCES.ncExtensionTreeFall.duty}" A neighbor who was never told can argue the danger was not foreseeable; one holding your letter cannot. A standalone arborist health and risk assessment from us runs ${PRICING.inspection.assessment}, and resistograph testing will measure how much sound wood is left rather than guessing.`,
        },
        {
          question: "Who cleans up when my neighbor's tree falls in my yard and hits nothing?",
          answer: `Generally you do — each owner deals with what is on their own property. If the tree was healthy and the wind took it, there is usually no negligence to claim against. Insurance frequently does not help either: the NC Department of Insurance describes the standard provision as paying "${SOURCES.ncdoiHomeowners.quote}" A healthy tree down across the lawn typically meets neither condition. If it did hit a structure, your own policy generally responds regardless of whose tree it was.`,
        },
        {
          question: "My neighbor's tree roots are damaging my driveway. What are my options?",
          answer: "This one is genuinely tricky and we are not going to give you a confident legal answer, because roots raise questions about damage, remedy and who destabilised the tree that we have not found a clean North Carolina source for. For a real dispute, that is an attorney's question. What we can tell you is the tree side: cutting structural roots near the trunk can turn a sound tree into one that fails in the next storm, surface roots lifting a driveway are usually not structural urgency, and there are middle options — properly distanced root pruning with a barrier, or replacing a slab section. Our owner's approach is to talk it through with both homeowners and give the best honest advice he can.",
        },
        {
          question: "Can a tree company work from my neighbor's yard?",
          answer: "Yes, with the neighbor's permission — and not without it. The boundary that limits your trimming limits our access too, and N.C. Gen. Stat. § 1-539.1 attaches to entering another's land without consent. In practice it is rarely a problem and usually makes the job safer: on the Gene Circle pine we rigged 10 to 12 foot logs out over the fence and picked them up from the neighbor's yard, because there was no way to bring that tree down on its own side. Tell us at the estimate if the neighbor's side might be involved so we can ask in advance.",
        },
        {
          question: "Will you talk to both neighbors and split the cost of a boundary tree?",
          answer: "All the time, and we are happy to. A tree on a boundary is frequently a shared problem with a shared answer, and one crew making one trip is genuinely cheaper than two jobs — mobilisation is the biggest fixed cost on any job. If the tree is squarely one owner's responsibility we will say that too, to whichever of you asked. Being willing to split a bill is not the same as pretending every tree is a joint one.",
        },
      ]}
      guides={{
        heading: 'Related',
        intro: 'The pages behind the answers above:',
        links: [
          { href: '/storm-cleanup-jacksonville-nc', label: 'Storm cleanup and what insurance covers', blurb: 'The full account of the $500 provision, the debris sublimit, and subrogation.' },
          { href: '/resistograph-tree-testing-jacksonville-nc', label: 'Resistograph testing and arborist assessments', blurb: 'Measuring what is left inside a trunk, and what a written assessment costs.' },
          { href: '/leaning-tree-dangerous-after-storm', label: 'Is a leaning tree dangerous after a storm?', blurb: 'Which leans matter, and why a lifted root plate ends the conversation.' },
          { href: '/tree-removal-near-house-jacksonville-nc', label: 'Tree removal near a house', blurb: 'What changes when position, not size, sets the price.' },
        ],
      }}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Debris Hauling', href: '/debris-hauling-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: 'Not Sure Whose Tree Problem It Is?',
        text: 'We will come and look, tell you honestly what the tree needs, and talk to the other household if that is what it takes. Free estimates across Jacksonville and Onslow County.',
        buttonText: 'Call Now',
      }}
    />
  );
}
