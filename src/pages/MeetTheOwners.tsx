import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { EmergencyBanner } from '@/components/layout/EmergencyBanner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BUSINESS_INFO } from '@/lib/constants';
import michaelPhoto1200 from '@/assets/owner-michael-godhans-jacksonville-nc-1200.jpg';
import michaelPhoto600 from '@/assets/owner-michael-godhans-jacksonville-nc-600.jpg';
import michaelPhoto1200Webp from '@/assets/owner-michael-godhans-jacksonville-nc-1200.webp';
import michaelPhoto600Webp from '@/assets/owner-michael-godhans-jacksonville-nc-600.webp';
import jamesPhoto1200 from '@/assets/owner-james-godhans-jacksonville-nc-1200.jpg';
import jamesPhoto600 from '@/assets/owner-james-godhans-jacksonville-nc-600.jpg';
import jamesPhoto1200Webp from '@/assets/owner-james-godhans-jacksonville-nc-1200.webp';
import jamesPhoto600Webp from '@/assets/owner-james-godhans-jacksonville-nc-600.webp';

// === EDITABLE PHOTO FIELDS (Michael) ===
// Pre-filled SEO alt text — do not change template.
const MICHAEL_PHOTO_ALT = 'Michael, owner of Godhans Tree Service in Jacksonville NC.';
// Editable caption — leave empty to hide.
const MICHAEL_PHOTO_CAPTION = '';
// Optional EXIF / GEO data — leave empty to hide.
const MICHAEL_PHOTO_EXIF = '';
// Intrinsic dimensions (used to reserve aspect ratio and prevent CLS)
const MICHAEL_PHOTO_WIDTH = 1200;
const MICHAEL_PHOTO_HEIGHT = 1408;
// === END EDITABLE PHOTO FIELDS ===

// === EDITABLE PHOTO FIELDS (James) ===
// Pre-filled SEO alt text — do not change template.
const JAMES_PHOTO_ALT = 'James, owner of Godhans Tree Service in Jacksonville NC.';
// Editable caption — leave empty to hide.
const JAMES_PHOTO_CAPTION = '';
// Optional EXIF / GEO data — leave empty to hide.
const JAMES_PHOTO_EXIF = '';
// Intrinsic dimensions (used to reserve aspect ratio and prevent CLS)
const JAMES_PHOTO_WIDTH = 1200;
const JAMES_PHOTO_HEIGHT = 1800;
// === END EDITABLE PHOTO FIELDS ===

const PAGE_URL = 'https://godhans.com/meet-the-owners';
const OG_IMAGE = 'https://godhans.com/og-image.jpg';

// === EDITABLE CONTENT FIELDS ===
// Replace the placeholder strings below with the final copy.
const INTRO_TEXT = 'Godhans Tree Service is a veteran-owned, family-operated company built on safety, precision, and a commitment to leaving every property better than we arrived. As brothers and co-owners, Michael and James bring complementary skill sets that allow us to handle everything from routine tree care to the most complex and hazardous removals.';

const MISSION_STATEMENT = 'Our mission is to leave every property better than we arrived.';

const OWNER_MICHAEL = {
  name: 'Michael',
  role: 'Co-Owner',
  bio: 'Michael is a USMC Veteran with a passion for tree health and high-risk technical removals. He specializes in assisting clients and other tree companies with complicated and hazardous tree operations. Michael enjoys spending his days 80 feet in the air — an office with great views and fresh air — and takes pride in delivering safe, precise, and professional work on every job.',
};

const OWNER_BROTHER = {
  name: 'James',
  role: 'Co-Owner',
  bio: 'James is a heavy equipment expert and the head of ground operations. He ensures every job is completed safely, efficiently, and with full respect for the client\u2019s property. James prioritizes the preservation of landscaping, structures, and surrounding areas while maintaining smooth, coordinated operations from the ground up.',
};
// === END EDITABLE CONTENT FIELDS ===

export default function MeetTheOwners() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://godhans.com/' },
      { '@type': 'ListItem', position: 2, name: 'Meet the Owners', item: PAGE_URL },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: 'Meet the Owners | Godhans Tree Service | Jacksonville NC',
    description:
      'Meet the owners of Godhans Tree Service in Jacksonville, NC — a family-run team delivering safe, professional tree care across Onslow County.',
    isPartOf: { '@id': 'https://godhans.com/#website' },
    about: { '@id': 'https://godhans.com/#localbusiness' },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://godhans.com/#localbusiness',
    name: BUSINESS_INFO.name,
    url: 'https://godhans.com/',
    telephone: BUSINESS_INFO.phone.tel,
    email: BUSINESS_INFO.email,
    image: OG_IMAGE,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.location.street,
      addressLocality: BUSINESS_INFO.location.city,
      addressRegion: BUSINESS_INFO.location.state,
      postalCode: BUSINESS_INFO.location.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.location.coordinates.latitude,
      longitude: BUSINESS_INFO.location.coordinates.longitude,
    },
  };

  return (
    <>
      <Helmet>
        <title>Meet the Owners | Godhans Tree Service | Jacksonville NC</title>
        <meta
          name="description"
          content="Meet the owners of Godhans Tree Service in Jacksonville, NC — a family-run team delivering safe, professional tree care across Onslow County."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content="Meet the Owners | Godhans Tree Service | Jacksonville NC" />
        <meta
          property="og:description"
          content="Meet the owners of Godhans Tree Service in Jacksonville, NC — a family-run team delivering safe, professional tree care across Onslow County."
        />
        <meta property="og:site_name" content="Godhans Tree Company" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-black text-white">
        <EmergencyBanner />
        <Header />

        <main className="flex-grow">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-10 sm:py-14">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-300">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-gray-200" aria-current="page">Meet the Owners</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Meet the Owners</h1>

            {/* Intro */}
            <section aria-labelledby="intro-heading" className="mb-10">
              <h2 id="intro-heading" className="sr-only">Introduction</h2>
              {INTRO_TEXT ? (
                <p className="text-gray-300 text-lg leading-relaxed">{INTRO_TEXT}</p>
              ) : (
                <p className="text-gray-500 italic">[Introduction text — add via INTRO_TEXT]</p>
              )}
            </section>

            {/* Michael — Owner Photo */}
            <section aria-labelledby="michael-photo-heading" className="mb-8">
              <h2 id="michael-photo-heading" className="sr-only">Photo of Michael</h2>
              <figure className="m-0">
                <div
                  className="relative w-full overflow-hidden rounded-lg bg-gray-900"
                  style={{ aspectRatio: `${MICHAEL_PHOTO_WIDTH} / ${MICHAEL_PHOTO_HEIGHT}` }}
                >
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`${michaelPhoto600Webp} 600w, ${michaelPhoto1200Webp} 1200w`}
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                    <img
                      src={michaelPhoto1200}
                      srcSet={`${michaelPhoto600} 600w, ${michaelPhoto1200} 1200w`}
                      sizes="(max-width: 768px) 100vw, 768px"
                      width={MICHAEL_PHOTO_WIDTH}
                      height={MICHAEL_PHOTO_HEIGHT}
                      alt={MICHAEL_PHOTO_ALT}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </picture>
                </div>
                {MICHAEL_PHOTO_CAPTION && (
                  <figcaption className="mt-2 text-sm text-gray-300">
                    {MICHAEL_PHOTO_CAPTION}
                  </figcaption>
                )}
                {MICHAEL_PHOTO_EXIF && (
                  <p className="mt-1 text-xs text-gray-500">{MICHAEL_PHOTO_EXIF}</p>
                )}
              </figure>
            </section>

            {/* Owner: Michael */}
            <section aria-labelledby="owner-michael" className="mb-10">
              <h2 id="owner-michael" className="text-2xl font-bold mb-2">
                {OWNER_MICHAEL.name || '[Owner name]'}
              </h2>
              {OWNER_MICHAEL.role ? (
                <p className="text-red-600 font-medium mb-3">{OWNER_MICHAEL.role}</p>
              ) : (
                <p className="text-gray-500 italic mb-3">[Role — add via OWNER_MICHAEL.role]</p>
              )}
              {OWNER_MICHAEL.bio ? (
                <p className="text-gray-300 leading-relaxed">{OWNER_MICHAEL.bio}</p>
              ) : (
                <p className="text-gray-500 italic">[Bio — add via OWNER_MICHAEL.bio]</p>
              )}
            </section>

            {/* James — Owner Photo */}
            <section aria-labelledby="james-photo-heading" className="mb-8">
              <h2 id="james-photo-heading" className="sr-only">Photo of James</h2>
              <figure className="m-0">
                <div
                  className="relative w-full overflow-hidden rounded-lg bg-gray-900"
                  style={{ aspectRatio: `${JAMES_PHOTO_WIDTH} / ${JAMES_PHOTO_HEIGHT}` }}
                >
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`${jamesPhoto600Webp} 600w, ${jamesPhoto1200Webp} 1200w`}
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                    <img
                      src={jamesPhoto1200}
                      srcSet={`${jamesPhoto600} 600w, ${jamesPhoto1200} 1200w`}
                      sizes="(max-width: 768px) 100vw, 768px"
                      width={JAMES_PHOTO_WIDTH}
                      height={JAMES_PHOTO_HEIGHT}
                      alt={JAMES_PHOTO_ALT}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </picture>
                </div>
                {JAMES_PHOTO_CAPTION && (
                  <figcaption className="mt-2 text-sm text-gray-300">
                    {JAMES_PHOTO_CAPTION}
                  </figcaption>
                )}
                {JAMES_PHOTO_EXIF && (
                  <p className="mt-1 text-xs text-gray-500">{JAMES_PHOTO_EXIF}</p>
                )}
              </figure>
            </section>

            {/* Owner: Brother */}
            <section aria-labelledby="owner-brother" className="mb-10">
              <h2 id="owner-brother" className="text-2xl font-bold mb-2">
                {OWNER_BROTHER.name || '[Brother name — add via OWNER_BROTHER.name]'}
              </h2>
              {OWNER_BROTHER.role ? (
                <p className="text-red-600 font-medium mb-3">{OWNER_BROTHER.role}</p>
              ) : (
                <p className="text-gray-500 italic mb-3">[Role — add via OWNER_BROTHER.role]</p>
              )}
              {OWNER_BROTHER.bio ? (
                <p className="text-gray-300 leading-relaxed">{OWNER_BROTHER.bio}</p>
              ) : (
                <p className="text-gray-500 italic">[Bio — add via OWNER_BROTHER.bio]</p>
              )}
            </section>

            {/* Internal link back to hub */}
            <div className="mt-10 pt-6 border-t border-gray-800">
              <Link
                to="/tree-service-jacksonville-nc"
                className="text-red-600 hover:text-red-500 font-medium"
              >
                ← Explore our Jacksonville, NC tree services
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
