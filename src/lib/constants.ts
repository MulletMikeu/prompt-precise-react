export const BUSINESS_INFO = {
  name: "Godhans Tree Company",
  phone: {
    display: "(618) 704-4861",
    tel: "+16187044861",
    raw: "618-704-4861"
  },
  email: "godhanstree@gmail.com",
  location: {
    city: "Jacksonville",
    state: "NC",
    zip: "28540"
  },
  hours: {
    weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
    saturday: "Saturday: 9:00 AM - 3:00 PM",
    sunday: "Sunday: Emergency Service Only"
  },
  yearEstablished: 2010,
  social: {
    facebook: "https://www.facebook.com/godhans",
    instagram: "https://www.instagram.com/godhans"
  },
  integrations: {
    googleCalendarId: "78t5y8tdI24kiutiDwFo",
    arcFormId: "a7qpym2HhpkGKUa6tyMI",
    chatWidgetId: "68f52e2b5a611a4c03e83200"
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
    text: "Godhans Tree Company did an amazing job removing three large oak trees from our property. Professional, efficient, and left everything spotless. Highly recommend!",
    author: "Sarah M.",
    location: "Jacksonville"
  },
  {
    id: 2,
    rating: 5,
    text: "Called them for emergency service after the storm. They responded within hours and safely removed a fallen tree from our roof. Fair pricing and excellent work!",
    author: "Mike R.",
    location: "Camp Lejeune"
  },
  {
    id: 3,
    rating: 5,
    text: "Best tree service in Jacksonville! They trimmed our trees beautifully and ground out three old stumps. The crew was courteous and cleaned up perfectly. Will use again!",
    author: "Jennifer L.",
    location: "Swansboro"
  }
];
