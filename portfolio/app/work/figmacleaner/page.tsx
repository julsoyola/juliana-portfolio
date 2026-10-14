import type { Metadata } from "next";
import CaseStudyArchive from "@/components/case-study-archive/CaseStudyArchive";
import { figmacleanerArchive } from "@/components/case-study-archive/figmacleaner";
import FigmaCleanerSandbox from "@/components/FigmaCleanerSandbox";
import styles from "@/components/case-study-archive/CaseStudyArchive.module.css";

export const metadata: Metadata = {
  title: "FigmaCleaner Case Study | Juliana Oyola-Pabon",
  description: "Designing a native Figma utility for cleaner layer trees, transparent batch actions, and faster canvas workflows.",
};

export default function FigmaCleanerCaseStudy() {
  return <CaseStudyArchive study={figmacleanerArchive}
    engineeringDetail={<>
      <p>The plugin handles clean-hidden, clean-empty, and unwrap-groups messages synchronously. It checks removed nodes before acting and returns a status message in finally, including when an operation raises a warning.</p>
      <p>The browser sandbox is a separate simulation. Its Clean All action and timing display describe that sample implementation; the native plugin exposes three individual actions. Plugin traversal is not verified as asynchronous or non-blocking.</p>
      <p><a href="https://github.com/julsoyola/figmaCleaner/blob/main/src/code.ts">Plugin host source</a> · <a href="https://github.com/julsoyola/figmaCleaner/blob/main/src/ui.html">Plugin interface source</a></p>
    </>}
    gallerySupplement={<section id="sandbox" className={styles.sandbox} aria-labelledby="sandbox-title">
      <header><h3 id="sandbox-title">Interactive layer sandbox</h3><p>Simulated layers; changes stay in this browser demo.</p></header>
      <FigmaCleanerSandbox />
    </section>} />;
}
