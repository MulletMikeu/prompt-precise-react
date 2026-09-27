import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { BUSINESS } from '@/data/siteData';

/**
 * Outbound sources. Every external fact on this page is attributed in the prose
 * AND linked here — the lightning/resin claims and the hurricane dates are not
 * ours to assert unsourced. Field observations about local species are marked
 * "in our experience" in the copy and are deliberately NOT in this list.
 */
const SOURCES = [
  {
    label: 'NC State Extension — Pine Bark Beetles',
    href: 'https://content.ces.ncsu.edu/pine-bark-beetles',
    note: 'Lightning strikes among the stresses that predispose pines to Ips engraver beetle attack; resin ("pitch tubes") as the tree\'s defence, and why a stressed tree may not produce it.',
  },
  {
    label: 'National Weather Service, Wilmington NC — Hurricane Florence',
    href: 'https://www.weather.gov/ilm/HurricaneFlorence',
    note: 'Landfall near Wrightsville Beach the morning of 14 September 2018, maximum sustained winds near 90 mph.',
  },
  {
    label: 'NC State Climate Office — North Carolina hurricane landfalls',
    href: 'https://products.climate.ncsu.edu/weather/hurricanes/nc-landfalls/',
    note: 'The landfall record: Florence (Sept 2018), Dorian (Sept 2019), Isaias (Aug 2020) — the most recent hurricane landfall in the state.',
  },
];

export default function ResistographTesting() {
  return (
    <ServicePage
      title="Resistograph Tree Testing in Jacksonville, NC"
      metaTitle="Resistograph Tree Testing in Jacksonville, NC | Godhans"
      subtitle="Measuring Internal Decay Before Anyone Decides to Cut"
      slug="resistograph-tree-testing-jacksonville-nc"
      credentialBlock
      description="Resistograph testing in Jacksonville, NC measures internal decay in a standing tree, so a sound hardwood isn't removed on a guess. Local species notes."
      ctaText={`Ask About Testing — ${BUSINESS.phone}`}
      quickAnswer="A resistograph is a drill that measures wood. It pushes a needle-thin probe through a standing trunk and records how hard the wood pushes back, which maps the solid wood and the rot without taking the tree apart. We use it for one reason: so nobody has to decide whether a big hardwood is dangerous by looking at it."
      sections={[
        {
          heading: 'What a Resistograph Actually Measures',
          text: "The tool is a drill with a probe about the thickness of a wire. It advances through the trunk at a constant rate and records the resistance the wood offers the whole way in, printing a profile of density from bark to centre.\n\nSolid wood reads high and even. Decay reads as a drop — and the depth at which the drop starts, how wide it runs, and whether it closes again tells us where the rot is and how much sound wood is left holding the tree up. A 3 mm hole is the entire wound, which is the point: you learn what is inside a 90-foot tree without climbing it apart first.\n\nWhat it does not do is give an opinion. It gives a measurement. The judgement still belongs to the person reading it against the lean, the root plate, the canopy, and what is underneath the tree.",
        },
        {
          heading: "Why We Test: So Sound Trees Don't Get Cut Down",
          text: "Most of the trees we test do not need to come down.\n\nThat is the honest argument for the tool. A mature hardwood over a house looks alarming, and the cautious answer — with nothing but a visual inspection to go on — is always \"take it down.\" Every tree company in the world can sell that answer. But a 60-year-old water oak shading the west side of your house is worth real money in cooling and in what it does to the property, and it is not replaceable inside a human lifetime.\n\nSo we measure first. If the wood is sound, we say so, and the tree stays — sometimes with a trim to take weight off the limbs that concern you. If the probe finds a cavity where the trunk should be solid, you are not taking our word for the removal; you are looking at the profile.\n\nIt also works the other way round. Trees that look fine come back with rot we would never have seen from the ground, and those are the ones that fail in a storm while the ugly one next to it stands.",
        },
        {
          heading: 'What We Find in Onslow County Trees',
          text: "In our experience the species here fall into a pattern, and it is consistent enough that we go into a test with an expectation:\n\n• Mature maples — almost always carry some heartwood rot. We rarely test a big maple and find it clean all the way through.\n• Water oaks — show a decent amount of rot on the resistograph roughly seven or eight times in ten.\n• Live oaks — rarely rot. They are the exception, and they are usually the tree worth keeping.\n\nWe suspect the high water table here is part of why. Standing water and saturated root zones are hard on a tree's ability to wall off decay, and this is a coastal county where the water is never far down. That is a suspicion drawn from what we keep finding, not a conclusion — we are reporting a pattern in our own test results, not a study.\n\nWhat it means practically: if you have a big maple or water oak close to the house, the odds are good that there is something inside it. That is not a reason to remove it. It is a reason to know the number before the next storm rather than after.",
        },
        {
          heading: 'Lightning-Struck Pines Are a Different Problem',
          text: "Lightning is the threat people underestimate here, and tall pines take most of the strikes because they are the tallest thing in the yard.\n\nWhat a strike does inside a pine is dry the heartwood out along the path it travelled. As that wood dries it shrinks, and stress cracks open — a route straight into the centre of the tree for insects and infection. The tree's own answer is resin: pines push sap out to seal a wound, and NC State Extension describes the dried result as \"pitch tubes\" when beetles are the thing being repelled. The catch, in Extension's words, is that \"stressed trees may not have the resources available to produce sap\" — and Extension lists lightning strikes among the stresses that predispose pines to Ips engraver beetle attack in the first place.\n\nSo the tree is trying to seal a wound at the exact moment it is least able to. In our experience many struck pines do not recover, and the ones that fail often look fine for a season first. A strike is a good reason to have the trunk tested rather than to wait and watch.",
        },
        {
          heading: "The Storms Have Been Quiet. The Rot Hasn't.",
          text: "North Carolina has not taken a hurricane landfall since Isaias came ashore at Ocean Isle Beach in August 2020, according to the NC State Climate Office's landfall record. Before that, Dorian in September 2019, and Florence — which the National Weather Service in Wilmington puts on the beach near Wrightsville the morning of 14 September 2018 with sustained winds near 90 mph.\n\nSix quiet years is long enough for a lot of people to stop thinking about their trees, and it is exactly the wrong conclusion to draw. Decay does not take years off. A tree that would have come down in Florence and didn't has spent six more seasons rotting, and the next storm does not care that the last one was a while ago.\n\nThe cheapest version of storm preparation is knowing which of your trees is hollow before the wind tells you.",
        },
        {
          heading: 'When to Ask for a Test',
          text: "Worth testing:\n\n• A large hardwood within falling distance of the house, especially a maple or water oak\n• Any tree that has been struck by lightning\n• A trunk with a cavity, a seam, a fungal bracket, or an old wound that never closed\n• A tree another company has told you to remove, when you would rather have a measurement than a second opinion\n• Trees you are deciding between — when the budget covers one removal and you have three candidates\n\nNot worth testing: small trees, obvious hazards already failing, and anything where the root plate has lifted. If the soil has heaved, the wood quality is beside the point.\n\nWe fold testing into the estimate when it is relevant rather than selling it as a separate visit. Ask when you call.",
        },
      ]}
      sectionLinks={{
        1: [
          { href: '/tree-trimming-jacksonville-nc', label: 'Tree trimming in Jacksonville, NC — taking weight off instead of taking the tree' },
          { href: '/tree-removal-jacksonville-nc', label: 'Tree removal in Jacksonville, NC — when the wood says it has to go' },
        ],
        4: { href: '/storm-damage-trees-guide', label: 'What to do after storm damage to trees' },
        5: { href: '/leaning-tree-dangerous-after-storm', label: 'Is a leaning tree dangerous after a storm?' },
      }}
      caseStudy={
        <section id="sources" className="py-16 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Sources</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The lightning and hurricane facts above are not ours to assert on our own
              authority, so here is where they come from. Everything on this page about
              what we find in local species is our own test results, marked in the copy
              as our experience.
            </p>
            <ul className="space-y-5">
              {SOURCES.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
                  >
                    {source.label}
                  </a>
                  <span className="block text-gray-400 text-base mt-1">{source.note}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-lg leading-relaxed mt-8">
              Want the trunk measured rather than guessed at?{' '}
              <Link to="/contact" className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold">
                Ask for a free estimate
              </Link>
              {' '}and mention the tree you are worried about.
            </p>
          </div>
        </section>
      }
      faqs={[
        {
          question: 'Does a resistograph hurt the tree?',
          answer: 'The probe is about 3 mm across — roughly the thickness of a wire. It leaves a hole a healthy tree closes off on its own, and it is a far smaller wound than any of the alternatives for seeing inside a trunk. We still place the drill points deliberately rather than taking readings all over the tree.',
        },
        {
          question: 'How much does resistograph testing cost in Jacksonville, NC?',
          answer: 'We normally fold it into the free estimate when the tree in question is one where the answer changes the recommendation, rather than billing it as a separate visit. Call and describe the tree and we will tell you whether testing is worth doing before anyone comes out.',
        },
        {
          question: 'Can you tell a tree is rotten without a resistograph?',
          answer: 'Sometimes. A cavity, a fungal bracket, a seam running up the trunk, or a hollow sound are all real signals, and a lifted root plate settles the question without any tool at all. What you cannot do from the outside is tell how much sound wood is left, and that is the number that decides whether a tree stays.',
          link: { href: '/leaning-tree-dangerous-after-storm', label: 'Signs a tree is dangerous after a storm' },
        },
        {
          question: 'My tree was struck by lightning and looks fine. Should I worry?',
          answer: 'Worth having looked at. A strike dries the heartwood along its path and opens stress cracks as that wood shrinks, which lets insects and infection into the centre of the tree. NC State Extension lists lightning strikes among the stresses that predispose pines to Ips engraver beetle attack, and notes that a stressed tree may not have the resources to produce the sap it would normally defend a wound with. In our experience many struck pines do not recover, and they often look healthy for a season first.',
        },
        {
          question: 'Which trees around Jacksonville are most likely to be rotten inside?',
          answer: 'In our experience mature maples almost always carry some heartwood rot, and water oaks show a decent amount of rot on the resistograph roughly seven or eight times in ten. Live oaks rarely rot. We suspect the high water table here is part of the reason, though that is a pattern in our own results rather than a studied conclusion.',
        },
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      guides={{
        heading: 'Related Guides',
        links: [
          { href: '/tree-removal-near-house-jacksonville-nc', label: 'Tree removal near a house', blurb: 'What changes when the tree is close enough that position sets the price.' },
          { href: '/leaning-tree-dangerous-after-storm', label: 'Is a leaning tree dangerous after a storm?', blurb: 'The signs that mean act now, and the ones that mean watch it.' },
          { href: '/storm-cleanup-jacksonville-nc', label: 'Storm cleanup and insurance', blurb: 'What a homeowners policy typically covers when a tree comes down.' },
        ],
      }}
      finalCta={{
        heading: 'Get the Tree Measured, Not Guessed At',
        text: 'Free estimates across Jacksonville and Onslow County. If the wood is sound, we will tell you that.',
      }}
    />
  );
}
