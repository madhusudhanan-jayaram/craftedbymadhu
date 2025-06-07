
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Experience</span>
          </h2>
          
          <Card className="relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
            
            <div className="absolute left-8 top-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <Briefcase className="text-white" size={28} />
            </div>
            
            <CardHeader className="pl-28 pr-8 pt-8">
              <CardTitle className="text-3xl text-gray-800">Technology Leader</CardTitle>
              <div className="space-y-2">
                <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold">
                  Tata Consultancy Services
                </p>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>2007 - Present (17+ Years)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>India</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pl-28 pr-8 space-y-8">
              <div>
                <h4 className="font-bold text-xl mb-4 text-gray-800">Key Responsibilities</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">
                        Leading cross-functional teams in full stack development and AI innovation initiatives
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">
                        Architecting scalable web applications with modern technologies and AI integration
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">
                        Implementing agile methodologies and DevOps practices for improved project governance
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">
                        Bridging the gap between traditional enterprise systems and AI-driven solutions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h4 className="font-bold text-xl mb-4 text-gray-800">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 px-4 py-2">Team Leadership</Badge>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 px-4 py-2">Project Governance</Badge>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 px-4 py-2">Agile Methodologies</Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 px-4 py-2">DevOps</Badge>
                  <Badge className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 px-4 py-2">AI Integration</Badge>
                  <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 px-4 py-2">Enterprise Architecture</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
