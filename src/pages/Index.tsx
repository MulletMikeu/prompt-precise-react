import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HomeJobsitePhoto } from "@/components/sections/HomeJobsitePhoto";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { BUSINESS_INFO, TESTIMONIALS } from "@/lib/constants";
import { FAQ, FAQ_ITEMS } from "@/components/sections/FAQ";
import { SchemaInjector } from "@/components/SchemaInjector";

// Lazy-loaded sections
const ServiceArea = lazy(() =>
  import("@/components/sections/ServiceArea").then((m) => ({
    default: m.ServiceArea,
  }))
);

const CitiesWeServe = lazy(() =>
  import("@/components/sections/CitiesWeServe").then((m) => ({
    default: m.CitiesWeServe,
  }))
);

const ContactForm = lazy(() =>
  import("@/components/sections/ContactForm").then((m) => ({
    default: m.ContactForm,
  }))
);

const Testimonials = lazy(() =>
  import("@/components/sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);

const Contact = lazy(() =>
  import("@/components/sections/Contact").then((m) => ({
    default: m.Contact,
  }))
);

const PrecisionRemoval = lazy(() =>
  import("@/components/sections/PrecisionRemoval").then((m) => ({
    default: m.PrecisionRemoval,
  }))
);

// Loading placeholder
const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

export default function Index() {
  // New schema object for SchemaInjector
  const treeServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TreeService",
    "@id": "https://godhans.com/#treeservice",
    name: "Godhans Tree Company",
    url: "https://godhans.com/",
    telephone: BUSINESS_INFO.phone || "+16187044861",
    email: BUSINESS_INFO.email || "godhanstree@gmail.com",
    priceRange: "$$",
    image: "https://godhans.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4445 Gum Branch Rd",
      addressLocality: "Jacksonville",
      addressRegion: "NC",
      postalCode: "28540",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.754,
      longitude: -77.4305,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
          "https://schema.org/Saturday",
          "https://schema.org/Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: [
      { "@type": "Place", name: "Jacksonville, NC" },
      { "@type": "Place", name: "Richlands, NC" },
      { "@type": "Place", name: "Hubert, NC" },
      { "@type": "Place", name: "Sneads Ferry, NC" },
      { "@type": "Place", name: "Swansboro, NC" },
      { "@type": "Place", name: "Camp Lejeune, NC" },
    ],
    serviceType: [
      "Tree Removal",
      "Tree Trimming",
      "Stump Grinding",
      "Emergency Tree Service",
      "Land Clearing",
    ],
  };

  return (
    <>
      <Helmet>
        <title>Tree Service Jacksonville NC | Godhans Tree Company</title>
        <meta
          name="description"
          content="Tree service in Jacksonville, NC: removal, trimming, stump grinding, and 24/7 storm response. Licensed, insured, free estimates. Call (618) 704-4861."
        />
        <link rel="canonical" href="https://godhans.com/" />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://godhans.com/" />
        <meta
          property="og:title"
          content="Tree Service Jacksonville NC | Godhans Tree Company"
        />
        <meta
          property="og:description"
          content="Professional tree trimming, removal & stump grinding in Jacksonville, NC. Licensed & insured. 24/7 emergency service available."
        />
        <meta property="og:site_name" content="Godhans Tree Company" />
        <meta property="og:image" content="https://godhans.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image.jpg" />

        {/* Existing JSON-LD — TreeService */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TreeService",
            "@id": "https://godhans.com/#treeservice",
            name: "Godhans Tree Company",
            url: "https://godhans.com/",
            telephone: BUSINESS_INFO.phone || "+16187044861",
            email: BUSINESS_INFO.email || "godhanstree@gmail.com",
            priceRange: "$$",
            image: "https://godhans.com/og-image.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4445 Gum Branch Rd",
              addressLocality: "Jacksonville",
              addressRegion: "NC",
              postalCode: "28540",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 34.754,
              longitude: -77.4305,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "https://schema.org/Monday",
                  "https://schema.org/Tuesday",
                  "https://schema.org/Wednesday",
                  "https://schema.org/Thursday",
                  "https://schema.org/Friday",
                  "https://schema.org/Saturday",
                  "https://schema.org/Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            ],
            areaServed: [
              { "@type": "Place", name: "Jacksonville, NC" },
              { "@type": "Place", name: "Richlands, NC" },
              { "@type": "Place", name: "Hubert, NC" },
              { "@type": "Place", name: "Sneads Ferry, NC" },
              { "@type": "Place", name: "Swansboro, NC" },
              { "@type": "Place", name: "Camp Lejeune, NC" },
            ],
            serviceType: [
              "Tree Removal",
              "Tree Trimming",
              "Stump Grinding",
              "Emergency Tree Service",
              "Land Clearing",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue:
                TESTIMONIALS.length > 0
                  ? (
                      TESTIMONIALS.reduce(
                        (sum, t) => sum + t.rating,
                        0
                      ) / TESTIMONIALS.length
                    ).toFixed(1)
                  : "5",
              reviewCount: TESTIMONIALS.length,
            },
            review: TESTIMONIALS.map((t) => ({
              "@type": "Review",
              author: { "@type": "Person", name: t.author },
              reviewRating: {
                "@type": "Rating",
                ratingValue: t.rating,
                bestRating: 5,
              },
              reviewBody: t.text,
            })),
          })}
        </script>

        {/* Existing JSON-LD — FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* New SchemaInjector placement */}
      <SchemaInjector schema={treeServiceSchema} />

      <div className="min-h-screen flex flex-col">
        <EmergencyBanner />
        <Header />

        <main className="flex-grow">
          <Hero />

          <HomeJobsitePhoto />

          {/* Jacksonville NC Hub Section */}
          <section className="bg-gray-950 py-10 border-b border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Proudly Serving Jacksonville, NC
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We are Jacksonville&apos;s trusted tree service company, providing expert tree
                removal, trimming, stump grinding, and emergency storm cleanup throughout Onslow
                County. As local tree experts in Jacksonville, we understand the unique challenges
                coastal North Carolina trees face.
              </p>
              <Link
                to="/tree-service-jacksonville-nc"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-all duration-300 inline-flex items-center gap-2 text-lg"
              >
                Learn More About Our Jacksonville Tree Services →
              </Link>
              <p className="mt-4 text-gray-400 text-sm">
                <Link to="/meet-the-owners" className="hover:text-red-600 transition-colors underline">
                  Meet the owners behind Godhans Tree Service →
                </Link>
              </p>
            </div>
          </section>

          <Services />
          <WhyChoose />

          <Suspense fallback={<SectionLoader />}>
            <PrecisionRemoval variant="light" />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <ContactForm />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <ServiceArea />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <CitiesWeServe />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Testimonials />
          </Suspense>

          <FAQ />

          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
}
