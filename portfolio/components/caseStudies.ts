export type StudyImage = { src: string; width: number; height: number; alt: string; caption: string };
export type StudyDecision = {
  title: string; challenge: string; solution: string; why: string; tradeoff: string;
};
export type CaseStudyData = {
  name: string; title: string; summary: string;
  theme: "macwipe" | "googlecleaner" | "portfolio";
  platform: string; technology: string; status: string;
  image: StudyImage; screenshots: StudyImage[];
  artifacts: { label: string; href: string }[];
  problem: string; audience: string; role: string; solution: string;
  flow: [string, string][];
  decisions: [StudyDecision, StudyDecision, StudyDecision];
  engineering: { title: string; text: string }[];
  outcome: string; reflection: string; evidence: string; limitations: string[];
  validation: string; metrics: string; walkthrough: string;
  next: { name: string; href: string };
};

export const macwipe: CaseStudyData = {
  "name": "MacWipe",
  "theme": "macwipe",
  "platform": "Native macOS app + browser demo",
  "technology": "Swift / AppKit / WKWebView / HTML / CSS / JavaScript",
  "status": "Working personal project; ad hoc signed download",
  "image": {
    "src": "/images/macwipe/home-demo.png",
    "width": 2458,
    "height": 1654,
    "alt": "MacWipe demo Home showing disk capacity, category review cards, and system indicators",
    "caption": "Browser-demo Home with fictional capacity, file sizes, and system readings. Review cards open categories without selecting files."
  },
  "screenshots": [
    {
      "src": "/images/macwipe/explorer-demo.png",
      "width": 2458,
      "height": 1654,
      "alt": "MacWipe read-only storage explorer with folder rows, sizes, and navigation",
      "caption": "Read-only storage explorer in the browser demo. Folder navigation, size sorting, and Details support inspection."
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
  "flow": [
    [
      "Home",
      "Review capacity, scanned summaries, and available system indicators."
    ],
    [
      "Category",
      "Open Caches, Downloads, Apps, Startup, Logs, or Browser data. Some views are read-only."
    ],
    [
      "Details & selection",
      "Inspect paths and consequences; select eligible items or mark them Keep."
    ],
    [
      "Review",
      "Check the deduplicated selection and confirm Move to Trash, or cancel."
    ],
    [
      "Result",
      "Native code revalidates targets, moves approved items to Trash, and reports failures. The browser only simulates cleanup."
    ]
  ],
  "next": {
    "name": "GoogleCleaner",
    "href": "/work/googlecleaner"
  },
  "validation": "Ask a participant to choose files to keep, select cleanup candidates, and explain what confirmation will do, including the difference between read-only exploration and cleanup.",
  "metrics": "Proposed measures: task completion, mistaken selection rate, and confidence after review.",
  "title": "MacWipe — Designing a Safer, More Efficient Mac Cleanup Experience",
  "summary": "A native macOS utility that makes storage easier to explore, cleanup decisions easier to understand, and potentially destructive actions more deliberate.",
  "problem": "Mac users can see how much storage is occupied but often lack enough context to decide what should be removed. Old files, caches, and application data have different risks. A useful cleanup tool must make storage discoverable without treating every visible file as disposable.",
  "role": "I independently designed and developed the dashboard, file exploration, category navigation, selection flow, review interface, and native Swift integration.",
  "outcome": "Built a working native macOS utility and browser demo featuring storage exploration, selective cleanup, persistent exclusions, confirmation, and validation safeguards.",
  "reflection": "The strongest lesson was to separate what a system can technically do from what a user should be allowed to do without review.",
  "decisions": [
    {
      "title": "Informed Cleanup Instead of One-Click Deletion",
      "challenge": "File age, size, or location does not establish whether removal is appropriate.",
      "solution": "Organized candidates into reviewable categories, exposed paths and removal consequences, and required explicit selection and confirmation.",
      "why": "Users can inspect what an action targets before authorizing it. Native code separately validates approved candidates immediately before removal.",
      "tradeoff": "An additional review interaction instead of immediate automated cleanup. Selection remains intact when review is canceled."
    },
    {
      "title": "Read-Only Exploration With Controlled Cleanup",
      "challenge": "Users need visibility into storage without accidental authorization to modify everything they discover.",
      "solution": "Made storage exploration read-only and separated it from cleanup-eligible categories. Used approved paths, identity checks, and Keep exclusions.",
      "why": "Discovery and removal are distinct operations. Users can explore more broadly than the app permits them to clean.",
      "tradeoff": "Some visible files cannot be removed through MacWipe, but the smaller action surface reduces unnecessary risk."
    },
    {
      "title": "One Consistent Interface, Native-Level Control",
      "challenge": "Delivering an interactive dashboard alongside real filesystem operations requires different responsibilities.",
      "solution": "Built a shared HTML/CSS/JavaScript dashboard rendered through WKWebView in a native Swift application. Native code manages validated filesystem operations; the browser demo uses fictional data.",
      "why": "The UI can be reused across environments while the native host controls actual cleanup actions.",
      "tradeoff": "Additional bridge and environment-handling complexity in exchange for shared presentation and controlled native behavior."
    }
  ],
  "audience": "Mac users, including developers, evaluating storage and cleanup candidates.",
  "solution": "I built a flow from storage overview to category inspection, selection, review, and confirmed movement to Trash. Keep exclusions protect retained files, while a separate read-only explorer supports storage discovery.",
  "engineering": [
    {
      "title": "Responsive background work",
      "text": "A serial background queue handles scanning and cleanup; UI replies return to the main thread. This lets navigation and selection remain available while filesystem work runs."
    },
    {
      "title": "Scoped scanning",
      "text": "Startup scans Downloads and Caches. Other categories are measured when opened, and completed results remain in memory, avoiding unnecessary upfront processing."
    },
    {
      "title": "Bounded exploration",
      "text": "Explorer requests share a 100,000-entry limit and 10-second traversal budget. Partial results and skipped paths stay visible; blocking filesystem calls can exceed the budget before returning."
    },
    {
      "title": "Efficient updates",
      "text": "Cached rows and delegated events avoid rebuilding the table for checkbox changes. Selection survives sorting, and CPU sampling runs only while Home and the native window are active and visible."
    }
  ],
  "limitations": [
    "Storage exploration, Startup, and the sidebar Logs view are read-only. Protected files and cloud placeholders can leave inventories incomplete.",
    "Logical file sizes are not guaranteed recovered space. Moving files to Trash still occupies storage; caches can return and cleanup does not guarantee a faster Mac.",
    "The browser demo uses fictional data. The download is ad hoc signed; notarization has not been verified."
  ],
  "evidence": "Implementation checked against the Swift host, shared dashboard, and project documentation. No measured cleanup or responsiveness benchmark is available.",
  "walkthrough": "MacWipe starts with a storage question: what is taking up space, and what can I remove without losing something important? A large file or old download is a candidate for inspection, not a reason to delete it. I independently designed and built the dashboard, category navigation, file details, selection and review flow, and native Swift integration. The experience starts with an overview, then moves into categories where someone can inspect paths and consequences before confirming selected items. My first decision was to require review rather than offer one-click deletion. That costs an interaction, but gives the action a concrete scope. The native code then checks the approved targets again immediately before moving them to Trash. My second decision was to keep storage exploration read-only. Looking through folders does not authorize cleanup; removal belongs to approved category candidates and respects Keep exclusions. The third decision was to share the HTML and JavaScript dashboard between a Swift application and a browser demo. The native host controls real file operations, while the demo uses examples. I also moved filesystem work to a background queue, scoped initial scans, and bounded exploration while retaining partial results. These are implemented mechanisms, rather than measured speed improvements. The project delivers a working utility and demonstration. Next, I would observe whether people can identify files to keep and correctly explain the confirmation step. The lesson is to separate what a system can do from what someone should authorize without review."
};

export const googlecleaner: CaseStudyData = {
  "name": "GoogleCleaner",
  "theme": "googlecleaner",
  "platform": "Personal-use Chrome extension / Manifest V3",
  "technology": "Plain JavaScript / Chrome Identity / Google Drive API",
  "status": "Personal-use extension; unpacked setup documented",
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
  "flow": [
    [
      "Connect account",
      "Chrome Identity supplies OAuth access; the popup displays the connected account."
    ],
    [
      "Browse & filter",
      "Search, combine type and date filters, and sort the owned, non-trashed inventory."
    ],
    [
      "Select",
      "Choose items explicitly. Changing filters preserves selection and shows hidden selections."
    ],
    [
      "Review & confirm",
      "Review all selected items, deselect mistakes, read folder consequences, then confirm Move to Trash."
    ],
    [
      "Progress & result",
      "The background worker records item results. Reopen the popup to inspect progress, retry failures, or reconnect and resume."
    ]
  ],
  "next": {
    "name": "Developer Portfolio",
    "href": "/work/portfolio"
  },
  "validation": "Ask participants to find a target file, predict the complete selection including hidden items and folder contents, and recover from an API error. Check popup closure and worker resumption with disposable files separately.",
  "metrics": "Proposed measures: time to find a file, selection accuracy, and successful error recovery.",
  "title": "GoogleCleaner — Making Bulk File Management Clear and Efficient",
  "summary": "A Chrome extension that combines file discovery, explicit selection, and resilient background processing to make Google Drive cleanup easier to manage.",
  "problem": "Large file collections are difficult to navigate, and filtering can make bulk operations ambiguous when selected items disappear from view.",
  "role": "I designed and implemented the popup experience, discovery controls, selection state, review flow, confirmation, and background processing.",
  "outcome": "Implemented a personal-use Manifest V3 extension supporting discovery, selective movement to Trash, progress tracking, and retry/recovery flows.",
  "reflection": "Efficient experiences minimize unnecessary user effort without hiding the scope or consequences of actions.",
  "decisions": [
    {
      "title": "Find Files Without Losing Track of Selections",
      "challenge": "Users need to narrow large file lists, but filtering can hide previously selected files.",
      "solution": "Implemented filename search, file-type/date filters, sorting, ID-based selection, and hidden-selection notices. Select all matching uses the current filtered inventory.",
      "why": "Users can refine the visible inventory without silently changing their selected set. The review screen displays the complete selection.",
      "tradeoff": "Additional state management in exchange for predictable filtering and selection behavior."
    },
    {
      "title": "Optimize Bulk Actions for Accuracy",
      "challenge": "A single mistaken selection can affect multiple files or an entire folder.",
      "solution": "Separated discovery, selection, review, and confirmation. Displayed every selected item, including hidden selections, alongside account context, counts, and folder consequences. Review also allows deselection before dispatch.",
      "why": "Users can verify the exact intended scope before the extension dispatches a modification.",
      "tradeoff": "One more interaction, but greater transparency before a consequential bulk operation."
    },
    {
      "title": "Reliable Processing Beyond the Popup",
      "challenge": "Chrome extension popups close frequently and Manifest V3 service workers can be suspended.",
      "solution": "Moved bulk processing into a background worker with local checkpoints, alarms, progress reporting, bounded retries, and recovery states.",
      "why": "Cleanup state is independent of the popup's visibility. Users can reopen the interface and review progress or failures.",
      "tradeoff": "Additional lifecycle and failure-state complexity rather than a simpler popup-only implementation."
    }
  ],
  "audience": "Google Drive users reviewing their own accumulated files and folders.",
  "solution": "I connected filename search, type/date filters, and sorting to ID-based selection and full-selection review. Confirmation passes selected IDs to a background job, so progress and recovery stay available after the popup closes.",
  "engineering": [
    {
      "title": "Paginated retrieval",
      "text": "The popup requests up to 1,000 owned, non-trashed items per Drive API page and follows page tokens to assemble the inventory."
    },
    {
      "title": "Local discovery controls",
      "text": "Shared JavaScript logic searches filenames, filters types and dates, and sorts the retrieved inventory. Filtering runs locally, not as server-side search."
    },
    {
      "title": "Stable selection identifiers",
      "text": "A Set of file IDs tracks selection independently of the visible rows. Filtering can hide an item without changing whether it is selected."
    },
    {
      "title": "Recoverable job state",
      "text": "Confirmation snapshots selected IDs and account context. The worker checkpoints each result in Chrome local storage, with alarms to wake unfinished work."
    },
    {
      "title": "Bounded retries",
      "text": "Transient HTTP failures receive exponential backoff with jitter, up to five attempts. Item-level results preserve successes and identify candidates for retry."
    },
    {
      "title": "Account-aware resumption",
      "text": "The worker verifies the account before continuing. Disconnect pauses further dispatch, and expired authorization requires reconnection; an in-flight request may still finish."
    }
  ],
  "limitations": [
    "The popup loads every inventory page before local filtering. Larger collections may benefit from incremental loading or server-side querying; unlimited-library scalability is not established.",
    "The documented build requires OAuth configuration and unpacked installation. Its full Drive scope grants broad permission; selected IDs constrain actions, not access.",
    "The extension moves selected items to Trash and never empties it. Reported sizes can be incomplete and exclude folder contents. The sample demo does not exercise real OAuth, Drive mutations, or worker persistence."
  ],
  "evidence": "Behavior verified in the local popup, shared logic, and worker, including uncommitted recovery changes. No comparative task-time or selection-error results are documented.",
  "walkthrough": "GoogleCleaner is an interaction-design project about finding the right files and understanding the scope of a bulk action. Large Drive inventories are difficult to scan, and filtering introduces a specific risk: a selected item can disappear from view without disappearing from the selection. I designed and implemented the popup, discovery controls, selection review, confirmation, and background processing. The flow connects an account, lists its owned files, and offers filename search, type and date filters, and sorting. Selection is stored by file ID, so changing a filter does not silently change the selected set. A hidden-selection notice explains the difference, and Review shows the complete selection. My second decision was to put account context, item counts, and folder consequences before confirmation. That adds a review interaction, but makes the pending change explicit. My third decision was to move processing beyond the popup. Chrome popups close easily, and workers can suspend, so confirmed jobs use local checkpoints, alarms, bounded retries, and account checks before resumption. This gives progress and failures a place in the experience rather than treating them as an afterthought. The current tool is a personal-use extension that moves selected items to Trash. Filtering is local after paginated retrieval, so larger inventories are a future scaling question. I would next test selection accuracy, hidden-item understanding, and recovery from an API failure. The lesson is to reduce unnecessary effort while keeping the scope and consequences visible."
};

export const portfolio: CaseStudyData = {
  "name": "Developer Portfolio",
  "theme": "portfolio",
  "platform": "Responsive web / Vercel deployment",
  "technology": "Next.js / React / TypeScript / Tailwind CSS / Framer Motion",
  "status": "Deployed on Vercel",
  "image": {
    "src": "/images/portfolio/previous-home.png",
    "width": 1873,
    "height": 1322,
    "alt": "Earlier portfolio homepage showing Juliana’s engineering headline, portrait, navigation, and resume link",
    "caption": "Earlier deployed homepage from the repository. The current portfolio retains this typographic and color foundation."
  },
  "screenshots": [
    {
      "src": "/images/portfolio/previous-sections.png",
      "width": 1879,
      "height": 1302,
      "alt": "Earlier portfolio sections showing engineering experience and project content",
      "caption": "Earlier portfolio sections showing engineering experience and project content, before the dedicated case-study structure."
    }
  ],
  "artifacts": [
    {
      "label": "Explore current homepage",
      "href": "/#work"
    },
    {
      "label": "Portfolio source",
      "href": "https://github.com/julsoyola/juliana-portfolio"
    }
  ],
  "flow": [
    [
      "Arrive & understand",
      "Read the design-focused introduction, Amazon background, and computer science / psychology education."
    ],
    [
      "Review featured work",
      "Scan project problems, skills, technologies, and case-study or artifact links."
    ],
    [
      "Open a case study",
      "Read the challenge, contribution, three decisions, and engineering approach."
    ],
    [
      "Inspect evidence",
      "Open screenshots, demonstrations, and source links; review results and current boundaries."
    ],
    [
      "Continue or connect",
      "Open the next project, return to engineering history, or locate contact and tailored resumes."
    ]
  ],
  "next": {
    "name": "MacWipe",
    "href": "/work/macwipe"
  },
  "validation": "Ask volunteers unfamiliar with the site to find my role, a MacWipe trade-off, a working demo, my engineering history, and contact information.",
  "metrics": "Proposed measures: time to find a case study, task success, and navigation clarity.",
  "title": "Developer Portfolio — Designing a Clearer Path Through My Work",
  "summary": "A responsive portfolio that connects my engineering experience with the design decisions, implementation evidence, and outcomes behind independent products.",
  "problem": "Recruiters and hiring teams need to evaluate complex work quickly. Technical stacks alone do not communicate ownership, reasoning, or product value.",
  "role": "I designed and built the portfolio using Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.",
  "outcome": "A deployed portfolio combining professional experience, project demonstrations, and detailed design case studies.",
  "reflection": "Strong portfolio design prioritizes clear evidence and navigation over the quantity of content displayed.",
  "decisions": [
    {
      "title": "Prioritize Relevant Work",
      "challenge": "A long project list makes it difficult to recognize the strongest examples quickly.",
      "solution": "Feature MacWipe, GoogleCleaner, and the portfolio case study with direct links to deeper project explanations.",
      "why": "Each card connects a problem statement to my contribution, design decisions, and working artifacts through a dedicated case study.",
      "tradeoff": "Secondary projects receive less prominent placement in the collection but remain accessible from the same homepage."
    },
    {
      "title": "Progressive Disclosure Instead of Information Overload",
      "challenge": "A detailed engineering portfolio can overwhelm visitors who are scanning quickly.",
      "solution": "Lead with concise project summaries, then provide dedicated case studies with expandable technical explanations. Six shared sections clearly connect challenges, ownership, decisions, flow, implementation, and results.",
      "why": "Users can choose their preferred reading depth without losing access to implementation evidence.",
      "tradeoff": "Some technical depth requires an additional navigation or disclosure interaction."
    },
    {
      "title": "Visual Personality Without Sacrificing Readability",
      "challenge": "Distinctive visuals and animation can compete with clarity, responsiveness, and accessibility.",
      "solution": "Reuse a consistent typographic system, restrained interactions, responsive layouts, semantic sections, visible focus indicators, and reduced-motion accommodations. Shared components keep recurring headings, links, and project navigation consistent across case studies.",
      "why": "The visual system reinforces identity while keeping content and navigation understandable.",
      "tradeoff": "Restrained effects prioritize accessibility and comprehension over elaborate presentation."
    }
  ],
  "audience": "Recruiters, hiring managers, designers, and engineers evaluating my work.",
  "solution": "I organized the homepage around concise project summaries and direct case-study links. Professional experience and tailored resumes remain visible, while reusable sections connect each project’s challenge to decisions, screenshots, and working artifacts.",
  "engineering": [
    {
      "title": "Reusable React components",
      "text": "Shared components render the hero, project collection, experience, skills, resumes, and contact content, keeping recurring presentation consistent."
    },
    {
      "title": "Next.js routing",
      "text": "File-based routes give each case study a direct URL, page metadata, and navigation back to featured work."
    },
    {
      "title": "Static case-study content",
      "text": "Typed project data supplies the editorial content and screenshot references without a runtime CMS or database."
    },
    {
      "title": "Responsive layouts",
      "text": "CSS grids adapt content to available width; the hero retains text and portrait columns, and the mobile menu exposes its expanded state."
    },
    {
      "title": "Reduced-motion behavior",
      "text": "Reveal, hero parallax, resume motion, and skill-card hover accommodations respect reduced-motion preferences while keeping content visible."
    },
    {
      "title": "Semantic navigation",
      "text": "Named navigation, section headings, descriptive links, and visible focus indicators expose structure to keyboard and assistive-technology users."
    },
    {
      "title": "Reusable case-study structure",
      "text": "One renderer provides six shared sections, three decision cards, screenshot captions, native disclosures, and next-project navigation."
    }
  ],
  "limitations": [
    "Screenshots document an earlier portfolio version. They show the visual foundation, rather than the current editorial revision.",
    "Accessibility accommodations are targeted; broader assistive-technology and device evaluation remains future work."
  ],
  "evidence": "Routes and components verified in the repository; deployment is documented on Vercel. No recruiter-comprehension results, conversion gains, or Lighthouse scores are claimed.",
  "walkthrough": "My portfolio is an information-design project as well as a personal website. I wanted hiring teams to understand both my engineering background and the decisions behind the products I built. A technology list alone does not communicate ownership, a user problem, or the reason an interaction exists. I designed and built the site with Next.js, React, TypeScript, Tailwind, and Framer Motion. My first decision was to prioritize MacWipe, GoogleCleaner, and the portfolio case study. Each project connects a short problem statement to a deeper explanation and a working artifact. Secondary engineering work stays available in the same collection. My second decision was progressive disclosure. The homepage supports scanning, while six shared case-study sections explain the challenge, my contribution, decisions, flow, engineering, and results. Detailed implementation notes and a spoken walkthrough sit in disclosures so visitors can choose their reading depth. My third decision was to preserve visual personality while keeping the interface readable. I reused serif headings, the cream and green palette, responsive layouts, semantic navigation, focus indicators, and reduced-motion accommodations. Reusable React components and static typed content let me apply the same structure consistently across projects. The portfolio is deployed, but that does not establish recruiter comprehension or conversion gains. I would test whether someone unfamiliar with my work can find my role, a MacWipe trade-off, a demo, my engineering history, and contact details. The lesson is to prioritize clear evidence and navigation over the amount of content on the page."
};
