import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

export default function TreeServiceCampLejeune() {
  return (
    <ServicePage
      title="Tree Service in Camp Lejeune, NC"
      subtitle="Military-Friendly Tree Removal, Trimming & Stump Grinding"
      slug="tree-service-camp-lejeune-nc"
      faqPosition="early"
      credentialBlock
      description="Tree service for Camp Lejeune families: removal, trimming, stump grinding, and 24/7 storm cleanup. Military discounts and free estimates."
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Godhans Tree Company proudly serves Camp Lejeune military families and surrounding base housing communities with expert tree removal, trimming, stump grinding, and 24/7 emergency response. We offer military discounts, fast turnaround for PCS moves, and fully insured work that meets base property standards."
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. This page had ZERO
       * editorial outbound links before batch 1 — every link on it was a templated
       * band or a service card. Same copy as the `text` entry it replaces, plus the
       * local detail that makes each anchor relevant. Edit both or neither.
       */
      sectionBodies={{
        2: (
          <>
            {"We understand military life, and the paperwork that comes with it: proof of insurance for base housing or a landlord, a stump ground low enough for a move-out walkthrough, and a schedule that fits a PCS window rather than fighting it.\n\nWhat it costs is the same here as anywhere else in the county — see "}
            <Link to="/tree-removal-cost-north-carolina" className={PROSE_LINK}>the full price bands</Link>
            {", "}
            <Link to="/stump-grinding-jacksonville-nc" className={PROSE_LINK}>stump grinding before a walkthrough</Link>
            {" and "}
            <Link to="/tree-service-jacksonville-nc" className={PROSE_LINK}>how to verify a tree company in North Carolina</Link>
            {"."}
          </>
        ),
      }}
      sections={[
        {
          heading: "Tree Service for Camp Lejeune Military Families",
          text: "We understand military life — short timelines for PCS moves, base housing rules, and the need for fast, reliable, fairly-priced service. Our crew has worked with hundreds of Marine and Navy families stationed at Camp Lejeune over the years.\n\nWhether you're prepping a property for a move-out inspection, dealing with storm damage, or need routine trimming for base-adjacent housing, we handle it quickly and professionally."
        },
        {
          heading: "Complete Tree Services Near Camp Lejeune",
          text: "Our services include:\n\n• Tree Removal — including hazard trees and PCS prep\n• Tree Trimming & Pruning\n• Stump Grinding — ground 10 inches below grade\n• 24/7 Emergency Tree Service — storm and hurricane response\n• Lot Cleanup — debris hauled, property left spotless"
        },
        {
          /* The `text` here is the fallback for the sectionBodies[2] override
             below and must say the same thing. They had drifted — this entry
             was still a checkmark list while the rendered page showed the
             paperwork prose. Edit both or neither. */
          heading: "The paperwork, not just the tree",
          text: "We understand military life, and the paperwork that comes with it: proof of insurance for base housing or a landlord, a stump ground low enough for a move-out walkthrough, and a schedule that fits a PCS window rather than fighting it.\n\nWhat it costs is the same here as anywhere else in the county."
        },
        {
          heading: "156,000 acres of training ground next door, and what it does to the tree line",
          text: `Camp Lejeune was established in 1941 as Marine Barracks New River and renamed in 1942 for Lieutenant General John A. Lejeune, the Marine Corps' 13th Commandant. It now covers roughly 156,000 acres of Onslow County along the New River.\n\nFor a homeowner in the base-adjacent neighborhoods, two consequences matter.\n\nTHE LOTS ARE DENSE AND THE SETBACKS ARE NARROW. Base-adjacent housing was built to house people quickly, which means small lots, close spacing and fenced backyards. A tree at the back of one of those yards leaves through a gate or it does not leave — which rules out a crane on a large share of jobs and rules in the tracked lift, which collapses to about 36 inches and crosses a lawn without rutting it.\n\nTHE TREE LINE IS AN EDGE. Where a neighborhood backs onto base land, the trees along that boundary grew up inside a stand and were then exposed on one side when the houses went in. Stand-grown pines are drawn tall with the live crown high on the stem, and a tree shaped by shelter it no longer has is carrying wind loads it never developed for. Those boundary trees are disproportionately the ones we are called to after a storm.`
        }
      ]}
      caseStudy={
        <section id="lejeune-sources" className="py-12 bg-gray-950 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-bold text-white mb-4">Source</h2>
            <a
              href="https://en.wikipedia.org/wiki/Marine_Corps_Base_Camp_Lejeune"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
            >
              Marine Corps Base Camp Lejeune
            </a>
            <span className="block text-gray-400 text-base mt-1">
              The 1941 establishment as Marine Barracks New River, the 1942 renaming for
              Lieutenant General John A. Lejeune, and the approximate acreage. Everything
              above about lot density, gate access and stand-grown boundary trees is our
              own experience of working those neighborhoods, not that source&rsquo;s.
            </span>
          </div>
        </section>
      }
      faqs={[
        { question: "Do you offer a military discount?", answer: "Yes — we offer a military discount for active duty, retired, and veteran families. Just mention it when you call for your free estimate." },
        { question: "Can you provide proof of insurance for base housing or landlords?", answer: "Absolutely. We're fully insured and bondable for commercial work, and we'll provide a current certificate of insurance on request before any work begins." },
        { question: "How fast can you schedule for a PCS move?", answer: "We prioritize military families on tight timelines: our lead time is typically 1–2 weeks, inside the two-to-three-week PCS window most families are working against. Emergency situations are handled same-day." },
        {
          question: "Can you get to a tree in a fenced base-housing backyard?",
          answer: "Usually, yes, and it is the question that decides the price. Base-adjacent lots are dense with narrow setbacks, so the tree leaves through the gate or it does not leave. Our tracked lift collapses to about 36 inches and clears a standard four-foot gate on rubber tracks; where it will not fit we climb and rope the tree down in sections instead.",
        },
        {
          question: "Why do the trees along the base boundary come down more often?",
          answer: "In our experience it is because they grew up sheltered and were then exposed. A pine that developed inside a stand is drawn tall with its live crown high on the stem; when the houses went in and one side of that stand was opened up, those boundary trees were left carrying wind they never grew to handle. They are disproportionately the ones we get called to after a storm.",
        },
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Tree Service for Camp Lejeune Families",
        text: "Need fast, reliable tree service near Camp Lejeune? Contact Godhans today for a free estimate and military discount.",
        buttonText: "Call Now"
      }}
    />
  );
}
