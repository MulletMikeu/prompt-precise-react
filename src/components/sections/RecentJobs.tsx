import { LazyImage } from '@/components/ui/LazyImage';
import { RECENT_JOBS } from '@/data/ownerContent';

/**
 * "Recent jobs & what they cost" on /tree-removal-jacksonville-nc.
 *
 * Renders NOTHING until RECENT_JOBS has real jobs in it. Invented job cards with
 * invented prices would be the single worst thing on this site — people quote
 * these numbers back to us on the phone — so the section stays hidden until the
 * owner supplies photos and real figures in src/data/ownerContent.ts.
 */
export default function RecentJobs() {
  if (RECENT_JOBS.length === 0) return null;

  return (
    <section id="recent-jobs" className="py-16 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Recent Jobs &amp; What They Cost
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Real jobs from around Jacksonville and Onslow County, with what each one came
          to. Neighbourhoods rather than addresses — your job is your business.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECENT_JOBS.map((job) => (
            <article
              key={`${job.jobType}-${job.area}`}
              className="rounded-lg overflow-hidden border-2 border-gray-800 bg-black shadow-xl flex flex-col"
            >
              <LazyImage
                src={job.image}
                alt={job.imageAlt}
                width={800}
                height={600}
                className="w-full h-48 object-cover bg-gray-900"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-1">{job.jobType}</h3>
                <p className="text-gray-400 text-sm mb-3">{job.area}</p>
                {job.note && (
                  <p className="text-gray-300 text-base leading-relaxed mb-4 flex-1">{job.note}</p>
                )}
                <p className="text-red-500 font-bold text-xl mt-auto">{job.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
