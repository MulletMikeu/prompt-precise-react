import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';

/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

export default function TreeServiceRichlands() {
  return (
    <ServicePage
      title="Tree Service in Richlands, NC"
      subtitle="Professional Tree Removal, Trimming & Stump Grinding in Richlands"
      slug="tree-service-richlands-nc"
      faqPosition="early"
      credentialBlock
      description="Professional tree service in Richlands, NC. Tree removal, trimming, stump grinding, and emergency response. Free estimates from Godhans Tree Company."
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Tree service in Richlands, NC includes tree removal, tree trimming, and stump grinding to keep your property safe and well-maintained. Our team provides reliable, affordable service with free estimates for homeowners and businesses in the Richlands area."
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. This page had ZERO
       * editorial outbound links before batch 1 — every link on it was a templated
       * band or a service card. Same copy as the `text` entry it replaces, plus the
       * local detail that makes each anchor relevant. Edit both or neither.
       */
      sectionBodies={{
        2: (
          <>
            {"We are committed to providing high-quality tree services with a focus on safety and customer satisfaction. Richlands is the inland side of our area — regular dirt going to hard-pack clay, where there is usually no grass lost at all — see "}
            <Link to="/tree-removal-cost-north-carolina" className={PROSE_LINK}>what a removal costs here</Link>
            {", "}
            <Link to="/tree-removal-jacksonville-nc" className={PROSE_LINK}>how long a removal actually takes</Link>
            {" and "}
            <Link to="/emergency-tree-service-jacksonville-nc" className={PROSE_LINK}>24/7 storm response</Link>
            {"."}
          </>
        ),
      }}
      sections={[
        {
          heading: "Reliable Tree Services in Richlands, NC",
          text: "We proudly provide professional tree services to homeowners and property owners in Richlands, NC. Whether you need a tree removed, trimmed, or a stump ground down, our team delivers safe and efficient solutions.\n\nWe understand the local environment and common tree issues in the Richlands area, allowing us to provide services that are both effective and long-lasting."
        },
        {
          heading: "Our Tree Services in Richlands",
          text: "We offer a full range of tree services, including:\n\n• Tree Removal\n• Tree Trimming & Pruning\n• Stump Grinding\n• Emergency Tree Service"
        },
        {
          heading: "Why Choose Us for Tree Service in Richlands, NC",
          text: "We are committed to providing high-quality tree services with a focus on safety and customer satisfaction."
        }
      ]}
      faqs={[
        { question: "Do you provide tree service in Richlands NC?", answer: "Yes, we proudly serve Richlands and surrounding areas with professional tree removal, trimming, and stump grinding." },
        { question: "How much does tree service cost in Richlands NC?", answer: "Costs vary depending on the job, but we offer free estimates to provide accurate pricing." },
        { question: "Do you offer emergency tree service in Richlands?", answer: "Yes, we respond quickly to storm damage and urgent tree situations." }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Get Tree Service in Richlands, NC Today",
        text: "If you need professional tree service in Richlands, NC, contact us today for a free estimate. Our team is ready to help with safe, reliable service.",
        buttonText: "Call Now"
      }}
    />
  );
}
