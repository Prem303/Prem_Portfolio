import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import TimelineStepper from "@/components/TimelineStepper";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <TimelineStepper />
      <Contact />
    </div>
  );
};

export default Index;
