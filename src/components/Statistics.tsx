
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

export const Statistics = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "17+",
      label: "Years Experience",
      description: "Professional development"
    },
    {
      icon: Users,
      value: "50+",
      label: "Projects Completed",
      description: "Successful deliveries"
    },
    {
      icon: Award,
      value: "25+",
      label: "Team Members Led",
      description: "Leadership experience"
    },
    {
      icon: Clock,
      value: "99%",
      label: "On-time Delivery",
      description: "Project success rate"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-slate-900 border-slate-700 text-center group hover:border-orange-400 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-400/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-400/20 transition-colors duration-300">
                    <stat.icon className="text-orange-400" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-slate-50 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-orange-400 mb-1">{stat.label}</div>
                  <div className="text-slate-400 text-sm">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
