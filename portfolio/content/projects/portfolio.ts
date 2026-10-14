import type { Project } from "./types";
export const portfolio = {
  "technology": "Next.js / React / TypeScript / Tailwind CSS / Framer Motion",
  "artifacts": [
    {
      "label": "Explore current homepage",
      "href": "/#work"
    },
    {
      "label": "Portfolio source",
      "href": "https://github.com/julsoyola/juliana-portfolio"
    }
  ]
};

import type { ArchiveData } from "@/components/case-study-archive/types";

const liveHref = "https://juliana-portfolio-two.vercel.app";
const githubHref = portfolio.artifacts.find(artifact => artifact.label === "Portfolio source")?.href ?? "https://github.com/julsoyola/juliana-portfolio";
const screens = [
  { src: "/images/portfolio/archive-home.png", width: 1440, height: 1000, caption: "01 / Homepage", alt: "Portfolio homepage with an introduction and portrait" },
  { src: "/images/portfolio/archive-work.png", width: 1440, height: 1000, caption: "02 / Featured Projects", alt: "Featured work with project descriptions and case study links" },
  { src: "/images/portfolio/archive-case-study.png", width: 1440, height: 1000, caption: "03 / Case Study Layout", alt: "MacWipe case study introduction, project links, and dashboard screenshot" },
];
const decisions = [
  { title: "Prioritize relevant work", icon: "computer", text: "I featured MacWipe, GoogleCleaner, and this portfolio.", why: "Dedicated case studies expose my decisions and contribution.", tradeoff: "Additional projects remain accessible with less prominent placement." },
  { title: "Progressive disclosure", icon: "folder", text: "Start with summaries, then open detailed case studies.", why: "Visitors can choose their reading depth.", tradeoff: "Technical detail requires another interaction." },
  { title: "Visual personality with clarity", icon: "heart", text: "Combine editorial typography and restrained retro details.", why: "Consistent navigation keeps the work easy to explore.", tradeoff: "Readability takes priority over visual effects." },
] as const;
const engineering = [
  { title: "Reusable Components", icon: "grid", text: "Shared layout and case study components support consistency." },
  { title: "Responsive Design", icon: "computer", text: "Layouts adapt to desktop, tablet, and mobile screens." },
  { title: "Accessibility", icon: "accessibility", text: "Semantic structure, keyboard navigation, and reduced-motion accommodations." },
  { title: "Next.js Architecture", icon: "code", text: "React and TypeScript components with static content and Vercel deployment." },
] as const;
const paths = [
  ["Homepage", "Introduction and featured work"],
  ["Featured Projects", "Selected projects and entry points"],
  ["Case Studies", "Design decisions and implementation"],
  ["Contact / Resumes", "Ways to connect and learn more"],
];

export const portfolioArchive: ArchiveData = {
  theme: "portfolio", name: "Developer Portfolio", number: "03",
  sidebarTitle: ["Developer", "Portfolio"],
  sidebarSummary: "A personal archive where engineering, design, and product work come together.",
  metadata: [{label: "Role", text: "Independent Designer & Developer"}, {label: "Type", text: "Personal Portfolio"}, {label: "Stack", text: portfolio.technology.split(" / ").join(", ")}],
  links: [{label: "Live", href: liveHref, text: "juliana-portfolio-two.vercel.app"}, {label: "GitHub", href: githubHref, text: "github.com/julsoyola/juliana-portfolio"}],
  navigation: [["overview", "Overview"], ["visual-design", "Visual Design"], ["design-decisions", "Design Decisions"], ["information-architecture", "Information Architecture"], ["implementation", "Implementation"], ["outcome", "Outcome & Reflection"]],
  hero: {title: "Designing my digital portfolio", summary: "A responsive portfolio that brings together my engineering experience, design decisions, and the products I've built.", image: screens[0], note: ["engineering", "×", "design", "×", "product"]},
  actions: [{label: "Visit Site", href: liveHref}, {label: "View GitHub", href: githubHref}],
  interface: {title: "Visual Identity", heading: "A clean, warm, and personal aesthetic", text: "I wanted the portfolio to feel approachable and expressive while keeping the work easy to understand. Editorial typography, warm colors, and subtle retro details help establish a personal visual identity.", image: screens[1], colors: [["Orange", "var(--terracotta)"], ["Yellow", "var(--mustard)"], ["Cream", "var(--paper)"], ["Green", "var(--forest)"], ["Pink", "var(--pink)"], ["Blue", "var(--sky)"]], note: ["Clear", "Personal", "Approachable", "Organized"]},
  decisions: [...decisions],
  flow: {id: "information-architecture", title: "Information Architecture", heading: "A clear path through the content", text: "The navigation moves from a high-level introduction to detailed project evidence, making it easier for visitors to explore at their own pace.", steps: paths as [string, string][]},
  screens,
  engineering: {heading: "Built with reusable, flexible components", text: "I built the portfolio to keep content organized, layouts responsive, and interactions consistent across the site.", highlights: [...engineering]},
  outcome: {heading: "A portfolio that reflects how I work", text: "This portfolio brings together my software engineering background and growing focus on user experience design. It gives visitors a clearer view of how I approach problems, explain decisions, and build working products.", reflection: "Working on this portfolio taught me to edit for clarity as carefully as I build features. A shared case-study layout lets visitors compare projects, while project-specific content explains the decisions and limitations that matter for each one."},
};

export const portfolioCard: Project = {
    id: "portfolio",
    liveLabel: "Live Site",
    title: "Developer Portfolio", caseStudyUrl: "/work/portfolio",
    description: "Give hiring teams a clear path from professional context to project decisions and evidence.",
    skills: ["Content hierarchy", "Responsive design", "Accessibility"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"], tone: "bg-[#F3AD87]",
    liveUrl: "https://juliana-portfolio-two.vercel.app", githubUrl: "https://github.com/julsoyola/juliana-portfolio",
  };
