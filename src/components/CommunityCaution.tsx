import { Link } from "react-router-dom";
import { TREE_TALK_ARTICLES, treeTalkUrl } from "../data/treeTalk";

/**
 * "Community Caution from Mike" (Ship P). Owner-approved text, verbatim — do
 * not rephrase. Placed on /, /emergency-tree-service-jacksonville-nc and
 * /tree-trimming-jacksonville-nc, never above the hero or the lead form.
 *
 * Deliberately plain: a bordered note in the site's own colours, no icon, no
 * emoji, no full-width banner bar. Links to the Tree Talk article it summarises.
 */
const ARTICLE = TREE_TALK_ARTICLES.find((a) => a.slug === "summer-storms-not-hurricanes")!;

export default function CommunityCaution({ className = "" }: { className?: string }) {
  return (
    <aside
      aria-label="Community Caution from Mike"
      className={`border-l-4 p-5 sm:p-6 ${className}`}
      style={{ borderColor: "var(--red)", background: "#111111" }}
    >
      <p className="text-base leading-relaxed m-0" style={{ color: "#C8C8C2" }}>
        <strong className="text-white">Community Caution from Mike:</strong>{" "}
        Direct hurricane hits are rare here. Summer thunderstorms cause most of our emergency calls. A free annual inspection is the best protection.{" "}
        <Link
          to={treeTalkUrl(ARTICLE.slug)}
          className="font-semibold underline underline-offset-2 whitespace-nowrap"
          style={{ color: "var(--red-text)" }}
        >
          Read Tree Talk →
        </Link>
      </p>
    </aside>
  );
}
