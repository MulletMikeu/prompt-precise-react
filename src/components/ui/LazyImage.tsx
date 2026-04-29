import { useEffect, useRef, useState, ImgHTMLAttributes } from 'react';

interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  src: string;
  srcSet?: string;
  sizes?: string;
  /** Distance (px) before viewport to start loading. Default 200. */
  rootMargin?: string;
  /** Optional placeholder src shown until in view. Defaults to a 1x1 transparent gif. */
  placeholder?: string;
}

const TRANSPARENT_PIXEL =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/**
 * IntersectionObserver-based lazy image. Defers setting the real `src`/`srcSet`
 * until the element enters the viewport (or near it). Falls back to native lazy
 * loading if IntersectionObserver is unavailable.
 */
export function LazyImage({
  src,
  srcSet,
  sizes,
  rootMargin = '200px',
  placeholder = TRANSPARENT_PIXEL,
  loading = 'lazy',
  decoding = 'async',
  ...rest
}: LazyImageProps) {
  const ref = useRef<HTMLImageElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return (
    <img
      ref={ref}
      src={inView ? src : placeholder}
      srcSet={inView ? srcSet : undefined}
      sizes={inView ? sizes : undefined}
      loading={loading}
      decoding={decoding}
      {...rest}
    />
  );
}
