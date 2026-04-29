import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { EmergencyBanner } from '@/components/layout/EmergencyBanner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BUSINESS_INFO } from '@/lib/constants';

const PAGE_URL = 'https://godhans.com/meet-the-owners';
const OG_IMAGE = 'https://godhans.com/og-image.jpg';

// === EDITABLE CONTENT FIELDS ===
// Replace the placeholder strings below with the final copy.
const INTRO_TEXT = ''; // TODO: Add short introduction paragraph here.

const OWNER_MICHAEL = {
  name: 'Michael',
  role: '', // TODO: e.g. "Co-Owner & Lead Arborist"
  bio: '',  // TODO: Add Michael's short bio here.
};

const OWNER_BROTHER = {
  name: '', // TODO: Add brother's first name.
  role: '', // TODO: e.g. "Co-Owner & Operations"
  bio: '',  // TODO: Add brother's short bio here.
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
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-400">
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
