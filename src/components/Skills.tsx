
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Brain, Briefcase } from "lucide-react";

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

  const SkillCard = ({ title, skills, icon: Icon, gradient, bgGradient }: any) => (
    <Card className="h-full relative overflow-hidden">
      <div className={`absolute top-0 right-0 w-24 h-24 ${bgGradient} rounded-full -translate-y-12 translate-x-12 opacity-30`}></div>
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${gradient} shadow-lg`}>
            <Icon className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        {skills.map((skill: any) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-3">
              <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
              <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-3" />
          </div>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Skills</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <SkillCard
              title="Technical Skills"
              skills={technicalSkills}
              icon={Code}
              gradient="bg-gradient-to-br from-blue-500 to-purple-600"
              bgGradient="bg-gradient-to-br from-blue-100 to-purple-100"
            />
            
            <SkillCard
              title="AI & Machine Learning"
              skills={aiSkills}
              icon={Brain}
              gradient="bg-gradient-to-br from-purple-500 to-pink-600"
              bgGradient="bg-gradient-to-br from-purple-100 to-pink-100"
            />
            
            <SkillCard
              title="Leadership & Management"
              skills={managementSkills}
              icon={Briefcase}
              gradient="bg-gradient-to-br from-orange-500 to-red-600"
              bgGradient="bg-gradient-to-br from-orange-100 to-red-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
