const skills = [
  {
    title: "Languages & Frameworks",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C++", "React", "Next.js", "Spring Boot", "HTML & CSS"],
    numberColor: "text-[#963e5b]",
    tone: "bg-[var(--mustard)]",
  },
  {
    title: "Backend & Systems",
    items: ["REST API Design", "Distributed Systems", "Microservices", "Event-Driven Architecture", "ETL Pipelines", "Data Modeling", "Metadata Ingestion & Validation", "System Design", "Backend Automation"],
    numberColor: "text-[#35606b]",
    tone: "bg-[#DCE5D5]",
  },
  {
    title: "Cloud & Infrastructure",
    items: ["AWS", "Lambda", "S3", "DynamoDB", "API Gateway", "AWS CDK", "CloudWatch", "IAM", "PostgreSQL", "MySQL", "Docker", "CI/CD", "Git", "Linux"],
    numberColor: "text-[#696021]",
    tone: "bg-[#F2DCCE]",
  },
  {
    title: "Product Design & Development",
    items: ["UX Design", "UI Design", "Interaction Design", "Responsive Web Design", "Information Architecture", "Technical Prototyping", "Accessibility Fundamentals", "Frontend Development", "Human-Centered Design"],
    numberColor: "text-[#913404]",
    tone: "bg-[var(--sky)]",
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-[var(--forest)]/20 px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="min-w-0">
          <h2 id="skills-heading" className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--forest)]">
            Skills
          </h2>
          <div className="mt-3 h-1 w-20 bg-[var(--terracotta)]" />

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {skills.map((group, index) => (
              <section key={group.title} aria-labelledby={`skill-group-${index}`} className={`${group.tone} min-w-0 rounded-[24px] p-5 sm:p-6`}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 id={`skill-group-${index}`} className="font-display text-2xl text-[var(--forest)]">
                    {group.title}
                  </h3>
                  <span className={`shrink-0 text-xs font-semibold tracking-[0.16em] ${group.numberColor}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-3 text-sm leading-6 text-[var(--forest)]">
                  {group.items.map((item, itemIndex) => (
                    <li key={item} className="inline">
                      {item}{itemIndex < group.items.length - 1 && <span aria-hidden="true"> · </span>}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
