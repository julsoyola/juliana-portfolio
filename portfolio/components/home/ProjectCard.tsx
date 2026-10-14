import Link from "next/link";
import ProjectIllustration from "./ProjectIllustration";
import type { Project } from "@/content/projects/types";

const projectControlClassName =
  "inline-flex min-h-11 w-full min-w-0 items-center justify-center gap-1 rounded-full border px-2 py-2 text-xs font-semibold sm:w-auto sm:gap-2 sm:px-4 sm:text-sm transition-colors focus-visible:outline-[var(--forest)]";

const primaryControlClassName =
  "border-[#1C2A1A] bg-[#1C2A1A] text-white hover:bg-[#1E2E1E]";
const secondaryControlClassName =
  "border-[var(--forest)]/40 bg-white/80 text-slate-900 hover:border-[var(--forest)]/70 hover:bg-white";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
              <div className="h-full min-w-0 project-scroll-card">
                <article aria-label={index < 3 ? `Featured: ${project.title}` : `Additional work: ${project.title}`}
                  className={`${project.tone} flex h-full min-h-[310px] flex-col rounded-[18px] border border-[var(--forest)]/25 p-2.5 sm:p-6 transition duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none`}
                >
                  <div className="flex min-w-0 flex-1 flex-col [overflow-wrap:anywhere]">
                    <span className="text-xs font-semibold tracking-[0.16em] text-[var(--forest)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <ProjectIllustration id={project.id} />

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
  );
}
