import { Button } from "@/components/ui/button";
import { ArrowDown, User } from "lucide-react";
import { useState, useRef } from "react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

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

  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-slate-900"
      aria-label="Introduction"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-24 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left content */}
            <AnimatedSection animation="slide-right" className="text-slate-50 space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <p className="text-orange-400 font-medium text-base md:text-lg">Hello, I'm</p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    Madhu
                  </h1>
                  <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-medium" role="doc-subtitle">
                    AI & Cloud Transformation Strategist
                  </p>
                </div>
                
                <p className="text-base md:text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  I'm an AI & Cloud Transformation Strategist with deep experience across Collections, Payments, Acquisitions, Lending, Customer Service, and Feedback applications in the Banking & Financial Services domain.
                </p>
                <p className="text-base md:text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  I specialize in application governance, modernization, and cloud-first transformation — blending security, scalability, and innovation to deliver meaningful digital impact.
                </p>
              </div>
            </AnimatedSection>

            {/* Right side - Profile image */}
            <AnimatedSection animation="slide-left" delay={200} className="relative flex justify-center order-1 lg:order-2">
              <div className="relative">
                {/* Main profile container */}
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Background decorative shape */}
                  <div className="absolute inset-3 sm:inset-4 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full" aria-hidden="true"></div>
                  
                  {/* Profile image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-800 p-2 sm:p-3 border-2 sm:border-4 border-slate-700">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-700 flex items-center justify-center">
                      {profileImage ? (
                        <img 
                          src={profileImage} 
                          alt="Madhu - AI & Cloud Transformation Strategist" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-600 flex items-center justify-center text-slate-400">
                          <User size={80} aria-hidden="true" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - fixed at bottom */}
      <div className="pb-8 flex justify-center">
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center gap-2 animate-bounce cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg p-2"
          aria-label="Scroll down to explore more content"
        >
          <span className="text-sm text-slate-400 group-hover:text-orange-400 transition-colors">Scroll to explore</span>
          <ArrowDown className="text-orange-400" size={20} aria-hidden="true" />
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        aria-hidden="true"
      />
    </section>
  );
};
