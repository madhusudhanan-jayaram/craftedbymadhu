
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Target, Heart, MapPin, Calendar, Mail, Phone } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              About <span className="text-orange-400">Me</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Passionate technology leader with 17+ years of experience in full-stack development and AI innovation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-50">
                    Designing Solutions, Not Just Visuals
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    With over 17 years of experience at Tata Consultancy Services, 
                    I've evolved from a passionate developer to a Technology Leader 
                    bridging traditional full stack engineering with cutting-edge AI innovation.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    My journey began with an MCA from SASTRA University in 2011, 
                    and since then, I've been committed to turning complex technical 
                    challenges into elegant, scalable solutions.
                  </p>
                </CardContent>
              </Card>
              
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20">Problem Solving</Badge>
                <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20">Team Leadership</Badge>
                <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20">Fast Learning</Badge>
                <Badge className="bg-orange-400/10 text-orange-400 hover:bg-orange-400/20 px-4 py-2 border border-orange-400/20">Ethical AI</Badge>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">17+</div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                  <div className="text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
                  <div className="text-slate-400">Team Members Led</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">10+</div>
                  <div className="text-slate-400">Technologies Mastered</div>
                </div>
              </div>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-400/10 rounded-lg flex items-center justify-center">
                      <Calendar className="text-orange-400" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-50">Date of Birth</p>
                      <p className="text-slate-400">March 15, 1985</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-400/10 rounded-lg flex items-center justify-center">
                      <MapPin className="text-orange-400" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-50">Location</p>
                      <p className="text-slate-400">Chennai, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-400/10 rounded-lg flex items-center justify-center">
                      <Mail className="text-orange-400" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-50">Email</p>
                      <a href="mailto:madhusudhanan.jayaram@gmail.com" className="text-orange-400 hover:text-orange-300">
                        madhusudhanan.jayaram@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-400/10 rounded-lg flex items-center justify-center">
                      <Phone className="text-orange-400" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-50">Phone</p>
                      <p className="text-slate-400">+91-7305099315</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
