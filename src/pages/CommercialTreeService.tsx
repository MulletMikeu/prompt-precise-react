import ServicePage from './ServicePage';
import { BUSINESS, CREDENTIAL, PRICING } from '../data/siteData';

export default function CommercialTreeService() {
  return (
    <ServicePage
      title="Commercial Tree Service in Jacksonville, NC"
      metaTitle="Commercial Tree Service in Jacksonville, NC | Godhans Tree Company"
      subtitle="HOAs, Apartment Complexes, Churches, Storefronts & Property Managers"
      slug="commercial-tree-service-jacksonville-nc"
      credentialBlock
      // Commercial buyers may not own a home on the site at all — the shared
      // insurance sentence reads "damages your property" here.
      credentialDamageNoun="property"
      description="Commercial tree service in Jacksonville, NC for HOAs, apartment complexes, churches, and storefronts. $2M liability, COI on request, work scheduled around your hours."
      ctaText="Call for a Commercial Estimate"
      quickAnswer="Godhans Tree Company handles commercial tree removal, trimming, and stump grinding across Jacksonville and Onslow County — for HOAs, apartment complexes, churches, retail storefronts, and the property managers who answer for all of them. We carry $2M general liability with every machine individually insured, provide certificates of insurance for vendor onboarding, and schedule around your business hours rather than through them."
      sections={[
        {
          heading: "What Does Commercial Tree Service Cover?",
          text: "Commercial tree service covers the same three core jobs as residential work — removal, trimming, and stump grinding — but priced and scheduled around a property that has tenants, customers, or a congregation on it.\n\nThe difference is rarely the tree. It's everything around the tree: parking that has to stay open, a walkway that can't be blocked during business hours, a tenant whose patio sits under the drop zone, and a property manager who needs paperwork before a crew sets foot on the site.\n\nWe work across the property types that make up most of Jacksonville's commercial base:\n\n• HOAs and residential communities — common areas, entrance landscaping, and the trees along shared drives that no single homeowner owns\n• Apartment complexes — canopy over parking, limbs on roofs and gutters, and hazard trees near units\n• Churches — lot and lawn work scheduled around services and midweek events\n• Retail storefronts and strip centers — sightline pruning, canopy raising over walkways, and storm cleanup that reopens access fast\n• Office and industrial parks — perimeter clearing, right-of-way trimming, and scheduled maintenance rounds"
        },
        {
          heading: "Are You Insured for Commercial Work?",
          text: `Yes — ${CREDENTIAL.equipmentInsurance('property')}\n\nThat second half is the part that matters on a commercial site. Plenty of contractors carry a general liability policy and stop there, leaving the equipment off it. If an uninsured machine damages a building, a parking structure, or a tenant's vehicle, the property owner is the one holding the bill. Ours is covered.\n\nWe are also bondable for commercial work, and Godhans LLC is registered and active with the North Carolina Secretary of State (SoSID ${CREDENTIAL.sosId}) — the two things a procurement process usually asks for after the COI.`
        },
        {
          heading: "Can You Provide a Certificate of Insurance for Vendor Onboarding?",
          text: "Yes. A certificate of insurance is available on request, and we can name your entity as certificate holder or additional insured if your onboarding process requires it.\n\nMost property management companies and HOA boards run new vendors through an approval step before any work is scheduled. Tell us what your packet needs — COI, W-9, references, proof of workers' comp — and we'll get it back to you rather than making you chase it. Vendor onboarding is a paperwork problem, not a tree problem, and it shouldn't be the reason a hazard sits on your property for another three weeks."
        },
        {
          heading: "Can You Work Around Our Business Hours?",
          text: "Yes, and on most commercial jobs we plan the schedule before we plan the rigging.\n\nA storefront doesn't want a chipper running at 11am on a Saturday. An apartment complex doesn't want a lane of parking closed at 6pm when residents are coming home. A church needs the lot clear by Sunday morning and usually by Wednesday evening too. So we schedule against those windows — early mornings, weekdays, off-peak hours, or whatever the property's actual rhythm is.\n\nFor multi-day jobs, we also stage the work so the site is safe and passable at the end of every day. Cones and caution tape are not a plan; leaving a property in a condition your tenants can use is."
        },
        {
          heading: "Do You Offer Recurring Maintenance Contracts?",
          text: "Yes. Recurring maintenance is usually the cheapest way for a commercial property to handle trees, because it converts emergencies into scheduled work.\n\nA maintenance agreement typically covers a scheduled walk of the property, deadwood and hazard-limb removal, canopy raising over walkways and parking, sightline pruning at entrances and signage, and a written note of anything trending toward a removal. That last part is what saves money — a tree that gets flagged in March and removed on a normal weekday costs less than the same tree coming down across a parking lot in September.\n\nWe can price these annually, semiannually, or on whatever cycle matches your budget calendar."
        },
        {
          heading: "How Do You Price Multi-Tree Commercial Contracts?",
          text: `Multi-tree work prices better per tree than one-off jobs, for the same reason stump grinding does: mobilization is the fixed cost.\n\n${PRICING.stories.mobilization}\n\nOn a commercial contract, that fixed cost gets spread. Once the crew and equipment are staged on your property, each additional tree costs materially less than it would as a separate visit. A twelve-tree canopy-raising round across an apartment complex is not twelve individual jobs, and we don't quote it as though it were.\n\nFor budgeting purposes, single-tree removals still start at an ${PRICING.removal.minimum} minimum with most running ${PRICING.removal.most}; contract work is quoted against the scope as a whole after a walk of the property.`
        },
        {
          heading: "What Makes Tight Commercial Lots Different?",
          text: "Commercial lots are frequently harder to work than residential yards, because everything is paved, occupied, or both.\n\nA crane needs setup room and often a lane closure. A bucket truck weighs 25,000–40,000 lbs, which is a real question mark over a parking deck, a drainage structure, or a freshly sealed lot. Our spider lift solves most of it: it collapses to about 36 inches to pass through a service gate, rolls on rubber tracks that spread the load instead of concentrating it, and reaches 50+ feet of working height — so we can take limbs off a roofline or clear a canopy over parking without staging a crane in your customers' way.\n\nThat is usually the difference between a job done on a Tuesday morning and a job that needs a road closure permit."
        },
        {
          heading: "Commercial Storm Response in Onslow County",
          text: `Storms don't wait for business hours, and a commercial property has more exposure than a house does — more roof, more parking, more people who need to get in the next morning.\n\nWe run 24/7 emergency response across Jacksonville and Onslow County, and commercial sites blocking access or threatening a structure get prioritized. We document damage with photographs before work begins and provide itemized invoices, which is what your carrier and your ownership group are both going to ask for.\n\nIf you manage multiple properties, one call to ${BUSINESS.phone} reaches the people who will actually be on site — not a national dispatcher routing your storm to whoever answers.`
        }
      ]}
      guides={{
        heading: "Guides & Pricing",
        intro: "Useful background when you're scoping or budgeting commercial work:",
        links: [
          {
            href: "/tree-removal-cost-north-carolina",
            label: "How much tree removal costs in North Carolina",
            blurb: "Full price ranges and the factors that move them — useful for building a budget line."
          },
          {
            href: "/tree-removal-tight-spaces-jacksonville-nc",
            label: "Tree removal in tight spaces",
            blurb: "How we work sites with no crane room, paved surfaces, and structures on every side."
          },
          {
            href: "/spider-lift-tree-removal-jacksonville-nc",
            label: "Spider lift tree removal",
            blurb: "The machine that gets through a service gate and off your parking lot."
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
          answer: `Yes, a certificate of insurance is available on request, and we can name your entity as certificate holder or additional insured. We carry $2M general liability and workers' comp, and every machine is individually insured. Godhans LLC is registered and active with the NC Secretary of State (SoSID ${CREDENTIAL.sosId}).`
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
          question: "Who is liable if something is damaged on our property?",
          answer: "We are, and we're insured for it. $2M general liability plus workers' comp covers the crew and the work, and every machine is separately on the policy. If a contractor's equipment isn't listed on their policy and it damages your building, the property owner ends up holding that bill — which is exactly why we ask you to check the equipment line on any tree contractor's COI, ours included."
        }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Get a Commercial Tree Service Quote",
        text: "Tell us the property and the scope. We'll walk it, price it, and send whatever your onboarding process needs — certificate of insurance included.",
        buttonText: "Call Now"
      }}
    />
  );
}
