
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Madhu'
      };

      await emailjs.send(
        'service_3o5g6sa',
        'template_jg91ngw',
        templateParams,
        'EZDH0mBAwhriVBeoq'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              Get In <span className="text-orange-400">Touch</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Ready to discuss AI innovation, technology leadership, or potential collaborations? I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-3xl text-slate-50">Let's Connect</CardTitle>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Ready to discuss AI innovation, technology leadership, or potential collaborations? 
                    I'd love to hear from you.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-700">
                    <div className="w-12 h-12 bg-orange-400/10 rounded-xl flex items-center justify-center">
                      <Mail className="text-orange-400" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-50">Email</p>
                      <a href="mailto:madhusudhanan.jayaram@gmail.com" className="text-orange-400 hover:text-orange-300 font-medium hover:underline">
                        madhusudhanan.jayaram@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-700">
                    <div className="w-12 h-12 bg-orange-400/10 rounded-xl flex items-center justify-center">
                      <Phone className="text-orange-400" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-50">Phone</p>
                      <p className="text-slate-400">+91-7305099315</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-700">
                    <div className="w-12 h-12 bg-orange-400/10 rounded-xl flex items-center justify-center">
                      <Linkedin className="text-orange-400" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-50">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/madhusudhanan-jeyaram" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium hover:underline">
                        linkedin.com/in/madhusudhanan-jeyaram
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-slate-900 rounded-xl border border-slate-700">
                    <div className="w-12 h-12 bg-orange-400/10 rounded-xl flex items-center justify-center">
                      <Github className="text-orange-400" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-50">GitHub</p>
                      <a href="https://github.com/madhusudhanan-jayaram" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-medium hover:underline">
                        github.com/madhusudhanan-jayaram
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-3xl text-slate-50">Send a Message</CardTitle>
                <p className="text-slate-400 text-lg">
                  Have a project in mind? Let's discuss how we can work together.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-slate-300 block mb-2">First Name</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                        className="bg-slate-900 border-slate-600 text-slate-50 placeholder:text-slate-400 focus:border-orange-400" 
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-slate-300 block mb-2">Last Name</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        className="bg-slate-900 border-slate-600 text-slate-50 placeholder:text-slate-400 focus:border-orange-400" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-slate-300 block mb-2">Email</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@example.com" 
                      className="bg-slate-900 border-slate-600 text-slate-50 placeholder:text-slate-400 focus:border-orange-400" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-slate-300 block mb-2">Subject</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion" 
                      className="bg-slate-900 border-slate-600 text-slate-50 placeholder:text-slate-400 focus:border-orange-400" 
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold text-slate-300 block mb-2">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or how we can collaborate..." 
                      rows={4} 
                      className="bg-slate-900 border-slate-600 text-slate-50 placeholder:text-slate-400 focus:border-orange-400" 
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-400 hover:bg-orange-500 text-slate-900 font-semibold py-3 text-lg transition-all duration-300"
                  >
                    <Send className="mr-2" size={20} />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
