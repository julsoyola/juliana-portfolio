import type { Metadata } from "next";
import CaseStudyArchive from "@/components/case-study-archive/CaseStudyArchive";
import { googlecleanerArchive } from "@/content/projects/googlecleaner";
import { GoogleCleanerEngineering, GoogleCleanerDemo } from "@/components/case-study-archive/GoogleCleanerNotes";
import ReflectionDetails from "@/components/case-study-archive/ReflectionDetails";
import { googlecleaner } from "@/content/projects/googlecleaner";

export const metadata: Metadata = {
  title: "GoogleCleaner Case Study | Juliana Oyola-Pabon",
  description: "Bringing clarity and control to Google Drive cleanup through discovery, explicit selection, review, and background task recovery.",
};

export default function GoogleCleanerCaseStudy() {
  return <CaseStudyArchive study={googlecleanerArchive} engineeringDetail={<GoogleCleanerEngineering />}
    gallerySupplement={<GoogleCleanerDemo />} reflectionDetail={<ReflectionDetails study={googlecleaner} />} />;
}
