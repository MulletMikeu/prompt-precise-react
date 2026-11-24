import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import HubBreadcrumb from "../../components/HubBreadcrumb";
import { AUTHOR, BUSINESS_ID, SITE_URL } from "../../data/siteData";
import { TREE_TALK_ARTICLES, TREE_TALK_PATH, formatTreeTalkDate, treeTalkUrl } from "../../data/treeTalk";

/**
 * Tree Talk with Mike #1 (Ship P). The article text is owner-approved word for
 * word — godhans-shared/audits/tree-talk-with-mike-01-draft.md, between the two
 * `---` lines. Do not edit it without a new approval. The three internal links
 * wrap words that were already in the approved text; they add no words.
 *
 * The photo is an existing site photo of finished trimming (the "after" shot on
 * /tree-trimming-jacksonville-nc), not a generated image, and it is the Article
 * `image` in the structured data.
 */
const ARTICLE = TREE_TALK_ARTICLES.find((a) => a.slug === "summer-storms-not-hurricanes")!;
const PATH = treeTalkUrl(ARTICLE.slug);
const CANONICAL = `${SITE_URL}${PATH}`;
const PHOTO = "limbs-cleared-after-trimming-jacksonville-nc";
const PHOTO_ALT = "Aerial view after trimming showing limbs cleared back behind the roofline in Jacksonville, NC";

const LINK = "text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold";

export default function SummerStormsNotHurricanes() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE.title,
    description: ARTICLE.description,
    datePublished: ARTICLE.date,
    dateModified: ARTICLE.date,
    author: { "@type": "Person", "@id": AUTHOR.personId, name: AUTHOR.name, url: `${SITE_URL}/about` },
    publisher: { "@id": BUSINESS_ID },
    image: `${SITE_URL}/images/${PHOTO}-1024.webp`,
    mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
    isPartOf: { "@type": "CollectionPage", "@id": `${SITE_URL}${TREE_TALK_PATH}`, name: "Tree Talk with Mike" },
  };

  return (
    <>
      <Helmet>
        <title>{ARTICLE.metaTitle}</title>
        <meta name="description" content={ARTICLE.description} />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ARTICLE.metaTitle} />
        <meta property="og:description" content={ARTICLE.description} />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:title" content={ARTICLE.metaTitle} />
        <meta name="twitter:description" content={ARTICLE.description} />
        <script type="application/ld+json">{JSON.stringify(articleSchema).replace(/\$/g, "\\u0024")}</script>
      </Helmet>

      <main id="main-content" className="pt-20 text-white">
        <article className="max-w-3xl mx-auto px-6 lg:px-8 py-14">
          <HubBreadcrumb
            name="It's the summer storms, not the hurricanes"
            path={PATH}
            parent={{ name: "Tree Talk", path: TREE_TALK_PATH }}
          />

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{ARTICLE.title}</h1>
          <p className="text-sm text-gray-400 mb-8">
            <em>
              By{" "}
              <Link to="/about" className="text-gray-200 hover:text-red-500 underline underline-offset-2 transition-colors font-medium">
                Michael Godbersen
              </Link>
              , owner of Godhans Tree Company, Jacksonville NC
            </em>
            {" · "}
            <time dateTime={ARTICLE.date}>{formatTreeTalkDate(ARTICLE.date)}</time>
          </p>

          <figure className="m-0 mb-10">
            <div className="relative w-full overflow-hidden rounded-lg bg-gray-900" style={{ aspectRatio: "4 / 3" }}>
              <picture className="absolute inset-0 block h-full w-full">
                <source
                  type="image/avif"
                  srcSet={`/images/${PHOTO}-480.avif 480w, /images/${PHOTO}-768.avif 768w, /images/${PHOTO}-1024.avif 1024w`}
                  sizes="(min-width: 768px) 720px, 100vw"
                />
                <img
                  src={`/images/${PHOTO}-768.webp`}
                  srcSet={`/images/${PHOTO}-480.webp 480w, /images/${PHOTO}-768.webp 768w, /images/${PHOTO}-1024.webp 1024w`}
                  sizes="(min-width: 768px) 720px, 100vw"
                  width={1024}
                  height={768}
                  alt={PHOTO_ALT}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </picture>
            </div>
          </figure>

          <div className="space-y-5 text-lg leading-relaxed text-gray-300">
            <p>
              People in our community bring up hurricanes with us all the time. Here's what we tell them back: hurricanes that hit our community directly are few and far between. What keeps our phone ringing year after year are the late-night thunderstorms that pop up all summer long. Those are the{" "}
              <Link to="/emergency-tree-service-jacksonville-nc" className={LINK}>emergency calls</Link>
              {" "}we run, over and over.
            </p>

            <h2 className="text-2xl font-bold text-white pt-4">The best remedy is a free annual inspection</h2>
            <p>
              We have never had a customer who gets annual inspections and{" "}
              <Link to="/tree-trimming-jacksonville-nc" className={LINK}>regular tree maintenance</Link>
              {" "}have an unexpected failure. The one small exception was a tree that wasn't endangering a structure, where the customer chose to keep it as long as possible. Even then, good tree care bought that tree a lot more life.
            </p>
            <p>The best practices we use:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Weight reduction:</strong> taking load off long, heavy limbs before a storm does it for you.</li>
              <li><strong className="text-white">Thinning:</strong> opening the canopy so wind passes through instead of pushing the whole crown.</li>
              <li><strong className="text-white">Selective pruning:</strong> removing the right limbs, cut the right way, so the tree can seal the wound.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white pt-4">Why torn limbs are the damage we can't fix</h2>
            <p>
              Here's what we warn every customer about. When a storm rips a limb away from the trunk or a union, the pulled fibers almost never compartmentalize (seal off) properly. If the tear goes past the branch collar, we can't fix it with a proper cleanup cut. That wound stays open.
            </p>
            <p>
              The best way to keep your trees from getting these wounds is regular maintenance using the practices above, done{" "}
              <Link to="/storm-damage-trees-guide" className={LINK}>before the storm</Link>
              {" "}instead of after it.
            </p>
          </div>

          {/* A plain <a>, not <Link>: a full navigation to "/#estimate" makes the
              browser scroll to the hero form card (id="estimate", Ship N) on
              arrival, with or without JavaScript. */}
          <div className="mt-10">
            <a href="/#estimate" className="btn-primary inline-block">
              Schedule a free annual inspection →
            </a>
          </div>
        </article>
      </main>
    </>
  );
}
