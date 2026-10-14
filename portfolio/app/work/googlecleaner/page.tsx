import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import { googlecleaner } from "@/components/caseStudies";
import styles from "./case-study.module.css";

export const metadata: Metadata = {
  title: "GoogleCleaner Case Study | Juliana Oyola-Pabon",
  description: "Bringing clarity and control to Google Drive cleanup through discovery, explicit selection, review, and background task recovery.",
};
const repository = "https://github.com/julsoyola/googleCleaner";
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
    <details><summary>Detailed architecture and recovery</summary>
      <ol className={styles.architecture} aria-label="GoogleCleaner request flow">
        <li><h3>Popup + shared logic</h3><p>Discovery controls → selected file IDs</p></li>
        <li><h3>Background worker</h3><p>Confirmed snapshot → account checks → item results</p></li>
        <li><h3>Google Drive API</h3><p>PATCH selected ID with trashed: true</p></li>
        <li><h3>Checkpoints + alarms</h3><p>Local storage → one-minute wake-up</p></li>
      </ol>
      <p>Chrome Identity supplies the OAuth token. The worker checks the account before continuing and serializes job-state changes under a lock. Disconnect pauses further dispatch; an in-flight request can finish and its result is recorded without overwriting the pause.</p>
      <p>HTTP 429, 500, 502, 503, and 504 receive exponential backoff with jitter, up to five attempts. HTTP 401 pauses for reauthorization. Item results preserve successes and identify failed items for retry. Selected shortcut IDs are processed without resolving their targets.</p>
      <p>Date filters cover the past 7 days, 30 days, year, chosen month or year, and custom ranges. Sorting supports oldest, newest, name A–Z, and largest first; unknown sizes follow known sizes. Select all matching acts only on the current filtered set. Confirmation repeats account and count, with a warning when a selected folder affects its contents.</p>
    </details>
    <section id="demo" aria-labelledby="demo-title">
      <h3 id="demo-title">Interactive sample demo — simulated</h3>
      <div className={styles.panelBody}>
        <p className={styles.notice}>Sample files, no Google account required.</p>
        <p>Connect the sample account, select Workshop notes, then filter to PDFs. Review shows both visible and hidden selections. Select a folder to inspect its warning; confirm to simulate progress, then choose Retry failed in job details.</p>
        <p className={styles.caption}>Fixed reference date: October 9, 2026. Reset demo restores the examples. Results are simulated in memory.</p>
        <iframe src="/demos/googlecleaner/popup.html" title="GoogleCleaner sample application demo" sandbox="allow-scripts" loading="lazy" className={styles.demoFrame} />
      </div>
    </section>
    <details id="sources"><summary>Sources and code</summary>
      <p>Descriptions were checked against local documentation and code, including uncommitted recovery changes. The linked public revision may differ.</p>
      <ul>{sources.map(([title, url]) => <li key={url}><a href={url}>{title}</a></li>)}</ul>
      <p><a href="https://chromewebstore.google.com/detail/googlecleaner/acijddppbcekpnlddndfomahlpgcnfoe">Existing Chrome Web Store link</a></p>
    </details>
    </div>
  </CaseStudy>;
}
