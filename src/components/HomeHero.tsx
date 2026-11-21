import { BUSINESS } from "../data/siteData";
import {
  HERO_IMAGE_BASE,
  HERO_IMAGE_HEIGHT,
  HERO_IMAGE_SIZES,
  HERO_IMAGE_WIDTH,
  heroSrcset,
} from "../data/heroImage";
import HeroQuoteForm from "./HeroQuoteForm";

/**
 * Homepage photo hero (Ship L): full-width job photo with the H1 over it and
 * the two-step estimate form overlapping its bottom edge.
 *
 * The photo is the LCP element. Its srcset/sizes come from src/data/heroImage.ts,
 * which vite.config.ts also reads to preload the AVIF for "/" only.
 *
 * No layout shift: the photo box height comes from CSS (vh, per breakpoint)
 * and does not wait for the image; the form card's position is fixed by a
 * margin, not measured. Framing (object-position per breakpoint) lives in
 * index.css under .home-hero-img.
 */

export default function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-heading">
      <div className="home-hero-media">
        <picture>
          <source type="image/avif" srcSet={heroSrcset("avif")} sizes={HERO_IMAGE_SIZES} />
          <img
            src={`${HERO_IMAGE_BASE}-1280.webp`}
            srcSet={heroSrcset("webp")}
            sizes={HERO_IMAGE_SIZES}
            width={HERO_IMAGE_WIDTH}
            height={HERO_IMAGE_HEIGHT}
            alt="Godhans Tree Company crew removing a tree in Jacksonville, NC with a spider lift, skid steer and stump grinder"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="home-hero-img"
          />
        </picture>
        <div className="home-hero-shade" aria-hidden="true" />
        <div className="container-brand home-hero-copy">
          <h1 id="home-hero-heading" className="home-hero-h1">
            Tree Service in Jacksonville, NC
          </h1>
          <p className="home-hero-sub">
            {`Veteran-owned · Open ${BUSINESS.hoursShort} · ${BUSINESS.reviewRating} on ${BUSINESS.reviewCount} Google reviews`}
          </p>
        </div>
      </div>

      <div className="container-brand home-hero-form">
        <a href={BUSINESS.phoneHref} className="btn-primary home-hero-call">
          Call {BUSINESS.phone}
        </a>
        <HeroQuoteForm />
      </div>
    </section>
  );
}
