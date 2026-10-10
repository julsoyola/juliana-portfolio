import type { Metadata } from "next";
import MacWipeCaseStudy from "@/components/MacWipeCaseStudy";

export const metadata: Metadata = {
  title: "MacWipe Case Study | Juliana Oyola-Pabon",
  description: "Explore MacWipe through message-style case study topics: design decisions, cleanup review, native and web architecture, optimization, and current limitations.",
};

export default function MacWipePage() {
  return <MacWipeCaseStudy />;
}
