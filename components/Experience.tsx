const jobs = [
  {
    year: "2024–2025",
    company: "Amazon Prime Video",
    role: "Software Engineer",
    description:
      "Built backend services and AWS infrastructure for a unified metadata platform managing millions of content records.",
    stack: "Java • AWS • Distributed Systems",
  },
  {
    year: "2023",
    company: "Amazon Prime Video",
    role: "Software Engineer Intern",
    description:
      "Designed and deployed an automated metadata ingestion service that reduced hours of manual file preparation.",
    stack: "Java • Lambda • DynamoDB",
  },
  {
    year: "2022",
    company: "Amazon Care",
    role: "Software Development Engineer Intern",
    description:
      "Developed backend services and routing systems supporting healthcare scheduling and delivery workflows.",
    stack: "Java • REST APIs • AWS",
  },
  {
    year: "2020–2021",
    company: "Green Bank Observatory",
    role: "Web Developer Intern",
    description:
      "Built APIs and data workflows for the Skynet Robotic Telescope Network.",
    stack: "REST APIs • SQL • Data Processing",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28 lg:px-10">
      <div className="grid gap-16 lg:grid-cols-[320px_1fr]">

        {/* Left Column */}

        <div className="lg:sticky lg:top-28">

          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--terracotta)]">
            Experience
          </p>

          <div className="mt-3 mb-8 h-1.5 w-24 rounded-full bg-[var(--terracotta)]" />

          <h2 className="font-display text-6xl leading-[0.95] text-[var(--forest)]">
            A few places
            <br />
            I've learned
            <br />
            and grown.
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