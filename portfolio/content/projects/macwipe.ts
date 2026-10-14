import type { Project } from "./types";
export const macwipe = {
  "image": {
    "src": "/images/macwipe/MacWipeWebHomeImSc.png",
    "width": 607,
    "height": 776,
    "alt": "MacWipe website with macOS download, web dashboard demo, and frequently asked questions",
    "caption": "MacWipe website entry point with native download and simulated web dashboard."
  },
  "screenshots": [
    {
      "src": "/images/macwipe/MacWipeDashboardImSc.png",
      "width": 980,
      "height": 800,
      "alt": "MacWipe simulated dashboard with storage summary and downloads and caches review cards",
      "caption": "Browser dashboard with fictional storage data and review entry points."
    }
  ],
  "artifacts": [
    {
      "label": "Try browser demo",
      "href": "https://macwipe.vercel.app/"
    },
    {
      "label": "Source & native setup",
      "href": "https://github.com/julsoyola/macwipe"
    }
  ],
  "validation": "Ask a participant to choose files to keep, select cleanup candidates, and explain what confirmation will do, including the difference between read-only exploration and cleanup.",
  "metrics": "Proposed measures: task completion, mistaken selection rate, and confidence after review.",
  "walkthrough": "MacWipe starts with a storage question: what is taking up space, and what can I remove without losing something important? A large file or old download is a candidate for inspection, not a reason to delete it. I independently designed and built the dashboard, category navigation, file details, selection and review flow, and native Swift integration. The experience starts with an overview, then moves into categories where someone can inspect paths and consequences before confirming selected items. My first decision was to require review rather than offer one-click deletion. That costs an interaction, but gives the action a concrete scope. The native code then checks the approved targets again immediately before moving them to Trash. My second decision was to keep storage exploration read-only. Looking through folders does not authorize cleanup; removal belongs to approved category candidates and respects Keep exclusions. The third decision was to share the HTML and JavaScript dashboard between a Swift application and a browser demo. The native host controls real file operations, while the demo uses examples. I also moved filesystem work to a background queue, scoped initial scans, and bounded exploration while retaining partial results. These are implemented mechanisms, rather than measured speed improvements. The project delivers a working utility and demonstration. Next, I would observe whether people can identify files to keep and correctly explain the confirmation step. The lesson is to separate what a system can do from what someone should authorize without review."
};

import type { ArchiveData } from "@/components/case-study-archive/types";
import { navigation, role } from "./navigation";

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
  {
    "src": "/images/macwipe/MacWipeDashboardImSc.png",
    "width": 980,
    "height": 800,
    "alt": "MacWipe simulated storage dashboard",
    "caption": "01 / Home dashboard · browser demo"
  },
  {
    "src": "/images/macwipe/MacWipeCachesImSc.png",
    "width": 980,
    "height": 800,
    "alt": "Cache candidates with sizes, Details controls, and selection checkboxes",
    "caption": "02 / Cache candidates · browser demo"
  },
  {
    "src": "/images/macwipe/MacWipeDetailsImSc.png",
    "width": 980,
    "height": 800,
    "alt": "File details dialog explaining a cache candidate and Keep exclusion",
    "caption": "03 / File details and Keep · browser demo"
  },
  {
    "src": "/images/macwipe/MacWipeReviewImSc.png",
    "width": 980,
    "height": 800,
    "alt": "Review dialog listing two selected caches before simulated cleanup",
    "caption": "04 / Selection review · browser demo"
  }
],
  engineering: {heading: "Native performance with deliberate safeguards", text: "I connected the shared dashboard to native operations while keeping expensive file work and cleanup validation outside the interface.", highlights: [
    {title: "Native macOS integration", icon: "computer", text: "Swift and AppKit provide access to approved local filesystem operations."},
    {title: "Scoped background scanning", icon: "grid", text: "Initial scans focus on Downloads and Caches. Other categories are measured when opened."},
    {title: "Safety and validation", icon: "accessibility", text: "Native code rechecks approved targets before Trash operations. Persistent Keep exclusions prevent unwanted selection."},
    {title: "Efficient interface updates", icon: "code", text: "Cached rows and delegated events avoid rebuilding the table; selection survives sorting."},
  ]},
  outcome: {heading: "Designing powerful tools around user trust", text: "MacWipe is a working native application and browser demo that brings storage exploration, selective cleanup, and explicit confirmation into one experience. The project reinforced the importance of making consequences visible before giving users powerful actions.", reflection: "Building MacWipe taught me to separate finding files from deciding what is safe to remove. File details, Keep exclusions, and a final review make that distinction visible, while native validation checks the action behind the interface."},
  decoration: "papers",
};


export const macwipeCard: Project = {
    id: "macwipe",
    liveLabel: "Live Site",
    title: "MacWipe", caseStudyUrl: "/work/macwipe",
    description: "Help Mac users inspect storage and review cleanup candidates before moving selected files to Trash.",
    skills: ["Interaction design", "Risk communication", "Prototyping"],
    stack: ["Swift", "HTML", "CSS", "JavaScript"], tone: "bg-[var(--sky)]",
    liveUrl: "https://macwipe.vercel.app/", githubUrl: "https://github.com/julsoyola/macwipe",
  };
