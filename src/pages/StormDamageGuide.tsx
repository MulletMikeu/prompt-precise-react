import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { PRICING } from '@/data/siteData';
import {
  BARN_DAMAGE,
  BARN_CRANE,
  BARN_CLIMBER,
  BARN_LIFT_OUT,
  BROKEN_LIMB_CANOPY,
  SPLIT_LIMB_CANOPY,
} from '@/data/batch2Photos';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

/** In-prose figures span the max-w-3xl content column. */
const PHOTO_SIZES = '(min-width: 768px) 768px, 100vw';

/**
 * /storm-damage-trees-guide — rebuilt in Batch 2 (Ship D, 2026-10-10) as a
 * hurricane-prep and storm-safety guide. The URL is deliberately unchanged.
 *
 * WHY IT WAS REBUILT RATHER THAN EDITED. Google has this page as "Crawled –
 * currently not indexed", last crawled 2026-05-25 and not revisited in four
 * and a half months, while Bing has it indexed and crawled 2026-10-04. That is
 * non-indexation, not staleness, and the two are different problems: a stale
 * page can still be cited, a non-indexed one cannot be cited by that engine at
 * any age. The old version was six sections of generic advice — "Storms can
 * cause serious damage to trees", "Stay clear of damaged trees and debris" —
 * with nothing on it that is not on a thousand other pages, one editorial
 * outbound link, and no figure, price, date or photograph anywhere. There was
 * nothing here for an index to want.
 *
 * So the rebuild is not a rewrite for its own sake. Every section now carries
 * something only this company can say: the months we actually book prep in,
 * what weight reduction over a roof actually costs, the phenology tell the
 * owner uses to spot a stressed tree, and a dated job with photographs. The
 * safety content that was genuinely useful is kept and sharpened rather than
 * thrown away.
 *
 * KEEP THE URL. It has whatever history it has, and a new slug would throw
 * that away to solve a problem the slug never caused.
 */
export default function StormDamageGuide() {
  return (
    <ServicePage
      title="Hurricane Prep for Trees, and What to Do After Storm Damage"
      metaTitle="Hurricane Tree Prep & Storm Damage Guide | Godhans"
      slug="storm-damage-trees-guide"
      faqPosition="early"
      authorUpdated="2026-10-10"
      credentialBlock
      description={`Hurricane tree prep in Onslow County: book late February to early April, ${PRICING.trimming.weightReductionOverRoof} for weight reduction over a roof. Plus what to do the hour after a tree comes down.`}
      quickAnswer={`Book hurricane prep between late February and early April — after the worst of winter, before the season opens on June 1, and while the schedule is still open. Weight reduction over a roof typically runs ${PRICING.trimming.weightReductionOverRoof}; one to three low limbs is ${PRICING.trimming.fewLowLimbs}. If a tree is already down: stay away from it, assume every line is live, photograph everything before anything moves, and call.`}
      /* Positional keys against `sections` below:
           0 when-to-book · 1 what-prep-costs · 2 the-stressed-tree ·
           3 first-hour · 4 what-breaks · 5 prevention
         Recount after any insertion — these are positional and fail silently. */
      sectionBodies={{
        5: (
          <>
            {"The work that actually reduces storm damage, in the order it is worth doing:\n\n• Take weight off the limbs that sit over the roof — "}
            <Link to="/tree-trimming-jacksonville-nc" className={PROSE_LINK}>what trimming costs and what we take off</Link>
            {"\n• Remove the dead and declining trees before a storm finds them for you — "}
            <Link to="/tree-removal-jacksonville-nc" className={PROSE_LINK}>what a removal costs and how long it takes</Link>
            {"\n• Measure a trunk you are unsure about instead of guessing at it — "}
            <Link to="/resistograph-tree-testing-jacksonville-nc" className={PROSE_LINK}>resistograph testing</Link>
            {"\n• Support a weak union rather than losing the whole tree — "}
            <Link to="/tree-cabling-bracing-jacksonville-nc" className={PROSE_LINK}>cabling and bracing</Link>
            {"\n• Settle what your policy covers before you need to know — "}
            <Link to="/storm-cleanup-jacksonville-nc" className={PROSE_LINK}>storm cleanup and insurance</Link>
            {"\n• And if one is already leaning, that is its own question — "}
            <Link to="/leaning-tree-dangerous-after-storm" className={PROSE_LINK}>is a leaning tree dangerous after a storm?</Link>
            {"\n\nNone of this makes a tree storm-proof. What it does is remove the failures that were predictable, which in our experience is most of them."}
          </>
        ),
      }}
      sections={[
        {
          heading: "Call between late February and early April — that is when prep actually gets done",
          text: "If you are going to do one thing about your trees this year, book it in late February, March or the first week of April.\n\nThat window is a scheduling answer rather than a horticultural one, and it is worth being clear about which it is. The reasons are practical: the worst of the winter weather is behind us, the ground has usually drained enough to carry equipment, hurricane season does not open until June 1, and — the part nobody thinks about — our schedule is still open. Call us in late August with a pine over your bedroom and you are competing with everyone else who also just looked at the forecast.\n\nThere is a second reason that only applies before the leaves are fully out: you can see the structure. A bare or barely-leafed canopy shows you the cracks, the dead limbs and the weak unions that a full summer canopy hides completely. Both of the broken limbs further down this page were found from a lift, not from the ground — but they were found far more easily for the tree not being in full leaf.\n\nIf you have missed that window, call anyway. Later is worse than March and considerably better than never.",
        },
        {
          heading: `${PRICING.trimming.weightReductionOverRoof} to take the weight off a roof. ${PRICING.trimming.fewLowLimbs} for one to three low limbs.`,
          text: `Those are the two numbers people actually want, so here they are before the explanation.\n\nWEIGHT REDUCTION OVER THE ROOF — ${PRICING.trimming.weightReductionOverRoof} TYPICAL. This is the single most requested piece of hurricane prep we do, and it is the one with the best return. We are not topping the tree and we are not thinning it for looks: we are shortening and lightening the specific limbs whose failure would put wood through your roof. A shorter, lighter limb has less leverage on its attachment and catches less wind, and that is the whole mechanism.\n\nONE TO THREE LOW LIMBS — ${PRICING.trimming.fewLowLimbs}. The small version. No lift needed, usually an hour or two, often the limbs over a driveway or a shed rather than the house.\n\nBoth figures sit inside the ${PRICING.trimming.lift} band on our trimming page rather than contradicting it, because work over a roof means the lift, and the lift is what sets that floor.\n\nWhat we will not do is sell you topping. Cutting a tree back to stubs makes it look safer and makes it genuinely more dangerous — the regrowth is weakly attached and comes back faster and denser than what you removed. If someone quotes you a cheap price to "cut it back", that is usually what they mean.`,
        },
        {
          heading: "First to lose its leaves and last to leaf out? That is the tree to worry about",
          text: "There is a tell that costs nothing to check and that almost nobody uses, and it works on the calendar rather than on the tree.\n\nWatch which of your trees drops its leaves first in the autumn and which is last to leaf out in the spring. A tree doing both is under stress. It is running short of the resources to hold a canopy and short of the reserves to push a new one, and it is telling you so months before anything visible is wrong with the trunk.\n\nThat is our own observation from this county rather than a published finding, and it is not a diagnosis on its own — a young tree in a bad spot and a sixty-year-old water oak with a hollow core can show the same pattern for completely different reasons. What it is good for is deciding which tree gets looked at. If one of yours is consistently last in and first out, and it is within falling distance of the house, that is the one to have measured.\n\nThe reason it matters for storms specifically: a stressed tree is also the tree least able to seal a wound, least able to defend itself against beetles, and most likely to be carrying decay you cannot see from the ground.",
        },
        {
          heading: "The first hour after a tree comes down: what to do, in order",
          text: "ASSUME EVERY LINE IS LIVE. A conductor on the ground can be energized and silent. It does not spark, it does not hum, and it can energize a fence, a puddle or a wet tree limb some distance away. Stay back, keep everyone back, and call the utility before you call us. This is the one item on this list that kills people.\n\nDO NOT GO UNDER IT TO LOOK. A tree that has come to rest against a house or another tree is holding load in ways that are not obvious, and the thing people do — walk underneath to see how bad it is — is exactly what a partially supported limb is waiting for.\n\nPHOTOGRAPH EVERYTHING BEFORE ANYTHING MOVES. From several angles, including wide shots that establish where the tree stood and what it hit. Your adjuster needs to see the tree in place. Once it is cut up and stacked, the evidence of what happened is gone and you are asking someone to take your word for it.\n\nTARP THE OPENING, OR HAVE SOMEONE DO IT. Water getting in is what turns a roof repair into a ceiling, insulation and drywall repair. On an emergency call this is the first thing we do, before the tree is fully removed.\n\nTHEN CALL. If the tree is on the structure, that is emergency work and it prices differently from a scheduled removal — see the emergency page below for what that actually costs and why almost none of it is the tree.",
        },
        {
          heading: "What storm damage actually looks like before it falls",
          text: "Most of what we are called out to after a storm did not break during that storm. It broke earlier, hung up in the canopy, and came down when the next wind arrived.\n\nThat is the case for looking up after every significant blow rather than only after the one that does visible damage. A limb that has snapped but is still caught in the crown is loaded, unstable, and completely invisible from a driveway — and it will come down eventually, on its own schedule rather than yours.\n\nThe two photographs below are both of that: limbs broken and split in the canopy, still up there, found on inspection. Neither property had any idea.",
        },
        {
          heading: "How to prevent the damage that is actually preventable",
          text: "The work that actually reduces storm damage, in the order it is worth doing:\n\n• Take weight off the limbs that sit over the roof\n• Remove the dead and declining trees before a storm finds them for you\n• Measure a trunk you are unsure about instead of guessing at it\n• Support a weak union rather than losing the whole tree\n• Settle what your policy covers before you need to know\n\nNone of this makes a tree storm-proof. What it does is remove the failures that were predictable, which in our experience is most of them.",
        },
      ]}
      sectionLinks={{
        1: { href: '/tree-trimming-jacksonville-nc', label: 'Tree trimming in Jacksonville, NC — the full price bands and why we never top a tree' },
        3: { href: '/emergency-tree-service-jacksonville-nc', label: 'Emergency tree service — what a tree on the house actually costs' },
        4: { href: '/resistograph-tree-testing-jacksonville-nc', label: 'Measuring a trunk instead of guessing at it' },
      }}
      caseStudy={
        <section id="beulaville-barn" className="py-16 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              A tree through a barn roof — Beulaville, October 2, 2020
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              A thunderstorm, not a hurricane. This is worth saying first, because the
              trees people prepare for are the named storms and a good proportion of the
              damage we actually clean up comes from an ordinary afternoon in October.
            </p>
            <figure className="my-8">
              <picture>
                <source type="image/avif" srcSet={BARN_DAMAGE.avifSrcSet} sizes={PHOTO_SIZES} />
                <img
                  src={BARN_DAMAGE.src}
                  srcSet={BARN_DAMAGE.srcSet}
                  sizes={PHOTO_SIZES}
                  alt="A tree trunk driven down through the metal roof of a barn in Beulaville, NC, after the October 2, 2020 thunderstorm."
                  width={BARN_DAMAGE.width}
                  height={BARN_DAMAGE.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border-2 border-gray-800"
                />
              </picture>
              <figcaption className="mt-3 text-gray-400 text-base">
                The tree came down through the barn roof and stayed there.
              </figcaption>
            </figure>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              A tree resting inside a structure is a different job from a tree on the
              ground, and the difference is that the building is now part of the rigging
              problem. Cut it in the wrong order and the barn takes the rest of the load.
            </p>
            <figure className="my-8">
              <picture>
                <source type="image/avif" srcSet={BARN_CRANE.avifSrcSet} sizes={PHOTO_SIZES} />
                <img
                  src={BARN_CRANE.src}
                  srcSet={BARN_CRANE.srcSet}
                  sizes={PHOTO_SIZES}
                  alt="Crane boom extended over the damaged barn in Beulaville, NC, with the crane truck set up on the grass alongside."
                  width={BARN_CRANE.width}
                  height={BARN_CRANE.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border-2 border-gray-800"
                />
              </picture>
              <figcaption className="mt-3 text-gray-400 text-base">
                Crane set up alongside. The open field is what made a crane possible here.
              </figcaption>
            </figure>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              So we craned it out of the barn rather than cutting it apart in place: take
              the weight on the crane first, then make the cut, then lift the piece clear
              of the building before anything is set down. The climber goes in to set the
              rigging and make the cuts, and the crane holds what he is cutting.
            </p>
            <figure className="my-8">
              <picture>
                <source type="image/avif" srcSet={BARN_CLIMBER.avifSrcSet} sizes={PHOTO_SIZES} />
                <img
                  src={BARN_CLIMBER.src}
                  srcSet={BARN_CLIMBER.srcSet}
                  sizes={PHOTO_SIZES}
                  alt="A climber roped into the fallen tree where it lies across the barn roof in Beulaville, NC."
                  width={BARN_CLIMBER.width}
                  height={BARN_CLIMBER.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border-2 border-gray-800"
                />
              </picture>
              <figcaption className="mt-3 text-gray-400 text-base">
                Setting the rigging in the fallen tree, roped in, working off the crane.
              </figcaption>
            </figure>
            <figure className="my-8">
              <picture>
                <source type="image/avif" srcSet={BARN_LIFT_OUT.avifSrcSet} sizes={PHOTO_SIZES} />
                <img
                  src={BARN_LIFT_OUT.src}
                  srcSet={BARN_LIFT_OUT.srcSet}
                  sizes={PHOTO_SIZES}
                  alt="The crane lifting a cut section of the tree up and clear of the barn roof on slings, Beulaville, NC."
                  width={BARN_LIFT_OUT.width}
                  height={BARN_LIFT_OUT.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border-2 border-gray-800"
                />
              </picture>
              <figcaption className="mt-3 text-gray-400 text-base">
                A section coming up and out, clear of the roof, before it is set down.
              </figcaption>
            </figure>
            <p className="text-gray-300 leading-relaxed text-lg">
              Once the barn was clear we removed the rest of the tree. The whole approach
              was decided by one thing: there was open ground to put a crane on. In a
              fenced backyard the same tree is a rope-and-rigging job and a much longer
              one — which is what{' '}
              <Link to="/tree-removal-near-house-jacksonville-nc" className={PROSE_LINK}>
                a tight-access removal
              </Link>{' '}
              costs extra for. Access decides the number.
            </p>
          </div>
        </section>
      }
      gallery={{
        heading: 'Broken in the canopy, still up there',
        images: [
          {
            ...BROKEN_LIMB_CANOPY,
            alt: 'A heavy limb snapped and left hanging in the canopy after a storm, Onslow County, NC.',
            caption: 'Snapped, and still caught. This is what you are looking up for after a blow.',
          },
          {
            ...SPLIT_LIMB_CANOPY,
            alt: 'A split pine limb still caught in the canopy, Onslow County, NC.',
            caption: 'A split limb hung up in a pine. It will come down on its own schedule.',
          },
        ],
      }}
      faqs={[
        {
          question: 'When should I have my trees trimmed for hurricane season?',
          answer: 'Late February through early April. The winter weather is past, the ground has usually drained enough to carry equipment, the season does not open until June 1, and our schedule is still open — call in late August and you are competing with everyone else who just looked at the forecast. A second advantage of that window is that a bare or barely-leafed canopy shows you the cracks, dead limbs and weak unions that full summer leaf cover hides.',
        },
        {
          question: 'How much does it cost to cut back branches over my roof?',
          answer: `Weight reduction over a roof typically runs ${PRICING.trimming.weightReductionOverRoof}. One to three low limbs, with no lift needed, is ${PRICING.trimming.fewLowLimbs}. We are shortening and lightening the specific limbs whose failure would put wood through the roof, not topping the tree or thinning it for appearance — a shorter, lighter limb has less leverage on its attachment and catches less wind.`,
          link: { href: '/tree-trimming-jacksonville-nc', label: 'Full trimming price bands →' },
        },
        {
          question: 'What should I do if a tree falls on my house?',
          answer: 'Get everyone clear and assume any downed line is live — a conductor on the ground can be energized, silent, and can energize a fence or a puddle some distance away. Call the utility before you call a tree company. Do not walk underneath the tree to assess it. Photograph everything from several angles before anything is moved, because your adjuster needs to see the tree in place. Then call us: tarping the opening is the first thing we do, since water getting in is what turns a roof repair into a ceiling and drywall repair.',
          link: { href: '/emergency-tree-service-jacksonville-nc', label: 'Emergency tree service — response and cost →' },
        },
        {
          question: 'Is storm damage tree removal covered by insurance?',
          answer: 'Often, if the tree damaged a structure. We bill your insurance directly and work with your adjuster, doing everything we can so your cost stays at your normal deductible. Ask for the estimate split between emergency mitigation and debris removal — the small tree-debris sublimit on a homeowner policy generally applies to the debris side and generally does not apply to the mitigation side. A tree that fell in the yard and hit nothing is frequently not covered at all.',
          link: { href: '/storm-cleanup-jacksonville-nc', label: 'What a policy typically covers after a storm →' },
        },
        {
          question: 'Can a storm-damaged tree be saved?',
          answer: 'Sometimes, and it depends on what broke. A tree that has lost some limbs can often be pruned back into a sound structure and keep going. A split trunk or a weak union that has started to come apart may be a candidate for cabling and bracing rather than removal. What generally cannot be saved is a tree whose root plate has lifted — if the soil has heaved on one side, the wood quality is beside the point. A pine that has browned out after a strike is finished; a hardwood that looks rough may not be, which is what measuring the trunk is for.',
          link: { href: '/tree-cabling-bracing-jacksonville-nc', label: 'When hardware can hold a weak union together →' },
        },
        {
          question: 'How can I tell which of my trees is stressed?',
          answer: 'Watch the calendar rather than the tree. The one that drops its leaves first in autumn and is last to leaf out in spring is under stress — short of the resources to hold a canopy and short of the reserves to push a new one. That is our own observation from working in this county rather than a published finding, and it is not a diagnosis by itself. It is a good way to decide which tree gets looked at properly.',
        },
      ]}
      guides={{
        heading: 'Before the next storm',
        intro: 'The pages that cover each piece of this in full:',
        links: [
          { href: '/tree-trimming-jacksonville-nc', label: 'Tree trimming and weight reduction', blurb: 'What we take off, what it costs, and why we will not top a tree.' },
          { href: '/emergency-tree-service-jacksonville-nc', label: 'Emergency tree service', blurb: 'A tree already on the structure — response, tarping, and what it prices at.' },
          { href: '/storm-cleanup-jacksonville-nc', label: 'Storm cleanup and insurance', blurb: 'The mitigation-versus-debris split, and why it decides what gets paid.' },
          { href: '/leaning-tree-dangerous-after-storm', label: 'Is a leaning tree dangerous after a storm?', blurb: 'Which leans are a problem, and which have been fine for twenty years.' },
          { href: '/resistograph-tree-testing-jacksonville-nc', label: 'Resistograph testing', blurb: 'Measuring how much sound wood is left before a storm finds out for you.' },
          /*
           * NO LINK TO /tree-removal-cost-north-carolina FROM THIS PAGE.
           * It is the treatment arm of the live A/B test and Ship D is barred
           * from adding or removing links to it — a link here would change the
           * arm's inbound profile mid-test even though its HTML is untouched,
           * which is precisely the confound Ship A created by accident. The
           * obvious editorial target for "what does this cost" is therefore
           * the near-house page instead. Revisit after the test ends (Dec 1).
           */
          { href: '/tree-removal-near-house-jacksonville-nc', label: 'Removing a tree close to the house', blurb: 'The tight-access premium, and what changes when position sets the price.' },
        ],
      }}
      finalCta={{
        heading: 'Book Your Prep Before the Season Opens',
        text: 'Late February through early April is the window. Free estimates across Jacksonville and Onslow County — and if your trees are fine, we will tell you that too.',
        buttonText: 'Call Now',
      }}
      relatedServices={[
        { label: "Emergency Tree Service", href: "/emergency-tree-service-jacksonville-nc" },
        { label: "Tree Removal", href: "/tree-removal-jacksonville-nc" },
        { label: "Tree Trimming", href: "/tree-trimming-jacksonville-nc" },
        { label: "Storm Cleanup", href: "/storm-cleanup-jacksonville-nc" }
      ]}
    />
  );
}
