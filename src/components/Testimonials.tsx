
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager, Citi Bank",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=150&h=150&fit=crop&crop=face",
      content: "Madhusudhanan's leadership in modernizing our banking systems was exceptional. His technical expertise and ability to manage complex projects delivered outstanding results.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Senior Developer, TCS",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "Working under Madhu's guidance has been transformative. His approach to AI integration and system architecture is both innovative and practical.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Business Analyst",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The AI solutions Madhusudhanan implemented for our organization resulted in significant cost savings and improved efficiency. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "CTO, FinTech Startup",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Madhu's expertise in full-stack development and team leadership helped us scale our platform successfully. His attention to detail is remarkable.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
              Client <span className="text-orange-400">Testimonials</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              What my colleagues and clients say about working with me.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 relative">
                <div className="absolute top-4 right-4">
                  <Quote className="text-orange-400/20" size={24} />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-orange-400 fill-current" size={16} />
                    ))}
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-50">{testimonial.name}</h4>
                      <p className="text-slate-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
