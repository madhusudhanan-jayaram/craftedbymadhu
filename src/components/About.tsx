
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            About <span className="text-blue-600">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">
                    Designing Solutions, Not Just Visuals
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    With over 17 years of experience at Tata Consultancy Services, 
                    I've evolved from a passionate developer to a Technology Leader 
                    bridging traditional full stack engineering with cutting-edge AI innovation.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    My journey began with an MCA from SASTRA University in 2011, 
                    and since then, I've been committed to turning complex technical 
                    challenges into elegant, scalable solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Problem Solving</Badge>
                    <Badge variant="secondary">Team Leadership</Badge>
                    <Badge variant="secondary">Fast Learning</Badge>
                    <Badge variant="secondary">Ethical AI</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 text-blue-600">Education</h4>
                  <p className="text-muted-foreground">
                    Master of Computer Applications (MCA)<br />
                    SASTRA University, 2011
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 text-purple-600">Mission</h4>
                  <p className="text-muted-foreground">
                    Committed to ethical AI practices and continuous learning in 
                    AI/ML, NLP, and responsible AI implementation in enterprise environments.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 text-orange-600">Philosophy</h4>
                  <p className="text-muted-foreground">
                    Turning AI theory into production systems with robust architectures, 
                    always keeping human-centered design at the core.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
