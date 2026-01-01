import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Award, Brain } from "lucide-react";
import { AnimatedSection } from "@/hooks/use-scroll-animation";

export const Statistics = () => {
  const stats = [{
    icon: TrendingUp,
    value: "18+",
    label: "Years Experience",
    description: "Professional development"
  }, {
    icon: Brain,
    value: "3",
    label: "AI Projects Deployed (CAPSTONE Self)",
    description: "Intelligent solutions"
  }, {
    icon: Award,
    value: "99%",
    label: "On-time Delivery",
    description: "Project success rate"
  }];

  return (
    <section id="statistics" className="py-12 md:py-20 bg-slate-800" aria-labelledby="statistics-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-10 md:mb-16">
            <h2 id="statistics-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              Key <span className="text-orange-400">Statistics</span>
            </h2>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4">
              Numbers that reflect my professional journey and achievements.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list" aria-label="Key statistics">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <AnimatedSection key={index} delay={index * 100}>
                  <Card className="bg-slate-900 border-slate-700 text-center h-full" role="listitem">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-orange-400/10 rounded-lg flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                        <IconComponent className="text-orange-400" size={32} />
                      </div>
                      <div className="text-3xl font-bold text-orange-400 mb-2">{stat.value}</div>
                      <div className="text-lg font-semibold text-slate-50 mb-1">{stat.label}</div>
                      <div className="text-sm text-slate-400">{stat.description}</div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
