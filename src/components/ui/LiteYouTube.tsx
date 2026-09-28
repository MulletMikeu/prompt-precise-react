import { useState } from 'react';

/**
 * Click-to-play YouTube facade.
 *
 * Nothing from YouTube loads until the visitor taps: the prerendered HTML
 * contains a single <img> (a ~10-20 KB thumbnail served from OUR OWN origin,
 * with explicit dimensions so it reserves its box and costs no CLS) and a
 * button. No iframe, no YouTube JS, no cookies, and no third-party request at
 * all until the tap.
 *
 * The thumbnail is self-hosted on purpose, and it was measured. Pointing the
 * <img> at i.ytimg.com cost 600ms of LCP whenever the extra DNS + TLS handshake
 * landed inside the measurement window — worth 4-5 Lighthouse points, and
 * bimodal run to run (79/74 on the same page and build) depending on whether it
 * did. Serving the same bytes from our own origin removes the handshake, reuses
 * the existing connection, and picks up the year-long immutable cache header
 * that vercel.json already sets for images.
 *
 * Trade-off worth knowing: the thumbnail no longer tracks YouTube. If the video
 * is replaced, re-download it (i.ytimg.com/vi/<id>/hqdefault.jpg) into
 * public/images/.
 *
 * A real YouTube <iframe> pulls roughly a megabyte of script across several
 * requests and runs it on the main thread — on a page like this it is the single
 * most expensive thing that could be on it, and the reason analytics was pulled
 * from this site once before was a PageSpeed regression. Same rule applies here.
 *
 * On tap we swap in youtube-nocookie.com with autoplay, so the tap that reveals
 * the player is also the tap that starts it — one interaction, not two.
 */
export default function LiteYouTube({
  id,
  thumbnail,
  title,
  caption,
  priority = false,
}: {
  /** YouTube video id — used only for the iframe src, after the tap. */
  id: string;
  /**
   * Path to the SELF-HOSTED poster under /images/. Required: we never point the
   * <img> at a third-party origin. Grab it from
   * https://i.ytimg.com/vi/<id>/hqdefault.jpg and commit it.
   */
  thumbnail: string;
  /** Used as the img alt AND the iframe title — describe the actual footage. */
  title: string;
  caption?: string;
  /**
   * Set this when the facade sits ABOVE THE FOLD.
   *
   * Lazy-loading an above-the-fold image defers the very paint the score is
   * measuring, so the facade in the leadBlock slot on
   * /spider-lift-tree-removal-jacksonville-nc sets this. Leave it false for
   * anything below the fold, where lazy is correct and costs nothing.
   */
  priority?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="m-0">
      <div
        className="relative w-full overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-900"
        style={{ aspectRatio: '16 / 9' }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full cursor-pointer p-0 border-0 bg-transparent"
            aria-label={`Play video: ${title}`}
          >
            <img
              src={thumbnail}
              alt={title}
              loading={priority ? 'eager' : 'lazy'}
              fetchPriority={priority ? 'high' : 'auto'}
              decoding="async"
              width={480}
              height={360}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <span
                className="flex items-center justify-center rounded-full border-2 border-white transition-colors duration-200 group-hover:bg-red-600 group-hover:border-red-600"
                style={{ width: '4rem', height: '4rem', background: 'rgba(10,10,10,0.55)' }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-gray-400 text-base">{caption}</figcaption>
      )}
    </figure>
  );
}
