/**
 * ============================================================================
 * COMPLETED JOBS — owner-supplied, real, redacted. EMPTY BY DESIGN.
 * ============================================================================
 *
 * This file is the evidence behind the price bands on
 * /tree-removal-cost-north-carolina. It ships EMPTY: the owner supplies the
 * rows. Nothing here may be invented — not a price, not an area, not a tree.
 * A fabricated job on a page whose whole claim is "these are our real numbers"
 * is the one thing that would make the page worse than having no page.
 *
 * The consuming component (<CompletedJobsTable/>) renders NOTHING until at
 * least MIN_PUBLISHED rows have `publish: true`. That threshold is not
 * decoration: one or two rows read as a cherry-picked brag, and a table with a
 * single line in it looks broken. Three is the floor at which a reader can see
 * a spread rather than an anecdote.
 *
 * REDACTION RULES — identical to ownerContent.ts, non-negotiable:
 *   - No customer names. No street names, addresses or house numbers. `area`
 *     means a neighborhood or a road at most.
 *   - No insurance carrier, claim number, policy number or adjuster name.
 *   - No dates finer than month and year.
 *
 * TO PUBLISH: add rows below, set `publish: true` on at least three, and the
 * section appears on its own. No code change is needed to turn it on.
 */

/** How the number in `price` was arrived at. Never blur these together: a
 *  quoted job is not yet a proven one, and an insurance-billed total is a
 *  carrier settlement rather than what a homeowner would pay out of pocket. */
export type JobBasis = 'invoiced' | 'quoted' | 'insurance-billed';

export interface CompletedJob {
  /** Month and year only, e.g. "September 2026". Never a full date. */
  completed: string;
  /** Neighborhood or road only — never a street address. */
  area: string;
  /** Species and what the job was, e.g. "Loblolly pine removal". */
  type: string;
  /** Measured size as we recorded it, e.g. "85 ft, ~34 in diameter". */
  size: string;
  /** What the crew had to work with: "Open yard", "Gate access only", etc. */
  access: string;
  /** The figure, formatted as it would be written, e.g. "$6,000". */
  price: string;
  /** Where `price` comes from. See JobBasis. */
  basis: JobBasis;
  /** One line on what actually set the price. Plain English, no sales copy. */
  detail: string;
  /** Rows render only when true — and only once MIN_PUBLISHED of them are. */
  publish: boolean;
}

/**
 * The minimum number of `publish: true` rows before the section renders at all.
 * Read by the component; changing it here changes the gate in one place.
 */
export const MIN_PUBLISHED = 3;

/**
 * Owner supplies these. Leave empty until then — an empty array is the correct,
 * safe state and hides the section entirely.
 */
export const COMPLETED_JOBS: CompletedJob[] = [];

/** The rows that are actually publishable right now. */
export const publishedJobs = (): CompletedJob[] =>
  COMPLETED_JOBS.filter((job) => job.publish);
