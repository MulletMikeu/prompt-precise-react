import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found | Godhans Tree Company</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center" style={{ background: "#0A0A0A" }}>
        <div className="text-center px-6">
          <h1 className="mb-4 text-6xl font-bold" style={{ color: "#C41230" }}>404</h1>
          <p className="mb-6 text-xl" style={{ color: "#C8C8C2" }}>Page not found</p>
          <Link to="/" className="font-bold uppercase tracking-wider text-sm" style={{ color: "#C41230" }}>
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
