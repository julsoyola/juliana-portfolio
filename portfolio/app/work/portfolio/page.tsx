import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import { portfolio } from "@/components/caseStudies";

export const metadata: Metadata = {
  title: "Portfolio Case Study | Juliana Oyola-Pabon",
  description: "Making complex technical work easier to evaluate through clear hierarchy, project evidence, and accessible navigation.",
};

export default function PortfolioCaseStudy() {
  return <CaseStudy study={portfolio} />;
}
