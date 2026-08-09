import ServicePage from './ServicePage';
import { PRICING } from '../data/siteData';
import treeTrimmingPhoto from '@/assets/tree-trimming-jacksonville-nc-godhans-1200.jpg';
import treeTrimmingPhoto480 from '@/assets/tree-trimming-jacksonville-nc-godhans-480.jpg';
import treeTrimmingPhoto800 from '@/assets/tree-trimming-jacksonville-nc-godhans-800.jpg';
import treeTrimmingPhoto1600 from '@/assets/tree-trimming-jacksonville-nc-godhans-1600.jpg';
import treeTrimmingPhotoWebp480 from '@/assets/tree-trimming-jacksonville-nc-godhans-480.webp';
import treeTrimmingPhotoWebp800 from '@/assets/tree-trimming-jacksonville-nc-godhans-800.webp';
import treeTrimmingPhotoWebp1200 from '@/assets/tree-trimming-jacksonville-nc-godhans-1200.webp';
import treeTrimmingPhotoWebp1600 from '@/assets/tree-trimming-jacksonville-nc-godhans-1600.webp';

export default function TreeTrimming() {
  return (
    <ServicePage
      title="Tree Trimming in Jacksonville, NC"
      subtitle="Professional Tree Trimming & Pruning to Keep Your Trees Healthy and Safe"
      slug="tree-trimming-jacksonville-nc"
      credentialBlock
      description="Expert tree trimming and pruning in Jacksonville, NC. Healthy growth, safer canopies, clean cleanup. Fully insured, free estimates."
      ctaText="Call Now for a Free Estimate"
      heroImage={{
        src: treeTrimmingPhoto,
        webpSrcSet: `${treeTrimmingPhotoWebp480} 480w, ${treeTrimmingPhotoWebp800} 800w, ${treeTrimmingPhotoWebp1200} 1200w, ${treeTrimmingPhotoWebp1600} 1600w`,
        jpgSrcSet: `${treeTrimmingPhoto480} 480w, ${treeTrimmingPhoto800} 800w, ${treeTrimmingPhoto} 1200w, ${treeTrimmingPhoto1600} 1600w`,
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px',
        alt: "Tree trimming in Jacksonville NC – real job-site photo by Godhans Tree Service.",
        caption: "Real job-site photo: Godhans crew trimming a large waterfront oak in Jacksonville, NC using a spider lift for precision pruning.",
        width: 1824,
        height: 1616,
        geo: "Jacksonville, NC",
        showCta: true,
      }}
      quickAnswer="Tree trimming in Jacksonville, NC helps improve tree health, safety, and appearance. Regular trimming removes dead or overgrown branches, reduces storm risk, and keeps your property looking its best. We provide safe, affordable trimming with free estimates."
      /* Before/after proof block. Rendered through ServicePage's existing
         caseStudy slot (after the sections, before the FAQ), so the page's
         title, meta and heading structure are untouched. Both frames are
         generated at 4:3 with explicit dimensions, so the pair lines up and
         neither can shift layout. */
      caseStudy={
        /* No heading element here on purpose: the block is additive, and adding
           an h2 would alter this page's heading outline. The section is named
           with aria-label instead, which gives assistive tech a landmark name
           without introducing a document heading. */
        <section aria-label="Before and after: limbs cleared off a roof" className="max-w-3xl mx-auto">
          <p className="text-gray-300 leading-relaxed text-lg mb-8">
            Insurance carriers often require limbs cleared from over the roof — this is that job, done.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                base: "oak-limbs-over-roof-before-trimming-jacksonville-nc",
                label: "Before",
                alt: "Oak limbs overhanging a roof before insurance-required trimming in Jacksonville, NC",
              },
              {
                base: "limbs-cleared-after-trimming-jacksonville-nc",
                label: "After (shot from the lift)",
                alt: "Aerial view after trimming showing limbs cleared back behind the roofline in Jacksonville, NC",
              },
            ].map((shot) => (
              <figure key={shot.base} className="m-0">
                <div
                  className="relative w-full overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-900"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <picture className="absolute inset-0 block h-full w-full">
                    <source
                      type="image/avif"
                      srcSet={`/images/${shot.base}-480.avif 480w, /images/${shot.base}-768.avif 768w, /images/${shot.base}-1024.avif 1024w`}
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                    <img
                      src={`/images/${shot.base}-768.webp`}
                      srcSet={`/images/${shot.base}-480.webp 480w, /images/${shot.base}-768.webp 768w, /images/${shot.base}-1024.webp 1024w`}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      width={1024}
                      height={768}
                      alt={shot.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </picture>
                </div>
                <figcaption className="mt-3 font-display font-bold uppercase tracking-widest text-sm" style={{ color: "#E5424F", letterSpacing: "0.1em" }}>
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      }
      sections={[
        {
          heading: "Expert Tree Trimming Services in Jacksonville, NC",
          text: "Proper tree trimming is essential for maintaining healthy, strong, and attractive trees. Our team provides professional trimming and pruning services to remove dead limbs, improve structure, and prevent potential hazards.\n\nWhether your trees need seasonal maintenance or corrective pruning, we use the right techniques to promote long-term growth and safety."
        },
        {
          heading: "Benefits of Professional Tree Trimming",
          text: "• Improves tree health and growth\n• Removes dead or diseased branches\n• Reduces risk of falling limbs\n• Enhances curb appeal\n• Prevents interference with power lines or structures"
        },
        {
          heading: "When Should You Trim Your Trees?",
          text: "Trees should be trimmed regularly to maintain their health and structure. You may need trimming if branches are overgrown, blocking sunlight, or becoming a safety concern.\n\nSeasonal trimming is also recommended to prepare for storms and reduce the risk of damage during high winds."
        },
        {
          heading: "Our Tree Trimming Process",
          text: "We follow a careful process to ensure safe and effective trimming:\n\n• Inspection of tree health and structure\n• Identification of branches to remove\n• Precision trimming using proper techniques\n• Cleanup of all debris"
        },
        {
          heading: "Tree Trimming Pricing in Jacksonville, NC",
          text: PRICING.trimming.summary
        },
        {
          heading: `Why We Have an ${PRICING.removal.minimum} Minimum`,
          text: PRICING.stories.mobilization
        },
        {
          heading: "Affordable Tree Trimming You Can Trust",
          text: "Tree trimming costs depend on the size of the tree and the amount of work required. We offer free estimates and transparent pricing so you know exactly what to expect."
        }
      ]}
      faqs={[
        { question: "How often should trees be trimmed?", answer: "Most trees should be trimmed every 1–3 years depending on the species and growth rate." },
        { question: "What is the best time of year to trim trees?", answer: "Late winter or early spring is often ideal, but trimming can be done year-round depending on the situation." },
        { question: "Is tree trimming necessary?", answer: "Yes, regular trimming helps maintain tree health, prevent hazards, and improve appearance." },
        { question: "Can trimming damage a tree?", answer: "Improper trimming can harm a tree, which is why it's best handled by trained professionals." }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Schedule Your Tree Trimming Service Today",
        text: "Keep your trees healthy, safe, and looking their best with professional tree trimming services in Jacksonville, NC. Contact us today for a free estimate.",
        buttonText: "Call Now"
      }}
    />
  );
}
