import { Head as Helmet } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { SITE_URL } from '../data/siteData';

/**
 * Two-crumb Home > Page trail for the hub pages (/blog, /services, /reviews,
 * /service-area), added in Ship O. Same visible markup as the /about trail in
 * MeetTheOwners.tsx, plus the matching BreadcrumbList node, so what a reader
 * sees and what a crawler is handed are built from the same two values.
 */
export default function HubBreadcrumb({ name, path }: { name: string; path: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-300">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-200" aria-current="page">{name}</li>
        </ol>
      </nav>
    </>
  );
}
