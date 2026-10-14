import ProjectCard from "./ProjectCard";
import { projects } from "@/content/projects/cards";



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
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
