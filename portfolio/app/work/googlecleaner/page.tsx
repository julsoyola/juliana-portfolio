import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import { googlecleaner } from "@/components/caseStudies";
import styles from "./case-study.module.css";

export const metadata: Metadata = {
  title: "GoogleCleaner Case Study | Juliana Oyola-Pabon",
  description: "Bringing clarity and control to Google Drive cleanup through discovery, explicit selection, review, and background task recovery.",
};
const repository = "https://github.com/julsoyola/googleCleaner";
const interactionNotes = [
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
  return <CaseStudy study={googlecleaner}>
    <div className={styles.supplement}>
      <section id="demo" aria-labelledby="demo-title"><h2 id="demo-title" className="font-display mb-4 text-2xl">Interactive application demo</h2>
        <div className={styles.panelBody}>
          <p className={styles.notice}>Interactive demo — sample files, no Google account required.</p>
          <p>Connect the sample account, select Workshop notes, then filter to PDFs. The hidden-selection notice will appear; select the PDF and open Review to see both items. Try a folder to see its contents warning. Confirmation simulates progress with one failed item; open job details and choose Retry failed.</p>
          <p className={styles.caption}>Fixed reference date: October 9, 2026. Reset demo restores all examples. Results are simulated in memory; this frame does not reproduce persistent storage or a real background service worker.</p>
          <iframe src="/demos/googlecleaner/popup.html" title="GoogleCleaner sample application demo" sandbox="allow-scripts" className={styles.demoFrame} />
        </div>
      </section>
      <details id="engineering"><summary>Engineering behind the experience</summary>
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
      </details>
      <details><summary>Interface implementation notes</summary>
        <p>Illustrative interface text; example account data is fictional.</p>
        {interactionNotes.map(note => <section key={note.title}><h3>{note.title}</h3><p><strong>{note.ui}</strong></p><p>{note.text}</p></section>)}
      </details>
      <details id="sources"><summary>Sources and code</summary>
        <p>Descriptions were checked against the local README, manifest, popup, shared logic, and background worker. Local source may differ from the public revision; linked sources provide implementation context.</p>
        <ul>{sources.map(([title, url]) => <li key={url}><a href={url}>{title}</a></li>)}</ul>
        <p>The earlier portfolio linked to a store listing. Local documentation identifies an unpacked extension, so this link is retained only as an unverified legacy reference:</p>
        <a href="https://chromewebstore.google.com/detail/googlecleaner/acijddppbcekpnlddndfomahlpgcnfoe">Legacy store URL — publication not verified</a>
      </details>
    </div>
  </CaseStudy>;
}
