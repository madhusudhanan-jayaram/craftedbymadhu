
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code } from "lucide-react";

export const Skills = () => {
  const technicalSkills = [
    { name: "Full Stack Development", level: 95 },
    { name: "Angular", level: 90 },
    { name: "Spring Boot", level: 88 },
    { name: "Python", level: 85 },
    { name: "JavaScript/TypeScript", level: 92 },
    { name: "Java/J2EE", level: 90 },
  ];

  const SkillCard = ({ title, skills, icon: Icon }: any) => (
    <Card className="h-full bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-orange-400/10">
            <Icon className="text-orange-400" size={24} />
          </div>
          <span className="text-xl font-bold text-slate-50">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {skills.map((skill: any) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-3">
              <span className="text-sm font-semibold text-slate-300">{skill.name}</span>
              <span className="text-sm font-bold text-orange-400">{skill.level}</span>
            </div>
            <Progress value={skill.level} className="h-3" />
          </div>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              My <span className="text-orange-400">Skills</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <SkillCard
                title="Technical Skills"
                skills={technicalSkills}
                icon={Code}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
