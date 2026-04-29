import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { EmergencyBanner } from '@/components/layout/EmergencyBanner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OtherCitiesWeServe } from '@/components/sections/OtherCitiesWeServe';
import { QuickQuoteForm } from '@/components/sections/QuickQuoteForm';
import { BUSINESS_INFO } from '@/lib/constants';

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
}

interface RelatedService {
  label: string;
  href: string;
}

interface SectionLink {
  href: string;
  label: string;
}

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ServicePageProps {
  title: string;
  subtitle?: string;
  slug: string;
  description: string;
  ctaText?: string;
  quickAnswer?: string;
  sections: { heading: string; text: string }[];
  sectionLinks?: Record<number, SectionLink | SectionLink[]>;
  faqs?: FaqItem[];
  finalCta?: { heading: string; text: string; buttonText?: string };
  relatedServices?: RelatedService[];
  heroImage?: {
    src: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
    geo?: string;
    showCta?: boolean;
    webpSrcSet?: string;
    jpgSrcSet?: string;
    sizes?: string;
  };
  gallery?: { heading?: string; images: GalleryImage[] };
}

function getBreadcrumbCategory(slug: string): { name: string; slug: string } | null {
  if (slug.startsWith('tree-service-') && slug !== 'tree-service-jacksonville-nc') {
    return { name: 'Locations', slug: 'tree-service-jacksonville-nc' };
  }
  if (slug.includes('removal') || slug.includes('trimming') || slug.includes('grinding') || slug.includes('emergency')) {
    return { name: 'Services', slug: 'tree-service-jacksonville-nc' };
  }
  return { name: 'Resources', slug: 'tree-service-jacksonville-nc' };
}

export default function ServicePage({ title, subtitle, slug, description, ctaText, quickAnswer, sections, sectionLinks, faqs, finalCta, relatedServices, heroImage, gallery }: ServicePageProps) {
  const canonical = `https://godhans.com/${slug}`;
  const breadcrumbCategory = getBreadcrumbCategory(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://godhans.com/" },
      ...(breadcrumbCategory ? [{ "@type": "ListItem", "position": 2, "name": breadcrumbCategory.name, "item": `https://godhans.com/${breadcrumbCategory.slug}` }] : []),
      { "@type": "ListItem", "position": breadcrumbCategory ? 3 : 2, "name": title }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "@id": "https://godhans.com",
    "url": canonical,
    "telephone": BUSINESS_INFO.phone.tel,
    "email": BUSINESS_INFO.email,
    "priceRange": "$$",
    "image": "https://godhans.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.location.street,
      "addressLocality": BUSINESS_INFO.location.city,
      "addressRegion": BUSINESS_INFO.location.state,
      "postalCode": BUSINESS_INFO.location.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.location.coordinates.latitude,
      "longitude": BUSINESS_INFO.location.coordinates.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{`${title} | ${BUSINESS_INFO.name}`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta name="robots" content="index, follow" />
        <meta name="build-marker" content="helmet-v2-2026-04-19" />
        <meta property="og:title" content={`${title} | ${BUSINESS_INFO.name}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://godhans.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
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

      <div className="min-h-screen flex flex-col">
        <EmergencyBanner />
        <Header />

        <main className="flex-grow">
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
              <div className="mt-8">
                <a
                  href={`tel:${BUSINESS_INFO.phone.tel}`}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 shadow-lg inline-flex items-center gap-2 text-lg"
                >
                  📞 {ctaText || `Call ${BUSINESS_INFO.phone.display}`}
                </a>
              </div>
            </div>
           </section>

          {/* Hero Image - placed directly under H1, above first paragraph */}
          {heroImage && (
            <section className="bg-black pb-12">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <figure className="m-0">
                  <div
                    className="relative w-full overflow-hidden rounded-lg shadow-2xl border-2 border-gray-800 bg-gray-900"
                    style={{ aspectRatio: `${heroImage.width || 1600} / ${heroImage.height || 900}` }}
                  >
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
                  </div>
                  {(heroImage.caption || heroImage.geo) && (
                    <figcaption className="mt-3 text-center text-gray-400 text-sm">
                      {heroImage.caption}
                      {heroImage.geo && (
                        <span className="block text-gray-500 text-xs mt-1">📍 {heroImage.geo}</span>
                      )}
                    </figcaption>
                  )}
                </figure>
                {heroImage.showCta !== false && (
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Link
                      to="/#contact"
                      className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 shadow-lg text-lg text-center"
                    >
                      Get a Free Estimate
                    </Link>
                    <a
                      href={`tel:${BUSINESS_INFO.phone.tel}`}
                      className="w-full sm:w-auto bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg text-center inline-flex items-center justify-center gap-2"
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
                  {section.text}
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
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full h-56 object-cover"
                      />
                      {img.caption && (
                        <figcaption className="text-gray-400 text-sm p-3 text-center">
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

          {/* FAQ Section */}
          {faqs && faqs.length > 0 && (
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
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Other Cities We Serve (location pages only) */}
          {LOCATION_SLUGS.has(slug) && (
            <OtherCitiesWeServe currentSlug={slug} />
          )}

          {/* Quick Quote Form (Formspree) */}
          <QuickQuoteForm source={slug} variant="dark" />

          {/* Final CTA */}
          <section className="bg-red-600 py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {finalCta?.heading || "Ready to Get Started?"}
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                {finalCta?.text || "Contact Godhans Tree Company today for a free estimate."}
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phone.tel}`}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 text-lg"
              >
                📞 {finalCta?.buttonText || `Call ${BUSINESS_INFO.phone.display}`}
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
