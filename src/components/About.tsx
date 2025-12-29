import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const About = () => {
  return <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              About <span className="text-orange-400">Me</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Application Architect specializing in AI-driven and cloud-native systems.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    I'm an Application Architect specializing in AI-driven and cloud-native systems, with over a decade of experience building scalable, secure, and high-impact platforms in the financial services domain.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    My work sits at the intersection of software architecture, AI engineering, and enterprise transformation. I design systems that not only perform at scale but also align with business goals, regulatory requirements, and long-term maintainability.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    I've led modernization initiatives across banking platforms — transforming legacy applications into cloud-native, resilient systems while integrating AI, automation, and data-driven decisioning. My focus is on building solutions that are reliable, secure, and future-ready.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    I enjoy solving complex problems, mentoring teams, and bridging the gap between business vision and technical execution. Whether it's designing AI-enabled platforms or modernizing core systems, I approach every challenge with clarity, ownership, and impact in mind.
                  </p>
                </CardContent>
              </Card>
              
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20">AI Engineering</Badge>
                <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20">Cloud-Native Systems</Badge>
                <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20">Enterprise Transformation</Badge>
                <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20">System Architecture</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">4+</div>
                  <div className="text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
                  <div className="text-slate-400">Team Members Led</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">0+</div>
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
    </section>;
};
