import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Associate Software Developer",
    company: "Orchasp Limited",
    duration: "June 2024 - August 2025",
    location: "19 & 20, Moti Valley, Trimulgherry, Secunderabad - 500 015, Telangana, INDIA",
    description: "Developed and deployed scalable web applications at Orchasp Ltd by leveraging modern frameworks and collaborating with cross-functional teams to enhance operational efficiency."
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute top-16 left-10 w-20 h-20 rounded-full bg-primary/20 floating-animation glow-effect"></div>
      <div className="absolute bottom-16 right-10 w-32 h-32 rounded-full bg-accent/20 floating-animation perspective-3d" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-24 w-16 h-16 rounded-full bg-secondary/20 floating-animation rotate-3d" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-shadow border-primary/20 hover:border-primary/40 smooth-transition scale-on-hover bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 text-foreground">{experience.title}</CardTitle>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Building2 className="h-5 w-5" />
                    <span className="text-lg font-semibold">{experience.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  Current Role
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                {experience.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;