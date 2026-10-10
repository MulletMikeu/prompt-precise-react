import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { PRICING, BUSINESS } from '../data/siteData';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

export default function TreeServiceSneadsFerry() {
  return (
    <ServicePage
      title="Tree Service in Sneads Ferry, NC"
      subtitle="Trusted Tree Removal, Trimming & Stump Grinding in Sneads Ferry"
      slug="tree-service-sneads-ferry-nc"
      faqPosition="early"
      credentialBlock
      description="Tree service in Sneads Ferry, NC: removal, trimming, stump grinding, and 24/7 coastal storm cleanup. Free estimates from Godhans."
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Sneads Ferry homeowners face unique coastal challenges — high winds, salt air, and storm-prone trees. Godhans Tree Company provides expert tree removal, trimming, stump grinding, and emergency storm cleanup throughout Sneads Ferry and the Topsail area, with fast response times and free estimates."
      sectionLinks={{
        0: { href: "/do-you-need-a-permit-to-remove-a-tree-nc", label: "CAMA shoreline rules, wetlands and tree permits in Onslow County" },
      }}
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. This page had ZERO
       * editorial outbound links before batch 1 — every link on it was a templated
       * band or a service card. Same copy as the `text` entry it replaces, plus the
       * local detail that makes each anchor relevant. Edit both or neither.
       */
      sectionBodies={{
        2: (
          <>
            {"There has been a ferry across the New River here since at least 1728, and the oldest part of the village is still laid out around the landing rather than a road grid — narrow lots running toward the water, very little working space beside a house, and soft ground on the last stretch to a waterfront trunk.\n\nCoastal storms, salt air and sandy soil are the three things that decide tree work out here, and we have been working it since 2013. Sandy ground carries weight right up until it does not — see "}
            <Link to="/storm-cleanup-jacksonville-nc" className={PROSE_LINK}>what insurance covers after a storm</Link>
            {", "}
            <Link to="/tree-removal-cost-north-carolina" className={PROSE_LINK}>what a removal costs here</Link>
            {" and "}
            <Link to="/spider-lift-tree-removal-jacksonville-nc" className={PROSE_LINK}>the lift that stays off a soft lawn</Link>
            {"."}
          </>
        ),
      }}
      sections={[
        {
          heading: "Local Tree Experts Serving Sneads Ferry, NC",
          text: "Sneads Ferry's coastal location means trees take a beating from hurricanes, nor'easters, and constant salt-laden winds off the New River Inlet. Our crews understand how coastal pines, live oaks, and palms behave under storm stress and how to remove or maintain them safely.\n\nFrom waterfront properties to inland subdivisions, we handle every job with the right equipment and proper insurance — protecting your home, deck, fence, and landscaping.\n\nOn waterfront lots it's worth knowing where the shoreline rules start and stop before any clearing — cutting a tree and clearing ground are treated very differently this close to the water."
        },
        {
          heading: "Complete Tree Services in Sneads Ferry",
          text: "Our services include:\n\n• Tree Removal — large pines, oaks, and storm-damaged trees\n• Tree Trimming & Pruning — health, safety, and view clearing\n• Stump Grinding — flush with grade, debris hauled off\n• 24/7 Emergency Tree Service — fallen trees on homes, vehicles, or roads"
        },
        {
          heading: "A crossing older than the county road system",
          text: `There has been a ferry across the New River here since at least 1728. It later took the name of Robert Snead, who ran the crossing from the north shore, and for two centuries it carried the coastal post road traffic between Virginia and Charleston — until a bridge finally replaced it in 1939.\n\nThat matters to tree work for an unglamorous reason: the oldest parts of Sneads Ferry are laid out around a landing, not around a road grid. Lots run narrow toward the water, the working space beside a house is frequently the width of a driveway, and the last stretch to a waterfront trunk is often soft ground that was marsh within living memory.\n\nThe village is also a working shrimping port rather than a resort, which shows up in the trees: there are more mature hardwoods around the old village than on the newer developments south of it, and more of them have been shaped by decades of salt wind off the inlet.`
        }
      ]}
      caseStudy={
        <section id="sneads-ferry-sources" className="py-12 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-4">Source</h2>
            <a
              href="https://en.wikipedia.org/wiki/Sneads_Ferry,_North_Carolina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
            >
              Sneads Ferry, North Carolina
            </a>
            <span className="block text-gray-400 text-base mt-1">
              The 1728 ferry crossing, Robert Snead operating it from the north shore, the
              coastal post road, the 1939 bridge, and the white-shrimp fishery. What we say
              about lot shapes, working space and soft ground is our own experience of
              working here.
            </span>
          </div>
        </section>
      }
      faqs={[
        {
          question: "Can you get equipment to a waterfront lot in Sneads Ferry?",
          answer: "Usually, and it is the question worth settling at the estimate rather than on the morning. The older lots here run narrow toward the water with very little working space beside the house, and the last stretch to the trunk is frequently soft. Our spider lift runs on rubber tracks and passes a standard four-foot gate; where the ground will not take it we lay matting, and where neither works we climb.",
        },
        {
          question: "Can you handle hurricane and storm-damaged trees?",
          answer: `Yes — storm response is 24/7 and Sneads Ferry is well inside the area we cover. Call ${BUSINESS.phone} any time for a tree on a house, a vehicle or a road. Treat any downed line as live until the utility clears it.`,
        },
        {
          question: "How much does tree removal cost in Sneads Ferry?",
          answer: `${PRICING.removal.summary} On this side of the county the thing that most often moves a job up a band is access rather than the tree — a narrow waterfront lot with soft ground takes longer than the same tree in an open yard.`,
        },
        {
          question: "Do shoreline rules affect cutting a tree on my waterfront lot?",
          answer: "They can, and the distinction is the one people get wrong: taking down a single tree is treated very differently from clearing ground. CAMA's reach is tied to development, which includes clearing as an adjunct of construction. One dead pine in a yard is generally not that; clearing to build near the water is. Worth settling before the job is scheduled rather than after.",
        },
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Schedule Tree Service in Sneads Ferry, NC",
        text: "Need professional tree service in Sneads Ferry? Contact Godhans today for a free estimate and fast, reliable coastal tree care.",
        buttonText: "Call Now"
      }}
    />
  );
}
