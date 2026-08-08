import { PRICING } from "./siteData";

/**
 * The homepage hero's prose block, sentence by sentence.
 *
 * This is the single source for three surfaces that must agree word for word:
 * the rendered paragraph, the claims restated in fragment form by the comparison
 * table, and the FAQPage JSON-LD in HomePage.tsx — structured data must never
 * assert something a visitor cannot read on the page.
 *
 * Prices interpolate from PRICING, so the homepage cannot drift from
 * /tree-removal-cost-north-carolina.
 *
 * On financing: "flexible terms" and "ask us" is the entire promise. Do not add
 * a down payment, an approval speed, or a payoff period here or anywhere else.
 */
export const PROSE = {
  pricing: `Tree removal in Jacksonville, NC starts at an ${PRICING.removal.minimum} minimum, and most jobs run ${PRICING.removal.most} — you get a written quote before any work starts.`,
  license:
    "North Carolina does not license tree contractors, so instead of claiming a license we don't have, we hand you our insurance certificate: $2M in liability coverage with every machine individually covered.",
  response:
    "A real person answers the phone 24/7, and we respond the same day for hazardous trees.",
  financing:
    "We offer in-house financing with flexible terms, so ask us if you'd rather spread the cost out.",
} as const;
