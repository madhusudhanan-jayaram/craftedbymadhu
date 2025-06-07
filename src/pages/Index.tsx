
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Resume } from "@/components/Resume";
import { Skills } from "@/components/Skills";
import { Statistics } from "@/components/Statistics";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Statistics />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
