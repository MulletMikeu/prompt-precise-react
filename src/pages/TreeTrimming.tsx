import ServicePage from './ServicePage';
import { BUSINESS, PRICING } from '../data/siteData';
import trim480Avif from '@/assets/tree-trimming-jacksonville-nc-godhans-480.avif';
import trim480Webp from '@/assets/tree-trimming-jacksonville-nc-godhans-480.webp';
import trim480Jpg from '@/assets/tree-trimming-jacksonville-nc-godhans-480.jpg';
import trim800Avif from '@/assets/tree-trimming-jacksonville-nc-godhans-800.avif';
import trim800Webp from '@/assets/tree-trimming-jacksonville-nc-godhans-800.webp';
import trim800Jpg from '@/assets/tree-trimming-jacksonville-nc-godhans-800.jpg';
import trim1200Avif from '@/assets/tree-trimming-jacksonville-nc-godhans-1200.avif';
import trim1200Webp from '@/assets/tree-trimming-jacksonville-nc-godhans-1200.webp';
import trim1200Jpg from '@/assets/tree-trimming-jacksonville-nc-godhans-1200.jpg';

const trimAvifSrcSet = `${trim480Avif} 480w, ${trim800Avif} 800w, ${trim1200Avif} 1200w`;
const trimWebpSrcSet = `${trim480Webp} 480w, ${trim800Webp} 800w, ${trim1200Webp} 1200w`;
const trimJpgSrcSet = `${trim480Jpg} 480w, ${trim800Jpg} 800w, ${trim1200Jpg} 1200w`;

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
        src: trim1200Jpg,
        avifSrcSet: trimAvifSrcSet,
        webpSrcSet: trimWebpSrcSet,
        jpgSrcSet: trimJpgSrcSet,
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px',
        alt: `Tree trimming in Jacksonville NC – real job-site photo by ${BUSINESS.name}.`,
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
      /* Two blocks: the existing before/after figure, and the topping sources
         for the quotations in the trimming section above. */
      caseStudy={
        <>
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
                <figcaption className="mt-3 font-display font-bold uppercase tracking-widest text-sm" style={{ color: "var(--red-text)", letterSpacing: "0.1em" }}>
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="topping-sources" className="py-12 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-4">On Topping — Sources</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We would rather you checked this than took our word for it, because refusing
              to top a tree costs us work and we would say it either way.
            </p>
            <ul className="space-y-5">
              <li>
                <a
                  href="https://www.treesaregood.org/Portals/0/TreesAreGood_Why%20Topping%20Hurts_0321.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
                >
                  International Society of Arboriculture — Why Topping Hurts Trees
                </a>
                <span className="block text-gray-400 text-base mt-1">
                  ISA&rsquo;s consumer brochure on why topping is not a valid method of
                  height reduction.
                </span>
              </li>
              <li>
                <a
                  href="https://extension.psu.edu/tree-topping-the-cost-is-greater-than-you-think"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
                >
                  Penn State Extension — Tree Topping: The Cost is Greater Than You Think
                </a>
                <span className="block text-gray-400 text-base mt-1">
                  The source of the two quotations above: that a tree &ldquo;cannot stop
                  the spread of decay when it is topped,&rdquo; and that regrowth is
                  &ldquo;weakly attached and break[s] easily in wind or snowstorms, even
                  many years later when they are large and heavy.&rdquo;
                </span>
              </li>
            </ul>
          </div>
        </section>
        </>
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
          heading: "How We Actually Trim a Tree",
          text: "This is the part of the job Michael cares most about, and it is most visible on live oaks.\n\nThe call that brings it on, more than any other: a large oak that has started shedding more small dead interior branches than it used to, and has dropped one or two of the overgrown larger limbs. That is the pattern people phone us about, and it is exactly what the method below is for — the interior deadwood comes out, and the limbs that have outgrown their attachment get the weight taken off them before they are the next thing on the lawn.\n\nIt happens in two stages, and the order matters.\n\nFIRST, THE BOTTOM OF THE CANOPY. We clean the lowest fifteen to twenty percent — the trunk itself and the first five to eight feet out along each limb — taking off the sapsucker and epicormic growth, the thin vertical shoots that clutter the inside of a tree. The point is not tidiness. It is that afterwards you can see up into the tree. You get the structure back: the trunk, the main limbs, the shape underneath all the fuzz. On an old live oak the difference is the whole character of the tree.\n\nTHEN, SELECTIVE THINNING UP HIGH. Where a branch splits into four, six, eight limbs, we take out the ones growing back toward other limbs. Not every other one — that is how you get a tree that looks like it has been shaved. Choosing by direction instead of by count means air and light move through the canopy while the tree still looks almost untouched from the ground. Done properly, most people cannot tell we were up there. They can tell the tree looks better.\n\nAND ALWAYS, REGARDLESS: dead limbs, cracked limbs, rotten limbs, and limbs crossing or rubbing each other. Those are not judgment calls. A rubbing limb is a wound that never closes, and a cracked limb is a decision the tree has already made.\n\nWHAT WE WILL NOT DO IS TOP A TREE. Cutting the leaders off to reduce height does damage the tree cannot repair. A proper cut at the branch collar is something a tree can defend itself against; a topping cut is not, and as Penn State Extension puts it, a tree “cannot stop the spread of decay when it is topped.” It also starves the tree — the leaves are how it feeds itself, and removing that much canopy at once forces it to burn stored reserves to grow the leaves back.\n\nThen there is what grows back, which is the part that fools people. A topped tree throws up a dense flush of shoots that looks like vigorous recovery and is nothing of the kind. Those shoots have no branch collar — none of the interwoven trunk and branch wood that anchors a limb that grew there naturally — so, in Extension's words, they are “weakly attached and break easily in wind or snowstorms, even many years later when they are large and heavy.” You have traded one tall limb for a dozen badly attached ones, on a trunk that is now decaying. If someone has quoted you on topping, that is worth a second conversation."
        },
        {
          heading: "Why We Don't Rush to Cut Oaks",
          text: "Because an oak usually has a way out that other species don't.\n\nOaks regenerate through epicormic growth — new shoots pushed from dormant buds under the bark. It is not ideal growth, and no arborist pretends otherwise. But it is a second chance, and it gives a skilled crew options that simply don't exist on other trees.\n\nIn practice that means we can take a substantial prune off a roofline or back away from power lines and still leave you a canopy that doesn't look chopped in half — because the tree will respond and fill back in. The homeowner keeps the shade and the mature tree; the hazard still goes away.\n\nPines and sweetgums give you no such option. Cut them back hard and that's simply how they stay. This is the single biggest reason our invoices show pines and sweetgums getting removed while oaks get maintained year after year. When someone tells you an oak has to come out, it's worth asking whether it has to — or whether it just needs the right prune."
        },
        {
          heading: "The Best Time of Year to Trim",
          text: "For anything beyond light clearance over a roof, the dormant season is better — winter into early spring. In eastern North Carolina that is roughly January through mid-March.\n\nThe reasoning is simple once you hear it. Every cut opens the tree. In the dormant season there is less insect activity to find that opening, less sap flow, and lower disease pressure generally. You can also see the branch structure with the leaves off, which is half of pruning well. NC Cooperative Extension's guidance runs the same way — when plants are dormant, the branching pattern is visible and the risk of spreading disease is low.\n\nOne thing worth correcting, because it comes up every spring: people read that oaks must not be pruned between bud break and leaf drop because of oak wilt, and then apply it here. Oak wilt is real, but NC State Extension describes it as a lethal disease found in several counties in Western NC, and the guidance is to avoid spring pruning in areas where oak wilt is present. Onslow County is not one of those areas, and the coastal-county pruning calendars put oaks in the ordinary December–January dormant window along with the other shade trees. We still prefer dormant for oaks, for the reasons above — just not because of oak wilt."
        },
        {
          heading: "Trimming Year-Round, and Before Hurricane Season",
          text: "We trim year-round on request. Our practice is to tell you best practice first, and then do what you decide — if you understand the tradeoff and want the work done now, that is a legitimate choice and we will do it properly.\n\nThe most common version of that: weight reduction before hurricane season. Somebody has a pine or an oak with long, heavy limbs extended over the roof, and it is July. Waiting until January to reduce that weight means carrying it through the entire season that the weight is actually a problem. Reducing it in summer costs the tree a little more stress than a January cut would. Between those two, we will make the case for doing it now, because storm risk is the bigger number.\n\nWhat to look for before the season: limbs extending well past the rest of the canopy, especially over the house; deadwood still hanging in the crown; two leaders pulling apart at a fork; and anything that has visibly shifted since the last storm. Call early. Once a named storm is in the forecast, everyone calls at once, and the crews who could have reduced your tree in June are pulling other people's trees off roofs."
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
        {
          question: "Will you top my tree to reduce its height?",
          answer: "No. Topping does damage a tree cannot repair — Penn State Extension notes a tree “cannot stop the spread of decay when it is topped” — and it starves the tree by removing the canopy it feeds itself with. The regrowth looks like recovery but has no branch collar anchoring it, so it is “weakly attached and break[s] easily in wind or snowstorms, even many years later when they are large and heavy.” If height or weight is the worry, selective reduction at proper cuts does the job without those consequences.",
        },
        { question: "How often should trees be trimmed?", answer: "Most trees should be trimmed every 1–3 years depending on the species and growth rate." },
        { question: "What is the best time of year to trim trees?", answer: "The dormant season — winter into early spring, roughly January through mid-March in eastern North Carolina. There is less insect activity, less sap flow and lower disease pressure, and the branch structure is visible with the leaves off. We trim year-round on request; we will tell you best practice first and then do what you decide." },
        { question: "Should I avoid pruning oaks in spring because of oak wilt?", answer: "Not in Onslow County. NC State Extension describes oak wilt as a lethal disease found in several counties in Western NC, and the guidance is to avoid spring pruning where oak wilt is present. Coastal pruning calendars put oaks in the ordinary December–January dormant window. We still prefer dormant-season work on oaks, but for general wound and disease reasons rather than oak wilt." },
        { question: "Should I trim before hurricane season?", answer: "If a tree has long, heavy limbs extended over the roof, yes — reducing that weight before the season is usually worth more than waiting for the ideal dormant window. Call early; once a named storm is in the forecast, crews are busy pulling trees off roofs." },
        { question: "Is tree trimming necessary?", answer: "Yes, regular trimming helps maintain tree health, prevent hazards, and improve appearance." },
        { question: "Can trimming damage a tree?", answer: "Improper trimming can harm a tree, which is why it's best handled by trained professionals." }
      ]}
      guides={{
        heading: "Guides & Pricing",
        intro: "Background reading before you book crown work:",
        links: [
          {
            href: "/tree-trimming-vs-pruning",
            label: "Tree trimming vs pruning — what's actually different",
            blurb: "Which one your tree needs, and why the words aren't interchangeable."
          },
          {
            href: "/tree-removal-cost-north-carolina",
            label: "How much tree removal costs in North Carolina",
            blurb: "For when trimming isn't enough and the tree has to come out."
          },
          {
            href: "/spider-lift-tree-removal-jacksonville-nc",
            label: "Spider lift access for high canopies and work over the roof",
            blurb: "How we reach 50+ feet in a backyard without a bucket truck on the lawn."
          },
          {
            href: "/tree-cabling-bracing-jacksonville-nc",
            label: "Cabling and bracing for a split fork or weak union",
            blurb: "When reduction pruning isn't enough and the tree needs hardware to stay."
          }
        ]
      }}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
        { label: 'Resistograph Tree Testing', href: '/resistograph-tree-testing-jacksonville-nc' },
        { label: 'Commercial Tree Service', href: '/commercial-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Schedule Your Tree Trimming Service Today",
        text: "Keep your trees healthy, safe, and looking their best with professional tree trimming services in Jacksonville, NC. Contact us today for a free estimate.",
        buttonText: "Call Now"
      }}
    />
  );
}
