import type { ReactNode } from "react";

export default function CaseStudySection({ number, title, children, anchorId, className = "" }: { number: string; title: string; children: ReactNode; anchorId?: string; className?: string }) {
  const id = `section-${number}`;
  return (
    <section id={anchorId} aria-labelledby={id} className={`min-w-0 rounded-2xl border border-[#E5E0D8] bg-white/30 p-6 shadow-sm sm:p-10 lg:p-12 ${className}`}>
      <div className="flex items-start gap-4 sm:gap-6">
        <span className="pt-2 text-sm font-semibold tracking-[0.16em] text-[#E07A5F]">{number}</span>
        <h2 id={id} className="font-display text-3xl leading-tight text-[#1C2A1A] sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
