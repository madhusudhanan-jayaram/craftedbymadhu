
import { Hero } from "@/components/Hero";
import { Resume } from "@/components/Resume";
import { Skills } from "@/components/Skills";
import { Statistics } from "@/components/Statistics";
import { Projects } from "@/components/Projects";
import { LoanProjectShowcase } from "@/components/LoanProjectShowcase";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Statistics />
      <Resume />
      <Skills />
      <Projects />
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <LoanProjectShowcase />
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Index;
