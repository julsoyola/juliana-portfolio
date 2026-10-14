import Navigation from "@/components/home/Navigation";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Experience from "@/components/home/Experience";
import Skills from "@/components/home/Skills";
import Resume from "@/components/home/Resume";
import Reveal from "@/components/motion/Reveal";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main id="top">
      <Navigation />

      <Reveal>
        <Hero />
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
