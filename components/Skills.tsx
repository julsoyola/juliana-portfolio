const skills = [
  {
    title: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend & Architecture",
    items: [
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "Event-Driven Systems",
      "Distributed Systems",
    ],
  },
  {
    title: "Cloud & AWS",
    items: [
      "AWS",
      "Lambda",
      "DynamoDB",
      "S3",
      "API Gateway",
      "CloudWatch",
      "AWS CDK",
    ],
  },
  {
    title: "Developer Tools",
    items: [
      "Docker",
      "Git",
      "Linux",
      "CI/CD",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--forest)]/20 px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--sage)]">
            Skills
          </p>

          <div className="mt-3 h-1 w-20 bg-[var(--terracotta)]" />

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {skills.map((group, index) => (
              <div key={group.title} className="border-t border-[var(--forest)]/20 pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl text-[var(--forest)]">
                    {group.title}
                  </h3>
                  <span
                    className={`text-xs font-semibold tracking-[0.16em] ${
                      index === 0
                        ? "text-[var(--pink)]"
                        : index === 1
                          ? "text-[var(--sky)]"
                          : index === 2
                            ? "text-[var(--sage)]"
                            : "text-[var(--terracotta)]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-3 space-y-1 text-sm leading-6 text-[var(--forest)]">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[24px] bg-[var(--mustard)] p-7 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--terracotta)]">
              How I work
            </p>

            <div className="max-w-xl">
              <div className="h-1 w-20 bg-[var(--terracotta)]" />

              <h2 className="font-display mt-5 text-4xl leading-[1.05] text-[var(--forest)]">
                Reliable systems.
                <br />
                Simple solutions.
                <br />
                Built to last.
              </h2>

              <p className="mt-5 max-w-md text-lg leading-8 text-[var(--forest)]/85">
                I enjoy building backend systems that are scalable, maintainable, and
                reliable in production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}