import { Head as Helmet } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { AUTHOR, BUSINESS, BUSINESS_ID, CREDENTIAL, JAMES, SITE_URL, WEBSITE_ID } from '../data/siteData';

/**
 * Portrait sources, hoisted so the <img> and the Person node's `image` read the
 * same path. They used to exist only inside the JSX, which left nothing for the
 * structured data to point at without a second hardcoded copy of the filename.
 */
const MICHAEL_PHOTO_SRC = '/images/owner-michael-godhans-jacksonville-nc.webp';
const JAMES_PHOTO_SRC = '/images/owner-james-godhans-tree-service-jacksonville-nc.jpg';

// === EDITABLE PHOTO FIELDS (Michael) ===
/*
 * The alt text used to read "Michael, owner of …" under a "do not change
 * template" instruction. Both are overridden on the owner's ruling: a first
 * name alone is not an entity, and this is the one page whose job is to tie the
 * name in the byline to a face and a set of credentials. Full name and the real
 * role now, read from AUTHOR/JAMES so they cannot drift from the H2s, the
 * byline, or the Person nodes.
 */
const MICHAEL_PHOTO_ALT = `${AUTHOR.name}, owner of ${BUSINESS.name} in Jacksonville, NC.`;
// Editable caption — leave empty to hide.
const MICHAEL_PHOTO_CAPTION = '';
// Optional EXIF / GEO data — leave empty to hide.
const MICHAEL_PHOTO_EXIF = '';
// Intrinsic dimensions (used to reserve aspect ratio and prevent CLS)
const MICHAEL_PHOTO_WIDTH = 1200;
const MICHAEL_PHOTO_HEIGHT = 1408;
// === END EDITABLE PHOTO FIELDS ===

// === EDITABLE PHOTO FIELDS (James) ===
// Same override as Michael's above — full name, real role. He is co-owner, so
// the old "owner of" was wrong on top of being nameless.
const JAMES_PHOTO_ALT = `${JAMES.name}, co-owner of ${BUSINESS.name} in Jacksonville, NC.`;
// Editable caption — leave empty to hide.
const JAMES_PHOTO_CAPTION = '';
// Optional EXIF / GEO data — leave empty to hide.
const JAMES_PHOTO_EXIF = '';
// Intrinsic dimensions (used to reserve aspect ratio and prevent CLS)
const JAMES_PHOTO_WIDTH = 1200;
const JAMES_PHOTO_HEIGHT = 1800;
// === END EDITABLE PHOTO FIELDS ===

const PAGE_URL = `${SITE_URL}/about`;

/**
 * Title and description, one binding each. The description was written out four
 * separate times below (meta, og, twitter, and the WebPage node) and the title
 * three times — four and three chances for them to drift apart.
 *
 * Both now name both men in full. "Michael and James" gave a search engine
 * nothing it could resolve to a person, which is the entire job of this page.
 */
const PAGE_TITLE = 'About Godhans Tree Company | Jacksonville, NC';
const PAGE_DESCRIPTION = `${AUTHOR.name} (${AUTHOR.role.toLowerCase()}) and ${JAMES.name} (${JAMES.role.toLowerCase()}) run ${BUSINESS.name} in ${BUSINESS.primaryCity}. Brothers, USMC veterans, ${BUSINESS.county} since ${BUSINESS.founded}.`;

// === EDITABLE CONTENT FIELDS ===
/*
 * Both men are introduced by full name on first mention, and the roles
 * interpolate from AUTHOR/JAMES rather than being typed out — so the prose
 * cannot say one thing and the heading three inches below it another, which is
 * what happened before: Michael's heading read "Co-Owner" while he is the owner.
 */
const INTRO_TEXT = `${BUSINESS.name} is a veteran-owned, family-operated company built on safety, precision, and a commitment to leaving every property better than we arrived. ${AUTHOR.name} is the ${AUTHOR.role.toLowerCase()} and writes everything you read on this site; his brother ${JAMES.name} is the ${JAMES.role.toLowerCase()}. One of them works in the canopy and one runs the ground and the heavy equipment, which between them covers everything from routine tree care to the most complex and hazardous removals.`;

const MISSION_STATEMENT = 'Our mission is to leave every property better than we arrived.';

const OWNER_MICHAEL = {
  name: AUTHOR.name,
  role: AUTHOR.role,
  /** Feeds Person.knowsAbout. What he actually does, not a keyword list. */
  knowsAbout: [
    'Tree removal',
    'Technical tree climbing',
    'Storm damage assessment',
    'Hazardous tree removal',
  ],
  bio: 'Michael is a USMC Veteran with a passion for tree health and high-risk technical removals. He specializes in assisting clients and other tree companies with complicated and hazardous tree operations. Michael enjoys spending his days 80 feet in the air — an office with great views and fresh air — and takes pride in delivering safe, precise, and professional work on every job.',
};

const OWNER_BROTHER = {
  name: JAMES.name,
  role: JAMES.role,
  knowsAbout: ['Heavy equipment operation', 'Ground operations'],
  bio: 'James is a heavy equipment expert and the head of ground operations. He ensures every job is completed safely, efficiently, and with full respect for the client\u2019s property. James prioritizes the preservation of landscaping, structures, and surrounding areas while maintaining smooth, coordinated operations from the ground up.',
};
// === END EDITABLE CONTENT FIELDS ===

export default function MeetTheOwners() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://godhans.com/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: PAGE_URL },
    ],
  };

  /**
   * The two Person nodes, full versions.
   *
   * <BusinessSchema/> already emits a lean stub for each under the same @id on
   * every page, so LocalBusiness.founder/.employee resolve site-wide. Identical
   * @ids are one entity in JSON-LD, so on this page the stub and the node below
   * merge rather than duplicating — which is the point of giving them stable
   * @ids in siteData instead of letting each page mint its own.
   *
   * `image` reads the same constant as the <img> above it: the portrait a reader
   * sees and the portrait a crawler is handed are the same file by construction.
   */
  const michaelSchema = {
    '@type': 'Person',
    '@id': AUTHOR.personId,
    name: OWNER_MICHAEL.name,
    jobTitle: OWNER_MICHAEL.role,
    description: OWNER_MICHAEL.bio,
    image: `${SITE_URL}${MICHAEL_PHOTO_SRC}`,
    url: PAGE_URL,
    worksFor: { '@id': BUSINESS_ID },
    knowsAbout: OWNER_MICHAEL.knowsAbout,
  };

  const jamesSchema = {
    '@type': 'Person',
    '@id': JAMES.personId,
    name: OWNER_BROTHER.name,
    jobTitle: OWNER_BROTHER.role,
    description: OWNER_BROTHER.bio,
    image: `${SITE_URL}${JAMES_PHOTO_SRC}`,
    url: PAGE_URL,
    worksFor: { '@id': BUSINESS_ID },
    knowsAbout: OWNER_BROTHER.knowsAbout,
  };

  const webPageSchema = {
    '@type': 'WebPage',
    '@id': PAGE_URL + '#webpage',
    url: PAGE_URL,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    // Both @ids are the shared constants BusinessSchema emits, so these
    // references resolve instead of dangling.
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    // Michael, not the business: this page's primary subject is the person who
    // authors the site, and the byline on the guide pages links here expecting
    // to arrive at him.
    mainEntity: { '@id': AUTHOR.personId },
  };

  /**
   * One @graph rather than three <script> blocks, so WebPage.mainEntity and the
   * Person nodes it points at resolve inside a single document instead of
   * relying on a consumer to stitch separate scripts together. The breadcrumb
   * stays on its own below — nothing references it and nothing it references.
   */
  const aboutGraph = {
    '@context': 'https://schema.org',
    '@graph': [webPageSchema, michaelSchema, jamesSchema],
  };

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:site_name" content="Godhans Tree Company" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />

        {/*
          Unicode-escaped $ for the same reason as BusinessSchema: vite-react-ssg
          injects head content through String.replace, where "$$" in the
          replacement collapses to "$" and "$&" expands to the whole match. No
          value in this graph contains a dollar sign today, so the output is
          byte-identical either way — but the bios and the credential strings
          are editable copy, and the next person to paste a price into one
          should not have to know this.
        */}
        <script type="application/ld+json">
          {JSON.stringify(aboutGraph).replace(/\$/g, '\\u0024')}
        </script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <main id="main-content" className="flex-grow pt-20 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-10 sm:py-14">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-300">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-200" aria-current="page">About</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold mb-6">About Godhans Tree Company</h1>

            {/* Intro.

                Was <section aria-labelledby> with an sr-only <h2>Introduction</h2>.
                "Introduction" named nothing — it was a placeholder standing in the
                document outline between the H1 and the two owner headings — and a
                single paragraph does not need to be its own labelled region. Plain
                div: no heading, no landmark, same rendering. */}
            <div className="mb-10">
              {INTRO_TEXT ? (
                <p className="text-gray-300 text-lg leading-relaxed">{INTRO_TEXT}</p>
              ) : (
                <p className="text-gray-400 italic">[Introduction text — add via INTRO_TEXT]</p>
              )}
            </div>

            {/* Michael — Owner Photo */}
            {/* Photo sections: the sr-only <h2>s that used to label these three were
                invisible but still sat in the document heading outline, which put
                "Photo of Michael Godbersen" between the H1 and the real owner
                headings. Converted to aria-label on the section so the region keeps
                its accessible name without adding a heading -- and without a
                redundant sr-only caption, which would double-announce alongside the
                img alt that already describes the photo. */}
            <section aria-label={`Photo of ${AUTHOR.name}`} className="mb-8">
              <figure className="m-0">
                <div
                  className="relative w-full overflow-hidden rounded-lg bg-gray-900"
                  style={{ aspectRatio: `${MICHAEL_PHOTO_WIDTH} / ${MICHAEL_PHOTO_HEIGHT}` }}
                >
                  <picture className="absolute inset-0 block h-full w-full">
                    <source
                      type="image/avif"
                      srcSet="/images/owner-michael-godhans-jacksonville-nc-600.avif 600w, /images/owner-michael-godhans-jacksonville-nc-900.avif 900w, /images/owner-michael-godhans-jacksonville-nc-1200.avif 1200w"
                      sizes="(min-width: 768px) 768px, 100vw"
                    />
                    <source
                      type="image/webp"
                      srcSet="/images/owner-michael-godhans-jacksonville-nc-600.webp 600w, /images/owner-michael-godhans-jacksonville-nc-900.webp 900w, /images/owner-michael-godhans-jacksonville-nc-1200.webp 1200w"
                      sizes="(min-width: 768px) 768px, 100vw"
                    />
                    <img
                      src={MICHAEL_PHOTO_SRC}
                      width={MICHAEL_PHOTO_WIDTH}
                      height={MICHAEL_PHOTO_HEIGHT}
                      alt={MICHAEL_PHOTO_ALT}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </picture>
                </div>
                {MICHAEL_PHOTO_CAPTION && (
                  <figcaption className="mt-2 text-sm text-gray-300">
                    {MICHAEL_PHOTO_CAPTION}
                  </figcaption>
                )}
                {MICHAEL_PHOTO_EXIF && (
                  <p className="mt-1 text-xs text-gray-400">{MICHAEL_PHOTO_EXIF}</p>
                )}
              </figure>
            </section>

            {/* Owner: Michael */}
            <section aria-labelledby="owner-michael" className="mb-10">
              <h2 id="owner-michael" className="text-2xl font-bold mb-2">
                {OWNER_MICHAEL.name || '[Owner name]'}
              </h2>
              {/* red-500, not red-600. #DC2626 on the near-black page ground is
                  4.10:1 and fails WCAG AA (4.5) for normal text; #EF4444 is
                  5.26:1. red-500 is also what the rest of the component layer
                  already uses for red text on dark — including the ✓ in
                  <WhyChooseGodhans/>, which this page's credential block
                  mirrors — so red-600 was the odd one out, not the standard.
                  red-600 stays correct for red text on WHITE (4.83:1): the
                  quote-form card and the two on-red buttons keep it. */}
              {OWNER_MICHAEL.role ? (
                <p className="text-red-500 font-medium mb-3">{OWNER_MICHAEL.role}</p>
              ) : (
                <p className="text-gray-400 italic mb-3">[Role — add via OWNER_MICHAEL.role]</p>
              )}
              {OWNER_MICHAEL.bio ? (
                <p className="text-gray-300 leading-relaxed">{OWNER_MICHAEL.bio}</p>
              ) : (
                <p className="text-gray-400 italic">[Bio — add via OWNER_MICHAEL.bio]</p>
              )}
              {/* This page had zero in-prose outbound links. The bio above names
                  high-risk technical removals and reading trees, and both of
                  those are pages — so they are linked from the sentence that
                  describes them rather than left as claims. */}
              <p className="text-gray-300 leading-relaxed mt-4">
                In practice that means the{' '}
                <Link to="/tree-removal-jacksonville-nc" className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold">
                  removals other crews turn down
                </Link>
                {/* Batch 3 carry-over: this narration is the third place the Gene
                    Circle pair is described, after /tree-removal-jacksonville-nc
                    and the cost page, and it was the vaguest of the three. It now
                    names the address and matches the removal page's account — the
                    bee hive, and the pine going out over the fence rather than
                    simply being "boxed in". NO PRICES here on purpose: the figures
                    live on the removal page, and a fourth copy of them is a fourth
                    thing to keep in step. The three links in this paragraph are
                    unchanged in number and destination; one points at the live A/B
                    treatment arm, which Ship E may not add or remove links to. */}
                {' '}— the pair at Gene Circle, a 105-foot tulip poplar eight feet off a house with
                a bee hive sixty feet up inside it, and a 120-foot pine boxed in behind a shed that
                had to be rigged out over the fence into the neighbor&rsquo;s yard — and measuring a
                questionable trunk with a{' '}
                <Link to="/resistograph-tree-testing-jacksonville-nc" className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold">
                  resistograph
                </Link>
                {' '}rather than condemning it on a look. He also writes every page on this site,
                including the{' '}
                <Link to="/tree-removal-cost-north-carolina" className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold">
                  price bands
                </Link>
                .
              </p>
            </section>

            {/* Michael on the rope — same treatment as the other owner photos. */}
            <section aria-label={`${AUTHOR.name} climbing`} className="mb-8">
              <figure className="m-0">
                <div
                  className="relative w-full overflow-hidden rounded-lg bg-gray-900"
                  style={{ aspectRatio: "3 / 4" }}
                >
                  <picture className="absolute inset-0 block h-full w-full">
                    <source
                      type="image/avif"
                      srcSet="/images/michael-godbersen-climbing-jacksonville-nc-480.avif 480w, /images/michael-godbersen-climbing-jacksonville-nc-768.avif 768w, /images/michael-godbersen-climbing-jacksonville-nc-1024.avif 1024w"
                      sizes="(min-width: 768px) 768px, 100vw"
                    />
                    <img
                      src="/images/michael-godbersen-climbing-jacksonville-nc-768.webp"
                      srcSet="/images/michael-godbersen-climbing-jacksonville-nc-480.webp 480w, /images/michael-godbersen-climbing-jacksonville-nc-768.webp 768w, /images/michael-godbersen-climbing-jacksonville-nc-1024.webp 1024w"
                      sizes="(min-width: 768px) 768px, 100vw"
                      width={768}
                      height={1024}
                      alt="Michael Godbersen of Godhans Tree Company climbing high above Jacksonville, NC rooftops"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </picture>
                </div>
              </figure>
            </section>

            {/* James — Owner Photo */}
            <section aria-label={`Photo of ${JAMES.name}`} className="mb-8">
              <figure className="m-0">
                <div
                  className="relative w-full overflow-hidden rounded-lg bg-gray-900"
                  style={{ aspectRatio: `${JAMES_PHOTO_WIDTH} / ${JAMES_PHOTO_HEIGHT}` }}
                >
                  <picture className="absolute inset-0 block h-full w-full">
                    <source
                      type="image/avif"
                      srcSet="/images/owner-james-godhans-tree-service-jacksonville-nc-512.avif 512w, /images/owner-james-godhans-tree-service-jacksonville-nc-768.avif 768w, /images/owner-james-godhans-tree-service-jacksonville-nc-1024.avif 1024w"
                      sizes="(min-width: 768px) 768px, 100vw"
                    />
                    <source
                      type="image/webp"
                      srcSet="/images/owner-james-godhans-tree-service-jacksonville-nc-512.webp 512w, /images/owner-james-godhans-tree-service-jacksonville-nc-768.webp 768w, /images/owner-james-godhans-tree-service-jacksonville-nc-1024.webp 1024w"
                      sizes="(min-width: 768px) 768px, 100vw"
                    />
                    <img
                      src={JAMES_PHOTO_SRC}
                      width={JAMES_PHOTO_WIDTH}
                      height={JAMES_PHOTO_HEIGHT}
                      alt={JAMES_PHOTO_ALT}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </picture>
                </div>
                {JAMES_PHOTO_CAPTION && (
                  <figcaption className="mt-2 text-sm text-gray-300">
                    {JAMES_PHOTO_CAPTION}
                  </figcaption>
                )}
                {JAMES_PHOTO_EXIF && (
                  <p className="mt-1 text-xs text-gray-400">{JAMES_PHOTO_EXIF}</p>
                )}
              </figure>
            </section>

            {/* Owner: Brother */}
            <section aria-labelledby="owner-brother" className="mb-10">
              <h2 id="owner-brother" className="text-2xl font-bold mb-2">
                {OWNER_BROTHER.name || '[Brother name — add via OWNER_BROTHER.name]'}
              </h2>
              {OWNER_BROTHER.role ? (
                <p className="text-red-500 font-medium mb-3">{OWNER_BROTHER.role}</p>
              ) : (
                <p className="text-gray-400 italic mb-3">[Role — add via OWNER_BROTHER.role]</p>
              )}
              {OWNER_BROTHER.bio ? (
                <p className="text-gray-300 leading-relaxed">{OWNER_BROTHER.bio}</p>
              ) : (
                <p className="text-gray-400 italic">[Bio — add via OWNER_BROTHER.bio]</p>
              )}
            </section>

            {/* Credentials.

                Every line comes from CREDENTIAL in siteData — the same binding
                <WhyChooseGodhans/> renders on the service and city pages — so
                "since 2013", "3,500+ jobs", the $2M liability figure and the
                SoSID are not retyped here. A page that names two people and
                claims they are veteran-owned and insured should show the proof
                on the same page as the claim; it is also the only page where
                the people and the registration appear together, which is what
                makes the pair verifiable.

                This renders the bullets directly rather than reusing
                <WhyChooseGodhans/>, because that component closes with a
                "Meet Michael and James" link to /about — on /about that is a
                link to itself. */}
            <section aria-labelledby="credentials-heading" className="mb-10 pt-6 border-t border-gray-800">
              <h2 id="credentials-heading" className="text-2xl font-bold mb-5">
                {CREDENTIAL.heading}
              </h2>
              <ul className="space-y-3">
                {CREDENTIAL.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                    <span aria-hidden="true" className="text-red-500 mt-1 flex-shrink-0">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Internal link back to hub */}
            <div className="mt-10 pt-6 border-t border-gray-800">
              <Link
                to="/tree-service-jacksonville-nc"
                className="text-red-500 hover:text-red-400 font-medium"
              >
                ← Explore our Jacksonville, NC tree services
              </Link>
            </div>
          </div>
        </main>
    </>
  );
}
