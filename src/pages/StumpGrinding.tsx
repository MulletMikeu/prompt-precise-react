import ServicePage from './ServicePage';
import { PRICING } from '../data/siteData';
import stumpHero from '@/assets/stump-grinding-jacksonville-nc-godhans.jpg';
import stumpHero600Webp from '@/assets/stump-grinding-jacksonville-nc-godhans-600.webp';
import stumpHero1200Webp from '@/assets/stump-grinding-jacksonville-nc-godhans-1200.webp';
import stumpHero600Jpg from '@/assets/stump-grinding-jacksonville-nc-godhans-600.jpg';
import stumpHero1200Jpg from '@/assets/stump-grinding-jacksonville-nc-godhans-1200.jpg';

const stumpWebpSrcSet = `${stumpHero600Webp} 600w, ${stumpHero1200Webp} 1200w`;
const stumpJpgSrcSet = `${stumpHero600Jpg} 600w, ${stumpHero1200Jpg} 1200w`;

export default function StumpGrinding() {
  return (
    <ServicePage
      title="Stump Grinding in Jacksonville, NC"
      subtitle="Fast, Affordable Stump Removal to Restore Your Yard"
      slug="stump-grinding-jacksonville-nc"
      credentialBlock
      description={`Stump grinding in Jacksonville, NC from a ${PRICING.stump.minimum} minimum, ${PRICING.stump.perInch} measured at the root flare. Most residential stumps run ${PRICING.stump.most}. Ground ${PRICING.stump.depthMax} below grade.`}
      ctaText="Call Now for a Free Estimate"
      heroImage={{
        src: stumpHero,
        webpSrcSet: stumpWebpSrcSet,
        jpgSrcSet: stumpJpgSrcSet,
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px',
        width: 1200,
        height: 828,
        alt: 'Stump Grinding in Jacksonville NC – real job-site photo by Godhans Tree Service.',
        caption: 'Stump grinding job-site — Jacksonville, NC',
        showCta: true,
      }}
      quickAnswer="Stump grinding in Jacksonville, NC is the fastest way to remove unwanted tree stumps and improve the appearance and safety of your yard. Our team uses professional equipment to grind stumps below ground level, allowing you to reclaim your space quickly."
      sections={[
        {
          heading: "Professional Stump Grinding Services in Jacksonville, NC",
          text: "After a tree is removed, the remaining stump can be an eyesore and a hazard. Our stump grinding service removes the stump efficiently, preventing regrowth and making your yard easier to maintain.\n\nWe handle stumps of all sizes and ensure minimal disruption to your surrounding landscape."
        },
        {
          heading: "Why Should You Remove a Tree Stump?",
          text: "• Improves the appearance of your yard\n• Eliminates tripping hazards\n• Prevents pest infestations\n• Stops unwanted tree regrowth\n• Makes mowing and landscaping easier"
        },
        {
          heading: "Our Stump Grinding Process",
          text: "We use specialized equipment to safely grind the stump below ground level:\n\n• Inspect the stump and surrounding area\n• Prepare the site for safe operation\n• Grind the stump down below the surface\n• Clean up debris and leave the area ready for use"
        },
        {
          heading: "How Much Does Stump Grinding Cost in Jacksonville, NC?",
          text: `Stump grinding starts at a ${PRICING.stump.minimum} minimum and runs ${PRICING.stump.perInch}, measured at the widest point of the root flare. Most single residential stumps land between ${PRICING.stump.most.replace('–', ' and ')}.\n\nIf you have more than one stump on the property, each additional stump on the same visit is discounted. The trip and the setup are the fixed cost of the job — once the machine is on site and running, the second and third stumps cost you materially less than the first.`
        },
        {
          heading: "Why Do You Measure the Root Flare Instead of the Trunk?",
          text: "Because the trunk understates the job. The flare is where the trunk widens out into the roots at and below ground level, and that is the width the grinder actually has to cut through.\n\nMagnolias and water oaks are the clearest examples in Jacksonville — both spread far wider at and below grade than the trunk above them suggests. Quoting off the trunk diameter on one of those would price a job we could not do at that number. Measuring at the widest point of the flare is how the quote we give you is the price you pay."
        },
        {
          heading: "What About the Roots Running Through My Yard?",
          text: "Grinding alone will not touch them. A stump grinder cuts the stump and the flare — it does not follow roots out across the yard.\n\nSweetgums and most oaks run aggressive surface roots well beyond the trunk line, and those are the roots that lift sod, crack walkways, and catch a mower blade. Chasing and grinding surface roots is additional scope, and we price it in the same visit rather than sending you a surprise later. If you want the roots dealt with, say so during the estimate and we'll quote it alongside the stump."
        },
        {
          heading: "How Deep Do You Grind the Stump?",
          text: `Up to ${PRICING.stump.depthMax} below grade, with ${PRICING.stump.depthStandard} as our standard. The industry norm is ${PRICING.stump.industryNorm}, so we go deeper than most crews by design.\n\nThat depth is what makes the spot actually usable. At ${PRICING.stump.depthStandard} below grade you can lay sod, pour concrete, or replant over it without hitting wood. At the shallower norm, you often can't.`
        },
        {
          heading: "Does Grinding Remove the Stump Completely?",
          text: `No, and we'd rather tell you that up front. Grinding always leaves organic material below grade — root mass the machine never reaches. For the overwhelming majority of yards that is fine, because it sits well below anything you're going to build or plant.\n\nThe only true complete removal is full stump excavation with fresh fill: we dig the stump and root mass out entirely and backfill with clean material. We offer it for special circumstances — building pads, foundations, and septic projects — where nothing organic can be left in the ground. That's a different service from grinding, and it starts at ${PRICING.stump.excavation} per stump because of the machine and mobilization costs involved.`
        },
        {
          heading: "Do You Have to Call 811 Before Grinding a Stump?",
          text: "Yes. North Carolina classifies stump grinding as excavation, which means utility locates are required three full working days before the work happens.\n\nWe coordinate that call on every job. It is not optional and it is not something we skip to fit a schedule — a grinder head takes out a gas line or a fiber drop just as fast as a backhoe does. Build those three working days into your timeline when you're planning around a closing date, a landscaper, or a PCS move."
        },
        {
          // Was a vague "costs depend on size and location" paragraph, which now
          // contradicts the measured pricing above it.
          heading: "Free Estimates, No Hidden Fees",
          text: "Every stump gets measured at the flare before we quote it, and the number we give you is the number you pay. Single stumps or full-property clearing — the estimate is free either way."
        }
      ]}
      faqs={[
        { question: "How much does stump grinding cost?", answer: `Stump grinding starts at a ${PRICING.stump.minimum} minimum and runs ${PRICING.stump.perInch}, measured at the widest point of the root flare. Most single residential stumps run ${PRICING.stump.most}. Additional stumps on the same visit are discounted, since the trip and setup are the fixed cost.` },
        { question: "How deep do you grind the stump?", answer: `Up to ${PRICING.stump.depthMax} below grade, with ${PRICING.stump.depthStandard} as our standard — deeper than the ${PRICING.stump.industryNormAdj} industry norm. That leaves the spot ready for sod, concrete, or replanting.` },
        { question: "Will the tree grow back after grinding?", answer: "No, stump grinding prevents regrowth in most cases." },
        { question: "Does stump grinding remove the whole stump?", answer: `Not entirely — grinding always leaves organic material below grade. The only true complete removal is full stump excavation with fresh fill, which we offer for building pads, foundations, and septic projects starting at ${PRICING.stump.excavation} per stump.` },
        { question: "Do you need to call 811 before stump grinding?", answer: "Yes. North Carolina classifies stump grinding as excavation, so utility locates are required three full working days before the work. We coordinate that call on every job." },
        { question: "How long does stump grinding take?", answer: "Most stump grinding jobs can be completed in under an hour depending on size." }
      ]}
      guides={{
        heading: "Guides & Pricing",
        intro: "Planning the wider job around the stump:",
        links: [
          {
            href: "/tree-removal-cost-north-carolina",
            label: "How much tree removal costs in North Carolina",
            blurb: "If the tree is still standing, this is what taking it down runs before the stump."
          },
          {
            href: "/do-you-need-a-permit-to-remove-a-tree-nc",
            label: "Do you need a permit to remove a tree in NC?",
            blurb: "What's required on residential property, and where the exceptions are."
          },
          {
            href: "/tree-removal-tight-spaces-jacksonville-nc",
            label: "Tree work in tight spaces",
            blurb: "How we get a machine into a fenced backyard without taking the fence apart."
          }
        ]
      }}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Remove That Stump Today",
        text: "Don't let an old tree stump take up space in your yard. Our stump grinding service in Jacksonville, NC is fast, affordable, and effective. Contact us today for a free estimate.",
        buttonText: "Call Now"
      }}
    />
  );
}