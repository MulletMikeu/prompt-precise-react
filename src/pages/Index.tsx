import { Helmet } from 'react-helmet-async';
import { EmergencyBanner } from '@/components/layout/EmergencyBanner';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ChatWidget } from '@/components/layout/ChatWidget';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyChoose } from '@/components/sections/WhyChoose';
import { ServiceArea } from '@/components/sections/ServiceArea';
import { ContactForm } from '@/components/sections/ContactForm';
import { BookingCalendar } from '@/components/sections/BookingCalendar';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { BUSINESS_INFO } from '@/lib/constants';

// Main landing page component
export default function Index() {
  return (
    <>
      <Helmet>
        <title>Tree Service Jacksonville NC | Godhans Tree Company | Licensed & Insured</title>
        <meta 
          name="description" 
          content="Professional tree service in Jacksonville, NC. Expert tree trimming, removal, stump grinding & emergency storm damage. Licensed, insured & locally owned. Free estimates! Call (618) 704-4861" 
        />
        <link rel="canonical" href="https://treetrimmersnc.online/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://treetrimmersnc.online/" />
        <meta property="og:title" content="Tree Service Jacksonville NC | Godhans Tree Company" />
        <meta property="og:description" content="Professional tree trimming, removal & stump grinding in Jacksonville, NC. Licensed & insured. 24/7 emergency service available." />
        <meta property="og:site_name" content="Godhans Tree Company" />
        
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
              "addressLocality": BUSINESS_INFO.location.city,
              "addressRegion": BUSINESS_INFO.location.state,
              "postalCode": BUSINESS_INFO.location.zip,
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 34.7540,
              "longitude": -77.4305
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "15:00"
              }
            ],
            "sameAs": [
              BUSINESS_INFO.social.facebook,
              BUSINESS_INFO.social.instagram
            ]
          })}
        </script>
      </Helmet>

      <ChatWidget />

      <div className="min-h-screen flex flex-col">
        <EmergencyBanner />
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <Services />
          <WhyChoose />
          <ContactForm />
          <BookingCalendar />
          <ServiceArea />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
