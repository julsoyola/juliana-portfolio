import Link from "next/link";

type Project = {
  title: string; description: string; stack: string[]; tone: string;
  caseStudyUrl?: string; liveUrl: string | null; githubUrl: string | null;
  liveLabel?: string; skills?: string[];
};
const projects: Project[] = [
  {
    liveLabel: "Live Site",
    title: "MacWipe", caseStudyUrl: "/work/macwipe",
    description: "Help Mac users inspect storage and review cleanup candidates before moving selected files to Trash.",
    skills: ["Interaction design", "Risk communication", "Prototyping"],
    stack: ["Swift", "HTML", "CSS", "JavaScript"], tone: "bg-[var(--sky)]",
    liveUrl: "https://macwipe.vercel.app/", githubUrl: "https://github.com/julsoyola/macwipe",
  },
  {
    liveLabel: "Live Site",
    title: "GoogleCleaner", caseStudyUrl: "/work/googlecleaner",
    description: "Help Drive users find relevant files and understand their full selection before a bulk move to Trash.",
    skills: ["Information architecture", "Selection design", "Error recovery"],
    stack: ["JavaScript", "Chrome Extensions", "Google Drive API"], tone: "bg-[var(--pink)]",
    liveUrl: "https://chromewebstore.google.com/detail/googlecleaner/acijddppbcekpnlddndfomahlpgcnfoe", githubUrl: "https://github.com/julsoyola/googleCleaner#readme",
  },
  {
    liveLabel: "Live Site",
    title: "Developer Portfolio", caseStudyUrl: "/work/portfolio",
    description: "Give hiring teams a clear path from professional context to project decisions and evidence.",
    skills: ["Content hierarchy", "Responsive design", "Accessibility"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"], tone: "bg-[#F3AD87]",
    liveUrl: "https://juliana-portfolio-two.vercel.app", githubUrl: "https://github.com/julsoyola/juliana-portfolio",
  },
  {
    title: "FigmaCleaner",
    description:
      "A native Figma plugin designed to automate canvas tree maintenance, purge hidden layers, and optimize rendering performance.",
    stack: ["TypeScript", "Figma Plugin API", "HTML/CSS", "Node.js"],
    tone: "bg-[var(--mustard)]",
    caseStudyUrl: "/work/figmacleaner",
    liveUrl: "https://github.com/julsoyola/figmaCleaner",
    githubUrl: "https://github.com/julsoyola/figmaCleaner",
  },

];

const projectControlClassName =
  "inline-flex min-h-11 w-full min-w-0 items-center justify-center gap-1 rounded-full border px-2 py-2 text-xs font-semibold sm:w-auto sm:gap-2 sm:px-4 sm:text-sm transition-colors focus-visible:outline-[var(--forest)]";

const primaryControlClassName =
  "border-[#1C2A1A] bg-[#1C2A1A] text-white hover:bg-[#1E2E1E]";
const secondaryControlClassName =
  "border-[var(--forest)]/40 bg-white/80 text-slate-900 hover:border-[var(--forest)]/70 hover:bg-white";

export default function Projects() {
  const hasMoreProjects = projects.length > 4;

  return (
    <section
      id="work"
      aria-labelledby="projects-heading"
      className="border-t border-[var(--forest)]/20 px-4 py-20 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[200px_minmax(0,1fr)] lg:items-start lg:gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--forest)]">
              Featured Work
            </p>

            <div className="mt-3 h-1.5 w-28 rounded-full bg-[var(--terracotta)]" />

            <h2
              id="projects-heading"
              className="font-display mt-8 text-5xl leading-[1.05] text-[var(--forest)]"
            >
              Projects
            </h2>

            <p className="mt-6 max-w-[220px] text-lg leading-7 text-[var(--text)]">
              User problems, design decisions, and working artifacts.
            </p>

          </div>

          <div
            id="project-list"
            role="region"
            aria-label="Project collection"
            tabIndex={hasMoreProjects ? 0 : undefined}
            className={`col-span-full grid min-w-0 grid-cols-2 gap-3 rounded-[24px] border border-[var(--forest)]/25 bg-[var(--paper)] p-2 sm:gap-6 sm:p-4 lg:col-span-1 ${hasMoreProjects ? "max-h-[85vh] overflow-y-auto overscroll-y-contain" : ""}`}
          >
            {projects.map((project, index) => (
              <div key={project.title} className="h-full min-w-0 project-scroll-card">
                <article aria-label={index < 3 ? `Featured: ${project.title}` : `Additional work: ${project.title}`}
                  className={`${project.tone} flex h-full min-h-[310px] flex-col rounded-[18px] border border-[var(--forest)]/25 p-2.5 sm:p-6 transition duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none`}
                >
                  <div className="flex min-w-0 flex-1 flex-col [overflow-wrap:anywhere]">
                    <span className="text-xs font-semibold tracking-[0.16em] text-[var(--forest)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div
                      aria-hidden="true"
                      className="relative mt-4 h-16 border-b border-[var(--forest)]/25"
                    >
                      {project.title === "MacWipe" && (
                        <div className="absolute inset-x-4 top-2 h-10 rounded-md border-2 border-[var(--forest)]/60 p-2">
                          <div className="h-1.5 w-10 bg-[var(--terracotta)]/70" />
                          <div className="mt-2 grid grid-cols-3 gap-1">
                            <span className="h-3 bg-[var(--paper)]/70" />
                            <span className="h-3 bg-[var(--pink)]/70" />
                            <span className="h-3 bg-[var(--paper)]/70" />
                          </div>
                        </div>
                      )}
                      {project.title === "FigmaCleaner" && (
                        <div className="absolute inset-x-8 top-4 flex items-center justify-between">
                          <span className="h-3 w-3 rounded-full border-2 border-[var(--forest)]/70" />
                          <span className="h-px flex-1 bg-[var(--forest)]/60" />
                          <span className="h-3 w-3 rounded-full border-2 border-[var(--forest)]/70" />
                          <span className="h-px flex-1 bg-[var(--forest)]/60" />
                          <span className="h-3 w-3 rounded-full border-2 border-[var(--forest)]/70" />
                        </div>
                      )}
                      {project.title === "GoogleCleaner" && (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 64 48"
                          className="absolute right-8 top-1 h-12 w-16 fill-[var(--paper)] stroke-[var(--forest)]/70"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="6" y="5" width="24" height="32" rx="4" />
                          <rect x="17" y="12" width="24" height="32" rx="4" />
                          <path d="M23 21h12M23 27h12M23 33h7" fill="none" />
                          <path d="m38 27 17 10-8 2-4 7z" />
                          <path d="m56 4 2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
                        </svg>
                      )}
                      {project.title === "Developer Portfolio" && (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 64 48"
                          className="absolute right-8 top-1 h-12 w-16 fill-none stroke-[var(--forest)]/70"
                          strokeWidth="2"
                        >
                          <path d="M14 18h36v22H14zM20 18v-6h24v6M20 27h24M20 34h10" />
                          <path d="m39 28 5-5 6 6-5 5zM44 23l3-3 6 6-3 3" />
                        </svg>
                      )}
                    </div>

                    <h3 className="font-display text-lg font-semibold tracking-tight sm:text-[1.7rem] leading-tight text-[var(--forest)]">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--text)] sm:text-base sm:leading-7">
                      {project.description}
                    </p>

                    {project.skills && <ul aria-label={`${project.title} design skills`} className="my-4 flex flex-wrap gap-2">
                      {project.skills.map(skill => <li key={skill} className="text-xs font-semibold text-[var(--forest)]">{skill}</li>)}
                    </ul>}

                    <div className="mt-auto border-t border-[var(--forest)]/20 pt-4">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--forest)]">
                        Technologies
                      </p>

                      <ul
                        className="mt-2 flex flex-wrap gap-2"
                        aria-label={`${project.title} technologies`}
                      >
                        {project.stack.map((item) => (
                          <li
                            key={item}
                            className="max-w-full rounded-full border border-[var(--forest)]/20 bg-[var(--paper)]/80 px-2 sm:px-3 py-1.5 text-xs font-medium text-[var(--forest)]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-[8px]">
                      {[
                        { label: project.caseStudyUrl ? "Case Study" : "View project", url: project.caseStudyUrl ?? project.liveUrl, style: primaryControlClassName },
                        ...(project.liveLabel ? [{ label: project.liveLabel, url: project.liveUrl, style: secondaryControlClassName }] : []),
                        { label: "GitHub", url: project.githubUrl, style: secondaryControlClassName },
                      ].map(({ label, url, style }) =>
                        url ? (
                          <Link
                            key={label}
                            href={url}
                            target={url.startsWith("/") ? undefined : "_blank"}
                            rel={url.startsWith("/") ? undefined : "noopener noreferrer"}
                            className={`${projectControlClassName} ${style}`}
                          >
                            {label}

                          </Link>
                        ) : (
                          <button
                            key={label}
                            type="button"
                            disabled
                            className={`${projectControlClassName} ${style} pointer-events-none cursor-not-allowed opacity-50`}
                          >
                            {label}

                          </button>
                        ),
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
