import { Head as Helmet } from 'vite-react-ssg';
import { BUSINESS } from '../data/siteData';

/**
 * The single canonical LocalBusiness (#business) JSON-LD node, rendered once via
 * RootLayout so it appears on every page's prerendered HTML. Sourced from
 * siteData — so the aggregateRating (BUSINESS.reviewRating / reviewCount) and NAP
 * update in ONE place and the structured data follows automatically. Replaces the
 * old hardcoded copy in index.html. There must be exactly one of these per page.
 */
const businessSchema = {
  '@context': 'https://schema.org',
  // NOT 'TreeService' — that type does not exist in the schema.org vocabulary
  // (https://schema.org/TreeService returns 404), which invalidated this node on
  // every page. HomeAndConstructionBusiness is the nearest real LocalBusiness
  // subtype; both are listed so consumers that only understand the base type
  // still resolve it.
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': 'https://godhans.com/#business',
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: 'https://godhans.com',
  logo: 'https://godhans.com/logo.png',
  image: 'https://godhans.com/og-image.jpg',
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
      opens: '00:00',
      closes: '23:59',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BUSINESS.reviewRating,
    reviewCount: String(BUSINESS.reviewCount),
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [BUSINESS.social.facebook, BUSINESS.social.youtube],
};

export default function BusinessSchema() {
  // priceRange is unicode-escaped (see the .replace below): vite-react-ssg injects head content via
  // String.replace, where "$$" in the replacement collapses to "$". Any JSON-LD
  // value containing $$ / $& / $` / $' must be escaped the same way.
  const json = JSON.stringify(businessSchema).replace(/\$/g, '\\u0024');
  return (
    <Helmet>
      <script type="application/ld+json">{json}</script>
    </Helmet>
  );
}
