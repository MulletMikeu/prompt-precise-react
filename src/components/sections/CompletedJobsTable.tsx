import { MIN_PUBLISHED, publishedJobs } from '@/data/jobs';

/**
 * "Jobs we've actually done" — the evidence table behind the price bands.
 *
 * Renders NOTHING unless at least MIN_PUBLISHED (3) rows in src/data/jobs.ts
 * carry `publish: true`. That is the whole point of the component: the page
 * claims its numbers are real, so this block either shows a real spread of real
 * jobs or it does not exist. It must never fall back to placeholder rows, a
 * "coming soon" line, or an empty table shell — an empty evidence table is
 * worse than no evidence table, because it advertises the gap.
 *
 * src/data/jobs.ts ships empty, so today this returns null on every page. The
 * owner turns it on by adding rows; no code change is required.
 *
 * `basis` is rendered, not hidden, because it changes what a figure means: a
 * quoted job is not a proven one, and an insurance-billed total is a carrier
 * settlement rather than what a homeowner paid out of pocket.
 */
export default function CompletedJobsTable() {
  const jobs = publishedJobs();
  if (jobs.length < MIN_PUBLISHED) return null;

  return (
    <section className="bg-gray-950 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2
          id="completed-jobs-heading"
          className="text-2xl sm:text-3xl font-bold text-white mb-6"
        >
          {jobs.length} jobs, with what each one came to
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Real jobs, redacted — neighborhood or road at most, month and year
          only, no customer details. The basis column says whether the figure was
          invoiced, quoted, or billed to an insurer.
        </p>

        <div
          role="region"
          aria-labelledby="completed-jobs-heading"
          tabIndex={0}
          className="overflow-x-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-lg border border-gray-800"
        >
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Completed tree removal jobs, listing the job and area, the tree
              size and access, the price with the basis it was arrived at, and
              what set that price.
            </caption>
            <thead>
              <tr className="bg-gray-900">
                {['Job', 'Size & access', 'Price', 'What set it'].map((head) => (
                  <th
                    key={head}
                    scope="col"
                    className="px-2 sm:px-3 py-3 text-sm sm:text-base font-bold text-white align-top border-b border-gray-700"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => (
                <tr
                  key={`${job.completed}-${job.area}-${i}`}
                  className="border-b border-gray-800 last:border-0"
                >
                  <th
                    scope="row"
                    className="px-2 sm:px-3 py-4 text-sm sm:text-base font-semibold text-white align-top text-left"
                  >
                    {job.type}
                    <span className="block font-normal text-gray-400 text-sm mt-1">
                      {job.area} · {job.completed}
                    </span>
                  </th>
                  <td className="px-2 sm:px-3 py-4 text-sm sm:text-base text-gray-300 align-top leading-relaxed">
                    {job.size}
                    <span className="block text-gray-400 text-sm mt-1">{job.access}</span>
                  </td>
                  {/* `basis` rides under the figure rather than taking a fifth
                      column: at five columns this table could not fit a phone
                      without scrolling, and the basis is only ever read
                      together with the number it qualifies. */}
                  <td className="px-2 sm:px-3 py-4 text-sm sm:text-base font-bold text-white align-top">
                    <span className="sm:whitespace-nowrap">{job.price}</span>
                    <span className="block font-normal text-gray-400 text-sm mt-1">
                      {job.basis}
                    </span>
                  </td>
                  <td className="px-2 sm:px-3 py-4 text-sm sm:text-base text-gray-300 align-top leading-relaxed">
                    {job.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
