import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { EmergencyBanner } from '@/components/layout/EmergencyBanner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { BUSINESS_INFO, TESTIMONIALS } from '@/lib/constants';
import { FAQ, FAQ_ITEMS } from '@/components/sections/FAQ';

// Lazy load below-the-fold sections to reduce initial bundle size
const ServiceArea = lazy(() => import('@/components/sections/ServiceArea').then(m => ({ default: m.ServiceArea })));
const ContactForm = lazy(() => import('@/components/sections/ContactForm').then(m => ({ default: m.ContactForm })));
const BookingCalendar = lazy(() => import('@/components/sections/BookingCalendar').then(m => ({ default: m.BookingCalendar })));
const Testimonials = lazy(() => import('@/components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Contact = lazy(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

// Main landing page component
export default function Index() {
  return (
    <>
      <Helmet>
        <title>Tree Service Jacksonville NC | Godhans Tree Company</title>
        <meta 
          name="description" 
          content="Professional tree service in Jacksonville, NC. Expert tree trimming, removal, stump grinding & emergency storm damage. Licensed, insured & locally owned. Free estimates! Call (618) 704-4861" 
        />
        <link rel="canonical" href="https://godhans.com/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://godhans.com/" />
        <meta property="og:title" content="Tree Service Jacksonville NC | Godhans Tree Company" />
        <meta property="og:description" content="Professional tree trimming, removal & stump grinding in Jacksonville, NC. Licensed & insured. 24/7 emergency service available." />
        <meta property="og:site_name" content="Godhans Tree Company" />
        <meta property="og:image" content="https://godhans.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image.jpg" />
        
        {/* Structured Data — LocalBusiness (TreeService) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TreeService",
            "name": "Godhans Tree Company",
            "@id": "https://godhans.com",
            "url": "https://godhans.com",
            "telephone": "+16187044861",
            "email": "godhanstree@gmail.com",
            "priceRange": "$$",
            "image": "https://godhans.com/og-image.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4445 Gum Branch Rd",
              "addressLocality": "Jacksonville",
              "addressRegion": "NC",
              "postalCode": "28540",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 34.754,
              "longitude": -77.4305
            },
            "openingHoursSpecification": [{
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday","Tuesday","Wednesday",
                "Thursday","Friday","Saturday","Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }],
            "areaServed": [
              { "@type": "City", "name": "Jacksonville, NC" },
              { "@type": "City", "name": "Richlands, NC" },
              { "@type": "City", "name": "Hubert, NC" },
              { "@type": "City", "name": "Sneads Ferry, NC" },
              { "@type": "City", "name": "Swansboro, NC" },
              { "@type": "City", "name": "Camp Lejeune, NC" }
            ],
            "serviceType": [
              "Tree Removal",
              "Tree Trimming",
              "Stump Grinding",
              "Emergency Tree Service",
              "Land Clearing"
            ],
            "sameAs": [
              "https://www.facebook.com/godhans",
              "https://www.instagram.com/godhans"
            ],
            "review": TESTIMONIALS.map(t => ({
              "@type": "Review",
              "author": { "@type": "Person", "name": t.author },
              "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": 5 },
              "reviewBody": t.text
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <EmergencyBanner />
        <Header />
        
        <main className="flex-grow">
          <Hero />

          {/* Jacksonville NC Primary Hub */}
          <section className="bg-gray-950 py-10 border-b border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Proudly Serving Jacksonville, NC
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We are Jacksonville's trusted tree service company, providing expert tree removal, trimming, stump grinding, and emergency storm cleanup throughout Onslow County. As local tree experts in Jacksonville, we understand the unique challenges coastal North Carolina trees face.
              </p>
              <Link
                to="/tree-service-jacksonville-nc"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 inline-flex items-center gap-2 text-lg"
              >
                Learn More About Our Jacksonville Tree Services →
              </Link>
            </div>
          </section>

          <Services />
          <WhyChoose />
          <Suspense fallback={<SectionLoader />}>
            <ContactForm />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <BookingCalendar />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <ServiceArea />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
