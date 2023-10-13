import About from "@/components/about";
import Cards from "@/components/cards";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Filter1GrainTexture from "@/components/filters/Filter1GrainTexture.tsx";
import Intro from "@/components/hero";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { cards } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 max-w-5xl mx-auto relative">
      <Intro />
      <SectionDivider />

      <About />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <Cards card={card} key={index} />
        ))}
      </div>
      <SectionDivider />

      <Projects />
      <Skills />
      {/* <Experience /> */}
      <Contact />
    </main>
  );
}
