import { Link } from "react-router-dom";
import { BUSINESS, CITY_JOBS, CREDENTIAL } from "../data/siteData";

/**
 * Homepage local content (Ship M, 2026-11-21).
 *
 * The Jacksonville hub (/tree-service-jacksonville-nc) was folded into the
 * homepage and 301'd to "/" on the owner's ruling, so the two pages stop
 * splitting "tree service jacksonville nc". This is the hub's unique local
 * content, moved: the crew, the neighborhoods, Camp Lejeune/PCS scheduling,
 * local species and storm behaviour, and a condensed version of its "how to
 * verify a tree company" and "questions to ask" sections (the target of the
 * /10-questions-… redirect), merged with the estimate checklist from the
 * retired residential page.
 *
 * COPY RULE: every fact below already appeared on the hub, the residential
 * page, the removal page or in siteData. Nothing was invented. NO PRICES and
 * NO FAQ block on the homepage (owner ruling, Ship L) — the job stories below
 * deliberately leave out the figures their source pages carry.
 *
 * Each paragraph is a single string so SSR emits one text node per paragraph.
 */

const LINK = "home-local-link";

const NEIGHBORHOODS = [
  "Northwoods and Brynn Marr — mature hardwoods planted close to mid-century houses, usually a backyard job with a fence line to work around",
  "Country Club and Gum Branch Road — bigger lots, taller pines, room for the boom truck to set up",
  "Hunters Creek and Carolina Forest — newer construction with narrow side setbacks; this is where the spider lift earns its keep",
  "Downtown and the Riverwalk blocks — tight streets, overhead lines, and permits to stage equipment",
  "Piney Green and Sand Ridge — sandy soil that stays saturated after rain and won't hold a heavy truck",
] as const;

export default function HomeLocal() {
  return (
    <section className="home-local" aria-label="Local tree service in Jacksonville, NC">
      <div className="container-brand">
        <h2 className="home-local-h2">The crew behind Godhans</h2>
        <p>
          {`Godhans Tree Company is run out of Jacksonville by the people who do the work. When you call, you're not routed through a national dispatcher — you're talking to the crew that will be standing in your yard, and to Michael, who reads every tree before we touch it. We don't subcontract, so the insurance you verify is the insurance covering the people on your property.`}
        </p>
        <p>
          {`That matters more here than inland. Onslow County soil, the species that grow in it and the storms that come off the coast all behave in specific ways, and a crew that has worked the same ground since ${BUSINESS.founded} plans and prices a job differently from one seeing it for the first time.`}
        </p>

        <h2 className="home-local-h2">Neighborhoods we work in around Jacksonville</h2>
        <p>Jacksonville isn't one kind of property, and the neighborhoods price differently because the access does:</p>
        <ul className="home-local-list">
          {NEIGHBORHOODS.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
        <p>
          {"If you tell us the street, we can usually tell you before we arrive whether the job is a truck job, a lift job, or a climb-and-rig job — and when it is the lift, "}
          <Link to="/spider-lift-tree-removal-jacksonville-nc" className={LINK}>how the spider lift gets into gate-only backyards</Link>
          {" is the reason a fenced yard is not a problem."}
        </p>

        <h2 className="home-local-h2">Camp Lejeune and military families</h2>
        <p>
          {"A large share of our customers are Marines, sailors and their families, and the scheduling is genuinely different. PCS timelines don't flex: tell us the date you have to be out and we'll work backward from it, including the stump, so the yard is clear for the walkthrough."}
        </p>
        <p>
          {"Properties along the fence line and in the housing areas off Piney Green and Brewster Boulevard can mean gate access, escort requirements and equipment that has to fit through a standard gate. We plan for that up front instead of discovering it on the morning of the job. We offer military discounts for Camp Lejeune families, and we document the work for landlords and property managers who want proof it was done to standard. More on "}
          <Link to="/tree-service-camp-lejeune-nc" className={LINK}>tree work at Camp Lejeune</Link>
          {"."}
        </p>

        <h2 className="home-local-h2">Recent jobs close to home</h2>
        <ul className="home-local-list">
          <li>
            {"Gene Circle, Jacksonville — a 105-foot tulip poplar, dead-topped and rotting, eight feet from the house with a bee hive sixty feet up inside it, and a 120-foot pine rigged out over a fence beside it. We measured the decay with our resistograph before anyone left the ground. "}
            <Link to="/tree-removal-jacksonville-nc" className={LINK}>How we took both down</Link>
            {"."}
          </li>
          <li>
            {`Sand Ridge Road, Hubert — ${CITY_JOBS.hubert.summary.replace(" off Sand Ridge Road", "")}. `}
            <Link to="/tree-service-hubert-nc" className={LINK}>Tree service in Hubert</Link>
            {"."}
          </li>
          <li>
            {`Holly Ridge, ${CITY_JOBS.hollyRidge.date} — ${CITY_JOBS.hollyRidge.summary}. `}
            <Link to="/tree-service-holly-ridge-nc" className={LINK}>Tree service in Holly Ridge</Link>
            {"."}
          </li>
        </ul>

        <h2 className="home-local-h2">The trees that grow here, and how they fail</h2>
        <p>Local species drive most of what we see:</p>
        <ul className="home-local-list">
          <li>Loblolly and longleaf pine — the tall, top-heavy majority of Jacksonville's canopy. They snap rather than uproot, and a dead-topped pine near a roof is the single most common emergency call we get.</li>
          <li>Water oak — fast-growing, short-lived, and notorious for rotting from the inside while looking healthy.</li>
          <li>Live oak and southern magnolia — heavy, wide-spreading, with roots far past the trunk line.</li>
          <li>Sweetgum — aggressive surface roots and brittle limbs that come down in wind.</li>
        </ul>
        <p>
          {"Storms add their own pattern. Saturated sandy soil loses its grip and the wind levers a tree over at the root plate, which is why so much of our storm work is uprooted pines — and a tree whose root plate lifted can stand for weeks and then come down on a calm day. If the soil around a trunk cracked or heaved in a storm, have it looked at; if it is already on something, that is "}
          <Link to="/emergency-tree-service-jacksonville-nc" className={LINK}>24/7 emergency and storm cleanup</Link>
          {". And "}
          <Link to="/pine-tree-problems-jacksonville-nc" className={LINK}>a pine will show you what is wrong with it</Link>
          {" where an oak will not."}
        </p>

        <h2 className="home-local-h2">Check us before you hire anyone</h2>
        <p>
          {"North Carolina does not license tree contractors, so “licensed” on a truck door means nothing in particular here. What you can check, on us or anyone:"}
        </p>
        <ul className="home-local-list">
          <li>
            {`Registration — search the name on the quote in the `}
            <a
              href="https://www.sosnc.gov/online_services/search/by_title/_Business_Registration"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK}
            >
              NC Secretary of State business registry
            </a>
            {`. Ours is ${CREDENTIAL.legalName}, SoSID ${CREDENTIAL.sosId}, active.`}
          </li>
          <li>Insurance sent by their agent, not forwarded by them — general liability and workers' comp, with every machine on the policy. Ours includes the spider lift.</li>
          <li>The same crew — if a different crew in unmarked trucks turns up, the insurance you verified may not cover them.</li>
          <li>A finished estimate — exactly which trees, who hauls the wood, whether the stump is in and to what depth, how the equipment reaches the trunk, ground protection on sandy lots, and one written total.</li>
        </ul>
        <p>
          {"And if the price moves once we open up the canopy, you hear about it before anything is cut — not on the invoice."}
        </p>
      </div>
    </section>
  );
}
