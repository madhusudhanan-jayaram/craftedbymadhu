
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

export const Statistics = () => {
  const stats = [{
    icon: TrendingUp,
    value: "17+",
    label: "Years Experience",
    description: "Professional development"
  }, {
    icon: Users,
    value: "50+",
    label: "Projects Completed",
    description: "Successful deliveries"
  }, {
    icon: Award,
    value: "25+",
    label: "Team Members Led",
    description: "Leadership experience"
  }, {
    icon: Clock,
    value: "99%",
    label: "On-time Delivery",
    description: "Project success rate"
  }];

  return (
    <section id="statistics" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              Key <span className="text-orange-400">Statistics</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Numbers that reflect my professional journey and achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-slate-900 border-slate-700 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-orange-400/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-orange-400" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-orange-400 mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-slate-50 mb-1">{stat.label}</div>
                    <div className="text-sm text-slate-400">{stat.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
