import type { Metadata } from "next";
import CaseStudyArchive from "@/components/case-study-archive/CaseStudyArchive";
import { portfolioArchive } from "@/content/projects/portfolio";

export const metadata: Metadata = {
  title: "Portfolio Case Study | Juliana Oyola-Pabon",
  description: "Making complex technical work easier to evaluate through clear hierarchy, project evidence, and accessible navigation.",
};

export default function PortfolioCaseStudy() {
  return <CaseStudyArchive study={portfolioArchive} />;
}
