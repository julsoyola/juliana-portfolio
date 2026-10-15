import type { Metadata } from "next";
import CaseStudyArchive from "@/components/case-study-archive/CaseStudyArchive";
import { figmacleanerArchive } from "@/content/projects/figmacleaner";
import FigmaCleanerPlugin from "@/components/demos/figmacleaner/FigmaCleanerPlugin";
import FigmaCleanerDemo from "@/components/demos/figmacleaner/FigmaCleanerDemo";
import styles from "@/components/case-study-archive/CaseStudyArchive.module.css";

export const metadata: Metadata = {
  title: "FigmaCleaner Case Study | Juliana Oyola-Pabon",
  description: "Designing a native Figma utility for cleaner layer trees, transparent batch actions, and faster canvas workflows.",
};

export default function FigmaCleanerCaseStudy() {
  return <CaseStudyArchive study={figmacleanerArchive}
    overviewVisual={<FigmaCleanerPlugin />}
    engineeringDetail={<>
      <p>The plugin handles clean-hidden, clean-empty, and unwrap-groups messages synchronously. It checks removed nodes before acting and returns a status message in finally, including when an operation raises a warning.</p>
      <p>The browser demo is a separate simulation using sample layers. Both previews expose the same three individual actions as the native plugin. Plugin traversal is not verified as asynchronous or non-blocking.</p>
      <p><a href="https://github.com/julsoyola/figmaCleaner/blob/main/src/code.ts">Plugin host source</a> · <a href="https://github.com/julsoyola/figmaCleaner/blob/main/src/ui.html">Plugin interface source</a></p>
    </>}
    gallerySupplement={<section id="demo" className={styles.sandbox} aria-labelledby="demo-title">
      <header><h3 id="demo-title">Try FigmaCleaner</h3><p>Choose an action to watch the sample layers change. Reset demo restores the canvas; no Figma files are modified.</p></header>
      <FigmaCleanerDemo />
    </section>} />;
}
