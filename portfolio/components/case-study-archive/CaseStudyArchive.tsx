import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ArchiveData, ArchiveIcon, ArchiveScreen } from "./types";
import { themes } from "./themes";
import ArchiveNavigation from "./ArchiveNavigation";
import styles from "./CaseStudyArchive.module.css";

function Icon({ name }: { name: ArchiveIcon }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === "computer" && <><rect x="5" y="4" width="22" height="17" rx="2" /><path d="M10 26h12M16 21v5M8 7h16v11H8z" /></>}
    {name === "folder" && <path fill="var(--archive-yellow)" d="M3 9V6h10l3 4h13v17H3z" />}
    {name === "heart" && <path fill="var(--archive-pink)" d="M16 28 5 17C-2 9 8-1 16 8c8-9 18 1 11 9z" />}
    {name === "grid" && <>{[4,18].flatMap(x => [4,18].map(y => <rect key={`${x}-${y}`} x={x} y={y} width="10" height="10" rx="1" />))}</>}
    {name === "accessibility" && <><circle cx="16" cy="5" r="2" /><path d="m5 10 11 4 11-4M16 14v7m0-3-8 10m8-10 8 10" /></>}
    {name === "code" && <path d="m11 8-8 8 8 8m10-16 8 8-8 8m-3-18-4 20" />}
  </svg>;
}
function ArchiveDecoration({ kind }: { kind: "papers" | "folders" | "tags" }) {
  return <svg className={styles.archiveDecoration} viewBox="0 0 140 100" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" aria-hidden="true">
    {kind === "papers" && <><path fill="var(--archive-blue)" d="M30 20h69v51H30z" /><path fill="var(--archive-yellow)" d="m39 12 65 6-5 51-65-6z" /><path d="m48 28 40 4m-42 5 40 4m-42 5 28 3" /><path fill="var(--archive-pink)" d="M22 60h92v22H22z" /><path d="M61 68h16v6H61z" /></>}
    {kind === "folders" && <><path fill="var(--archive-blue)" d="M25 26h35l9 9h43v45H25z" /><path fill="var(--archive-panel, #fff8ec)" d="M36 17h61v49H36z" /><path d="M46 28h36m-36 9h36m-36 9h25" /><path fill="var(--archive-pink)" d="M22 49h96l-9 34H29z" /></>}
    {kind === "tags" && <><path fill="var(--archive-blue)" d="M29 19h52v62H29z" /><path d="M40 31h30m-30 9h30m-30 9h20" /><path fill="var(--archive-yellow)" d="m60 60 21-33 26 1 9 24-21 33z" /><circle cx="97" cy="41" r="4" /><path d="m97 37 11-17" /></>}
  </svg>;
}

function Dots() {
  return <span className={styles.dots} aria-hidden="true"><i /><i /><i /></span>;
}
function Window({ id, number, title, pink = false, children, className = "" }: { id: string; number: string; title: string; pink?: boolean; children: ReactNode; className?: string }) {
  return <section id={id} aria-labelledby={`${id}-title`} className={`${styles.window} ${className}`}>
    <header className={`${styles.windowBar} ${pink ? styles.pinkBar : ""}`}>
      <Dots /><h2 id={`${id}-title`}>{number}. {title}</h2>
    </header>
    {children}
  </section>;
}
function ScreenImage({ screen, className = "", eager = false }: { screen: ArchiveScreen; className?: string; eager?: boolean }) {
  if (!("src" in screen)) return <div className={`${styles.placeholder} ${className}`} data-placeholder={screen.placeholder} aria-label={screen.caption}><span>Screenshot pending</span><p>{screen.caption}</p></div>;
  return <a href={screen.src} className={`${styles.screenLink} ${className}`} aria-label={`Open full screenshot: ${screen.alt}`}>
    <Image src={screen.src} alt={screen.alt} width={screen.width} height={screen.height}
      sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 500px"
      loading={eager ? "eager" : undefined} />
  </a>;
}

export default function CaseStudyArchive({ study, engineeringDetail, gallerySupplement, reflectionDetail }: {
  study: ArchiveData; engineeringDetail?: ReactNode; gallerySupplement?: ReactNode; reflectionDetail?: ReactNode;
}) {
  const application = study.theme !== "portfolio";
  return <main id="top" className={`${styles.page} ${application ? styles.application : ""}`} style={themes[study.theme]}>
    <div className={styles.container}>
      <header className={styles.topbar}>
        <Link href="/" className={styles.wordmark}><span aria-hidden="true">✦</span> JULIANA OYOLA-PABON</Link>
        <nav aria-label="Main navigation">
          <Link href="/">Home</Link><Link href="/#work" aria-current="page">Work</Link>
          <Link href="/#experience">About</Link><Link href="/#resume">Resume</Link><Link href="/#contact">Contact</Link>
        </nav>
      </header>
      <div className={styles.upperGrid}>
        <aside className={`${styles.window} ${styles.sidebar}`} aria-label="Project archive">
          <div className={`${styles.windowBar} ${styles.orangeBar}`}><Dots /><span className={styles.folder} aria-hidden="true" /></div>
          <p className={styles.archiveLabel}>⌂ Archive / {study.number}</p>
          <div className={styles.sidebarIntro}>
            <h2>{study.sidebarTitle[0]}{study.sidebarTitle[1] && <><br />{study.sidebarTitle[1]}</>}</h2>
            <p>{study.sidebarSummary}</p>
          </div>
          <ArchiveNavigation sections={study.navigation} name={study.name} />
          <details className={styles.projectDetails}>
            <summary>Project details</summary>
            <dl>
              {study.metadata.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.text}</dd></div>)}
              {study.links.map(link => <div key={link.href}><dt>{link.label}</dt><dd><a href={link.href}
                target={link.href.startsWith("https:") ? "_blank" : undefined}
                rel={link.href.startsWith("https:") ? "noopener noreferrer" : undefined}>{link.text} ↗</a></dd></div>)}
            </dl>
          </details>
          <div className={styles.desk} aria-hidden="true">
            {study.decoration ? <ArchiveDecoration kind={study.decoration} /> : <div className={styles.folderArchive}><span className={styles.folder} /><span className={styles.folder} /><span className={styles.folder} /></div>}
          </div>
        </aside>
        <div className={styles.mainColumn}>
          <Window id="overview" number="01" title="Overview">
            <div className={styles.overviewBody}>
              <div className={styles.introduction}>
                <p className={styles.eyebrow}>Case study / {study.name}</p>
                <h1>{study.hero.title}</h1>
                <p>{study.hero.summary}</p>
                <div className={styles.actions}>
                  {study.actions.map((action, index) => <a key={action.href} className={index === 0 ? styles.primaryButton : styles.button} href={action.href}
                    target={action.href.startsWith("https:") ? "_blank" : undefined}
                    rel={action.href.startsWith("https:") ? "noopener noreferrer" : undefined}>{action.label} <span aria-hidden="true">↗</span></a>)}
                </div>
                {study.hero.notice && <p className={styles.notice}>{study.hero.notice}</p>}
              </div>
              <div className={styles.heroCollage}>
                <ScreenImage screen={study.hero.image} eager className={styles.heroScreen} />
                {study.hero.note && <p className={styles.pinkNote}>{study.hero.note.map((line, index) => <span key={index}>{index > 0 && <br />}{line}</span>)}</p>}
                <span className={styles.heroStar} aria-hidden="true">✧</span>
              </div>
            </div>
          </Window>
          <Window id="visual-design" number="02" title={study.interface.title} pink>
            <div className={styles.identityBody}>
              <div>
                <h3>{study.interface.heading}</h3>
                <p>{study.interface.text}</p>
                <ul className={styles.swatches} aria-label={`${study.name} color palette`}>
                  {study.interface.colors.map(([name, color]) => <li key={name} style={{ background: color }} title={name}><span className={styles.srOnly}>{name}</span></li>)}
                </ul>
              </div>
              <div className={styles.identityCollage}>
                <ScreenImage screen={study.interface.image} className={styles.identityScreen} />
                {study.interface.note && <ul className={styles.pinnedNote}>{study.interface.note.map(text => <li key={text}><span aria-hidden="true">☑</span> {text}</li>)}</ul>}
                {!application && <span className={styles.starSticker} aria-hidden="true"><Image src="/illustrations/star.svg" alt="" width={52} height={52} /></span>}
              </div>
            </div>
          </Window>
        </div>
      </div>
      <div className={styles.decisionRow}>
        <Window id="design-decisions" number="03" title="Key Design Decisions">
          <div className={styles.decisionGrid}>{study.decisions.map((decision, index) => <article className={styles.decisionCard} key={decision.title}>
            <div className={styles.decisionTop}><span>0{index + 1}</span><Icon name={decision.icon} /></div>
            <h3>{decision.title}</h3><div className={styles.decisionCopy}><p>{decision.text}</p>{decision.why && <p className={styles.why}><strong>Why:</strong> {decision.why}</p>}</div>
            <div className={styles.tradeoff}><strong>Trade-off</strong><p>{decision.tradeoff}</p></div>
          </article>)}</div>
        </Window>
        <Window id={study.flow.id} number="04" title={study.flow.title} pink>
          <div className={styles.panelBody}>
            <h3>{study.flow.heading}</h3>
            <p>{study.flow.text}</p>
            <ol className={`${styles.path} ${study.flow.horizontal ? styles.horizontalFlow : ""}`}>{study.flow.steps.map(([title, text], index) => <li key={title}>
              <span className={styles.pathNumber}>0{index + 1}</span><div><strong>{title}</strong><p>{text}</p></div>
            </li>)}</ol>
          </div>
        </Window>
      </div>
      <div className={styles.lowerGrid}>
        <Window id="selected-screens" number="05" title="Selected Screens" pink>
          {study.theme === "portfolio" ? <ul className={styles.screenLinks}>
            {study.screens.map(screen => <li key={"src" in screen ? screen.src : screen.placeholder}>
              {"src" in screen ? <a href={screen.src}>{screen.caption} <span aria-hidden="true">↗</span></a> : screen.caption}
            </li>)}
          </ul> : <>
          <div className={styles.screensGrid}>{study.screens.map(screen => <figure key={"src" in screen ? screen.src : screen.placeholder}>
            {"src" in screen ? <ScreenImage screen={screen} /> : <div className={styles.placeholder} data-placeholder={screen.placeholder} aria-label={screen.caption}><span>Screenshot pending</span></div>}<figcaption>{screen.caption}</figcaption>
          </figure>)}</div>
          </>}
        </Window>
        <Window id="implementation" number="06" title="Engineering & Implementation">
          <div className={styles.panelBody}>
            <h3>{study.engineering.heading}</h3>
            <p>{study.engineering.text}</p>
            <div className={styles.technicalGrid}>{study.engineering.highlights.map(item => <article key={item.title}>
              <span className={styles.technicalIcon}><Icon name={item.icon} /></span><div><h4>{item.title}</h4><p>{item.text}</p></div>
            </article>)}</div>
            {engineeringDetail && <details className={styles.disclosure}><summary>Engineering details and sources</summary>{engineeringDetail}</details>}
          </div>
        </Window>
      </div>
      {gallerySupplement}
      <Window id="outcome" number="07" title="Outcome & Reflection">
        <div className={styles.outcomeBody}>
          <div><h3>{study.outcome.heading}</h3><p>{study.outcome.text}</p></div>
          <aside className={styles.reflection}><h4>What I learned</h4><p>{study.outcome.reflection}</p></aside>
        </div>
        {reflectionDetail}
      </Window>
      <footer className={styles.footer}><Link href="/#work">Back to featured work</Link><a href="#top">Back to top ↑</a></footer>
    </div>
  </main>;
}
