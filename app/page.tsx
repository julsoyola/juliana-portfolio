import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatementBand from "@/components/StatementBand";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Navigation />

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <StatementBand />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Resume />
      </Reveal>

      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
}