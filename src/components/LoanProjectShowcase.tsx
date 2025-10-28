import { Bot, ExternalLink, Github, Code2, Database, Brain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const LoanProjectShowcase = () => {
  const techStack = [
    { name: "Python 3.11", icon: Code2 },
    { name: "Django 5.x", icon: Code2 },
    { name: "scikit-learn", icon: Brain },
    { name: "pandas", icon: Database },
    { name: "joblib", icon: Database },
    { name: "crispy-bootstrap5", icon: Sparkles },
  ];

  const highlights = [
    "ML model trained on applicant and loan features to predict approvals",
    "Custom Django front end built by me with crispy-bootstrap5 for a smooth user experience",
    "Real-time prediction dashboard with probability scores and explanations",
    "Config-driven architecture — scalable and API-ready",
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Floating AI Bot Icon */}
      <div className="absolute top-8 right-8 animate-[float_3s_ease-in-out_infinite]">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
          <Bot className="w-16 h-16 text-primary relative z-10" />
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Loan Approval Prediction
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-2">
            End-to-End AI Solution
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A smart ML-powered web app that predicts loan approvals with real-time explanations
          </p>
        </div>

        {/* Main Content Card */}
        <Card className="border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl animate-scale-in delay-100">
          <CardContent className="p-8 md:p-12">
            {/* Key Highlights */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                Key Highlights
              </h3>
              <ul className="space-y-4">
                {highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-primary" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-105 animate-fade-in cursor-default"
                    style={{ animationDelay: `${(index + 6) * 100}ms` }}
                  >
                    <tech.icon className="w-4 h-4 mr-2" />
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="mb-10 p-6 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 animate-fade-in delay-300">
              <p className="text-lg font-medium mb-4 italic">
                "Proud to have combined frontend development and machine learning to build a complete end-to-end project."
              </p>
              <p className="text-sm text-muted-foreground">
                Special thanks to <span className="font-semibold text-foreground">Ramya Dinesh</span>,{" "}
                <span className="font-semibold text-foreground">Hope Artificial Intelligence Pvt Ltd</span>, and{" "}
                <span className="font-semibold text-foreground">Ramisha Rani K</span> for their constant support.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in delay-500">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                asChild
              >
                <a
                  href="https://github.com/yourusername/loan-approval-prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  GitHub Repository
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://youtube.com/watch?v=YOUR_VIDEO_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  YouTube Demo
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};
