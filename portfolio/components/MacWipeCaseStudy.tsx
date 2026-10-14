import CaseStudy from "@/components/CaseStudy";
import { macwipe } from "@/components/caseStudies";

const repository = "https://github.com/julsoyola/macwipe";

export default function MacWipeCaseStudy() {
  return <CaseStudy study={macwipe}>
    <details><summary>Native validation and cleanup rules</summary>
      <p>Downloads candidates are direct regular files modified more than 30 days ago. Bulk cache selection recognizes pip’s http-v2 and wheels directories; unknown caches and unmatched support folders require individual review. An unmatched folder is not a proven orphan, and application removal does not run a vendor uninstaller or remove all supporting data.</p>
      <p>FileWorker records approval snapshots, then rechecks resolved paths, identity, metadata, Keep exclusions, and running applications before cleanup. Overlapping parent and child targets are deduplicated. A kept folder protects descendants; a kept descendant blocks deletion of its containing folder. Native exclusions persist in macOS preferences; the demo uses local storage when available.</p>
      <p>StorageExplorer accepts approved local roots on the home filesystem, skips symlinks and non-current cloud placeholders, and treats packages as single items. The native host restricts navigation and messages to the bundled main dashboard and uses FileManager.trashItem without permanent-deletion fallback. The repository’s Python CLI is separate from the dashboard backend.</p>
    </details>
    <details><summary>Scan lifecycle and system measurements</summary>
      <p>Explorer folders display the largest 50 immediate children, separately from the traversal budgets. Request IDs reject superseded replies, and page-generation checks prevent old work updating a replacement dashboard. Canceling retains completed results and blocks cleanup until a new scan.</p>
      <p>Native size aggregates deduplicate hard links by device and inode; this does not measure storage shared by APFS clones. Available capacity comes independently from macOS. Missing system readings appear as Unavailable.</p>
      <p>CPU ticks are sampled every 3 seconds with 0.4 seconds of tolerance, only on Home while the app and window are active, visible, unminimized, and unoccluded. Stopping invalidates the timer and observers; resuming establishes a fresh baseline. Memory-pressure and thermal updates are event-driven.</p>
    </details>
    <details><summary>Build, verification, and sources</summary>
      <p>The native application supports macOS 13 or newer on Intel and Apple silicon. Packaging scripts assemble the shared dashboard and verify bundle signatures and architectures.</p>
      <p>The repository includes Python tests, Swift fixtures, browser checks with a mocked native bridge, and optional WKWebView checks with temporary roots and stubbed Trash operations. These describe available verification tools; native app checks were not rerun for this editorial update.</p>
      <ul>
        <li><a href={`${repository}/blob/main/README.md`}>Project README</a></li>
        <li><a href={`${repository}/blob/main/INfo.md`}>Engineering overview</a></li>
        <li><a href="https://developer.apple.com/documentation/xcode/improving-app-responsiveness">Apple — Improving app responsiveness</a></li>
        <li><a href="https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/Timers.html">Apple — Timer efficiency</a></li>
        <li><a href="https://www.nngroup.com/articles/progressive-disclosure/">Nielsen Norman Group — Progressive disclosure</a></li>
        <li><a href="https://www.nngroup.com/articles/confirmation-dialog/">Nielsen Norman Group — Confirmation dialogs</a></li>
      </ul>
    </details>
  </CaseStudy>;
}
