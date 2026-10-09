import ResumeMotion from "@/components/ResumeMotion";

const resumes = [
  {
    index: "01",
    title: "Backend Engineer",
    description: "Java • Spring Boot • AWS • Distributed Systems",
    pdf: "/resumes/JulianaOBackend.pdf",
    tone: "bg-[var(--sky)]",
  },
  {
    index: "02",
    title: "Product Engineer",
    description: "Backend, full-stack, and user-focused engineering",
    pdf: "/resumes/JulianaOProduct.pdf",
    tone: "bg-[var(--mustard)]",
  },
  {
    index: "03",
    title: "Platform Engineer",
    description: "Infrastructure • AWS • Reliability • Automation",
    pdf: "/resumes/JulianaOPlatform.pdf",
    tone: "bg-[var(--pink)]",
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="border-t border-[var(--forest)]/20 px-6 py-20 lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 grid gap-4 lg:grid-cols-[220px_1fr] lg:items-end lg:gap-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--terracotta)]">
            Resume
          </p>

          <h2 className="font-display max-w-3xl text-4xl leading-tight text-[var(--forest)] sm:text-5xl">
            Experience tailored to different engineering roles.
          </h2>
        </div>

        <ResumeMotion>
          <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resumes.map((resume) => (
              <a
                key={resume.title}
                href={resume.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className={`${resume.tone} group relative flex min-h-[270px] h-full flex-col rounded-[18px] border border-[var(--forest)]/35 p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--forest)]`}
              >
                <span className="text-sm font-semibold tracking-[0.16em] text-[var(--forest)]">
                  {resume.index}
                </span>

                <span
                  aria-hidden="true"
                  className="absolute right-7 top-7 text-[var(--forest)]/70"
                >
                  {resume.index === "01" && (
                    <svg viewBox="0 0 32 24" className="h-6 w-8 fill-none stroke-current" strokeWidth="1.5">
                      <ellipse cx="16" cy="5" rx="10" ry="3" />
                      <path d="M6 5v7c0 1.7 4.5 3 10 3s10-1.3 10-3V5" />
                      <path d="M6 12v7c0 1.7 4.5 3 10 3s10-1.3 10-3v-7" />
                    </svg>
                  )}
                  {resume.index === "02" && (
                    <svg viewBox="0 0 32 24" className="h-6 w-8 fill-none stroke-current" strokeWidth="1.5">
                      <rect x="3" y="4" width="26" height="17" rx="2" />
                      <path d="M3 9h26M8 6.5h.01M12 6.5h.01" />
                    </svg>
                  )}
                  {resume.index === "03" && (
                    <svg viewBox="0 0 32 24" className="h-6 w-8 fill-none stroke-current" strokeWidth="1.5">
                      <circle cx="7" cy="12" r="3" />
                      <circle cx="25" cy="6" r="3" />
                      <circle cx="25" cy="18" r="3" />
                      <path d="m10 11 12-4M10 13l12 4" />
                    </svg>
                  )}
                </span>

                <h3 className="font-display mt-7 text-3xl leading-tight text-[var(--forest)]">
                  {resume.title}
                </h3>

                <p className="mt-6 max-w-xs leading-7 text-[var(--forest)]">
                  {resume.description}
                </p>

                <p className="mt-auto pt-10 font-semibold text-[var(--forest)]">
                  View Resume{" "}
                  <span className="inline-block transition group-hover:translate-x-1">
                    ↗
                  </span>
                </p>
              </a>
            ))}
          </div>
        </ResumeMotion>
      </div>
    </section>
  );
}