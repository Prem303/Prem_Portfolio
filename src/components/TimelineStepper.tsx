import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle } from "lucide-react";

const TimelineStepper = () => {
  const timeline = [
    {
      year: "2020",
      title: "Diploma Completed",
      subtitle: "PACE Institute of Technology and Sciences",
      description: "Successfully completed diploma in technology, building foundation in programming and software development.",
      status: "completed",
      type: "education"
    },
    {
      year: "2023", 
      title: "Bachelor's Degree",
      subtitle: "RISE KRISHNA SAI Prakasam Group",
      description: "Graduated with Bachelor of Technology, specializing in software development and modern programming practices.",
      status: "completed",
      type: "education"
    },
    {
      year: "2024",
      title: "Started Professional Journey",
      subtitle: "Orchasp Limited",
      description: "Joined as Associate Software Developer, working on scalable web applications with modern frameworks.",
      status: "completed",
      type: "career"
    },
    {
      year: "2024-25-26",
      title: "Multiple Projects",
      subtitle: "AI Platforms, Healthcare & E-commerce",
      description: "Developed healthcare applications, AI-powered interview simulators, video processing platforms, and full-featured e-commerce solutions including product management, payments, and order tracking.",
      status: "current",
      type: "projects"
    },
 {
  year: "Future",
  title: "Growth & Innovation",
  subtitle: "Full-Stack & Mobile Development",
  description: "Continuing to learn new technologies and frameworks, aiming to become a senior full-stack developer with strong expertise in Android and iOS application development.",
  status: "upcoming",
  type: "future"
}

  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-500";
      case "current": return "text-primary";
      case "upcoming": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  const getTypeGradient = (type: string) => {
    switch (type) {
      case "education": return "from-blue-500 to-indigo-500";
      case "career": return "from-green-500 to-emerald-500";
      case "projects": return "from-purple-500 to-pink-500";
      case "future": return "from-orange-500 to-red-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* 3D Floating 10 Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/20 floating-animation glow-effect"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-accent/20 floating-animation perspective-3d" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-24 w-16 h-16 rounded-full bg-secondary/20 floating-animation rotate-3d" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/4 right-24 w-14 h-14 rounded-full bg-muted/30 floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-12 h-12 rounded-full bg-primary/10 floating-animation" style={{ animationDelay: '2.7s' }}></div>
      {/* Extra 5 floating elements for a total of 10 */}
      <div className="absolute top-32 right-1/3 w-16 h-16 rounded-full bg-accent/30 floating-animation" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute bottom-24 left-1/4 w-14 h-14 rounded-full bg-secondary/30 floating-animation" style={{ animationDelay: '2.2s' }}></div>
      <div className="absolute top-1/3 left-1/2 w-10 h-10 rounded-full bg-primary/30 floating-animation" style={{ animationDelay: '3.2s' }}></div>
      <div className="absolute bottom-1/3 right-1/2 w-12 h-12 rounded-full bg-muted/40 floating-animation" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute top-1/2 right-20 w-10 h-10 rounded-full bg-accent/10 floating-animation" style={{ animationDelay: '2.5s' }}></div>

      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Professional Journey</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/30"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="relative flex items-start gap-6 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${getTypeGradient(item.type)} group-hover:scale-110 smooth-transition glow-effect`}>
                    {item.status === "completed" ? (
                      <CheckCircle className="h-8 w-8 text-white" />
                    ) : (
                      <Circle className="h-8 w-8 text-white" />
                    )}
                  </div>
                  
                  {/* Content card */}
                  <Card className="flex-1 card-shadow border-primary/20 hover:border-primary/40 smooth-transition scale-on-hover bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {item.year}
                          </Badge>
                          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                          <p className="text-primary font-medium">{item.subtitle}</p>
                        </div>
                        
                        <Badge 
                          variant={item.status === "current" ? "default" : "secondary"}
                          className={item.status === "current" ? "bg-primary" : ""}
                        >
                          {item.status}
                        </Badge>
                      </div>
                      
                      <p className="text-foreground/80 leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineStepper;