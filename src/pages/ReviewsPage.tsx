import { Helmet } from "react-helmet-async";
import { BUSINESS, REVIEWS } from "../data/siteData";

const TITLE = "Customer Reviews | Godhans Tree Company Jacksonville, NC";
const DESC = `Read verified Google reviews for Godhans Tree Company — ${BUSINESS.reviewRating} stars across ${BUSINESS.reviewCount} reviews. Veteran-owned tree service in Jacksonville, NC trusted by Onslow County homeowners.`;
const CANONICAL = "https://godhans.com/reviews";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
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
        <meta property="og:image" content="https://godhans.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image.jpg" />
      </Helmet>

      <main id="main-content" className="pt-20">
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="font-body text-xs font-600 uppercase tracking-widest mb-4" style={{ color: "#C41230", letterSpacing: "0.12em" }}>Customer Reviews</p>
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
                  <span className="font-display font-800 mb-4 block" style={{ fontSize: "3rem", lineHeight: 1, color: "#C41230", opacity: 0.4 }} aria-hidden="true">"</span>
                  <div className="mb-4"><Stars count={review.stars} /></div>
                  <blockquote className="text-base leading-relaxed flex-1 mb-6" style={{ color: "#C8C8C2" }} itemProp="reviewBody">
                    "{review.text}"
                  </blockquote>
                  <footer className="flex items-center justify-between pt-6" style={{ borderTop: "1px solid #2A2A2A" }}>
                    <div>
                      <p className="font-bold uppercase text-white text-sm" itemProp="author">{review.name}</p>
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
          </div>
        </section>

        <section className="py-16" style={{ background: "#C41230" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Join Our Happy Customers</h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Free estimates. No obligation. Veteran-owned and always on time.
            </p>
            <a href={BUSINESS.phoneHref} className="font-bold uppercase tracking-wide px-8 py-4 text-center inline-block" style={{ background: "white", color: "#C41230" }}>
              Call {BUSINESS.phone}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
