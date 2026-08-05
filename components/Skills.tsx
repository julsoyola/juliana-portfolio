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
    <section id="skills" className="grid lg:grid-cols-2">
      <div className="relative overflow-hidden bg-[var(--forest)] px-8 py-20 text-[var(--paper)] lg:px-16">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--mustard)]">
          Skills
        </p>

        <div className="mt-3 h-1.5 w-20 rounded-full bg-[var(--mustard)]" />

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-2xl text-[var(--mustard)]">
                {group.title}
              </h3>

              <ul className="mt-4 space-y-2 text-sm leading-6">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="absolute -bottom-12 -right-10 h-40 w-40 rounded-full border-4 border-[var(--paper)]/30" />
      </div>

      <div className="flex items-center bg-[var(--mustard)] px-8 py-20 lg:px-16">
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--terracotta)]">
            How I work
          </p>

          <div className="mt-3 h-1.5 w-28 rounded-full bg-[var(--terracotta)]" />

          <h2 className="font-display mt-8 text-5xl leading-[1.05] text-[var(--forest)]">
            Reliable systems.
            <br />
            Simple solutions.
            <br />
            Built to last.
          </h2>

          <p className="mt-8 max-w-md text-lg leading-8 text-[var(--forest)]/85">
            I enjoy building backend systems that are scalable, maintainable, and
            reliable in production.
          </p>
        </div>
      </div>
    </section>
  );
}