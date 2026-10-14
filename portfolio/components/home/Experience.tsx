import { jobs } from "@/content/experience";


export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-t border-[var(--forest)]/20 px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">

        {/* Left Column */}

       <div className="flex flex-col justify-center lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#a43b05]">
            Experience
          </p>
          <div className="mt-4 h-1 w-24 bg-[var(--terracotta)]" />
          <h2 id="experience-heading" className="font-display mt-8 text-5xl leading-[1.02] text-[var(--forest)]">
            Where
            <br />
            I&apos;ve worked
          </h2>

        </div>

        {/* Timeline */}

        <ol aria-label="Professional experience">

          {jobs.map((job, index) => (
            <li
              key={job.company + job.year}
              className="grid gap-4 border-b border-[var(--forest)]/20 py-6 last:border-none xl:grid-cols-[32px_96px_220px_minmax(0,1fr)] xl:gap-5"
            >
              <div className="flex items-center gap-4 xl:contents">
                <p
                  className={`text-xs font-semibold tracking-[0.16em] ${
                    index === 0
                      ? "text-[#a43b05]"
                      : index === 1
                        ? "text-[#963e5b]"
                        : index === 2
                          ? "text-[#35606b]"
                          : "text-[#696021]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="whitespace-nowrap font-semibold text-[var(--forest)]">
                  {job.year}
                </p>
              </div>

              <div>
                <h3 className="font-display text-3xl leading-tight text-[var(--forest)]">
                  {job.company}
                </h3>

                <p className="mt-1 italic text-[var(--muted)]">
                  {job.role}
                </p>
              </div>

              <div className="max-w-2xl">
                <p className="leading-7 text-[var(--text)]">
                  {job.description}
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-[var(--forest)]">
                  {job.stack}
                </p>
              </div>

            </li>
          ))}

        </ol>

      </div>
    </section>
  );
}