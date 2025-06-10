
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
          
          <div className="text-center text-gray-600">
            <p>Experience details can be found in the Resume section.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
