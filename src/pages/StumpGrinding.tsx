import ServicePage from './ServicePage';
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
      description="Fast, affordable stump grinding services in Jacksonville, NC. Professional equipment, clean results, and free estimates from Godhans Tree Company."
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
          heading: "Affordable Stump Grinding Services",
          text: "Stump grinding costs depend on the size and location of the stump. We offer free estimates and honest pricing with no hidden fees."
        }
      ]}
      faqs={[
        { question: "How much does stump grinding cost?", answer: "Pricing varies based on stump size and location, but most jobs are affordable and we provide free estimates." },
        { question: "How deep do you grind the stump?", answer: "We typically grind stumps several inches below ground level to allow for replanting or landscaping." },
        { question: "Will the tree grow back after grinding?", answer: "No, stump grinding prevents regrowth in most cases." },
        { question: "How long does stump grinding take?", answer: "Most stump grinding jobs can be completed in under an hour depending on size." }
      ]}
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