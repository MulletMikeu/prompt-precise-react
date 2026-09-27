/**
 * ============================================================================
 * OWNER-SUPPLIED CONTENT — both arrays are intentionally EMPTY.
 * ============================================================================
 *
 * These are real slots waiting on real material, not placeholders to be filled
 * with plausible-sounding examples. Every section that reads from them renders
 * NOTHING while the array is empty, so the site never publishes an invented job,
 * an invented price, or an invented invoice. Add entries and the section appears
 * on the next build; no other code has to change.
 *
 * Rules for whoever fills these in:
 *   - Real jobs and real numbers only. If a price was unusual, say why.
 *   - No customer names, no street addresses, no house numbers. "Area" means a
 *     neighbourhood or a road — "Brynn Marr", "off Gum Branch Rd" — never "1423
 *     Example Ln".
 *   - Photos must be ours, and must be of the job described.
 *   - On the invoice: redact the customer, the address, the claim number and the
 *     adjuster. Keep the line items and the amounts, because the line items are
 *     the entire point.
 */

/** A recent job card for /tree-removal-jacksonville-nc. See RECENT_JOBS rules above. */
export interface RecentJob {
  /** Path under /images/, e.g. "/images/pine-removal-brynn-marr-768.webp". */
  image: string;
  /** Alt text describing what the photo actually shows. */
  imageAlt: string;
  /** What the job was: "70 ft loblolly pine over a detached garage". */
  jobType: string;
  /** Neighbourhood or road only — never a street address. */
  area: string;
  /** What it came to, e.g. "$2,400". */
  price: string;
  /** Optional one line on what made the price what it was. */
  note?: string;
}

/**
 * Cards for the "Recent jobs & what they cost" section on
 * /tree-removal-jacksonville-nc. Aim for 3–5. Section is hidden while empty.
 */
export const RECENT_JOBS: RecentJob[] = [];

/** One redacted line from a real emergency invoice. */
export interface InvoiceLine {
  /** The line item as it appeared on the invoice. */
  description: string;
  /** The amount, e.g. "$3,200". */
  amount: string;
}

/**
 * Line items from a real, redacted tree-on-structure invoice, for the
 * "Sample emergency invoice" section on
 * /emergency-tree-service-jacksonville-nc. Section is hidden while empty.
 */
export const EMERGENCY_INVOICE: InvoiceLine[] = [];

/** Optional total, shown under the line items. Leave empty to omit. */
export const EMERGENCY_INVOICE_TOTAL = '';

/**
 * Optional one-line context for the invoice — what the job was, so the numbers
 * mean something. Leave empty to omit.
 */
export const EMERGENCY_INVOICE_CONTEXT = '';
