import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { PRICING } from '../data/siteData';
import { PROSE } from '../data/homepageCopy';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

export default function ResidentialTreeService() {
  return (
    <ServicePage
      title="Residential Tree Service in Jacksonville, NC"
      metaTitle="Residential Tree Service in Jacksonville, NC | Godhans"
      subtitle="Tree Work Done Around Your House, Your Lawn, and Your Septic Field"
      slug="residential-tree-service-jacksonville-nc"
      faqPosition="early"
      credentialBlock
      description={`Residential tree service in Jacksonville, NC. We protect the house, lawn, fence, and septic field, haul every stick away, quote from measurements — from ${PRICING.removal.minimum}.`}
      ctaText="Call for a Free Estimate"
      quickAnswer="Residential tree work is judged on two things: whether the tree came down safely, and what your yard looks like when the trucks leave. Godhans Tree Company handles removal, trimming, and stump grinding for homeowners across Jacksonville and Onslow County — with the lawn, fence, driveway, and septic field treated as part of the job rather than acceptable collateral."
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. Same copy as the
       * `text` entry it replaces, with anchors in sentences that already named
       * the destination. Feeds /tree-cabling-bracing-*, /debris-hauling-* and
       * /reviews.
       */
      sectionBodies={{
        6: (
          <>
            {"A handful of signs are worth a phone call rather than a wait-and-see:\n\n• A lean that appeared or worsened after a storm\n• Cracked or heaved soil around the base of a trunk\n• Mushroom clusters at the base after rain\n• Large dead limbs hanging in the canopy\n• A dead top on a pine near the house\n• Limbs resting on the roof or against siding\n\nNone of these automatically means removal. Several of them mean a tree that can be pruned and kept, a split fork that "}
            <Link to="/tree-cabling-bracing-jacksonville-nc" className={PROSE_LINK}>cabling and bracing</Link>
            {" will hold, or a trunk worth "}
            <Link to="/resistograph-tree-testing-jacksonville-nc" className={PROSE_LINK}>measuring before anyone decides</Link>
            {". But all of them are worth having someone look at, and we don't charge for the look. If limbs are already down and it is the pile you need gone, "}
            <Link to="/debris-hauling-jacksonville-nc" className={PROSE_LINK}>debris hauling</Link>
            {" is a job of its own — and the "}
            <Link to="/reviews" className={PROSE_LINK}>reviews</Link>
            {" will tell you what our cleanup actually looks like."}
          </>
        ),
      }}
      sections={[
        {
          heading: "How Do You Protect the House During a Removal?",
          text: "By taking the tree down in pieces small enough that nothing large ever falls freely near the structure.\n\nOn an open lot, a tree can be felled in one cut. Near a house, it cannot. Instead we climb or lift into the canopy and remove it in sections, each one roped and lowered under control — negative rigging — so the weight is always on a line rather than in the air. It is slower than dropping a tree, and it is the entire reason a removal beside your roof costs more than the same tree in a field.\n\nBefore any of that, we look at what's underneath: the roof pitch, the gutters, the HVAC unit, the deck, the fence line, and where a limb would go if a rope slipped. The rigging plan is built around those, not around what's fastest."
        },
        {
          heading: "What About the Lawn, Driveway, and Septic Field?",
          text: "The lawn and the septic field are the two things homeowners are most surprised to lose, and both are avoidable with the right equipment choice.\n\nA bucket truck weighs 25,000–40,000 lbs. On Jacksonville's sandy soil after a wet week, that is how you get ruts across a yard, a cracked driveway apron, and — worst case — a drain line or septic lid crushed under a tire. Our spider lift weighs a fraction of that, runs on rubber tracks that spread the load, and collapses to about 36 inches so it fits through a standard gate instead of driving across the whole property to get to the back.\n\nOn soft or recently landscaped ground we also lay mats. Tell us where your septic field, drain lines, irrigation heads, and any invisible fence run before we start — most homeowners know roughly where they are, and five minutes of that conversation prevents the expensive kind of surprise."
        },
        {
          heading: "What Does Your Cleanup Actually Include?",
          text: "Every stick, every limb, and every chip we generated leaves with us unless you ask us to leave it.\n\nCleanup on our jobs means the brush is chipped and hauled, the wood is cut down and removed or stacked where you want it, the drop zone is raked, and the driveway and street are blown clear. If you want the chips kept as mulch or the rounds left for firewood, say so and we'll stage them where you'd like them — that's a choice, not a default we make for you.\n\nThe standard we hold is simple: when the trucks pull out, the only evidence we were there should be the tree that's gone."
        },
        {
          heading: "What an Estimate Should Include",
          text: "We come to the property, look at the actual tree, and hand you a written number before anything starts. Free, and there is no version of this where you get talked into something on the doorstep.\n\nMore useful than describing ours is telling you what ANY estimate should contain — including one from someone else. If a quote is missing these, it is not finished, and the gaps are where the arguments come from:\n\n✓ SCOPE — exactly which trees, and what is happening to each one. “the oak out back” is not scope if there are two oaks out back.\n\n✓ DEBRIS — who hauls the wood, and is it in this price. This is the single most common gap. Cutting a tree down and removing a tree are two different jobs, and a cheap number often means only the first one was quoted.\n\n✓ STUMP — in or out, and if in, ground to what depth. A stump left at ankle height is a mower problem for the next ten years.\n\n✓ ACCESS PLAN — how the equipment physically reaches the trunk, and where the truck and trailer will sit. A company that has not worked this out has not finished the quote.\n\n✓ GROUND PROTECTION — on the sandy side of the county, whether mats are needed and what they add. Our shop on Gum Branch Road is roughly where the ground changes: coastal side is sandy loam, where a yard can look solid and give way under a loaded machine and grass tears when you turn logs on it. Inland toward Richlands it is regular dirt to hard-pack clay and usually no grass is lost at all. Either way you should hear which one you have before the work, not after.\n\n✓ CERTIFICATE OF INSURANCE — general liability and workers' comp, and ideally sent to you by their agent rather than forwarded by them.\n\n✓ A WRITTEN TOTAL — one number, not a range, with what would change it stated plainly.\n\nAnd the part that matters most, which no checklist can verify for you: if the price moves, we tell you before we touch the tree. Not on the invoice. If we open up the canopy and find the job is bigger than it looked from the ground, you get a phone call and a decision, not a surprise."
        },
        {
          heading: "Do You Offer Financing?",
          text: `${PROSE.financing}\n\nTree work is rarely a purchase anyone planned for. A dead pine over a bedroom is an expense that arrives on its own schedule, and spreading it out is often the difference between handling it now and putting it off until it becomes an emergency call at 2am. Ask about it during the estimate.`
        },
        {
          heading: "Which Residential Jobs Do You Handle?",
          text: "The three that make up almost all homeowner tree work, plus the storm calls that interrupt them:\n\n• Tree removal — dead, dying, leaning, storm-damaged, or simply too close to the house\n• Tree trimming — deadwood removal, canopy raising, clearing limbs off a roofline, and the insurance-required pruning carriers ask for\n• Stump grinding — ground well below grade so the spot takes sod, concrete, or a replant\n• Emergency and storm work — 24/7, with hazards that threaten a structure prioritized\n\nMost residential properties in Jacksonville need some combination of these every few years, not constantly. A crew that tells you a healthy tree needs work every season is selling you something."
        },
        {
          /**
           * Index 6. Carries in-prose links via `sectionBodies` below — the
           * best signs list on the site, and it previously named the resistograph
           * and cabling without linking either.
           */
          heading: "What Should a Homeowner Watch For Between Visits?",
          text: "A handful of signs are worth a phone call rather than a wait-and-see:\n\n• A lean that appeared or worsened after a storm\n• Cracked or heaved soil around the base of a trunk\n• Mushroom clusters at the base after rain\n• Large dead limbs hanging in the canopy\n• A dead top on a pine near the house\n• Limbs resting on the roof or against siding\n\nNone of these automatically means removal. Several of them mean a tree that can be pruned and kept. But all of them are worth having someone look at, and we don't charge for the look."
        }
      ]}
      guides={{
        heading: "Guides & Pricing",
        intro: "What homeowners usually want to read before booking:",
        links: [
          {
            href: "/tree-removal-cost-north-carolina",
            label: "How much tree removal costs in North Carolina",
            blurb: "Full price ranges and what actually drives the number on your property."
          },
          {
            href: "/tree-removal-near-house-jacksonville-nc",
            label: "Removing a tree close to your house",
            blurb: "How a removal beside a roofline is planned and rigged differently."
          },
          {
            href: "/do-you-need-a-permit-to-remove-a-tree-nc",
            label: "Do you need a permit to remove a tree in NC?",
            blurb: "What's required on private residential property, and the exceptions."
          }
        ]
      }}
      faqs={[
        {
          question: "What should a tree removal estimate include?",
          answer: "Scope (exactly which trees and what happens to each), debris (who hauls the wood and whether it is in the price — the most common gap), the stump (in or out, and to what depth), an access plan (how equipment reaches the trunk and where the truck sits), ground protection if the lot is sandy, a certificate of insurance covering both general liability and workers' comp, and a written total rather than a range. If a quote is missing those, it is not finished. And if the price moves once work starts, you should hear about it before anyone touches the tree.",
          link: { href: "/tree-service-jacksonville-nc", label: "Questions to ask before hiring anyone" }
        },
        {
          question: `Why is there an ${PRICING.removal.minimum} minimum on tree removal?`,
          answer: PRICING.stories.mobilization
        },
        {
          question: "How much does residential tree removal cost?",
          answer: `${PRICING.removal.summary} The estimate is free and the written quote is the price you pay.`
        },
        {
          question: "Will your equipment damage my lawn or septic field?",
          answer: "That's what the equipment choice is for. Our spider lift runs on rubber tracks and fits through a standard gate, so we avoid driving a 25,000+ lb truck across your yard. On soft ground we lay mats. Point out your septic field, drain lines, irrigation, and invisible fence before we start and we'll plan around them."
        },
        {
          question: "Do you haul everything away?",
          answer: "Yes. Brush is chipped and hauled, wood is removed, the drop zone is raked, and the driveway and street are blown clear. If you'd rather keep the chips as mulch or the rounds for firewood, tell us and we'll stack them where you want them."
        },
        {
          question: "Do you offer financing for tree work?",
          answer: PROSE.financing
        },
        {
          question: "Do I need to be home during the work?",
          answer: "Not usually, as long as we've walked the property with you during the estimate and know where everything is. For jobs directly over the house or involving gate access, most homeowners prefer to be there for the start — either way we'll tell you when the crew is arriving."
        }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Debris Hauling', href: '/debris-hauling-jacksonville-nc' },
        { label: 'Commercial Tree Service', href: '/commercial-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Get a Free Estimate on Your Tree",
        text: "We'll walk the property, measure what needs measuring, and hand you a written number — no charge and no pressure to book on the spot.",
        buttonText: "Call Now"
      }}
    />
  );
}
