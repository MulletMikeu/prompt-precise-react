import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import { BUSINESS, PRICING } from "../data/siteData";
import { PROSE } from "../data/homepageCopy";

/**
 * This page is the SERVICES HUB and nothing else.
 *
 * It used to be titled "Tree Services in Jacksonville, NC", which put it in
 * direct competition with the homepage — whose whole job is "tree service
 * jacksonville nc" — and with /tree-service-jacksonville-nc, which is the local
 * crew / trust hub. Three pages on one head term is two too many.
 *
 * So the geo is deliberately out of the title, the H1 and the description here.
 * This page exists to route people to the right service page and to be the honest
 * target of the "Services" breadcrumb; the homepage owns the head term and
 * /tree-service-jacksonville-nc owns the local-crew intent. Do not put
 * "Jacksonville" back in the title.
 */
/**
 * Head copy rewritten in Ship J. 1,195 impressions, ZERO clicks, position 28.8
 * over three months — the 4th-highest impression count on the site and the
 * worst conversion of any of them.
 *
 * The old description was a comma-list of ten offerings, which is the same
 * failure Ship I fixed on four other pages: nothing in it a reader could act
 * on, and nothing a competitor could not also write. The replacement sells the
 * one thing this page is for — deciding — and names three symptoms it actually
 * answers below, so the snippet and the landing section make the same promise.
 *
 * THE GEO STAYS OUT, per the standing ruling in the note above: the homepage
 * owns "tree service jacksonville nc" and /tree-service-jacksonville-nc owns
 * the local-crew intent. Ship I's template was "lead with the service plus
 * Jacksonville, NC" and it is deliberately NOT applied here — doing so would
 * re-create the three-pages-on-one-head-term problem that putting the geo in
 * this title caused in the first place. The title leads with the decision
 * instead, which is also the page's own first H2.
 *
 * The H1 is untouched, as in Ship I. "All Tree Services We Offer" is the
 * honest label for the tile grid and is already geo-free.
 */
const TITLE = "Which Tree Service Do You Need? | Godhans Tree Company";
const DESC = "Trimming keeps a tree, removal ends it, grinding cleans up after. Leaning trunk, limbs on the roof, mushrooms at the base — match the symptom to the job.";
const CANONICAL = "https://godhans.com/services";

/**
 * Symptom -> service triage, the answer-first half of "Which service do you
 * actually need?".
 *
 * The prose below this already explained the three services well, but it was
 * organised by SERVICE — a reader arriving with "my tree is leaning" had to
 * read four paragraphs and do the mapping themselves. This table inverts it:
 * you start from what you can see from the driveway and it tells you the job.
 *
 * EVERY SYMPTOM HERE IS ALREADY STATED SOMEWHERE ON THIS SITE. Sources, so a
 * later edit can check rather than guess:
 *   lean after a storm, heaved soil, mushrooms at the base, big dead limbs,
 *   dead top on a pine, limbs on the roof  -> /residential-tree-service-* §6
 *   brown-out means dead, interior needle shed is normal                 -> /pine-tree-problems-*
 *   Armillaria: clustered yellow-orange mushrooms at the base            -> /tree-removal-* decay block, cited to NC State Extension
 *   split fork held by cabling rather than removed                       -> /tree-cabling-bracing-*
 *   hollow hardwood that still leafs out green, measured not guessed     -> /resistograph-*
 *   tree on the house, tarp the opening first                            -> /emergency-*
 *   a pile you already cut, priced by the trailer                        -> /debris-hauling-*
 * No new claim, no new figure.
 *
 * NO LINK TO EITHER A/B ARM. "A stump left behind" is deliberately absent even
 * though it is the obvious twelfth row: its answer is /stump-grinding-*, the
 * control arm, whose inbound link count is frozen in scripts/arm-baseline.json
 * until 2026-12-01. This page already links it from the tile grid and from the
 * prose below, and a third link would fail the build. The stump is a follow-on
 * to a removal rather than a symptom you diagnose, so the prose below is the
 * right place for it and it stays there. Add the row after the test reads out.
 */
const TRIAGE: { symptom: string; answer: string; href: string; label: string }[] = [
  {
    symptom: "A lean that appeared, or got worse, after a storm",
    answer: "Removal, usually — and the thing that decides it is whether the soil at the base has lifted",
    href: "/leaning-tree-dangerous-after-storm",
    label: "is a leaning tree dangerous?",
  },
  {
    symptom: "Cracked or heaved soil, or a lifting root plate, around the trunk",
    answer: "Removal. The part of the tree holding it up is the part that has moved",
    href: "/tree-removal-jacksonville-nc",
    label: "what makes a tree hazardous",
  },
  {
    symptom: "Clustered yellow-orange mushrooms at the base after rain",
    answer: "Removal. NC State Extension lists these among the signs of Armillaria root rot",
    href: "/tree-removal-jacksonville-nc",
    label: "how we tell if a tree is actually rotten",
  },
  {
    symptom: "A pine that has gone brown",
    answer: "Removal. A browned-out pine is already dead — there is no treatment, and that is the useful difference between pines and hardwoods",
    href: "/pine-tree-problems-jacksonville-nc",
    label: "is my pine dying or dangerous?",
  },
  {
    symptom: "A pine dropping interior needles while the tips stay green",
    answer: "Probably nothing. That is the normal heavy-shed cycle and it gets mistaken for a dying tree more than anything else we see",
    href: "/pine-tree-problems-jacksonville-nc",
    label: "brown-out versus a shed year",
  },
  {
    symptom: "Limbs resting on the roof, or rubbing the siding",
    answer: "Trimming. The tree is sound; the problem is its reach",
    href: "/tree-trimming-jacksonville-nc",
    label: "how we actually trim a tree",
  },
  {
    symptom: "Large dead limbs hanging in the canopy",
    answer: "Trimming. Deadwood comes out whatever else is decided — it is not a judgment call",
    href: "/tree-trimming-jacksonville-nc",
    label: "what a proper prune removes",
  },
  {
    symptom: "A split fork or weak union on a tree worth keeping",
    answer: `Cabling and bracing at ${PRICING.cabling.typical} for a typical mature tree, which is frequently cheaper than losing the tree`,
    href: "/tree-cabling-bracing-jacksonville-nc",
    label: "cabling and bracing",
  },
  {
    symptom: "Looks healthy, but you think it might be hollow",
    answer: "Testing before anyone decides. A hardwood can be hollow and still leaf out green, so this one gets measured rather than guessed at",
    href: "/resistograph-tree-testing-jacksonville-nc",
    label: "resistograph testing",
  },
  {
    symptom: "A tree already on the house, or across the drive",
    answer: "Emergency, not a removal. The first job is stopping the water getting in",
    href: "/emergency-tree-service-jacksonville-nc",
    label: "24/7 emergency tree service",
  },
  {
    symptom: "A pile of limbs you already cut yourself",
    answer: "Debris hauling, which prices on its own by the trailer rather than as part of a removal",
    href: "/debris-hauling-jacksonville-nc",
    label: "debris hauling",
  },
];

const SERVICES = [
  {
    name: "Tree Removal",
    href: "/tree-removal-jacksonville-nc",
    desc: "Safe, controlled removal of any size tree. Insured crew, full debris haul-away, and zero property damage.",
  },
  {
    name: "Tree Trimming",
    href: "/tree-trimming-jacksonville-nc",
    desc: "Crown thinning, deadwood removal, canopy raising, and precision pruning to keep your trees healthy.",
  },
  {
    name: "Stump Grinding",
    href: "/stump-grinding-jacksonville-nc",
    desc: "Stumps ground 10 inches below grade as standard. Grindings hauled away. Ready to replant or landscape — grinding is not full excavation.",
  },
  {
    name: "Emergency Tree Service",
    href: "/emergency-tree-service-jacksonville-nc",
    desc: "True 24/7 response for storm damage, fallen trees, and hazardous situations. We answer day and night.",
  },
  {
    name: "Storm Cleanup",
    href: "/storm-cleanup-jacksonville-nc",
    desc: "Fast debris removal after storms. Downed tree extraction, limb and brush cleanup, same or next day.",
  },
  {
    name: "Commercial Tree Service",
    href: "/commercial-tree-service-jacksonville-nc",
    desc: "HOAs, apartment complexes, churches, and storefronts. $2M liability, COI on request, scheduled around your hours.",
  },
  {
    name: "Residential Tree Service",
    href: "/residential-tree-service-jacksonville-nc",
    desc: "Homeowner tree work with the lawn, fence, driveway, and septic field protected — and every stick hauled away.",
  },
  {
    name: "Debris Hauling",
    href: "/debris-hauling-jacksonville-nc",
    desc: "Organic debris only — trees, brush, leaves. Already cut it yourself? We load and haul, priced by the trailer.",
  },
  {
    name: "Resistograph Tree Testing",
    href: "/resistograph-tree-testing-jacksonville-nc",
    desc: "Measures internal decay in a standing trunk, so a sound hardwood does not get removed on somebody's guess.",
  },
  {
    name: "Tree Cabling & Bracing",
    href: "/tree-cabling-bracing-jacksonville-nc",
    desc: "Support hardware for a split fork or weak union — steel or non-invasive synthetic, installed on trees worth keeping.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Helmet>

      <main id="main-content" className="pt-20">
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--red-text)", letterSpacing: "0.12em" }}>What We Do</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">All Tree Services We Offer</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
              Full-service tree care for residential and commercial properties across Jacksonville, NC and Onslow County. From routine trimming to complex emergency removals — we handle it all.
            </p>
          </div>
        </section>

        {/* Triage first, tiles second.
            This section used to sit BELOW the ten service tiles, which meant the
            page opened with a menu for a reader who does not yet know which item
            to pick — and it is the only part of this page that answers a
            question rather than listing an offering. It leads now, and it
            carries in-prose links to the pages it names. */}
        <section className="py-16" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-4">Which service do you actually need?</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              Trimming keeps a tree, removal ends it, and grinding cleans up after removal. Most
              people call us knowing something is wrong with a tree and not knowing which of those
              three fixes it, so start from what you can see from the driveway.
            </p>

            {/* Ship J: the symptom table. See the note on TRIAGE above for where
                every symptom already appears on the site, and for why "a stump
                left behind" is not a row. A <dl> rather than a table because
                these are term/definition pairs, not tabular data — it reads
                correctly in a screen reader and needs no column headers. */}
            <dl className="mb-8 divide-y" style={{ borderColor: "#2A2A2A" }}>
              {TRIAGE.map((row) => (
                <div key={row.symptom + row.href} className="py-4">
                  <dt className="text-base font-semibold text-white">{row.symptom}</dt>
                  <dd className="text-base leading-relaxed mt-1" style={{ color: "#C8C8C2" }}>
                    {row.answer}.{' '}
                    <Link
                      to={row.href}
                      className="font-semibold underline underline-offset-2"
                      style={{ color: "var(--red-text)" }}
                    >
                      {row.label}
                    </Link>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              The longer version of the same three choices, and why species decides more of it than
              size does:
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              <Link to="/tree-trimming-jacksonville-nc" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>Trimming</Link>{' '}
              is the right call when the tree is structurally sound and the problem is its shape or
              its reach — limbs over the roof, deadwood in the canopy, growth into power lines, or
              the clearance an insurance carrier is asking for. Species matters here. Oaks respond
              well to a hard prune and fill back in, which is why a good crew will try to save one
              before removing it. If the weak point is a split fork rather than the shape,{' '}
              <Link to="/tree-cabling-bracing-jacksonville-nc" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>cabling and bracing</Link>{' '}
              runs {PRICING.cabling.typical} and is often the cheaper answer than losing the tree.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              <Link to="/tree-removal-jacksonville-nc" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>Removal</Link>{' '}
              is the call when the structure itself is the problem: a dead or dying tree, a lean
              that appeared after a storm, a lifted root plate, or a species that simply can't be
              pruned out of trouble. Pines and sweetgums land here most often — long, heavy limbs
              and few safe pruning options. What it costs depends far more on position than size,
              and the{' '}
              <Link to="/tree-removal-cost-north-carolina" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>full price bands are here</Link>.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              <Link to="/stump-grinding-jacksonville-nc" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>Stump grinding</Link>{' '}
              is the follow-on. It's what makes the spot usable again — ready for sod, concrete, or
              a replant — rather than a hole in the yard you mow around.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              The borderline cases are the ones worth paying attention to: a mature tree that looks
              fine but might be hollow. That's what our{' '}
              <Link to="/resistograph-tree-testing-jacksonville-nc" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>resistograph</Link>{' '}
              is for. It drills a fine needle through the standing trunk and records the wood's
              density, so the remove-or-keep decision comes from a reading instead of an opinion.
              It condemns trees that look healthy from the driveway, and just as often it saves one
              that a less-equipped crew would have quoted for removal.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#C8C8C2" }}>
              {PROSE.financing}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>
              Not sure which one you're looking at? That's what the free estimate is for — we'll
              tell you if a tree can be kept. If you want to vet us first, the{' '}
              <Link to="/tree-service-jacksonville-nc" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>eight questions to ask before hiring anyone</Link>{' '}
              are on our Jacksonville page, and our{' '}
              {/* Ship J: was a hardcoded "27 Google reviews" — the one place on the
                  site that retyped the count instead of reading BUSINESS.reviewCount,
                  which siteData's own note forbids and README lists as the single
                  source. It would have still said 27 after the count moved to 30. */}
              <Link to="/reviews" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>{BUSINESS.reviewCount} Google reviews</Link>{' '}
              are worth reading before you call. Longer pieces live in our{' '}
              <Link to="/blog" className="font-semibold underline underline-offset-2" style={{ color: "var(--red-text)" }}>tree care guides</Link>.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "#2A2A2A" }}>
              {SERVICES.map((service) => (
                <article key={service.href} className="p-8 flex flex-col gap-4" style={{ background: "#0A0A0A" }}>
                  <h2 className="text-xl font-bold text-white">{service.name}</h2>
                  <p className="text-base leading-relaxed flex-1" style={{ color: "#C8C8C2" }}>{service.desc}</p>
                  <Link
                    to={service.href}
                    aria-label={`Learn more about ${service.name}`}
                    className="text-sm font-bold uppercase tracking-widest self-start"
                    style={{ color: "var(--red-text)" }}
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-red">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Get a Free Estimate on Any Service</h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Veteran-owned, fully insured, and available 24/7 for emergencies in Jacksonville, NC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="font-bold uppercase tracking-wide px-8 py-4 text-center transition-colors bg-white text-brand-red">Request Estimate</Link>
              <a href={BUSINESS.phoneHref} className="font-bold uppercase tracking-wide px-8 py-4 text-center border-2 border-white text-white">{BUSINESS.phone}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
