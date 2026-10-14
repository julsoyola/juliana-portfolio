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
      <figcaption>{image.caption}</figcaption>
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
            <div className={styles.actions}>
              {study.artifacts.map(({ label, href }) => <Link key={href} href={href} className={styles.button}
                target={href.startsWith("https:") ? "_blank" : undefined}
                rel={href.startsWith("https:") ? "noopener noreferrer" : undefined}>{label}</Link>)}
            </div>
            <Screenshot image={study.image} prominent />
          </header>
          <nav className={styles.contents} aria-label="Case study sections">
            <a href="#problem">Overview & challenge</a>
            <a href="#role">My role & solution</a>
            <a href="#decisions">Design decisions</a>
            <a href="#flow">Flow & screenshots</a>
            <a href="#engineering">Engineering</a>
            <a href="#outcome">Results & reflection</a>
          </nav>
          <div className={styles.reading}>
            {section("01", "Overview & Challenge", "problem", <>
              <p>{study.problem}</p><p className={styles.note}><strong>Intended audience:</strong> {study.audience}</p>
            </>)}
            {section("02", "My Role & Solution", "role", <>
              <p>{study.role}</p><p>{study.solution}</p>
            </>)}
            {section("03", "Key Design Decisions", "decisions", <div className={styles.decisions}>
              {study.decisions.map((decision, index) => <section key={decision.title} className={styles.decision} aria-labelledby={`decision-${index}`}>
                <h3 id={`decision-${index}`}>{index + 1}. {decision.title}</h3>
                <dl>{([
                  ["Challenge", decision.challenge], ["Solution", decision.solution],
                  ["Why it works", decision.why], ["Trade-off", decision.tradeoff],
                ] as const).map(([label, text]) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}</dl>
              </section>)}
            </div>)}
            {section("04", "User Flow & Screenshots", "flow", <>
              <ol className={styles.flow}>{study.flow.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
              {study.screenshots.map(image => <Screenshot key={image.src} image={image} />)}
            </>)}
            {section("05", "Engineering & Optimization", "engineering", <>
              <div className={styles.engineering}>{study.engineering.map(item => <section key={item.title}>
                <h3>{item.title}</h3><p>{item.text}</p>
              </section>)}</div>
              {children}
            </>)}
            {section("06", "Results & Reflection", "outcome", <>
              <p>{study.outcome}</p><p className={styles.note}>{study.evidence}</p>
              <h3>Reflection</h3><p>{study.reflection}</p>
              <h3>Current boundaries</h3><ul>{study.limitations.map(text => <li key={text}>{text}</li>)}</ul>
              <details><summary>Proposed evaluation</summary><p>{study.validation}</p><p>{study.metrics}</p></details>
              <details><summary>Two-minute interview walkthrough</summary><p id="walkthrough">{study.walkthrough}</p></details>
            </>)}
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
