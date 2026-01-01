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
                  <h4 className="font-semibold text-lg mb-3 text-orange-400">Model Performance Results</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">92%</div>
                      <div className="text-sm text-slate-400">Model Accuracy</div>
                      <div className="text-xs text-slate-500 mt-1">Gradient Boosting Classifier</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">89%</div>
                      <div className="text-sm text-slate-400">Precision Score</div>
                      <div className="text-xs text-slate-500 mt-1">Minimizing False Approvals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400">91%</div>
                      <div className="text-sm text-slate-400">Recall Score</div>
                      <div className="text-xs text-slate-500 mt-1">Identifying Valid Approvals</div>
                    </div>
                  </div>
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

            {/* LLM Integration & AI Application Development */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50 flex items-center gap-2">
                  🤖 LLM Integration & AI Application Development
                </CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Build System with ChatGPT API</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">An experimental project focused on understanding how large language models can be integrated into real-world applications using APIs. The project explores prompt design, request orchestration, and response handling for building intelligent AI-powered systems.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">Key Highlights</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Integrated ChatGPT APIs to build LLM-powered workflows</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Experimented with prompt engineering and response optimization</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Designed modular architecture for extensibility and reuse</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Gained hands-on experience with LLM-driven application patterns</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Python</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">OpenAI API</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">REST APIs</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="bg-slate-800 border-orange-400/20 text-orange-400 hover:bg-orange-400/10">
                    <a href="https://github.com/madhusudhanan-jayaram/buildingsystem_with_chatgpt_api" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      GitHub Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Damage Detection */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50 flex items-center gap-2">
                  🚗 Vehicle Damage Detection
                </CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Deep Learning | Computer Vision | Insurance Domain</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">An AI-based solution to automatically detect vehicle damage from images, designed to support faster insurance claim assessments and reduce manual inspection efforts.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">Key Highlights</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Built a deep learning model for image-based damage detection</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Designed REST APIs for inference using FastAPI</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Focused on real-time prediction and scalability</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Python</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">TensorFlow/Keras</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">FastAPI</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">OpenCV</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="bg-slate-800 border-orange-400/20 text-orange-400 hover:bg-orange-400/10">
                    <a href="https://github.com/madhusudhanan-jayaram/deeplearning_vehicle_damage_detection" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      GitHub Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Chat Analyzer */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50 flex items-center gap-2">
                  💬 WhatsApp Chat Analyzer
                </CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Natural Language Processing | Analytics</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">An NLP-driven analytics platform that extracts insights from WhatsApp chat data, helping users understand communication patterns, sentiment trends, and engagement behavior.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">Key Highlights</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Implemented NLP pipelines for text cleaning, analysis, and visualization</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Generated insights such as sentiment trends, message frequency, and activity timelines</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Designed a simple, interactive analytics dashboard</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Python</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">NLP libraries</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">pandas</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">matplotlib</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Streamlit</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="bg-slate-800 border-orange-400/20 text-orange-400 hover:bg-orange-400/10">
                    <a href="https://github.com/madhusudhanan-jayaram/whatsapp_analyser" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      GitHub Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stock Price Prediction */}
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-50 flex items-center gap-2">
                  📈 Stock Price Prediction
                </CardTitle>
                <p className="text-lg text-orange-400 font-semibold">Time Series Forecasting</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-400 leading-relaxed">A machine learning project focused on forecasting stock price movements using historical data and time-series modeling techniques.</p>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-slate-50">Key Highlights</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Built predictive models using historical stock market data</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Applied feature engineering and time-series analysis</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-400">Evaluated model performance using standard regression metrics</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-slate-50">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Python</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">pandas</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">scikit-learn</Badge>
                    <Badge className="bg-orange-400/10 text-orange-400 border border-orange-400/20">Time-series modeling</Badge>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="bg-slate-800 border-orange-400/20 text-orange-400 hover:bg-orange-400/10">
                    <a href="https://github.com/madhusudhanan-jayaram/stock_prediction_time_series" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github size={16} />
                      GitHub Repo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
