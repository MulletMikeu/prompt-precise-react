/**
 * Central route metadata for static prerendering.
 * Each route gets its own HTML file with correct meta tags
 * so search engines can index pages without executing JavaScript.
 */

const BUSINESS = {
  name: "Godhans Tree Company",
  phone: "(618) 704-4861",
  phoneTel: "+16187044861",
  email: "godhanstree@gmail.com",
  address: "4445 Gum Branch Rd, Jacksonville, NC 28540",
  url: "https://godhans.com",
  ogImage: "https://godhans.com/og-image.jpg",
};

export const routes = [
  {
    path: "/tree-removal-jacksonville-nc",
    title: "Tree Removal in Jacksonville, NC | Godhans Tree Company",
    description: "Professional tree removal services in Jacksonville, NC. Safe, efficient, and fully insured. Call Godhans Tree Company for a free estimate.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tree Removal in Jacksonville, NC",
      "provider": {
        "@type": "LocalBusiness",
        "name": BUSINESS.name,
        "telephone": BUSINESS.phoneTel,
        "address": { "@type": "PostalAddress", "streetAddress": "4445 Gum Branch Rd", "addressLocality": "Jacksonville", "addressRegion": "NC", "postalCode": "28540" }
      },
      "areaServed": { "@type": "City", "name": "Jacksonville", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
      "description": "Safe, affordable tree removal services in Jacksonville, NC and Onslow County."
    }
  },
  {
    path: "/tree-trimming-jacksonville-nc",
    title: "Tree Trimming in Jacksonville, NC | Godhans Tree Company",
    description: "Professional Tree Trimming & Pruning to Keep Your Trees Healthy and Safe. Free estimates from Godhans Tree Company in Jacksonville, NC.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tree Trimming in Jacksonville, NC",
      "provider": { "@type": "LocalBusiness", "name": BUSINESS.name, "telephone": BUSINESS.phoneTel },
      "areaServed": { "@type": "City", "name": "Jacksonville", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
      "description": "Expert tree trimming and pruning services in Jacksonville, NC."
    }
  },
  {
    path: "/stump-grinding-jacksonville-nc",
    title: "Stump Grinding in Jacksonville, NC | Godhans Tree Company",
    description: "Fast, affordable stump grinding services in Jacksonville, NC. Professional equipment, clean results, and free estimates from Godhans Tree Company.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Stump Grinding in Jacksonville, NC",
      "provider": { "@type": "LocalBusiness", "name": BUSINESS.name, "telephone": BUSINESS.phoneTel },
      "areaServed": { "@type": "City", "name": "Jacksonville", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
      "description": "Professional stump grinding and removal services in Jacksonville, NC."
    }
  },
  {
    path: "/emergency-tree-service-jacksonville-nc",
    title: "Emergency Tree Service Jacksonville NC | 24/7 | Godhans",
    description: "24/7 emergency tree service in Jacksonville, NC. Fast response for fallen trees, storm damage, and hazardous limbs. Call Godhans Tree Company now.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Emergency Tree Service in Jacksonville, NC",
      "provider": { "@type": "LocalBusiness", "name": BUSINESS.name, "telephone": BUSINESS.phoneTel },
      "areaServed": { "@type": "City", "name": "Jacksonville", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
      "description": "24/7 emergency tree removal and storm damage services in Jacksonville, NC."
    }
  },
  {
    path: "/tree-service-jacksonville-nc",
    title: "Tree Service in Jacksonville, NC | Godhans Tree Company",
    description: "Professional tree removal, trimming, stump grinding, and emergency tree services in Jacksonville, NC and surrounding areas. Licensed, insured, free estimates.",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": BUSINESS.name,
      "url": BUSINESS.url + "/tree-service-jacksonville-nc",
      "telephone": BUSINESS.phoneTel,
      "email": BUSINESS.email,
      "address": { "@type": "PostalAddress", "streetAddress": "4445 Gum Branch Rd", "addressLocality": "Jacksonville", "addressRegion": "NC", "postalCode": "28540", "addressCountry": "US" },
      "areaServed": [
        { "@type": "City", "name": "Jacksonville" },
        { "@type": "City", "name": "Richlands" },
        { "@type": "City", "name": "Hubert" },
        { "@type": "City", "name": "Sneads Ferry" },
        { "@type": "City", "name": "Swansboro" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tree Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Removal" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tree Trimming" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stump Grinding" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Tree Service" } }
        ]
      }
    }
  },
  {
    path: "/tree-service-richlands-nc",
    title: "Tree Service in Richlands, NC | Godhans Tree Company",
    description: "Professional tree service in Richlands, NC. Tree removal, trimming, stump grinding, and emergency response. Free estimates from Godhans Tree Company.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tree Service in Richlands, NC",
      "provider": { "@type": "LocalBusiness", "name": BUSINESS.name, "telephone": BUSINESS.phoneTel },
      "areaServed": { "@type": "City", "name": "Richlands", "containedInPlace": { "@type": "State", "name": "North Carolina" } }
    }
  },
  {
    path: "/tree-service-hubert-nc",
    title: "Tree Service in Hubert, NC | Godhans Tree Company",
    description: "Professional tree service in Hubert, NC. Expert tree removal, trimming, stump grinding, and storm cleanup. Free estimates from Godhans Tree Company.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tree Service in Hubert, NC",
      "provider": { "@type": "LocalBusiness", "name": BUSINESS.name, "telephone": BUSINESS.phoneTel },
      "areaServed": { "@type": "City", "name": "Hubert", "containedInPlace": { "@type": "State", "name": "North Carolina" } }
    }
  },
  {
    path: "/tree-removal-cost-north-carolina",
    title: "How Much Does Tree Removal Cost in NC? (2026 Guide) | Godhans",
    description: "Tree removal in North Carolina typically costs between $800 and $3,500 depending on the size of the tree, location, and difficulty of the job.",
  },
  {
    path: "/storm-damage-trees-guide",
    title: "What to Do After Storm Damage to Trees (Homeowner Guide) | Godhans",
    description: "After storm damage, assess the area from a safe distance, avoid downed power lines, and contact a professional tree service immediately.",
  },
  {
    path: "/tree-trimming-vs-pruning",
    title: "Tree Trimming vs Pruning: What's the Difference? | Godhans",
    description: "Tree trimming focuses on maintaining the shape and appearance of a tree, while pruning improves tree health by removing dead or damaged branches.",
  },
  {
    path: "/do-you-need-a-permit-to-remove-a-tree-nc",
    title: "Do You Need a Permit to Remove a Tree in NC? | Godhans",
    description: "In most cases, you do not need a permit to remove a tree on private property in North Carolina. Learn about local regulations and exceptions.",
  },
  {
    path: "/leaning-tree-dangerous-after-storm",
    title: "Is a Leaning Tree Dangerous After a Storm? | Godhans",
    description: "Learn how to tell if a leaning tree is dangerous after a storm, when to call a professional, and what steps to take to protect your property.",
  },
];

export { BUSINESS };
