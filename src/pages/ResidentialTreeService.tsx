import ServicePage from './ServicePage';
import { PRICING } from '../data/siteData';
import { PROSE } from '../data/homepageCopy';

export default function ResidentialTreeService() {
  return (
    <ServicePage
      title="Residential Tree Service in Jacksonville, NC"
      metaTitle="Residential Tree Service in Jacksonville, NC | Godhans Tree Company"
      subtitle="Tree Work Done Around Your House, Your Lawn, and Your Septic Field"
      slug="residential-tree-service-jacksonville-nc"
      credentialBlock
      description={`Residential tree service in Jacksonville, NC. We protect the house, lawn, fence, and septic field, haul every stick away, and quote from measurements — removals from an ${PRICING.removal.minimum} minimum.`}
      ctaText="Call for a Free Estimate"
      quickAnswer="Residential tree work is judged on two things: whether the tree came down safely, and what your yard looks like when the trucks leave. Godhans Tree Company handles removal, trimming, and stump grinding for homeowners across Jacksonville and Onslow County — with the lawn, fence, driveway, and septic field treated as part of the job rather than acceptable collateral."
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
          heading: "What Happens During a Free Estimate?",
          text: `We come to the property, look at the actual tree, and give you a written number before anything starts.\n\nHere is the sequence. We walk the tree and the ground under it. We check access — gate widths, overhead lines, what can physically reach the trunk — because access drives price more than height does. We identify what's underneath the drop zone. If there's a stump in scope, we measure it at the widest point of the root flare rather than the trunk, because the flare is what the grinder actually has to cut through. Then you get a written quote.\n\nThat quote is the price you pay. We are not looking for a reason to revise it upward once the crew is on site. If we find something genuinely different from what was visible during the estimate — a hidden cavity, a second tree tangled in the first — we stop and talk to you before doing anything that changes the number.\n\n${PROSE.pricing}`
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
      ]}
      finalCta={{
        heading: "Get a Free Estimate on Your Tree",
        text: "We'll walk the property, measure what needs measuring, and hand you a written number — no charge and no pressure to book on the spot.",
        buttonText: "Call Now"
      }}
    />
  );
}
