import ServicePage from './ServicePage';

export default function TreeServiceHubert() {
  return (
    <ServicePage
      title="Tree Service in Hubert, NC"
      subtitle="Dependable Tree Care for the Hubert Community"
      slug="tree-service-hubert-nc"
      description="Professional tree service in Hubert, NC. Expert tree removal, trimming, stump grinding, and storm cleanup. Free estimates from Godhans Tree Company."
      ctaText="Call Now for a Free Estimate"
      quickAnswer="Need tree service in Hubert, NC? Our experienced crew handles everything from tree removal and trimming to stump grinding and emergency storm cleanup. We provide free estimates and reliable service throughout the Hubert area."
      sections={[
        {
          heading: "Professional Tree Service for Hubert, NC",
          text: "Hubert's wooded lots and coastal weather mean trees need regular attention. Our team provides dependable tree care to keep your property safe, attractive, and well-maintained.\n\nWe work with homeowners, landlords, and property managers across the Hubert area to handle jobs of all sizes."
        },
        {
          heading: "What We Offer in Hubert",
          text: "• Tree removal – from backyard trees to large hardwoods\n• Tree trimming & pruning – shape trees and remove dead wood\n• Stump grinding – eliminate tripping hazards and eyesores\n• Storm damage cleanup – fast response when you need it most\n• Debris hauling – leave your property spotless"
        },
        {
          heading: "Local Service You Can Count On",
          text: "As a locally operated company serving Onslow County, we know the challenges Hubert property owners face — from hurricane season prep to overgrown lots near Camp Lejeune.\n\n✔ Licensed & insured\n✔ Free estimates with no obligation\n✔ Military discounts available\n✔ Clean, professional results every time"
        }
      ]}
      relatedServices={[
        { label: 'Tree Removal', href: '/tree-removal-jacksonville-nc' },
        { label: 'Tree Trimming', href: '/tree-trimming-jacksonville-nc' },
        { label: 'Stump Grinding', href: '/stump-grinding-jacksonville-nc' },
        { label: 'Emergency Tree Service', href: '/emergency-tree-service-jacksonville-nc' },
      ]}
      finalCta={{
        heading: "Get a Free Estimate in Hubert",
        text: "Whether it's a single tree or a full lot, we're ready to help. Contact Godhans Tree Company today for fast, affordable tree service in Hubert, NC.",
        buttonText: "Call Now"
      }}
    />
  );
}
