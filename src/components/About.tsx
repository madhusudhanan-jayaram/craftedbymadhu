
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Target, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Me</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full -translate-y-12 translate-x-12 opacity-60"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    Designing Solutions, Not Just Visuals
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    With over 17 years of experience at Tata Consultancy Services, 
                    I've evolved from a passionate developer to a Technology Leader 
                    bridging traditional full stack engineering with cutting-edge AI innovation.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    My journey began with an MCA from SASTRA University in 2011, 
                    and since then, I've been committed to turning complex technical 
                    challenges into elegant, scalable solutions.
                  </p>
                </CardContent>
              </Card>
              
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-2">Problem Solving</Badge>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2">Team Leadership</Badge>
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-2">Fast Learning</Badge>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2">Ethical AI</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center -translate-y-8 -translate-x-8">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <CardContent className="p-6 pt-8">
                  <h4 className="font-bold text-lg mb-2 text-blue-600">Education</h4>
                  <p className="text-gray-600">
                    Master of Computer Applications (MCA)<br />
                    <span className="font-semibold">SASTRA University, 2011</span>
                  </p>
                </CardContent>
              </Card>
              
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center -translate-y-8 -translate-x-8">
                  <Target className="text-white" size={24} />
                </div>
                <CardContent className="p-6 pt-8">
                  <h4 className="font-bold text-lg mb-2 text-purple-600">Mission</h4>
                  <p className="text-gray-600">
                    Committed to ethical AI practices and continuous learning in 
                    AI/ML, NLP, and responsible AI implementation in enterprise environments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center -translate-y-8 -translate-x-8">
                  <Heart className="text-white" size={24} />
                </div>
                <CardContent className="p-6 pt-8">
                  <h4 className="font-bold text-lg mb-2 text-orange-600">Philosophy</h4>
                  <p className="text-gray-600">
                    Turning AI theory into production systems with robust architectures, 
                    always keeping human-centered design at the core.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
