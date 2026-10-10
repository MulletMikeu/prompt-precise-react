import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { CITY_JOBS } from '@/data/siteData';
import { HUBERT_ROADSIDE_PINE } from '@/data/batch2Photos';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

/**
 * Hubert — rebuilt in Batch 3 (Ship E) from a near-copy into a page about
 * Hubert.
 *
 * It measured 64.9% shared 5-grams with the other city pages, the worst on the
 * site, because almost every sentence on it was a template with the town name
 * dropped in ("We provide reliable tree services throughout Hubert, NC...").
 * What it now carries that no other page can: a $4,500 job off Sand Ridge Road,
 * and the specific geography that makes Hubert jobs what they are.
 *
 * NO TREE COUNT on the Sand Ridge job. The owner said "pine trees" and gave no
 * number. Stating one would be inventing a fact to make a sentence scan.
 */
export default function TreeServiceHubert() {
  return (
    <ServicePage
      title="Tree Service in Hubert, NC"
      subtitle="Between Camp Lejeune's back gate and Swansboro — Removal, Trimming & Stump Grinding"
      slug="tree-service-hubert-nc"
      faqPosition="early"
      credentialBlock
      description={`Tree service in Hubert, NC (Onslow County). A real local job: ${CITY_JOBS.hubert.price} climbing and removing pines off Sand Ridge Road. Free estimates.`}
      ctaText="Call Now for a Free Estimate"
      quickAnswer={`Hubert is unincorporated Onslow County, sitting between the northeastern side of Camp Lejeune and Swansboro, laced with tidal creeks running toward the White Oak River. For a real local figure: we charged ${CITY_JOBS.hubert.price} for climbing and removing pines off Sand Ridge Road, near one of the base's back gates.`}
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. This page had ZERO
       * editorial outbound links before batch 1 — every link on it was a templated
       * band or a service card. Same copy as the `text` entry it replaces, plus the
       * local detail that makes each anchor relevant. Edit both or neither.
       *
       * Batch 3 rewrote section 2, so this body was rewritten to match it. The
       * THREE anchors are deliberately unchanged in number and destination:
       * one of them points at /tree-removal-cost-north-carolina, which is the
       * live A/B treatment arm. Ship E may neither add nor remove links to that
       * page, so this link stays exactly as it is — do not drop it to tidy the
       * sentence, and do not add a second one.
       */
      sectionBodies={{
        2: (
          <>
            {"• Pine removal, usually climbed rather than lifted, where access is tight or boggy\n• Trimming and weight reduction over roofs before hurricane season\n• Stump grinding, including the haul-away of the grindings\n• Storm response, 24/7, for trees on houses and across driveways\n\nWhat we do not do is land clearing. That is a different trade with different machines, and we will point you at someone who does it properly rather than pretend otherwise.\n\nHubert is on the coastal, sandy-loam side of the county — the half where a yard can look solid and give way under a loaded machine — so "}
            <Link to="/tree-removal-near-house-jacksonville-nc" className={PROSE_LINK}>how we get to a trunk without rutting the lawn</Link>
            {" is usually the first thing worth reading, followed by "}
            <Link to="/tree-removal-cost-north-carolina" className={PROSE_LINK}>what a removal costs here</Link>
            {". Next door, "}
            <Link to="/tree-service-swansboro-nc" className={PROSE_LINK}>Swansboro</Link>
            {" is the same ground and the same species."}
          </>
        ),
      }}
      sections={[
        {
          heading: `${CITY_JOBS.hubert.price} to climb and remove pines off Sand Ridge Road`,
          text: `That is a real invoice from this community, not a range. Pines off Sand Ridge Road, near one of Camp Lejeune's back gates, climbed and taken down in sections.\n\nWHY THEY WERE CLIMBED. Roadside pines near the base boundary tend to be tall, limbed high, and standing where a lift cannot easily be positioned — a shoulder, a ditch line, or a strip between the road and a fence. When the machine cannot get under the tree, a climber goes up it and every piece comes down on rope.\n\nWHAT THE NUMBER IS ACTUALLY MADE OF. Not height. It is the number of pieces, how far each one has to be carried to the chipper, and how much of the day is spent in a harness rather than on the ground. Roadside work adds its own overhead too: traffic, a narrow working strip, and nowhere convenient to drop anything.\n\nWe are not going to tell you how many trees that was, because the honest answer is that the owner described the job as pines, plural, and did not give a count — and a number invented to make this paragraph read better is exactly the kind of detail that turns into a quoted price on the phone.`
        },
        {
          heading: "Hubert is tidal creeks, base boundary and the White Oak River",
          text: "Hubert is an unincorporated community in Onslow County, ZIP 28539, sitting west of Swansboro with the northeastern side of Marine Corps Base Camp Lejeune along its edge. Freedom Way, Hubert Boulevard, Sand Ridge Road, Riggs Road and Queens Creek Road are the roads everything else hangs off.\n\nThat geography does three things to tree work here, in our experience.\n\nTHE WATER IS NEVER FAR. Queens Creek and the tidal creeks running toward the White Oak River mean a lot of properties here back onto marsh or water. Ground that carries a machine in August will not necessarily carry one in February, and the last hundred feet to the trunk is frequently the whole problem.\n\nIT IS THE SANDY HALF OF THE COUNTY. Our shop on Gum Branch Road is roughly where the ground changes; Hubert is firmly on the coastal side of that line. Sandy loam looks solid and gives way under load, which is why we mat the route or stay off the grass entirely rather than finding out.\n\nBASE PROXIMITY SETS THE CALENDAR, NOT THE METHOD. A good share of Hubert calls are tied to a PCS date — somebody needs a tree dealt with before a move, within a window that is not negotiable. Tell us the date at the estimate and we will tell you honestly whether we can hold it."
        },
        {
          heading: "What we do most in Hubert",
          text: "• Pine removal, usually climbed rather than lifted, where access is tight or boggy\n• Trimming and weight reduction over roofs before hurricane season\n• Stump grinding, including the haul-away of the grindings\n• Storm response, 24/7, for trees on houses and across driveways\n\nWhat we do not do is land clearing. That is a different trade with different machines, and we will point you at someone who does it properly rather than pretend otherwise."
        }
      ]}
      gallery={{
        heading: "Off Sand Ridge Road",
        images: [
          {
            ...HUBERT_ROADSIDE_PINE,
            alt: "A pine being taken down in sections beside the road at Hubert, NC, with cut limbs stacked on the ground and more pines standing behind.",
            caption: `The Sand Ridge Road job — ${CITY_JOBS.hubert.price}, climbed and sectioned down from the roadside.`,
          },
        ],
      }}
      faqs={[
        {
          question: "How much does tree removal cost in Hubert, NC?",
          answer: `It depends on the trunk and the access rather than the height. For a real local figure: ${CITY_JOBS.hubert.price} for climbing and removing pines off Sand Ridge Road near a back gate of Camp Lejeune. A single tree in an open yard is considerably less; a tree hard against a house is more. We quote on site, in writing, before anything is cut.`
        },
        {
          question: "Why would you climb a tree instead of using the lift?",
          answer: "Because the lift has to be able to get to it. On the roadside and creek-side lots around Hubert there is often no firm ground within reach of the trunk — a ditch, a soft shoulder, a narrow strip between the road and a fence. When that is the case a climber goes up and the tree comes down in roped sections, which takes longer and is why it costs what it costs."
        },
        {
          question: "Can you work near the Camp Lejeune boundary?",
          answer: "Yes. Hubert borders the northeastern side of the base and a lot of our work here is right along that edge. Anything actually inside the gate is the base's own contracting process, not ours — but the properties around it are ordinary residential work."
        },
        {
          question: "I have a PCS date. Can you work to it?",
          answer: "Tell us the date at the estimate. A straightforward removal is usually easy to fit; a big tree needing a crane or a lift booking is harder in storm season. We would rather tell you we cannot hold a date than take the job and miss it."
        },
        {
          question: "Will your equipment damage a soft or wet yard?",
          answer: "That is the live question on this side of the county, and the answer is that we plan for it. The spider lift runs on rubber tracks rather than tires, we lay plywood matting over soft ground and anything buried, and where the ground will not take a machine at all we climb instead. Point out the septic field, drain lines and irrigation before we start."
        }
      ]}
      caseStudy={
        <section id="hubert-sources" className="py-12 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-4">Source</h2>
            <a
              href="https://en.wikipedia.org/wiki/Hubert,_North_Carolina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
            >
              Hubert, North Carolina
            </a>
            <span className="block text-gray-400 text-base mt-1">
              Hubert as an unincorporated community in Onslow County, ZIP 28539, west of
              Swansboro with the northeastern side of Marine Corps Base Camp Lejeune
              bordering it, and the named routes above including Sand Ridge Road. What we
              say about soil, access and how a job here gets priced is our own experience,
              not that source&rsquo;s.
            </span>
          </div>
        </section>
      }
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Schedule Tree Service in Hubert, NC",
        text: "Need professional tree service in Hubert, NC? Contact us today for a free estimate and fast, reliable service.",
        buttonText: "Call Now"
      }}
    />
  );
}
