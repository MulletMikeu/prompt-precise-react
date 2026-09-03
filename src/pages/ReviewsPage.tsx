import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import { BUSINESS, REVIEWS } from "../data/siteData";

const TITLE = "Customer Reviews | Godhans Tree Company Jacksonville, NC";
const DESC = `${BUSINESS.reviewRating}-star Google reviews for Godhans Tree Company — ${BUSINESS.reviewCount} verified reviews. Veteran-owned tree service in Jacksonville, NC. Read what customers say.`;
const CANONICAL = "https://godhans.com/reviews";

/**
 * Pulls one verbatim sentence out of a published review in REVIEWS, so a quoted
 * excerpt can never drift from the constant it came from — nothing here is
 * retyped by hand. `contains` is a distinctive fragment of the wanted sentence;
 * if the review text ever changes so the fragment disappears, this falls back
 * to the full review rather than silently quoting the wrong line.
 */
function excerpt(id: number, contains: string): string {
  const review = REVIEWS.find((r) => r.id === id);
  if (!review) return "";
  const sentences = review.text.match(/[^.]+\./g) ?? [review.text];
  return (sentences.find((s) => s.includes(contains)) ?? review.text).trim();
}

function reviewerName(id: number): string {
  return REVIEWS.find((r) => r.id === id)?.name ?? "";
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#E5C220" className="w-4 h-4" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://godhans.com/og-image-v2.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image-v2.jpg" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Helmet>

      <main id="main-content" className="pt-20">
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="font-body text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#E5424F", letterSpacing: "0.12em" }}>Customer Reviews</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">What Jacksonville Is Saying</h1>
            <div className="flex items-center gap-4">
              <p className="text-5xl font-bold" style={{ color: "#E5C220" }}>{BUSINESS.reviewRating}</p>
              <div>
                <Stars count={5} />
                <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "#888888" }}>{BUSINESS.reviewCount} Google Reviews</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "#2A2A2A" }}>
              {REVIEWS.map((review) => (
                <article
                  key={review.id}
                  className="p-8 flex flex-col"
                  style={{ background: "#0A0A0A" }}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <span itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness" itemID="https://godhans.com/#business" style={{ display: "none" }}>
                    <span itemProp="name" content="Godhans Tree Company" />
                  </span>
                  <span className="font-display font-extrabold mb-4 block" style={{ fontSize: "3rem", lineHeight: 1, color: "#C41230", opacity: 0.4 }} aria-hidden="true">"</span>
                  <div className="mb-4"><Stars count={review.stars} /></div>
                  <blockquote className="text-base leading-relaxed flex-1 mb-6" style={{ color: "#C8C8C2" }} itemProp="reviewBody">
                    "{review.text}"
                  </blockquote>
                  <footer className="flex items-center justify-between pt-6" style={{ borderTop: "1px solid #2A2A2A" }}>
                    <div>
                      <p className="font-bold uppercase text-white text-sm" itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">{review.name}</span>
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#888888" }}>{review.date}</p>
                    </div>
                    <span className="text-xs uppercase tracking-widest px-3 py-1.5" style={{ color: "#888888", border: "1px solid #2A2A2A" }}>{review.source}</span>
                  </footer>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href={BUSINESS.gbpUrl} target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest font-bold" style={{ color: "#888888" }}>
                Read All {BUSINESS.reviewCount} Reviews on Google →
              </a>
            </div>

            {/* Every quoted line below is verbatim. The cleanup and
                communication excerpts are pulled straight out of REVIEWS via
                excerpt() so they cannot drift from the published constants; the
                pricing line was read off the live Google listing in the
                browser. Never paraphrase into quotation marks here. */}
            <div className="mt-16 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">What Comes Up Again and Again</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#C8C8C2" }}>
                Read enough of {BUSINESS.reviewCount} reviews and the same three things keep surfacing. They're worth naming, because they're the parts of a tree job people don't think to ask about until it's going badly.
              </p>

              <h3 className="text-lg font-bold text-white mb-2">The cleanup</h3>
              <p className="text-base leading-relaxed mb-2" style={{ color: "#C8C8C2" }}>
                More reviews mention the state of the yard afterward than mention the tree coming down. That tracks with how we work: brush chipped and hauled, wood removed or stacked where you asked, the drop zone raked, and the driveway and street blown clear.
              </p>
              <blockquote className="text-base leading-relaxed mb-2 pl-4" style={{ color: "#C8C8C2", borderLeft: "3px solid #C41230" }}>
                "{excerpt(3, "cleaner than they found it")}"
              </blockquote>
              <p className="text-sm mb-6" style={{ color: "#888888" }}>— {reviewerName(3)}, Google review</p>

              <h3 className="text-lg font-bold text-white mb-2">The communication</h3>
              <p className="text-base leading-relaxed mb-2" style={{ color: "#C8C8C2" }}>
                The second theme is being told what's happening — what it will cost before it starts, when the crew is arriving, and where the job stands while it's underway.
              </p>
              <blockquote className="text-base leading-relaxed mb-2 pl-4" style={{ color: "#C8C8C2", borderLeft: "3px solid #C41230" }}>
                "{excerpt(2, "communicated when they would arrive")}"
              </blockquote>
              <p className="text-sm mb-6" style={{ color: "#888888" }}>— {reviewerName(2)}, Google review</p>

              <h3 className="text-lg font-bold text-white mb-2">The pricing</h3>
              <p className="text-base leading-relaxed mb-2" style={{ color: "#C8C8C2" }}>
                The third is that the number holds. We quote from measurements and the written quote is what you pay — no discovery of new charges once the crew is on site.
              </p>
              <blockquote className="text-base leading-relaxed mb-2 pl-4" style={{ color: "#C8C8C2", borderLeft: "3px solid #C41230" }}>
                "great service and really good prices"
              </blockquote>
              <p className="text-sm mb-6" style={{ color: "#888888" }}>— James, Google review</p>

              <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>
                Worked with us before?{' '}
                <a href={BUSINESS.gbpUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 font-semibold" style={{ color: "#E5424F" }}>
                  Leave us a Google review
                </a>
                {' '}— it's the single most useful thing a past customer can do for a local crew, and we read every one of them.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#C41230" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Join Our Happy Customers</h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Free estimates. No obligation. Veteran-owned and always on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="font-bold uppercase tracking-wide px-8 py-4 text-center" style={{ background: "white", color: "#C41230" }}>Get Free Estimate</Link>
              <a href={BUSINESS.phoneHref} className="font-bold uppercase tracking-wide px-8 py-4 text-center border-2 border-white text-white">{BUSINESS.phone}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
