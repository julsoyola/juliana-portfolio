import type { StudyImage } from "@/components/caseStudies";

export type ArchiveIcon = "computer" | "folder" | "heart" | "grid" | "accessibility" | "code";
export type ArchiveTheme = "portfolio" | "macwipe" | "googlecleaner" | "figmacleaner";
export type ArchiveScreen = StudyImage | { placeholder: string; caption: string };
export type ArchiveData = {
  theme: ArchiveTheme;
  name: string;
  number: string;
  sidebarTitle: [string, string?];
  sidebarSummary: string;
  metadata: { label: string; text: string }[];
  links: { label: string; href: string; text: string }[];
  navigation: [string, string][];
  hero: { title: string; summary: string; image: ArchiveScreen; note?: string[]; notice?: string };
  actions: { label: string; href: string }[];
  interface: { title: string; heading: string; text: string; image: ArchiveScreen; colors: [string, string][]; note?: string[] };
  decisions: { title: string; icon: ArchiveIcon; text: string; why?: string; tradeoff: string }[];
  flow: { id: string; title: string; heading: string; text: string; steps: [string, string][]; horizontal?: boolean };
  screens: ArchiveScreen[];
  engineering: { heading: string; text: string; highlights: { title: string; icon: ArchiveIcon; text: string }[] };
  outcome: { heading: string; text: string; reflection: string };
  decoration?: "papers" | "folders" | "tags";
};
