
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
              Technology Leader with 17+ years of experience in driving innovation through AI and intelligent systems.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    As a passionate Technology Leader, I bridge traditional engineering with cutting-edge AI solutions 
                    to transform business challenges into scalable opportunities. My expertise spans full-stack development, 
                    team leadership, and AI innovation.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    I specialize in architecting scalable web applications, implementing agile methodologies, 
                    and leading cross-functional teams to deliver exceptional results in enterprise environments.
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
                  <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
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
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
                  <div className="text-slate-400">Awards Received</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
