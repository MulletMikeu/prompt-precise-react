import { Head as Helmet } from 'vite-react-ssg';
import { BUSINESS, BUSINESS_ID, SITE_URL, WEBSITE_ID } from '../data/siteData';

/**
 * The single canonical LocalBusiness (#business) JSON-LD node plus the WebSite
 * (#website) node, rendered once via RootLayout so they appear on every page's
 * prerendered HTML. Sourced from siteData so NAP updates in ONE place and the
 * structured data follows automatically. Replaces the old hardcoded copy in
 * index.html. There must be exactly one of these per page.
 *
 * Both nodes ship in a single @graph rather than two <script> blocks so the
 * cross-references between them (WebSite.publisher -> #business) resolve inside
 * one document.
 *
 * NO aggregateRating. It used to live here, restating the Google rating on all
 * 35 pages. Google discards site-supplied ratings on LocalBusiness/Organization
 * as self-serving — it rendered no stars while carrying review-snippet policy
 * risk, including on /privacy-policy and /404. The real rating still reaches
 * visitors through <ReviewsSection/> and the GBP link. If star markup is ever
 * wanted back, it has to come from a third-party-attributed source, not from us.
 */
const businessSchema = {
  // NOT 'TreeService' — that type does not exist in the schema.org vocabulary
  // (https://schema.org/TreeService returns 404), which invalidated this node on
  // every page. HomeAndConstructionBusiness is the nearest real LocalBusiness
  // subtype; both are listed so consumers that only understand the base type
  // still resolve it.
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': BUSINESS_ID,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image-v2.jpg`,
  description:
    'Veteran-owned tree service in Jacksonville, NC specializing in tree removal, trimming, stump grinding, and emergency storm cleanup. Locally owned, fully insured with every machine individually covered, free estimates, 24/7 emergency response.',
  telephone: BUSINESS.phoneRaw,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.coordinates.lat,
    longitude: BUSINESS.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      // opens === closes === '00:00' is schema.org's encoding for "open all
      // day". The previous 00:00–23:59 literally asserted a one-minute daily
      // closure, contradicting BUSINESS.hours ("Open 24 Hours — 7 Days a Week").
      opens: '00:00',
      closes: '00:00',
    },
  ],
  priceRange: '$$$',
  foundingDate: String(BUSINESS.founded),
  areaServed: [
    { '@type': 'City', name: 'Jacksonville, NC' },
    { '@type': 'City', name: 'Maysville, NC' },
    { '@type': 'City', name: 'Hubert, NC' },
    { '@type': 'City', name: 'Richlands, NC' },
    { '@type': 'City', name: 'Beulaville, NC' },
    { '@type': 'City', name: 'Swansboro, NC' },
    { '@type': 'City', name: 'Sneads Ferry, NC' },
    { '@type': 'City', name: 'Camp Lejeune, NC' },
    { '@type': 'City', name: 'Holly Ridge, NC' },
    { '@type': 'City', name: 'Surf City, NC' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tree Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tree Removal' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tree Trimming' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stump Grinding' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Tree Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Storm Cleanup' } },
    ],
  },
  sameAs: [BUSINESS.social.facebook, BUSINESS.social.youtube],
};

/**
 * The WebSite node. Added because MeetTheOwners' WebPage node already declared
 * `isPartOf: { '@id': '…/#website' }` against a node that did not exist
 * anywhere on the site — a dangling reference on /about. Now it resolves.
 *
 * No `potentialAction`/SearchAction: the site has no internal search, and
 * asserting one would be false (Google retired the sitelinks searchbox anyway).
 */
const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: BUSINESS.name,
  inLanguage: 'en-US',
  publisher: { '@id': BUSINESS_ID },
};

const graph = {
  '@context': 'https://schema.org',
  '@graph': [businessSchema, websiteSchema],
};

export default function BusinessSchema() {
  // priceRange is unicode-escaped (see the .replace below): vite-react-ssg injects head content via
  // String.replace, where "$$" in the replacement collapses to "$". Any JSON-LD
  // value containing $$ / $& / $` / $' must be escaped the same way.
  const json = JSON.stringify(graph).replace(/\$/g, '\\u0024');
  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  );
}
