import { Head as Helmet } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { SITE_URL } from '../data/siteData';

/**
 * Home > Page trail for the hub pages (/blog, /services, /reviews,
 * /service-area), added in Ship O. Ship P added the optional `parent` crumb
 * for the Tree Talk articles (Home > Tree Talk > Article). Same visible markup as the /about trail in
 * MeetTheOwners.tsx, plus the matching BreadcrumbList node, so what a reader
 * sees and what a crawler is handed are built from the same two values.
 */
interface Crumb { name: string; path: string }

export default function HubBreadcrumb({ name, path, parent }: Crumb & { parent?: Crumb }) {
  const trail: Crumb[] = [{ name: 'Home', path: '/' }, ...(parent ? [parent] : []), { name, path }];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${c.path}`,
    })),
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
          {parent && (
            <>
              <li>
                <Link to={parent.path} className="hover:text-red-500 transition-colors">{parent.name}</Link>
              </li>
              <li aria-hidden="true">/</li>
            </>
          )}
          <li className="text-gray-200" aria-current="page">{name}</li>
        </ol>
      </nav>
    </>
  );
}
