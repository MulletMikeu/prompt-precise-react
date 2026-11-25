import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import HubBreadcrumb from "../components/HubBreadcrumb";
import { SITE_URL } from "../data/siteData";
import { TREE_TALK_ARTICLES, TREE_TALK_PATH, formatTreeTalkDate, treeTalkUrl } from "../data/treeTalk";

/**
 * /tree-talk — the "Tree Talk with Mike" section index (Ship P). Same layout as
 * /blog. The intro line is the owner-approved sentence, verbatim; nothing else
 * goes above the list.
 */
const TITLE = "Tree Talk with Mike | Godhans Tree Company";
const INTRO =
  "Straight talk on tree care from Michael Godbersen, owner of Godhans Tree Company in Jacksonville, NC.";
const CANONICAL = `${SITE_URL}${TREE_TALK_PATH}`;

export default function TreeTalkPage() {
  const articles = [...TREE_TALK_ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={INTRO} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={INTRO} />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={INTRO} />
      </Helmet>

      <main id="main-content" className="pt-20">
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <HubBreadcrumb name="Tree Talk" path={TREE_TALK_PATH} />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tree Talk with Mike</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>{INTRO}</p>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col gap-px" style={{ background: "#2A2A2A" }}>
              {articles.map((a) => (
                <article key={a.slug} className="p-8 flex flex-col gap-3" style={{ background: "#0A0A0A" }}>
                  <p className="text-sm" style={{ color: "#888888" }}>
                    <time dateTime={a.date}>{formatTreeTalkDate(a.date)}</time>
                  </p>
                  <h2 className="text-xl font-bold">
                    <Link to={treeTalkUrl(a.slug)} className="text-white hover:text-red-500 transition-colors">
                      {a.title}
                    </Link>
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>{a.description}</p>
                  <Link to={treeTalkUrl(a.slug)} className="text-sm font-bold uppercase tracking-widest self-start" style={{ color: "var(--red-text)" }}>
                    Read Tree Talk →
                  </Link>
                </article>
              ))}
              {/* Ship S: one featured card for the cost guide, after the
                  articles so nothing sits above the Tree Talk list. */}
              <article className="p-8 flex flex-col gap-3" style={{ background: "#0A0A0A" }}>
                <p className="text-sm" style={{ color: "#888888" }}>Featured guide</p>
                <h2 className="text-xl font-bold">
                  <Link to="/tree-removal-cost-north-carolina" className="text-white hover:text-red-500 transition-colors">
                    Tree removal cost in Jacksonville, NC
                  </Link>
                </h2>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
