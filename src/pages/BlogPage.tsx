import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/siteData";

const TITLE = "Tree Care Blog | Tips & Resources | Godhans Tree Company";
const DESC = "Tree care guides from Godhans Tree Company in Jacksonville, NC. Learn about removal costs, storm damage, permits, trimming, and more.";
const CANONICAL = "https://godhans.com/blog";

const GUIDES = [
  {
    title: "How Much Does Tree Removal Cost in North Carolina?",
    href: "/tree-removal-cost-north-carolina",
    desc: "A breakdown of what affects tree removal pricing in NC — size, location, complexity, and what to expect from a free estimate.",
  },
  {
    title: "What to Do After Storm Damage to Your Trees",
    href: "/storm-damage-trees-guide",
    desc: "Step-by-step guide on assessing storm damage, what's safe to DIY, and when to call a professional.",
  },
  {
    title: "Do You Need a Permit to Remove a Tree in NC?",
    href: "/do-you-need-a-permit-to-remove-a-tree-nc",
    desc: "Permit rules for tree removal in North Carolina — what applies to Jacksonville homeowners and when to check with the city.",
  },
  {
    title: "Tree Removal Near a House: What You Need to Know",
    href: "/tree-removal-near-house-jacksonville-nc",
    desc: "Special considerations for removing trees close to structures — safety planning, equipment, and protecting your home.",
  },
  {
    title: "Tree Trimming vs. Pruning: What's the Difference?",
    href: "/tree-trimming-vs-pruning",
    desc: "Trimming and pruning are often used interchangeably, but they serve different purposes. Here's what each actually means.",
  },
  {
    title: "Is a Leaning Tree Dangerous After a Storm?",
    href: "/leaning-tree-dangerous-after-storm",
    desc: "How to assess whether a leaning tree poses a real risk — signs to watch for and when it's time to call for removal.",
  },
  {
    title: "Tree Removal in Tight Spaces: Equipment & Techniques",
    href: "/tree-removal-tight-spaces-jacksonville-nc",
    desc: "Removing trees near fences, power lines, or structures requires specialized techniques. Here's how we handle complex jobs.",
  },
  {
    title: "What Is Spider Lift Tree Removal?",
    href: "/spider-lift-tree-removal-jacksonville-nc",
    desc: "Spider lifts allow our crew to access difficult-to-reach trees with minimal ground disturbance. Learn when and why we use them.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESC} />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESC} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:image" content="https://godhans.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://godhans.com/og-image.jpg" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESC} />
      </Helmet>

      <main id="main-content" className="pt-20">
        <section className="py-20" style={{ background: "#111111" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="font-body text-xs font-600 uppercase tracking-widest mb-4" style={{ color: "#C41230", letterSpacing: "0.12em" }}>Resources</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tree Care Guides</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#C8C8C2" }}>
              Practical guides from our team in Jacksonville, NC — covering tree removal, storm damage, costs, permits, and more.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0A0A0A" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col gap-px" style={{ background: "#2A2A2A" }}>
              {GUIDES.map((guide) => (
                <article key={guide.href} className="p-8 flex flex-col gap-3" style={{ background: "#0A0A0A" }}>
                  <h2 className="text-xl font-bold">
                    <Link to={guide.href} className="text-white hover:text-red-600 transition-colors">
                      {guide.title}
                    </Link>
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "#C8C8C2" }}>{guide.desc}</p>
                  <Link to={guide.href} className="text-sm font-bold uppercase tracking-widest self-start" style={{ color: "#C41230" }}>
                    Read Guide →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#C41230" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Have a Tree Question?</h2>
            <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
              Skip the research and call us directly. Free estimates, honest advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="font-bold uppercase tracking-wide px-8 py-4 text-center" style={{ background: "white", color: "#C41230" }}>Contact Us</Link>
              <a href={BUSINESS.phoneHref} className="font-bold uppercase tracking-wide px-8 py-4 text-center border-2 border-white text-white">{BUSINESS.phone}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
