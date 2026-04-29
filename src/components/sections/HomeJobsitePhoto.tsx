import { Button } from '@/components/ui/CustomButton';
import { BUSINESS_INFO } from '@/lib/constants';
import jobsite600Jpg from '@/assets/tree-service-jacksonville-nc-godhans-home-600.jpg';
import jobsite1200Jpg from '@/assets/tree-service-jacksonville-nc-godhans-home-1200.jpg';
import jobsite600Webp from '@/assets/tree-service-jacksonville-nc-godhans-home-600.webp';
import jobsite1200Webp from '@/assets/tree-service-jacksonville-nc-godhans-home-1200.webp';

/**
 * Real job-site photo section — placed directly below Hero.
 *
 * Upload placeholder metadata (edit these three fields when swapping the photo):
 *   - alt:     SEO-optimized alt text (template — DO NOT rewrite)
 *   - caption: Editable caption shown under the image
 *   - exif:    Optional EXIF / GEO data (set to null if unavailable)
 */
const PHOTO_META = {
  // (1) SEO-optimized alt text — template, do not change
  alt: 'Tree service in Jacksonville NC – real job-site photo by Godhans Tree Service.',
  // (2) Editable caption
  caption: 'Real Godhans Tree Service job site — Jacksonville, NC',
  // (3) Optional EXIF / GEO data (null if not provided)
  exif: null as null | {
    takenAt?: string;
    camera?: string;
    latitude?: number;
    longitude?: number;
    location?: string;
  },
};

// Reserve aspect ratio (intrinsic 458x707) to prevent CLS
const IMG_WIDTH = 1200;
const IMG_HEIGHT = 1853; // 1200 * (707/458)

export function HomeJobsitePhoto() {
  const { exif } = PHOTO_META;

  return (
    <section className="bg-background py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div
          className="w-full mx-auto overflow-hidden rounded-lg bg-muted"
          style={{ aspectRatio: `${IMG_WIDTH} / ${IMG_HEIGHT}` }}
        >
          <picture>
            <source
              type="image/webp"
              srcSet={`${jobsite600Webp} 600w, ${jobsite1200Webp} 1200w`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 768px"
            />
            <source
              type="image/jpeg"
              srcSet={`${jobsite600Jpg} 600w, ${jobsite1200Jpg} 1200w`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 768px"
            />
            <img
              src={jobsite1200Jpg}
              alt={PHOTO_META.alt}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover block"
            />
          </picture>
        </div>

        {PHOTO_META.caption && (
          <p className="mt-3 text-sm text-center text-muted-foreground">
            {PHOTO_META.caption}
          </p>
        )}

        {exif && (
          <ul className="mt-2 text-xs text-center text-muted-foreground space-y-0.5">
            {exif.takenAt && <li>Taken: {exif.takenAt}</li>}
            {exif.camera && <li>Camera: {exif.camera}</li>}
            {exif.location && <li>Location: {exif.location}</li>}
            {exif.latitude != null && exif.longitude != null && (
              <li>
                GEO: {exif.latitude.toFixed(4)}, {exif.longitude.toFixed(4)}
              </li>
            )}
          </ul>
        )}

        <div className="mt-6 flex justify-center">
          <Button
            variant="phone"
            size="lg"
            href={`tel:${BUSINESS_INFO.phone.tel}`}
            className="w-full sm:w-auto"
          >
            Get a Free Estimate — Call {BUSINESS_INFO.phone.display}
          </Button>
        </div>
      </div>
    </section>
  );
}
