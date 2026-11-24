import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { BUSINESS, CREDENTIAL } from '../data/siteData';

/**
 * /commercial-tree-service-jacksonville-nc — rewritten in Ship M (2026-11-21)
 * for HOAs, property managers, apartment complexes, churches and businesses
 * ONLY (owner ruling). Homeowner intent is the homepage's now: the residential
 * page was folded into "/" and 301s there.
 *
 * What came out, on purpose: the restated residential price bands (the
 * $800 minimum / "most jobs run" figures) and the "$200 quick cuts" mobilization
 * story, which are homeowner copy. This page states no prices; commercial work
 * is quoted against the whole scope after a walk of the property.
 *
 * COPY RULE: every claim here was already on this page, the emergency page,
 * the spider-lift/resistograph pages or in siteData (CREDENTIAL). Nothing was
 * invented. "Lot clearing" is deliberately written as tree removal along
 * perimeters and lot edges: land clearing was purged from the site on
 * 2026-07-15 because the business does not offer it (docs/redirects.md,
 * Block 4), so grading and site prep are stated as NOT offered.
 *
 * In-prose links go through ServicePage's `sectionBodies` slot: same copy as
 * the `text` entry each one replaces, with anchors added. Edit both or neither.
 */
const LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

const PROPERTY_TYPES =
  "We work across the property types that make up most of Jacksonville's commercial base:\n\n" +
  "• HOAs and residential communities — common areas, entrance landscaping, and the trees along shared drives that no single homeowner owns\n" +
  "• Property managers — one point of contact for several sites, with the paperwork your owners expect\n" +
  "• Apartment complexes — canopy over parking, limbs on roofs and gutters, and hazard trees near units\n" +
  "• Churches — lot and lawn work scheduled around services and midweek events\n" +
  "• Businesses — storefronts and strip centers, office and industrial parks: sightline pruning, canopy raising over walkways, perimeter work and storm cleanup that reopens access fast";

const HAZARD_TEXT =
  "A hazardous tree is one that is likely to fail and has something worth hitting underneath it. On a commercial property there is almost always something underneath: parked cars, a roofline, a walkway, a dumpster pad, a building entrance.\n\n" +
  "The usual suspects are the same ones we see on houses, multiplied by the number of trees on the property: a tree leaning at a new angle after a storm, soil cracked or heaved around the base, large dead limbs hanging over parking, and a decayed trunk that still leafs out green.\n\n" +
  "That last one is where guessing gets expensive in both directions. We measure it. Our resistograph drills a fine needle through the standing trunk and records the wood's density, which tells us whether we are looking at a removal that has to happen now or a sound tree that can stay. On a property with a hundred trees, that is the difference between a defensible decision and a guess you have to explain to a board.\n\n" +
  "A tree that gets flagged in March and removed on a normal weekday costs less than the same tree coming down across a parking lot in September.";

const SECTION_BODIES = {
  // 2 "Hazard Trees Near Parking and Buildings" — names the resistograph.
  2: (
    <>
      {"A hazardous tree is one that is likely to fail and has something worth hitting underneath it. On a commercial property there is almost always something underneath: parked cars, a roofline, a walkway, a dumpster pad, a building entrance.\n\nThe usual suspects are the same ones we see on houses, multiplied by the number of trees on the property: a tree "}
      <Link to="/leaning-tree-dangerous-after-storm" className={LINK}>leaning at a new angle after a storm</Link>
      {", soil cracked or heaved around the base, large dead limbs hanging over parking, and a decayed trunk that still leafs out green.\n\nThat last one is where guessing gets expensive in both directions. We measure it. Our "}
      <Link to="/resistograph-tree-testing-jacksonville-nc" className={LINK}>resistograph</Link>
      {" drills a fine needle through the standing trunk and records the wood's density, which tells us whether we are looking at a removal that has to happen now or a sound tree that can stay. On a property with a hundred trees, that is the difference between a defensible decision and a guess you have to explain to a board.\n\nA tree that gets flagged in March and removed on a normal weekday costs less than the same tree coming down across a parking lot in September."}
    </>
  ),
  // 5 "What Makes Tight Commercial Lots Different?" — the lift and the
  // near-structure rigging.
  5: (
    <>
      {"Commercial lots are frequently harder to work than residential yards, because everything is paved, occupied, or both.\n\nA crane needs setup room and often a lane closure. A bucket truck weighs 25,000–40,000 lbs, which is a real question mark over a parking deck, a drainage structure, or a freshly sealed lot. Our "}
      <Link to="/spider-lift-tree-removal-jacksonville-nc" className={LINK}>spider lift</Link>
      {" solves most of it: it collapses to about 36 inches to pass through a service gate, rolls on rubber tracks that spread the load instead of concentrating it, and reaches 90 feet of working height — so we can take limbs off a roofline or clear a canopy over parking without staging a crane in your customers' way. Where a tree is hard against a building, we take it down the way we handle any "}
      <Link to="/tree-removal-near-house-jacksonville-nc" className={LINK}>removal close to a structure</Link>
      {": in sections, each one roped and lowered under control.\n\nThat is usually the difference between a job done on a Tuesday morning and a job that needs a road closure permit."}
    </>
  ),
  // 6 "Storm Response for Properties" — names the emergency page, which also
  // carries the insurance account since Ship M.
  6: (
    <>
      {"Storms don't wait for business hours, and a commercial property has more exposure than a house does — more roof, more parking, more people who need to get in the next morning.\n\nWe run "}
      <Link to="/emergency-tree-service-jacksonville-nc" className={LINK}>24/7 emergency response and storm cleanup</Link>
      {` across Jacksonville and Onslow County, and commercial sites blocking access or threatening a structure get prioritized. On a tree-on-the-building call the first job is getting the weight off and the opening covered. We document damage with photographs before work begins and provide itemized invoices, which is what your carrier and your ownership group are both going to ask for.\n\nThen comes the cleanup that gets a property open again: drives and access cleared first, then debris chipped and hauled.\n\nIf you manage multiple properties, one call to ${BUSINESS.phone} reaches the people who will actually be on site — not a national dispatcher routing your storm to whoever answers.`}
    </>
  ),
  // 7 "Insurance, COI and Vendor Paperwork" — the SoS registry is the thing a
  // procurement reviewer would actually want to click.
  7: (
    <>
      {`We carry ${CREDENTIAL.equipmentInsurance('property')}\n\nThat second half is the part that matters on a commercial site. Plenty of contractors carry a general liability policy and stop there, leaving the equipment off it. If an uninsured machine damages a building, a parking structure, or a tenant's vehicle, the property owner is the one holding the bill.\n\nA certificate of insurance is available on request, and we can name your entity as certificate holder or additional insured if your onboarding process requires it. Tell us what your packet needs — COI, W-9, references, proof of workers' comp — and we'll get it back to you rather than making you chase it.\n\nWe are also bondable for commercial work, and `}
      {CREDENTIAL.legalName}
      {` is registered and active with the `}
      <a
        href="https://www.sosnc.gov/online_services/search/by_title/_Business_Registration"
        target="_blank"
        rel="noopener noreferrer"
        className={LINK}
      >
        North Carolina Secretary of State business registry
      </a>
      {` (SoSID ${CREDENTIAL.sosId}). Search the registry for the legal name on your quote; if it does not match, that is worth a phone call before anyone starts cutting. Vendor onboarding is a paperwork problem, not a tree problem, and it shouldn't be the reason a hazard sits on your property for another three weeks.`}
    </>
  ),
};

export default function CommercialTreeService() {
  return (
    <ServicePage
      sectionBodies={SECTION_BODIES}
      title="Commercial Tree Service for HOAs, Property Managers & Businesses in Jacksonville, NC"
      metaTitle="Commercial Tree Service Jacksonville NC | HOAs | Godhans"
      subtitle="HOAs, Property Managers, Apartment Complexes, Churches & Businesses"
      slug="commercial-tree-service-jacksonville-nc"
      faqPosition="early"
      credentialBlock
      // Commercial buyers may not own a home on the site at all — the shared
      // insurance sentence reads "damages your property" here.
      credentialDamageNoun="property"
      description="Commercial tree service in Jacksonville, NC for HOAs, property managers, apartments, churches and businesses. COI on request, work around your hours."
      ctaText="Call for a Commercial Estimate"
      quickAnswer="Godhans Tree Company handles commercial tree work across Jacksonville and Onslow County for HOAs, property managers, apartment complexes, churches and businesses: hazard trees near parking and buildings, sign and roofline clearance, perimeter work, recurring maintenance and 24/7 storm response. We carry $2M general liability with every machine individually insured, provide certificates of insurance for vendor onboarding, and schedule around your operations rather than through them."
      sections={[
        {
          heading: "Who We Work For",
          text: `Commercial tree work is the same core jobs as any other — removal, trimming and stump grinding — done on a property that has tenants, customers, or a congregation on it.\n\nThe difference is rarely the tree. It's everything around the tree: parking that has to stay open, a walkway that can't be blocked during business hours, a tenant whose patio sits under the drop zone, and a manager who needs paperwork before a crew sets foot on the site.\n\n${PROPERTY_TYPES}`
        },
        {
          heading: "Can You Work Around Our Business Hours?",
          text: "Yes, and on most commercial jobs we plan the schedule before we plan the rigging.\n\nA storefront doesn't want a chipper running at 11am on a Saturday. An apartment complex doesn't want a lane of parking closed at 6pm when residents are coming home. A church needs the lot clear by Sunday morning and usually by Wednesday evening too. So we schedule against those windows — early mornings, weekdays, off-peak hours, or whatever the property's actual rhythm is.\n\nFor multi-day jobs, we also stage the work so the site is safe and passable at the end of every day. Cones and caution tape are not a plan; leaving a property in a condition your tenants can use is."
        },
        {
          heading: "Hazard Trees Near Parking and Buildings",
          text: HAZARD_TEXT
        },
        {
          heading: "Sign, Sightline and Building Clearance",
          text: "Most of the routine commercial work we do is clearance rather than removal: keeping trees healthy and out of the way of the things a property depends on.\n\n• Sightline pruning at entrances and signage, so signs and entrances stay visible\n• Canopy raising over walkways and parking, so people and vehicles pass under it rather than through it\n• Limbs off rooflines and gutters\n• Deadwood out of the canopy over anywhere people park, walk or gather\n\nDone on a schedule, this is the cheapest tree work a property buys. Done after a complaint or a storm, it costs more and arrives at a worse time."
        },
        {
          heading: "Perimeter and Lot-Edge Tree Clearing",
          text: "Office and industrial parks, church grounds and larger HOA properties often have a tree line along the perimeter or a lot edge that has grown into the property: limbs over fences and drives, volunteer trees along the back of a lot, and right-of-way trimming that has been put off.\n\nWe take those trees down, grind the stumps, and haul everything we generate. This is tree work, not land clearing — grading, grubbing and site preparation are not something we offer, and if your project needs them we will tell you so at the walk rather than after."
        },
        {
          heading: "What Makes Tight Commercial Lots Different?",
          text: "Commercial lots are frequently harder to work than residential yards, because everything is paved, occupied, or both.\n\nA crane needs setup room and often a lane closure. A bucket truck weighs 25,000–40,000 lbs, which is a real question mark over a parking deck, a drainage structure, or a freshly sealed lot. Our spider lift solves most of it: it collapses to about 36 inches to pass through a service gate, rolls on rubber tracks that spread the load instead of concentrating it, and reaches 90 feet of working height — so we can take limbs off a roofline or clear a canopy over parking without staging a crane in your customers' way. Where a tree is hard against a building, we take it down the way we handle any removal close to a structure: in sections, each one roped and lowered under control.\n\nThat is usually the difference between a job done on a Tuesday morning and a job that needs a road closure permit."
        },
        {
          heading: "Storm Response for Properties",
          text: `Storms don't wait for business hours, and a commercial property has more exposure than a house does — more roof, more parking, more people who need to get in the next morning.\n\nWe run 24/7 emergency response and storm cleanup across Jacksonville and Onslow County, and commercial sites blocking access or threatening a structure get prioritized. On a tree-on-the-building call the first job is getting the weight off and the opening covered. We document damage with photographs before work begins and provide itemized invoices, which is what your carrier and your ownership group are both going to ask for.\n\nThen comes the cleanup that gets a property open again: drives and access cleared first, then debris chipped and hauled.\n\nIf you manage multiple properties, one call to ${BUSINESS.phone} reaches the people who will actually be on site — not a national dispatcher routing your storm to whoever answers.`
        },
        {
          heading: "Insurance, COI and Vendor Paperwork",
          text: `We carry ${CREDENTIAL.equipmentInsurance('property')}\n\nThat second half is the part that matters on a commercial site. Plenty of contractors carry a general liability policy and stop there, leaving the equipment off it. If an uninsured machine damages a building, a parking structure, or a tenant's vehicle, the property owner is the one holding the bill.\n\nA certificate of insurance is available on request, and we can name your entity as certificate holder or additional insured if your onboarding process requires it. Tell us what your packet needs — COI, W-9, references, proof of workers' comp — and we'll get it back to you rather than making you chase it.\n\nWe are also bondable for commercial work, and ${CREDENTIAL.legalName} is registered and active with the North Carolina Secretary of State (SoSID ${CREDENTIAL.sosId}). Vendor onboarding is a paperwork problem, not a tree problem, and it shouldn't be the reason a hazard sits on your property for another three weeks.`
        },
        {
          heading: "Do You Offer Recurring Maintenance Contracts?",
          text: "Yes. Recurring maintenance is usually the cheapest way for a commercial property to handle trees, because it converts emergencies into scheduled work.\n\nA maintenance agreement typically covers a scheduled walk of the property, deadwood and hazard-limb removal, canopy raising over walkways and parking, sightline pruning at entrances and signage, and a written note of anything trending toward a removal. That written note is also what a board or an ownership group wants to see when it is deciding what to budget for next year.\n\nWe can price these annually, semiannually, or on whatever cycle matches your budget calendar."
        },
        {
          heading: "How Is Commercial Work Priced?",
          text: "Against the scope as a whole, after a walk of the property — not tree by tree off a price list.\n\nGetting a full crew and equipment to a site is the biggest fixed cost of any job. On a commercial contract that fixed cost gets spread: once the crew and equipment are staged on your property, each additional tree costs materially less than it would as a separate visit. A twelve-tree canopy-raising round across an apartment complex is not twelve individual jobs, and we don't quote it as though it were.\n\nYou get a written scope and a written number, and if something changes once the work starts — a trunk that turns out to be hollow, a limb over a structure that was not visible from the ground — you hear about it before anything is cut, not on the invoice."
        }
      ]}
      /* Section indices: 0 who · 1 hours · 2 hazard · 3 clearance ·
         4 perimeter · 5 tight lots · 6 storm · 7 insurance/COI ·
         8 maintenance · 9 pricing. SECTION_BODIES keys above follow these. */
      guides={{
        heading: "Guides",
        intro: "Useful background when you're scoping commercial work:",
        links: [
          {
            href: "/tree-removal-near-house-jacksonville-nc",
            label: "Tree removal in tight spaces",
            blurb: "How we work sites with no crane room, paved surfaces, and structures on every side."
          },
          {
            href: "/spider-lift-tree-removal-jacksonville-nc",
            label: "Spider lift tree removal",
            blurb: "The machine that gets through a service gate and off your parking lot."
          },
          {
            href: "/resistograph-tree-testing-jacksonville-nc",
            label: "Resistograph tree testing",
            blurb: "Measuring how much sound wood is left in a trunk before deciding whether it stays."
          }
        ]
      }}
      faqs={[
        {
          question: "Do you work with HOAs?",
          answer: "Yes. HOAs and residential community associations are a large part of our commercial work — common areas, entrance landscaping, shared drives, and the hazard trees that fall between individual lots. We can present a scope and price to a board before a vote, and complete vendor onboarding paperwork for your management company."
        },
        {
          question: "Can you provide a certificate of insurance?",
          answer: `Yes, a certificate of insurance is available on request, and we can name your entity as certificate holder or additional insured. We carry $2M general liability and workers' comp, and every machine is individually insured. ${CREDENTIAL.legalName} is registered and active with the NC Secretary of State (SoSID ${CREDENTIAL.sosId}).`
        },
        {
          question: "Do you offer maintenance contracts?",
          answer: "Yes. Recurring maintenance agreements cover scheduled property walks, deadwood and hazard-limb removal, canopy raising over walkways and parking, and sightline pruning — priced annually, semiannually, or on whatever cycle fits your budget calendar. Scheduled work is consistently cheaper than emergency work."
        },
        {
          question: "Can you work outside our business hours?",
          answer: "Yes. We schedule commercial jobs around your operating hours — early mornings, weekdays, or off-peak windows — and stage multi-day work so the property is safe and passable at the end of each day."
        },
        {
          question: "Do you do land clearing?",
          answer: "No. We remove trees — including tree lines along perimeters and lot edges — grind the stumps and haul everything away, but grading, grubbing and site preparation are not services we offer. If your project needs them, we will say so at the walk."
        },
        {
          question: "Who is liable if something is damaged on our property?",
          answer: "We are, and we're insured for it. $2M general liability plus workers' comp covers the crew and the work, and every machine is separately on the policy. If a contractor's equipment isn't listed on their policy and it damages your building, the property owner ends up holding that bill — which is exactly why we ask you to check the equipment line on any tree contractor's COI, ours included."
        }
      ]}
      finalCta={{
        heading: "Get a Commercial Tree Service Quote",
        text: "Tell us the property and the scope. We'll walk it, price it, and send whatever your onboarding process needs — certificate of insurance included.",
        buttonText: "Call Now"
      }}
    />
  );
}
