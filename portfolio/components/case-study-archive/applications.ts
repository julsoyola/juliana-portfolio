import { macwipe, googlecleaner } from "@/components/caseStudies";
import type { ArchiveData } from "./types";

const navigation: [string, string][] = [
  ["overview", "Overview"], ["visual-design", "Interface Design"],
  ["design-decisions", "Design Decisions"], ["user-flow", "User Flow"],
  ["selected-screens", "Selected Screens"], ["implementation", "Implementation"],
  ["outcome", "Outcome & Reflection"],
];
const role = { label: "Role", text: "Independent Designer & Developer" };

export const macwipeArchive: ArchiveData = {
  theme: "macwipe", name: "MacWipe", number: "01", sidebarTitle: ["MacWipe"],
  sidebarSummary: "A native macOS utility for exploring local storage, reviewing cleanup candidates, and managing files with greater confidence.",
  metadata: [role, {label: "Type", text: "Personal macOS Application"}, {label: "Technology", text: "Swift, AppKit, WKWebView, JavaScript, HTML, CSS"}],
  links: [{label: "Demo", href: macwipe.artifacts[0].href, text: "macwipe.vercel.app"}, {label: "GitHub", href: macwipe.artifacts[1].href, text: "github.com/julsoyola/macwipe"}],
  navigation,
  hero: {title: "Designing a safer, more understandable Mac cleanup experience", summary: "MacWipe helps people explore local storage and review files before moving selected items to Trash. It combines a familiar desktop interface with safeguards that keep file inspection separate from cleanup.", image: macwipe.image, notice: "The web demo uses sample data and does not access your files."},
  actions: [{label: "Try Web Demo", href: macwipe.artifacts[0].href}, {label: "View Source", href: macwipe.artifacts[1].href}],
  interface: {title: "Interface Design", heading: "Make complex storage information approachable", text: "I designed MacWipe around familiar desktop patterns, concise storage summaries, and focused category views. The retro interface adds personality, while file details and review dialogs keep important information accessible when users need it.", image: macwipe.screenshots[0], colors: [["Background", "#d7a6ba"], ["Panel", "#fff6ec"], ["Ink", "#542b45"], ["Button", "#a44875"], ["Status", "#eaccd7"], ["Menu", "#fff0e0"]]},
  decisions: [
    {title: "Review first", icon: "accessibility", text: "Inspect details and select eligible files before confirmation.", why: "Age and size do not establish whether removal is appropriate.", tradeoff: "An extra review step for a clearer action scope."},
    {title: "Read-only exploration", icon: "folder", text: "Explore storage; clean only approved category candidates.", why: "Discovery does not grant cleanup permission.", tradeoff: "Some visible files cannot be cleaned through MacWipe."},
    {title: "Native control", icon: "computer", text: "Share the dashboard; let Swift validate filesystem actions.", why: "The native host controls actual file operations.", tradeoff: "A bridge between web and native environments."},
  ],
  flow: {id: "user-flow", title: "User Flow", heading: "Inspect, then confirm", text: "File discovery and cleanup permission remain separate throughout the flow.", horizontal: true, steps: [["Open", "Review storage information."], ["Explore", "Inspect categories and details."], ["Select", "Select candidates or mark Keep."], ["Review", "Check selection and consequences."], ["Confirm", "Confirm Trash; review results."]]},
  screens: [
    {...macwipe.image, caption: "01 / Home dashboard · browser demo"},
    {...macwipe.screenshots[0], caption: "02 / Read-only explorer · browser demo"},
    {placeholder: "macwipe-file-details.png", caption: "03 / File details or selection · screenshot pending"},
    {src: "/images/macwipe/review-demo.png", width: 960, height: 764, alt: "Earlier MacWipe demo review dialog listing fictional selected items and a Simulate cleanup button", caption: "04 / Confirmation · earlier simulated web demo"},
  ],
  engineering: {heading: "Native performance with deliberate safeguards", text: "I connected the shared dashboard to native operations while keeping expensive file work and cleanup validation outside the interface.", highlights: [
    {title: "Native macOS integration", icon: "computer", text: "Swift and AppKit provide access to approved local filesystem operations."},
    {title: "Scoped background scanning", icon: "grid", text: "Initial scans focus on Downloads and Caches. Other categories are measured when opened."},
    {title: "Safety and validation", icon: "accessibility", text: "Native code rechecks approved targets before Trash operations. Persistent Keep exclusions prevent unwanted selection."},
    {title: "Efficient interface updates", icon: "code", text: "Cached rows and delegated events avoid rebuilding the table; selection survives sorting."},
  ]},
  outcome: {heading: "Designing powerful tools around user trust", text: "MacWipe is a working native application and browser demo that brings storage exploration, selective cleanup, and explicit confirmation into one experience. The project reinforced the importance of making consequences visible before giving users powerful actions.", reflection: "A safer interface is not necessarily the one with the fewest steps. It's one where users understand what will happen before they commit."},
  decoration: "papers",
};

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
  outcome: {heading: "Efficiency should never obscure consequences", text: "GoogleCleaner is a working personal-use Chrome extension with file discovery, explicit selection, confirmation, background processing, and retry functionality. It demonstrates how a small utility can combine efficient interaction design with predictable state management.", reflection: "The best shortcut is not always fewer clicks. A clear review step can make a complex action easier to understand."},
  decoration: "folders",
};
