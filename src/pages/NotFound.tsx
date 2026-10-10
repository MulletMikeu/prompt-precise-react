import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";

const NOT_FOUND_LINKS = [
  {
    href: "/tree-removal-jacksonville-nc",
    label: "Tree removal in Jacksonville, NC",
    blurb: "What it costs, how long it takes, and the species we take out most.",
  },
  {
    href: "/tree-removal-cost-north-carolina",
    label: "Tree removal cost in North Carolina",
    blurb: "Every price band we quote, and what moves a job between them.",
  },
  {
    href: "/emergency-tree-service-jacksonville-nc",
    label: "24/7 emergency tree service",
    blurb: "Tree on the house? This is the page, and a real person answers.",
  },
  {
    href: "/tree-service-jacksonville-nc",
    label: "The Jacksonville crew, and how to vet a tree company",
    blurb: "Eight questions to ask before hiring anyone, and how to verify insurance.",
  },
  {
    href: "/contact",
    label: "Get a free estimate",
    blurb: "Tell us the street and what you are looking at.",
  },
] as const;

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found | Godhans Tree Company</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      {/* <main id="main-content">, not a <div>. RootLayout renders a
          "Skip to main content" link on every page pointing at #main-content,
          and this page was the one route where that target did not exist — so
          the link went nowhere and the page had no main landmark at all. It was
          the only route scoring below 100 on accessibility (96: axe's
          `landmark-one-main` and `skip-link` both failed). Every other page
          uses exactly this tag and id; keep it that way. */}
      <main id="main-content" className="flex min-h-screen items-center justify-center" style={{ background: "#0A0A0A" }}>
        <div className="text-center px-6 max-w-xl">
          <h1 className="mb-4 text-6xl font-bold" style={{ color: "var(--red-text)" }}>404</h1>
          <p className="mb-8 text-xl" style={{ color: "#C8C8C2" }}>Page not found</p>
          {/* The only link here used to be "Return to Home", which makes a
              mistyped URL a dead end and wastes whatever link equity reaches
              this page. These five are the pages people actually arrive
              looking for. */}
          <p className="mb-4 text-base" style={{ color: "#C8C8C2" }}>
            You were probably looking for one of these:
          </p>
          <ul className="mb-8 space-y-3 text-left inline-block">
            {NOT_FOUND_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="font-semibold underline underline-offset-2"
                  style={{ color: "var(--red-text)" }}
                >
                  {link.label}
                </Link>
                <span className="block text-sm" style={{ color: "#8A8A85" }}>{link.blurb}</span>
              </li>
            ))}
          </ul>
          <p>
            <Link to="/" className="font-bold uppercase tracking-wider text-sm" style={{ color: "var(--red-text)" }}>
              Return to Home
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default NotFound;
