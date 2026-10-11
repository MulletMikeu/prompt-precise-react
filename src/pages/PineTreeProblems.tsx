import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { PRICING } from '@/data/siteData';
import { PITCH_TUBES, RICHLANDS_CRACKED_LIMB, RICHLANDS_CANOPY_LIMB } from '@/data/batch2Photos';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

/** Floated figure: w-72 (288px) from `md` up, content column below that. */
const FIGURE_SIZES = '(min-width: 768px) 288px, calc(100vw - 2rem)';

/**
 * /pine-tree-problems-jacksonville-nc — split out of
 * /tree-removal-jacksonville-nc in Batch 5 (Ship G).
 *
 * WHY THE SPLIT. The removal page had absorbed content in every batch since
 * Ship D and reached ~5,800 visible words with twelve images. By Ship F it was
 * the only page on the site sitting on the Lighthouse gate — production median
 * exactly 95, with one run at 94, against a floor of 95. It was going to fail
 * the next time anything was added to it.
 *
 * Pine health is also a genuine search topic in its own right rather than a
 * subsection of "how much does removal cost", so this is a split that makes
 * both pages better rather than a weight-shedding exercise that makes one page
 * worse.
 *
 * WHAT MOVED, AND WHAT DID NOT. The two pine-health sections, their two FAQs,
 * the pitch-tube photograph and the two Richlands wind-cracked limb
 * photographs came here **verbatim** — every owner figure and every quotation
 * is exactly as Ship D shipped it, including the three-to-five-year shed cycle,
 * the 30-40% lightning figure, the two-year beetle waves and the ~50/50 split,
 * all of which are the owner's own observations and are still marked as such.
 *
 * What stayed on the removal page: the pine/sweetgum "most-removed species"
 * section and the pine-size section (85-90 ft cap, diameter not height). Both
 * are pricing arguments rather than health ones, and the removal page is where
 * a reader meets them.
 *
 * NO LINK TO /tree-removal-cost-north-carolina FROM THIS PAGE. It is the live
 * A/B treatment arm, frozen until 2026-12-01, and scripts/check-arms.mjs will
 * fail the build if a link to it appears. Point cost anchors at the removal
 * page instead.
 */
export default function PineTreeProblems() {
  return (
    <ServicePage
      title="Is my pine tree dying or dangerous? Jacksonville, NC"
      metaTitle="Is My Pine Tree Dying or Dangerous? | Jacksonville NC"
      subtitle="Brown-out, beetles, lightning and overgrown limbs — what each one actually means"
      slug="pine-tree-problems-jacksonville-nc"
      faqPosition="early"
      authorUpdated="2026-10-11"
      credentialBlock
      description="A browned-out pine is already dead. Heavy needle shed is not. How to tell the difference, what pitch tubes mean, and what we actually advise on a borderline pine."
      ctaText="Call for a Free Estimate"
      quickAnswer="Pines do not hide sickness the way hardwoods do, which is the useful thing about them. If a pine has browned out, it is dead — there is no treatment. Heavy needle shed every three to five years is not brown-out: that is interior needles going brown while the tips stay green. Lightning browns 30 to 40 percent of a canopy and leaves spiral cracks. And most pine trouble is not disease at all — it is limbs that have outgrown their attachment, which is a trimming job."
      sections={[
        {
          /*
           * Moved verbatim from /tree-removal-jacksonville-nc (Ship D, Batch 2
           * item 4). Do not reword: every figure here is the owner's own
           * observation and three of them could not be sourced — the
           * three-to-five-year shed cycle in particular is contradicted by the
           * extension literature, which describes annual interior shed, so it
           * is carried explicitly as our experience in Onslow County and must
           * stay phrased that way.
           *
           * The brown-out / hollow-hardwood contrast is the exact inverse of
           * the argument on /resistograph-tree-testing-jacksonville-nc. The two
           * pages are meant to be read as a pair, not as a contradiction.
           */
          heading: "A browned-out pine is already gone — pines do not hide it the way hardwoods do",
          text: "If a pine has browned out, the tree is dead. There is no treatment, and there is no waiting to see what spring does. That sounds harsh and it is actually the good news: a pine tells you the truth about itself. A hardwood can be hollow through the middle and still leaf out green every year, which is why we drill hardwoods and measure them. Pines do not give you that problem, because they do not give you that option.\n\nHEAVY NEEDLE SHED IS NOT BROWN-OUT. Pines drop their older needles on a cycle, and in our experience in Onslow County every three to five years that shed is heavy enough to frighten people — interior needles going brown and falling while the tips stay green. That is the tree renewing itself. Brown at the tips, or brown all through, is the other thing entirely.\n\nLIGHTNING BROWNS 30 TO 40 PERCENT OF THE CANOPY. It also dries the wood out along the path it took and leaves spiral cracks running down the trunk — the most recognizable signature there is. A struck pine often looks survivable for a season and is not.\n\nMOST PINE TROUBLE IS JUST OVERGROWN LIMBS. Before anyone reaches for disease, the ordinary answer is that the tree has grown limbs longer and heavier than the attachment can hold. That is a trimming conversation, not a removal.\n\nWHITE RESIN SEALING A CRACK IS A GOOD SIGN. It means the tree has the resources to defend itself and is spending them. The bad sign is the opposite and it catches people out: cut into a pine in summer and find no sap running, and you are looking at a tree that has nothing left to fight with.\n\nABOUT HALF OUR PINE REMOVALS ARE ALREADY DECIDED BEFORE WE ARRIVE. Roughly half are lightning, storm damage or visible decline — trees where the question has answered itself. The other half are worry: a healthy pine near a house, and an owner who would rather not find out the hard way. Both are legitimate reasons to call. They are just very different conversations, and we will tell you which one you are having."
        },
        {
          /* Also moved verbatim from the removal page. The two Extension
             quotations are exact and were fetched and confirmed in Ship D;
             the two-year wave pattern, the "many small holes" sign and the
             sawdust-at-the-base sign are OURS and are attributed as such in
             the Sources block below. */
          heading: "Pine beetles: sawdust, small holes, and sap running where it should not",
          text: "Bark beetles move in waves here — roughly two-year ones, in our experience, and the last two years have been quieter than usual. The one we see most is the southern pine beetle; we see Ips engravers less often. NC State Extension puts the same ordering more formally, calling southern pine beetle \"the worst pest of southern forests\" with potential for \"major destruction during outbreaks\", while Ips engravers \"are secondary pests\" whose \"populations typically do not become widespread as they do with southern pine beetle\".\n\nWHAT TO LOOK FOR. Fine sawdust at the base of the trunk or caught in the bark crevices. A lot of small holes rather than a few. And sap oozing out of the trunk in beads or blobs where there is no wound to explain it — those are pitch tubes, and Extension describes them exactly: \"Pitch tubes are an external sign of bark beetle infestation. This occurs when the tree, in an attempt to defend itself, extrudes sap as a beetle attempts to bore in.\"\n\nWhich is worth sitting with for a second, because it cuts against the resin rule above. Resin sealing a storm crack is a tree winning. Resin in tubes across the trunk is a tree under attack and telling you so.\n\nWHAT WE ACTUALLY ADVISE ON A BORDERLINE TREE. Keep a closer eye on it. That is the honest recommendation and it is deliberately not \"remove it now\" — a pine with a few pitch tubes is not automatically a dead pine, and we are not going to sell you a removal on the strength of some sap. Look at it monthly, and call us if the canopy starts to go."
        },
        {
          heading: "What you cannot see from the ground",
          text: "Both of the photographs below were found from a lift, not from a driveway, and neither property had any idea the limb was there.\n\nThat is the practical limit of self-assessment on a mature pine. Brown-out is visible from the road and so is a lightning scar; a cracked limb forty feet up over a bedroom is not. Where a pine is tall enough and close enough to a structure that a failure would matter, the canopy is worth looking at properly — which on our jobs means someone goes up, not that someone squints harder.\n\nIf the question is the trunk rather than the canopy, that is a different instrument and a different page."
        },
      ]}
      /* Positional keys against `sections` above:
           0 brown-out · 1 beetles · 2 what-you-cannot-see
         Recount after any insertion — positional and fails silently. */
      sectionFigures={{
        // Beside the beetle text, because "sap oozing where there is no wound"
        // is the one sign in that section a reader cannot picture from words.
        1: (
          <figure className="mb-6 md:float-right md:mb-4 md:ml-8 md:w-72">
            <picture>
              <source type="image/avif" srcSet={PITCH_TUBES.avifSrcSet} sizes={FIGURE_SIZES} />
              <img
                src={PITCH_TUBES.src}
                srcSet={PITCH_TUBES.srcSet}
                sizes={FIGURE_SIZES}
                alt="Cream-colored blobs of hardened resin on pine bark — pitch tubes, pushed out by the tree where beetles bored in."
                width={PITCH_TUBES.width}
                height={PITCH_TUBES.height}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-lg border-2 border-gray-800"
              />
            </picture>
            <figcaption className="mt-3 text-base leading-relaxed text-gray-400 whitespace-normal">
              Pitch tubes on a pine trunk. The tree is pushing sap out at the boring
              sites — defending itself, and telling you it is under attack.
            </figcaption>
          </figure>
        ),
      }}
      sectionBodies={{
        2: (
          <>
            {"Both of the photographs below were found from a lift, not from a driveway, and neither property had any idea the limb was there.\n\nThat is the practical limit of self-assessment on a mature pine. Brown-out is visible from the road and so is a lightning scar; a cracked limb forty feet up over a bedroom is not. Where a pine is tall enough and close enough to a structure that a failure would matter, the canopy is worth looking at properly — which on our jobs means someone goes up, not that someone squints harder.\n\nIf the question is the trunk rather than the canopy, that is a different instrument: "}
            <Link to="/resistograph-tree-testing-jacksonville-nc" className={PROSE_LINK}>a resistograph measures how much sound wood is left</Link>
            {", and on a pine the trace reads in looser waves than it does on a hardwood. If the limbs are simply too long for their attachment, which is the commonest pine problem we see, that is "}
            <Link to="/tree-trimming-jacksonville-nc" className={PROSE_LINK}>a trimming job</Link>
            {". And if it does have to come out, "}
            <Link to="/tree-removal-jacksonville-nc" className={PROSE_LINK}>what a pine removal involves and what sets its price</Link>
            {" is on the removal page."}
          </>
        ),
      }}
      gallery={{
        heading: 'Found on a canopy inspection — Richlands, NC',
        images: [
          {
            ...RICHLANDS_CRACKED_LIMB,
            alt: 'A long split running the length of a pine limb directly above a house roof in Richlands, NC, seen from the lift.',
            caption: 'Richlands, NC — a wind-cracked limb directly over the house. Nobody knew it was there.',
          },
          {
            ...RICHLANDS_CANOPY_LIMB,
            alt: 'A cracked pine limb up in the canopy at Richlands, NC, found during a canopy inspection.',
            caption: 'The same job. This is what a canopy inspection is for — you cannot see either of these from the ground.',
          },
        ],
      }}
      caseStudy={
        <section id="pine-sources" className="py-12 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-4">Sources</h2>
            <a
              href="https://content.ces.ncsu.edu/pine-bark-beetles"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
            >
              NC State Extension — Pine Bark Beetles
            </a>
            <span className="block text-gray-400 text-base mt-1">
              Kelly Oten, NC State University. The pitch-tube description quoted above,
              and southern pine beetle as &ldquo;the worst pest of southern forests&rdquo;
              against Ips engravers as &ldquo;secondary pests&rdquo;.
              {' '}
              <strong className="font-semibold text-white">
                Several figures on this page are ours, not Extension&rsquo;s, and are
                marked as such in the copy:
              </strong>
              {' '}the two-year wave pattern and the quieter last two years, the
              &ldquo;many small holes&rdquo; sign, and sawdust at the base &mdash;
              Extension attributes sawdust-filled galleries specifically to the black
              turpentine beetle and gives no outbreak periodicity. The three-to-five-year
              heavy needle-shed cycle is also our own observation: the extension
              literature describes pines shedding their oldest interior needles annually,
              and nothing we found supports a multi-year cycle. So is the 30&ndash;40%
              lightning figure and the roughly even split between decided and worried
              calls.
            </span>
          </div>
        </section>
      }
      faqs={[
        {
          /* Both FAQs moved verbatim from the removal page (Ship D). */
          question: "How do I know if my pine tree is dying?",
          answer: "A pine will tell you, which is the useful difference between pines and hardwoods. If it has browned out, the tree is dead — there is no treatment and no point waiting for spring. A hardwood, by contrast, can be hollow inside and still leaf out green, which is why we drill those and measure them. Two things are commonly mistaken for a dying pine: a heavy needle-shed year, where interior needles brown and drop while the tips stay green, which in our experience happens every three to five years here; and overgrown limbs, which is the most common pine problem we see and is a trimming job rather than a removal. A pine that has been struck by lightning typically browns 30 to 40 percent of its canopy and shows spiral cracks down the trunk."
        },
        {
          question: "What are the signs of pine beetles?",
          answer: "Fine sawdust at the base of the trunk or in the bark crevices, a lot of small holes rather than a few, and sap oozing out in beads where there is no wound to explain it. Those beads are pitch tubes — NC State Extension describes them as the tree extruding sap as a beetle attempts to bore in. Around here we see the southern pine beetle more than Ips engravers, and infestations come in roughly two-year waves, with the last two years quieter than usual. If your tree is borderline, our honest advice is to keep a closer eye on it rather than remove it: a few pitch tubes is not a dead pine."
        },
        {
          question: "My pine lost a lot of needles this year. Is it dying?",
          answer: "Probably not, if the needles that went brown were the interior ones and the tips stayed green. That is the tree shedding its oldest needles, and in our experience in Onslow County it is heavy enough every three to five years to alarm people who have not seen it before. What is not normal is brown at the tips, or brown throughout. That is brown-out, and a browned-out pine is finished."
        },
        {
          question: "A pine near my house was struck by lightning and still looks alive. Should I worry?",
          answer: "Worth having looked at. A strike typically browns 30 to 40 percent of the canopy, dries the heartwood along the path it travelled, and opens spiral cracks down the trunk as that wood shrinks — which lets insects and infection into the centre of the tree. In our experience many struck pines do not recover, and the ones that fail often look fine for a season first. It is also one of the stresses that predisposes a pine to beetle attack, precisely when it is least able to produce the resin it would defend itself with.",
          link: { href: "/resistograph-tree-testing-jacksonville-nc", label: "What a lightning strike does inside a pine →" }
        },
        {
          question: "Can a pine with beetles be saved?",
          answer: "Sometimes, and it depends how far along it is. A tree with a few pitch tubes and a full green canopy is not a dead tree, and we will tell you to watch it rather than sell you a removal. A pine whose canopy has started to fade or brown while the beetles are active is usually past saving. The honest position is that we are a tree company and not a spray service: what we can tell you is whether the tree is still defensible and what it will cost to take down if it is not.",
        },
        {
          question: "What does it cost to have a pine looked at?",
          answer: `Nothing, if you are considering work — we come out, look and price it for free. A standalone arborist health and risk assessment, where you want a considered written opinion rather than a quote, runs ${PRICING.inspection.assessment} and covers ${PRICING.inspection.assessmentScope}, stretching to ${PRICING.inspection.assessmentMaxTrees} on one visit.`,
          link: { href: "/resistograph-tree-testing-jacksonville-nc", label: "Free estimate versus a paid assessment →" }
        },
      ]}
      guides={{
        heading: 'Related',
        intro: 'What to read next, depending on what the pine is doing:',
        links: [
          { href: '/tree-removal-jacksonville-nc', label: 'Pine removal in Jacksonville, NC', blurb: 'Why pine and sweetgum top our invoices, how big they actually get here, and what sets the price.' },
          { href: '/resistograph-tree-testing-jacksonville-nc', label: 'Resistograph testing', blurb: 'For the trunk rather than the canopy — and what a lightning strike does inside a pine.' },
          { href: '/tree-trimming-jacksonville-nc', label: 'Tree trimming and weight reduction', blurb: 'The answer to the commonest pine problem there is: limbs longer than their attachment can hold.' },
          { href: '/storm-damage-trees-guide', label: 'Hurricane prep and storm safety', blurb: 'When to book, what weight reduction costs, and the stressed-tree tell that costs nothing to check.' },
          { href: '/neighbor-tree-problems-jacksonville-nc', label: "When the pine is your neighbor's", blurb: 'Who can cut what, and why a written notice matters if it later fails.' },
        ],
      }}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
        { label: 'Resistograph Tree Testing', href: '/resistograph-tree-testing-jacksonville-nc' },
      ]}
      finalCta={{
        heading: 'Not Sure What Your Pine Is Doing?',
        text: 'Send us a photo or give us a call. If it is a heavy shed year we will tell you that and charge you nothing — we would rather say so than sell you a removal.',
        buttonText: 'Call Now',
      }}
    />
  );
}
