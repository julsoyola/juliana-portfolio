import type { Metadata } from "next";
import MacWipeCaseStudy from "@/components/MacWipeCaseStudy";

export const metadata: Metadata = {
  title: "MacWipe Case Study | Juliana Oyola-Pabon",
  description: "Making macOS storage cleanup safer and more understandable through inspection, deliberate review, and native safeguards.",
};

export default function MacWipePage() {
  return <MacWipeCaseStudy />;
}
