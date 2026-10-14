import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { jobs } from "@/content/experience";
import { navigationLinks } from "@/content/navigation";
import { projects } from "@/content/projects/cards";
import { resumes } from "@/content/resumes";
import { skills } from "@/content/skills";
import styles from "./EditorialHome.module.css";

const projectPresentation = [
  { id: "macwipe", category: "MACOS APP / PRODUCTIVITY", backdrop: "#FF9F96", fill: "#FFB5A7", labelHover: "#FFB5A7" },
  { id: "googlecleaner", category: "CHROME EXTENSION / FILE MANAGEMENT", backdrop: "#C9BBF7", fill: "#D9CFF9", labelHover: "#C9BBF7" },
  { id: "figmacleaner", category: "FIGMA PLUGIN / DESIGN TOOLS", backdrop: "#F9D58D", fill: "#FFBE94", labelHover: "#F9D58D" },
  { id: "portfolio", category: "PERSONAL PROJECT / WEB", backdrop: "#A9DFEA", fill: "#B7E5EB", labelHover: "#B7DCD6" },
];

const accomplishments = [
  "Built Java services and AWS infrastructure for Prime Video's Unified Metadata Platform.",
  "Automated partner metadata ingestion and validation, eliminating approximately six hours of manual preprocessing per malformed submission.",
  "Developed backend services and a proximity-based routing algorithm supporting patient workflows.",
  "Built REST APIs and data workflows for the Skynet Robotic Telescope Network.",
];
const timelineColors = ["#FF9F96", "#C9BBF7", "#F9D58D", "#B7D2FA"];
const resumeNumberColors = ["#A13F52", "#6C4AA0", "#8A6200"];
const resumeAccentColors = ["#6C4AA0", "#A13F52", "#8A6200"];
const nav = ["work", "skills", "about", "resume"].map(label =>
  [label, navigationLinks.find(([name]) => name === label)?.[1] ?? "#about"]);

export default function EditorialHome() {
  return <main id="top" className={styles.page}>
    <div className={styles.shell}>
      <div className={styles.composition}>
        <section className={styles.heroSection} aria-labelledby="hero-title">
          <div className={`${styles.panel} ${styles.hero}`}>
            <header className={styles.heroHeader}>
              <a href="#top" className={styles.name}>juliana o.</a>
              <nav aria-label="Main navigation">
                {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
              </nav>
            </header>
            <div className={styles.heroContent}>
              <div className={styles.heroCopy}>
                <h1 id="hero-title">hi.</h1>
                <p className={styles.heroIntro}>i&apos;m juliana ⊹﹒</p>
                <p id="about">i&apos;m a software engineer and emerging designer with a background in computer science and psychology. i love finding creative ways to bring ideas to life</p>
                <div className={styles.heroActions}>
                  <a className={styles.primaryButton} href="#work">View my work <span aria-hidden="true">→</span></a>
                  <a className={styles.button} href="#about">About me</a>
                </div>
              </div>
              <Image
                className={styles.portrait}
                src="/images/portfolio/AnimateHeroImg.port.gif"
                alt="Illustrated portrait of juliana o."
                width={864}
                height={864}
                unoptimized
                loading="eager"
              />
            </div>
          </div>
        </section>

        <section id="work" className={styles.workSection} aria-labelledby="work-title">
          <h2 id="work-title" className={styles.srOnly}>Selected work</h2>
          <div className={`${styles.panel} ${styles.projectGrid}`}>
            {projectPresentation.map(presentation => {
              const project = projects.find(item => item.id === presentation.id)!;
              return <Link key={project.id} href={project.caseStudyUrl!} className={styles.projectCard} style={{ "--card-backdrop": presentation.backdrop, "--card-fill": presentation.fill, "--label-hover": presentation.labelHover } as CSSProperties}>
                <span className={styles.cardBackdrop} aria-hidden="true" />
                <article className={styles.cardFront}>
                  <div className={styles.cardTitleRow}>
                    <h3>{project.title}</h3>
                    <span className={styles.caseStudyLabel}>CASE STUDY</span>
                  </div>
                  <p>{presentation.category}</p>
                  <div className={styles.cardColor} aria-hidden="true" />
                </article>
              </Link>;
            })}
          </div>
        </section>

        <div className={styles.professionalGrid}>
          <section id="experience" className={styles.experienceSection} aria-labelledby="experience-title">
            <div className={`${styles.panel} ${styles.experience}`}>
              <h2 id="experience-title">experience</h2>
              <ol className={styles.timeline}>
                {jobs.map((job, index) => <li key={job.company + job.year} tabIndex={0} style={{ "--row-color": timelineColors[index] } as CSSProperties}>
                  <span className={styles.timelineDot} aria-hidden="true" />
                  <div className={styles.jobIdentity}><h3>{job.company}</h3><p>{job.role}</p></div>
                  <p className={styles.jobDate}>{job.year}</p>
                  <p className={styles.jobDescription}>{accomplishments[index]}</p>
                </li>)}
              </ol>
            </div>
          </section>

          <section id="skills" className={`${styles.panel} ${styles.skills}`} aria-labelledby="skills-title">
            <h2 id="skills-title">skills</h2>
            <ol className={`${styles.timeline} ${styles.skillTimeline}`}>
              {skills.map((group, index) => <li key={group.title} tabIndex={0} style={{ "--row-color": timelineColors[timelineColors.length - 1 - index] } as CSSProperties}>
                <h3 className={styles.skillIdentity}>{group.title}</h3>
                <ul className={styles.skillItems} aria-label={`${group.title} skills`}>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
                <span className={styles.timelineDot} aria-hidden="true" />
              </li>)}
            </ol>
          </section>
        </div>
      </div>

      <div className={styles.secondary}>
        <section id="resume" className={`${styles.panel} ${styles.resumes}`} aria-labelledby="resume-title">
          <h2 id="resume-title">Resumes</h2>
          <div className={styles.resumeGrid}>{resumes.map((resume, index) => <a key={resume.pdf} style={{ "--resume-number": resumeNumberColors[index], "--resume-accent": resumeAccentColors[index] } as CSSProperties} href={resume.pdf} target="_blank" rel="noopener noreferrer" aria-label={`Open ${resume.title} resume PDF`}>
            <span className={styles.resumeNumber}>{resume.index}</span><h3>{resume.title}</h3><p>{resume.description}</p><span className={styles.resumeAction}>Resume</span>
          </a>)}</div>
        </section>
      </div>

      <footer id="contact" aria-label="Contact">
        <div className={`${styles.panel} ${styles.footer}`}>
          <p>© 2023 juliana o.<br />All rights reserved</p>
          <div className={styles.contact}><p>Let&apos;s connect</p><div>
            <a href="mailto:julianaaoyola@gmail.com">email</a>
            <a href="https://linkedin.com/in/julianaoyola" target="_blank" rel="noopener noreferrer">linkedIn</a>
            <a href="https://github.com/julsoyola" target="_blank" rel="noopener noreferrer">github</a>
          </div></div>
          <p className={styles.signature}>built with care :)</p>
        </div>
      </footer>
    </div>
  </main>;
}
