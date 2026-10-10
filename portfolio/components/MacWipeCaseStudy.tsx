"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import styles from "./MacWipeCaseStudy.module.css";

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
  const dialog = useRef<HTMLDialogElement>(null);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);

  function openTopic(topic: Topic) {
    setActiveTopic(topic);
    dialog.current?.showModal();
    if (dialog.current) dialog.current.scrollTop = 0;
  }

  return (
    <main id="top" className={styles.page}>
      <div className={styles.shell}>
        <Link href="/#work" className={styles.back}>← Back to Projects</Link>
        <article className={styles.window} aria-labelledby="macwipe-title">
          <header className={styles.titleBar}><span>macwipe / case study</span><span aria-hidden="true" className={styles.windowControl}>−</span></header>
          <div className={styles.content}>
            <svg width="48" height="48" viewBox="0 0 16 16" aria-hidden="true"><path d="M1 3h5l2 2h7v8H1z" fill="#fff6ec" stroke="#542b45" /><path d="M2 4h4l2 2h6v6H2z" fill="#a44875" /><path d="M4 8h8v1H4zm0 2h5v1H4z" fill="#fff6ec" /></svg>
            <p className={styles.eyebrow}>design & engineering · macOS + web</p>
            <h1 id="macwipe-title">macwipe</h1>
            <p className={styles.tagline}>Inspect your storage. Choose what stays.</p>
            <p className={styles.intro}>A native macOS utility for reviewing local files before moving selected items to Trash. Open a message below to explore the case study.</p>
            <div className={styles.actions}>
              <a href="https://macwipe.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.primary}>View Project ↗</a>
            </div>
            <div className={styles.divider} />
            <h2 className={styles.topicsHeading}>case study messages</h2>
            <div className={styles.topics}>
              {topics.map((topic, index) => (
                <button key={topic.id} type="button" className={styles.topicButton} aria-haspopup="dialog" aria-controls="macwipe-message" aria-expanded={activeTopic?.id === topic.id} onClick={() => openTopic(topic)}>
                  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 2h14v11H8l-4 3v-3H2zM5 6h8M5 9h6" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                  <span>{topic.title}</span><span className={styles.topicNumber}>{String(index + 1).padStart(2, "0")}</span><span aria-hidden="true">›</span>
                </button>
              ))}
            </div>
          </div>
          <footer className={styles.status}>8 topics · project notes & documented behavior</footer>
        </article>
        <p className={styles.note}>Based on the project README, engineering overview, and implementation. External sources explain the rationale; no measured user or performance outcomes are claimed.</p>
      </div>
      <dialog ref={dialog} id="macwipe-message" className={styles.dialog} aria-labelledby="message-title" onClose={() => setActiveTopic(null)} onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
      }}>
        <header className={styles.titleBar}><span id="message-title">mac-chat / {activeTopic?.title ?? "case study"}</span><button type="button" autoFocus className={styles.windowControl} aria-label="Close topic" onClick={() => dialog.current?.close()}>×</button></header>
        {activeTopic && <div className={styles.messageBody}>
          <div className={styles.buddy}><svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="2" width="24" height="24" fill="#fff6ec" stroke="#542b45" strokeWidth="2" /><path d="M9 9h14v10H9zM10 29h12M16 26v3M12 13h2m4 0h2m-7 3h6" fill="none" stroke="#a44875" strokeWidth="2" /></svg><span>macwipe</span></div>
          <p className={styles.question}><strong>you:</strong> {activeTopic.question}</p>
          <div className={styles.answer}>
            <p className={styles.sender}>macwipe:</p>
            {activeTopic.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
            <aside className={styles.sources} aria-label="Sources for this topic">
              <h2>Read the sources</h2>
              <a href={`${repository}/blob/main/README.md`} target="_blank" rel="noopener noreferrer">Project README ↗</a>
              <a href={`${repository}/blob/main/INfo.md`} target="_blank" rel="noopener noreferrer">Engineering overview ↗</a>
              {activeTopic.sources?.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label} ↗</a>)}
            </aside>
          </div>
          <button type="button" className={styles.control} onClick={() => dialog.current?.close()}>Back to topics</button>
        </div>}
        <footer className={styles.status}>Case study message · authored content</footer>
      </dialog>
    </main>
  );
}
