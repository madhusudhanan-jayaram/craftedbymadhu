
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Let's Connect</CardTitle>
                  <p className="text-muted-foreground">
                    Ready to discuss AI innovation, technology leadership, or potential collaborations? 
                    I'd love to hear from you.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">madhusudhanan.jeyaram@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 XXX XXX XXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Linkedin className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a href="#" className="text-blue-600 hover:underline">
                        linkedin.com/in/madhusudhanan-jeyaram
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Github className="text-gray-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a href="#" className="text-blue-600 hover:underline">
                        github.com/madhusudhanan-jeyaram
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Have a project in mind? Let's discuss how we can work together.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Project Discussion" />
                </div>
                
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Tell me about your project or how we can collaborate..." rows={4} />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
