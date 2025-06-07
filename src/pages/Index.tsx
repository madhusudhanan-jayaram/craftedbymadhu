
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Resume } from "@/components/Resume";
import { Skills } from "@/components/Skills";
import { Statistics } from "@/components/Statistics";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Resume />
      <Skills />
      <Statistics />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
