import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import CaseStudySection from "@/components/CaseStudySection";
import type { CaseStudyData, StudyImage } from "@/components/caseStudies";
import styles from "./CaseStudy.module.css";

function Screenshot({ image, prominent = false }: { image: StudyImage; prominent?: boolean }) {
  return (
    <figure className={styles.figure}>
      <a href={image.src} aria-label={`Open full screenshot: ${image.alt}`}>
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height}
          loading={prominent ? "eager" : undefined}
          sizes="(max-width: 700px) 90vw, 1000px" className={prominent ? styles.heroImage : styles.image} />
      </a>
      <figcaption>{image.caption} Select the image to inspect it at full size.</figcaption>
    </figure>
  );
}

export default function CaseStudy({ study, children }: { study: CaseStudyData; children?: ReactNode }) {
  const section = (number: string, title: string, id: string, content: ReactNode) => (
    <CaseStudySection number={number} title={title} anchorId={id} className={styles.section}>
      <div className={styles.body}>{content}</div>
    </CaseStudySection>
  );
  return (
    <main id="top" className={`${styles.page} ${styles[study.theme]}`}>
      <div className={styles.shell}>
        <Link href="/#work" className={styles.back}>← Juliana Oyola-Pabon / Featured work</Link>
        <article className={styles.window} aria-labelledby="project-title">
          <div className={styles.titleBar}>{study.name} / Case study</div>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>Independent design & development</p>
            <h1 id="project-title">{study.title}</h1>
            <p className={styles.summary}>{study.summary}</p>
            <dl className={styles.meta}>
              <div><dt>Role</dt><dd>Independent designer / developer</dd></div>
              <div><dt>Platform & technology</dt><dd>{study.platform}<br />{study.technology}</dd></div>
              <div><dt>Status</dt><dd>{study.status}</dd></div>
            </dl>
            <p className={styles.callout}><strong>Key trade-off.</strong> {study.tradeoff}</p>
            <div className={styles.actions}>
              {study.artifacts.map(({ label, href }) => <Link key={href} href={href} className={styles.button}
                target={href.startsWith("https:") ? "_blank" : undefined}
                rel={href.startsWith("https:") ? "noopener noreferrer" : undefined}>{label}</Link>)}
            </div>
            <Screenshot image={study.image} prominent />
          </header>
          <nav className={styles.contents} aria-label="Case study sections">
            <a href="#problem">Challenge & role</a>
            <a href="#decisions">Design decisions</a>
            <a href="#flow">Flow & screenshots</a>
            <a href="#outcome">Evidence & next steps</a>
          </nav>
          <div className={styles.reading}>
            {section("01", "The problem", "problem", <><p>{study.problem}</p><p className={styles.note}>{study.audience}</p></>)}
            {section("02", "My role and objective", "role", <><p>{study.role}</p><p><strong>Success means:</strong> {study.objective}</p></>)}
            {section("03", "Design principles", "principles", <ul className={styles.principles}>{study.principles.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ul>)}
            {section("04", "Experience flow", "flow", <>
              <ol className={styles.flow}>{study.flow.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
              {study.screenshots.map(image => <Screenshot key={image.src} image={image} />)}
            </>)}
            {section("05", "Key design decisions", "decisions", <>
              <p className={styles.note}>Retrospective rationale for implemented choices. These comparisons do not claim documented historical experiments or measured usability improvements.</p>
              <div className={styles.decisions}>{study.decisions.map((decision, index) => <section key={decision.title} className={styles.decision} aria-labelledby={`decision-${index}`}>
                <h3 id={`decision-${index}`}>{index + 1}. {decision.title}</h3>
                <dl>{([
                  ["User problem", decision.problem], ["Alternative", decision.alternative],
                  ["Selected design", decision.design], ["Reasoning", decision.reasoning],
                  ["Trade-off", decision.tradeoff],
                ] as const).map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>
              </section>)}</div>
            </>)}
            {section("06", "Constraints", "constraints", <ul>{study.constraints.map(text => <li key={text}>{text}</li>)}</ul>)}
            {section("07", "Outcome and evidence", "outcome", <>
              <h3>Verified implementation</h3><ul>{study.verified.map(text => <li key={text}>{text}</li>)}</ul>
              <h3>Measured results</h3><p>{study.measurement}</p>
              <h3>Limitations</h3><ul>{study.limitations.map(text => <li key={text}>{text}</li>)}</ul>
              <aside className={styles.callout} aria-labelledby="next-steps"><h3 id="next-steps">Evidence and next steps</h3><p><strong>Proposed validation — not conducted.</strong> {study.validation}</p><p>{study.metrics}</p></aside>
            </>)}
            {section("08", "Reflection", "reflection", <p>{study.reflection}</p>)}
            {section("09", "Walkthrough", "walkthrough", <details><summary>Two-minute spoken walkthrough</summary><p>{study.walkthrough}</p></details>)}
            {children && <div className={styles.supplement}>{children}</div>}
          </div>
          <footer className={styles.footer}>
            <Link href={study.next.href} className={styles.button}>Next case study: {study.next.name} →</Link>
            <Link href="/#contact">Contact Juliana</Link>
            <Link href="/#resume">Resumes</Link>
            <a href="#top">Back to top ↑</a>
          </footer>
        </article>
      </div>
    </main>
  );
}
