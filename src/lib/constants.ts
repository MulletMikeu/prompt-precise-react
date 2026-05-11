import { BUSINESS } from "../data/siteData";

// Single source of truth is src/data/siteData.ts.
// BUSINESS_INFO is derived from BUSINESS so all pages share the same NAP data.
export const BUSINESS_INFO = {
  name: BUSINESS.name,
  phone: {
    display: BUSINESS.phone,
    tel: BUSINESS.phoneRaw,
    raw: BUSINESS.phoneRaw.replace("+1", ""),
  },
  email: BUSINESS.email,
  location: {
    street: BUSINESS.address.street,
    city: BUSINESS.address.city,
    state: BUSINESS.address.state,
    zip: BUSINESS.address.zip,
    full: BUSINESS.address.full,
    coordinates: {
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    mapUrl: `https://www.google.com/maps/place/Godhans/@${BUSINESS.coordinates.lat},${BUSINESS.coordinates.lng},17z`,
  },
  hours: {
    weekday: BUSINESS.hours,
    saturday: BUSINESS.hours,
    sunday: BUSINESS.hours,
    emergency: "24/7 Emergency Service Available",
  },
  yearEstablished: BUSINESS.founded,
  social: {
    facebook: BUSINESS.social.facebook,
    youtube: BUSINESS.social.youtube,
  },
};

// Content-only data — not duplicated in siteData.ts
export const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    text: "These guys are the absolute best! They are very reasonably priced for the quality and professionalism they bring with them. They are fast and do clean work. I highly recommend Godhans!",
    author: "Robert H.",
    location: "Jacksonville, NC",
  },
  {
    id: 2,
    rating: 5,
    text: "Amazing job by Michael and his crew. Took a huge 70ft pine down with no issues in an extremely tight space. Cut 3 other small ones down and trimmed the front tree. If you are looking for great service and really good prices, definitely check them out. You will not be disappointed.",
    author: "James T.",
    location: "Jacksonville, NC",
  },
  {
    id: 3,
    rating: 5,
    text: "Great company! Very respectful of your home, very polite and friendly. Took plenty of time to discuss removal of a 70' oak and maple. Professional, safety-focused, and excellent cleanup.",
    author: "M V.",
    location: "Jacksonville, NC",
  },
  {
    id: 4,
    rating: 5,
    text: "Kind, helpful and fair. Will do business again. 10/10.",
    author: "Bingo B.",
    location: "Jacksonville, NC",
  },
  {
    id: 5,
    rating: 5,
    text: "By far the best around. Has the proper equipment to make sure the job is done right and quickly.",
    author: "Forit F.",
    location: "Jacksonville, NC",
  },
  {
    id: 6,
    rating: 5,
    text: "Mike was a great guy. Had two massive trees that had to go down — he took care of it and cleared a good bunch of overgrowth while he was at it. Great price too.",
    author: "Bart L.",
    location: "Jacksonville, NC",
  },
  {
    id: 7,
    rating: 5,
    text: "I've used Mike for my tree work and for my customers. Always excellent work at reasonable prices.",
    author: "Thomas N.",
    location: "Jacksonville, NC",
  },
  {
    id: 8,
    rating: 5,
    text: "I have been utilizing Godhans for years. Every job I have paid them for has been done with the utmost professionalism and courtesy. They are timely, safety oriented, and always leave a clean site.",
    author: "William C.",
    location: "Jacksonville, NC",
  },
  {
    id: 9,
    rating: 5,
    text: "Mike and his crew did an excellent job for me. He cut down a huge pine tree, ground the stump, and removed another tree back behind my privacy fence. I would highly recommend him!",
    author: "A M.",
    location: "Jacksonville, NC",
  },
  {
    id: 10,
    rating: 5,
    text: "Mike and his crew went above and beyond. I had major storm damage to some properties and he was a Godsend.",
    author: "Diane L.",
    location: "Jacksonville, NC",
  },
  {
    id: 11,
    rating: 5,
    text: "Mike and the Godhans team has gone above and beyond for us. Their quality and attention to detail is second to none.",
    author: "Patriot P.",
    location: "Jacksonville, NC",
  },
  {
    id: 12,
    rating: 5,
    text: "Great company to work with. Their attention to detail on protecting property and job site cleanup shows they really care about their customers. I strongly recommend this company.",
    author: "Michael H.",
    location: "Jacksonville, NC",
  },
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
  { name: "Cape Carteret", priority: 0.7 },
];

export const TRUST_ITEMS = [
  {
    icon: "🛡️",
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your protection and peace of mind",
  },
  {
    icon: "⭐",
    title: `${new Date().getFullYear() - BUSINESS.founded}+ Years Experience`,
    description: `Serving Jacksonville and surrounding areas since ${BUSINESS.founded} with expert tree care`,
  },
  {
    icon: "💰",
    title: "Free Estimates",
    description: "No-obligation free estimates with competitive, transparent pricing",
  },
  {
    icon: "🎖️",
    title: "Military-Friendly",
    description: "Proud to serve Camp Lejeune military families with special discounts",
  },
  {
    icon: "🚨",
    title: "24/7 Emergency",
    description: "Available around the clock for emergency tree services and storm damage",
  },
  {
    icon: "🧹",
    title: "Complete Cleanup",
    description: "We haul away all debris and leave your property spotless",
  },
];
