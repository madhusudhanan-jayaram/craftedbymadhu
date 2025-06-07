
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
          
          <div className="space-y-8">
            {/* Collections and Recovery System */}
            <Card className="relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              
              <CardHeader>
                <CardTitle className="text-2xl">Collections and Recovery System</CardTitle>
                <p className="text-lg text-blue-600 font-semibold">Citi Bank - Enterprise Modernization</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">Led the modernization of critical banking applications (Collections, Recovery, Payments) by migrating legacy systems to Java/J2EE, delivering secure, scalable solutions that aligned with business goals. Drove technical excellence through architecture redesign, performance optimization, and cross-functional collaboration.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4">Key Achievements</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Modernized legacy banking systems to Java/J2EE architecture</span>
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
                    <Badge variant="secondary">DevOps</Badge>
                    <Badge variant="secondary">Agile</Badge>
                    <Badge variant="secondary">Enterprise Architecture</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Credit Decisioning Platform */}
            <Card className="relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -translate-y-16 -translate-x-16 opacity-50"></div>
              
              <CardHeader>
                <CardTitle className="text-2xl">AI-Powered Credit Decisioning Platform</CardTitle>
                <p className="text-lg text-emerald-600 font-semibold">Financial Services - Machine Learning Implementation</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">Architected and developed an intelligent credit decisioning system that leverages machine learning algorithms to automate loan approvals and risk assessment. The platform processes thousands of applications daily while maintaining regulatory compliance and reducing decision time from days to minutes.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">Real-time credit scoring using ML algorithms</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          Automated fraud detection and prevention
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          Regulatory compliance monitoring
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          Risk-based pricing optimization
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          Dynamic lending criteria adjustment
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">
                          Comprehensive audit trail system
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-emerald-700">Business Impact</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-600">85%</div>
                      <div className="text-sm text-muted-foreground">Faster Decision Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">30%</div>
                      <div className="text-sm text-muted-foreground">Reduced Default Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">$3.2M</div>
                      <div className="text-sm text-muted-foreground">Annual Revenue Increase</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">Apache Kafka</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">REST API</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
