import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export const Resume = () => {
  const experience = [
    {
      title: "Principal Engineer",
      company: "Tata Consultancy Services",
      location: "USA",
      period: "Oct 2024 - Present",
      description: "Driving modernization of Citibank's customer feedback platform into a secure, cloud-native, and scalable solution on OpenShift. Architecting Helm-based deployments, automating CI/CD pipelines with Harness, and managing secrets via HashiCorp Vault and Spring Config. Integrating Apigee and PSG for governance and secure routing. Enhancing observability through AppDynamics and Splunk, and mentoring teams on DevSecOps, automation, and cloud-native best practices.",
      achievements: []
    },
    {
      title: "Application Development Manager",
      company: "Tata Consultancy Services",
      location: "USA, India",
      period: "April 2022 - Oct 2024",
      description: "Managed EOVS (End of Vendor Support) initiatives and directed cybersecurity fixes by upgrading outdated components and addressing vulnerabilities to ensure compliance, security, and business continuity.",
      achievements: []
    },
    {
      title: "Senior Full Stack Developer",
      company: "Tata Consultancy Services",
      location: "USA",
      period: "May 2015 - May 2020",
      description: "Developed and optimized decision logic for Credit Card and Personal Loan acquisitions to assess customer eligibility, reduce risk, and improve approval efficiency.",
      achievements: []
    },
    {
      title: "Mid-Level Full Stack Developer",
      company: "Tata Consultancy Services",
      location: "India",
      period: "Dec 2008 - May 2015",
      description: "Sunset legacy Collections and Payments applications by migrating VB screens to modern Java Full Stack solutions, improving system performance and maintainability.",
      achievements: []
    },
    {
      title: "Junior Full Stack Developer",
      company: "Tata Consultancy Services",
      location: "India",
      period: "Jan 2007 - Nov 2008",
      description: "Optimized collections and payments systems as a Junior Full Stack Developer to enhance customer engagement and drive delinquent debt recovery.",
      achievements: []
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
                      {exp.achievements.length > 0 && (
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
                      )}
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
