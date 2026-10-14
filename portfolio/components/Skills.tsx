const skills = [
  {
    title: "Languages & Frameworks",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C++", "React", "Next.js", "Spring Boot", "HTML & CSS"],
    numberColor: "text-[#963e5b]",
  },
  {
    title: "Backend & Systems",
    items: ["REST API Design", "Distributed Systems", "Microservices", "Event-Driven Architecture", "ETL Pipelines", "Data Modeling", "Metadata Ingestion & Validation", "System Design", "Backend Automation"],
    numberColor: "text-[#35606b]",
  },
  {
    title: "Cloud & Infrastructure",
    items: ["AWS", "Lambda", "S3", "DynamoDB", "API Gateway", "AWS CDK", "CloudWatch", "IAM", "PostgreSQL", "MySQL", "Docker", "CI/CD", "Git", "Linux"],
    numberColor: "text-[#696021]",
  },
  {
    title: "Product Design & Development",
    items: ["UX Design", "UI Design", "Interaction Design", "Responsive Web Design", "Information Architecture", "Technical Prototyping", "Accessibility Fundamentals", "Frontend Development", "Human-Centered Design"],
    numberColor: "text-[#a43b05]",
  },
];

const approachCards = [
  {
    id: "how-i-work",
    label: "HOW I WORK",
    headline: "Understand. Build. Refine.",
    body: "I clarify requirements, break problems into manageable pieces, and test the details that make a solution dependable.",
    tone: "bg-[var(--mustard)]",
  },
  {
    id: "what-i-bring",
    label: "WHAT I BRING",
    headline: "Backend depth. Product perspective.",
    body: "I connect APIs, data models, and automation with the experience of the people using them.",
    tone: "bg-[#DCE5D5]",
  },
  {
    id: "what-i-care-about",
    label: "WHAT I CARE ABOUT",
    headline: "Less friction. More clarity.",
    body: "I’m drawn to tools that simplify complex workflows, make errors understandable, and reduce repetitive work.",
    tone: "bg-[#F2DCCE]",
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-[var(--forest)]/20 px-6 py-20 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <div className="flex min-w-0 flex-col">
          <h2 id="skills-heading" className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--forest)]">
            Skills
          </h2>
          <div className="mt-3 h-1 w-20 bg-[var(--terracotta)]" />

          <div className="mt-6 grid gap-x-6 gap-y-6 md:grid-cols-2 lg:flex-1">
            {skills.map((group, index) => (
              <section key={group.title} aria-labelledby={`skill-group-${index}`} className="min-w-0 border-t border-[var(--forest)]/20 pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 id={`skill-group-${index}`} className="font-display text-2xl text-[var(--forest)] lg:text-xl xl:text-2xl">
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

        <aside aria-label="Design and engineering approach" className="grid min-w-0 gap-4 lg:grid-rows-[repeat(3,minmax(min-content,1fr))]">
          {approachCards.map(card => (
            <section key={card.id} aria-labelledby={`${card.id}-heading`} className={`${card.tone} min-w-0 rounded-[24px] p-5 text-[var(--forest)]`}>
              <h3 id={`${card.id}-heading`} className="text-xs font-bold uppercase tracking-[0.16em]">
                {card.label}
              </h3>
              <div className="mt-2 h-1 w-12 bg-[var(--terracotta)]" />
              <p className="font-display mt-3 text-xl leading-tight xl:text-2xl">
                {card.headline}
              </p>
              <p className="mt-2 text-sm leading-6">{card.body}</p>
            </section>
          ))}
        </aside>
      </div>
    </section>
  );
}
