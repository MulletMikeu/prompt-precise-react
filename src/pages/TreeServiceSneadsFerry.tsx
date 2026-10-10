import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { PRICING, BUSINESS } from '../data/siteData';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

export default function TreeServiceSneadsFerry() {
  return (
    <ServicePage
      title="Tree Service in Sneads Ferry, NC"
      subtitle="Trusted Tree Removal, Trimming & Stump Grinding in Sneads Ferry"
      slug="tree-service-sneads-ferry-nc"
      faqPosition="early"
      credentialBlock
      description="Tree service in Sneads Ferry, NC: removal, trimming, stump grinding, and 24/7 coastal storm cleanup. Free estimates from Godhans."
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Sneads Ferry homeowners face unique coastal challenges — high winds, salt air, and storm-prone trees. Godhans Tree Company provides expert tree removal, trimming, stump grinding, and emergency storm cleanup throughout Sneads Ferry and the Topsail area, with fast response times and free estimates."
      sectionLinks={{
        0: { href: "/do-you-need-a-permit-to-remove-a-tree-nc", label: "CAMA shoreline rules, wetlands and tree permits in Onslow County" },
      }}
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. This page had ZERO
       * editorial outbound links before batch 1 — every link on it was a templated
       * band or a service card. Same copy as the `text` entry it replaces, plus the
       * local detail that makes each anchor relevant. Edit both or neither.
       */
      sectionBodies={{
        2: (
          <>
            {"Coastal storms, salt air and sandy soil are the three things that decide tree work out here, and we have been working it since 2013. Sandy ground carries weight right up until it does not — see "}
            <Link to="/storm-cleanup-jacksonville-nc" className={PROSE_LINK}>what insurance covers after a storm</Link>
            {", "}
            <Link to="/tree-removal-cost-north-carolina" className={PROSE_LINK}>what a removal costs here</Link>
            {" and "}
            <Link to="/spider-lift-tree-removal-jacksonville-nc" className={PROSE_LINK}>the lift that stays off a soft lawn</Link>
            {"."}
          </>
        ),
      }}
      sections={[
        {
          heading: "Local Tree Experts Serving Sneads Ferry, NC",
          text: "Sneads Ferry's coastal location means trees take a beating from hurricanes, nor'easters, and constant salt-laden winds off the New River Inlet. Our crews understand how coastal pines, live oaks, and palms behave under storm stress and how to remove or maintain them safely.\n\nFrom waterfront properties to inland subdivisions, we handle every job with the right equipment and proper insurance — protecting your home, deck, fence, and landscaping.\n\nOn waterfront lots it's worth knowing where the shoreline rules start and stop before any clearing — cutting a tree and clearing ground are treated very differently this close to the water."
        },
        {
          heading: "Complete Tree Services in Sneads Ferry",
          text: "Our services include:\n\n• Tree Removal — large pines, oaks, and storm-damaged trees\n• Tree Trimming & Pruning — health, safety, and view clearing\n• Stump Grinding — flush with grade, debris hauled off\n• 24/7 Emergency Tree Service — fallen trees on homes, vehicles, or roads"
        },
        {
          heading: "Why Sneads Ferry Homeowners Choose Godhans",
          text: "✔ Fast response across Sneads Ferry, North Topsail Beach, and Surf City\n✔ Right-sized equipment for tight coastal lots\n✔ Storm response prioritization for hurricane damage\n✔ Free, no-obligation estimates\n\nWe show up on time, work safely, and leave your property cleaner than we found it."
        }
      ]}
      faqs={[
        { question: "Do you service Sneads Ferry, NC for tree work?", answer: "Yes — we provide full tree services in Sneads Ferry including removal, trimming, stump grinding, and 24/7 emergency response." },
        { question: "Can you handle hurricane and storm-damaged trees?", answer: `Absolutely. Storm response is one of our specialties. Call ${BUSINESS.phone} anytime — we respond same-day to fallen trees on homes, vehicles, and roads in Sneads Ferry.` },
        { question: "How much does tree removal cost in Sneads Ferry?", answer: `${PRICING.removal.summary} We provide free on-site estimates with transparent, no-pressure pricing.` }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Schedule Tree Service in Sneads Ferry, NC",
        text: "Need professional tree service in Sneads Ferry? Contact Godhans today for a free estimate and fast, reliable coastal tree care.",
        buttonText: "Call Now"
      }}
    />
  );
}
