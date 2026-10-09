const jobs = [
  {
    year: "2024–2025",
    company: "Amazon Prime Video",
    role: "Software Engineer",
    description:
      "Designed and delivered Java microservices and AWS infrastructure for Prime Video’s next-generation Unified Metadata Platform. Helped replace fragmented legacy catalog systems with a centralized, event-driven architecture supporting millions of content records and production publishing workflows.",
    stack: "Java • Spring Boot • AWS • Event-Driven Architecture",
  },
  {
    year: "2023",
    company: "Amazon Prime Video",
    role: "Software Engineer Intern",
    description:
      "Designed, implemented, and deployed a serverless metadata ingestion service that validated and transformed partner-submitted content before publication. Automated malformed-file handling and eliminated approximately six hours of manual preprocessing from internal publishing workflows.",
    stack: "Java • AWS Lambda • DynamoDB • API Gateway",
  },
  {
    year: "2022",
    company: "Amazon Care",
    role: "Software Development Engineer Intern",
    description:
      "Developed Java backend services supporting appointment scheduling, prescription delivery, and patient notifications. Designed a proximity-based routing algorithm that replaced FIFO assignment and improved how providers and delivery resources were matched to patient needs.",
    stack: "Java • REST APIs • AWS • Route Optimization",
  },
  {
    year: "2020–2021",
    company: "Green Bank Observatory",
    role: "Web Developer Intern",
    description:
      "Developed REST APIs and data-processing workflows for the Skynet Robotic Telescope Network, supporting remote astronomical observations for researchers and educators. Improved the storage, retrieval, and accessibility of large volumes of observational data.",
    stack: "REST APIs • SQL • Data Processing • Backend Automation",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--forest)]/20 px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">

        {/* Left Column */}

       <div className="flex flex-col justify-center lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--terracotta)]">
            Experience
          </p>
          <div className="mt-4 h-1 w-24 bg-[var(--terracotta)]" />
          <h2 className="font-display mt-8 text-5xl leading-[1.02] text-[var(--forest)]">
            Where
            <br />
            I&apos;ve worked
          </h2>

        </div>

        {/* Timeline */}

        <div>

          {jobs.map((job, index) => (
            <div
              key={job.company + job.year}
              className="grid gap-4 border-b border-[var(--forest)]/20 py-6 last:border-none lg:grid-cols-[44px_80px_190px_1fr] lg:gap-5"
            >
              <div className="flex items-center gap-4 lg:contents">
                <p
                  className={`text-xs font-semibold tracking-[0.16em] ${
                    index === 0
                      ? "text-[var(--terracotta)]"
                      : index === 1
                        ? "text-[var(--pink)]"
                        : index === 2
                          ? "text-[var(--sky)]"
                          : "text-[var(--sage)]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="font-semibold text-[var(--sage)]">
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

                <p className="mt-3 text-sm font-semibold text-[var(--sage)]">
                  {job.stack}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}