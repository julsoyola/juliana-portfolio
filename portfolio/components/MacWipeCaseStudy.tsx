import CaseStudy from "@/components/CaseStudy";
import { macwipe } from "@/components/caseStudies";

type Source = { label: string; url: string };
type Topic = { id: string; title: string; question: string; sections: { title: string; text: string }[]; sources?: Source[] };
const repository = "https://github.com/julsoyola/macwipe";
const topics: Topic[] = [
  {
    id: "overview", title: "The problem & the project", question: "What does MacWipe help people do?",
    sections: [
      { title: "A storage total is only the beginning", text: "MacWipe is a macOS storage utility for inspecting accessible local files and reviewing selected items before moving them to Trash. A native application and a browser demo share the same dashboard. The browser uses fictional examples and cannot scan or remove files on a visitor’s Mac." },
      { title: "Context before cleanup", text: "Old downloads may still be useful, caches can be recreated, and application support folders can contain personal data. The interface separates storage inspection from cleanup decisions. Home shows macOS disk capacity, Downloads and Caches summaries, and system indicators; recommendations open a review category without selecting files." },
    ],
  },
  {
    id: "role", title: "My role & design decisions", question: "How did you bring the experience together?",
    sections: [
      { title: "Design & engineering", text: "My work connects the dashboard interface with the native utility: storage summaries, file details, selection, review dialogs, and the Swift bridge that handles local operations. The implementation uses Swift, AppKit, WKWebView, HTML, CSS, and JavaScript." },
      { title: "A quiet desktop interface", text: "The site uses compact desktop windows, cream panels, pink title bars, pixel-style icons, and message dialogs. Short summaries keep the main interface focused, while Details and review dialogs hold longer explanations. The native and demo dashboards share markup and styles so their interaction patterns stay consistent." },
      { title: "Explicit choices", text: "Inspection does not grant cleanup permission. Keep exclusions prevent selection and cleanup until reversed. Bulk selection covers recognized temporary caches; unknown caches and unmatched support folders require individual review. Storage exploration, Startup, and the sidebar Logs view remain read only." },
    ],
  },
  {
    id: "flow", title: "Selection & cleanup review", question: "What happens between inspection and cleanup?",
    sections: [
      { title: "01 / Inspect", text: "Open a category and inspect its rows and Details. Native Downloads candidates must be regular files directly inside Downloads, modified more than 30 days ago. This rule identifies candidates; it does not establish that they are no longer needed. Native cache recognition covers pip’s http-v2 and wheels directories." },
      { title: "02 / Select & review", text: "Selection persists across sorting and category changes. Review selected shows names, logical size, and removal consequences. Duplicate paths and child targets already covered by selected folders are removed from the review. Canceling returns to the existing selection." },
      { title: "03 / Confirm", text: "The native app rechecks approved paths, file identity, metadata, location, and Keep exclusions before moving each target to Trash. Changed or inaccessible targets are rejected and reported. Browser confirmation only simulates cleanup by clearing selection. Nothing is removed automatically, and Trash is never emptied." },
    ],
  },
  {
    id: "information", title: "File information & boundaries", question: "What information supports a cleanup decision?",
    sections: [
      { title: "Details that explain the target", text: "File details include the path, exact logical byte size, classification, and removal consequences. Unmatched support folders are candidates for review, not proven orphans: a missing installed-app match does not establish that the data is unused. Removing an application does not run its vendor uninstaller or remove all supporting files." },
      { title: "Storage is a separate measurement", text: "Available capacity comes from macOS. Logical file sizes describe content lengths, not physical allocation or guaranteed reclaimable space. Moving files to Trash still occupies storage. Hard-link identities are counted once in native aggregates, but this does not measure storage shared by APFS clones." },
      { title: "Keep means keep", text: "Native exclusions persist in macOS preferences. A kept folder protects its descendants, and a kept descendant blocks removal of a containing folder. The browser demo saves example exclusions in local storage when available. Closing affected applications and browsers is advised before cleanup, but the app does not enforce it." },
    ],
  },
  {
    id: "implementation", title: "Native & web implementation", question: "How does the shared dashboard work?",
    sections: [
      { title: "One interface, two environments", text: "The static website needs no account or runtime package installation. In a regular browser, demo-data.js supplies fictional files and stable example readings. The macOS app loads the same dashboard in WKWebView, where macwipe-bridge.js exchanges structured requests and callbacks with ViewController.swift." },
      { title: "Native responsibilities", text: "FileWorker scans category candidates, records approval snapshots, and validates confirmed cleanup targets. StorageExplorer measures approved local folders without registering cleanup approvals. Request IDs reject superseded scan callbacks, while page-generation checks prevent earlier work from updating a replacement dashboard." },
      { title: "A deliberate boundary", text: "The native host restricts navigation and native messages to the bundled main dashboard. Cleanup uses FileManager.trashItem without a fallback to permanent deletion. The repository’s Python CLI is a separate implementation and is not the backend for this dashboard." },
    ],
  },
  {
    id: "optimization", title: "Performance & optimization", question: "Which processes reduce unnecessary work?",
    sections: [
      { title: "Keep filesystem work off the interface thread", text: "A serial background queue handles category measurement, exploration, and cleanup; UI replies return to the main thread. Initial scans cover Downloads and Caches. Later requests refresh specified categories while retaining other completed results in memory. This aligns with Apple’s guidance to move long-running work off the main thread; it is not a measured responsiveness benchmark." },
      { title: "Bound exploration and preserve partial results", text: "Each explorer scan or folder request shares a 100,000-entry limit and a 10-second traversal budget, measured with monotonic system uptime. Folder results retain the largest 50 immediate children. Partial results and skipped paths stay visible. The display cap does not itself limit traversal, and blocking filesystem calls can exceed the budget before returning. These limits do not apply to separate category scans or cleanup revalidation." },
      { title: "Reuse rows rather than rebuild them", text: "The dashboard caches item rows and delegates events. Checkbox changes update selection without recreating the table, and each category retains its sorting order. This reduces repeated DOM construction while keeping selected item IDs independent of their displayed order." },
      { title: "Sample only when useful", text: "One native timer samples CPU ticks every 3 seconds with 0.4 seconds of tolerance. Sampling runs only while Home is visible and the application window is active, visible, unminimized, and unoccluded. Stopping invalidates the timer and observers; resuming establishes a fresh baseline. Memory pressure and thermal updates use events. Apple recommends minimizing timers, allowing tolerance, and stopping timers that are no longer needed; the code follows those practices without claiming measured battery savings." },
    ],
    sources: [
      { label: "Apple — Improving app responsiveness", url: "https://developer.apple.com/documentation/xcode/improving-app-responsiveness" },
      { label: "Apple — Minimize timer usage in Mac apps", url: "https://developer.apple.com/library/archive/documentation/Performance/Conceptual/power_efficiency_guidelines_osx/Timers.html" },
    ],
  },
  {
    id: "rationale", title: "Why this approach makes sense", question: "What supports these design choices?",
    sections: [
      { title: "Reveal detail when it is needed", text: "Nielsen Norman Group describes progressive disclosure as showing essential options first and revealing secondary information on request. MacWipe’s compact summaries and separate Details dialogs fit that pattern. The message topics on this page use the same principle. This is a design rationale, not evidence of a MacWipe usability study." },
      { title: "Put consequences before confirmation", text: "Nielsen Norman Group recommends confirmation for consequential actions and explaining what the action will do. MacWipe’s review step exposes the selected items and removal consequences before native cleanup. Cancel preserves selection, and Keep provides a way to exclude files from later actions. These choices support informed decisions; they do not guarantee safe removal." },
      { title: "Support, not proof", text: "The external guidance explains why these patterns are reasonable. The project materials do not provide user-research findings, comparative benchmarks, or measured cleanup benefits. Those outcomes would require separate evaluation." },
    ],
    sources: [
      { label: "Nielsen Norman Group — Progressive disclosure", url: "https://www.nngroup.com/articles/progressive-disclosure/" },
      { label: "Nielsen Norman Group — Confirmation dialogs", url: "https://www.nngroup.com/articles/confirmation-dialog/" },
    ],
  },
  {
    id: "outcome", title: "Current outcome & limitations", question: "What is available today, and what remains limited?",
    sections: [
      { title: "Current implementation", text: "The project contains a native macOS application and a working browser demo with storage exploration, file details, Keep exclusions, selection, and review. The native app supports macOS 13 or newer on Apple silicon and Intel Macs. Its build and packaging scripts assemble the shared web resources and verify the bundle signature and architectures." },
      { title: "Limits that remain visible", text: "Permissions, cloud placeholders, and scan limits can leave results incomplete. Missing system readings are shown as Unavailable. Caches can return, cleanup does not guarantee a faster computer, and moving files to Trash does not free their storage. The current release uses an ad hoc signature; Apple notarization has not been verified." },
      { title: "Validation available in the repository", text: "The project provides Python tests, Swift fixture checks, optional WKWebView UI checks with temporary roots and a stub Trash operation, and browser checks for the demo and mocked native bridge. These are documented verification tools, not a claim that all native checks were rerun for this portfolio update." },
    ],
  },
];

export default function MacWipeCaseStudy() {
  return <CaseStudy study={macwipe}>
    <h2 className="font-display mb-4 text-2xl">Project notes and engineering detail</h2>
    {topics.map(topic => <details key={topic.id}>
      <summary>{topic.title}</summary>
      {topic.sections.map(section => <section key={section.title}><h3>{section.title}</h3><p>{section.text}</p></section>)}
      <p><a href={`${repository}/blob/main/README.md`}>Project README</a> · <a href={`${repository}/blob/main/INfo.md`}>Engineering overview</a></p>
      {topic.sources && <ul>{topic.sources.map(source => <li key={source.url}><a href={source.url}>{source.label}</a></li>)}</ul>}
    </details>)}
  </CaseStudy>;
}
