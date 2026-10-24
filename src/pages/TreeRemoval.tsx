import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { BUSINESS, EQUIPMENT, PRICING } from '../data/siteData';

import RecentJobs from '@/components/sections/RecentJobs';
import LiteYouTube from '@/components/ui/LiteYouTube';
import removal480Avif from '@/assets/tree-removal-jacksonville-nc-godhans-480.avif';
import removal480Webp from '@/assets/tree-removal-jacksonville-nc-godhans-480.webp';
import removal480Jpg from '@/assets/tree-removal-jacksonville-nc-godhans-480.jpg';
import removal800Avif from '@/assets/tree-removal-jacksonville-nc-godhans-800.avif';
import removal800Webp from '@/assets/tree-removal-jacksonville-nc-godhans-800.webp';
import removal800Jpg from '@/assets/tree-removal-jacksonville-nc-godhans-800.jpg';
import removal1125Avif from '@/assets/tree-removal-jacksonville-nc-godhans-1125.avif';
import removal1125Webp from '@/assets/tree-removal-jacksonville-nc-godhans-1125.webp';
import removal1125Jpg from '@/assets/tree-removal-jacksonville-nc-godhans-1125.jpg';

const removalAvifSrcSet = `${removal480Avif} 480w, ${removal800Avif} 800w, ${removal1125Avif} 1125w`;
const removalWebpSrcSet = `${removal480Webp} 480w, ${removal800Webp} 800w, ${removal1125Webp} 1125w`;
const removalJpgSrcSet = `${removal480Jpg} 480w, ${removal800Jpg} 800w, ${removal1125Jpg} 1125w`;

import {
  RED_OAK_STUMP,
  RED_OAK_GRINDING,
  TALL_PINES_OVER_HOUSES,
  CLIMBER_ASCENDING,
  CLIMBER_TOPPING_PINE,
  CLIMBER_TOPPED_TREE,
  SURF_CITY_HOLLOW,
  SURF_CITY_STUMP,
} from '@/data/batch2Photos';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

/**
 * In-prose figures span the max-w-3xl (768px) content column and are full-bleed
 * below that, so 768 CSS px is the widest box and the 800 variant is the top
 * candidate worth offering. Matches the GALLERY ladder in
 * scripts/gen-hero-images.mjs.
 */
const PHOTO_SIZES = '(min-width: 768px) 768px, 100vw';

export default function TreeRemoval() {
  return (
    <ServicePage
      title="Tree Removal in Jacksonville, NC"
      /**
       * Ship I. The H1 above is untouched — it is already the exact query
       * wording and it ranks. What was failing is the snippet: this page took
       * 940 impressions and zero clicks at position 46.5, behind a description
       * ("Professional tree removal services … Safe, efficient, and fully
       * insured") that was four adjectives and no information.
       *
       * Both now lead with a figure the page actually carries. The minimum and
       * the band are interpolated from PRICING, so the snippet cannot promise a
       * price the body contradicts.
       */
      metaTitle={`Tree Removal in Jacksonville, NC — From ${PRICING.removal.minimum} | Godhans`}
      subtitle="Safe, Insured Tree Removal — Free Estimates"
      slug="tree-removal-jacksonville-nc"
      faqPosition="early"
      credentialBlock
      description={`Tree removal in Jacksonville, NC from an ${PRICING.removal.minimum} minimum; most run ${PRICING.removal.most}. Free written estimate, fully insured, and every stick hauled away.`}
      ctaText="Call Now for a Free Estimate"
      heroImage={{
        src: removal1125Jpg,
        avifSrcSet: removalAvifSrcSet,
        webpSrcSet: removalWebpSrcSet,
        jpgSrcSet: removalJpgSrcSet,
        sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px',
        /* The real intrinsic pixels of the top variant (1125x900), not the
           1200x960 this declared until Batch 5. Same 1.25 ratio either way, so
           nothing reflowed — but the convention on this site is that
           width/height are the actual file dimensions, and a declared size no
           variant has is the kind of thing that becomes a real CLS bug the
           moment someone changes the ladder. */
        width: 1125,
        height: 900,
        alt: `Tree removal in Jacksonville NC – real job-site photo by ${BUSINESS.name}.`,
        caption: 'Tree removal job-site — Jacksonville, NC',
        showCta: true,
      }}
      quickAnswer={`Tree removal in Jacksonville, NC starts at an ${PRICING.removal.minimum} minimum. Most removals run ${PRICING.removal.most}, with large or hazardous trees at ${PRICING.removal.large}. ${PRICING.stories.sameTree}`}
      /* Positional keys. Batch 5 replaced the two pine-health sections with a
         single summary, so everything from the Bradford pear down moved UP by
         one; Ship I then inserted the hazardous and large-tree sections at 1
         and 2, moving everything from the timing section down by TWO. Current
         order:
           0 when-to-remove · 1 hazardous · 2 large · 3 how-long · 4 minimum ·
           5 pine+sweetgum · 6 pine-size · 7 pine-summary · 8 bradford-pear ·
           9 sandy-ground · 10 weather · 11 builders · 12 service-areas
         Recount this list against `sections` after ANY insertion or removal —
         these keys are positional and fail silently, landing a link under the
         wrong heading rather than erroring. */
      sectionLinks={{
        // 0 is "When Should You Remove a Tree?", which now carries the HOA and
        // waterfront line the deleted process section used to hold — so the
        // permit hand-off belongs with it.
        0: [
          { href: "/do-you-need-a-permit-to-remove-a-tree-nc", label: "Do you need a permit to remove a tree in Onslow County?" },
          // Was /tree-removal-tight-spaces-jacksonville-nc, 301'd into
          // near-house in this batch. Repointed rather than dropped.
          { href: "/tree-removal-near-house-jacksonville-nc", label: "How we rig a removal in a tight space beside the house" },
        ],
        // 1 is the new hazardous section. It names two measurement answers in
        // its closing paragraph ("the second half of that is measurable", "we
        // drill them instead of guessing") and these are the pages that hold
        // them, so the links keep a promise the prose makes.
        1: [
          { href: "/resistograph-tree-testing-jacksonville-nc", label: "How we measure decay in a standing hardwood instead of guessing" },
          { href: "/pine-tree-problems-jacksonville-nc", label: "Brown-out, beetles and lightning: what each one means on a pine" },
        ],
        // 3 is the timing section (was 1); the crane-vs-lift comparison in it
        // is the natural hand-off to the spider lift page.
        3: { href: "/spider-lift-tree-removal-jacksonville-nc", label: "Why the spider lift is cutting in 30 minutes" },
        // 7 is the pine summary left behind by Batch 5's split (was 5). This
        // link is what makes the summary a summary rather than a truncation.
        7: { href: "/pine-tree-problems-jacksonville-nc", label: "Is my pine dying or dangerous? Brown-out, beetles, lightning and overgrown limbs" },
        // 9 is sandy-ground (was 7, and 8 before the Batch 5 split).
        9: [
          { href: "/spider-lift-tree-removal-jacksonville-nc", label: "How the spider lift stays off your lawn" },
          { href: "/residential-tree-service-jacksonville-nc", label: "What an estimate should include — including ground protection" },
        ],
        // 10 is wind/lightning (was 8, and 9 before the split).
        10: { href: "/resistograph-tree-testing-jacksonville-nc", label: "What a lightning strike does inside a pine" },
      }}
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. Same copy as
       * the `text` entries they replace, with anchors added inside sentences
       * that already named the destination. Edit both or neither.
       *
       * Targets chosen to feed the pages an audit found starved of in-sentence
       * links: /tree-cabling-bracing-* (1 editorial inbound), /debris-hauling-*
       * (2) and /reviews (0 editorial).
       */
      sectionBodies={{
        0: (
          <>
            {"You may need tree removal if:\n\n• The tree is dead or dying\n• Storm damage has weakened the structure\n• The tree is leaning dangerously toward your home\n• Roots are damaging your foundation or driveway\n• Branches are falling or pose a safety risk\n• The tree is overcrowding your yard or blocking sunlight\n\nIf you're unsure, we can inspect your tree and recommend the best solution — and the answer is not always removal. A healthy mature oak with one split fork is usually a candidate for "}
            <Link to="/tree-cabling-bracing-jacksonville-nc" className={PROSE_LINK}>cabling and bracing</Link>
            {` at ${PRICING.cabling.typical} rather than a removal, and a trunk that merely looks worrying can be `}
            <Link to="/resistograph-tree-testing-jacksonville-nc" className={PROSE_LINK}>measured instead of guessed at</Link>
            {". And if your property sits in an HOA or backs up to water, we'll flag anything that needs approval at the estimate, before the job goes on the schedule."}
          </>
        ),
        /*
         * Index 1 is Ship I's hazardous section. Same copy as its `text`
         * entry, with one anchor inside the closing sentence that already
         * named the destination — edit both or neither.
         *
         * The anchor is the cross-link the batch asked for: /emergency-… keeps
         * its own "Hazardous Tree Removal in Jacksonville, NC" section, which
         * is NOT moved here. That page answers hazardous-when-it-has-already-
         * happened; this one answers hazardous-while-it-is-still-standing.
         * ServicePage gives section headings no `id`, so this links to the page
         * rather than to a fragment — adding ids would mean editing
         * ServicePage, which renders both A/B arms and would trip the guard.
         */
        1: (
          <>
            {"Two things at once, and the second one is what people leave out: a defect that makes failure likely, and something underneath it worth protecting. A hollow oak in the middle of a field is not a hazard tree. The same oak eight feet from a bedroom wall is.\n\nTHE DEFECTS WE ACTUALLY FIND, roughly in order of how often:\n\n• LIMBS THAT HAVE OUTGROWN THEIR ATTACHMENT. The commonest by a wide margin, and the reason pine and sweetgum lead our invoices — long, heavy limbs extending well past what the attachment can support, on two species that leave a crew very few safe pruning options once it has happened.\n\n• A LIGHTNING-STRUCK PINE. Lightning is the number one non-wind cause of the failures we get called to, and tall pines take most of the strikes for the obvious reason. A struck pine often looks survivable and is not.\n\n• A BROWNED-OUT PINE. No treatment, and no second opinion worth paying for. A pine that has browned out is dead.\n\n• FUSIFORM RUST GALLS. The galls are built-in break points. A limb carrying one does not fail at random — it fails at the gall.\n\n• A BRADFORD PEAR WITH TIGHT CROTCHES. NC State Extension says the cultivar “develops tight crotches that are likely to be split in half by heavy wind and rainstorms,” and that is what we see. A mature pear splitting down the fork is one of the few failures we would call genuinely unpredictable.\n\n• ROOT TROUBLE AT THE BASE. White mycelial fans under the bark, black string-like rhizomorphs around the base, clusters of yellow-orange mushrooms nearby — Extension's Armillaria signs. When those are present, the part of the tree holding it up is the part that is failing.\n\nTHE HARD PART IS THAT A HAZARD DOES NOT HAVE TO LOOK LIKE ONE. The worst tree we have taken down was still standing and still looked like a tree: a 105-foot tulip poplar eight feet from a client's house. On a 56-inch trunk, the sound outer wood was six inches on the good side and four on the bad. The rest was shell. A hardwood can be hollow and still leaf out green, which is why we drill them instead of guessing — a pine will tell you it is dead, a hardwood will not.\n\nSo the useful question is rarely “is my tree hazardous.” It is “what is underneath it, and how sure are we” — and the second half of that is measurable. If the tree is already down on the house or across the drive, it has stopped being a removal: that is "}
            <Link to="/emergency-tree-service-jacksonville-nc" className={PROSE_LINK}>emergency work</Link>
            {", it is priced differently, and it has its own page."}
          </>
        ),
        /*
         * Index 4 (was 2) is "Why We Have an $800 Minimum". It used to be
         * "Affordable Tree Removal with No Surprises", which Batch 2 removed —
         * it opened with "Tree removal costs vary based on tree size, location,
         * and complexity", which answers nothing and broke the answer-first
         * rule on a page that otherwise keeps it.
         *
         * Its four in-sentence links did NOT go with it. Batch 1 added them
         * specifically to feed pages an audit found starved: /reviews had zero
         * editorial inbound links and /debris-hauling had two. Deleting the
         * section wholesale would have quietly undone that work, so the
         * link-bearing sentences moved here — onto the section that is actually
         * about what a removal costs — and the filler is what was dropped.
         */
        4: (
          <>
            {`${PRICING.stories.mobilization}\n\nWhat our customers mention most in our `}
            <Link to="/reviews" className={PROSE_LINK}>Google reviews</Link>
            {" is that the quoted number holds. If the tree is already down and the pile is the whole problem, that is "}
            <Link to="/debris-hauling-jacksonville-nc" className={PROSE_LINK}>debris hauling</Link>
            {` and it prices separately, from an ${PRICING.debris.minimum} minimum — ${PRICING.debris.perTrailer} per trailer load on a residential job. The `}
            <Link to="/services" className={PROSE_LINK}>services overview</Link>
            {" explains which of trimming, removal and grinding fixes which problem, and the longer write-ups are in our "}
            <Link to="/blog" className={PROSE_LINK}>tree care guides</Link>
            {".\n\nInsurance work is billed differently, and deliberately so: those jobs get an itemized invoice after the work is done, line by line at North Carolina standard rates, rather than a single up-front number. That is what an adjuster needs to see to settle it."}
          </>
        ),
        // 12 is "Service Areas for Tree Removal" (was 10 before Ship I's two
        // insertions, and 11 before the Batch 5 split). The city list was six
        // place names in a sentence with no links. Each of those pages had two
        // editorial inbound links before this, both from templated card grids.
        12: (
          <>
            {"Godhans Tree Company removes trees across Jacksonville and all of Onslow County, including "}
            <Link to="/tree-service-camp-lejeune-nc" className={PROSE_LINK}>Camp Lejeune</Link>
            {", "}
            <Link to="/tree-service-hubert-nc" className={PROSE_LINK}>Hubert</Link>
            {", "}
            <Link to="/tree-service-richlands-nc" className={PROSE_LINK}>Richlands</Link>
            {", "}
            <Link to="/tree-service-swansboro-nc" className={PROSE_LINK}>Swansboro</Link>
            {", "}
            <Link to="/tree-service-sneads-ferry-nc" className={PROSE_LINK}>Sneads Ferry</Link>
            {", "}
            <Link to="/tree-service-holly-ridge-nc" className={PROSE_LINK}>Holly Ridge</Link>
            {", "}
            <Link to="/tree-service-surf-city-nc" className={PROSE_LINK}>Surf City</Link>
            {", "}
            <Link to="/tree-service-maysville-nc" className={PROSE_LINK}>Maysville</Link>
            {", "}
            <Link to="/tree-service-beulaville-nc" className={PROSE_LINK}>Beulaville</Link>
            {" and the surrounding coastal communities. Coastal North Carolina puts hard miles on trees — salt air, saturated soil, and hurricane-season winds leave a lot of weakened pines and storm-split hardwoods behind.\n\nWhether it's a leaning pine in a tight backyard or a large hardwood hanging over your roof, our crew has the boom trucks, rigging, and experience to take it down safely and haul away every bit of debris. Not sure if you're in our area? Give us a call — if you're in or near Onslow County, we can almost certainly help. The full list is on our "}
            <Link to="/service-area" className={PROSE_LINK}>service area page</Link>
            {"."}
          </>
        ),
      }}
      sections={[
        {
          heading: "When Should You Remove a Tree?",
          text: "You may need tree removal if:\n\n• The tree is dead or dying\n• Storm damage has weakened the structure\n• The tree is leaning dangerously toward your home\n• Roots are damaging your foundation or driveway\n• Branches are falling or pose a safety risk\n• The tree is overcrowding your yard or blocking sunlight\n\nIf you're unsure, we can inspect your tree and recommend the best solution. And if your property sits in an HOA or backs up to water, we'll flag anything that needs approval at the estimate, before the job goes on the schedule."
        },
        /*
         * Ship I, items 1 and 2 of two new sections. They sit here — second and
         * third, directly under "When Should You Remove a Tree?" and ahead of
         * the timing section — because this page is the designated owner of the
         * "hazardous / large / dead tree removal" query family and owned
         * nothing answering either word. "What counts as a large tree?" also
         * has to precede "How long does it take to remove a LARGE tree?" for
         * the page to read in order.
         *
         * SOURCING RULE FOR BOTH. Every figure and every claim below already
         * appears elsewhere on this same page or in DECISIONS.md. Nothing came
         * from /tree-removal-cost-north-carolina — that is the live A/B
         * treatment arm, and the batch bars borrowing from it. In particular
         * `PRICING.stories.photoLimit` would have fit the large-tree section
         * perfectly and was NOT used, because it renders only on the cost page.
         *
         * NO PRICES. Neither section states a dollar figure. The bands are
         * already in this page's quickAnswer and in the minimum section, and
         * restating them inside the section that owns "hazardous" is how a page
         * starts competing with itself — which is the defect audit item B3
         * found on the trimming page.
         */
        {
          heading: "What makes a tree hazardous?",
          text: "Two things at once, and the second one is what people leave out: a defect that makes failure likely, and something underneath it worth protecting. A hollow oak in the middle of a field is not a hazard tree. The same oak eight feet from a bedroom wall is.\n\nTHE DEFECTS WE ACTUALLY FIND, roughly in order of how often:\n\n• LIMBS THAT HAVE OUTGROWN THEIR ATTACHMENT. The commonest by a wide margin, and the reason pine and sweetgum lead our invoices — long, heavy limbs extending well past what the attachment can support, on two species that leave a crew very few safe pruning options once it has happened.\n\n• A LIGHTNING-STRUCK PINE. Lightning is the number one non-wind cause of the failures we get called to, and tall pines take most of the strikes for the obvious reason. A struck pine often looks survivable and is not.\n\n• A BROWNED-OUT PINE. No treatment, and no second opinion worth paying for. A pine that has browned out is dead.\n\n• FUSIFORM RUST GALLS. The galls are built-in break points. A limb carrying one does not fail at random — it fails at the gall.\n\n• A BRADFORD PEAR WITH TIGHT CROTCHES. NC State Extension says the cultivar “develops tight crotches that are likely to be split in half by heavy wind and rainstorms,” and that is what we see. A mature pear splitting down the fork is one of the few failures we would call genuinely unpredictable.\n\n• ROOT TROUBLE AT THE BASE. White mycelial fans under the bark, black string-like rhizomorphs around the base, clusters of yellow-orange mushrooms nearby — Extension's Armillaria signs. When those are present, the part of the tree holding it up is the part that is failing.\n\nTHE HARD PART IS THAT A HAZARD DOES NOT HAVE TO LOOK LIKE ONE. The worst tree we have taken down was still standing and still looked like a tree: a 105-foot tulip poplar eight feet from a client's house. On a 56-inch trunk, the sound outer wood was six inches on the good side and four on the bad. The rest was shell. A hardwood can be hollow and still leaf out green, which is why we drill them instead of guessing — a pine will tell you it is dead, a hardwood will not.\n\nSo the useful question is rarely “is my tree hazardous.” It is “what is underneath it, and how sure are we” — and the second half of that is measurable. If the tree is already down on the house or across the drive, it has stopped being a removal: that is emergency work, it is priced differently, and it has its own page."
        },
        {
          heading: "What counts as a large tree?",
          text: "About thirty inches through the trunk. Not a height.\n\nOn our invoices “large” is a diameter, because diameter is what decides the crew, the equipment and the number of days. The big pine on our schedule is 80 to 90 feet at two and a half to three feet through — thirty to thirty-six inches — and that is the tree that runs a day to a day and a half. Below it, most trees in an open yard are an afternoon. Above it, you are into the jobs where nothing can be dropped and every piece has to be rigged.\n\nHeight is the number everybody quotes and the least useful one we get. The most expensive removal we have ever done was a 105-foot tulip poplar, and its height is not why: it measured 56 inches through, it was dead-topped and rotting, and it stood eight feet from the house. There is a section further down on why a taller pine is frequently the cheaper day.\n\nTWO MEASURES OF LARGE THAT MATTER MORE THAN THE TAPE ON THE TRUNK:\n\n• THE LOG SIZE. How many pieces come out of the trunk, how heavy each one is, and how many truck runs they make. This is the figure that turns a one-day job into two.\n\n• THE STUMP. A red oak we removed in central Jacksonville left a stump about five feet across at the cut, and the stump alone took all day — longer than the tree did.\n\nSo when we say large we mean roughly thirty inches and up at the trunk, with the canopy spread and the access on top of it. That is a measurement taken standing next to the tree, which is the whole reason we come and look before we give you a number."
        },
        {
          heading: "How long does it take to remove a large tree?",
          text: "A small tree in an open yard is about 3 hours, start to cleanup. A big pine runs 1 to 1.5 days, and a massive one 1.5 to 2. Real numbers from our own jobs:\n\nSMALL TREE, OPEN YARD — ABOUT 3 HOURS. That is the whole visit: cut the tree, grind the stump, rake, leaf-blow, and haul everything away. You get your afternoon back.\n\nONE TREE, NO GRINDING — OFTEN THE SAME DAY. Take the stump out of the scope and a single tree is frequently a one-day job regardless of size, because the grinder is what spills into tomorrow.\n\nBIG PINE — 1 TO 1.5 DAYS. An 80 to 90 foot loblolly, two and a half to three feet through the trunk, takes a full day to cut and get the bulk of the debris hauled.\n\nA MASSIVE PINE — 1.5 TO 2 DAYS. Bigger than that, or hard against a structure so every piece has to be rigged down, and the cutting alone fills a day and a half.\n\nTHE STUMP IS THE BOTTLENECK, NOT THE TREE. This is the part that decides whether you get your yard back on day one. An ordinary stump is about an hour and a half of grinding; a big one runs 3 to 4 hours. Then there is the part nobody budgets for: the grindings. A big stump produces a pile that has to be scraped up and hauled, and on the large ones that is often a second-day half-day of its own, after the grinding is finished. So a removal can be complete, the tree gone, and the yard still a day from being back. We try to grind the same day and we will tell you at the estimate which way yours is likely to go, rather than leaving you guessing.\n\nCRANE JOBS RUN ABOUT THE SAME. This surprises people who assume a crane is faster. Crane setup — cribbing, mats, checks, rigging — takes about an hour and a half before anything gets cut. Our remote-control spider lift is off the trailer and cutting within about thirty minutes. What the crane actually buys is not speed, it is reach in tight quarters: it picks pieces out and sets them down where the crew can process them, instead of everything coming down through a space that has no room for it."
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
          heading: "85 to 90 feet is the usual cap on a Jacksonville pine — and height is not what prices it",
          text: "Most of the pines we take down top out around 85 to 90 feet. Taller than that happens — 100 to 110 feet — but it is genuinely rare, and the ones people call \"the biggest tree they have ever seen\" are usually 90-footers with a lot of canopy.\n\nWhat matters is that height is not the number that sets the price. In an open field, with room to drop it and room to work, we can top out an 80 to 100 foot pine without much drama. What drives the figure is diameter, canopy spread, and the log size that comes out of the trunk — how many pieces, how heavy each one is, and how many truck runs they make. A 120 foot pine with a 28 inch base in an open field is a cheaper day than a 90 footer measuring 38 inches with a house under it.\n\nThat is the same point the cost page makes with the price ladder, and it is worth repeating here because it is the single most common misunderstanding we meet at an estimate: people price a tree by looking up, and we price it by looking at the trunk and at what is around it."
        },
        {
          /*
           * Batch 5 (Ship G): the two pine-health sections that used to sit
           * here — brown-out and beetles — moved to
           * /pine-tree-problems-jacksonville-nc, taking their two FAQs, the
           * pitch-tube figure and the two Richlands photographs with them.
           *
           * WHY. This page had absorbed content in every batch since Ship D
           * and reached ~5,800 words and twelve images; by Ship F it was the
           * only page on the site on the Lighthouse gate line (production
           * median exactly 95 against a floor of 95, one run at 94). Pine
           * health is also its own search intent rather than a subsection of
           * what a removal costs.
           *
           * What is left is a summary that answers the question for someone
           * who is not going to click, which is the point of a summary. Do
           * not let it grow back into the full treatment — the figures live
           * on the pine page now and two copies will drift.
           */
          heading: "Is your pine dying? The short version",
          text: "If a pine has browned out, it is dead — there is no treatment, and that is the useful difference between pines and hardwoods. A hardwood can be hollow and still leaf out green, which is why we drill those; a pine does not give you that option.\n\nThe three things most often mistaken for a dying pine: a heavy needle-shed year, where the interior needles brown and drop while the tips stay green; limbs that have simply outgrown their attachment, which is the commonest pine problem we see and is a trimming job; and beetle pitch tubes on a tree whose canopy is still full, which is not automatically a death sentence.\n\nThe full version — what lightning does, what the beetle signs actually are, and what we advise on a borderline tree — is on its own page."
        },
        {
          heading: "The Third One: Bradford Pear",
          text: "Pine and sweetgum are one and two. Third on the list, and climbing, is the Bradford pear.\n\nThe wood is the problem. Bradford pears grow fast and they grow badly: NC State Extension describes branches growing “at upright angles with weak crotches that break with age, wind and ice,” and says the ‘Bradford’ cultivar in particular “develops tight crotches that are likely to be split in half by heavy wind and rainstorms.” That matches what we see. The wood is soft and snappy and it fails without much warning — a pear that looks fine in the morning can be half a tree by the afternoon, and a mature one splitting down the fork is one of the few failures we would call genuinely unpredictable.\n\nIt is also invasive here. Extension states plainly that “this plant is an invasive species in North Carolina” and that it “is problematic, and alternatives should be considered” — the ornamental escapes into fencerows and woodland edges and crosses back to thorny Callery pear.\n\nTo be clear about the law, because there is a lot of confusion about it: North Carolina has NOT banned Bradford pear. Nobody is making you remove one. What does exist is the NC Bradford Pear Bounty, run by NC State Extension Forestry with the NC Forest Service, the NC Urban Forest Council and the NC Wildlife Federation, which gives you a free native tree in exchange for cutting one down — up to five trees. Events move around the state, so it is worth checking whether one is scheduled near Onslow County before you pay to have a pear removed.\n\nIf you want a replacement suggestion, Extension's own list of alternatives starts with eastern redbud, flowering dogwood, common serviceberry and American plum."
        },
        {
          heading: "Sandy Ground, and the Crane We Put in a Yard",
          text: "Our first crane job put a fifteen-ton machine down to the axle about ten feet into a Hubert yard that looked solid. Sandy loam does that: it carries weight right up until it does not, and there is no stage in between that gives you a warning.\n\nThat job is the reason our equipment list looks the way it does now. A spider lift weighs a fraction of a crane, walks through a gate on tracks, and spreads its load across four outriggers instead of two axles. Mini track loaders move wood over grass without the point loading a wheeled machine puts through turf. Between them, we very rarely need to put anything heavy on a lawn at all — and when we do, we know to say so first.\n\nWhich side of the county you are on matters. Our shop on Gum Branch Road is roughly the dividing line. Coastal side — Sneads Ferry, Swansboro, Hubert, about half of Jacksonville — is sandy loam, and grass tears easily when heavy logs are turned on it, so we set that expectation at the quote and offer ground mats for a small added cost. Inland toward Richlands it is regular dirt going to hard-pack clay, and on those jobs there is usually no grass lost at all."
        },
        {
          heading: "Wind, Lightning, and When Trees Actually Break",
          text: "Coastal gusts pick up around ten or eleven in the morning, and above about fifty feet is where a climber actually feels them — which is why, in our experience, the high exposed work on a breezy day gets done early or gets moved.\n\nThe damage is not evenly spread either. Southwest Jacksonville and the Ramsey Road side running toward Maysville see more of the tornado and waterspout-type damage than the rest of our area does. That is a pattern in the jobs we get called to, not a meteorological finding, but it is consistent enough that we factor it in when someone on that side asks whether a marginal tree is worth keeping.\n\nThe threat people underestimate is lightning. It is the number one non-wind cause of the tree failures we deal with, and tall pines take most of the strikes for the obvious reason — they are the tallest thing in the yard. A struck pine often looks survivable and is not."
        },
        {
          heading: "Removals for Builders and New Construction",
          text: "We do tree and stump removal for builders. We do not do land clearing — that is a different trade with different equipment, and we would rather send you to someone who does it properly than pretend otherwise.\n\nWhat we actually get called for on new construction is the leftovers and the changes: the land clearers left a tree standing, the house or the driveway moved on the plan and now something is in the way, a finished house turns out to have a tree too close to it, or a buyer walks the lot and asks for trimming or a removal before closing.\n\nWe work closely with a couple of local builders on exactly this kind of work, and we are used to fitting into a construction schedule rather than setting one."
        },
        {
          heading: "Service Areas for Tree Removal",
          text: "Godhans Tree Company removes trees across Jacksonville and all of Onslow County, including Camp Lejeune, Hubert, Richlands, Swansboro, Sneads Ferry, Holly Ridge, and the surrounding coastal communities. Coastal North Carolina puts hard miles on trees — salt air, saturated soil, and hurricane-season winds leave a lot of weakened pines and storm-split hardwoods behind.\n\nWhether it's a leaning pine in a tight backyard or a large hardwood hanging over your roof, our crew has the boom trucks, rigging, and experience to take it down safely and haul away every bit of debris. Not sure if you're in our area? Give us a call — if you're in or near Onslow County, we can almost certainly help."
        }
      ]}
      caseStudy={
        <>
        {/* Sits directly after the pine / sandy-ground sections. The caption says
            "dismantling ... from the top down" rather than "topping" on purpose:
            the trimming page states flatly that we do not top trees, and reusing
            that word here for a completely different operation would read as a
            contradiction. Do not reintroduce it. */}
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
              thumbnail="/images/video-spider-lift-loblolly-jacksonville-nc-480.jpg"
              title="Our spider lift dismantling a loblolly pine from the top down between homes — no crane, no torn-up yard."
              caption="Our spider lift dismantling a loblolly pine from the top down between homes — no crane, no torn-up yard."
            />
          </div>
        </section>

        <section className="py-16 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              The trees nobody else would touch — Gene Circle, Jacksonville
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Two removals at one Gene Circle address: a 105-foot tulip poplar eight feet from
              the house at $12,000&ndash;$13,000, and a 120-foot pine rigged out over a fence
              at $8,500.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              Neither was about size. Both were about whether anyone could do them at all — safely,
              in the space available, without dropping a hundred feet of timber onto a house.
              Here's what set each number.
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
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">The bee tree — $12,000&ndash;$13,000</h3>
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
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              No crane could reach it. So we did it the hard way — negative-rigging the entire tree down by rope, by hand, in bee suits, in 95-degree heat. Four to five days. Not one piece touched the house.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              Tulip poplar bark is part of why it took that long. It is smooth, with nothing for a rope to bite on, so a sling set around a cut log simply slides. We ended up cutting notches into the logs themselves to give the rigging rope something to hold — an extra operation on every single piece, sixty feet up, in bee suits.
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
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              We came back for the second one: a 120-foot pine wedged behind a shed with less than a foot of clearance and fences on three sides. It was, functionally, standing in a box. No crane access. We rigged it down over the fence and picked the pieces up out of the neighbor's yard, section by section, by rope. A day and a half — under two days, start to finish.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              The measurements are the part worth having, because they are what a price is actually built from. 120 feet tall. 28 inches across at the base, still 20 to 22 inches well up the stem — which is a lot of weight a long way off the ground. Four long limbs. Five separate rigging setups. One trailer of limbs, and logs cut at 10 to 12 feet because that was the longest piece that could be swung over the fence and landed without hitting anything.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Why these numbers matter to you</h3>
            {/* $3,000–$4,000 and $10,000 below are job-history / ladder-floor figures — keep consistent with PRICING.removal.exceptional ("$10,000+") */}
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              That same 120-foot pine in an open field is a one-day job at about $3,000–$4,000. Boxed in behind a shed with fences on three sides and no crane access, it ran $8,500 over two days — and it was worth every dollar, because the alternative was a company that couldn't do it dropping it on a house.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Our most complex removals start at $10,000 and go up from there — jobs with severe hazards, no equipment access, or rigging done entirely by hand. These are rare, but when they come, we're the crew that can do them safely, and we'll tell you exactly why the number is what it is before we start.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-semibold text-white">
              The tree doesn't set the price. The obstacles do.
            </p>
          </div>
        </section>

        {/* The red oak sits between the Gene Circle pair and the decay section
            because it makes the opposite point to Gene Circle and the same
            point as the timing section: the tree was the easy half. Nothing
            about this job was tight access — it was the stump that cost the
            day. */}
        <section className="py-16 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              A $6,500 red oak where the stump took longer than the tree
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Central Jacksonville, near the government buildings. A large red oak,
              removed for $6,500 — and the removal is not the interesting part of the
              invoice. The stump is.
            </p>
            <figure className="my-8">
              <picture>
                <source type="image/avif" srcSet={RED_OAK_STUMP.avifSrcSet} sizes={PHOTO_SIZES} />
                <img
                  src={RED_OAK_STUMP.src}
                  srcSet={RED_OAK_STUMP.srcSet}
                  sizes={PHOTO_SIZES}
                  alt="Freshly cut red oak stump roughly five feet across, with a crew member standing beside it for scale, central Jacksonville NC."
                  width={RED_OAK_STUMP.width}
                  height={RED_OAK_STUMP.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border-2 border-gray-800"
                />
              </picture>
              <figcaption className="mt-3 text-gray-400 text-base">
                The stump before grinding — about five feet across at the cut.
              </figcaption>
            </figure>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              That stump measured about five feet wide before the grinder touched it.
              Grinding it out meant taking roughly nine feet across in total, because a
              stump that size does not end where the trunk does — it runs out into large
              surface roots that have to be chased and ground individually. On an oak
              that age those roots are the real job.
            </p>
            <figure className="my-8">
              <picture>
                <source type="image/avif" srcSet={RED_OAK_GRINDING.avifSrcSet} sizes={PHOTO_SIZES} />
                <img
                  src={RED_OAK_GRINDING.src}
                  srcSet={RED_OAK_GRINDING.srcSet}
                  sizes={PHOTO_SIZES}
                  alt="Crew running a tracked stump grinder on the red oak stump, with cut log rounds stacked beside it and the house behind."
                  width={RED_OAK_GRINDING.width}
                  height={RED_OAK_GRINDING.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border-2 border-gray-800"
                />
              </picture>
              <figcaption className="mt-3 text-gray-400 text-base">
                Grinding out, and chasing the surface roots. This alone took the whole day.
              </figcaption>
            </figure>
            <p className="text-gray-300 leading-relaxed text-lg">
              The stump alone took all day. That is the thing worth carrying into your own
              estimate: when we say the grinder is the bottleneck, this is what we mean.
              The oak came down and got hauled; the stump is what decided the schedule.
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
              Coastal humidity makes internal decay a constant reality here rather than an occasional finding. In our experience in the local area, heartwood rot is the leading killer of hardwoods, and it works from the inside out. Alongside it we see dry rot, wet rot, and root diseases that attack the tree below grade where nothing is visible at all. That it is the leading killer <em>here</em> is our own tally from our own jobs and not a published finding; what is published, and linked below, is what the organisms behind it are and how they behave.
            </p>
            <figure className="my-8">
              <picture>
                <source type="image/avif" srcSet={SURF_CITY_HOLLOW.avifSrcSet} sizes={PHOTO_SIZES} />
                <img
                  src={SURF_CITY_HOLLOW.src}
                  srcSet={SURF_CITY_HOLLOW.srcSet}
                  sizes={PHOTO_SIZES}
                  alt="Cut face of an oak trunk in Surf City, NC, opened up to show hollow cavities where the heartwood has rotted away."
                  width={SURF_CITY_HOLLOW.width}
                  height={SURF_CITY_HOLLOW.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border-2 border-gray-800"
                />
              </picture>
              <figcaption className="mt-3 text-gray-400 text-base">
                An oak in Surf City, about a mile from the ocean. This is what the
                heartwood looked like once it was on the ground.
              </figcaption>
            </figure>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              That one is worth a second look, because it is the case this whole section
              is about. A hardwood roughly a mile from the Atlantic, carrying heavy
              heartwood rot, and none of it visible until the saw was in it. We cut it
              down and removed it.
            </p>
            <figure className="my-8">
              <picture>
                <source type="image/avif" srcSet={SURF_CITY_STUMP.avifSrcSet} sizes={PHOTO_SIZES} />
                <img
                  src={SURF_CITY_STUMP.src}
                  srcSet={SURF_CITY_STUMP.srcSet}
                  sizes={PHOTO_SIZES}
                  alt="The same Surf City oak after felling — a dark, hollowed core ringed by a thin shell of sound wood."
                  width={SURF_CITY_STUMP.width}
                  height={SURF_CITY_STUMP.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto rounded-lg border-2 border-gray-800"
                />
              </picture>
              <figcaption className="mt-3 text-gray-400 text-base">
                The shell is the only part that was still holding the tree up.
              </figcaption>
            </figure>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Two are worth knowing by name, and both are described by{' '}
              <a
                href="https://content.ces.ncsu.edu/common-disease-pests-of-oak-in-north-carolina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold"
              >
                NC State Extension
              </a>
              . <strong className="font-semibold text-white">Armillaria root rot</strong> announces itself if you know where to look: white fungal mycelial fans under the bark, rhizomorphs that look like black strings under the bark or around the base, and clusters of yellow-orange mushrooms near the tree. <strong className="font-semibold text-white">Biscogniauxia canker</strong> — still widely called Hypoxylon — is, in Extension's words, &ldquo;opportunistic, attacking trees already weakened or stressed by abiotic factors or other pests&rdquo;; around here that usually means drought or construction disturbance around the root zone.
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
              <li>
                <a
                  href="https://content.ces.ncsu.edu/pine-bark-beetles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
                >
                  NC State Extension — Pine Bark Beetles
                </a>
                <span className="block text-gray-400 text-base mt-1">
                  Kelly Oten, NC State University. The pitch-tube description quoted
                  above, and southern pine beetle as &ldquo;the worst pest of southern
                  forests&rdquo; against Ips engravers as &ldquo;secondary pests&rdquo;.
                  The two-year wave pattern, the &ldquo;many small holes&rdquo; sign and
                  the sawdust at the base are our own observations &mdash; Extension
                  attributes sawdust-filled galleries specifically to the black turpentine
                  beetle and gives no outbreak periodicity.
                </span>
              </li>
              <li>
                <a
                  href="https://content.ces.ncsu.edu/common-disease-pests-of-oak-in-north-carolina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
                >
                  NC State Extension — Common Disease Pests of Oak in North Carolina
                </a>
                <span className="block text-gray-400 text-base mt-1">
                  The Armillaria root rot signs quoted above — white mycelial fans,
                  black string-like rhizomorphs, clustered yellow-orange mushrooms — and
                  Biscogniauxia (Hypoxylon) canker as &ldquo;opportunistic, attacking trees
                  already weakened or stressed.&rdquo; What we say about how often we find
                  heartwood rot here is our own experience, not Extension&rsquo;s.
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
          /*
           * Was "a few hours to one day depending on the size and complexity",
           * which is the kind of answer that survives because nobody can prove
           * it wrong. Split by the owner's actual tiers so it answers the
           * question, and so the stump — which is what really decides the
           * schedule — is in the answer rather than hidden in the prose.
           */
          question: "How long does tree removal take?",
          answer: "It depends on size, and on whether you are grinding the stump. A small tree in an open yard is about 3 hours including cleanup. A single tree with no grinding is often a same-day job whatever its size. A big pine — 80 to 90 feet, two and a half to three feet through — runs 1 to 1.5 days. A massive pine, or one hard against a structure where every piece has to be rigged, runs 1.5 to 2 days. The stump is usually what pushes a job into a second day: an ordinary one is about an hour and a half of grinding, a big one 3 to 4 hours, and on the large stumps there is often another half-day after that to scrape up and haul the grindings."
        },
        {
          question: "Is tree removal dangerous?",
          answer: "Yes, tree removal can be hazardous without proper equipment and experience. That's why it's best handled by trained professionals."
        },
        {
          question: "Is a free estimate the same as a tree inspection?",
          answer: `No, and the difference is worth knowing. If you are considering work — a removal, a trim, a stump — we come out, look at it and price it for free, with no obligation. A standalone arborist health and risk assessment is a different service and costs ${PRICING.inspection.assessment}, covering ${PRICING.inspection.assessmentScope} and stretching to ${PRICING.inspection.assessmentMaxTrees} on one visit. You are paying for a considered written opinion on whether your trees are safe and what they need, including the possibility that the answer is to leave them alone.`,
          link: { href: "/resistograph-tree-testing-jacksonville-nc", label: "What a paid assessment includes, and what testing costs →" }
        }
      ]}
      gallery={{
        heading: "On the job in Onslow County",
        images: [
          {
            ...TALL_PINES_OVER_HOUSES,
            alt: "Tall pines standing directly over single-storey houses in an Onslow County neighborhood, with a lift staged between them.",
            caption: "Pines like these are why position prices a job, not height.",
          },
          {
            ...CLIMBER_ASCENDING,
            alt: "A climber part-way up a limbed trunk on rope, with a groundman tending the line below.",
            caption: "Going up. The groundman runs the rope from below.",
          },
          {
            ...CLIMBER_TOPPING_PINE,
            alt: "A climber working the top of a pine with a crane boom brought in overhead.",
            caption: "Crane and climber together — the crane buys reach, not speed.",
          },
          {
            ...CLIMBER_TOPPED_TREE,
            alt: "A climber high in a partly topped tree, taking the spar down in sections.",
            caption: "Taking the spar down in sections, where nothing can be dropped.",
          },
          /* The two Richlands wind-cracked limb photographs moved to
             /pine-tree-problems-jacksonville-nc with the pine-health sections
             in Batch 5. They illustrate a canopy-inspection point, not a
             removal one, and this page needed the weight off. */
        ],
      }}
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
            href: "/neighbor-tree-problems-jacksonville-nc",
            label: "When it is the neighbor's tree",
            blurb: "Who can cut what, who pays when one falls, and whether we will work from next door — cited to North Carolina sources."
          },
          {
            href: "/spider-lift-tree-removal-jacksonville-nc",
            label: "Spider lift tree removal for backyards with no truck access",
            blurb: `Fits a ${EQUIPMENT.spiderLift.gate}, ${EQUIPMENT.spiderLift.platformHeight} platform with about ${EQUIPMENT.spiderLift.workingHeight} of working reach, and doesn't tear up the lawn.`
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
