
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              About <span className="text-orange-400">Me</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Technology Leader with 17+ years of experience, passionate about AI innovation and intelligent system design.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-50">
                    Technology Leadership & AI Innovation
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    With over 17 years of experience at Tata Consultancy Services, 
                    I've evolved from a passionate developer to a Technology Leader 
                    specializing in AI-driven solutions and intelligent system architecture.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    My journey began with an MCA from SASTRA University in 2011. 
                    Since then, I've been committed to exploring the frontiers of artificial intelligence, 
                    turning complex AI concepts into practical, scalable enterprise solutions.
                  </p>
                </CardContent>
              </Card>
              
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20">AI Innovation</Badge>
                <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20">Technology Leadership</Badge>
                <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20">Machine Learning</Badge>
                <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20">System Architecture</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">17+</div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">4+</div>
                  <div className="text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
                  <div className="text-slate-400">Team Members Led</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                  <div className="text-slate-400">AI Solutions Deployed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
