
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          
          <Card className="relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            
            <CardHeader>
              <CardTitle className="text-2xl">Collections and Recovery System</CardTitle>
              <p className="text-lg text-blue-600 font-semibold">Citi Bank - Enterprise Modernization</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Led the comprehensive modernization of legacy banking systems, transforming 
                outdated infrastructure into a robust, scalable Java/J2EE architecture with 
                significant performance and cost improvements.
              </p>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">Key Achievements</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Modernized legacy banking systems to Java/J2EE architecture
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Implemented Service Worker for enhanced performance
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Enhanced security protocols and compliance standards
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Improved team productivity through agile methodologies
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3 text-green-700">Impact & Results</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">$1.5M</div>
                    <div className="text-sm text-muted-foreground">Annual Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">99%</div>
                    <div className="text-sm text-muted-foreground">System Uptime</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Java/J2EE</Badge>
                  <Badge variant="secondary">Spring Boot</Badge>
                  <Badge variant="secondary">Angular</Badge>
                  <Badge variant="secondary">Service Workers</Badge>
                  <Badge variant="secondary">DevOps</Badge>
                  <Badge variant="secondary">Agile</Badge>
                  <Badge variant="secondary">Enterprise Architecture</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
