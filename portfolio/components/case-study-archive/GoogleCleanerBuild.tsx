import Image from "next/image";
import archive from "./CaseStudyArchive.module.css";
import styles from "./GoogleCleanerBuild.module.css";

const repository = "https://github.com/julsoyola/googleCleaner";
const stages = [
  {
    title: "Make cleanup explicit",
    text: "I started with a small utility for browsing owned Drive files and choosing what to move to Trash. I kept review and confirmation in the flow so the action’s scope stays visible.",
    source: `${repository}/commit/9f2d486c4dadfa948a4f837e764b24a54ff9e85e`,
  },
  {
    title: "Keep selection stable",
    text: "Filtering can hide a file without removing it from a selection. I tracked selections by file ID and made Review show the full set, including hidden items and folder warnings.",
    source: `${repository}/blob/main/extension/popup.js`,
  },
  {
    title: "Work beyond the popup",
    text: "A popup can close while cleanup is still running. I put confirmed jobs in a background worker with saved progress, account checks, and bounded retries so recovery has a place in the interface.",
    source: `${repository}/blob/main/extension/background.js`,
  },
  {
    title: "Untangle sign-in",
    text: "I added an explicit Google account chooser and restored sessions when the popup reopens. Switching clears old selections, while active jobs block switching so cleanup stays tied to its original account.",
    source: `${repository}/blob/main/auth-backend/README.md`,
  },
  {
    title: "Make trust visible",
    text: "OAuth review raised domain-ownership and privacy-disclosure requirements, separate from Web Store publication. I expanded the policy and built a matching public website to explain access, retention, and user controls.",
    source: `${repository}/blob/main/docs/oauth-verification.md`,
  },
  {
    title: "Refine what comes next",
    text: "The project taught me to design for hidden state: selected files, background work, and account context. Next, I’d explore incremental file loading and test whether people can predict the full selection before confirming.",
    source: `${repository}/blob/main/extension/popup.js`,
  },
];
const screenshots = [
  {
    src: "/images/googlecleaner/Screenshot 2026-10-15 at 10.55.22.png",
    width: 1396,
    height: 742,
    alt: "GoogleCleaner public website explaining Browse, Find, Review, and Move to Trash in four pastel panels.",
    caption: "The public site carries the extension’s palette into a clear explanation of the cleanup flow.",
  },
  {
    src: "/images/googlecleaner/Screenshot 2026-10-15 at 10.55.30.png",
    width: 1476,
    height: 784,
    alt: "GoogleCleaner public website describing background progress, Google Drive access, and a link to the full privacy policy.",
    caption: "Access and background behavior are explained alongside a visible link to the full privacy policy.",
  },
];

export default function GoogleCleanerBuild() {
  return <section className={`${archive.window} ${styles.section}`} aria-labelledby="behind-build-title">
    <header className={archive.windowBar}>
      <span className={archive.dots} aria-hidden="true"><i /><i /><i /></span>
      <h2 id="behind-build-title">Behind the Build</h2>
    </header>
    <details className={styles.disclosure}>
      <summary className={styles.summary}>
        <span>Explore the development process</span>
        <span className={styles.arrow} aria-hidden="true">↗</span>
      </summary>
      <div className={styles.content}>
        <ol className={styles.flow} aria-label="GoogleCleaner development journey">
          {stages.map((stage, index) => <li key={stage.title}>
            <span className={styles.node} aria-hidden="true">0{index + 1}</span>
            <div><h3>{stage.title}</h3><p>{stage.text}</p>
              <a className={styles.source} href={stage.source}>Source<span className={archive.srOnly}> for {stage.title}</span></a>
            </div>
          </li>)}
        </ol>
        <div className={styles.screens}>
          {screenshots.map(screen => <figure key={screen.src}>
            <a className={archive.screenLink} href={screen.src} aria-label={`Open full screenshot: ${screen.alt}`}>
              <Image src={screen.src} width={screen.width} height={screen.height} alt={screen.alt}
                sizes="(max-width: 800px) 90vw, 550px" />
            </a>
            <figcaption>{screen.caption}</figcaption>
          </figure>)}
        </div>
      </div>
    </details>
  </section>;
}
