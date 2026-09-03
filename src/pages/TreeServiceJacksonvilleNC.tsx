import ServicePage from './ServicePage';
import { PRICING } from '../data/siteData';

/**
 * Retargeted (Sept 2026). This page and the homepage both targeted "Tree Service
 * in Jacksonville, NC"; the homepage held ~5 while this one sat stuck at ~28.
 * The URL and every inbound link are unchanged — only the intent moved, from a
 * second services overview to the local-crew / neighborhoods / military-family
 * page. The homepage is now linked from the top as the services overview, so the
 * two pages point at the query instead of splitting it.
 */
export default function TreeServiceJacksonvilleNC() {
  return (
    <ServicePage
      title="Tree Company in Jacksonville, NC"
      metaTitle="Tree Company in Jacksonville, NC — Local Crew, Neighborhoods & FAQs | Godhans"
      subtitle="The Local Crew, the Neighborhoods We Work, and the Questions We Get Most"
      slug="tree-service-jacksonville-nc"
      credentialBlock
      description="Meet the Jacksonville, NC tree company behind the work: the local crew, the neighborhoods we cover, Camp Lejeune PCS scheduling, and answers on cost and permits."
      ctaText="Call Now"
      quickAnswer="Godhans Tree Company is a veteran-owned, family-operated tree company based in Jacksonville, NC. This page covers who shows up, the neighborhoods and base-adjacent properties we work in, the species and storm patterns specific to Onslow County, and straight answers on what jobs cost."
      sections={[
        {
          heading: "The Crew Behind Godhans Tree Company",
          text: "Godhans Tree Company is run out of Jacksonville, NC by the people who do the work. When you call, you're not routing through a national dispatcher — you're talking to the crew that will be standing in your yard, and to Michael, who reads every tree before we touch it.\n\nThat matters more here than it does inland. Onslow County soil, the species that grow in it, and the storms that come off the coast all behave in specific ways, and a crew that has worked the same ground since 2013 prices and plans a job differently than one seeing it for the first time.\n\nFor the full menu of what we do — removal, trimming, stump grinding, storm work, and 24/7 emergency response — start on our main services overview."
        },
        {
          heading: "Neighborhoods We Work In Around Jacksonville",
          text: "Jacksonville isn't one kind of property, and the neighborhoods price differently because the access does:\n\n• Northwoods and Brynn Marr — mature hardwoods planted close to mid-century houses, usually a backyard job with a fence line to work around\n• Country Club and Gum Branch Road — bigger lots, taller pines, room for the boom truck to set up\n• Hunters Creek and Carolina Forest — newer construction with narrow side setbacks; this is where the spider lift earns its keep\n• Downtown and the Riverwalk blocks — tight streets, overhead lines, and permits to stage equipment\n• Piney Green and Sand Ridge — sandy soil that stays saturated after rain and won't hold a heavy truck\n\nIf you tell us the street, we can usually tell you before we arrive whether the job is a truck job, a lift job, or a climb-and-rig job. That's what sets the price."
        },
        {
          heading: "Camp Lejeune and Military Families",
          text: "A large share of our customers are Marines, sailors, and their families, and the scheduling is genuinely different from a civilian job.\n\nPCS timelines don't flex. When you have a report date and a property to hand back to a landlord or a buyer, the tree work has to land inside a window that's often two or three weeks wide. We schedule against those dates specifically — tell us the date you have to be out and we'll work backward from it, including the stump, so the yard is clear for the walkthrough.\n\nBase-adjacent work has its own constraints. Properties along the fence line and in the housing areas off Piney Green and Brewster Boulevard mean gate access, escort requirements, and equipment that has to fit through a standard gate rather than roll across a lawn. We plan for that up front instead of discovering it on the morning of the job.\n\nWe offer military discounts for Camp Lejeune families, and we document everything for landlords and property managers who want proof the work was done to standard."
        },
        {
          heading: "The Trees That Grow Here — and How They Fail",
          text: "Local species drive most of what we see:\n\n• Loblolly and longleaf pine — the tall, top-heavy majority of Jacksonville's canopy. They snap rather than uproot, and a dead-topped pine near a roof is the single most common emergency call we get.\n• Water oak — fast-growing, short-lived, and notorious for rotting from the inside while looking healthy. Many of the water oaks planted in 1960s subdivisions are now at the end of their span.\n• Live oak and southern magnolia — heavy, wide-spreading, and they push roots far past the trunk line, which is what complicates both trimming and stump work.\n• Sweetgum — aggressive surface roots and brittle limbs that come down in wind.\n\nKnowing which one you have changes the recommendation. A leaning pine and a leaning water oak are not the same risk, and we don't quote them the same way."
        },
        {
          heading: "Coastal Storm Patterns and What They Do to Trees",
          text: "We're 40 miles from the Atlantic, and hurricane season runs June through November. The damage pattern here is consistent: saturated sandy soil loses its grip, then sustained wind levers the tree over at the root plate rather than breaking the trunk. That's why so much of our storm work is uprooted pines rather than snapped ones.\n\nThe second pattern is delayed failure. A tree that survives the storm with a partially lifted root plate can stand for weeks and then come down on a calm day. If the soil around a trunk cracked or heaved during a storm, that tree needs looking at even if it appears fine.\n\nSummer thunderstorms do a third kind of damage — hung-up limbs high in the canopy that nobody sees from the ground until one drops."
        },
        {
          heading: "Why Jacksonville Homeowners Call Us",
          text: "• Local crew — we live here, and we've worked Onslow County since 2013\n• Fast emergency response, including nights and weekends\n• Transparent pricing with free estimates and no surprise line items\n• Equipment matched to the property, including a spider lift for gate-only backyards\n• Military discounts for Camp Lejeune families, scheduled around PCS dates"
        },
        {
          heading: "Areas We Serve Near Jacksonville, NC",
          text: "While Jacksonville is our home base, we proudly serve communities throughout Onslow County and beyond:\n\n• Jacksonville, NC (primary service area)\n• Richlands, NC\n• Hubert, NC\n• Sneads Ferry, NC\n• Swansboro, NC\n• Holly Ridge, NC\n• Hampstead, NC\n• And nearby communities within 20 minutes\n\nNo matter where you are in the greater Jacksonville area, we can help with your tree service needs."
        },
        {
          heading: "Storm Damage & Tree Safety Resources",
          text: "Living in coastal North Carolina means dealing with storms. We've put together helpful guides to keep you informed."
        }
      ]}
      sectionLinks={{
        // Section 0 hands the services-overview intent back to the homepage, which
        // is the page that ranks for it. This is the "primary overview" link.
        0: { href: "/", label: "See our full tree services overview for Jacksonville, NC →" },
        1: [
          { href: "/tree-removal-jacksonville-nc", label: "Tree removal in Jacksonville, NC" },
          { href: "/spider-lift-tree-removal-jacksonville-nc", label: "How the spider lift gets into gate-only backyards" }
        ],
        2: [
          { href: "/tree-service-camp-lejeune-nc", label: "Tree service at Camp Lejeune, NC" },
          { href: "/stump-grinding-jacksonville-nc", label: "Stump grinding before a PCS walkthrough" }
        ],
        3: { href: "/tree-trimming-jacksonville-nc", label: "Tree trimming and pruning in Jacksonville, NC" },
        4: { href: "/emergency-tree-service-jacksonville-nc", label: "24/7 emergency tree service in Jacksonville, NC" },
        7: [
          { href: "/storm-damage-trees-guide", label: "What to Do After Storm Damage to Trees" },
          { href: "/tree-removal-cost-north-carolina", label: "How Much Does Tree Removal Cost in NC?" },
          { href: "/do-you-need-a-permit-to-remove-a-tree-nc", label: "Do You Need a Permit to Remove a Tree in NC?" },
          { href: "/tree-trimming-vs-pruning", label: "Tree Trimming vs Pruning: What's the Difference?" },
          { href: "/leaning-tree-dangerous-after-storm", label: "Is a Leaning Tree Dangerous After a Storm?" }
        ]
      }}
      faqs={[
        {
          question: "How much does tree service cost in Jacksonville, NC?",
          answer: `Tree service costs vary by service, tree size, and complexity. Tree removal starts at an ${PRICING.removal.minimum} minimum and most jobs run ${PRICING.removal.most}; trimming runs ${PRICING.trimming.standard}. Contact us for a free estimate specific to your situation.`
        },
        {
          question: "Do I need a permit to remove a tree in Jacksonville, NC?",
          answer: "In most cases, you do not need a permit to remove a tree on private residential property in Jacksonville, NC. However, certain situations may require approval. We can help you navigate local guidelines."
        },
        {
          question: "How quickly can you respond to tree emergencies?",
          answer: "We offer fast emergency response for storm damage and hazardous tree situations in Jacksonville and surrounding areas. Contact us immediately and we'll prioritize your safety."
        },
        {
          question: "Do you offer free estimates for tree service?",
          answer: "Yes, we provide free estimates for all tree services in Jacksonville, NC. Call us or fill out our contact form to schedule yours."
        },
        {
          question: "Can you schedule tree work around a PCS date?",
          answer: "Yes. Tell us your report date and we'll work backward from it, including the stump, so the yard is clear before your landlord or buyer walks it. PCS windows are usually two to three weeks, and we schedule against them specifically."
        },
        {
          question: "What tree services do you offer in Jacksonville?",
          answer: "We offer complete tree care including tree removal, tree trimming, stump grinding, emergency tree service, and storm damage cleanup throughout Jacksonville and Onslow County."
        }
      ]}
      finalCta={{
        heading: "Talk to the Local Crew in Jacksonville, NC",
        text: "Tell us the street and what you're looking at. We'll give you a free estimate and a straight answer on what the job takes — including if you're working against a PCS date.",
        buttonText: "Call Now"
      }}
      relatedServices={[
        { label: "Tree Removal", href: "/tree-removal-jacksonville-nc" },
        { label: "Tree Trimming", href: "/tree-trimming-jacksonville-nc" },
        { label: "Stump Grinding", href: "/stump-grinding-jacksonville-nc" },
        { label: "Emergency Tree Service", href: "/emergency-tree-service-jacksonville-nc" },
        { label: "Tree Service in Richlands", href: "/tree-service-richlands-nc" },
        { label: "Tree Service in Hubert", href: "/tree-service-hubert-nc" },
        { label: "Tree Service in Sneads Ferry", href: "/tree-service-sneads-ferry-nc" },
        { label: "Tree Service in Swansboro", href: "/tree-service-swansboro-nc" },
        { label: "Tree Service in Camp Lejeune", href: "/tree-service-camp-lejeune-nc" }
      ]}
    />
  );
}
