
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
export const Contact = () => {
  return <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Touch</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-40"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-3xl text-gray-800">Let's Connect</CardTitle>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Ready to discuss AI innovation, technology leadership, or potential collaborations? 
                    I'd love to hear from you.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">madhusudhanan.jayaram@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">+1 -972-946-6451</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Linkedin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/madhusudhanan-jeyaram" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                        linkedin.com/in/madhusudhanan-jeyaram
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Github className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">GitHub</p>
                      <a href="https://github.com/madhusudhanan-jayaram" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
                        github.com/madhusudhanan-jayaram
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full translate-y-12 -translate-x-12 opacity-40"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl text-gray-800">Send a Message</CardTitle>
                <p className="text-gray-600 text-lg">
                  Have a project in mind? Let's discuss how we can work together.
                </p>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">First Name</label>
                    <Input placeholder="John" className="border-2 focus:border-purple-400" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">Last Name</label>
                    <Input placeholder="Doe" className="border-2 focus:border-purple-400" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" className="border-2 focus:border-purple-400" />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">Subject</label>
                  <Input placeholder="Project Discussion" className="border-2 focus:border-purple-400" />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-2">Message</label>
                  <Textarea placeholder="Tell me about your project or how we can collaborate..." rows={4} className="border-2 focus:border-purple-400" />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
