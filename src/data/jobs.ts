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
 * Owner-supplied, September 2026. Every row is a real job that was actually
 * invoiced or billed; nothing here is a composite or an illustration.
 *
 * Redaction applied: no customer names, no street addresses or house numbers.
 * "off Piney Green Rd" is a road, and "near the Angry Ginger" is an
 * owner-approved local landmark — both are deliberately coarser than an
 * address. Dates are month-and-year, except the storm job where the on-site
 * days matter to the claim narrative and the owner approved naming them.
 *
 * Two of these are bundled removal-plus-stump-grinding totals. That is fine on
 * the cost page: a bundled total is not a stump-only price. Do NOT split the
 * stump portion out of them anywhere.
 */
export const COMPLETED_JOBS: CompletedJob[] = [
  {
    completed: 'September 2026',
    area: 'Richlands',
    type: 'Tree removal + stump grinding',
    size: '~60 ft oak, growing into a fence',
    access: 'Tight — 8 ft side path to the backyard, worked from both yards',
    price: '$2,800',
    basis: 'invoiced',
    detail:
      'Cut, hauled away and stump ground. Spider lift, Bobcat MT120 mini track loader and Carlton stump grinder. The 8 ft side path ruled out anything bigger, so the job ran from the owner’s yard and the neighbour’s. Invoiced and paid.',
    publish: true,
  },
  {
    completed: 'September 2026',
    area: 'Off Piney Green Rd, Jacksonville',
    type: 'Tree removal + stump grinding',
    size: '~75 ft oak, front yard',
    access: 'Open yard',
    price: '$3,400',
    basis: 'invoiced',
    detail:
      'Cut down, hauled away and stump ground using the 90 ft spider lift. An open front yard is the cheap version of a tree this size — room to work and somewhere to put the pieces. Invoiced and paid.',
    publish: true,
  },
  {
    completed: 'September 2026 (on site Sep 3–4)',
    area: 'Central Jacksonville, near the Angry Ginger',
    type: 'Emergency storm removal',
    size: '~60 ft oak, failed limbs on the house',
    access: 'Over a structure',
    price: '$6,965',
    basis: 'insurance-billed',
    detail:
      'Limbs lifted off the roof, a 20×20 ft emergency tarp over the opening the same visit, and four debris loads. The homeowner paid $0 out of pocket — we handled the entire claim and billed the insurer directly, where other quotes ran $5,000–$10,000 and wanted the homeowner to pay first and wait for reimbursement. Because the standing trunk was left badly compromised, the insurer also approved taking the rest of the tree; that depends on the policy and the adjuster, but we make the case when the remaining tree threatens the house. Billed and paid.',
    publish: true,
  },
];

/** The rows that are actually publishable right now. */
export const publishedJobs = (): CompletedJob[] =>
  COMPLETED_JOBS.filter((job) => job.publish);
