import { useState } from 'react';

/**
 * Click-to-play YouTube facade.
 *
 * Nothing from YouTube loads until the visitor taps: the prerendered HTML
 * contains a single <img> (a ~20 KB static thumbnail from i.ytimg.com, lazy,
 * with explicit dimensions so it reserves its box and costs no CLS) and a
 * button. No iframe, no YouTube JS, no cookies.
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
  title,
  caption,
}: {
  /** YouTube video id. */
  id: string;
  /** Used as the img alt AND the iframe title — describe the actual footage. */
  title: string;
  caption?: string;
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
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt={title}
              loading="lazy"
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
