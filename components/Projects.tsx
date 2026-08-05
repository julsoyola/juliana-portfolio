"use client";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Full-Stack Product",
    description:
      "A modern web application focused on usability, clean architecture, and a polished user experience.",
    stack: ["React", "TypeScript", "PostgreSQL"],
    tone: "bg-[var(--lavender)]",
    image: "/illustrations/flower.svg",
    imageClass: "w-32",
  },
  {
    title: "Backend Systems",
    description:
      "A distributed backend platform focused on event-driven architecture, reliability, and observability.",
    stack: ["Java", "Spring Boot", "AWS"],
    tone: "bg-[var(--mustard)]",
    image: "/illustrations/grid.svg",
    imageClass: "w-40 rotate-6",
  },
  {
    title: "AI Workflow",
    description:
      "An experimental product exploring practical AI tools for everyday use.",
    stack: ["Python", "LLMs", "APIs"],
    tone: "bg-[var(--pink)]",
    image: "/illustrations/blue-flower.svg",
    imageClass: "w-32",
  },
];

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--terracotta)]">
              Selected Work
            </p>

            <div className="mt-3 h-1.5 w-28 rounded-full bg-[var(--terracotta)]" />

            <p className="mt-6 max-w-[180px] text-lg leading-7 text-[var(--text)]">
              A few projects showcasing how I think, build, and solve problems.
            </p>

            <a
              href="#work"
              className="mt-8 inline-flex rounded-full bg-[var(--mustard)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-1"
            >
              View all projects ↗
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
          <Tilt
            key={project.title}
            className="h-full project-scroll-card"
            glareEnable={false}
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            scale={1.015}
            transitionSpeed={1200}
          >
            <article
              className={`${project.tone} flex h-full min-h-[470px] flex-col rounded-[28px] p-6 shadow-sm transition duration-300 hover:shadow-lg`}
            >
                <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-[22px] bg-white/35">
                  <div className="absolute h-36 w-44 rotate-[-7deg] rounded-[45%_55%_58%_42%] bg-[var(--paper)]/55" />

                  <Image
                    src={project.image}
                    alt=""
                    width={180}
                    height={180}
                    className={`float-slower relative z-10 ${project.imageClass}`}
                  />
                </div>

                <div className="mt-7 flex flex-1 flex-col">
                  <h3 className="font-display text-3xl font-semibold leading-tight text-[var(--forest)]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[var(--text)]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[var(--paper)]/75 px-3 py-1.5 text-xs font-medium text-[var(--text)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <span className="mt-auto self-end pt-8 text-3xl text-[var(--forest)]">
                    →
                  </span>
                </div>
              </article>
            </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}