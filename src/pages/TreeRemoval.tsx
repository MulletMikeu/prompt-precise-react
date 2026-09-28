import ServicePage from './ServicePage';
import { BUSINESS, PRICING } from '../data/siteData';
import RecentJobs from '@/components/sections/RecentJobs';
import LiteYouTube from '@/components/ui/LiteYouTube';
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
        alt: `Tree removal in Jacksonville NC – real job-site photo by ${BUSINESS.name}.`,
        caption: 'Tree removal job-site — Jacksonville, NC',
        showCta: true,
      }}
      quickAnswer={`Tree removal in Jacksonville, NC starts at an ${PRICING.removal.minimum} minimum. Most removals run ${PRICING.removal.most}, with large or hazardous trees at ${PRICING.removal.large}. ${PRICING.stories.sameTree}`}
      /* Positional keys. Section order after batch 2:
           0 intro · 1 when-to-remove · 2 process · 3 pricing · 4 minimum ·
           5 pine+sweetgum · 6 bradford-pear · 7 sandy-ground · 8 weather ·
           9 service-areas */
      sectionLinks={{
        // Section 2 is "Our Tree Removal Process", where rigging and access are
        // described — the natural place to hand off to the tight-access page.
        2: { href: "/tree-removal-tight-spaces-jacksonville-nc", label: "See how we handle tree removal in tight spaces" },
        7: [
          { href: "/spider-lift-tree-removal-jacksonville-nc", label: "How the spider lift stays off your lawn" },
          { href: "/residential-tree-service-jacksonville-nc", label: "What an estimate should include — including ground protection" },
        ],
        8: { href: "/resistograph-tree-testing-jacksonville-nc", label: "What a lightning strike does inside a pine" },
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
          heading: "Why Pine and Sweetgum Are the Most-Removed Trees in Jacksonville",
          text: "Pine and sweetgum are #1 and #2 on our invoices, and it isn't close.\n\nBoth species share the same underlying problem: they overgrow themselves. Long, heavy limbs extend well past what the attachment can support, and unlike hardwoods, neither gives a crew many safe pruning options once that's happened. With an oak you can often prune your way out of a problem. With these two, frequently you can't — which is why they come out.\n\nPines add their own list. Needle drop is constant: pine straw drifts across the yard, blankets the roof, and packs into ridgelines where it holds moisture against the shingles. Fusiform rust forms galls on trunks and branches, and those galls become built-in break points — a limb doesn't fail at random, it fails at the gall. And weakened loblollies attract southern pine beetles and Ips engraver beetles, which finish the job.\n\nSweetgums add two more. The spiked seed balls are a genuine nuisance — they catch mower blades and they are hard on dogs' feet and bare feet alike. Below ground, sweetgums run aggressive surface roots that lift driveways and walkways over time.\n\nIf you have either species close to the house, it's worth having someone look before it becomes an emergency call."
        },
        {
          heading: "The Third One: Bradford Pear",
          text: "Pine and sweetgum are one and two. Third on the list, and climbing, is the Bradford pear.\n\nThe wood is the problem. Bradford pears grow fast and they grow badly: NC State Extension describes branches growing “at upright angles with weak crotches that break with age, wind and ice,” and says the ‘Bradford’ cultivar in particular “develops tight crotches that are likely to be split in half by heavy wind and rainstorms.” That matches what we see. The wood is soft and snappy and it fails without much warning — a pear that looks fine in the morning can be half a tree by the afternoon, and a mature one splitting down the fork is one of the few failures we would call genuinely unpredictable.\n\nIt is also invasive here. Extension states plainly that “this plant is an invasive species in North Carolina” and that it “is problematic, and alternatives should be considered” — the ornamental escapes into fencerows and woodland edges and crosses back to thorny Callery pear.\n\nTo be clear about the law, because there is a lot of confusion about it: North Carolina has NOT banned Bradford pear. Nobody is making you remove one. What does exist is the NC Bradford Pear Bounty, run by NC State Extension Forestry with the NC Forest Service, the NC Urban Forest Council and the NC Wildlife Federation, which gives you a free native tree in exchange for cutting one down — up to five trees. Events move around the state, so it is worth checking whether one is scheduled near Onslow County before you pay to have a pear removed.\n\nIf you want a replacement suggestion, Extension's own list of alternatives starts with eastern redbud, flowering dogwood, common serviceberry and American plum."
        },
        {
          heading: "Sandy Ground, and the Crane We Put in a Yard",
          text: "The ground here decides how we show up, and we learned that expensively.\n\nOur first crane job was in Hubert. The yard looked solid — it looked like any other yard — and backing the crane about ten feet into it put a fifteen-ton machine down to the axle. Sandy loam does that. It carries weight right up until it does not, and there is no stage in between that gives you a warning.\n\nThat job is the reason our equipment list looks the way it does now. A spider lift weighs a fraction of a crane, walks through a gate on tracks, and spreads its load across four outriggers instead of two axles. Mini track loaders move wood over grass without the point loading a wheeled machine puts through turf. Between them, we very rarely need to put anything heavy on a lawn at all — and when we do, we know to say so first.\n\nWhich side of the county you are on matters. Our shop on Gum Branch Road is roughly the dividing line. Coastal side — Sneads Ferry, Swansboro, Hubert, about half of Jacksonville — is sandy loam, and grass tears easily when heavy logs are turned on it, so we set that expectation at the quote and offer ground mats for a small added cost. Inland toward Richlands it is regular dirt going to hard-pack clay, and on those jobs there is usually no grass lost at all."
        },
        {
          heading: "Wind, Lightning, and When Trees Actually Break",
          text: "In our experience the wind here has a schedule. Coastal gusts pick up around ten or eleven in the morning, and above about fifty feet is where a climber actually feels them — which is why the high, exposed work on a breezy day gets done early or gets moved.\n\nThe damage is not evenly spread either. Southwest Jacksonville and the Ramsey Road side running toward Maysville see more of the tornado and waterspout-type damage than the rest of our area does. That is a pattern in the jobs we get called to, not a meteorological finding, but it is consistent enough that we factor it in when someone on that side asks whether a marginal tree is worth keeping.\n\nThe threat people underestimate is lightning. It is the number one non-wind cause of the tree failures we deal with, and tall pines take most of the strikes for the obvious reason — they are the tallest thing in the yard. A struck pine often looks survivable and is not."
        },
        {
          heading: "Service Areas for Tree Removal",
          text: "Godhans Tree Company removes trees across Jacksonville and all of Onslow County, including Camp Lejeune, Hubert, Richlands, Swansboro, Sneads Ferry, Holly Ridge, and the surrounding coastal communities. Coastal North Carolina puts hard miles on trees — salt air, saturated soil, and hurricane-season winds leave a lot of weakened pines and storm-split hardwoods behind.\n\nWhether it's a leaning pine in a tight backyard or a large hardwood hanging over your roof, our crew has the boom trucks, rigging, and experience to take it down safely and haul away every bit of debris. Not sure if you're in our area? Give us a call — if you're in or near Onslow County, we can almost certainly help."
        }
      ]}
      caseStudy={
        <>
        {/* Sits directly after the pine / sandy-ground sections. The caption says
            "topping", which here means taking the top out of a tree we are
            DISMANTLING — the opposite of the reduction topping we refuse to do on
            a tree that is staying. The paragraph below draws that line explicitly,
            because a visitor who has read our trimming page would otherwise have
            fair grounds to think we contradict ourselves. */}
        <section id="lift-video" className="py-16 bg-gray-950 border-t border-gray-800" aria-labelledby="removal-video-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 id="removal-video-heading" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Taking a Pine Down Between Two Houses
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              A tall loblolly with a house on either side and no room to drop it. The
              spider lift walks in on tracks, so there is no crane on the lawn and no
              ruts across the sandy ground — the two problems that otherwise decide how
              a job like this gets priced.
            </p>
            <LiteYouTube
              id="f54f7VLgkIU"
              title="Our spider lift topping a loblolly pine between homes — no crane, no torn-up yard."
              caption="Our spider lift topping a loblolly pine between homes — no crane, no torn-up yard."
            />
            <p className="text-gray-300 leading-relaxed text-lg mt-6">
              One clarification, because we are firm about the word elsewhere: taking the
              top out of a tree during a sectional removal is dismantling, and it is how a
              pine like this comes down safely in a tight spot. It is not the same thing as
              topping a tree you intend to keep, which does damage the tree cannot repair —
              and that we will not do.
            </p>
          </div>
        </section>

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

        {/* Sits directly after the case study so the resistograph is already
            introduced above — this block covers the decay itself and the
            decision the instrument enables, rather than re-explaining the tool. */}
        <section className="py-16 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              How We Know If a Tree Is Actually Rotten
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              We drill it and measure, because on this coast you cannot tell from the outside.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Coastal humidity makes internal decay a constant reality here rather than an occasional finding. Heartwood rot is the leading killer of Southern hardwoods, and it works from the inside out. Alongside it we see dry rot, wet rot, and root diseases that attack the tree below grade where nothing is visible at all.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Two are worth knowing by name. <strong className="font-semibold text-white">Armillaria root rot</strong> announces itself if you know where to look: white fungal fans under the bark, black shoestring-like rhizomorphs running through the root zone, and clusters of mushrooms at the base after rain. <strong className="font-semibold text-white">Biscogniauxia canker</strong> — still widely called Hypoxylon — goes after oaks that are already stressed, typically by drought or by construction disturbance around the root zone.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              The cruel part is that none of this has to show. A trunk can be hollow while the bark over it looks perfect.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              That's why we stopped guessing. The resistograph measures drilling resistance through the wood, so what we hand you is a density reading rather than an opinion. It condemns trees that look fine from the driveway — and just as often it does the opposite, and saves the solid 100-year-old oak that's the centerpiece of a yard and needs nothing but annual maintenance.
            </p>
          </div>
        </section>

        {/* Bradford pear facts above are NC State Extension's words, so they are
            linked rather than just attributed. */}
        <section id="sources" className="py-12 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-4">Sources</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://plants.ces.ncsu.edu/plants/pyrus-calleryana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
                >
                  NC State Extension Plant Toolbox — Pyrus calleryana (Bradford pear)
                </a>
                <span className="block text-gray-400 text-base mt-1">
                  Weak crotches that break with age, wind and ice; invasive in North
                  Carolina; native alternatives worth planting instead.
                </span>
              </li>
              <li>
                <a
                  href="https://forestry.ces.ncsu.edu/news/nc-bradford-pear-bounty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
                >
                  NC State Extension Forestry — NC Bradford Pear Bounty
                </a>
                <span className="block text-gray-400 text-base mt-1">
                  A free native tree in exchange for a Bradford pear you remove, up to
                  five, run with the NC Forest Service, NC Urban Forest Council and NC
                  Wildlife Federation.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Renders nothing until the owner adds real jobs and prices to
            RECENT_JOBS in src/data/ownerContent.ts. Invented job cards with
            invented prices would be the worst content on this site — people quote
            these numbers back to us on the phone. */}
        <RecentJobs />
        </>
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
