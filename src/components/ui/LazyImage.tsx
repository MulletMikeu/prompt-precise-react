import { ImgHTMLAttributes } from 'react';

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  src: string;
  srcSet?: string;
  sizes?: string;
}

/**
 * Image with NATIVE lazy loading. Renders the real `src`/`srcSet` directly, so the
 * SSG-prerendered static HTML ships the actual image — visitors, Googlebot, and
 * non-JS AI crawlers (GPTBot / ClaudeBot / PerplexityBot) all see it — while the
 * browser still defers off-screen fetches via `loading="lazy"`.
 *
 * Previously this used an IntersectionObserver that set the real src only once the
 * element scrolled into view. `useEffect` never runs during SSG prerender, so the
 * static HTML shipped a 1x1 transparent GIF placeholder to every crawler. Native
 * `loading="lazy"` gives the same deferral without hiding the image from prerender.
 */
export function LazyImage({
  src,
  srcSet,
  sizes,
  loading = 'lazy',
  decoding = 'async',
  ...rest
}: LazyImageProps) {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
      {...rest}
    />
  );
}
