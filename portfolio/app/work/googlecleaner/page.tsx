import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CaseStudySection from "@/components/CaseStudySection";
import styles from "./case-study.module.css";

export const metadata: Metadata = {
  title: "GoogleCleaner Case Study | Juliana Oyola-Pabon",
  description: "Designing a personal Google Drive review workflow with explicit selection, confirmation, background job recovery, and a browser-only sample demo.",
};

const repository = "https://github.com/julsoyola/googleCleaner";
const sections = [
  ["overview", "Overview"], ["problem", "The problem"], ["workflow", "The workflow"],
  ["decisions", "Design decisions"], ["demo", "Interactive demo"], ["engineering", "Engineering"],
  ["outcome", "Outcome & next steps"], ["sources", "Sources & code"],
];
const steps = [
  ["Connect", "Confirm the account identity before browsing its Drive."],
  ["Browse & filter", "Search names and combine file-type, modified-date, and sorting controls."],
  ["Select", "Choose individual items or select all matching the active filters."],
  ["Review", "Inspect every selected item, including selections hidden by filters."],
  ["Confirm", "Read the account, reported size, and folder warning before moving items to Trash."],
  ["Track results", "Follow item-level progress, retry failures, or reconnect to resume a paused job."],
];
const decisions = [
  { title: "Visible account identity", icon: "docs", ui: "Account: alex@example.com", text: "The account menu and review show which Drive is being modified. This is intended to make account context visible before a consequential action; the address shown here is fictional." },
  { title: "Different ways to find files", icon: "sheets", ui: "Search · Type · Modified date · Sort", text: "Case-insensitive filename search combines with Docs, Sheets, Slides, PDF, or folder filters. Date options cover the past 7 days, 30 days, year, chosen month or year, and a custom range. Sorting supports oldest, newest, name A–Z, and largest first, with unknown sizes placed after known sizes." },
  { title: "Hidden selections stay explicit", icon: "file", ui: "1 selected item hidden by current filters.", text: "Changing filters does not silently remove a selection. The notice explains when selected items are no longer visible in the list, and full-selection review still includes them. Select all matching acts only on the current filtered set." },
  { title: "Review the entire selection", icon: "slides", ui: "Review selected items → Confirm move to Trash", text: "A separate review screen lists every selected item and allows deselection before confirmation. The final confirmation repeats the account and item count. Its intended benefit is a concrete chance to inspect the action before dispatch." },
  { title: "Folders need a consequence warning", icon: "folder", ui: "Trashing a folder also moves everything inside it to Trash.", text: "The warning appears when a folder is selected. A folder is not treated as an empty container simply because its own size is missing; its contents are affected by Drive’s folder operation." },
  { title: "Reported size, not space freed", icon: "pdf", ui: "Reported size · items with no reported size aren’t counted", text: "The interface totals available size metadata and counts unknown values separately. Missing values are not presented as zero-size files, and totals do not promise reclaimed storage. Trashed files continue counting toward Google storage until permanently deleted." },
  { title: "Background progress with individual results", icon: "file", ui: "Cleaning up: 2 of 3 processed · OK / failed", text: "The popup shows job progress and item-level results while the service worker handles cleanup. Closing the popup does not itself cancel the job. Checkpoints and alarm-based wake-up support resumption when the worker is suspended." },
  { title: "Actionable recovery", icon: "docs", ui: "Retry failed · Reconnect / Resume", text: "Transient API errors receive bounded retries. Failed items can be retried, and authorization problems pause the job. The local implementation also pauses on Disconnect and checks the account before resuming; a different account cannot silently continue the previous job." },
];
const sources = [
  ["Project README", `${repository}/blob/main/README.md`],
  ["Extension setup & behavior", `${repository}/blob/main/extension/README.md`],
  ["Popup interface & styling", `${repository}/tree/main/extension`],
  ["Shared logic & tests", `${repository}/blob/main/extension/tests/run.js`],
  ["Background worker", `${repository}/blob/main/extension/background.js`],
  ["Google — Storage across Drive, Gmail & Photos", "https://support.google.com/mail/answer/6374270"],
  ["Google — Drive Trash and deletion", "https://support.google.com/drive/answer/2375102"],
  ["Google — OAuth scopes", "https://developers.google.com/identity/protocols/oauth2/scopes"],
  ["Chrome — Identity API", "https://developer.chrome.com/docs/extensions/reference/api/identity"],
];

export default function GoogleCleanerCaseStudy() {
  return (
    <main id="top" className={styles.page}>
      <div className={styles.shell}>
        <Link href="/#work" className={styles.back}>← Back to Projects</Link>
        <article className={styles.window} aria-labelledby="project-title">
          <div className={styles.titleBar}>
            <Image src="/demos/googlecleaner/icons/icon32.png" width={28} height={28} alt="" />
            <span>GoogleCleaner — Case Study</span>
          </div>
          <nav className={styles.toolbar} aria-label="Case study toolbar">
            <a href="#overview" className={styles.button}>Read case study</a>
            <a href="#demo" className={styles.button}>Try sample demo</a>
            <a href="#sources" className={styles.button}>Sources & code</a>
          </nav>
          <header className={styles.hero}>
            <p className={styles.eyebrow}>Personal project / Chrome extension / Manifest V3</p>
            <h1 id="project-title">GoogleCleaner</h1>
            <p className={styles.subtitle}>A focused Google Drive cleanup workflow, designed around clear selection and deliberate action.</p>
            <p>I designed and built a personal-use Chrome extension for reviewing my Google Drive files and moving selected items to Trash. The challenge was making bulk cleanup understandable: which account is connected, what is selected, and what happens after confirmation.</p>
            <dl className={styles.meta}>
              <div><dt>Contribution</dt><dd>Design & development</dd></div>
              <div><dt>Implementation</dt><dd>HTML / CSS / JavaScript</dd></div>
              <div><dt>Status</dt><dd>Personal-use, unpacked extension</dd></div>
            </dl>
          </header>
          <div className={styles.workspace}>
            <aside className={styles.navigator}>
              <nav aria-label="Case study sections">
                <h2>Contents</h2>
                {sections.map(([id, title], index) => <a key={id} href={`#${id}`}><span>{String(index + 1).padStart(2, "0")}</span>{title}</a>)}
              </nav>
              <p>Drive files only.<br />No Gmail or Photos operations.</p>
            </aside>
            <div className={styles.reading}>
              <CaseStudySection number="01" title="Overview" anchorId="overview" className={styles.panel}>
                <div className={styles.panelBody}>
                  <p>I designed the interface and implemented the extension with plain HTML, CSS, and JavaScript. Manifest V3 connects the popup to a background service worker and shared pure logic for filtering, sorting, size summaries, and job state.</p>
                  <p>The project README describes a personal-use extension loaded unpacked in Chrome, with a user-configured OAuth client. It does not document a published Chrome Web Store release. The portfolio’s existing View Project link is preserved, while this case study describes the local implementation and its documented status.</p>
                  <p className={styles.notice}>The demonstration below uses fictional files and an example account. It requests no OAuth access and performs no real Drive operations.</p>
                </div>
              </CaseStudySection>
              <CaseStudySection number="02" title="The problem" anchorId="problem" className={styles.panel}>
                <div className={styles.panelBody}>
                  <p>Accumulated files can make cleanup decisions difficult: a filename or modification date does not establish whether a file is still needed. Bulk actions add another question—does the final selection match what I intended to change?</p>
                  <p>This is the design rationale for a personal tool, rather than a finding from validated user research. The workflow keeps account identity, hidden selections, and removal consequences visible at decision points.</p>
                  <p>Google documents up to 15 GB of shared storage for personal accounts across Drive, Gmail, and Photos. That provides context for storage review; GoogleCleaner manages Drive only. <a href="https://support.google.com/mail/answer/6374270" target="_blank" rel="noopener noreferrer">Google storage guidance ↗</a></p>
                </div>
              </CaseStudySection>
              <CaseStudySection number="03" title="The workflow" anchorId="workflow" className={styles.panel}>
                <div className={styles.panelBody}>
                  <ol className={styles.steps}>{steps.map(([title, detail], index) => <li key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{detail}</p></div></li>)}</ol>
                  <div className={styles.screens}>
                    <figure><Image src="/images/googlecleaner/googlecleaner-preview.png" width={804} height={1128} alt="Existing GoogleCleaner connect screen, with a lavender title bar and Connect Google Drive button" /><figcaption><strong>Connect / establish context.</strong> Existing project capture before sign-in. The live demo uses a sample account instead.</figcaption></figure>
                    <figure><Image src="/images/googlecleaner-review.png" width={798} height={954} alt="Existing file browser showing name search, type and date filters, sorting, checkboxes, and the Review control" /><figcaption><strong>Browse / select / review.</strong> Existing project capture: filters narrow the list, checkboxes identify the selection, and Review sits beside the selection count.</figcaption></figure>
                  </div>
                </div>
              </CaseStudySection>
              <CaseStudySection number="04" title="Design decisions" anchorId="decisions" className={styles.panel}>
                <div className={styles.panelBody}>
                  <p>These are implemented decisions and intended benefits, without measured improvement claims. The small interface examples below are illustrative, not live account data.</p>
                  <div className={styles.decisions}>{decisions.map((decision) => <section key={decision.title} className={styles.decision}>
                    <h3><Image src={`/demos/googlecleaner/icons/types/${decision.icon}.svg`} width={22} height={22} alt="" />{decision.title}</h3>
                    <div className={styles.uiExample}>{decision.ui}</div><p>{decision.text}</p>
                  </section>)}</div>
                </div>
              </CaseStudySection>
              <CaseStudySection number="05" title="Interactive application demo" anchorId="demo" className={styles.panel}>
                <div className={styles.panelBody}>
                  <p className={styles.notice}>Interactive demo — sample files, no Google account required.</p>
                  <p>Connect the sample account, select Workshop notes, then filter to PDFs. The hidden-selection notice will appear; select the PDF and open Review to see both items. Try a folder to see its contents warning. Confirmation simulates progress with one failed item; open job details and choose Retry failed.</p>
                  <p className={styles.caption}>Fixed reference date: October 9, 2026. Reset demo restores all examples. Results are simulated in memory; this frame does not reproduce persistent storage or a real background service worker.</p>
                  <iframe src="/demos/googlecleaner/popup.html" title="GoogleCleaner sample application demo" sandbox="allow-scripts" className={styles.demoFrame} />
                </div>
              </CaseStudySection>
              <CaseStudySection number="06" title="Engineering behind the experience" anchorId="engineering" className={styles.panel}>
                <div className={styles.panelBody}>
                  <ol className={styles.architecture} aria-label="GoogleCleaner architecture and request flow">
                    <li><h3>Popup + shared pure logic</h3><p>popup.html / popup.css / popup.js<br />lib.js: filters, dates, sorting, size summaries</p></li>
                    <li><h3>Background service worker</h3><p>Confirmed IDs → job snapshot<br />Account checks → bounded retries → item results</p></li>
                    <li><h3>Google Drive API</h3><p>Owned, non-trashed file inventory<br />PATCH selected file ID with trashed: true</p></li>
                    <li><h3>Local checkpoints + alarms</h3><p>chrome.storage.local after each item<br />One-minute chrome.alarms tick → worker resumption</p></li>
                  </ol>
                  <p>The popup retrieves paginated Drive results, requesting up to 1,000 files per page and listing non-trashed files owned by the connected account. Filename, type, and date filtering run through shared pure logic. The selection is stored by ID, so filtering does not redefine the confirmed set.</p>
                  <p>Confirmation snapshots selected item IDs and names into a background job. The worker verifies the connected account before continuing, checkpoints each item’s result in local storage, and uses a one-minute alarm to wake unfinished work. Local changes serialize job-state updates and prevent further dispatch after a pause; an already-dispatched request may finish and have its result recorded.</p>
                  <p>HTTP 429, 500, 502, 503, and 504 receive exponential backoff with jitter, up to five attempts. Authorization failures pause for reauthorization; item-level failures remain available for retry. These mechanisms support recovery without making the popup responsible for the job’s lifetime.</p>
                  <p>Chrome Identity supplies the OAuth token through <code>chrome.identity.getAuthToken</code>. The actual manifest requests the full <code>https://www.googleapis.com/auth/drive</code> scope, which grants broad Drive access. The interface uses explicit selected IDs, but that does not make its OAuth permission narrow. No Google approval, certification, or completed verification is claimed. <a href="https://developer.chrome.com/docs/extensions/reference/api/identity" target="_blank" rel="noopener noreferrer">Chrome Identity documentation ↗</a> · <a href="https://developers.google.com/identity/protocols/oauth2/scopes" target="_blank" rel="noopener noreferrer">Google scope documentation ↗</a></p>
                </div>
              </CaseStudySection>
              <CaseStudySection number="07" title="Current outcome & next steps" anchorId="outcome" className={styles.panel}>
                <div className={styles.panelBody}>
                  <p>The current implementation supports account identity, paginated listing, combined filters, explicit selection, full-selection review, confirmation, background progress, retries, and account-aware resumption. It targets Google Drive and does not add permanent deletion, empty-Trash actions, duplicate detection, or AI cleanup.</p>
                  <p className={styles.warning}>Moving files to Trash does not immediately reclaim storage. Google documents that trashed files still count toward storage until permanently deleted and are automatically permanently deleted after 30 days. Trash is not indefinite recovery. <a href="https://support.google.com/drive/answer/2375102" target="_blank" rel="noopener noreferrer">Drive Trash behavior ↗</a></p>
                  <p>The browser demo validates the presentation and sample workflow, not real OAuth, Drive mutations, service worker suspension, or alarm recovery. Reported size can be incomplete, and modification dates do not prove that files are unused. Cleanup is not guaranteed safe.</p>
                  <p>Future validation includes usability testing of hidden selection and folder warnings, plus large-library performance evaluation. The current popup fetches the full paginated inventory before filtering; no comparative speed, memory, adoption, or time-saving results are claimed.</p>
                </div>
              </CaseStudySection>
              <CaseStudySection number="08" title="Sources & code" anchorId="sources" className={styles.panel}>
                <div className={styles.panelBody}>
                  <p>Implementation descriptions were checked against the local project’s README, popup, shared library, service worker, manifest, tests, and screenshots. The local working tree includes changes beyond the public commit; repository links show the public version.</p>
                  <ul className={styles.sourceList}>{sources.map(([title, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{title} ↗</a></li>)}</ul>
                </div>
              </CaseStudySection>
            </div>
          </div>
          <footer className={styles.statusBar}><span>Chrome extension · personal use</span><a href="#top">Back to top ↑</a></footer>
        </article>
      </div>
    </main>
  );
}
