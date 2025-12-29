

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cpu, Server, Cloud, Database, Users } from "lucide-react";

export const Skills = () => {
  const aiGenerativeSkills = [
    "Large Language Models (LLMs) & Prompt Engineering",
    "Retrieval-Augmented Generation (RAG) Architectures",
    "AI Agents & Orchestration Workflows",
    "Model Evaluation, Guardrails & Responsible AI",
    "Vector Databases & Semantic Search",
    "LLM Integration using APIs (OpenAI, Open Source Models)",
  ];

  const aiEngineeringSkills = [
    "Machine Learning Model Development & Deployment",
    "Feature Engineering & Data Preprocessing",
    "Model Training, Evaluation & Optimization",
    "NLP & Text Analytics",
    "Model Lifecycle Management (MLOps fundamentals)",
  ];

  const architectureSkills = [
    "Microservices & Cloud-Native Architecture",
    "RESTful & Event-Driven Systems",
    "Scalable API Design & Integration",
    "Application Modernization & Legacy Transformation",
    "Domain-Driven Design (DDD)",
  ];

  const cloudDevOpsSkills = [
    "Kubernetes & Container Orchestration",
    "CI/CD Pipelines & Automation",
    "Cloud-Native Deployments (AWS / GCP concepts)",
    "Infrastructure as Code & Environment Management",
    "Monitoring, Logging & Observability",
  ];

  const dataSecuritySkills = [
    "Data Pipelines & ETL Design",
    "Secure Data Access & Role-Based Control",
    "API Security & Authentication (OAuth, JWT)",
    "Compliance, Privacy & Responsible AI Practices",
  ];

  const leadershipSkills = [
    "Technical Architecture & Solution Design",
    "Cross-Team Collaboration & Mentorship",
    "Agile & DevOps Methodologies",
    "Stakeholder Communication & Requirement Translation",
  ];

  const SkillCard = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: any }) => (
    <Card className="h-full bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-orange-400/10">
            <Icon className="text-orange-400" size={24} />
          </div>
          <span className="text-lg font-bold text-slate-50">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {skills.map((skill) => (
            <li key={skill} className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
              <span className="text-sm text-slate-300">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              My <span className="text-orange-400">Skills</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              title="AI & Generative Intelligence"
              skills={aiGenerativeSkills}
              icon={Brain}
            />
            
            <SkillCard
              title="AI Engineering & Machine Learning"
              skills={aiEngineeringSkills}
              icon={Cpu}
            />
            
            <SkillCard
              title="Application & Platform Architecture"
              skills={architectureSkills}
              icon={Server}
            />
            
            <SkillCard
              title="Cloud & DevOps"
              skills={cloudDevOpsSkills}
              icon={Cloud}
            />
            
            <SkillCard
              title="Data, Security & Governance"
              skills={dataSecuritySkills}
              icon={Database}
            />
            
            <SkillCard
              title="Leadership & Delivery"
              skills={leadershipSkills}
              icon={Users}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

