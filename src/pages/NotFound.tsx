import { Head as Helmet } from 'vite-react-ssg';
import { Link } from "react-router-dom";

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
        <div className="text-center px-6">
          <h1 className="mb-4 text-6xl font-bold" style={{ color: "var(--red-text)" }}>404</h1>
          <p className="mb-6 text-xl" style={{ color: "#C8C8C2" }}>Page not found</p>
          <Link to="/" className="font-bold uppercase tracking-wider text-sm" style={{ color: "var(--red-text)" }}>
            Return to Home
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
