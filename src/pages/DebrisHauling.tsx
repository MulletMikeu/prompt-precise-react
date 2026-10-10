import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';
import { BUSINESS, PRICING } from '@/data/siteData';

/**
 * Deliberately says nothing about where debris goes. That is a business detail,
 * not customer-facing information, and publishing a disposal site invites both
 * fly-tipping in our name and questions we have no reason to answer on a
 * marketing page. If a customer asks, the crew answers.
 *
 * "Organic only" is stated three times on purpose — it is the single biggest
 * source of wasted calls.
 */
/** Shared anchor styling for the in-prose links in `sectionBodies` below. */
const PROSE_LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

export default function DebrisHauling() {
  return (
    <ServicePage
      title="Debris Hauling in Jacksonville, NC"
      metaTitle="Debris Hauling in Jacksonville, NC | Godhans"
      subtitle="Trees, Brush and Leaves — Priced by the Trailer"
      slug="debris-hauling-jacksonville-nc"
      faqPosition="early"
      authorUpdated="2026-09-27"
      credentialBlock
      description={`Organic debris hauling in Jacksonville, NC — trees, brush, leaves. ${PRICING.debris.minimum} minimum, about ${PRICING.debris.perTrailer} per dump trailer. Free estimates.`}
      ctaText={`Get a Hauling Quote — ${BUSINESS.phone}`}
      quickAnswer={`We haul organic debris only — trees, limbs, brush and leaves. Nothing else. Hauling starts at an ${PRICING.debris.minimum} minimum and runs about ${PRICING.debris.perTrailer} per standard dump trailer after that, so you can work out roughly where a pile lands before we ever come out.`}
      /**
       * In-prose links, via ServicePage's `sectionBodies` slot. The three rural
       * city pages had four in-sentence inbound links each and a burn-ban pile on
       * an acre lot is exactly their call. Same copy; anchors and one sentence
       * added.
       */
      sectionBodies={{
        2: (
          <>
            {"Three calls come in far more than any others.\n\nThe first is the DIY job that got away. Somebody with a chainsaw and a free Saturday takes down a tree or limbs one up, which is the easy half — and then they are standing in a yard with a pile that will not fit in a pickup, and it turns out a medium tree makes a genuinely astonishing amount of brush. There is no shame in this call. Cutting is one problem and volume is a completely different one.\n\nThe second is a burn ban. In a dry summer the pile you were planning to burn is suddenly a pile you are living with, and it is not getting smaller. That one comes in most from the larger rural lots out toward "}
            <Link to="/tree-service-maysville-nc" className={PROSE_LINK}>Maysville</Link>
            {", "}
            <Link to="/tree-service-beulaville-nc" className={PROSE_LINK}>Beulaville</Link>
            {" and "}
            <Link to="/tree-service-holly-ridge-nc" className={PROSE_LINK}>Holly Ridge</Link>
            {", where there is room to make a pile nobody can move.\n\nThe third is cleanup after a crew that cut cheap. A low number often means the cutting was quoted and the removal wasn't, and the customer finds out when the truck leaves. We will haul it. We would also rather you had read our estimate page first — a quote that does not say what happens to the wood is not a finished quote."}
          </>
        ),
      }}
      sections={[
        {
          heading: 'What We Haul — and What We Don\'t',
          text: "We take organic debris: whole trees, trunk sections, limbs, brush, and leaves. That is the whole list.\n\nWe do not take construction or demolition waste, shingles, fencing, treated lumber, furniture, appliances, tires, or household junk — not even mixed in with a load of brush. This is not a junk-removal service wearing a tree company's name, and a load with non-organic material in it stops being a brush load.\n\nIf your pile is brush with a few boards and an old mattress in the middle of it, tell us on the phone. We would rather sort that out before a trailer is sitting in your driveway.",
        },
        {
          heading: 'What Debris Hauling Costs',
          text: `Hauling has the same ${PRICING.debris.minimum} minimum as the rest of our work, and for the same reason: the biggest fixed cost of any job is getting a truck, a trailer and a crew to your property at all. Past the minimum it prices by the trailer — about ${PRICING.debris.perTrailer} for each standard dump trailer for residential hauling. Insurance jobs are billed differently: an itemized, after-the-job invoice using North Carolina standard line-item rates, which is why the hauling line on one of our storm invoices does not match the residential figure above.\n\nWithin roughly ${PRICING.debris.localRadiusMiles} miles of our shop on Gum Branch Road, the minimum typically covers ${PRICING.debris.trailersAtMinimum}. That is enough for most medium trees, cut and stacked. A genuinely big tree is a different conversation — a large hardwood or a mature pine, once it is in pieces, can run ${PRICING.debris.bigTreeLoads}.\n\nDistance matters because drive time is the cost. Further out, the same pile takes more of the day, and the quote reflects that rather than pretending it doesn't.`,
        },
        {
          heading: 'Why People Call Us for Hauling',
          text: "Three calls come in far more than any others.\n\nThe first is the DIY job that got away. Somebody with a chainsaw and a free Saturday takes down a tree or limbs one up, which is the easy half — and then they are standing in a yard with a pile that will not fit in a pickup, and it turns out a medium tree makes a genuinely astonishing amount of brush. There is no shame in this call. Cutting is one problem and volume is a completely different one.\n\nThe second is a burn ban. In a dry summer the pile you were planning to burn is suddenly a pile you are living with, and it is not getting smaller.\n\nThe third is cleanup after a crew that cut cheap. A low number often means the cutting was quoted and the removal wasn't, and the customer finds out when the truck leaves. We will haul it. We would also rather you had read our estimate page first — a quote that does not say what happens to the wood is not a finished quote.",
        },
        {
          heading: 'How a Hauling Job Runs',
          text: "We look at the pile — a photo on the phone is usually enough — and tell you how many trailers we think it is and what that costs. If we are wrong once the loading starts, you hear about it before we keep going, not on the invoice.\n\nWe load, we sweep the drive and the street, and we blow the area clear. Where the pile has been sitting on grass for weeks the ground underneath it will be flattened and yellow; that comes back on its own, and we would rather say so up front than have it be a surprise.\n\nOn sandy lots — most of the coastal half of the county — a loaded trailer is heavier than the yard looks like it can take. If the route to the pile crosses grass, we will say so at the quote and offer ground mats for a small added cost rather than finding out the hard way.",
        },
      ]}
      sectionLinks={{
        2: [
          { href: '/residential-tree-service-jacksonville-nc', label: 'What an estimate should include — so the wood isn\'t a surprise' },
          { href: '/storm-cleanup-jacksonville-nc', label: 'Storm cleanup in Jacksonville, NC' },
        ],
        3: { href: '/tree-removal-jacksonville-nc', label: 'Tree removal in Jacksonville, NC — cutting and hauling quoted together' },
      }}
      faqs={[
        {
          question: 'Do you haul construction debris or household junk?',
          answer: 'No. Organic debris only — trees, limbs, brush and leaves. We cannot take construction or demolition waste, shingles, treated lumber, furniture, appliances or household junk, including mixed into an otherwise clean brush load. Mention anything non-organic when you call so we can sort it out before a trailer is in your driveway.',
        },
        {
          question: 'How much does debris hauling cost in Jacksonville, NC?',
          answer: `There is an ${PRICING.debris.minimum} minimum, and past that it runs about ${PRICING.debris.perTrailer} per standard dump trailer. Within about ${PRICING.debris.localRadiusMiles} miles of our Gum Branch Road shop the minimum typically covers ${PRICING.debris.trailersAtMinimum}, which handles most medium trees. A big tree in pieces can run ${PRICING.debris.bigTreeLoads}.`,
        },
        {
          question: 'I cut the tree down myself. Will you just haul it away?',
          answer: 'Yes, and it is one of the most common calls we get. Cutting and volume are two different problems, and a medium tree produces far more brush than most people expect. Send a photo of the pile and we will tell you what it is likely to take.',
        },
        {
          question: 'Can you haul if there is a burn ban?',
          answer: 'Yes. Dry summers are one of our busier stretches for hauling for exactly that reason — the pile you planned to burn is suddenly a pile you are stuck with. Nothing about a burn ban affects our ability to load it and take it.',
        },
        {
          question: 'Will the trailer damage my yard?',
          answer: 'On the sandy side of the county it can, and we will tell you at the quote rather than after. A loaded trailer is heavier than a lawn tends to look, and grass tears when you turn on it. Where the route crosses grass we offer ground mats for a small added cost.',
          link: { href: '/residential-tree-service-jacksonville-nc', label: 'How we protect the lawn, driveway and septic field' },
        },
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Storm Cleanup', href: '/storm-cleanup-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
      ]}
      guides={{
        heading: 'Before You Book',
        links: [
          { href: '/residential-tree-service-jacksonville-nc', label: 'What an estimate should include', blurb: 'The checklist that stops "who hauls the wood?" from becoming an argument.' },
          { href: '/tree-removal-cost-north-carolina', label: 'Tree removal cost in North Carolina', blurb: 'Where hauling sits inside the price of a full removal.' },
        ],
      }}
      finalCta={{
        heading: 'Send Us a Photo of the Pile',
        text: 'We will tell you how many trailers it is and what it costs. Free estimates across Jacksonville and Onslow County.',
      }}
    />
  );
}
