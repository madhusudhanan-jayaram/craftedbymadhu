
import { Button } from "@/components/ui/button";
import { ArrowDown, Upload, User, Play } from "lucide-react";
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-orange-400 rounded-full opacity-80"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-yellow-400 rounded-full opacity-70"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-orange-300 rounded-full opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white rounded-full opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-yellow-300 rounded-full opacity-60"></div>
      
      {/* Decorative dots pattern */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col space-y-4">
          <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
          <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
          <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
          <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
        </div>
      </div>

      {/* Curved decorative lines */}
      <div className="absolute top-20 left-1/3">
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-orange-300 opacity-60">
          <path d="M20,50 Q50,20 80,50 Q50,80 20,50" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Hello, I'm{" "}
                  <span className="block text-orange-400">
                    Madhusudhanan Jeyaram
                  </span>
                  <span className="block text-3xl lg:text-4xl font-medium text-purple-200 mt-2">
                    Technology Leader & AI Engineer
                  </span>
                </h1>
                
                <p className="text-lg lg:text-xl text-purple-100 max-w-lg leading-relaxed">
                  Building Intelligent Applications with robust architectures, 
                  turning AI theory into production systems that scale
                </p>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  <a href="#projects" className="flex items-center gap-2">
                    Get Started
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  <Play size={20} />
                  <a href="#about" className="flex items-center gap-2">
                    Watch Intro
                  </a>
                </Button>
              </div>

              {/* Experience badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <div className="text-2xl font-bold text-orange-400">17+</div>
                <div className="text-white font-medium">Years Experience</div>
              </div>

              {/* Client testimonial badge */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 max-w-sm">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-orange-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">T</div>
                  <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">C</div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
                </div>
                <div className="text-sm">
                  <div className="text-white font-medium">TCS Client</div>
                  <div className="text-purple-200 text-xs">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>

            {/* Right side - Profile image with decorative elements */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main profile container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Background decorative circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full transform rotate-6"></div>
                  
                  {/* Profile image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-white p-2 group cursor-pointer" onClick={triggerFileInput}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                      {profileImage ? (
                        <img 
                          src={profileImage} 
                          alt="Madhusudhanan Jeyaram" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white">
                          <User size={80} />
                        </div>
                      )}
                      
                      {/* Upload overlay */}
                      <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Upload className="text-white" size={32} />
                      </div>
                    </div>
                  </div>

                  {/* Experience badge floating */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">17+</div>
                      <div className="text-xs text-gray-600">Years</div>
                      <div className="text-xs text-gray-600">Experience</div>
                    </div>
                  </div>
                </div>

                {/* Floating decorative elements around profile */}
                <div className="absolute -top-8 left-8 w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-8 w-12 h-12 bg-orange-400 rounded-full opacity-70 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-12 w-8 h-8 bg-white rounded-full opacity-60 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-purple-200">Scroll to explore</span>
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
