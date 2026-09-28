import { EMERGENCY_JOB_PHOTOS, EMERGENCY_JOB_INTRO } from '@/data/ownerContent';

/**
 * "A Real Emergency Job, Start to Finish" — the photo proof above the sample
 * invoice on /emergency-tree-service-jacksonville-nc.
 *
 * Renders nothing while EMERGENCY_JOB_PHOTOS is empty.
 *
 * Performance notes, because this page is one of the ones we measure:
 *  - every image is `loading="lazy"`; the section sits well below the fold, so
 *    none of these can become the LCP element or compete with it
 *  - <picture> offers WebP with a JPEG fallback, both pre-sized — the browser
 *    fetches exactly one
 *  - width/height are the intrinsic dimensions, so each card reserves its box
 *    before the bytes arrive and the grid contributes zero CLS
 *  - `sizes` is capped at 320px, matching the widest a card ever renders, so a
 *    phone never requests more pixels than it can show
 *
 * The photos are NOT cropped to a uniform box. They are evidence of damage, and
 * a square crop would cut the thing each caption points at; mixed portrait and
 * landscape is the honest presentation. Cards top-align so ragged heights read
 * as intentional.
 */
export default function EmergencyJobGallery() {
  if (EMERGENCY_JOB_PHOTOS.length === 0) return null;

  return (
    <section
      id="emergency-job"
      className="py-16 bg-gray-950 border-t border-gray-800"
      aria-labelledby="emergency-job-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2
          id="emergency-job-heading"
          className="text-2xl sm:text-3xl font-bold text-white mb-4"
        >
          A Real Emergency Job, Start to Finish
        </h2>
        {EMERGENCY_JOB_INTRO && (
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
            {EMERGENCY_JOB_INTRO}
          </p>
        )}

        <ol className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 list-none m-0 p-0 items-start">
          {EMERGENCY_JOB_PHOTOS.map((photo, i) => (
            <li key={photo.base} className="m-0 p-0" style={{ maxWidth: '320px' }}>
              <figure className="m-0">
                <div className="rounded-lg overflow-hidden border-2 border-gray-800 bg-black">
                  <picture>
                    <source type="image/webp" srcSet={`${photo.base}.webp`} />
                    <img
                      src={`${photo.base}.jpg`}
                      alt={`${photo.caption}, Jacksonville, NC`}
                      width={photo.width}
                      height={photo.height}
                      sizes="(min-width: 1024px) 320px, 45vw"
                      loading="lazy"
                      decoding="async"
                      className="block w-full h-auto"
                    />
                  </picture>
                </div>
                <figcaption className="mt-2 text-gray-300 text-sm leading-snug">
                  <span className="text-gray-500 font-semibold tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>{' '}
                  {photo.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
