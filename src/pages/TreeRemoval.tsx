import ServicePage from './ServicePage';
import { PRICING } from '../data/siteData';
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
      subtitle="Safe, Insured Tree Removal — Free Estimates"
      slug="tree-removal-jacksonville-nc"
      credentialBlock
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
      quickAnswer={`Tree removal in Jacksonville, NC starts at an ${PRICING.removal.minimum} minimum. Most removals run ${PRICING.removal.most}, with large or hazardous trees at ${PRICING.removal.large}. ${PRICING.stories.sameTree}`}
      sectionLinks={{
        // Section 2 is "Our Tree Removal Process", where rigging and access are
        // described — the natural place to hand off to the tight-access page.
        2: { href: "/tree-removal-tight-spaces-jacksonville-nc", label: "See how we handle tree removal in tight spaces" },
      }}
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
          text: "Tree removal costs vary based on tree size, location, and complexity. We provide transparent pricing and free estimates so you know exactly what to expect."
        },
        {
          heading: `Why We Have an ${PRICING.removal.minimum} Minimum`,
          text: PRICING.stories.mobilization
        },
        {
          heading: "Service Areas for Tree Removal",
          text: "Godhans Tree Company removes trees across Jacksonville and all of Onslow County, including Camp Lejeune, Hubert, Richlands, Swansboro, Sneads Ferry, Holly Ridge, and the surrounding coastal communities. Coastal North Carolina puts hard miles on trees — salt air, saturated soil, and hurricane-season winds leave a lot of weakened pines and storm-split hardwoods behind.\n\nWhether it's a leaning pine in a tight backyard or a large hardwood hanging over your roof, our crew has the boom trucks, rigging, and experience to take it down safely and haul away every bit of debris. Not sure if you're in our area? Give us a call — if you're in or near Onslow County, we can almost certainly help."
        }
      ]}
      caseStudy={
        <section className="py-16 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The trees nobody else would touch — Gene Circle, Jacksonville
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Some removals aren't about size. They're about whether anyone can do them at all — safely, in the space available, without dropping a hundred feet of timber onto a house.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              We've taken down two of them at the same address. Here's what they cost, and why.
            </p>

            <figure className="my-8">
              <img
                src="/images/tight-access-tree-removal-tulip-poplar-gene-circle-jacksonville-nc-720.webp"
                srcSet="/images/tight-access-tree-removal-tulip-poplar-gene-circle-jacksonville-nc-640.webp 640w, /images/tight-access-tree-removal-tulip-poplar-gene-circle-jacksonville-nc-720.webp 720w"
                sizes="(max-width: 768px) 100vw, 768px"
                alt="Massive tulip poplar trunk wedged between a house and shed with fence, tight-access tree removal Gene Circle Jacksonville NC"
                width={720}
                height={960}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-lg border-2 border-gray-800"
              />
            </figure>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">The bee tree — $12,000</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              A 105-foot tulip poplar, dead-topped and rotting, eight feet from the client's house. A fence tight against one side, the neighbor's shed two feet beyond it, the client's own shed two feet behind the trunk. The working space was barely bigger than the tree.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Most companies would have guessed at the risk. We measured it. Using our{' '}
              <strong className="font-semibold text-white">IML-RESI resistograph</strong>
              {' '}— a calibrated instrument that drills a fine needle through a standing trunk and records the wood's density onto a strip, revealing cavities and rot invisible from the outside — we mapped the decay before anyone left the ground. We're the only company operating one in this area.
            </p>
            <figure className="my-8">
              <img
                src="/images/iml-resi-resistograph-reading-rotted-trunk-jacksonville-nc-960.webp"
                srcSet="/images/iml-resi-resistograph-reading-rotted-trunk-jacksonville-nc-640.webp 640w, /images/iml-resi-resistograph-reading-rotted-trunk-jacksonville-nc-960.webp 960w"
                sizes="(max-width: 768px) 100vw, 768px"
                alt="IML-RESI resistograph density reading strip from a rotted 56-inch tulip poplar trunk, Godhans tree risk assessment Jacksonville NC"
                width={960}
                height={486}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-lg border-2 border-gray-800"
              />
            </figure>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              The reading was alarming: on a 56-inch trunk, the sound outer wood was down to six inches on the good side and four on the bad. The rest was shell.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Then, sixty feet up, we found the other problem: an estimated 30,000-bee hive living inside the trunk.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              No crane could reach it. So we did it the hard way — negative-rigging the entire tree down by rope, by hand, in bee suits, in 95-degree heat. Four days. Not one piece touched the house.
            </p>

            <figure className="my-8">
              <img
                src="/images/pine-removal-aerial-tight-backyard-no-crane-jacksonville-nc-768.webp"
                srcSet="/images/pine-removal-aerial-tight-backyard-no-crane-jacksonville-nc-640.webp 640w, /images/pine-removal-aerial-tight-backyard-no-crane-jacksonville-nc-768.webp 768w"
                sizes="(max-width: 768px) 100vw, 768px"
                alt="Aerial view down a 120-foot pine being removed between rooftops in a tight Jacksonville NC backyard with no crane access"
                width={768}
                height={1024}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-lg border-2 border-gray-800"
              />
            </figure>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">The tree in a box — $8,500</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              We came back for the second one: a 120-foot pine wedged behind a shed with less than a foot of clearance and fences on three sides. It was, functionally, standing in a box. No crane access. We rigged it down over the fence into the neighbor's yard, section by section, by rope. A day and a half.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Why these numbers matter to you</h3>
            {/* $3,000–$4,000 and $10,000 below are job-history / ladder-floor figures — keep consistent with PRICING.removal.exceptional ("$10,000+") */}
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              That same 120-foot pine in an open field might run $3,000–$4,000. Boxed in behind a shed with fences on three sides and no crane access, it ran $8,500 — and it was worth every dollar, because the alternative was a company that couldn't do it dropping it on a house.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Our most complex removals start at $10,000 and go up from there — jobs with severe hazards, no equipment access, or rigging done entirely by hand. These are rare, but when they come, we're the crew that can do them safely, and we'll tell you exactly why the number is what it is before we start.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-semibold text-white">
              The tree doesn't set the price. The obstacles do.
            </p>
          </div>
        </section>
      }
      faqs={[
        {
          question: "How much does tree removal cost in Jacksonville NC?",
          answer: `${PRICING.removal.summary} We provide free estimates to give you an exact price.`
        },
        {
          question: "Do I need a permit to remove a tree in Jacksonville NC?",
          answer: "Permit requirements can vary depending on location and tree type. We can help guide you through any local requirements if needed.",
          link: { href: "/do-you-need-a-permit-to-remove-a-tree-nc", label: "Read the full NC tree removal permit guide →" }
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
      guides={{
        heading: "Guides & Pricing",
        intro: "More detail on what removals cost and how we handle the hard ones:",
        links: [
          {
            href: "/tree-removal-cost-north-carolina",
            label: "How much tree removal costs in North Carolina",
            blurb: "Full price ranges, what drives them, and why the same tree can cost double."
          },
          {
            href: "/tree-removal-near-house-jacksonville-nc",
            label: "Removing a tree close to your house",
            blurb: "How we take down trees leaning over a roof without dropping anything on it."
          },
          {
            href: "/spider-lift-tree-removal-jacksonville-nc",
            label: "Spider lift tree removal for backyards with no truck access",
            blurb: "Fits through a standard gate, reaches 50+ feet, and doesn't tear up the lawn."
          }
        ]
      }}
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
