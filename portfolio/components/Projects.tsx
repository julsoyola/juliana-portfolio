import Link from "next/link";

const projects = [
  {
    title: "MacWipe",
    description:
      "A native macOS system utility and storage manager designed to clean caches, logs, and downloads",
    stack: ["Swift", "HTML", "CSS", "JavaScript"],
    tone: "bg-[var(--sky)]",
    liveUrl: "https://macwipe.vercel.app/",
    githubUrl: "https://github.com/julsoyola/macwipe",
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
  {
    title: "GoogleCleaner",
    description:
      "A Chrome extension for reviewing, filtering, and moving selected Google Drive files to Trash.",
    stack: ["JavaScript", "Chrome Extensions", "Google Drive API"],
    tone: "bg-[var(--pink)]",
    liveUrl: "https://chromewebstore.google.com/detail/googlecleaner/acijddppbcekpnlddndfomahlpgcnfoe",
    githubUrl: "https://github.com/julsoyola/googleCleaner#readme",
  },
  {
    title: "Developer Toolkit",
    description:
      "A collection of developer utilities focused on automation, workflow efficiency, and internal tooling.",
    stack: ["TypeScript", "Node.js", "Automation"],
    tone: "bg-[#F3AD87]",
    liveUrl: null,
    githubUrl: null,
  },
];

const projectControlClassName =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors";

const primaryControlClassName =
  "border-[#1C2A1A] bg-[#1C2A1A] text-white hover:bg-[#1E2E1E]";
const secondaryControlClassName =
  "border-[var(--forest)]/40 bg-white/80 text-slate-900 hover:border-[var(--forest)]/70 hover:bg-white";

export default function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="projects-heading"
      className="border-t border-[var(--forest)]/20 px-6 py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 min-[900px]:grid-cols-[0.25fr_repeat(3,minmax(0,1fr))] min-[900px]:items-start min-[900px]:gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--terracotta)]">
              Selected Work
            </p>

            <div className="mt-3 h-1.5 w-28 rounded-full bg-[var(--terracotta)]" />

            <h2
              id="projects-heading"
              className="font-display mt-8 text-5xl leading-[1.05] text-[var(--forest)]"
            >
              Projects
            </h2>

            <p className="mt-6 max-w-[220px] text-lg leading-7 text-[var(--text)]">
              A few projects showcasing how I think, build, and solve problems.
            </p>

            <a
              href="#project-list"
              className="mt-8 inline-flex border border-[var(--forest)] bg-[var(--mustard)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--terracotta)] hover:text-[var(--paper)]"
            >
              View project list{" "}
              <span aria-hidden="true" className="ml-2">
                ↘
              </span>
            </a>
          </div>

          <div id="project-list" className="col-span-full grid gap-6 md:grid-cols-2 min-[900px]:col-span-3 min-[900px]:grid-cols-subgrid">
            {projects.map((project, index) => (
              <div key={project.title} className="h-full project-scroll-card">
                <article
                  className={`${project.tone} flex h-full min-h-[310px] flex-col rounded-[18px] border border-[var(--forest)]/25 p-6 transition duration-300 hover:-translate-y-1`}
                >
                  <div className="flex flex-1 flex-col">
                    <span className="text-xs font-semibold tracking-[0.16em] text-[var(--forest)]/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div
                      aria-hidden="true"
                      className="relative mt-4 h-16 border-b border-[var(--forest)]/25"
                    >
                      {index === 0 && (
                        <div className="absolute inset-x-4 top-2 h-10 rounded-md border-2 border-[var(--forest)]/60 p-2">
                          <div className="h-1.5 w-10 bg-[var(--terracotta)]/70" />
                          <div className="mt-2 grid grid-cols-3 gap-1">
                            <span className="h-3 bg-[var(--paper)]/70" />
                            <span className="h-3 bg-[var(--pink)]/70" />
                            <span className="h-3 bg-[var(--paper)]/70" />
                          </div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="absolute inset-x-8 top-4 flex items-center justify-between">
                          <span className="h-3 w-3 rounded-full border-2 border-[var(--forest)]/70" />
                          <span className="h-px flex-1 bg-[var(--forest)]/60" />
                          <span className="h-3 w-3 rounded-full border-2 border-[var(--forest)]/70" />
                          <span className="h-px flex-1 bg-[var(--forest)]/60" />
                          <span className="h-3 w-3 rounded-full border-2 border-[var(--forest)]/70" />
                        </div>
                      )}
                      {index === 2 && (
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
                      {index === 3 && (
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

                    <h3 className="font-display text-[1.7rem] font-semibold leading-tight text-[var(--forest)]">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-[var(--text)]">
                      {project.description}
                    </p>

                    <div className="mt-auto border-t border-[var(--forest)]/20 pt-4">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--forest)]/75">
                        Technologies
                      </p>

                      <ul
                        className="mt-2 flex flex-wrap gap-2"
                        aria-label={`${project.title} technologies`}
                      >
                        {project.stack.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-[var(--forest)]/20 bg-[var(--paper)]/80 px-3 py-1.5 text-xs font-medium text-[var(--forest)]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex gap-[8px]">
                      {[
                        { label: project.caseStudyUrl ? "Case Study" : "View project", url: project.caseStudyUrl ?? project.liveUrl, style: primaryControlClassName },
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
                            <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center leading-none">↗</span>
                          </Link>
                        ) : (
                          <button
                            key={label}
                            type="button"
                            disabled
                            className={`${projectControlClassName} ${style} pointer-events-none cursor-not-allowed opacity-50`}
                          >
                            {label}
                            <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center leading-none">↗</span>
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
