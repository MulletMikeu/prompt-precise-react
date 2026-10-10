import ServicePage from './ServicePage';
import { EQUIPMENT } from '../data/siteData';
import { LIFT_TO_PINE, LIFT_ON_LAWN, LAWN_UNRUTTED } from '@/data/batch2Photos';

const LIFT = EQUIPMENT.spiderLift;
const TRUCK = EQUIPMENT.bucketTruck;

/**
 * The spider lift page, rebuilt as an EQUIPMENT SPEC page.
 *
 * It used to be a short benefits page that overlapped 33% with
 * /tree-removal-near-house-jacksonville-nc and /tree-removal-tight-spaces-…
 * (now consolidated into near-house) and understated the machine's reach as
 * "50+ feet" — on the one page whose whole job is the machine. Its three
 * remaining jobs are now: state the numbers, say what they mean for a job, and
 * hand off. The access narrative and the tight-access premium live on
 * near-house; this page does not restate them.
 */
export default function SpiderLiftRemoval() {
  return (
    <ServicePage
      title="Spider Lift Tree Removal in Jacksonville, NC"
      metaTitle="Spider Lift Tree Removal | Jacksonville, NC"
      subtitle={`${LIFT.platformHeight} Platform, ${LIFT.horizontalOutreach} Outreach, Through a ${LIFT.gate}`}
      slug="spider-lift-tree-removal-jacksonville-nc"
      faqPosition="early"
      authorUpdated="2026-10-10"
      description={`Spider lift tree removal in Jacksonville, NC. ${LIFT.platformHeight} platform height, ${LIFT.workingHeight} working reach, ${LIFT.horizontalOutreach} outreach, fits a ${LIFT.gate}.`}
      ctaText="Call Now for a Free Estimate"
      quickAnswer={`Our spider lift has a ${LIFT.platformHeight} platform height, about ${LIFT.workingHeight} of working reach and ${LIFT.horizontalOutreach} of horizontal outreach. It collapses to ${LIFT.collapsedWidth} wide — through a ${LIFT.gate} — runs on rubber tracks, and spreads its load across four outriggers. That combination is why it reaches backyard trees a bucket truck or crane cannot get to, without putting a heavy machine on your lawn.`}
      sections={[
        {
          heading: "How high and how far does the spider lift reach?",
          text: `PLATFORM HEIGHT — ${LIFT.platformHeight}. How high the basket itself goes.\n\nWORKING HEIGHT — about ${LIFT.workingHeight}. Platform height plus the operator's working reach from it. This is the number that decides whether the top of a tree can be reached rather than climbed, and it is why a 90-foot pine is a lift job for us rather than a climb.\n\nHORIZONTAL OUTREACH — ${LIFT.horizontalOutreach}. How far out from the chassis the basket will go. On a backyard job this matters more than height: it is the difference between setting up once and repositioning around a tree four times, and it is what lets us work a canopy that is over a roof from a position that is not.\n\nFor comparison, most bucket trucks reach ${TRUCK.typicalReach} — and they have to be able to park within reach of the tree to do it.`
        },
        {
          heading: "Why a spider lift instead of a bucket truck or a crane?",
          text: `A bucket truck weighs ${TRUCK.weight}. On Jacksonville's sandy soil after a wet week, that is how you get ruts across a yard, a cracked driveway apron, and — worst case — a drain line or septic lid crushed under a tire. It also has to get there: a truck that cannot fit down a side yard cannot work the tree at the end of it.\n\nThe spider lift answers both. It weighs a fraction of that, collapses to ${LIFT.collapsedWidth} so it passes a ${LIFT.gate} instead of driving around the house, runs on rubber tracks that spread the load rather than concentrating it on four contact patches, and sets down on four outriggers instead of two axles.\n\nAgainst a crane the tradeoff is different, and it is not speed. Crane setup — cribbing, mats, checks, rigging — runs about an hour and a half before anything gets cut; the spider lift is off the trailer and cutting in about thirty minutes. What a crane buys is the ability to pick a piece out and set it down somewhere else entirely. What the lift buys is getting to the tree at all.`
        },
        {
          heading: "Which jobs is it the right machine for?",
          text: "• Backyards with no truck or trailer access\n• Trees over in-ground pools, patios and decks\n• Tight setbacks between houses\n• Work around power drops (insulated boom available)\n• Over septic tanks, drain fields and irrigation\n• Soft, saturated or recently landscaped lawns\n• High canopy work and roofline clearance a ladder cannot reach safely\n\nWhere it is not the answer: a tree in an open field with room to drop it, where a straight fell is faster and cheaper, and a trunk too decayed to rig off at all — which is a measurement question before it is an equipment question."
        },
        {
          heading: "What it means for your yard and your bill",
          text: "Rubber tracks distribute weight, plywood mats go down over soft ground and anything buried, and every limb is rigged and lowered rather than dropped. The practical result is that the lawn repair is not a line on your invoice.\n\nIt also removes the two things that most often push a backyard removal into a higher band: no crane position needed, and no road closure to stage one. We will show you the access plan at the estimate, before anything is cut."
        }
      ]}
      sectionLinks={{
        0: { href: "/tree-removal-jacksonville-nc", label: "How long a removal takes, and why a crane is not faster" },
        2: { href: "/resistograph-tree-testing-jacksonville-nc", label: "Measuring a trunk before deciding it can be rigged" },
        3: { href: "/tree-removal-near-house-jacksonville-nc", label: "What a tight-access removal near the house costs" },
      }}
      faqs={[
        {
          question: "How tall a tree can you remove with a spider lift?",
          answer: `Platform height is ${LIFT.platformHeight} and working reach is about ${LIFT.workingHeight}, which covers the overwhelming majority of residential trees in Jacksonville, including a mature loblolly pine. Taller than that, or where the top is out past the ${LIFT.horizontalOutreach} of outreach, we combine the lift with climbing and rigging.`
        },
        {
          question: "How far out can it reach from where it sets up?",
          answer: `${LIFT.horizontalOutreach} of horizontal outreach. On a backyard job that usually matters more than height, because it decides how many times the machine has to be repositioned around the tree — and whether we can work a canopy that overhangs the roof from a position that does not.`
        },
        {
          question: "Will the spider lift damage my lawn?",
          answer: `Rubber tracks distribute weight far better than truck tires, and on wet or soft ground we lay plywood mats. The footprint is closer to a riding mower than to a ${TRUCK.weight} service truck. Point out your septic field, drain lines and irrigation before we start and we will plan the route around them.`
        },
        {
          question: "Can it fit through my gate?",
          answer: `It collapses to ${LIFT.collapsedWidth} wide, which clears a ${LIFT.gate}. We confirm the actual gate width during the free on-site estimate rather than finding out on the morning of the job.`
        }
      ]}
      /*
       * Batch 2 item 9. The specs above are unchanged — 90 ft platform,
       * 95–96 ft working reach, 50 ft outreach — these photographs are what a
       * spec page was missing rather than a change to what it claims.
       *
       * The third image contains no machine at all, deliberately. It is a
       * finished lawn, and it is the evidence for the one claim on this page a
       * reader is most entitled to be sceptical about: that the machine does
       * not wreck the grass. A photo of the lift cannot show that; a photo of
       * the lawn can.
       */
      gallery={{
        heading: `The ${LIFT.platformHeight} lift on real jobs`,
        images: [
          {
            ...LIFT_TO_PINE,
            alt: `Red tracked spider lift with its boom extended up into a tall pine beside a home in Onslow County, NC.`,
            caption: `Boom up into a pine from the lawn — no truck, no crane position needed.`,
          },
          {
            ...LIFT_ON_LAWN,
            alt: 'The spider lift parked on a lawn between two mature oaks, its rubber tracks spreading the load across the grass.',
            caption: `Collapsed to ${LIFT.collapsedWidth}, it crosses a lawn on rubber tracks rather than tires.`,
          },
          {
            ...LAWN_UNRUTTED,
            alt: 'A lawn in an Onslow County, NC neighborhood with no ruts, tracks or machine damage across the grass.',
            caption: 'And this is the part that matters afterwards: no ruts, no tire scars, nothing to repair.',
          },
        ],
      }}
      guides={{
        heading: "Related",
        intro: "What the machine is usually being used for:",
        links: [
          { href: "/tree-removal-near-house-jacksonville-nc", label: "Tree removal near a house", blurb: "Prices, the tight-access premium, and how a near-structure removal is rigged." },
          { href: "/tree-removal-jacksonville-nc", label: "Tree removal in Jacksonville, NC", blurb: "What removals cost, how long they take, and the species we take out most." },
          { href: "/emergency-tree-service-jacksonville-nc", label: "Emergency tree service", blurb: "Where the lift bills at $145/hr on an itemised storm invoice." },
        ],
      }}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Tree a Truck Can't Reach?",
        text: "Tell us where it is and what is around it. We will tell you whether it is a lift job, a climb, or both — and give you a written number before anything is cut.",
        buttonText: "Call for Free Estimate"
      }}
    />
  );
}
