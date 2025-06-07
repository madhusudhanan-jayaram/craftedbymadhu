
import { Button } from "@/components/ui/button";
import { ArrowDown, Upload, User } from "lucide-react";
import { useState, useRef } from "react";

export const Hero = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30 animate-pulse blur-sm"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-25 animate-pulse delay-1000 blur-sm"></div>
      <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-30 animate-pulse delay-500 blur-sm"></div>
      <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-25 animate-pulse delay-700 blur-sm"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-16">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Profile Image with Upload Option */}
          <div className="relative w-40 h-40 mx-auto mb-8 group">
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500 via-purple-600 to-orange-500 p-1 animate-fade-in shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Madhusudhanan Jeyaram" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                    <User size={48} />
                  </div>
                )}
              </div>
            </div>
            
            {/* Upload overlay */}
            <button
              onClick={triggerFileInput}
              className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Upload className="text-white" size={24} />
            </button>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
          
          {/* Enhanced typography with better spacing */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-fade-in">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent block md:inline">
                Madhusudhanan Jeyaram
              </span>
            </h1>
            
            <div className="space-y-4 animate-fade-in delay-200">
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                Technology Leader | Full Stack Engineer transitioning into AI
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Building Intelligent Applications with robust architectures, 
                turning AI theory into production systems that scale
              </p>
            </div>
            
            {/* Enhanced call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-500 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href="#projects" className="flex items-center gap-2">
                  Explore My Work
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:bg-muted text-lg px-8 py-6 rounded-full border-2 hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Get In Touch
                </a>
              </Button>
            </div>
            
            {/* Enhanced experience badge */}
            <div className="inline-flex items-center gap-3 mt-12 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-xl animate-fade-in delay-700 border border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                17+
              </div>
              <div className="text-muted-foreground font-medium">
                Years of Experience
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <ArrowDown className="text-muted-foreground" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};
