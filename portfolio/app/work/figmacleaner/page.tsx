import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FigmaCleaner Case Study | Juliana Oyola-Pabon",
  description:
    "A native Figma utility plugin built to automate canvas tree maintenance, purge hidden layers, and optimize rendering performance.",
};

const projectMeta = [
  { label: "Role", value: "Product Designer & Engineer" },
  { label: "Timeline", value: "Oct 2026" },
  { label: "Stack", value: "TypeScript, Figma API, HTML/CSS, Node.js" },
  { label: "Focus", value: "Interaction Design, Tooling, Performance" },
];

const actionClassName =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors";

export default function FigmaCleanerCaseStudy() {
  return (
    <main id="top">
      <div className="mx-auto max-w-7xl px-6 pt-8 sm:pt-12 lg:px-10">
        <Link
          href="/#work"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--forest)] transition-colors hover:text-[var(--terracotta)]"
        >
          ← Back to Projects
        </Link>

        <header className="pb-10 pt-12 sm:pt-16">
          <p className="inline-flex rounded-full border border-[var(--forest)]/25 bg-[var(--mustard)] px-4 py-2 text-xs font-bold tracking-[0.12em]">
            02 / FIGMA PLUGIN
          </p>
          <h1 className="font-display mt-6 break-words text-5xl leading-tight sm:text-7xl lg:text-8xl">
            FigmaCleaner
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 sm:text-xl">
            A native Figma utility plugin built to automate canvas tree
            maintenance, purge hidden layers, and optimize rendering performance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionClassName} border-[var(--forest)] bg-[var(--forest)] text-[var(--paper)] hover:bg-[var(--forest)]/90`}
            >
              Try in Figma <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://github.com/julsoyola/figmaCleaner"
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionClassName} border-[var(--forest)]/40 hover:bg-[var(--mustard)]`}
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

          <dl className="mt-12 grid gap-6 rounded-[24px] border border-[var(--forest)]/20 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
            {projectMeta.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--forest)]/75">
                  {label}
                </dt>
                <dd className="mt-3 text-sm leading-6">{value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="case-study-media flex aspect-video items-center justify-center overflow-hidden rounded-[24px] border border-[var(--forest)]/20 bg-[var(--sky)]/30 text-center">
          <p className="p-6 font-mono text-sm sm:text-lg">
            [ &gt; ] Video Demo Coming Soon
          </p>
        </div>

        <div className="mt-16 space-y-8 pb-8 sm:mt-20">
          <section aria-labelledby="problem-heading" className="rounded-[24px] border border-[var(--forest)]/20 p-6 sm:p-10">
            <h2 id="problem-heading" className="font-display text-3xl sm:text-4xl">
              01. The Problem
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 sm:text-lg">
              Large collaborative Figma files accumulate unused layers, hidden
              frames, and single-child groups over time. This bloats file memory,
              degrades canvas rendering performance, and slows down developer
              handoff.
            </p>
          </section>

          <section aria-labelledby="design-heading" className="rounded-[24px] border border-[var(--forest)]/20 p-6 sm:p-10">
            <h2 id="design-heading" className="font-display text-3xl sm:text-4xl">
              02. Design Rationales &amp; UX
            </h2>
            <div className="mt-6 grid gap-6 text-base leading-8 sm:text-lg lg:grid-cols-2">
              <p>
                <strong>Native Integration:</strong> Designed using Figma design
                system tokens and minimalist ASCII UI elements ([x], [ ], [~]) to
                sit seamlessly alongside standard Figma panels without visual
                distraction.
              </p>
              <p>
                <strong>Defensive Feedback Loop:</strong> Implemented real-time
                ASCII status indicators (&gt; processing..., &gt; done) so users
                maintain complete visibility over automated actions without
                breaking flow state.
              </p>
            </div>
          </section>

          <section aria-labelledby="engineering-heading" className="rounded-[24px] border border-[var(--forest)]/20 p-6 sm:p-10">
            <h2 id="engineering-heading" className="font-display text-3xl sm:text-4xl">
              03. Engineering Integration
            </h2>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
