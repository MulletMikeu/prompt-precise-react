import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { EmergencyBanner } from '@/components/layout/EmergencyBanner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { BUSINESS_INFO } from '@/lib/constants';

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
        <title>Tree Service Jacksonville NC | Godhans | Licensed & Insured</title>
        <meta 
          name="description" 
          content="Professional tree service in Jacksonville, NC. Expert tree trimming, removal, stump grinding & emergency storm damage. Licensed, insured & locally owned. Free estimates! Call (618) 704-4861" 
        />
        <link rel="canonical" href="https://treetrimmersnc.online/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://treetrimmersnc.online/" />
        <meta property="og:title" content="Tree Service Jacksonville NC | Godhans" />
        <meta property="og:description" content="Professional tree trimming, removal & stump grinding in Jacksonville, NC. Licensed & insured. 24/7 emergency service available." />
        <meta property="og:site_name" content="Godhans" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": BUSINESS_INFO.name,
            "@id": "https://treetrimmersnc.online",
            "url": "https://treetrimmersnc.online",
            "telephone": BUSINESS_INFO.phone.tel,
            "email": BUSINESS_INFO.email,
            "priceRange": "$$",
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
            },
            "sameAs": [
              BUSINESS_INFO.social.facebook,
              BUSINESS_INFO.social.instagram
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <EmergencyBanner />
        <Header />
        
        <main className="flex-grow">
          <Hero />
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
