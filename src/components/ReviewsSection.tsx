import { REVIEWS, BUSINESS } from "../data/siteData";

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

export default function ReviewsSection() {
  return (
    <section
      className="section-pad"
      style={{ background: "#111111" }}
      aria-labelledby="reviews-heading"
    >
      <div className="container-brand">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="label-red mb-4">Customer Reviews</p>
            <h2 id="reviews-heading" className="text-display-xl text-white">
              What Jacksonville
              <br />
              <span style={{ color: "#C41230" }}>Is Saying</span>
            </h2>
          </div>

          {/* Rating badge */}
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p
                className="font-display font-800 text-white"
                style={{ fontSize: "3.5rem", lineHeight: 1, color: "#E5C220" }}
              >
                {BUSINESS.reviewRating}
              </p>
              <Stars count={5} />
              <p
                className="font-body text-xs mt-1 uppercase tracking-widest"
                style={{ color: "#888888", letterSpacing: "0.1em" }}
              >
                {BUSINESS.reviewCount} Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "#2A2A2A" }}>
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="p-8 flex flex-col"
              style={{ background: "#111111" }}
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Quote mark */}
              <span
                className="font-display font-800 mb-4 block"
                style={{ fontSize: "4rem", lineHeight: 1, color: "#C41230", opacity: 0.4 }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Stars */}
              <div className="mb-4">
                <Stars count={review.stars} />
              </div>

              {/* Review text */}
              <blockquote
                className="font-body text-base leading-relaxed flex-1 mb-6"
                style={{ color: "#C8C8C2" }}
                itemProp="reviewBody"
              >
                "{review.text}"
              </blockquote>

              {/* Attribution */}
              <footer
                className="flex items-center justify-between mt-auto pt-6"
                style={{ borderTop: "1px solid #2A2A2A" }}
              >
                <div>
                  <p
                    className="font-display font-700 uppercase text-white"
                    style={{ fontSize: "0.95rem", letterSpacing: "0.04em" }}
                    itemProp="author"
                  >
                    {review.name}
                  </p>
                  <p className="font-body text-xs mt-0.5" style={{ color: "#555555" }}>
                    {review.date}
                  </p>
                </div>
                <span
                  className="font-body text-xs uppercase tracking-widest px-3 py-1.5"
                  style={{ color: "#888888", border: "1px solid #2A2A2A", letterSpacing: "0.08em" }}
                >
                  {review.source}
                </span>
              </footer>
            </article>
          ))}
        </div>

        {/* All reviews CTA */}
        <div className="mt-10 text-center">
          
            href={BUSINESS.gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-700 text-sm uppercase tracking-widest inline-flex items-center gap-2 transition-colors"
            style={{ color: "#888888", letterSpacing: "0.1em" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C41230")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
          >
            Read All {BUSINESS.reviewCount} Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}