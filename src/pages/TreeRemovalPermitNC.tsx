import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ServicePage from './ServicePage';

/**
 * Outbound link to the rule itself. These open in a new tab because the reader
 * is mid-answer and we want them to come back, and carry rel="noopener" so the
 * opened page cannot reach back through window.opener.
 */
function Source({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  );
}

/**
 * The Onslow County / Jacksonville answer.
 *
 * This is JSX rather than another entry in `sections` because ServicePage
 * renders section text as a plain string — and the whole value of this block is
 * that it links out to the rules it is summarizing. It renders after the
 * existing sections and before the FAQ.
 *
 * Every regulatory claim below is tied to a primary source. Where a source
 * could not be confirmed (the full Onslow County code is behind a JS-only
 * viewer), the copy says "to our knowledge" and points the reader at the
 * county rather than asserting a rule we have not read.
 */
function OnslowPermitSection() {
  return (
    <section className="bg-gray-950 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Tree Removal Permits in Onslow County and Jacksonville, NC
        </h2>

        <div className="text-gray-300 leading-relaxed text-lg space-y-5">
          <p>
            Here is the short version, after more than twenty years of doing this work locally.
            To our knowledge there is no state or Onslow County permit required to remove a tree
            on private residential property — as long as the tree isn't in wetlands or within the
            regulated distance of a natural waterway like a creek, river, sound, or lake. In
            practice, the only approval we actually run into isn't a government permit at all.
            It's the HOA.
          </p>
          <p>
            The exceptions worth knowing are below: water and wetlands, new construction inside
            the Jacksonville city limits, and your covenants.
          </p>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mt-12 mb-4">
          Near water and wetlands
        </h3>
        <div className="text-gray-300 leading-relaxed text-lg space-y-5">
          <p>
            Onslow is one of North Carolina's{' '}
            <Source href="https://www.deq.nc.gov/about/divisions/coastal-management/about-coastal-management/cama-counties">
              20 CAMA counties
            </Source>
            , so the Coastal Area Management Act reaches property here in a way it doesn't inland.
            Under{' '}
            <Source href="https://www.law.cornell.edu/regulations/north-carolina/15A-N-C-Admin-Code-07H-0209">
              15A NCAC 07H .0209
            </Source>
            , the Estuarine Shoreline area of environmental concern runs 75 feet landward of the
            normal high water level — 575 feet along Outstanding Resource Waters — and the Public
            Trust Shoreline area runs 30 feet landward.
          </p>
          <p>
            Worth being precise about what that 30-foot line is, because it gets repeated online
            as a tree rule and it isn't one. The rule says new development has to sit 30 feet
            landward of the normal water level. It's a setback for building, not a ban on cutting.
            What does pull tree work into CAMA is the statute's definition of development, which
            covers clearing or alteration of land as an adjunct of construction. Taking down one
            dead pine in a yard isn't that. Clearing trees to build, fill, or excavate near the
            water is — and CAMA permits have to be in hand before flood development and building
            permits are issued, so finding out late reorders the whole job.
          </p>
          <p>
            Wetlands work the same way: the distinction is soil, not sawdust. Federal rules at{' '}
            <Source href="https://www.law.cornell.edu/cfr/text/33/323.2">
              33 CFR 323.2(d)
            </Source>{' '}
            treat mechanized landclearing, ditching, and excavation as a regulated discharge, but
            they expressly exclude work involving "only the cutting or removing of vegetation
            above the ground (e.g., mowing, rotary cutting, and chainsawing) where the activity
            neither substantially disturbs the root system nor involves mechanized pushing,
            dragging, or other similar activities." In plain terms: cutting the tree is generally
            not the regulated act. Grubbing the stump, pushing debris around with a machine,
            grading, or filling is. That's the line we work to, and it's why we'll sometimes cut a
            wetland tree and leave the stump.
          </p>
          <p>
            One thing that does <em>not</em> apply here: North Carolina's riparian buffer program
            covers the{' '}
            <Source href="https://www.deq.nc.gov/about/divisions/water-resources/water-quality-permitting/401-buffer-permitting-branch/riparian-buffer-protection-program">
              Neuse, Tar-Pamlico, and Catawba basins plus the Randleman, Jordan, and Goose Creek
              watersheds
            </Source>
            . Neither the White Oak nor the New River basin is on that list, so the buffer rules
            people read about around Raleigh and Greenville don't reach Onslow County.
          </p>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mt-12 mb-4">
          City of Jacksonville and new construction
        </h3>
        <div className="text-gray-300 leading-relaxed text-lg space-y-5">
          <p>
            City limits matter, because Jacksonville and Onslow County are separate permitting
            authorities and a Jacksonville mailing address doesn't always mean a property is
            inside the city.
          </p>
          <p>
            Inside the city, development runs through the{' '}
            <Source href="https://jacksonvillenc.gov/573/UDO">
              Unified Development Ordinance
            </Source>
            . There is no tree removal permit in it — the phrase doesn't appear anywhere in the
            ordinance. Its landscaping requirements explicitly "shall not apply to … single-family
            and duplex dwellings; provided that for new construction, one canopy tree is required
            in the front yard (per lot)." So an existing single-family lot has no city tree permit
            to pull, and a newly built house owes one front-yard canopy tree.
          </p>
          <p>
            What the ordinance does protect is <em>required</em> trees — the ones carrying a
            bufferyard, street-tree, or landscaping obligation on an approved plan. Removing those
            without approval is listed as a violation. If a tree was planted or preserved to
            satisfy a site plan, on a commercial lot or in a newer subdivision, it isn't simply
            the owner's to take out. For a specific lot, Jacksonville Planning &amp; Permitting is
            at 910-938-5236 and Onslow County Land Use is at 910-455-3661 ext. 3.
          </p>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white mt-12 mb-4">
          HOAs are the approval you'll actually hit
        </h3>
        <div className="text-gray-300 leading-relaxed text-lg space-y-5">
          <p>
            This is the one that catches people. In our experience the approvals that come up on
            real jobs are HOA approvals, not government permits. Plenty of associations require
            sign-off for tree work, and removal is the item they're strictest about.
          </p>
          <p>
            We can't point to an Onslow County community that requires it — it's more common in
            the Swansboro-area communities, and in the gated and restricted communities just
            outside the county, like Hampstead over in Pender County and Wallace in Duplin County.
            But covenants vary street by street, so the only reliable answer is your own.
          </p>
          <p>
            Check your covenants before you schedule. If your HOA wants something from us to
            approve the work, we're happy to put it together.
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed mt-10 pt-6 border-t border-gray-800">
          Not legal advice; rules change, so confirm with the county or your HOA for your lot.
        </p>

        <div className="mt-8">
          <Link
            to="/tree-removal-jacksonville-nc"
            className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
          >
            Our tree removal service in Jacksonville, NC
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function TreeRemovalPermitNC() {
  return (
    <ServicePage
      title="Do You Need a Permit to Remove a Tree in North Carolina?"
      metaTitle="Do You Need a Permit to Remove a Tree in NC?"
      slug="do-you-need-a-permit-to-remove-a-tree-nc"
      description="Most NC homeowners do not need a permit to remove a tree on private property, but city or county rules may apply. Check local guidelines first."
      quickAnswer="In most cases, you do not need a permit to remove a tree on private property in North Carolina. However, local city or county regulations may apply, especially for protected trees or certain areas, so it's important to check local guidelines before removing a tree."
      sections={[
        {
          heading: "Understanding Tree Removal Laws in NC",
          text: "If you're planning to remove a tree from your property, you may be wondering whether a permit is required. Tree removal laws in North Carolina can vary depending on your location and the type of property.\n\nThis guide explains when permits may be required and what homeowners should know before removing a tree."
        },
        {
          heading: "North Carolina Tree Removal Regulations",
          text: "North Carolina does not have a statewide law requiring permits for tree removal on private residential property. However, local municipalities may have specific rules or restrictions.\n\nCertain areas may regulate tree removal to protect the environment, maintain community aesthetics, or preserve specific tree species."
        },
        {
          heading: "Situations Where a Permit May Be Required",
          text: "A permit may be needed in certain cases:\n\n• Trees located in protected or historic districts\n• Trees near public roads or sidewalks\n• Trees in environmentally sensitive areas\n• Large or protected tree species\n\nAlways check with your local city or county office to confirm requirements."
        },
        {
          heading: "Tree Removal Rules in Jacksonville, NC",
          text: "In Jacksonville, NC and surrounding areas, most homeowners can remove trees on private property without a permit. However, regulations can change, and certain situations may require approval.\n\nWhen in doubt, it's best to verify with local authorities or work with a professional tree service that understands local guidelines."
        },
        {
          heading: "Working With a Professional Tree Service",
          text: "A professional tree service can help ensure your tree removal is done safely and in compliance with any local regulations. They can also assess whether permits or special considerations apply to your situation."
        },
        {
          heading: "Tree Removal Services in Jacksonville, NC",
          text: "If you need help removing a tree safely and efficiently, we offer professional tree removal services in Jacksonville, NC."
        }
      ]}
      caseStudy={<OnslowPermitSection />}
      faqs={[
        {
          /**
           * Leads the FAQPage block: this is the query the page is actually
           * being asked for. Deliberately carries no phone numbers — FAQ
           * answers serialize verbatim into FAQPage schema, and a government
           * number sitting in the business's structured data invites a parser
           * to bind it to the business. The numbers live in visible copy.
           */
          question: "Do I need a permit to remove a tree in Onslow County, NC?",
          answer: "To our knowledge, no. Neither North Carolina nor Onslow County requires a permit to remove a tree on private residential property, as long as the tree is not in wetlands or within the regulated distance of a natural waterway such as a creek, river, sound, or lake. In practice the approval homeowners actually run into is from an HOA rather than the government, so check your covenants before scheduling, and confirm with the county for your specific lot."
        },
        {
          question: "Do I always need a permit to remove a tree in NC?",
          answer: "No, most residential tree removals do not require a permit, but local rules may apply."
        },
        {
          question: "Who do I contact to check tree removal rules?",
          answer: "Contact your local city or county office for the most accurate information."
        },
        {
          question: "Can I remove a tree myself?",
          answer: "While possible, tree removal can be dangerous and is best handled by professionals."
        }
      ]}
      finalCta={{
        heading: "Get Help With Tree Removal",
        text: "If you're unsure about tree removal requirements or need professional service, contact us today. We provide safe, reliable tree removal in Jacksonville and surrounding areas.",
        buttonText: "Call Now"
      }}
      relatedServices={[
        { label: "Tree Removal", href: "/tree-removal-jacksonville-nc" },
        { label: "Tree Trimming", href: "/tree-trimming-jacksonville-nc" },
        { label: "Stump Grinding", href: "/stump-grinding-jacksonville-nc" },
        { label: "Emergency Tree Service", href: "/emergency-tree-service-jacksonville-nc" }
      ]}
    />
  );
}
