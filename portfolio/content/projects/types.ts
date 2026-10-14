export type Project = {
  id: "macwipe" | "googlecleaner" | "portfolio" | "figmacleaner";
  title: string; description: string; stack: string[]; tone: string;
  caseStudyUrl?: string; liveUrl: string | null; githubUrl: string | null;
  liveLabel?: string; skills?: string[];
};
