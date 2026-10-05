import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { BUSINESS, PRICING } from '@/data/siteData';
import LiteYouTube from '@/components/ui/LiteYouTube';
import { RESISTOGRAPH_PRINTOUT } from '@/data/ownerContent';

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
    note: 'Lightning strikes among the stresses that predispose pines to Ips engraver beetle attack; resin ("pitch tubes") as the tree\'s defense, and why a stressed tree may not produce it.',
  },
  {
    label: 'National Weather Service, Wilmington NC — Hurricane Florence',
    href: 'https://www.weather.gov/ilm/HurricaneFlorence',
    note: 'Landfall near Wrightsville Beach the morning of Sept. 14, 2018, maximum sustained winds near 90 mph.',
  },
  {
    label: 'Kane, Ryan & Bloniarz (2001) — Comparing Formulae that Assess Strength Loss Due to Decay in Trees',
    href: 'https://auf.isa-arbor.com/content/27/2/78',
    note: 'Arboriculture & Urban Forestry 27(2). Why no single decay threshold decides a tree on its own: "the distinction between a hazard tree that needs to be removed and a nonhazard tree that can remain standing is not clear and rigid."',
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
      authorUpdated="2026-09-28"
      credentialBlock
      description="Resistograph testing in Jacksonville, NC measures internal decay in a standing tree, so a sound hardwood isn't removed on a guess. Local species notes."
      ctaText={`Ask About Testing — ${BUSINESS.phone}`}
      quickAnswer="A resistograph is a drill that measures wood. It pushes a needle-thin probe through a standing trunk and records how hard the wood pushes back, which maps the solid wood and the rot without taking the tree apart. We use it for one reason: so nobody has to decide whether a big hardwood is dangerous by looking at it."
      sections={[
        {
          heading: 'What a Resistograph Actually Measures',
          text: "The tool is a drill with a probe about the thickness of a wire. It advances through the trunk at a constant rate and records the resistance the wood offers the whole way in, printing a profile of density from bark to center.\n\nSolid wood reads high and even. Decay reads as a drop — and the depth at which the drop starts, how wide it runs, and whether it closes again tells us where the rot is and how much sound wood is left holding the tree up. A 3 mm hole is the entire wound, which is the point: you learn what is inside a 90-foot tree without climbing it apart first.\n\nWhat it does not do is give an opinion. It gives a measurement. The judgment still belongs to the person reading it against the lean, the root plate, the canopy, and what is underneath the tree.",
        },
        {
          heading: "Why We Test: To Measure Risk, Not to Justify a Removal",
          text: "A mature hardwood over a house looks alarming, and with nothing but a visual inspection to go on the cautious answer is always “take it down.” Every tree company in the world can sell that answer. But a 60-year-old water oak shading the west side of your house is worth real money in cooling, and it is not replaceable inside a human lifetime.\n\nSo we measure instead of guessing. In our experience roughly 60 percent of the trees we measure show some rot or decay — and still do not need to come out right away.\n\nThat is the useful finding, and it is why a single test is only half the tool. Rot on its own does not decide anything; what matters is how much sound wood is left, where it is, and how fast that is changing. One reading tells you the risk today. Re-testing the same tree each year tells you the direction and the speed — whether you are looking at decay that has been sitting still for a decade or something that moved measurably in twelve months.\n\nThat turns a yes-or-no into a real decision with three honest options: leave it and keep watching, trim it to take weight off the structure and buy years, or remove it. You are choosing between those with a number in front of you rather than taking anyone's word for it, ours included."
        },
        {
          heading: "How Much Rot Is Too Much?",
          text: "There is no single percentage that decides it, and anyone who gives you one is oversimplifying.\n\nThe rule of thumb you will find quoted most often comes from Claus Mattheck: a shell-thickness ratio of t/R = 0.3, where t is the remaining sound wall and R is the trunk radius — roughly 70 percent of the radius hollow before the tree is flagged. It is a genuinely useful starting point and we do look at it.\n\nIt is a starting point and not a verdict, and the published research is explicit about that. Reviewing the strength-loss formulas in Arboriculture & Urban Forestry, Kane, Ryan and Bloniarz note that “the author of each formula cautions that the distinction between a hazard tree that needs to be removed and a nonhazard tree that can remain standing is not clear and rigid,” and conclude that “hazard tree assessment is an art as much as it is a science.”\n\nWhat has to be weighed alongside the number: the species and how its wood behaves, WHERE the decay sits — a hollow at mid-trunk is a different problem from decay at the root collar — the lean, the condition of the root plate, and what is underneath the tree. A hollow trunk in the middle of a pasture and the same hollow trunk over a child's bedroom are not the same risk, and no formula knows the difference.\n\nOur approach is the boring one: measure it, assess the risk with everything else in front of us, and re-test annually so the trend is doing the arguing rather than one snapshot."
        },
        {
          heading: 'What We Find in Onslow County Trees',
          text: "In our experience the species here fall into a pattern, and it is consistent enough that we go into a test with an expectation:\n\n• Mature maples — almost always carry some heartwood rot. We rarely test a big maple and find it clean all the way through.\n• Water oaks — show a decent amount of rot on the resistograph roughly seven or eight times in ten.\n• Live oaks — rarely rot. They are the exception, and they are usually the tree worth keeping.\n\nWe suspect the high water table here is part of why. Standing water and saturated root zones are hard on a tree's ability to wall off decay, and this is a coastal county where the water is never far down. That is a suspicion drawn from what we keep finding, not a conclusion — we are reporting a pattern in our own test results, not a study.\n\nWhat it means practically: if you have a big maple or water oak close to the house, the odds are good that there is something inside it. That is not a reason to remove it. It is a reason to know the number before the next storm rather than after.",
        },
        {
          heading: 'Lightning-Struck Pines Are a Different Problem',
          text: "Lightning is the threat people underestimate here, and tall pines take most of the strikes because they are the tallest thing in the yard.\n\nWhat a strike does inside a pine is dry the heartwood out along the path it traveled. As that wood dries it shrinks, and stress cracks open — a route straight into the center of the tree for insects and infection. The tree's own answer is resin: pines push sap out to seal a wound, and NC State Extension describes the dried result as \"pitch tubes\" when beetles are the thing being repelled. The catch, in Extension's words, is that \"stressed trees may not have the resources available to produce sap\" — and Extension lists lightning strikes among the stresses that predispose pines to Ips engraver beetle attack in the first place.\n\nSo the tree is trying to seal a wound at the exact moment it is least able to. In our experience many struck pines do not recover, and the ones that fail often look fine for a season first. A strike is a good reason to have the trunk tested rather than to wait and watch.",
        },
        {
          heading: "The Storms Have Been Quiet. The Rot Hasn't.",
          text: "North Carolina has not taken a hurricane landfall since Isaias came ashore at Ocean Isle Beach in August 2020, according to the NC State Climate Office's landfall record. Before that, Dorian in September 2019, and Florence — which the National Weather Service in Wilmington puts on the beach near Wrightsville the morning of Sept. 14, 2018 with sustained winds near 90 mph.\n\nSix quiet years is long enough for a lot of people to stop thinking about their trees, and it is exactly the wrong conclusion to draw. Decay does not take years off. A tree that would have come down in Florence and didn't has spent six more seasons rotting, and the next storm does not care that the last one was a while ago.\n\nThe cheapest version of storm preparation is knowing which of your trees is hollow before the wind tells you.",
        },
        {
          // The doubled $ below is deliberate: in a template literal `$${x}`
          // renders "$" followed by the value. A single $ would be swallowed as
          // part of the interpolation — which is exactly how these first shipped
          // reading "200 for each of the first two trees".
          heading: "What Resistograph Testing Costs",
          text: `Testing is priced per tree: $${PRICING.resistograph.first2PerTree} for each of the first two trees, then $${PRICING.resistograph.additionalPerTree} for every additional tree measured on the same visit, with a $${PRICING.resistograph.minimum} minimum.\n\nSo five trees on one visit is $700 — two at $${PRICING.resistograph.first2PerTree} and three at $${PRICING.resistograph.additionalPerTree}.\n\nThe rate halves after the second tree because the first two carry the setup. Once the equipment is out and we are already on the property, each additional trunk is mostly just the time it takes to take the readings.\n\nAnnual re-tests price the same way, and re-testing several trees together is the cheapest way to keep a whole yard monitored.`
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
        <>
        {/* 8d — the proof example. The printout figure renders only once the
            owner supplies a real image; until then the written account stands
            alone rather than sitting beside a placeholder box. We are not
            putting a stand-in graph next to a real measurement. */}
        <section id="pecan" className="py-16 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              A Pecan We Did Not Remove
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              About four years ago we tested a pecan that the owner had already been told
              needed to come down. The resistograph put the decay under 20 percent — real,
              measurable, and nowhere near enough to justify losing the tree.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              So we trimmed it instead, taking weight off the limbs that were the actual
              concern rather than taking the trunk. It is still standing. We trimmed it
              again this year, which is the second half of the point: the tree got a
              decision based on a measurement, and then it got looked at again.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Had the reading come back the other way, we would have said so just as
              plainly. The tool is useful precisely because it is capable of telling us the
              answer we were not expecting.
            </p>
            {RESISTOGRAPH_PRINTOUT.base && (
              <figure className="mt-8 m-0">
                <picture>
                  <source type="image/webp" srcSet={`${RESISTOGRAPH_PRINTOUT.base}.webp`} />
                  <img
                    src={`${RESISTOGRAPH_PRINTOUT.base}.jpg`}
                    alt={RESISTOGRAPH_PRINTOUT.alt}
                    width={RESISTOGRAPH_PRINTOUT.width}
                    height={RESISTOGRAPH_PRINTOUT.height}
                    sizes="(min-width: 768px) 768px, 100vw"
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-auto rounded-lg border-2 border-gray-800 bg-black"
                  />
                </picture>
                {RESISTOGRAPH_PRINTOUT.caption && (
                  <figcaption className="mt-3 text-gray-400 text-base leading-relaxed">
                    {RESISTOGRAPH_PRINTOUT.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        </section>

        {/* 8e — click-to-play facade. No YouTube JS or iframe until tapped. */}
        <section id="video" className="py-16 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Watch a Test
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Thirty seconds of the drill going into a live oak big enough that no ladder
              was going to answer the question.
            </p>
            <LiteYouTube
              id="IVCBzWks1uo"
              thumbnail="/images/video-resistograph-live-oak-swansboro-nc-480.jpg"
              title="Resistograph test on a massive live oak in Swansboro, NC."
              caption="Resistograph test on a massive live oak in Swansboro, NC."
            />
          </div>
        </section>

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
        </>
      }
      faqs={[
        {
          question: 'Does a resistograph hurt the tree?',
          answer: 'The probe is about 3 mm across — roughly the thickness of a wire. It leaves a hole a healthy tree closes off on its own, and it is a far smaller wound than any of the alternatives for seeing inside a trunk. We still place the drill points deliberately rather than taking readings all over the tree.',
        },
        {
          question: 'How much does resistograph testing cost in Jacksonville, NC?',
          answer: `Testing is $${PRICING.resistograph.first2PerTree} per tree for the first two trees, then $${PRICING.resistograph.additionalPerTree} for each additional tree tested on the same visit, with a $${PRICING.resistograph.minimum} minimum. Five trees on one visit comes to $700. The rate drops after the second tree because the first two carry the setup — once the equipment is out and we are on site, each further trunk is mostly the time it takes to take the readings.`,
        },
        {
          question: 'How much rot means a tree has to come down?',
          answer: 'There is no single percentage that decides it. The most-quoted rule of thumb is Mattheck’s shell-thickness ratio, t/R = 0.3 — roughly 70 percent of the radius hollow — and it is a useful starting point rather than a verdict. Published research in Arboriculture & Urban Forestry is explicit that the line between a hazard tree and one that can stay standing “is not clear and rigid.” Species, where the decay sits, the lean, the root plate and what is underneath the tree all weigh in. In our experience roughly 60 percent of the trees we measure show some rot and still do not need removing right away.',
        },
        {
          question: 'Can you tell a tree is rotten without a resistograph?',
          answer: 'Sometimes. A cavity, a fungal bracket, a seam running up the trunk, or a hollow sound are all real signals, and a lifted root plate settles the question without any tool at all. What you cannot do from the outside is tell how much sound wood is left, and that is the number that decides whether a tree stays.',
          link: { href: '/leaning-tree-dangerous-after-storm', label: 'Signs a tree is dangerous after a storm' },
        },
        {
          question: 'My tree was struck by lightning and looks fine. Should I worry?',
          answer: 'Worth having looked at. A strike dries the heartwood along its path and opens stress cracks as that wood shrinks, which lets insects and infection into the center of the tree. NC State Extension lists lightning strikes among the stresses that predispose pines to Ips engraver beetle attack, and notes that a stressed tree may not have the resources to produce the sap it would normally defend a wound with. In our experience many struck pines do not recover, and they often look healthy for a season first.',
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
          { href: '/tree-cabling-bracing-jacksonville-nc', label: 'Cabling and bracing', blurb: 'If the wood tests sound, hardware can support the weak union instead of removing the tree.' },
        ],
      }}
      finalCta={{
        heading: 'Get the Tree Measured, Not Guessed At',
        text: 'Free estimates across Jacksonville and Onslow County. If the wood is sound, we will tell you that.',
      }}
    />
  );
}
