
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              My <span className="text-orange-400">Portfolio</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Showcase of my recent projects and achievements in technology leadership and development.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Collections and Recovery System */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50">Decisioning and Lending</CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Citi Bank - Enterprise Modernization</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">Led the modernization of critical banking applications (Collections, Recovery, Payments) by migrating legacy systems to Java/J2EE, delivering secure, scalable solutions that aligned with business goals. Drove technical excellence through architecture redesign, performance optimization, and cross-functional collaboration.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">Key Achievements</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Modernized legacy banking systems to Java/J2EE architecture</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Implemented Service Worker for enhanced performance
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Enhanced security protocols and compliance standards
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Improved team productivity through agile methodologies
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-lg mb-3 text-orange-400">Impact & Results</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">$1.5M</div>
                      <div className="text-sm text-slate-400">Annual Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">99%</div>
                      <div className="text-sm text-slate-400">System Uptime</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Java/J2EE</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">DevOps</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Agile</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Enterprise Architecture</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Credit Decisioning Platform */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50">Collections and Recovery System</CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Financial Services - Machine Learning Implementation</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">Architected and developed an intelligent credit decisioning system that leverages machine learning algorithms to automate loan approvals and risk assessment. The platform processes thousands of applications daily while maintaining regulatory compliance and reducing decision time from days to minutes.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Real-time credit scoring using ML algorithms</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Automated fraud detection and prevention
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Regulatory compliance monitoring
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Risk-based pricing optimization
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Dynamic lending criteria adjustment
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Comprehensive audit trail system
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-lg mb-3 text-orange-400">Business Impact</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">85%</div>
                      <div className="text-sm text-slate-400">Faster Decision Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">30%</div>
                      <div className="text-sm text-slate-400">Reduced Default Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">$3.2M</div>
                      <div className="text-sm text-slate-400">Annual Revenue Increase</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Python</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">TensorFlow</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Apache Kafka</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">PostgreSQL</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Docker</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Kubernetes</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">AWS</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">REST API</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Digital Banking Platform */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50">Digital Banking Platform</CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Multi-Tenant SaaS - Cloud-Native Architecture</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">Designed and implemented a comprehensive digital banking platform serving multiple financial institutions. Built with microservices architecture on cloud infrastructure, the platform provides white-label banking solutions with real-time transaction processing, advanced analytics, and seamless third-party integrations.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">Platform Capabilities</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Multi-tenant architecture with customizable branding</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Real-time transaction processing and settlement
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Advanced fraud detection and monitoring
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Open Banking API integrations
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Mobile-first responsive design
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">
                          Comprehensive analytics dashboard
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-lg mb-3 text-orange-400">Performance Metrics</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">50+</div>
                      <div className="text-sm text-slate-400">Partner Banks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">2M+</div>
                      <div className="text-sm text-slate-400">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">99.9%</div>
                      <div className="text-sm text-slate-400">API Uptime</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Node.js</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">React Native</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Microservices</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Redis</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">MongoDB</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">GraphQL</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Azure</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Blockchain</Badge>
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
