import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

export default function TreeServiceRichlands() {
  return (
    <ServicePage
      title="Tree Service in Richlands, NC"
      subtitle="Professional Tree Removal, Trimming & Stump Grinding in Richlands"
      slug="tree-service-richlands-nc"
      faqPosition="early"
      credentialBlock
      description="Professional tree service in Richlands, NC. Tree removal, trimming, stump grinding, and emergency response. Free estimates from Godhans Tree Company."
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Tree service in Richlands, NC includes tree removal, tree trimming, and stump grinding to keep your property safe and well-maintained. Our team provides reliable, affordable service with free estimates for homeowners and businesses in the Richlands area."
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. This page had ZERO
       * editorial outbound links before batch 1 — every link on it was a templated
       * band or a service card. Same copy as the `text` entry it replaces, plus the
       * local detail that makes each anchor relevant. Edit both or neither.
       */
      /* Rewritten in Batch 3 to match the new section 2. The three anchors are
         unchanged in number and destination — one points at
         /tree-removal-cost-north-carolina, the live A/B treatment arm, and
         Ship E may neither add nor remove links to it. Leave it exactly here. */
      sectionBodies={{
        2: (
          <>
            {"• Removal, including large inland hardwoods\n• Trimming and structural pruning\n• Stump grinding, grindings hauled away\n• 24/7 emergency and storm response\n\nBecause the ground here will usually carry a machine, Richlands jobs tend to be quicker and tidier than the equivalent tree on the coastal side of the county — which shows up in "}
            <Link to="/tree-removal-cost-north-carolina" className={PROSE_LINK}>what a removal costs here</Link>
            {" and in "}
            <Link to="/tree-removal-jacksonville-nc" className={PROSE_LINK}>how long a removal actually takes</Link>
            {". When a storm does come through, "}
            <Link to="/emergency-tree-service-jacksonville-nc" className={PROSE_LINK}>24/7 storm response</Link>
            {" covers Richlands the same as everywhere else we work."}
          </>
        ),
      }}
      sections={[
        {
          heading: "Richlands is named after its soil, and the ground really is different here",
          text: `The town's name is not decorative. Colonial records refer to the north central section of Onslow County as "the Richlands of the New River," and the National Register documentation for the town's historic district gives the reason plainly: "the well-drained loamy soils of the section were superior to those around elsewhere in the county."\n\nThat eighteenth-century land assessment is still the single most useful thing a tree crew can know about working here, and it matches what we find. Our shop on Gum Branch Road is roughly where the ground changes. Coastal side — Sneads Ferry, Swansboro, Hubert, about half of Jacksonville — is sandy loam that looks solid and gives way under a loaded machine. Inland toward Richlands it is regular dirt going to hard-pack clay.\n\nWHAT THAT MEANS ON YOUR PROPERTY, and it is good news. On Richlands jobs there is usually no grass lost at all. We can generally put the machine where it needs to go without matting the route first, which takes a real cost and a real argument out of the job. It also means a Richlands tree is typically better rooted than the same species forty minutes southeast, and better rooted trees fail less often in wind.\n\nThe flip side: clay holds water at the surface rather than at depth. After a long wet spell the top few inches turn greasy, and that is its own traction problem even though the ground underneath is sound.`
        },
        {
          heading: "An older town than most of the county, with the trees to match",
          text: `Richlands incorporated in 1880 and had Onslow County's first public high school by 1907. For tree work the relevant consequence is age: the older residential streets carry genuinely mature hardwoods, planted or left standing when the lots were laid out, and those are a different proposition from the even-aged pine that dominates the newer coastal developments.\n\nMature hardwoods near old houses are the jobs where measuring the trunk earns its money. An oak that has been standing over a street since before the Second World War is usually worth keeping, frequently has a defect somewhere, and almost never needs to come out as urgently as it looks like it does.\n\nIt is also the part of our area where the honest answer is most often "leave it alone and look at it again next year."`
        },
        {
          heading: "What we do in Richlands",
          text: "• Removal, including large inland hardwoods\n• Trimming and structural pruning\n• Stump grinding, grindings hauled away\n• 24/7 emergency and storm response\n\nAnd because the ground here will usually carry a machine, Richlands jobs tend to be quicker and tidier than the equivalent tree on the coastal side of the county."
        }
      ]}
      caseStudy={
        <section id="richlands-sources" className="py-12 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-4">Source</h2>
            <a
              href="https://www.livingplaces.com/NC/Onslow_County/Richlands_Town/Richlands_Historic_District.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
            >
              Richlands Historic District, Onslow County — National Register documentation
            </a>
            <span className="block text-gray-400 text-base mt-1">
              The source of both quotations above: &ldquo;the Richlands of the New
              River&rdquo; in colonial records, and the well-drained loamy soils being
              &ldquo;superior to those around elsewhere in the county&rdquo;. The 1880
              incorporation and the 1907 high school come from the same documentation.
              What we say about matting, traction and how the ground behaves under a
              machine is our own experience of working both halves of the county.
            </span>
          </div>
        </section>
      }
      faqs={[
        {
          question: "Why is tree work sometimes cheaper in Richlands than on the coast?",
          answer: "Access, mostly. Inland Richlands ground is regular dirt going to hard-pack clay, so we can usually drive the machine to the trunk without laying matting or working from the street. On the sandy coastal half of the county the same tree often needs ground protection, a longer carry, or a climb instead of a lift — and that time is what you are paying for.",
        },
        {
          question: "Is the soil around Richlands really different?",
          answer: "Yes, and it is documented rather than folklore. The National Register documentation for the town's historic district records that colonial records called this part of Onslow County \"the Richlands of the New River\" because \"the well-drained loamy soils of the section were superior to those around elsewhere in the county.\" The town is named after its dirt. Our own experience working both halves of the county matches it.",
        },
        {
          question: "Do you take down large old hardwoods in town?",
          answer: "We do, but on the older Richlands streets we would rather measure one first. A mature oak over a street is usually better than it looks, often has one specific defect that can be cabled or pruned instead, and is not replaceable in a lifetime. We will tell you if the honest answer is to leave it and look again next year.",
        },
        {
          question: "Do you offer emergency tree service in Richlands?",
          answer: "Yes, 24/7. Richlands is inland so it sees less surge and salt than the coastal towns, but it still gets the wind and the saturated-ground failures that follow a long wet spell.",
        },
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Get Tree Service in Richlands, NC Today",
        text: "If you need professional tree service in Richlands, NC, contact us today for a free estimate. Our team is ready to help with safe, reliable service.",
        buttonText: "Call Now"
      }}
    />
  );
}
