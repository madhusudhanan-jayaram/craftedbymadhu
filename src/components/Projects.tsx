
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  return <section id="portfolio" className="py-20 bg-slate-800">
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
                <CardTitle className="text-2xl text-slate-50">Decisioning & Lending - Retail and Small Banking</CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Technical Lead - Banking Systems Modernization & Security Compliance</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">Led full-stack, cross-functional teams to deliver banking system solutions by migrating legacy applications to microservices, driving modernization initiatives while enhancing cybersecurity, ensuring compliance, and strengthening application governance for decisioning, lending, and credit line increase platforms.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Led full-stack teams to migrate legacy banking apps to scalable Tibco / microservices</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Enhanced cybersecurity posture through proactive vulnerability remediation</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Ensured strict regulatory compliance including PCI-DSS, KYC, and AML standards</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Implemented application governance to mitigate operational and security risks</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Drove adoption of microservice patterns (circuit breaker, API gateway) for resilience</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Fostered cross-functional collaboration across engineering, security, and architecture teams
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
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">HTML</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">CSS</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Javascript</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Microservice</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Angular</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Kubernetes</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Oracle</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">REST API</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Digital Banking Platform */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50">Collections & Recovery - Retail Banking</CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Java Full Stack Developer – Collections, Recovery & Payments Modernization
              </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">Contributed to the modernization of enterprise banking applications in Collections, Recovery, and Payments by migrating legacy systems to scalable Java/J2EE architectures. Led end-to-end development, integration, and CI/CD improvements, ensuring performance, compliance, and reliability in a highly regulated environment.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Legacy Modernization: Migrated mission-critical applications from Visual Basic to Java/J2EE, enhancing performance, security, and maintainability.</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Scalable Architecture: Applied MVC architecture and best practices in Java Full Stack to build scalable, modular, and resilient applications.</span>
                      </div>
                      
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">System Integration: Integrated mainframe systems with TIBCO ESB and modern web applications to ensure seamless data exchange and process consistency</span>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Cost Optimization: Reduced operational costs by modernizing legacy workflows and automating key processes within recovery and payments</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-lg mb-3 text-orange-400">Business Impact</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">$14.9M</div>
                      <div className="text-sm text-slate-400">Total Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">30%+</div>
                      <div className="text-sm text-slate-400">Reduction in Cyber Risks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">40%</div>
                      <div className="text-sm text-slate-400">Reduction in Deployment Time</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">JAVA</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">J2EE</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Oracle</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Choridant</Badge>
                    
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Tibco</Badge>
                    
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
