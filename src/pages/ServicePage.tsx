import { Helmet } from 'react-helmet-async';
import { EmergencyBanner } from '@/components/layout/EmergencyBanner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BUSINESS_INFO } from '@/lib/constants';

interface FaqItem {
  question: string;
  answer: string;
}

interface ServicePageProps {
  title: string;
  subtitle?: string;
  slug: string;
  description: string;
  ctaText?: string;
  quickAnswer?: string;
  sections: { heading: string; text: string }[];
  faqs?: FaqItem[];
  finalCta?: { heading: string; text: string; buttonText?: string };
}

export default function ServicePage({ title, subtitle, slug, description, ctaText, quickAnswer, sections, faqs, finalCta }: ServicePageProps) {
  return (
    <>
      <Helmet>
        <title>{title} | {BUSINESS_INFO.name}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://treetrimmersnc.online/${slug}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${title} | ${BUSINESS_INFO.name}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://treetrimmersnc.online/${slug}`} />
        <meta property="og:type" content="website" />
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
              </div>
            </section>
          ))}

          {/* CTA */}
          <section className="bg-red-600 py-12">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                Contact Godhans Tree Company today for a free estimate.
              </p>
              <a
                href={`tel:${BUSINESS_INFO.phone.tel}`}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 text-lg"
              >
                📞 {BUSINESS_INFO.phone.display}
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
