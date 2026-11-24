/**
 * "Tree Talk with Mike" — Michael's first-hand advice series (Ship P,
 * owner-approved 2026-11-23; see godhans-shared/DECISIONS-addendum-2026-11-23c.md).
 *
 * One entry per article, newest first. /tree-talk renders this list and each
 * article page reads its own entry, so the title, date and summary cannot
 * disagree between the index and the article.
 *
 * Article copy is owner-approved word for word. Do not edit it without a new
 * approval; links may wrap existing words but must not change them.
 */
export interface TreeTalkArticle {
  slug: string;
  /** Visible H1 / list title. */
  title: string;
  /** <title> tag, under 60 characters. */
  metaTitle: string;
  /** Meta description, under 155 characters. Also the one-line list summary. */
  description: string;
  /** Ship date (America/New_York), YYYY-MM-DD. datePublished in the schema. */
  date: string;
}

export const TREE_TALK_PATH = "/tree-talk";

export const TREE_TALK_ARTICLES: TreeTalkArticle[] = [
  {
    slug: "summer-storms-not-hurricanes",
    title: "Tree Talk with Mike: It's the summer storms, not the hurricanes",
    metaTitle: "Summer Storms, Not Hurricanes | Tree Talk with Mike",
    description:
      "Jacksonville's real tree threat is the summer thunderstorm. Mike Godbersen explains why annual inspections and pruning prevent failures.",
    date: "2026-11-23",
  },
];

export const treeTalkUrl = (slug: string) => `${TREE_TALK_PATH}/${slug}`;

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-11-23" -> "November 23, 2026". No Intl, so no locale or clock in it. */
export function formatTreeTalkDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
