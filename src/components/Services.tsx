
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Brain, Users, Cog, Database, Shield } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Complete web application development using modern technologies like React, Angular, Spring Boot, and Node.js.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Implementing AI solutions, machine learning models, and intelligent automation systems for business optimization.",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading cross-functional teams, implementing agile methodologies, and driving technical excellence in projects.",
    },
    {
      icon: Cog,
      title: "System Architecture",
      description: "Designing scalable, robust system architectures for enterprise applications with focus on performance and security.",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building data pipelines, implementing ETL processes, and creating data-driven solutions for business insights.",
    },
    {
      icon: Shield,
      title: "DevOps & Security",
      description: "Implementing CI/CD pipelines, containerization, cloud deployment, and security best practices.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              My <span className="text-orange-400">Services</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              I offer comprehensive technology solutions from full-stack development to AI implementation and team leadership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700 hover:border-orange-400 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-400/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400/20 transition-colors duration-300">
                    <service.icon className="text-orange-400" size={32} />
                  </div>
                  <CardTitle className="text-xl text-slate-50">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
