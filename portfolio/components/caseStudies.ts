export type StudyImage = { src: string; width: number; height: number; alt: string; caption: string };
export type StudyDecision = {
  title: string; problem: string; alternative: string;
  design: string; reasoning: string; tradeoff: string;
};
export type CaseStudyData = {
  name: string; title: string; summary: string;
  theme: "macwipe" | "googlecleaner" | "portfolio";
  platform: string; technology: string; status: string;
  tradeoff: string; image: StudyImage; screenshots: StudyImage[];
  artifacts: { label: string; href: string }[];
  problem: string; audience: string; role: string; objective: string;
  principles: [string, string][]; flow: [string, string][];
  decisions: [StudyDecision, StudyDecision, StudyDecision];
  constraints: string[]; verified: string[]; measurement: string; limitations: string[];
  validation: string; metrics: string; reflection: string;
  walkthrough: string; next: { name: string; href: string };
};

export const macwipe: CaseStudyData = {
  name: "MacWipe",
  title: "MacWipe — Making macOS Storage Cleanup Safer and More Understandable",
  summary: "Cleaning up a Mac requires distinguishing disposable files from important data. MacWipe supports storage exploration and selective cleanup without treating deletion as an automatic optimization.",
  theme: "macwipe", platform: "Native macOS app + browser demo",
  technology: "Swift / AppKit / WKWebView / HTML / CSS / JavaScript",
  status: "Working personal project; ad hoc signed download",
  tradeoff: "Deliberate review adds friction before cleanup, giving people a chance to inspect consequences instead of optimizing for one click.",
  image: { src: "/images/macwipe/home-demo.png", width: 2458, height: 1654, alt: "MacWipe demo Home showing disk capacity, category review cards, and system indicators", caption: "Existing browser-demo capture. Capacity, file sizes, and system readings are fictional examples; review cards open categories without selecting files." },
  screenshots: [{ src: "/images/macwipe/explorer-demo.png", width: 2458, height: 1654, alt: "MacWipe read-only storage explorer with folder rows, sizes, and navigation", caption: "Existing browser-demo explorer capture. Folder navigation and Details support inspection; this view never authorizes cleanup." }],
  artifacts: [{ label: "Try browser demo", href: "https://macwipe.vercel.app/" }, { label: "Source & native setup", href: "https://github.com/julsoyola/macwipe" }],
  audience: "Intended audience: Mac users, including developers, evaluating storage and cleanup candidates. This is a design assumption, not a researched demographic.",
  problem: "A storage total does not tell someone what they can remove. Old downloads may still matter, unknown caches need inspection, and application support folders may contain personal data. The task is to understand what occupies storage and decide what to keep before making a consequential change.",
  role: "I independently designed and implemented the dashboard, category lists, file details, selection and review flow, and the Swift bridge for native operations.",
  objective: "Help someone inspect a candidate, explain its removal consequences, and confirm only the items they intend to move to Trash. Task success still needs usability validation.",
  principles: [
    ["Inspect before acting", "Home leads to category rows and Details; opening a recommendation does not select files."],
    ["Make risk visible", "Review shows targets and consequences. Logical sizes are kept separate from available disk capacity."],
    ["Preserve control", "Explicit selection, Cancel, and persistent native Keep exclusions let people decide what stays."],
  ],
  flow: [
    ["Home", "Review capacity, scanned summaries, and available system indicators."],
    ["Category", "Open Caches, Downloads, Apps, Startup, Logs, or Browser data. Some views are read-only."],
    ["Details & selection", "Inspect paths and consequences; select eligible items or mark them Keep."],
    ["Review", "Check the deduplicated selection and confirm Move to Trash, or cancel."],
    ["Result", "Native code revalidates targets, moves approved items to Trash, and reports failures. The browser only simulates cleanup."],
  ],
  decisions: [
    { title: "Review before cleanup", problem: "A candidate’s age or location does not prove it is disposable.", alternative: "A one-click action would shorten the path but obscure individual consequences.", design: "Category lists, Details, explicit selection, and confirmation before cleanup.", reasoning: "People can compare the concrete targets with their intentions before changing files.", tradeoff: "More interaction and reading; deliberate control takes priority over speed." },
    { title: "Observation is separate from authorization", problem: "Seeing a file in storage exploration could imply that it is safe to remove.", alternative: "Allow removal anywhere a file appears, at the cost of a broader action surface.", design: "The explorer stays read-only. Cleanup accepts approved category candidates and revalidates native targets.", reasoning: "Browsing storage should not implicitly authorize removal.", tradeoff: "Some visible files cannot be cleaned through this app; visibility exceeds removal capability." },
    { title: "A shared interface with native boundaries", problem: "A rich dashboard needs trustworthy access to local files and an honest web demonstration.", alternative: "Separate interfaces would duplicate presentation work; browser-only code cannot provide the native filesystem controls.", design: "Shared HTML/CSS/JS in WKWebView, bridged to validated Swift operations; fictional browser data.", reasoning: "The visual experience stays consistent while native code governs actual file operations.", tradeoff: "Two environments require clear labels. The web demo cannot verify native cleanup." },
  ],
  constraints: ["Protected files and cloud placeholders can be inaccessible. Skipped paths and partial explorer results remain visible rather than implying a complete scan.", "Explorer traversal has entry and time budgets. Those limits shape the partial-result state; they do not promise a maximum scan duration.", "The retro desktop direction is intended to feel approachable. It is not evidence of better usability; paths, warnings, and selection states must remain readable.", "Ad hoc signing and unverified notarization create download and launch friction."],
  verified: ["Native AppKit/Swift application embeds the shared dashboard in WKWebView; the browser uses example data.", "Native Keep exclusions persist in preferences. Approved targets are checked again before FileManager moves them to Trash.", "Storage exploration, Startup, and the sidebar Logs view remain read-only. Trash is never emptied by cleanup."],
  measurement: "No cleanup usability study, reclaimed-space measurement, or responsiveness benchmark is documented.",
  limitations: ["Logical inventory sizes do not equal guaranteed recovered space. Moving files to Trash does not immediately free their storage or guarantee a faster Mac.", "Permissions and scan budgets can leave incomplete results. The browser never scans or deletes actual files.", "Source and documentation support these behavior descriptions; native cleanup and distribution were not exercised for this portfolio update."],
  validation: "Proposed moderated test: ask a participant to identify files they would keep, select cleanup candidates, and explain what happens after confirmation. Check whether they distinguish read-only exploration from cleanup and moving to Trash from reclaiming space.",
  metrics: "Proposed measures: task completion, mistaken selection rate, and confidence after review.",
  reflection: "The design lesson is that safety belongs in the interaction: inspection, approval, and removal are separate responsibilities. A practical next improvement is to test whether the review copy makes the distinction between logical size and freed storage clear before changing it.",
  walkthrough: "MacWipe started with a question: how can someone understand what is using space on their Mac without feeling pressured to delete something important? The underlying technical operations are powerful, but that power can create uncertainty for users. I designed MacWipe around three principles: inspect first, make consequences visible, and give people control. The experience starts with a storage overview, then lets users explore categories and review individual items before taking action. A key decision was not to make every visible file removable. The storage explorer remains read-only, and cleanup operates through specifically approved candidates. That creates more friction than a one-click cleaner, but it also makes the distinction between browsing and changing files much clearer. Technically, I used a shared JavaScript dashboard inside a native Swift application. The interface handles presentation, while native operations validate the actual filesystem actions. That architecture allows a browser demo without pretending that the demo has access to someone's computer. MacWipe is a working personal project, not a product with verified large-scale user adoption. The next step I'd prioritize is usability testing to see whether people understand the review flow, risks, and difference between moving something to Trash and reclaiming storage. For me, the central design lesson is that safety is part of usability, not something added after the interaction is designed. I would ask participants to explain their choices as they navigate, then compare what they expect with the implemented behavior. That would give me concrete evidence for deciding which labels or entry points need revision.",
  next: { name: "GoogleCleaner", href: "/work/googlecleaner" },
};

export const googlecleaner: CaseStudyData = {
  name: "GoogleCleaner",
  title: "GoogleCleaner — Bringing Clarity and Control to Google Drive Cleanup",
  summary: "A cluttered Drive makes selecting the right files difficult, especially when actions affect multiple items. Focused discovery tools lead to deliberate review before moving selected files to Trash.",
  theme: "googlecleaner", platform: "Personal-use Chrome extension / Manifest V3",
  technology: "Plain JavaScript / Chrome Identity / Google Drive API",
  status: "Unpacked extension; not published on Chrome Web Store",
  tradeoff: "Review costs an extra interaction, but exposes the full selection—including hidden items and folder consequences—before any Drive change.",
  image: { src: "/images/googlecleaner-review.png", width: 798, height: 954, alt: "GoogleCleaner file list with search, type and date filters, sorting, selection count, and Review button", caption: "Existing extension capture before review. Filters narrow the visible list; the selection count and Review control keep the pending action visible." },
  screenshots: [{ src: "/images/googlecleaner/googlecleaner-preview.png", width: 804, height: 1128, alt: "GoogleCleaner connect screen with Connect Google Drive button", caption: "Existing project capture before sign-in. Connection establishes account context; the sample demo requests no account access." }],
  artifacts: [{ label: "Try sample demo", href: "#demo" }, { label: "Source & unpacked setup", href: "https://github.com/julsoyola/googleCleaner#readme" }],
  audience: "Intended audience: Google Drive users managing their own accumulated files and folders. These are intended users, not research participants. This is an independent personal project, with no claimed Google affiliation.",
  problem: "Filenames and modification dates do not establish whether files are still needed. In bulk cleanup, filters can hide selected items and folders can affect more than their visible row. People need to find relevant files and understand the exact scope before changing their Drive.",
  role: "I independently designed and implemented the popup, discovery controls, selection review and confirmation, and background job processing with progress and retry.",
  objective: "Help someone find a target, accurately predict the selected scope, and understand the result even if the popup closes. These are intended task outcomes, not measured improvements.",
  principles: [
    ["Find relevant files", "Combine filename search, file-type and modified-date filters, and sorting before selection."],
    ["Show selected scope", "Selection count, a hidden-selection notice, and full review keep filtered-out choices visible."],
    ["Make bulk action understandable", "Confirmation names the account and count, warns about folders, and leads to item-level results and retry."],
  ],
  flow: [
    ["Connect account", "Chrome Identity supplies OAuth access; the popup displays the connected account."],
    ["Browse & filter", "Search, combine type and date filters, and sort the owned, non-trashed inventory."],
    ["Select", "Choose items explicitly. Changing filters preserves selection and shows hidden selections."],
    ["Review & confirm", "Review all selected items, deselect mistakes, read folder consequences, then confirm Move to Trash."],
    ["Progress & result", "The background worker records item results. Reopen the popup to inspect progress, retry failures, or reconnect and resume."],
  ],
  decisions: [
    { title: "Discovery before selection", problem: "An unorganized inventory makes locating a specific file difficult.", alternative: "Show every file without discovery controls, keeping the popup simpler but requiring more scanning.", design: "Search, combined type/date filters, and sorting narrow the visible options.", reasoning: "People can reduce the list to relevant candidates before choosing an action.", tradeoff: "Filters add state and can hide existing selections. A notice and full-selection review address that ambiguity; no cognitive-load reduction has been measured." },
    { title: "Explicit selection and full review", problem: "Filtered lists and folders make a bulk action’s scope easy to misunderstand.", alternative: "Immediately trash matching files, reducing clicks but removing the review boundary.", design: "Select by ID, review every selected item, and confirm the account and count with a folder warning.", reasoning: "The interface creates a deliberate boundary between finding files and changing them.", tradeoff: "Additional interaction and a longer review list. Trashing a folder affects its contents, so a row alone does not describe the full consequence." },
    { title: "Processing beyond the popup", problem: "Chrome popups close easily; a job should not depend on keeping the window open.", alternative: "Run cleanup entirely in the popup, coupling the job to a transient interface.", design: "A background worker uses local checkpoints and alarms, with bounded retries and results recovered on reopening.", reasoning: "The popup presents progress while extension mechanisms retain job state independently.", tradeoff: "Service-worker suspension, account changes, and API failures require pause and recovery states. Continuity still needs real-environment testing." },
  ],
  constraints: ["Compact popup dimensions favor short summaries and separate review screens rather than a large dashboard.", "Manifest V3 workers can suspend. Local storage and alarms support resumption instead of relying on a permanently running worker.", "The manifest requests the broad Drive OAuth scope, not access limited to extension-created files. Explicit selection limits the action, not the permission.", "Network and authorization failures require retry or reconnection. Setup requires an unpacked extension and configured OAuth client; no external product server is required."],
  verified: ["The source implements Chrome Identity authentication, Drive API listing, search/filter/sort, explicit selection, full review, and confirmation.", "Confirmed jobs snapshot selected IDs. The worker checkpoints item results in chrome.storage.local and uses chrome.alarms to resume work.", "Selected items move to Drive Trash. The extension never permanently deletes files or empties Trash."],
  measurement: "No comparative file-finding times, selection-error measurements, or recovery-task results are documented.",
  limitations: ["No adoption, comparative task time, or security audit is documented. Broad Drive permissions remain a trust concern.", "The popup fetches the full paginated inventory before local filtering. Missing size metadata is counted separately, not treated as zero.", "The fictional demo cannot validate OAuth, real Drive changes, worker suspension, or persistent job recovery. Moving items to Trash does not promise recovered storage."],
  validation: "Proposed task test: find a target file, predict the full selection including hidden items and folder contents, and recognize an API error without losing track of the job. Real disposable-file checks should evaluate popup closure and worker recovery separately.",
  metrics: "Proposed measures: time to find a file, selection accuracy, and successful error recovery.",
  reflection: "The design lesson is to expose consequences before optimizing click count. The next improvement is to test whether the hidden-selection notice and folder warning let people predict the action accurately before revising either interaction.",
  walkthrough: "GoogleCleaner addresses a common problem with file-management experiences: finding and acting on the right items without making accidental changes. I approached it as an interaction-design challenge, not simply a way to automate Google Drive. The extension has three key stages: discovery, selection, and review. Search and filtering help narrow what users are looking at, while explicit selection and a confirmation step separate finding files from changing them. One trade-off was whether to optimize purely for the fewest possible clicks. I chose a review step because the cost of moving the wrong folder is more important than saving one interaction. Another challenge was the Chrome extension environment. Popups are temporary, so a long-running action shouldn't rely on the window staying open. I implemented background processing and progress recovery to support a more predictable experience. The tool moves selected items to Drive's Trash rather than permanently deleting them. It's a personal-use extension, so I wouldn't claim adoption or usability improvements without testing. Instead, I can demonstrate the actual workflow and explain why each interaction exists. The next step I'd take is observing users performing selection tasks and measuring errors, completion time, and confidence. This project reinforced that a good interface doesn't just make a task possible; it helps users understand the consequences of their actions. I would ask participants to explain their choices as they navigate, then compare what they expect with the implemented behavior. That would give me concrete evidence for deciding which labels or entry points need revision.",
  next: { name: "Developer Portfolio", href: "/work/portfolio" },
};

export const portfolio: CaseStudyData = {
  name: "Developer Portfolio",
  title: "Designing My Portfolio — Making Complex Technical Work Easier to Evaluate",
  summary: "Recruiters and hiring teams need to understand a candidate’s work quickly. A clear path from professional context to project evidence makes detailed technical work easier to evaluate.",
  theme: "portfolio", platform: "Responsive web / Vercel deployment",
  technology: "Next.js / React / TypeScript / Tailwind CSS / Framer Motion",
  status: "Existing deployed portfolio; this revision is prepared locally",
  tradeoff: "Featured case studies prioritize design reasoning while keeping engineering experience and additional projects available further down the homepage.",
  image: { src: "/images/portfolio/previous-home.png", width: 1873, height: 1322, alt: "Earlier portfolio homepage showing Juliana’s engineering headline, portrait, navigation, and resume link", caption: "Existing repository capture of the earlier deployed homepage. It documents the visual foundation; it is not a screenshot of this revision or evidence of recruiter feedback." },
  screenshots: [{ src: "/images/portfolio/previous-sections.png", width: 1879, height: 1302, alt: "Earlier portfolio sections showing engineering experience and project content", caption: "Existing repository capture of the earlier portfolio sections. The revision keeps the engineering content and adds a direct path to design decisions and evidence." }],
  artifacts: [{ label: "Explore current homepage", href: "/#work" }, { label: "Portfolio source", href: "https://github.com/julsoyola/juliana-portfolio" }],
  audience: "Intended audience: recruiters, hiring managers, designers, and engineers reviewing candidate work. These groups have not participated in documented research for this project.",
  problem: "A technical stack alone does not explain what a project solves or which decisions I made. A first-time visitor needs to connect my engineering background to user problems, inspect concrete artifacts, and find contact or resume information without reading every implementation detail.",
  role: "I independently designed and built the portfolio’s responsive presentation, project cards, experience timeline, navigation, and case studies. This revision focuses on information architecture and evidence rather than replacing the established visual identity.",
  objective: "Make role, project problem, contribution, trade-off, and evidence reachable from the homepage while preserving engineering depth. The 30-second comprehension goal is a design target, not a measured result.",
  principles: [
    ["Relevance before completeness", "MacWipe, GoogleCleaner, and the portfolio appear first, each with a problem statement and case-study link."],
    ["Progressive disclosure", "The homepage supports scanning; case studies expose decisions and outcomes, with scripts and deeper engineering notes in disclosures."],
    ["Consistent navigation", "Shared case-study sections, visible keyboard focus, and next-project links support a predictable reading path."],
  ],
  flow: [
    ["Arrive & understand", "Read the design-focused introduction, Amazon background, and computer science / psychology education."],
    ["Review featured work", "Scan problems, screenshots, skills, and links for three featured projects."],
    ["Open a case study", "Read the intended audience, role, flow, three decisions, and constraints."],
    ["Inspect evidence", "Compare implementation facts, labeled screenshots, artifacts, limitations, and proposed validation."],
    ["Continue or connect", "Open the next project, return to engineering history, or locate contact and tailored resumes."],
  ],
  decisions: [
    { title: "Featured case studies first", problem: "A uniform project list makes design reasoning harder to locate.", alternative: "Give every project equal placement, preserving breadth but diluting the primary reading path.", design: "Feature MacWipe, GoogleCleaner, and Developer Portfolio before additional engineering projects and experience.", reasoning: "Each featured card leads directly from a user problem to decisions and evidence.", tradeoff: "Other projects appear later; they remain available rather than being removed." },
    { title: "Purpose before technical detail", problem: "Stack lists do not reveal what I contributed or why an interaction exists.", alternative: "Lead with exhaustive implementation details, requiring more reading before understanding the task.", design: "Short homepage descriptions followed by a shared case-study structure, labeled evidence, and optional deep notes.", reasoning: "Technical choices become meaningful when tied to a user task or constraint.", tradeoff: "Concise cards omit detail; dedicated pages and repository links retain depth without lengthening the homepage." },
    { title: "Restrained motion and readable interaction", problem: "Presentation can interfere with reading, keyboard navigation, or motion preferences.", alternative: "Use animation as a primary cue for content or navigation, increasing dependence on effects.", design: "Reuse existing typography and colors; honor reduced motion in Reveal and hero parallax, expose mobile menu state, and retain visible focus.", reasoning: "Content and navigation should remain understandable across devices and input preferences.", tradeoff: "Reduced-motion presentation is quieter. These targeted accommodations do not establish full accessibility compliance." },
  ],
  constraints: ["Preserve the existing Next.js application, visual identity, dependencies, resumes, external links, and engineering history.", "Small screens require wrapping metadata, readable cards, and simple navigation. New case studies use static content and native disclosures.", "No analytics or research data is available to establish recruiter comprehension or conversion; those goals require separate evaluation."],
  verified: ["The source uses Next.js, React, TypeScript, Tailwind, and Framer Motion, with project cards, a professional timeline, mobile navigation, and tailored resume links.", "Hero parallax and the touched Reveal component honor reduced-motion preferences. The mobile menu exposes expanded state; shared case studies use semantic sections and native details.", "Repository documentation records Vercel deployment. This local revision adds three featured case-study paths and related-work/contact navigation."],
  measurement: "No recruiter comprehension results, navigation-task timings, conversion measurements, or Lighthouse scores are documented.",
  limitations: ["Existing captures show an earlier version. They are visual reference evidence, not before/after usability measurements.", "No recruiter interviews, navigation studies, conversion gains, or Lighthouse scores are documented for this revision.", "Source inspection supports targeted accessibility behaviors; broader assistive-technology and device testing remains necessary."],
  validation: "Proposed five-task navigation test with volunteers unfamiliar with my work: find my role, find a MacWipe trade-off, open a working demo, find engineering history, and locate contact information. Record task success and where visitors hesitate.",
  metrics: "Proposed measures: time to find a case study, task success, and navigation clarity.",
  reflection: "The design lesson is that evidence needs its own hierarchy: implemented behavior, measured outcomes, and future proposals should be distinguishable. A useful next improvement is to revise the entry points based on observed navigation difficulties rather than assuming my own reading order works for everyone.",
  walkthrough: "My portfolio is both a personal website and an information-design problem. I have a software engineering background, but I also wanted to communicate the design reasoning behind the products I've created. The challenge was making both sides of my experience understandable without overwhelming recruiters or hiring managers. I organized the experience around progressive disclosure: the homepage introduces my background and highlights selected projects, while dedicated case studies explain user problems, design decisions, trade-offs, and outcomes. One decision was to put the purpose of each product ahead of its technical stack. The technologies still matter, but they become more meaningful when connected to an interaction or user need. Another priority was responsive design and restrained animation, so the site can communicate clearly across devices without depending on decorative effects. I built it with Next.js, React, TypeScript, and Tailwind, which gave me direct control over both the visual design and the implementation. I don't want to treat my own judgment as evidence that the design works. My next step is task-based usability testing with people unfamiliar with my work, measuring how efficiently they find and understand key information. This project represents the direction I want to grow in: bringing engineering discipline to human-centered product design. I would ask participants to explain their choices as they navigate, then compare what they expect with the implemented behavior. That would give me concrete evidence for deciding which labels or entry points need revision.",
  next: { name: "MacWipe", href: "/work/macwipe" },
};
