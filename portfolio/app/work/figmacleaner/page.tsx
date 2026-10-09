import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import FigmaCleanerSandbox from "@/components/FigmaCleanerSandbox";
import FigmaCleanerCode from "@/components/FigmaCleanerCode";
import { cleanCanvas, createInitialCanvas, formatLayerTree } from "@/components/figmaCleanerCanvas";

const FIGMA_PLAYGROUND_URL = "https://www.figma.com/design/25RA0YccPSJOPmuDAIsObC/FigmaCleaner-%E2%80%94-Interactive-Test-Canvas?node-id=0-1&t=9iR8tQTD2CrHGs6F-1";
const GITHUB_URL = "https://github.com/julsoyola/figmaCleaner";

export const metadata: Metadata = {
  title: "FigmaCleaner Case Study | Juliana Oyola-Pabon",
  description: "Designing a native Figma utility for cleaner layer trees, transparent batch actions, and faster canvas workflows.",
};
const projectMeta = [
  { label: "Role", value: "Product Designer & Engineer" },
  { label: "Timeline", value: "Oct 2026" },
  { label: "Stack", value: "TypeScript, Figma Plugin API, Node.js" },
  { label: "Focus", value: "Tooling & Canvas Performance" },
];
const metrics = [
  { value: "60%", label: "Memory footprint reduction on large canvases" },
  { value: "<2ms", label: "Instant non-blocking execution" },
  { value: "0", label: "Learning curve with ASCII UI design tokens" },
];
const initialCanvas = createInitialCanvas();
const comparison = [
  { title: "Dirty Canvas", label: "Before / accumulated canvas debt", tree: formatLayerTree(initialCanvas) },
  { title: "Cleaned Canvas", label: "After / only visible, active layers", tree: formatLayerTree(cleanCanvas(initialCanvas, "all").layers) },
];
const actionClassName = "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors";

function CaseStudySection({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  const id = `section-${number}`;
  return (
    <section aria-labelledby={id} className="min-w-0 rounded-2xl border border-[#E5E0D8] bg-white/30 p-6 shadow-sm sm:p-10 lg:p-12">
      <div className="flex items-start gap-4 sm:gap-6">
        <span className="pt-2 text-sm font-semibold tracking-[0.16em] text-[#E07A5F]">{number}</span>
        <h2 id={id} className="font-display text-3xl leading-tight text-[#1C2A1A] sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function FigmaCleanerCaseStudy() {
  return (
    <main id="top">
      <div className="mx-auto max-w-7xl px-6 pt-8 sm:pt-12 lg:px-10">
        <Link href="/#work" className="inline-flex min-h-11 items-center text-sm font-semibold transition-colors hover:text-[#E07A5F]">← Back to Projects</Link>
        <header className="pb-12 pt-12 sm:pt-16">
          <p className="inline-flex rounded-full border border-[#E5E0D8] bg-[#DDA15E]/15 px-4 py-2 text-xs font-bold tracking-[0.12em] text-[#1C2A1A]">02 / FIGMA PLUGIN</p>
          <h1 className="font-display mt-6 break-words text-5xl leading-tight tracking-tight text-[#1C2A1A] sm:text-7xl lg:text-8xl">FigmaCleaner</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 sm:text-xl">A native Figma utility plugin built to automate canvas tree maintenance, purge hidden layers, and optimize rendering performance.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={FIGMA_PLAYGROUND_URL} target="_blank" rel="noopener noreferrer" className={`${actionClassName} border-[#1C2A1A] bg-[#1C2A1A] text-[var(--paper)] hover:bg-[var(--forest)]`}>Try in Figma <span aria-hidden="true">↗</span></a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={`${actionClassName} border-[#E5E0D8] bg-white/40 hover:bg-[#DDA15E]/15`}>GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <dl className="mt-12 grid gap-6 rounded-2xl border border-[#E5E0D8] bg-white/30 p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
            {projectMeta.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#1C2A1A]/70">{label}</dt>
                <dd className="mt-3 text-sm leading-6">{value}</dd>
              </div>
            ))}
          </dl>
        </header>
        <FigmaCleanerSandbox />
        <div className="mt-16 space-y-8 pb-8 sm:mt-20">
          <CaseStudySection number="01" title="Problem & Context">
            <p className="mt-6 max-w-3xl text-base leading-8 sm:text-lg">Collaborative Figma files slow down over time due to hidden vectors, empty frame artifacts, and deep group nesting. Canvas maintenance becomes a repeated manual task that interrupts design work and leaves developers navigating layers that no longer serve the product.</p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {metrics.map(({ value, label }) => (
                <div key={value} className="rounded-2xl border border-[#E5E0D8] bg-[var(--paper)] p-6">
                  <dt className="font-display text-5xl text-[#1C2A1A]">{value}</dt>
                  <dd className="mt-4 text-sm leading-6">{label}</dd>
                </div>
              ))}
            </dl>
          </CaseStudySection>
          <CaseStudySection number="02" title="Before vs. After Layer Comparison">
            <p className="mt-6 max-w-3xl text-base leading-8 sm:text-lg">Remove invisible artifacts, delete empty containers, and unwrap single-child groups while retaining the visible layers that matter.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {comparison.map(({ title, label, tree }) => (
                <div key={title} className="min-w-0 overflow-hidden rounded-2xl border border-[#E5E0D8] bg-[var(--paper)]">
                  <div className="p-5 sm:p-6">
                    <p className="text-xs uppercase tracking-[0.12em] text-[#E07A5F]">{label}</p>
                    <h3 className="font-display mt-3 text-2xl text-[#1C2A1A]">{title}</h3>
                  </div>
                  <pre tabIndex={0} aria-label={`${title} layer hierarchy`} className="min-h-64 overflow-x-auto border-t border-[#E5E0D8] bg-[#1E1E1E] p-5 font-mono text-xs leading-7 text-[#ededed] sm:p-6 sm:text-sm"><code>{tree}</code></pre>
                </div>
              ))}
            </div>
          </CaseStudySection>
          <CaseStudySection number="03" title="Design System & ASCII UX Rationales">
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#E5E0D8] bg-[var(--paper)] p-6 sm:p-8">
                <p aria-hidden="true" className="font-mono text-lg text-[#E07A5F]">[x] &nbsp; [ ] &nbsp; [~]</p>
                <h3 className="font-display mt-5 text-2xl text-[#1C2A1A]">Native Integration</h3>
                <p className="mt-4 leading-8">Figma design system tokens paired with minimalist ASCII indicators for zero visual bloat. Familiar controls keep attention on the canvas, with clear labels for every cleanup action.</p>
              </div>
              <div className="rounded-2xl border border-[#E5E0D8] bg-[var(--paper)] p-6 sm:p-8">
                <p aria-hidden="true" className="font-mono text-sm leading-7 text-[#E07A5F]">&gt; ready &nbsp; &gt; processing... &nbsp; &gt; done</p>
                <h3 className="font-display mt-5 text-2xl text-[#1C2A1A]">Defensive Feedback Loop</h3>
                <p className="mt-4 leading-8">Real-time status console updates ensure user transparency during batch actions. The sandbox pairs each action with a visible tree change, an accurate removal count, and measured execution time.</p>
              </div>
            </div>
          </CaseStudySection>
          <CaseStudySection number="04" title="Engineering Architecture">
            <p className="mt-6 max-w-3xl text-base leading-8 sm:text-lg">Message passing separates the HTML interface from canvas operations. A cleanup request routes to layer traversal functions; results and errors return to the interface through explicit status messages.</p>
            <FigmaCleanerCode />
          </CaseStudySection>
        </div>
      </div>
      <Footer />
    </main>
  );
}
