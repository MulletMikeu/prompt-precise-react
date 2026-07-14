import ServicePage from './ServicePage';
import removalHero from '@/assets/tree-removal-jacksonville-nc-godhans.jpg';
import removalHero600Webp from '@/assets/tree-removal-jacksonville-nc-godhans-600.webp';
import removalHero1200Webp from '@/assets/tree-removal-jacksonville-nc-godhans-1200.webp';
import removalHero600Jpg from '@/assets/tree-removal-jacksonville-nc-godhans-600.jpg';
import removalHero1200Jpg from '@/assets/tree-removal-jacksonville-nc-godhans-1200.jpg';

const removalWebpSrcSet = `${removalHero600Webp} 600w, ${removalHero1200Webp} 1200w`;
const removalJpgSrcSet = `${removalHero600Jpg} 600w, ${removalHero1200Jpg} 1200w`;

export default function TreeRemoval() {
  return (
    <ServicePage
      title="Tree Removal in Jacksonville, NC"
      subtitle="Safe, Affordable & Fully Insured Tree Removal — Free Estimates Available"
      slug="tree-removal-jacksonville-nc"
      description="Professional tree removal services in Jacksonville, NC. Safe, efficient, and fully insured. Call Godhans Tree Company for a free estimate."
      ctaText="Call Now for a Free Estimate"
      heroImage={{
        src: removalHero,
        webpSrcSet: removalWebpSrcSet,
        jpgSrcSet: removalJpgSrcSet,
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px',
        width: 1200,
        height: 960,
        alt: 'Tree removal in Jacksonville NC – real job-site photo by Godhans Tree Service.',
        caption: 'Tree removal job-site — Jacksonville, NC',
        showCta: true,
      }}
      quickAnswer="Tree removal in Jacksonville, NC typically costs between $800 and $3000 depending on the size, location, and condition of the tree. Our team provides fast, safe, and fully insured tree removal services with free on-site estimates."
      sections={[
        {
          heading: "Professional Tree Removal Services in Jacksonville, NC",
          text: "If you have a dangerous, damaged, or unwanted tree on your property, professional removal is the safest solution. Our team specializes in removing trees of all sizes while protecting your home, landscaping, and surrounding structures.\n\nWe handle everything from small residential removals to large, high-risk tree jobs. Whether your tree is leaning, dead, storm-damaged, or simply in the way, we have the equipment and experience to remove it safely."
        },
        {
          heading: "When Should You Remove a Tree?",
          text: "You may need tree removal if:\n\n• The tree is dead or dying\n• Storm damage has weakened the structure\n• The tree is leaning dangerously toward your home\n• Roots are damaging your foundation or driveway\n• Branches are falling or pose a safety risk\n• The tree is overcrowding your yard or blocking sunlight\n\nIf you're unsure, we can inspect your tree and recommend the best solution."
        },
        {
          heading: "Our Tree Removal Process",
          text: "We follow a safe and efficient process to ensure your property is protected:\n\n1. Free Estimate & Inspection – We assess the tree and surrounding area\n2. Planning & Safety Setup – We prepare the site and equipment\n3. Careful Tree Removal – Sections are cut and removed safely\n4. Cleanup – We remove debris and leave your property clean"
        },
        {
          heading: "Affordable Tree Removal with No Surprises",
          text: "Tree removal costs vary based on tree size, location, and complexity. We provide transparent pricing and free estimates so you know exactly what to expect.\n\n✔ Fully insured\n✔ Experienced professionals\n✔ Safe and efficient equipment\n✔ Honest, upfront pricing"
        },
        {
          heading: "Service Areas for Tree Removal",
          text: "Godhans Tree Company removes trees across Jacksonville and all of Onslow County, including Camp Lejeune, Hubert, Richlands, Swansboro, Sneads Ferry, Holly Ridge, and the surrounding coastal communities. Coastal North Carolina puts hard miles on trees — salt air, saturated soil, and hurricane-season winds leave a lot of weakened pines and storm-split hardwoods behind.\n\nWhether it's a leaning pine in a tight backyard or a large hardwood hanging over your roof, our crew has the boom trucks, rigging, and experience to take it down safely and haul away every bit of debris. Not sure if you're in our area? Give us a call — if you're in or near Onslow County, we can almost certainly help."
        }
      ]}
      faqs={[
        {
          question: "How much does tree removal cost in Jacksonville NC?",
          answer: "Most tree removals range from $800 to $3,000 depending on the size and difficulty of the job. We provide free estimates to give you an exact price."
        },
        {
          question: "Do I need a permit to remove a tree in Jacksonville NC?",
          answer: "Permit requirements can vary depending on location and tree type. We can help guide you through any local requirements if needed."
        },
        {
          question: "How long does tree removal take?",
          answer: "Most residential tree removals can be completed in a few hours to one day depending on the size and complexity."
        },
        {
          question: "Is tree removal dangerous?",
          answer: "Yes, tree removal can be hazardous without proper equipment and experience. That's why it's best handled by trained professionals."
        }
      ]}
      relatedServices={[
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Get a Free Tree Removal Estimate Today",
        text: "If you need professional tree removal in Jacksonville, NC, we're here to help. Contact us today for a fast, free estimate and let our team handle the job safely and efficiently.",
        buttonText: "Call Now"
      }}
    />
  );
}
