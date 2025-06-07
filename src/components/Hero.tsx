
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-fade-in">
            MJ
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Madhusudhanan Jeyaram
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in delay-200">
            Technology Leader | Full Stack Engineer transitioning into AI
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-300">
            Building Intelligent Applications with robust architectures, 
            turning AI theory into production systems
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <a href="#projects">Explore My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-muted">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          {/* Years of Experience Badge */}
          <div className="inline-flex items-center gap-2 mt-8 px-4 py-2 bg-white rounded-full shadow-lg animate-fade-in delay-700">
            <span className="text-2xl font-bold text-blue-600">17+</span>
            <span className="text-sm text-muted-foreground">Years of Experience</span>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};
