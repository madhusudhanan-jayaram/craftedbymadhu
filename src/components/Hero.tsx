
import { Button } from "@/components/ui/button";
import { ArrowDown, Upload, User, Download } from "lucide-react";
import { useState, useRef } from "react";

export const Hero = () => {
  const [profileImage, setProfileImage] = useState<string | null>("https://i.postimg.cc/30pRNvt4/profile.jpg");
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-slate-50 space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-orange-400 font-medium text-lg">Hello, I'm</p>
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    Madhusudhanan{" "}
                    <span className="text-orange-400">Jeyaram</span>
                  </h1>
                  <p className="text-2xl lg:text-3xl text-slate-300 font-medium">
                    Technology Leader & AI Engineer
                  </p>
                </div>
                
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  Building Intelligent Applications with robust architectures, 
                  turning AI theory into production systems that scale across enterprise environments.
                </p>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-400 hover:bg-orange-500 text-slate-900 font-semibold px-8 py-6 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Hire Me
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 px-8 py-6 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                >
                  <Download size={20} />
                  <span className="flex items-center gap-2">
                    Download CV
                  </span>
                </Button>
              </div>

              {/* Experience badge */}
              <div className="inline-flex items-center gap-3 bg-slate-800 rounded-lg px-6 py-3 border border-slate-700">
                <div className="text-2xl font-bold text-orange-400">17+</div>
                <div className="text-slate-300 font-medium">Years Experience</div>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main profile container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Background decorative shape */}
                  <div className="absolute inset-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full"></div>
                  
                  {/* Profile image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-800 p-3 group cursor-pointer border-4 border-slate-700" onClick={triggerFileInput}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-700 flex items-center justify-center relative">
                      {profileImage ? (
                        <img 
                          src={profileImage} 
                          alt="Madhusudhanan Jeyaram" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-600 flex items-center justify-center text-slate-400">
                          <User size={80} />
                        </div>
                      )}
                      
                      {/* Upload overlay */}
                      <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Upload className="text-white" size={32} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-slate-400">Scroll to explore</span>
            <ArrowDown className="text-orange-400" size={20} />
          </div>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </section>
  );
};
