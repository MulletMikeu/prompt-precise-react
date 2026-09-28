/**
 * ============================================================================
 * OWNER-SUPPLIED CONTENT — real jobs, real numbers, redacted.
 * ============================================================================
 *
 * Nothing in this file may be invented. Every section that reads from it
 * renders NOTHING while its array is empty, so the site never publishes a
 * made-up job, price or invoice.
 *
 * REDACTION RULES — these are non-negotiable and apply to every entry:
 *   - No customer names. No street names, addresses or house numbers. "Area"
 *     means a neighborhood or a road at most.
 *   - No insurance carrier, no claim number, no policy number, no adjuster.
 *   - No dates finer than month and year.
 *   - Photos must be ours, of the job described, with faces, plates, house
 *     numbers and any identifying detail already blurred before they land in
 *     public/images/. Run `node scripts/strip-metadata.mjs <dir>` on anything
 *     new — it losslessly removes EXIF, XMP and C2PA without touching pixels.
 */

/* ------------------------------------------------------------------ jobs -- */

/** A recent job card for /tree-removal-jacksonville-nc. */
export interface RecentJob {
  /** Path under /images/, e.g. "/images/jobs/pine-brynn-marr-768.webp". */
  image: string;
  /** Alt text describing what the photo actually shows. */
  imageAlt: string;
  /** What the job was: "70 ft loblolly pine over a detached garage". */
  jobType: string;
  /** Neighborhood or road only — never a street address. */
  area: string;
  /** What it came to, e.g. "$2,400". */
  price: string;
  /** Optional one line on what made the price what it was. */
  note?: string;
}

/**
 * Cards for "Recent jobs & what they cost" on /tree-removal-jacksonville-nc.
 * Aim for 3–5. Section is hidden while empty.
 */
export const RECENT_JOBS: RecentJob[] = [];

/* ------------------------------------------------- emergency job gallery -- */

export interface JobPhoto {
  /** Path WITHOUT extension — the component builds .webp and .jpg from it. */
  base: string;
  /** Shown under the photo. Alt text is this plus ", Jacksonville, NC". */
  caption: string;
  /** Intrinsic dimensions, so each card reserves its box and costs no CLS. */
  width: number;
  height: number;
}

/**
 * "A Real Emergency Job, Start to Finish" on
 * /emergency-tree-service-jacksonville-nc. Section hidden while empty.
 *
 * Photos are already sized for the grid (max ~320px wide on screen) and are
 * served at their natural aspect ratio — deliberately NOT cropped to a uniform
 * box, because these are evidence of damage and a crop could remove the very
 * thing the caption points at.
 */
export const EMERGENCY_JOB_PHOTOS: JobPhoto[] = [
  { base: '/images/jobs/massey/massey-01-limbs-on-roof', caption: 'Storm-broken oak limbs across the roof', width: 480, height: 640 },
  { base: '/images/jobs/massey/massey-02-oak-on-house', caption: 'Oak failure over the home and back porch', width: 640, height: 480 },
  { base: '/images/jobs/massey/massey-03-roof-puncture', caption: 'Where a limb punched through the roof', width: 480, height: 640 },
  { base: '/images/jobs/massey/massey-04-leaning-trunk', caption: 'The storm-damaged oak, still standing over the house', width: 480, height: 640 },
  { base: '/images/jobs/massey/massey-05-trunk-dismantled', caption: 'Compromised trunk taken down in sections', width: 640, height: 480 },
  { base: '/images/jobs/massey/massey-06-roof-tarped', caption: 'Opening tarped the same visit to keep rain out', width: 480, height: 640 },
];

/** Intro line above the gallery. Empty string hides it. */
export const EMERGENCY_JOB_INTRO =
  "A Jacksonville home after a September 2026 storm. Photos from the job; the homeowner's details are removed.";

/* -------------------------------------------------------------- invoices -- */

export interface InvoiceRow {
  description: string;
  /** Quantity as written on the invoice, e.g. "8 hr", "4 loads", "1 event". */
  qty: string;
  /** Unit rate, e.g. "$145". Blank for flat-rate lines with no unit price. */
  rate: string;
  /** Line amount, e.g. "$1,160". */
  amount: string;
}

export interface InvoiceSection {
  title: string;
  /** One line on how this section behaves in a claim. Plain English. */
  note?: string;
  rows: InvoiceRow[];
  subtotal: string;
}

export interface EmergencyInvoice {
  /** Short description of the job. Month and year only. */
  context: string;
  sections: InvoiceSection[];
  total: string;
}

/**
 * Real, redacted emergency invoices for
 * /emergency-tree-service-jacksonville-nc. Section hidden while empty.
 *
 * Split into two sections on purpose, because the split is the single most
 * useful thing a homeowner can understand about one of these bills: emergency
 * MITIGATION (getting the tree off and the hole covered) is generally not what
 * the small tree-debris sublimit applies to, while DEBRIS HAUL-AWAY generally
 * is. See /storm-cleanup-jacksonville-nc for how that works.
 *
 * Every row here has been checked: qty x rate = amount, rows sum to the section
 * subtotal, and the subtotals sum to the total.
 */
export const EMERGENCY_INVOICES: EmergencyInvoice[] = [
  {
    context:
      'Oak limbs through a roof, tree then removed (Sept 2026). 3-person crew, 8 hours over two days. Billed directly to the homeowner’s insurance.',
    sections: [
      {
        title: 'Section A — Emergency mitigation',
        note: 'Typically not capped by the tree-debris sublimit.',
        rows: [
          { description: 'Emergency mobilization & demobilization', qty: '1 event', rate: '$1,200', amount: '$1,200' },
          { description: '90 ft spider lift (limbs off the roof; compromised tree dismantled)', qty: '8 hr', rate: '$145', amount: '$1,160' },
          { description: 'Rigging gear, saws & small equipment', qty: '2 days', rate: '$485', amount: '$970' },
          { description: 'Emergency roof tarp (20×20, sandbag-ballasted, our crew)', qty: '1 job', rate: '$350', amount: '$350' },
          { description: 'Owner / lead arborist', qty: '8 hr', rate: '$135', amount: '$1,080' },
          { description: 'Ground crew', qty: '8 hr', rate: '$70', amount: '$560' },
          { description: 'Ground crew (2nd)', qty: '6 hr', rate: '$70', amount: '$420' },
        ],
        subtotal: '$5,740',
      },
      {
        title: 'Section B — Debris haul-away',
        note: 'Counts against the tree-debris sublimit, often around $500 per loss in NC — check your declarations page.',
        rows: [
          { description: 'Dump-trailer hauling', qty: '4 loads', rate: '$225', amount: '$900' },
          { description: 'Disposal fees', qty: '1 lot', rate: '$325', amount: '$325' },
        ],
        subtotal: '$1,225',
      },
    ],
    total: '$6,965',
  },
  {
    context:
      '~90 ft oak uprooted onto a home and shed. 4-person crew, 12 hours. Billed directly to insurance.',
    sections: [
      {
        title: 'Section A — Emergency mitigation',
        note: 'Typically not capped by the tree-debris sublimit.',
        rows: [
          { description: 'Emergency mobilization & demobilization', qty: '1 event', rate: '$1,200', amount: '$1,200' },
          { description: 'Spider crane + certified operator', qty: '2 hr', rate: '$475', amount: '$950' },
          { description: '90 ft spider lift', qty: '12 hr', rate: '$145', amount: '$1,740' },
          { description: 'Compact track loader', qty: '2 hr', rate: '$140', amount: '$280' },
          { description: 'Mini track loader', qty: '12 hr', rate: '$95', amount: '$1,140' },
          { description: 'Rigging gear, saws & small equipment', qty: '1 day', rate: '$485', amount: '$485' },
          { description: 'Emergency roof tarping — home & shed (roofing crew, incl. return trip)', qty: '1 job', rate: '$850', amount: '$850' },
          { description: 'Owner / lead arborist', qty: '14 hr', rate: '$135', amount: '$1,890' },
          { description: 'Safety supervisor', qty: '12 hr', rate: '$95', amount: '$1,140' },
          { description: 'Heavy equipment operator', qty: '12 hr', rate: '$85', amount: '$1,020' },
          { description: 'Ground crew', qty: '12 hr', rate: '$70', amount: '$840' },
        ],
        subtotal: '$11,535',
      },
      {
        title: 'Section B — Debris haul-away',
        note: 'Counts against the tree-debris sublimit, often around $500 per loss in NC — check your declarations page.',
        rows: [
          { description: 'Debris processing & loading', qty: '1 job', rate: '$750', amount: '$750' },
          { description: 'Dump-trailer hauling', qty: '4 loads', rate: '$225', amount: '$900' },
          { description: 'Disposal fees', qty: '1 lot', rate: '$325', amount: '$325' },
          { description: 'Uprooted stump — cut flush & make safe', qty: '1 job', rate: '$425', amount: '$425' },
          { description: 'Final site cleanup', qty: '1 job', rate: '$225', amount: '$225' },
        ],
        subtotal: '$2,625',
      },
    ],
    total: '$14,160',
  },
];

/** Standing caveat under the invoices. Empty string hides it. */
export const EMERGENCY_INVOICE_CAVEAT =
  'Every emergency is different — these show how we itemize, not a set price. Your deductible is always yours.';

/* --------------------------------------------------------- resistograph -- */

/**
 * The resistograph printout from the pecan described on
 * /resistograph-tree-testing-jacksonville-nc. Figure hidden while `base` is
 * empty.
 */
export const RESISTOGRAPH_PRINTOUT = {
  /** Path WITHOUT extension; the component builds .webp and .jpg. */
  base: '/images/jobs/resistograph-pecan',
  alt: 'Resistograph density printout from a pecan tree test, Onslow County, NC',
  caption:
    "Resistograph reading from a pecan we tested about four years ago: under 20% decay. We trimmed it to reduce weight, and it's still standing — we trimmed it again this year.",
  width: 960,
  height: 486,
};
