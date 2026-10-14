import type { CaseStudyData } from "@/components/caseStudies";
import styles from "./CaseStudyArchive.module.css";

export default function ReflectionDetails({ study }: { study: CaseStudyData }) {
  const sentences = study.walkthrough.split(/(?<=[.!?])\s+/);
  const groupSize = Math.ceil(sentences.length / 4);
  const paragraphs = Array.from({ length: Math.ceil(sentences.length / groupSize) }, (_, index) =>
    sentences.slice(index * groupSize, (index + 1) * groupSize).join(" "));
  return <div className={styles.reflectionDetails}>
    <details className={styles.disclosure}><summary>Proposed evaluation</summary><p>{study.validation}</p><p>{study.metrics}</p></details>
    <details className={styles.disclosure}><summary>Two-minute interview walkthrough</summary>
      <div id="walkthrough">{paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </details>
  </div>;
}
