import { Clock, Medal, ShieldCheck, Star, Trees } from "lucide-react";
import { BUSINESS } from "../data/siteData";

/**
 * Homepage trust banner (Ship L), directly under the hero form.
 *
 * Every figure reads from BUSINESS, so it moves with the rest of the site. The
 * jobs line leads and is set larger: it is the one claim here no competitor
 * can borrow.
 */
const ITEMS = [
  { icon: Star, text: `${BUSINESS.reviewRating}★ — ${BUSINESS.reviewCount} Google reviews` },
  { icon: Medal, text: "Veteran-owned" },
  { icon: ShieldCheck, text: "$2M insured" },
  { icon: Clock, text: `Open ${BUSINESS.hoursShort}` },
] as const;

export default function TrustBanner() {
  return (
    <section className="trust-banner" aria-label="Why homeowners trust Godhans">
      <div className="container-brand">
        <ul className="trust-banner-list">
          <li className="trust-banner-lead">
            <Trees aria-hidden="true" className="trust-banner-icon" />
            <span>{`${BUSINESS.jobsCompleted} jobs completed in ${BUSINESS.county} since ${BUSINESS.founded}`}</span>
          </li>
          {ITEMS.map(({ icon: Icon, text }) => (
            <li key={text} className="trust-banner-item">
              <Icon aria-hidden="true" className="trust-banner-icon" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
