import type { Project } from "./types";
export const googlecleaner = {
  "image": {
    "src": "/images/googlecleaner-review.png",
    "width": 798,
    "height": 954,
    "alt": "GoogleCleaner file list with search, type and date filters, sorting, selection count, and Review button",
    "caption": "Existing extension capture: search, filters, sorting, selection count, and Review before a bulk action."
  },
  "screenshots": [
    {
      "src": "/images/googlecleaner/googlecleaner-preview.png",
      "width": 804,
      "height": 1128,
      "alt": "GoogleCleaner connect screen with Connect Google Drive button",
      "caption": "Existing extension capture before sign-in. Connection establishes the account context for the file inventory."
    }
  ],
  "artifacts": [
    {
      "label": "Try sample demo",
      "href": "#demo"
    },
    {
      "label": "Source & unpacked setup",
      "href": "https://github.com/julsoyola/googleCleaner#readme"
    }
  ],
  "validation": "Ask participants to find a target file, predict the complete selection including hidden items and folder contents, and recover from an API error. Check popup closure and worker resumption with disposable files separately.",
  "metrics": "Proposed measures: time to find a file, selection accuracy, and successful error recovery.",
  "walkthrough": "GoogleCleaner is an interaction-design project about finding the right files and understanding the scope of a bulk action. Large Drive inventories are difficult to scan, and filtering introduces a specific risk: a selected item can disappear from view without disappearing from the selection. I designed and implemented the popup, discovery controls, selection review, confirmation, and background processing. The flow connects an account, lists its owned files, and offers filename search, type and date filters, and sorting. Selection is stored by file ID, so changing a filter does not silently change the selected set. A hidden-selection notice explains the difference, and Review shows the complete selection. My second decision was to put account context, item counts, and folder consequences before confirmation. That adds a review interaction, but makes the pending change explicit. My third decision was to move processing beyond the popup. Chrome popups close easily, and workers can suspend, so confirmed jobs use local checkpoints, alarms, bounded retries, and account checks before resumption. This gives progress and failures a place in the experience rather than treating them as an afterthought. The current tool is a personal-use extension that moves selected items to Trash. Filtering is local after paginated retrieval, so larger inventories are a future scaling question. I would next test selection accuracy, hidden-item understanding, and recovery from an API failure. The lesson is to reduce unnecessary effort while keeping the scope and consequences visible."
};

import type { ArchiveData } from "@/components/case-study-archive/types";
import { navigation, role } from "./navigation";

export const googlecleanerArchive: ArchiveData = {
  theme: "googlecleaner", name: "GoogleCleaner", number: "02", sidebarTitle: ["GoogleCleaner"],
  sidebarSummary: "A Chrome extension that makes Google Drive file discovery, selection, and cleanup easier to understand.",
  metadata: [role, {label: "Type", text: "Personal Chrome Extension"}, {label: "Technology", text: "JavaScript, Manifest V3, Chrome Identity, Google Drive API"}],
  links: [{label: "Demo", href: "#demo", text: "Interactive simulated demo"}, {label: "GitHub", href: "https://github.com/julsoyola/googleCleaner", text: "github.com/julsoyola/googleCleaner"}],
  navigation,
  hero: {title: "Making Google Drive cleanup clearer and more efficient", summary: "GoogleCleaner helps users find files, review their selections, and move chosen items to Trash. Its focused interface and background processing make bulk actions easier to follow without sacrificing control.", image: googlecleaner.image, notice: "Interactive demo: simulated files and results, with no Google account required."},
  actions: [{label: "Try Interactive Demo", href: "#demo"}, {label: "View Source", href: "https://github.com/julsoyola/googleCleaner"}],
  interface: {title: "Interface Design", heading: "A simple, focused experience", text: "I kept the interface centered on three tasks: finding files, selecting them, and reviewing changes. Search, filters, and sorting support discovery, while visible selection states help users understand what they have chosen.", image: googlecleaner.screenshots[0], colors: [["Cream", "#f7f3e9"], ["Secondary", "#efe8d6"], ["Lavender", "#c4bcdd"], ["Selected", "#e5dff0"], ["Blush", "#e9b9c7"], ["Plum", "#302b3d"]]},
  decisions: [
    {title: "Stable selection", icon: "folder", text: "Search and filter without changing selected file IDs.", why: "Hidden rows remain part of the selection.", tradeoff: "Extra state to track hidden selections."},
    {title: "Review the scope", icon: "accessibility", text: "Review every selected item before confirming.", why: "Folder actions also affect their contents.", tradeoff: "One more step before dispatch."},
    {title: "Background jobs", icon: "code", text: "Save progress and expose results when the popup reopens.", why: "Closing the popup does not lose the job state.", tradeoff: "Worker lifecycle and recovery complexity."},
  ],
  flow: {id: "user-flow", title: "User Flow", heading: "From connection to results", text: "Review keeps the scope explicit before a background job begins.", horizontal: true, steps: [["Connect", "Authenticate with Google."], ["Find", "Search, sort, and filter files."], ["Select", "Choose individual files or folders."], ["Review", "Check all selected items."], ["Process", "Move to Trash; inspect results."]]},
  screens: [
    {...googlecleaner.screenshots[0], caption: "01 / Connect account"},
    {...googlecleaner.image, caption: "02 / File discovery and filtering"},
    {placeholder: "googlecleaner-selection-review.png", caption: "03 / Selection review · screenshot pending"},
    {placeholder: "googlecleaner-progress-result.png", caption: "04 / Progress or results · screenshot pending"},
  ],
  engineering: {heading: "Reliable cleanup in a temporary browser interface", text: "The popup handles discovery and review. A background worker keeps confirmed jobs and their recovery state independent of popup visibility.", highlights: [
    {title: "Drive API integration", icon: "folder", text: "Google authentication and paginated file retrieval support connected Drive operations."},
    {title: "Stable selection", icon: "grid", text: "File identifiers preserve selections when sorting or filtering changes."},
    {title: "Background processing", icon: "code", text: "A Manifest V3 service worker manages jobs independently of popup visibility."},
    {title: "Recovery and retries", icon: "accessibility", text: "Local checkpoints, alarms, authorization checks, and bounded retries support progress recovery."},
  ]},
  outcome: {heading: "Efficiency should never obscure consequences", text: "GoogleCleaner is a working personal-use Chrome extension with file discovery, explicit selection, confirmation, background processing, and retry functionality. It demonstrates how a small utility can combine efficient interaction design with predictable state management.", reflection: "I learned that the files a user can see and the files they have selected are different states. Keeping selection stable through filtering, reviewing the full set, and showing failures made the cleanup flow more explicit from discovery through recovery."},
  decoration: "folders",
};

export const googlecleanerCard: Project = {
    id: "googlecleaner",
    liveLabel: "Live Site",
    title: "GoogleCleaner", caseStudyUrl: "/work/googlecleaner",
    description: "Help Drive users find relevant files and understand their full selection before a bulk move to Trash.",
    skills: ["Information architecture", "Selection design", "Error recovery"],
    stack: ["JavaScript", "Chrome Extensions", "Google Drive API"], tone: "bg-[var(--pink)]",
    liveUrl: "https://chromewebstore.google.com/detail/googlecleaner/acijddppbcekpnlddndfomahlpgcnfoe", githubUrl: "https://github.com/julsoyola/googleCleaner#readme",
  };
