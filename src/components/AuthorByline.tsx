import { Link } from 'react-router-dom';
import { AUTHOR } from '@/data/siteData';

/**
 * Month names for the visible date. Written out rather than formatted with
 * `Intl`/`toLocaleDateString` because the visible string has to be identical in
 * the prerendered HTML and in the browser that hydrates it: locale data and the
 * local time zone are both properties of whoever is rendering, and either one
 * drifting turns a byline into a hydration mismatch. Splitting the ISO string
 * by hand has no clock and no locale in it at all.
 */
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
] as const;

/** "2026-09-28" -> "September 28, 2026". Returns the input unchanged if it is
 *  not a plain ISO date, so a typo degrades to a visible wrong-looking string
 *  rather than "NaN undefined". */
function formatUpdated(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const [, year, month, day] = match;
  const name = MONTHS[Number(month) - 1];
  if (!name) return iso;
  return `${name} ${Number(day)}, ${year}`;
}

export interface AuthorBylineProps {
  /**
   * The page's real last-modified date as a plain ISO date (YYYY-MM-DD), taken
   * from git history for that page — NOT today's date. A byline that restamps
   * itself on every deploy is a freshness claim we did not earn, and stamping
   * ten pages with one date asserts they were all revised together.
   */
  updated: string;
}

/**
 * "By Michael Godbersen, Owner · Updated September 28, 2026" — the visible
 * authorship line on the guide pages.
 *
 * The name and role come from AUTHOR in siteData, so they can never disagree
 * with the Person node in the structured data or with the H2 on /about. The
 * name links to /about, which is where that Person node resolves, so a reader
 * and a crawler follow the same path from the claim to the credentials.
 *
 * The date is in a <time dateTime> element: the machine-readable value is the
 * ISO string, and the human-readable text is the formatted one, rather than
 * asking a parser to guess at prose.
 *
 * NOT rendered on /tree-removal-cost-north-carolina or
 * /stump-grinding-jacksonville-nc — those two are the treatment and control of
 * a live A/B test, and adding a byline to one side of it would change what the
 * test is measuring.
 */
export default function AuthorByline({ updated }: AuthorBylineProps) {
  return (
    <p className="mt-4 text-sm text-gray-400">
      By{' '}
      <Link
        to="/about"
        className="text-gray-200 hover:text-red-500 underline underline-offset-2 transition-colors font-medium"
      >
        {AUTHOR.name}
      </Link>
      , {AUTHOR.role}
      {' · '}
      Updated <time dateTime={updated}>{formatUpdated(updated)}</time>
    </p>
  );
}
