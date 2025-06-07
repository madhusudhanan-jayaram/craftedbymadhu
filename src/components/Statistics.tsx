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
  return;
};