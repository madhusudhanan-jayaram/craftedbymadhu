import { Button } from "@/components/ui/button";
import { ArrowDown, Upload, User, Download } from "lucide-react";
import { useState, useRef } from "react";
import jsPDF from 'jspdf';

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

  const handleDownloadCV = () => {
    const pdf = new jsPDF();
    
    // Set up fonts and colors
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(20);
    pdf.text('MADHUSUDHANAN JEYARAM', 20, 20);
    
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Technology Leader & AI Enthusiast', 20, 30);
    
    // Contact Information
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(12);
    pdf.text('CONTACT INFORMATION', 20, 45);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    pdf.text('Email: madhusudhanan.jeyaram@email.com', 20, 55);
    pdf.text('Phone: +1-XXX-XXX-XXXX', 20, 62);
    pdf.text('Location: USA', 20, 69);
    
    // Professional Summary
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(12);
    pdf.text('PROFESSIONAL SUMMARY', 20, 84);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    const summaryText = 'Passionate Technology Leader driving innovation through AI and intelligent systems. With 17+ years of experience, I bridge traditional engineering with cutting-edge AI solutions to transform business challenges into scalable opportunities.';
    const splitSummary = pdf.splitTextToSize(summaryText, 170);
    pdf.text(splitSummary, 20, 94);
    
    // Experience Section
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(12);
    pdf.text('EXPERIENCE', 20, 115);
    
    let yPosition = 125;
    
    // Experience entries
    const experiences = [
      {
        title: 'Technology Leader',
        company: 'Tata Consultancy Services',
        location: 'USA',
        period: 'Oct 2024 - Present',
        description: 'Championed full stack development best practices using Java, Spring Boot, Angular, and RESTful APIs for the Customer Center application, fostering a culture of continuous improvement and innovation.'
      },
      {
        title: 'Application Development Manager',
        company: 'Tata Consultancy Services',
        location: 'USA, India',
        period: 'April 2022 - Oct 2024',
        description: 'Managed EOVS (End of Vendor Support) initiatives and directed cybersecurity fixes by upgrading outdated components and addressing vulnerabilities to ensure compliance, security, and business continuity.'
      },
      {
        title: 'Senior Full Stack Developer',
        company: 'Tata Consultancy Services',
        location: 'USA',
        period: 'May 2015 - May 2020',
        description: 'Developed and optimized decision logic for Credit Card and Personal Loan acquisitions to assess customer eligibility, reduce risk, and improve approval efficiency.'
      }
    ];
    
    experiences.forEach((exp) => {
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(10);
      pdf.text(`${exp.title} | ${exp.company} | ${exp.location} | ${exp.period}`, 20, yPosition);
      
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9);
      const descriptionLines = pdf.splitTextToSize(exp.description, 170);
      pdf.text(descriptionLines, 20, yPosition + 7);
      
      yPosition += 25;
      
      // Add new page if needed
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = 20;
      }
    });
    
    // Education Section
    if (yPosition > 220) {
      pdf.addPage();
      yPosition = 20;
    }
    
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(12);
    pdf.text('EDUCATION', 20, yPosition);
    yPosition += 10;
    
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(10);
    pdf.text('Master of Computer Applications (MCA) | SASTRA University | Thanjavur, India | 2007 - 2011', 20, yPosition);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.text('Specialized in software engineering, database management, and advanced programming concepts.', 20, yPosition + 7);
    
    yPosition += 20;
    
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(10);
    pdf.text('Bachelor of Computer Science (B.Sc) | Madurai Kamaraj University | India | 2004 - 2006', 20, yPosition);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.text('Foundation in computer science, programming languages, and software development principles.', 20, yPosition + 7);
    
    // Save the PDF
    pdf.save('Madhusudhanan_Jeyaram_Resume.pdf');
    
    console.log('PDF Resume download initiated');
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
                    Technology Leader & AI Enthusiast
                  </p>
                </div>
                
                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  Passionate Technology Leader driving innovation through AI and intelligent systems. 
                  With 17+ years of experience, I bridge traditional engineering with cutting-edge AI solutions 
                  to transform business challenges into scalable opportunities.
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
                  onClick={handleDownloadCV}
                >
                  <Download size={20} />
                  <span className="flex items-center gap-2">
                    Download CV
                  </span>
                </Button>
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
