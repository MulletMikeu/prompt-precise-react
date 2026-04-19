export const BUSINESS_INFO = {
  name: "Godhans Tree Company",
  phone: {
    display: "(618) 704-4861",
    tel: "+16187044861",
    raw: "618-704-4861"
  },
  email: "godhanstree@gmail.com",
  location: {
    street: "4445 Gum Branch Rd",
    city: "Jacksonville",
    state: "NC",
    zip: "28540",
    full: "4445 Gum Branch Rd, Jacksonville, NC 28540",
    coordinates: {
      latitude: 34.7540,
      longitude: -77.4305
    },
    mapUrl: "https://www.google.com/maps/place/Godhans/@34.754,-77.4305,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x6af5edd22ef362ab"
  },
  hours: {
    weekday: "Open 24 Hours",
    saturday: "Open 24 Hours",
    sunday: "Open 24 Hours",
    emergency: "24/7 Emergency Service Available"
  },
  yearEstablished: 2010,
  social: {
    facebook: "https://www.facebook.com/godhans",
    instagram: "https://www.instagram.com/godhans"
  },
  integrations: {
    arcBookingId: "78t5y8tdI24kiutiDwFo",
    arcFormId: "a7qpym2HhpkGKUa6tyMI"
  }
};

export const SERVICES = [
  {
    id: "trimming",
    icon: "✂️",
    title: "Tree Trimming & Pruning",
    description: "Expert trimming and pruning to maintain tree health, improve appearance, and ensure safety. We remove dead branches and shape trees for optimal growth.",
    cta: "Get Quote"
  },
  {
    id: "removal",
    icon: "🪓",
    title: "Tree Removal",
    description: "Safe, complete tree removal for dead, dying, or hazardous trees. We handle trees of any size near structures, power lines, or in tight spaces.",
    cta: "Get Quote"
  },
  {
    id: "stump",
    icon: "🌳",
    title: "Stump Grinding",
    description: "Professional stump grinding and removal to eliminate unsightly stumps and prevent regrowth. We grind below ground level and clean up all debris.",
    cta: "Get Quote"
  },
  {
    id: "emergency",
    icon: "⚡",
    title: "Emergency Storm Damage",
    description: "24/7 emergency response for storm-damaged trees. Quick removal of fallen trees and hazardous branches to restore safety to your property.",
    cta: "Call Now",
    emergency: true
  },
  {
    id: "clearing",
    icon: "🚜",
    title: "Land Clearing",
    description: "Complete land clearing for residential and commercial projects. We clear lots, prepare sites for construction, and handle brush removal.",
    cta: "Get Quote"
  },
  {
    id: "cleanup",
    icon: "🍂",
    title: "Lot Cleanup",
    description: "Thorough cleanup of debris, branches, and stumps. We haul away all waste and leave your property clean and ready for landscaping or construction.",
    cta: "Get Quote"
  }
];

export const TRUST_ITEMS = [
  {
    icon: "🛡️",
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your protection and peace of mind"
  },
  {
    icon: "⭐",
    title: "15+ Years Experience",
    description: "Serving Jacksonville and surrounding areas since 2010 with expert tree care"
  },
  {
    icon: "💰",
    title: "Free Estimates",
    description: "No-obligation free estimates with competitive, transparent pricing"
  },
  {
    icon: "🎖️",
    title: "Military-Friendly",
    description: "Proud to serve Camp Lejeune military families with special discounts"
  },
  {
    icon: "🚨",
    title: "24/7 Emergency",
    description: "Available around the clock for emergency tree services and storm damage"
  },
  {
    icon: "🧹",
    title: "Complete Cleanup",
    description: "We haul away all debris and leave your property spotless"
  }
];

export const SERVICE_AREAS = [
  { name: "Jacksonville", priority: 0.9 },
  { name: "Camp Lejeune", priority: 0.9 },
  { name: "Swansboro", priority: 0.8 },
  { name: "Richlands", priority: 0.8 },
  { name: "Sneads Ferry", priority: 0.8 },
  { name: "Holly Ridge", priority: 0.8 },
  { name: "Hubert", priority: 0.7 },
  { name: "Maysville", priority: 0.7 },
  { name: "Pumpkin Center", priority: 0.7 },
  { name: "Dixon", priority: 0.7 },
  { name: "Stella", priority: 0.7 },
  { name: "Cape Carteret", priority: 0.7 }
];

export const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    text: "These guys are the absolute best! They are very reasonably priced for the quality and professionalism they bring with them. They are fast and do clean work. I highly recommend Godhans!",
    author: "Robert H.",
    location: "Jacksonville, NC"
  },
  {
    id: 2,
    rating: 5,
    text: "Amazing job by Michael and his crew. Took a huge 70ft pine down with no issues in an extremely tight space. Cut 3 other small ones down and trimmed the front tree. If you are looking for great service and really good prices, definitely check them out. You will not be disappointed.",
    author: "James T.",
    location: "Jacksonville, NC"
  },
  {
    id: 3,
    rating: 5,
    text: "Great company! Very respectful of your home, very polite and friendly. Took plenty of time to discuss removal of a 70' oak and maple. Professional, safety-focused, and excellent cleanup.",
    author: "M V.",
    location: "Jacksonville, NC"
  },
  {
    id: 4,
    rating: 5,
    text: "Kind, helpful and fair. Will do business again. 10/10.",
    author: "Bingo B.",
    location: "Jacksonville, NC"
  },
  {
    id: 5,
    rating: 5,
    text: "By far the best around. Has the proper equipment to make sure the job is done right and quickly.",
    author: "Forit F.",
    location: "Jacksonville, NC"
  },
  {
    id: 6,
    rating: 5,
    text: "Mike was a great guy. Had two massive trees that had to go down — he took care of it and cleared a good bunch of overgrowth while he was at it. Great price too.",
    author: "Bart L.",
    location: "Jacksonville, NC"
  },
  {
    id: 7,
    rating: 5,
    text: "I've used Mike for my tree work and for my customers. Always excellent work at reasonable prices.",
    author: "Thomas N.",
    location: "Jacksonville, NC"
  },
  {
    id: 8,
    rating: 5,
    text: "I have been utilizing Godhans for years. Every job I have paid them for has been done with the utmost professionalism and courtesy. They are timely, safety oriented, and always leave a clean site. Their dedication to customer service shows through with every job they do.",
    author: "William C.",
    location: "Jacksonville, NC"
  },
  {
    id: 9,
    rating: 5,
    text: "Mike and his crew did an excellent job for me. He cut down a huge pine tree, ground the stump, and removed another tree back behind my privacy fence. I would highly recommend him!",
    author: "A M.",
    location: "Jacksonville, NC"
  },
  {
    id: 10,
    rating: 5,
    text: "Mike and his crew went above and beyond. I had major storm damage to some properties and he was a Godsend.",
    author: "Diane L.",
    location: "Jacksonville, NC"
  },
  {
    id: 11,
    rating: 5,
    text: "Mike and the Godhans team has gone above and beyond for us. Their quality and attention to detail is second to none.",
    author: "Patriot P.",
    location: "Jacksonville, NC"
  },
  {
    id: 12,
    rating: 5,
    text: "Great company to work with. Their attention to detail on protecting property and job site cleanup shows they really care about their customers. I strongly recommend this company.",
    author: "Michael H.",
    location: "Jacksonville, NC"
  }
];
