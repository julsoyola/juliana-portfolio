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
    <section id="experience" className="px-6 py-28 lg:px-10">
      <div className="grid gap-16 lg:grid-cols-[320px_1fr]">

        {/* Left Column */}

       <div className="flex flex-col justify-center lg:sticky lg:top-32 lg:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--terracotta)]">
            Experience
          </p>
          <div className="mt-4 h-1.5 w-24 rounded-full bg-[var(--terracotta)]" />
          <h2 className="font-display mt-12 text-6xl leading-[1.02] text-[var(--forest)]">
            Where
            <br />
            I&apos;ve worked
          </h2>

        </div>

        {/* Timeline */}

        <div className="rounded-[34px] border border-[var(--border)] bg-[var(--paper)] p-10 shadow-sm">

          {jobs.map((job) => (
            <div
              key={job.company + job.year}
              className="grid gap-8 border-b border-[var(--border)] py-10 last:border-none lg:grid-cols-[110px_220px_1fr]"
            >
              <p className="font-semibold text-[var(--sage)]">
                {job.year}
              </p>

              <div>
                <h3 className="font-display text-4xl leading-tight text-[var(--forest)]">
                  {job.company}
                </h3>

                <p className="mt-2 italic text-[var(--muted)]">
                  {job.role}
                </p>
              </div>

              <div>
                <p className="leading-7 text-[var(--text)]">
                  {job.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-[var(--sage)]">
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