import { BUSINESS } from "../data/siteData";

// Single source of truth is src/data/siteData.ts.
// BUSINESS_INFO is derived from BUSINESS so all pages share the same NAP data.
export const BUSINESS_INFO = {
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
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
