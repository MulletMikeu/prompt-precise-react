import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { BUSINESS } from '../data/siteData';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

export default function TreeServiceSwansboro() {
  return (
    <ServicePage
      title="Tree Service in Swansboro, NC"
      subtitle="Trusted Tree Removal, Trimming & Stump Grinding in Swansboro"
      slug="tree-service-swansboro-nc"
      faqPosition="early"
      credentialBlock
      description="Tree service in Swansboro, NC: expert removal, trimming, stump grinding, and 24/7 storm cleanup. Free estimates from Godhans."
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Swansboro's mature oaks, pines, and waterfront live oaks need expert care to stay safe and healthy. Godhans Tree Company provides professional tree removal, trimming, stump grinding, and 24/7 storm response throughout Swansboro, Cedar Point, and the Crystal Coast area."
      sectionLinks={{
        0: { href: "/do-you-need-a-permit-to-remove-a-tree-nc", label: "Permits, HOA approvals and shoreline rules in Onslow County" },
      }}
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. This page had ZERO
       * editorial outbound links before batch 1 — every link on it was a templated
       * band or a service card. Same copy as the `text` entry it replaces, plus the
       * local detail that makes each anchor relevant. Edit both or neither.
       */
      /* Rewritten in Batch 3 to match the new section 2. Same three anchors,
         same destinations — none of them is an A/B arm, but the count is kept
         deliberate anyway so the link graph moves only where intended. */
      sectionBodies={{
        2: (
          <>
            {"• Large oak and pine removal on tight historic-district and waterfront lots\n• Structural pruning and weight reduction over roofs\n• Stump grinding, grindings hauled\n• 24/7 storm response\n\nSwansboro means live oaks, a historic district and waterfront lots — mature trees people want kept, close to houses that leave no room to drop anything. So "}
            <Link to="/tree-cabling-bracing-jacksonville-nc" className={PROSE_LINK}>cabling and bracing a split fork</Link>
            {" is frequently the better answer than removal here, and "}
            <Link to="/resistograph-tree-testing-jacksonville-nc" className={PROSE_LINK}>measuring a trunk before anyone decides</Link>
            {" is how that call gets made. If it does have to come out, "}
            <Link to="/tree-removal-near-house-jacksonville-nc" className={PROSE_LINK}>near-house removal pricing</Link>
            {" is the band most Swansboro jobs land in.\n\nOne local note worth more than any of the above: HOA approval for tree work comes up more often around Swansboro than anywhere else we work. Check your covenants before you schedule, not after."}
          </>
        ),
      }}
      sections={[
        {
          heading: "The soil series named after this county has its type location outside Swansboro",
          text: `That is not a figure of speech. The USDA maintains an official soil series called ONSLOW, and the Official Series Description gives its typical pedon — the reference profile the whole series is defined against — as "Onslow County, North Carolina; 0.6 mile southwest of Swansboro."\n\nThe description classifies it as a fine-loamy Spodic Paleudult that is "moderately well drained and somewhat poorly drained," sitting "on slightly convex interstream divides in the lower Coastal Plain" on slopes of 0 to 3 percent.\n\nWHY A TREE CREW CARES. "Moderately well drained and somewhat poorly drained" is the polite way of saying it holds water. Loamy sand over a denser subsoil drains fast at the top and slowly underneath, so after a wet week the surface looks fine and the ground below will not carry a loaded machine. That is the single most common reason we mat a route here, or leave the truck on the street and climb instead.\n\nIt is also why root plates around Swansboro come up as whole discs in a storm rather than snapping off. A tree that cannot root deeply into a dense subsoil spreads wide and shallow instead, and wide and shallow is what lifts.`
        },
        {
          heading: "Bertha put 8 to 10 feet of surge into Swansboro",
          text: `On July 12, 1996, Hurricane Bertha came ashore with sustained winds the National Weather Service puts at 105 mph before landfall, over Figure Eight Island. Swansboro got the worst of the water: the NWS Wilmington summary records that "the largest storm surge of 8 to 10 feet was observed in Swansboro and Emerald Isle along the Onslow County, NC coast just east of where the eye came ashore."\n\nThat is the kind of event the live oaks downtown have already survived, which is worth keeping in mind before anyone condemns one. A mature live oak that is still standing here has been through more than most trees on this coast.\n\nWhat it does mean is that a lot of the big trees in town are carrying old damage — storm wounds that closed over, limbs lost decades ago, and decay that started at those wounds and has been working inward ever since. From the ground an old live oak with a hollow core looks exactly like an old live oak without one.`
        },
        {
          heading: "What we actually do in Swansboro",
          text: "• Large oak and pine removal on tight historic-district and waterfront lots\n• Structural pruning and weight reduction over roofs\n• Cabling and bracing, which around here is frequently the better answer than removal\n• Stump grinding, grindings hauled\n• 24/7 storm response\n\nOne local note worth more than any of the above: HOA approval for tree work comes up more often around Swansboro than anywhere else we work. Check your covenants before you schedule, not after."
        }
      ]}
      caseStudy={
        <section id="swansboro-sources" className="py-12 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-4">Sources</h2>
            <ul className="space-y-5">
              <li>
                <a
                  href="https://soilseries.sc.egov.usda.gov/OSD_Docs/O/ONSLOW.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
                >
                  USDA NRCS — Official Series Description, ONSLOW series
                </a>
                <span className="block text-gray-400 text-base mt-1">
                  The type location 0.6 mile southwest of Swansboro, the taxonomic class,
                  the drainage class and the geographic setting quoted above. What we say
                  about matting routes and root plates is our own experience of working
                  that ground, not the USDA&rsquo;s.
                </span>
              </li>
              <li>
                <a
                  href="https://www.weather.gov/ilm/Bertha1996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
                >
                  NWS Wilmington — Hurricane Bertha, July 1996
                </a>
                <span className="block text-gray-400 text-base mt-1">
                  The 8-to-10-foot surge at Swansboro and Emerald Isle, the 105 mph
                  sustained winds before landfall, and the landfall point at Figure Eight
                  Island.
                </span>
              </li>
            </ul>
          </div>
        </section>
      }
      faqs={[
        {
          question: "Why does my Swansboro yard get soft when it has not rained in days?",
          answer: "Because of what is underneath it. The USDA's Onslow soil series — whose reference profile is taken 0.6 mile southwest of Swansboro — is classified as moderately well to somewhat poorly drained: loamy sand over a denser subsoil. The surface sheds water quickly and the layer below it does not, so the top looks dry while the ground a foot down is still holding water. It is the usual reason we lay matting here, or leave the machine on the street and climb the tree instead.",
        },
        {
          question: "Can you remove a large oak near my house in Swansboro?",
          answer: "Yes, and on the historic-district and waterfront lots that is most of what we do. Every piece gets rigged and lowered rather than dropped, the spider lift reaches the canopy without a truck on the lawn, and where there is genuinely no room we climb and rope it out section by section.",
        },
        {
          question: "My live oak looks old. Should it come out?",
          answer: "Probably not on age alone, and we would want to measure before anyone decides. The big live oaks in town have survived storms including Bertha in 1996, and many of them carry old closed-over wounds with decay working inward from them — which a resistograph can quantify and an inspection from the driveway cannot. Quite often the answer is cabling a weak union rather than losing the tree.",
        },
        {
          question: "How fast can you respond to storm damage in Swansboro?",
          answer: `We run 24/7 emergency response and Swansboro is close to the shop. Most storm calls here are responded to within hours. Call ${BUSINESS.phone} any time — and treat any downed line as live until the utility says otherwise.`,
        },
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Schedule Tree Service in Swansboro, NC",
        text: "Need professional tree service in Swansboro? Contact Godhans today for a free estimate and reliable, careful tree care.",
        buttonText: "Call Now"
      }}
    />
  );
}
