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
            {/* Loan Approval Prediction */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50">Loan Approval Prediction</CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Machine Learning Engineer - End-to-End AI Solution</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">
                  A smart ML-powered web app that predicts loan approvals with real-time explanations. 
                  This project combines frontend development and machine learning to deliver an end-to-end solution for automated loan decisioning.
                </p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">Key Highlights</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">ML model trained on applicant and loan features to predict approvals</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Custom Django front end built with crispy-bootstrap5 for a smooth user experience</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Real-time prediction dashboard with probability scores and explanations</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Config-driven architecture — scalable and API-ready</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-lg mb-3 text-orange-400">Acknowledgments</h4>
                  <p className="text-slate-400 leading-relaxed italic">
                    "Proud to have combined frontend development and machine learning to build a complete end-to-end project."
                  </p>
                  <p className="text-sm text-slate-400 mt-3">
                    Special thanks to <span className="font-semibold text-slate-300">Ramya Dinesh</span>,{" "}
                    <span className="font-semibold text-slate-300">Hope Artificial Intelligence Pvt Ltd</span>, and{" "}
                    <span className="font-semibold text-slate-300">Ramisha Rani K</span> for their constant support.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Python 3.11</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Django 5.x</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">scikit-learn</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">pandas</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">joblib</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">crispy-bootstrap5</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="bg-slate-800 border-orange-400/20 text-orange-400 hover:bg-orange-400/10">
                    <a href="https://github.com/yourusername/loan-approval-prediction" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      GitHub Repo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="bg-slate-800 border-orange-400/20 text-orange-400 hover:bg-orange-400/10">
                    <a href="https://youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      YouTube Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* CKD Prediction Project */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50 flex items-center gap-2">
                  💝 Chronic Kidney Disease Prediction
                </CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Machine Learning Engineer - Healthcare Data Science</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">
                  This project holds a special place in my heart. When I learned about the silent progression of chronic kidney disease 
                  and how early detection could save countless lives, I knew I had to do something. Combining my passion for technology 
                  with the desire to make a meaningful impact, I built a machine learning model that can predict CKD with remarkable accuracy. 
                  It's where empathy meets engineering - using data science to give hope to patients and families.
                </p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">💖 The Journey</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">🧹 Cleaned and preprocessed messy clinical datasets with missing values and inconsistencies</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">🔬 Engineered features from 24 clinical parameters including creatinine, hemoglobin, and protein levels</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">🤖 Trained and compared multiple algorithms: SVM, Random Forest, and Logistic Regression</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">⚡ Used GridSearchCV for hyperparameter optimization to squeeze out every bit of performance</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">📊 Implemented cross-validation and statistical analysis for robust model evaluation</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">💡 Created interpretable visualizations to help medical professionals understand predictions</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-lg mb-3 text-orange-400">🎯 Results That Matter</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">97%</div>
                      <div className="text-sm text-slate-400">Model Accuracy</div>
                      <div className="text-xs text-slate-500 mt-1">Random Forest Classifier</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">95%</div>
                      <div className="text-sm text-slate-400">Precision Score</div>
                      <div className="text-xs text-slate-500 mt-1">Minimizing False Positives</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">94%</div>
                      <div className="text-sm text-slate-400">Recall Score</div>
                      <div className="text-xs text-slate-500 mt-1">Catching True Cases</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-400/5 to-slate-800/50 p-6 rounded-lg border border-orange-400/20">
                  <h4 className="font-semibold text-lg mb-3 text-orange-400">Why This Project Means Everything</h4>
                  <p className="text-slate-300 leading-relaxed italic">
                    "Every percentage point in accuracy could mean earlier intervention for someone's loved one. 
                    This isn't just about algorithms and data - it's about using technology to extend and improve lives. 
                    The intersection of compassionate healthcare and cutting-edge machine learning is where I found my purpose."
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Python</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Pandas</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Scikit-learn</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">GridSearchCV</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Random Forest</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">SVM</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">NumPy</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Matplotlib</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Seaborn</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="bg-slate-800 border-orange-400/20 text-orange-400 hover:bg-orange-400/10">
                    <a href="https://github.com/madhusudhanan-jayaram/CKD-Prediction" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      GitHub Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* EMI Calculator */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50 flex items-center gap-2">
                  💰 EMI Calculator
                </CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Frontend Developer - Financial Planning Tool</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">An intuitive EMI calculator to help users plan their loans effectively. This web application provides dynamic calculations for various loan types with real-time results display.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">🏠 Calculate EMI for personal, home, auto, or education loans</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">📊 Dynamic input for principal amount, interest rate, and loan tenure</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">💡 Displays monthly EMI, total interest payable, and total repayment amount</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">User-friendly interface with responsive design</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">HTML</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">CSS</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">JavaScript</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Google AI Studio</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Vibe Coding</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="bg-slate-800 border-orange-400/20 text-orange-400 hover:bg-orange-400/10">
                    <a href="https://madhusudhanan-jayaram.github.io/EMI-Calculator/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Site
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="bg-slate-800 border-orange-400/20 text-orange-400 hover:bg-orange-400/10">
                    <a href="https://github.com/madhusudhanan-jayaram/EMI-Calculator" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      GitHub Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Customer Service - Retail Banking */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50 flex items-center gap-2">
                  🏦 Customer Service - Retail Banking
                </CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Technical Lead - Citi Customer Service App Modernization</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">Led the modernization of a Citi customer service app, migrating it from a legacy Java system to a modern tech stack using Angular and Spring Boot. The app supports Citi reps in handling customer queries for retail banking.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">🔧 What I Did</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Led the frontend and backend migration efforts</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Rebuilt UI in Angular for a faster, user-friendly experience</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Redesigned backend using Spring Boot and REST APIs</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Integrated secure login with role-based access</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Coordinated with product and infra teams for smooth delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-lg mb-3 text-orange-400">Performance Metrics</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">$250K</div>
                      <div className="text-sm text-slate-400">Annual Operational Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">$300K</div>
                      <div className="text-sm text-slate-400">Annual IT Support & Upgrade Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">99.9%</div>
                      <div className="text-sm text-slate-400">Uptime (Preventing $150K/year losses)</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Angular</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Spring Boot</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Java</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">REST APIs</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Cloud Native Application</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">HashiCorp Vault</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Tekton pipelines</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Harness</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Micro Frontend</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Modular Federation Webpack</Badge>
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
                <p className="text-slate-400 leading-relaxed">Led the modernization of Citi's internal application used for credit card and personal loan decisioning. The legacy platform, built on vanilla JS, HTML/CSS, and TIBCO, was migrated to a Spring Boot stack. This application is used by internal users to evaluate and decision customer applications for retail and small business banking products.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">🔧 What I Did</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Led the frontend migration from the legacy stack to HTML, CSS, JavaScript, TIBCO, and Spring Boot microservices, improving usability and performance</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Designed and integrated internal services to fetch letters, Credit Bureau data, ECM documents, credit history, KYC, and income verification</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Implemented RBAC and decision logic for bank cards, business cards, and personal loans</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Coordinated with the rule engine team for seamless credit decisioning logic integration</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Collaborated with product and risk teams to ensure policy compliance and audit traceability</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Part of the defense team to fix security and network issues, ensure compliance, upgrade outdated software (EOVS), and keep open-source frameworks up to date</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-lg mb-3 text-orange-400">Performance Metrics</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">40%</div>
                      <div className="text-sm text-slate-400">Credit Decisioning Time Reduction</div>
                      <div className="text-xs text-slate-500 mt-1">($350K Annual Savings)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">65%</div>
                      <div className="text-sm text-slate-400">System Response Time Improvement</div>
                      <div className="text-xs text-slate-500 mt-1">($200K Annual Savings)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">70%</div>
                      <div className="text-sm text-slate-400">Legacy System Dependency Reduction</div>
                      <div className="text-xs text-slate-500 mt-1">($400K Annual Savings)</div>
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
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Cloud Native Application</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">HashiCorp Vault</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Jenkin pipelines</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Harness</Badge>
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
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">🔧 What I Did</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Led migration from VB to Java Full Stack, improving system scalability and maintainability</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Integrated TIBCO services for seamless data exchange and process orchestration</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Implemented business rules for collections decisioning and workflow automation</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Enhanced UI/UX to improve agent efficiency and reduce error rates</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Collaborated with risk and compliance teams to ensure policy adherence and audit readiness</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-lg mb-3 text-orange-400">Performance Metrics</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">40%</div>
                      <div className="text-sm text-slate-400">Application Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">$1.5M+</div>
                      <div className="text-sm text-slate-400">Operational Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">40%</div>
                      <div className="text-sm text-slate-400">Deployment Cycle Time</div>
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

            {/* Automatic Railway Crossing System */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50">🚦 Automatic Railway Crossing System</CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Embedded Systems Developer - Safety Automation Project</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">Designed and implemented an automatic railway crossing gate control system using Embedded C. The system uses IR sensors to detect approaching and departing trains and automatically opens/closes the railway gate without human intervention.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">IR sensors detect train presence on both sides of the track</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Gate motor controlled via microcontroller based on sensor signals</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Real-time automation enhances safety and reduces manual errors</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Ensures timely operation of gates during train arrival and departure</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <h4 className="font-semibold text-lg mb-3 text-orange-400">Project Benefits</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✅</span>
                        <span className="text-slate-400 text-sm">Prevents accidents by automatically closing the gate when a train is detected</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✅</span>
                        <span className="text-slate-400 text-sm">Minimizes human error in manual operations</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✅</span>
                        <span className="text-slate-400 text-sm">Cost-effective and scalable for rural/urban railway crossings</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-400 mr-2">✅</span>
                        <span className="text-slate-400 text-sm">Demonstrates real-time embedded systems and sensor integration</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Embedded C</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">IR Sensors</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Microcontroller</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">8051/AVR/Arduino</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Motor Driver</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
