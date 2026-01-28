
import { Hero } from "@/components/Hero";
import { Resume } from "@/components/Resume";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
