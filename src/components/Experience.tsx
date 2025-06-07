
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          
          <Card className="relative">
            <div className="absolute left-8 top-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Briefcase className="text-white" size={24} />
            </div>
            
            <CardHeader className="pl-24">
              <CardTitle className="text-2xl">Technology Leader</CardTitle>
              <p className="text-lg text-blue-600 font-semibold">Tata Consultancy Services</p>
              <p className="text-muted-foreground">2007 - Present (17+ Years)</p>
            </CardHeader>
            
            <CardContent className="pl-24 space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Key Responsibilities</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Leading cross-functional teams in full stack development and AI innovation initiatives
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Architecting scalable web applications with modern technologies and AI integration
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Implementing agile methodologies and DevOps practices for improved project governance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Bridging the gap between traditional enterprise systems and AI-driven solutions
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Team Leadership</Badge>
                  <Badge variant="outline">Project Governance</Badge>
                  <Badge variant="outline">Agile Methodologies</Badge>
                  <Badge variant="outline">DevOps</Badge>
                  <Badge variant="outline">AI Integration</Badge>
                  <Badge variant="outline">Enterprise Architecture</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
