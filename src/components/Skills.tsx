
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Briefcase } from "lucide-react";

export const Skills = () => {
  const technicalSkills = [
    { name: "Full Stack Development", level: 95 },
    { name: "Angular", level: 90 },
    { name: "Spring Boot", level: 88 },
    { name: "Python", level: 85 },
    { name: "JavaScript/TypeScript", level: 92 },
    { name: "Java/J2EE", level: 90 },
  ];

  const aiSkills = [
    { name: "Generative AI", level: 75 },
    { name: "Machine Learning", level: 70 },
    { name: "Natural Language Processing", level: 65 },
    { name: "Ethical AI Practices", level: 80 },
    { name: "AI System Architecture", level: 75 },
  ];

  const managementSkills = [
    { name: "Agile Methodologies", level: 95 },
    { name: "Project Leadership", level: 92 },
    { name: "DevOps", level: 88 },
    { name: "Team Management", level: 90 },
    { name: "Strategic Planning", level: 85 },
  ];

  const SkillCard = ({ title, skills, icon: Icon, gradient }: any) => (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${gradient}`}>
            <Icon className="text-white" size={20} />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill: any) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            My <span className="text-blue-600">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard
              title="Technical Skills"
              skills={technicalSkills}
              icon={Code}
              gradient="bg-gradient-to-br from-blue-500 to-blue-600"
            />
            
            <SkillCard
              title="AI & Machine Learning"
              skills={aiSkills}
              icon={Code}
              gradient="bg-gradient-to-br from-purple-500 to-purple-600"
            />
            
            <SkillCard
              title="Leadership & Management"
              skills={managementSkills}
              icon={Briefcase}
              gradient="bg-gradient-to-br from-orange-500 to-orange-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
