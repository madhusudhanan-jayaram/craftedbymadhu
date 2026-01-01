import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

export const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-slate-900" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-10 md:mb-16">
            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              About <span className="text-orange-400">Me</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4">
              Application Architect specializing in AI-driven and cloud-native systems.
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimatedSection animation="slide-right" delay={100}>
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
                
                <div className="flex flex-wrap gap-3" role="list" aria-label="Core competencies">
                  <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20" role="listitem">AI Engineering</Badge>
                  <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20" role="listitem">Cloud-Native Systems</Badge>
                  <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20" role="listitem">Enterprise Transformation</Badge>
                  <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20" role="listitem">System Architecture</Badge>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" delay={200} className="space-y-6 mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-4 sm:gap-6" role="list" aria-label="Key achievements">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg" role="listitem">
                  <div className="text-3xl font-bold text-orange-400 mb-2" aria-label="4 plus">4+</div>
                  <div className="text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg" role="listitem">
                  <div className="text-3xl font-bold text-orange-400 mb-2" aria-label="25 plus">25+</div>
                  <div className="text-slate-400">Team Members Led</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg" role="listitem">
                  <div className="text-3xl font-bold text-orange-400 mb-2" aria-label="0 plus">0+</div>
                  <div className="text-slate-400">AI Solutions Deployed</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg" role="listitem">
                  <div className="text-3xl font-bold text-orange-400 mb-2" aria-label="5 plus">5+</div>
                  <div className="text-slate-400">Awards Received</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
