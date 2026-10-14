import styles from "./CaseStudyArchive.module.css";
const repository = "https://github.com/julsoyola/googleCleaner";
const sources = [
  ["Project README", `${repository}/blob/main/README.md`],
  ["Extension setup and behavior", `${repository}/blob/main/extension/README.md`],
  ["Popup interface and styling", `${repository}/tree/main/extension`],
  ["Shared logic and tests", `${repository}/blob/main/extension/tests/run.js`],
  ["Background worker", `${repository}/blob/main/extension/background.js`],
  ["Google storage", "https://support.google.com/mail/answer/6374270"],
  ["Drive Trash and deletion", "https://support.google.com/drive/answer/2375102"],
  ["OAuth scopes", "https://developers.google.com/identity/protocols/oauth2/scopes"],
  ["Chrome Identity", "https://developer.chrome.com/docs/extensions/reference/api/identity"],
];

export function GoogleCleanerEngineering() {
  return <>
    <h3>Retrieval and selection</h3>
    <p>The popup retrieves owned, non-trashed files in pages of up to 1,000 items, loading every page before local filename search, type/date filtering, and sorting. Larger inventories may benefit from incremental loading or server-side querying. ID-based selection survives changes to the visible rows; Review includes hidden selections and permits deselection.</p>
    <p>Date filters cover the past 7 days, 30 days, year, chosen month or year, and custom ranges. Sorting supports oldest, newest, name A–Z, and largest first; unknown sizes follow known sizes. Select all matching acts only on the filtered set. Confirmation repeats account and count, and warns about folder contents.</p>
    <h3>Jobs and recovery</h3>
    <p>Confirmation snapshots selected IDs and account context. The worker checks the account before continuing, checkpoints each item in Chrome local storage, and uses a one-minute alarm to wake unfinished jobs. State changes are serialized under a lock. Disconnect pauses further dispatch; an in-flight request can finish and its result is recorded without overwriting the pause.</p>
    <p>HTTP 429, 500, 502, 503, and 504 receive exponential backoff with jitter, up to five attempts. HTTP 401 pauses for reauthorization. Item results preserve successes and identify failures for retry. Selected shortcut IDs are processed without resolving their targets.</p>
    <h3>Permissions and boundaries</h3>
    <p>Chrome Identity supplies the OAuth token. The manifest requests the full Drive scope, granting broad access; explicit IDs constrain actions, not permission. The extension moves selected items to Trash and never empties it. Reported sizes exclude folder contents and can be incomplete. Trash still occupies storage.</p>
    <p>The documented personal-use build requires OAuth configuration and unpacked installation. No publication status, comparative task-time gains, or selection-error results are claimed. The simulated demo does not exercise real OAuth, Drive mutations, or persistent worker state.</p>
    <h3 id="sources">Sources and code</h3>
    <p>Descriptions were checked against local documentation and code, including uncommitted recovery changes. The linked public revision may differ.</p>
    <ul>{sources.map(([title, href]) => <li key={href}><a href={href}>{title}</a></li>)}</ul>
  </>;
}

export function GoogleCleanerDemo() {
  return <section id="demo" className={styles.demo} aria-labelledby="demo-title">
    <header className={styles.windowBar}><h3 id="demo-title">Interactive sample demo · simulated</h3></header>
    <div className={styles.demoBody}>
      <div><p>Sample files, no Google account required.</p>
        <p>Connect the sample account, select Workshop notes, then filter to PDFs. Review shows both visible and hidden selections. Select a folder to inspect its warning; confirm to simulate progress, then choose Retry failed in job details.</p>
        <p>Fixed reference date: October 9, 2026. Reset demo restores the examples. Results are simulated in memory.</p>
      </div>
      <iframe src="/demos/googlecleaner/popup.html" title="GoogleCleaner sample application demo" sandbox="allow-scripts" loading="lazy" className={styles.demoFrame} />
    </div>
  </section>;
}
