import { BUSINESS_ID } from "../data/siteData";

/**
 * The non-visual half of a Review microdata item: the rating, the publish date,
 * and the itemReviewed reference. Shared by <ReviewsSection/> (homepage) and
 * ReviewsPage so the two can never drift apart again.
 *
 * Why each piece is here:
 *
 * - `reviewRating` is a REQUIRED property of Review. The star row is drawn with
 *   bare <svg> paths that carry no itemprop, so before this component every
 *   Review item on / and /reviews was an incomplete item — the largest single
 *   source of "invalid structured data" the audit found.
 *
 * - `itemReviewed` is a <link>, NOT a nested LocalBusiness. The previous markup
 *   opened an inline LocalBusiness scope carrying only a name, and even that
 *   name was empty: `<span itemprop="name" content="…">` does not work, because
 *   microdata only reads the `content` attribute on <meta>. The result was a
 *   second LocalBusiness item per review with no name and no address — i.e. two
 *   invalid items per card instead of one. A <link itemprop> takes its value
 *   from href, so this points at the single canonical #business node that
 *   BusinessSchema emits rather than cloning a partial copy of it.
 *   (<link> with an itemprop is valid anywhere phrasing content is allowed.)
 *
 * Everything is emitted as <meta>/<link>, so nothing renders and nothing can
 * visually contradict the stars beside it.
 */
export default function ReviewMicrodata({
  stars,
  datePublished,
  bestRating,
}: {
  stars: number;
  datePublished: string;
  bestRating: number;
}) {
  return (
    <>
      <link itemProp="itemReviewed" href={BUSINESS_ID} />
      <meta itemProp="datePublished" content={datePublished} />
      <span itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
        <meta itemProp="ratingValue" content={String(stars)} />
        <meta itemProp="bestRating" content={String(bestRating)} />
        <meta itemProp="worstRating" content="1" />
      </span>
    </>
  );
}
