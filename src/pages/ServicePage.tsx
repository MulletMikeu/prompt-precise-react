import type { ReactNode } from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import AuthorByline from '@/components/AuthorByline';
import { OtherCitiesWeServe } from '@/components/sections/OtherCitiesWeServe';
import { QuickQuoteForm } from '@/components/sections/QuickQuoteForm';
import { LazyImage } from '@/components/ui/LazyImage';
import WhyChooseGodhans from '@/components/WhyChooseGodhans';
import { BUSINESS_INFO } from '@/lib/constants';
import { BUSINESS, SITE_URL } from '@/data/siteData';
import type { DamageNoun } from '@/data/siteData';

/**
 * The hero renders inside a max-w-5xl (1024px) container with page padding, so
 * it is never wider than ~1024px and is full-bleed below 640px. The preload
 * below MUST use the same value as the <source> elements or the browser
 * preloads one candidate and then picks another.
 */
const HERO_SIZES = '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px';

const LOCATION_SLUGS = new Set([
  'tree-service-jacksonville-nc',
  'tree-service-camp-lejeune-nc',
  'tree-service-swansboro-nc',
  'tree-service-sneads-ferry-nc',
  'tree-service-richlands-nc',
  'tree-service-hubert-nc',
]);

interface FaqItem {
  question: string;
  answer: string;
  /**
   * Optional link rendered under the answer. Deliberately NOT folded into
   * `answer`: the FAQPage schema below serialises `answer` verbatim, and
   * structured data must stay plain text.
   */
  link?: SectionLink;
}

interface RelatedService {
  label: string;
  href: string;
}

interface SectionLink {
  href: string;
  label: string;
}

interface GuideLink {
  href: string;
  label: string;
  /** One line on what the guide answers, so the anchor isn't a bare list item. */
  blurb?: string;
}

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
}

interface ServicePageProps {
  /** Rendered as the page H1 AND, by default, used to build the <title>. */
  title: string;
  /**
   * Overrides the <title>/og:title/twitter:title only, leaving the H1 alone.
   * `title` + " | Godhans Tree Company" costs 23 characters of suffix, which
   * pushed several pages past the ~60-char limit search results truncate at.
   * Set this to a short, complete title (no suffix is appended) when the H1
   * you want on the page is longer than the title you want in search.
   */
  metaTitle?: string;
  subtitle?: string;
  slug: string;
  description: string;
  ctaText?: string;
  /**
   * Rendered immediately after the hero, ABOVE the hero image and the quick
   * answer — i.e. the first thing under the H1 block on a phone. Reserved for
   * content that has to be seen before anything else; currently the storm /
   * insurance block on the two emergency pages, where someone with a tree
   * through their roof should not have to scroll to learn we tarp and bill the
   * insurer.
   */
  leadBlock?: ReactNode;
  quickAnswer?: string;
  /**
   * Opt-in author byline under the hero. Pass the page's own last-modified date
   * as a plain ISO date (YYYY-MM-DD) from git history; passing it is what turns
   * the byline on. Omit it and nothing renders — the service and city pages are
   * company pages, not signed articles, and the two A/B test pages are excluded
   * on purpose (see the note in <AuthorByline/>).
   */
  authorUpdated?: string;
  /**
   * Rich content rendered between the quick answer and the first section.
   *
   * Exists for the one case where a block has to sit ABOVE the prose rather
   * than after it: a price table on a pricing page, which is what the reader
   * came for and should not have to scroll eight sections to reach. `caseStudy`
   * below is the same kind of slot but renders after the sections, which is
   * right for proof and wrong for the headline answer.
   *
   * Optional and undefined on all other pages, so adding it changed no other
   * page's output — including the live A/B control. Keep it that way.
   */
  priceBlock?: ReactNode;
  sections: { heading: string; text: string }[];
  /**
   * Rich content placed INSIDE a section's prose block, keyed by the same
   * positional index as `sectionLinks`. For a photograph that belongs to a
   * specific passage of a specific section rather than to the page — the
   * pine-ladder tree on /tree-removal-cost-north-carolina is the only one so
   * far. `gallery` groups photos into their own band at the end of the page and
   * `caseStudy` sits after all the prose; neither can put a picture next to the
   * paragraph it illustrates, which is the whole point of this slot.
   *
   * It renders as the first child of the prose div, so a `float-*` figure wraps
   * the opening paragraphs on wide screens and stacks above them on a phone.
   *
   * Optional and undefined on every other page, so adding it changes no other
   * page's output — including the live A/B control, whose HTML was verified
   * byte-identical across this change. Keep it that way: same discipline as
   * `priceBlock` above.
   */
  sectionFigures?: Record<number, ReactNode>;
  /**
   * Rich replacement for a section's `text`, keyed by the same positional index
   * as `sectionFigures`. When present for index i, it renders INSTEAD of
   * `sections[i].text`.
   *
   * Why this exists: `sections[].text` is a plain string, so a section body
   * could not contain a link. Every "editorial" internal link on the site was
   * therefore a button under the prose, a list item, or a card — an audit of
   * all 38 prerendered pages found zero anchors inside any section's running
   * text. A link inside a sentence, with the sentence as its context, is worth
   * considerably more than the same href in a list, both to a reader deciding
   * whether to follow it and to anything parsing the page.
   *
   * It renders into the SAME `whitespace-pre-line` container as the string
   * form, so "\n\n" inside the JSX still makes a paragraph break and the
   * rendered result is identical apart from the anchors. Write bodies as
   * `<>{"…text\n\nmore "}<Link to="/x">anchor</Link>{" tail."}</>`.
   *
   * Optional and undefined on every page that does not pass it, which emits
   * exactly what it emitted before — including the live A/B control, whose HTML
   * was verified byte-identical across this change. Same discipline as
   * `priceBlock` and `sectionFigures`: opt in, never retrofit by default.
   */
  sectionBodies?: Record<number, ReactNode>;
  sectionLinks?: Record<number, SectionLink | SectionLink[]>;
  faqs?: FaqItem[];
  /**
   * Where the FAQ block renders.
   *
   * 'late' (the default, and the only behaviour before this prop existed) puts
   * it in template order: after the credential block, the hero/related-service
   * cross-link bands and the guides list. Measured across the site that put
   * every FAQ between 58% and 90% of the way down its page — behind two blocks
   * of boilerplate links — even though the FAQs are the only question-phrased,
   * schema-marked, directly quotable content on these pages.
   *
   * 'early' renders it immediately after `caseStudy` and before
   * <WhyChooseGodhans/>, i.e. straight after the page's own prose.
   *
   * Default-off on purpose: flipping the default would move the FAQ on the live
   * A/B control. The control and the treatment both keep 'late' until the test
   * ends; everything else opts in.
   */
  faqPosition?: 'early' | 'late';
  /** Optional rich, semantic content rendered after the sections and before the FAQ
   *  (e.g. a case-study proof block). Full JSX so it can carry headings/links/figures. */
  caseStudy?: ReactNode;
  /** When true, renders the shared <WhyChooseGodhans/> (single-source trust block). */
  credentialBlock?: boolean;
  /**
   * Audience noun for the credential block's insurance sentence. Commercial
   * buyers don't necessarily own a home on the site, so that page reads
   * "damages your property"; everything else keeps the default "home".
   */
  credentialDamageNoun?: DamageNoun;
  finalCta?: { heading: string; text: string; buttonText?: string };
  /**
   * "Guides & Pricing" block rendered just before the FAQ. The guide and
   * specialty pages were only reachable through /blog, which left them starved
   * of internal links while the nav pages piled them up; this is the slot that
   * feeds them from the service pages that actually rank.
   */
  guides?: { heading?: string; intro?: string; links: GuideLink[] };
  relatedServices?: RelatedService[];
  heroImage?: {
    src: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
    geo?: string;
    showCta?: boolean;
    /**
     * AVIF candidates, offered first. Roughly half the bytes of the equivalent
     * WebP on these photos, which is what moved the hero-LCP pages.
     */
    avifSrcSet?: string;
    webpSrcSet?: string;
    jpgSrcSet?: string;
    sizes?: string;
  };
  gallery?: { heading?: string; images: GalleryImage[] };
}

/**
 * Middle breadcrumb crumb, or null for a two-crumb trail.
 *
 * Every label here MUST resolve to a page that actually is that category. All
 * three labels used to point at /tree-service-jacksonville-nc — a city page
 * titled "Tree Company in Jacksonville, NC" — so 20 pages asserted a
 * Services/Locations/Resources hierarchy the site does not have. Now "Services"
 * goes to /services and "Locations" goes to /service-area, both of which are
 * real hubs listing exactly what the crumb claims.
 *
 * "Resources" is gone rather than repointed: the guide pages (cost, permits,
 * storm damage, trimming-vs-pruning…) have no hub page of their own — /blog
 * lists some but not all — so any target would have been a guess. Those pages
 * now carry a truthful two-crumb Home > Page trail instead of a fabricated
 * middle level. Give them a real hub later and add the branch back.
 */
function getBreadcrumbCategory(slug: string): { name: string; slug: string } | null {
  // The Jacksonville hub sits directly under Home.
  if (slug === 'tree-service-jacksonville-nc') return null;
  if (slug.startsWith('tree-service-')) {
    return { name: 'Service Area', slug: 'service-area' };
  }
  if (
    slug.includes('removal') || slug.includes('trimming') || slug.includes('grinding') ||
    slug.includes('emergency') || slug.startsWith('commercial-') || slug.startsWith('residential-')
  ) {
    return { name: 'Services', slug: 'services' };
  }
  return null;
}

export default function ServicePage({ title, metaTitle, subtitle, slug, description, ctaText, leadBlock, quickAnswer, authorUpdated, priceBlock, sections, sectionFigures, sectionBodies, sectionLinks, faqs, faqPosition = 'late', caseStudy, credentialBlock, credentialDamageNoun, finalCta, guides, relatedServices, heroImage, gallery }: ServicePageProps) {
  const canonical = `${SITE_URL}/${slug}`;
  const breadcrumbCategory = getBreadcrumbCategory(slug);
  const pageTitle = metaTitle ?? `${title} | ${BUSINESS_INFO.name}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      ...(breadcrumbCategory ? [{ "@type": "ListItem", "position": 2, "name": breadcrumbCategory.name, "item": `${SITE_URL}/${breadcrumbCategory.slug}` }] : []),
      { "@type": "ListItem", "position": breadcrumbCategory ? 3 : 2, "name": title }
    ]
  };

  /**
   * One definition, rendered at whichever of the two slots `faqPosition`
   * selects. Extracted so the two positions cannot drift apart: the markup an
   * 'early' page emits is the same markup a 'late' page emits, which is what
   * makes the control's output provably unchanged by this prop existing.
   */
  const faqBlock = faqs && faqs.length > 0 ? (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-800 pb-6">
              <h3 className="text-white font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              {faq.link && (
                <Link
                  to={faq.link.href}
                  className="inline-block mt-2 text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold"
                >
                  {faq.link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : null;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="build-marker" content="helmet-v2-2026-04-19" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />

        {/* Preload the hero, which is the LCP element on every page that has
            one. Without this the browser cannot discover it until the CSS has
            arrived and laid the section out. AVIF only, with a matching `sizes`
            — a browser that cannot decode the type skips the preload rather
            than wasting it, and falls through to the <source> chain. */}
        {heroImage?.avifSrcSet && (
          <link
            rel="preload"
            as="image"
            type="image/avif"
            imageSrcSet={heroImage.avifSrcSet}
            imageSizes={heroImage.sizes || HERO_SIZES}
          />
        )}

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        {faqs && faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })}
          </script>
        )}
      </Helmet>

      <main id="main-content" className="flex-grow pt-20">
          {/* Hero */}
          <section className="bg-black py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {title}
              </h1>
              {subtitle && (
                <p className="text-red-500 font-semibold text-lg sm:text-xl mb-2">{subtitle}</p>
              )}
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                {description}
              </p>
              {/* Byline sits directly under the H1 block, where a reader looks
                  for "who wrote this" — not buried at the foot of the page. */}
              {authorUpdated && <AuthorByline updated={authorUpdated} />}
              <div className="mt-8">
                <a
                  href={`tel:${BUSINESS_INFO.phone.tel}`}
                  className="bg-brand-red text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-red-dark transition-all duration-300 shadow-lg inline-flex items-center gap-2 text-lg"
                >
                  📞 {ctaText || `Call ${BUSINESS_INFO.phone.display}`}
                </a>
              </div>
            </div>
           </section>

          {leadBlock}

          {/* Hero Image - placed directly under H1, above first paragraph */}
          {heroImage && (
            <section className="bg-black pb-12">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <figure className="m-0">
                  <div
                    className="relative w-full overflow-hidden rounded-lg shadow-2xl border-2 border-gray-800 bg-gray-900"
                    style={{ aspectRatio: `${heroImage.width || 1600} / ${heroImage.height || 900}` }}
                  >
                    <picture>
                      {heroImage.avifSrcSet && (
                        <source
                          type="image/avif"
                          srcSet={heroImage.avifSrcSet}
                          sizes={heroImage.sizes || HERO_SIZES}
                        />
                      )}
                      {heroImage.webpSrcSet && (
                        <source
                          type="image/webp"
                          srcSet={heroImage.webpSrcSet}
                          sizes={heroImage.sizes || HERO_SIZES}
                        />
                      )}
                      {heroImage.jpgSrcSet && (
                        <source
                          type="image/jpeg"
                          srcSet={heroImage.jpgSrcSet}
                          sizes={heroImage.sizes || HERO_SIZES}
                        />
                      )}
                      <img
                        src={heroImage.src}
                        alt={heroImage.alt}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        width={heroImage.width || 1600}
                        height={heroImage.height || 900}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </picture>
                  </div>
                  {(heroImage.caption || heroImage.geo) && (
                    <figcaption className="mt-3 text-center text-gray-300 text-sm">
                      {heroImage.caption}
                      {/* gray-400 on the geo line, not gray-500: #6B7280 on
                          bg-black is 4.34:1 and fails AA. gray-400 is 8.27:1
                          and still reads dimmer than the gray-300 caption it
                          sits under, so the hierarchy survives the fix. */}
                      {heroImage.geo && (
                        <span className="block text-gray-400 text-xs mt-1">📍 {heroImage.geo}</span>
                      )}
                    </figcaption>
                  )}
                </figure>
                {heroImage.showCta !== false && (
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Link
                      to="/contact"
                      className="w-full sm:w-auto bg-brand-red text-white px-8 py-4 rounded-lg font-bold hover:bg-brand-red-dark transition-all duration-300 shadow-lg text-lg text-center"
                    >
                      Get a Free Estimate
                    </Link>
                    {/* text-brand-red, matching the filled button beside it.
                        These two are one button group — red fill + white
                        inverse — so leaving this one on #DC2626 while its
                        partner moved to #C41230 would split the pair. */}
                    <a
                      href={`tel:${BUSINESS_INFO.phone.tel}`}
                      className="w-full sm:w-auto bg-white text-brand-red px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg text-center inline-flex items-center justify-center gap-2"
                    >
                      📞 Call {BUSINESS_INFO.phone.display}
                    </a>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Quick Answer */}
          {quickAnswer && (
            <section className="bg-gray-950 py-10 border-b border-gray-800">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <p className="text-gray-300 text-lg leading-relaxed italic">
                  {quickAnswer}
                </p>
              </div>
            </section>
          )}

          {priceBlock}

          {/* Content Sections */}
          {sections.map((section, index) => (
            <section
              key={index}
              className={`py-16 ${index % 2 === 0 ? 'bg-gray-950' : 'bg-black'}`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  {section.heading}
                </h2>
                <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                  {/* Rendered as the FIRST child of the prose block, before the
                      text, so a figure that floats sits alongside the opening
                      paragraphs rather than orphaned under the whole section.
                      Undefined on every page that does not pass it, which emits
                      nothing at all — see the prop's note above. */}
                  {sectionFigures?.[index]}
                  {/* The rich body replaces the string when a page opts in; see
                      `sectionBodies` above. Both render in this same container,
                      so the only difference in the output is the anchors. */}
                  {sectionBodies?.[index] ?? section.text}
                </div>
                {sectionLinks && sectionLinks[index] && (
                  <div className="mt-4 space-y-2">
                    {(Array.isArray(sectionLinks[index]) ? sectionLinks[index] as SectionLink[] : [sectionLinks[index] as SectionLink]).map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}

          {/* Case study / proof block (optional rich content) */}
          {caseStudy}

          {/* FAQ, for pages that opted into faqPosition="early" — immediately
              after the page's own prose, ahead of the shared trust and
              cross-link bands. Identical markup either way. */}
          {faqPosition === 'early' && faqBlock}

          {/* Shared WhyChooseGodhans block (single source; opt-in per page) */}
          {credentialBlock && <WhyChooseGodhans damageNoun={credentialDamageNoun} />}

          {/* Photo Gallery */}
          {gallery && gallery.images.length > 0 && (
            <section className="bg-gray-950 py-16 border-t border-gray-800">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                {gallery.heading && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
                    {gallery.heading}
                  </h2>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gallery.images.map((img, i) => (
                    <figure key={i} className="rounded-lg overflow-hidden border-2 border-gray-800 bg-black shadow-xl">
                      <LazyImage
                        src={img.src}
                        srcSet={img.srcSet}
                        sizes={img.sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                        alt={img.alt}
                        fetchPriority="low"
                        width={img.width || 800}
                        height={img.height || 600}
                        className="w-full h-56 object-cover bg-gray-900"
                      />
                      {img.caption && (
                        <figcaption className="text-gray-300 text-sm p-3 text-center">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Jacksonville NC Hub Link */}
          {slug !== 'tree-service-jacksonville-nc' && (
            <section className="bg-gray-950 py-12 border-t border-gray-800">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h2 className="text-2xl font-bold text-white mb-4">
                  {slug.startsWith('tree-service-') ? 'Serving Jacksonville and Surrounding Areas' : 'Tree Service in Jacksonville, NC'}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {slug.startsWith('tree-service-')
                    ? 'We are proud to serve the greater Jacksonville, NC area with professional tree care. Our team provides fast, reliable service across Onslow County. Learn more about our '
                    : 'Looking for local tree experts in Jacksonville? We provide professional tree care throughout Jacksonville, NC and surrounding communities. Visit our '}
                  <Link to="/tree-service-jacksonville-nc" className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold">
                    {slug.startsWith('tree-service-') ? 'Jacksonville tree service' : 'tree service in Jacksonville NC'}
                  </Link>
                  {' '}page for more details on the services we offer in your area.
                </p>
              </div>
            </section>
          )}

          {/* Related Services (Internal Linking) */}
          {relatedServices && relatedServices.length > 0 && (
            <section className="bg-black py-12 border-t border-gray-800">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h2 className="text-2xl font-bold text-white mb-4">Other Services We Offer</h2>
                <p className="text-gray-300 text-lg mb-6">
                  We also provide professional{' '}
                  {relatedServices.map((service, i) => (
                    <span key={service.href}>
                      {i > 0 && (i === relatedServices.length - 1 ? ' and ' : ', ')}
                      <Link to={service.href} className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors">
                        {service.label.toLowerCase()}
                      </Link>
                    </span>
                  ))}
                  {' '}services in Jacksonville, NC and surrounding areas.
                </p>
              </div>
            </section>
          )}

          {/* Guides & Pricing (internal links out to the guide/specialty pages),
              plus the standing link to /reviews.

              The guides list stays opt-in — only 7 of the 21 ServicePage-backed
              pages pass it — but the reviews line renders on all of them
              unconditionally. /reviews had ZERO in-content inlinks and was
              reachable only through the nav and footer, which is no way to
              treat the page holding the social proof every one of these pages
              is trying to earn. */}
          <section className="bg-gray-950 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
              {guides && guides.links.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {guides.heading || 'Guides & Pricing'}
                  </h2>
                  {guides.intro && (
                    <p className="text-gray-300 text-lg mb-6">{guides.intro}</p>
                  )}
                  <ul className="space-y-4 mb-8">
                    {guides.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold text-lg"
                        >
                          {link.label}
                        </Link>
                        {link.blurb && (
                          <span className="block text-gray-400 text-base mt-1">{link.blurb}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <p className="text-gray-300 text-lg leading-relaxed">
                Want to hear it from our customers first?{' '}
                <Link
                  to="/reviews"
                  className="text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors font-semibold"
                >
                  Read all {BUSINESS.reviewCount} Google reviews
                </Link>
                {' '}— what comes up most is the cleanup, the communication, and the fact that the quoted number holds.
              </p>
            </div>
          </section>

          {/* FAQ Section — rendered here only when faqPosition is 'late' (the
              default). See the prop's note: 'early' pages render it above,
              directly after the prose. */}
          {faqPosition === 'late' && faqBlock}

          {/* Other Cities We Serve (location pages only) */}
          {LOCATION_SLUGS.has(slug) && (
            <OtherCitiesWeServe currentSlug={slug} />
          )}

          {/* Quick Quote Form (Formspree) */}
          <QuickQuoteForm source={slug} variant="dark" />

          {/* Final CTA.

              bg-brand-red (#C41230) — the `brand.red` token in
              tailwind.config.ts, which mirrors --red in index.css. NOT
              Tailwind's bg-red-600 (#DC2626), which this band used while the
              other six CTA bands on the site (/blog, /contact, /reviews,
              /service-area, /services, and the city pages) were all already
              #C41230. Two CTA conventions, one of them on ~20 pages, and the
              one on ~20 pages was the wrong one.

              The darker ground also buys contrast headroom: white on #C41230 is
              6.04:1 against 4.83:1 on #DC2626. */}
          <section className="bg-brand-red py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {finalCta?.heading || "Ready to Get Started?"}
              </h2>
              {/* Solid white, not white/90. 90% white composited over the red
                  band resolves to a red-TINTED near-white, and that tint reads
                  as LOWER contrast against the red behind it than pure white
                  does — on the old #DC2626 ground it was 4.13:1 against 4.83:1,
                  which failed WCAG AA (4.5) for normal text on 24 pages. On
                  this #C41230 ground the same comparison is 5.08:1 against
                  6.04:1: both clear AA now, but the alpha still costs contrast
                  instead of buying any. Do not reintroduce one. */}
              <p className="text-white mb-6 text-lg">
                {finalCta?.text || "Contact Godhans Tree Company today for a free estimate."}
              </p>
              {/* text-brand-red, following the band above it. These two reds
                  matched before (#DC2626 on both), so darkening only the band
                  would have left a #DC2626 button sitting on a #C41230 ground
                  — a mismatch introduced by the fix rather than found by it.
                  White + #C41230 is also exactly what the button in the other
                  six CTA bands uses, and it reads 6.04:1 on white against
                  red-600's 4.83:1. */}
              <a
                href={`tel:${BUSINESS_INFO.phone.tel}`}
                className="bg-white text-brand-red px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 text-lg"
              >
                📞 {finalCta?.buttonText || `Call ${BUSINESS_INFO.phone.display}`}
              </a>
            </div>
          </section>
        </main>
    </>
  );
}
