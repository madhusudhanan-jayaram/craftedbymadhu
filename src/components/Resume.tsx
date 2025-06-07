import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export const Resume = () => {
  const experience = [
    {
      title: "Technology Leader",
      company: "Tata Consultancy Services",
      location: "India",
      period: "2007 - Present",
      description: "Leading cross-functional teams in full stack development and AI innovation initiatives. Architecting scalable web applications with modern technologies and AI integration.",
      achievements: [
        "Led modernization of critical banking applications for Citi Bank",
        "Implemented AI-driven solutions resulting in 30% efficiency improvement",
        "Managed teams of 15+ developers across multiple projects",
        "Drove adoption of agile methodologies and DevOps practices"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "SASTRA University",
      location: "Thanjavur, India",
      period: "2007 - 2011",
      description: "Specialized in software engineering, database management, and advanced programming concepts."
    },
    {
      degree: "Bachelor of Computer Science (B.Sc)",
      institution: "Madurai Kamaraj University",
      location: "India",
      period: "2004 - 2006",
      description: "Foundation in computer science, programming languages, and software development principles."
    }
  ];

  return (
    <section id="resume" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              My <span className="text-orange-400">Resume</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A comprehensive overview of my professional journey and educational background.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-orange-400/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-orange-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Experience</h3>
              </div>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <Card key={index} className="bg-slate-900 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-50">{exp.title}</CardTitle>
                      <div className="space-y-2">
                        <p className="text-orange-400 font-semibold">{exp.company}</p>
                        <div className="flex items-center gap-4 text-slate-400">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                      <div>
                        <h4 className="font-semibold text-slate-50 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-400">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-orange-400/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-orange-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-50">Education</h3>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-slate-900 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-50">{edu.degree}</CardTitle>
                      <div className="space-y-2">
                        <p className="text-orange-400 font-semibold">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-slate-400">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                          <span>•</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
