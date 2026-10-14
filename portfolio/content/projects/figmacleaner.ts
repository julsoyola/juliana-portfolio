import type { Project } from "./types";
import type { ArchiveData, ArchiveScreen } from "@/components/case-study-archive/types";

export const figmaPlayground = "https://www.figma.com/design/25RA0YccPSJOPmuDAIsObC/FigmaCleaner-%E2%80%94-Interactive-Test-Canvas?node-id=0-1&t=9iR8tQTD2CrHGs6F-1";
const community = "https://www.figma.com/community/plugin/1690483707420309331/figmacleaner?fuid=1321948083579761206";
const source = "https://github.com/julsoyola/figmaCleaner";
const screens: ArchiveScreen[] = [
  {src: "/images/figmaCleaner/figmaCleaner.png", width: 366, height: 337, alt: "FigmaCleaner plugin with three cleanup controls and a ready status", caption: "01 / Plugin controls"},
  {src: "/images/figmaCleaner/beforeClean.png", width: 1413, height: 1092, alt: "Figma canvas and layer hierarchy before cleanup", caption: "02 / Before cleanup"},
  {src: "/images/figmaCleaner/afterCleanContainers.png", width: 1413, height: 837, alt: "FigmaCleaner reports four empty containers removed from the active page", caption: "03 / After removing empty containers"},
  {src: "/images/figmaCleaner/AfterChildClean.png", width: 1456, height: 1134, alt: "FigmaCleaner reports five single-child groups unwrapped in the layer hierarchy", caption: "04 / After unwrapping single-child groups"},
];
export const figmacleanerArchive: ArchiveData = {
  theme: "figmacleaner", name: "FigmaCleaner", number: "04", sidebarTitle: ["FigmaCleaner"],
  sidebarSummary: "A Figma plugin for removing hidden layers, deleting empty containers, and simplifying group nesting.",
  metadata: [{label: "Role", text: "Product Designer & Engineer"}, {label: "Type", text: "Personal Figma Plugin"}, {label: "Technology", text: "TypeScript, Figma Plugin API, HTML/CSS, Node.js"}],
  links: [{label: "Community", href: community, text: "FigmaCleaner community plugin"}, {label: "Playground", href: figmaPlayground, text: "Interactive Figma test canvas"}, {label: "Source", href: source, text: "github.com/julsoyola/figmaCleaner"}],
  navigation: [["overview", "Overview"], ["visual-design", "Interface Design"], ["design-decisions", "Design Decisions"], ["user-flow", "User Flow"], ["selected-screens", "Selected Screens"], ["implementation", "Implementation"], ["outcome", "Outcome & Reflection"]],
  hero: {title: "Layer maintenance easier to manage", summary: "FigmaCleaner brings three cleanup actions into a compact plugin: remove hidden layers, delete empty frames and groups, and unwrap single-child groups on the active page.", image: screens[0], notice: "The browser sandbox uses a simulated layer tree and does not modify Figma files."},
  actions: [{label: "Get in Figma", href: community}, {label: "Try in Figma", href: figmaPlayground}, {label: "Try Sandbox", href: "#sandbox"}],
  interface: {title: "Interface Design", heading: "Keep the actions explicit", text: "Three labeled controls identify what each action changes. Figma theme tokens support light and dark modes, while ASCII indicators and a status line keep the interface compact.", image: screens[0], colors: [["Salmon Paste", "#e07970"], ["Cantaloupe", "#de8948"], ["Lemon Posset", "#f9d58d"], ["Yellow Green", "#bbab47"], ["Powder Blue", "#cdd7d8"]]},
  decisions: [
    {title: "Separate cleanup actions", icon: "grid", text: "Expose hidden-layer, empty-container, and group actions individually.", why: "Each action has a different effect on the layer tree.", tradeoff: "Multiple actions require separate clicks."},
    {title: "Limit the scope", icon: "folder", text: "Operate on the active page.", why: "Cleanup does not scan every page in the file.", tradeoff: "Other pages require another run."},
    {title: "Report completion", icon: "code", text: "Disable controls during work, then report status and unlock them.", why: "The interface explains when an action has finished.", tradeoff: "Feedback is a summary, not an item-by-item review."},
  ],
  flow: {id: "user-flow", title: "User Flow", heading: "From a page to a simpler hierarchy", text: "Choose one cleanup action and inspect the resulting layers.", horizontal: true, steps: [["Open", "Open the plugin on the active page."], ["Choose", "Select a cleanup action."], ["Process", "The plugin finds and modifies matching nodes."], ["Inspect", "Read the status and check the layer hierarchy."]]},
  screens,
  engineering: {heading: "A small interface over explicit canvas operations", text: "The HTML interface sends action messages to the TypeScript plugin. Figma API calls handle node removal and ungrouping.", highlights: [
    {title: "Active-page queries", icon: "folder", text: "currentPage.findAll identifies nodes matching each action."},
    {title: "Node operations", icon: "grid", text: "remove deletes matching nodes; figma.ungroup unwraps single-child groups."},
    {title: "Status messages", icon: "code", text: "The host returns completion or warning messages and triggers Figma notifications."},
    {title: "Theme-aware controls", icon: "computer", text: "Figma CSS tokens provide native light and dark theme colors."},
  ]},
  outcome: {heading: "Clear actions for routine file maintenance", text: "The project provides three active-page cleanup actions and status feedback. The portfolio sandbox lets visitors explore similar operations on a sample layer tree. No measured memory savings, execution guarantees, or usability outcomes are documented.", reflection: "Building FigmaCleaner reinforced how much a small control needs to communicate. Separate actions, active-page scope, and completion feedback explain what changes in the layer tree. The sandbox also helped me make those operations easier to demonstrate."},
  decoration: "tags",
};

export const figmacleanerCard: Project = {
    id: "figmacleaner",
    title: "FigmaCleaner",
    description:
      "A native Figma plugin designed to automate canvas tree maintenance, purge hidden layers, and optimize rendering performance.",
    stack: ["TypeScript", "Figma Plugin API", "HTML/CSS", "Node.js"],
    tone: "bg-[var(--mustard)]",
    caseStudyUrl: "/work/figmacleaner",
    liveUrl: "https://github.com/julsoyola/figmaCleaner",
    githubUrl: "https://github.com/julsoyola/figmaCleaner",
  };
