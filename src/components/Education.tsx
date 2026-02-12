import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "RISE KRISHNA SAI Prakasam Group of Institutions",
      location: "NH-5, Valluru, Ongole, Andhra Pradesh 523372",
      year: "2023",
      grade: "6",
      type: "Undergraduate",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      degree: "Diploma",
      institution: "PACE Institute of Technology and Sciences",
      location: "College in Vallur, Andhra Pradesh",
      year: "2020",
      grade: "7",
      type: "Diploma",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* 3D Floating 5 Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/20 floating-animation glow-effect"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-accent/20 floating-animation perspective-3d" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-24 w-16 h-16 rounded-full bg-secondary/20 floating-animation rotate-3d" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/4 right-24 w-14 h-14 rounded-full bg-muted/30 floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-12 h-12 rounded-full bg-primary/10 floating-animation" style={{ animationDelay: '2.7s' }}></div>

      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Education</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className="card-shadow border-primary/20 hover:border-primary/40 smooth-transition scale-on-hover bg-card/50 backdrop-blur-sm group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${edu.gradient} flex items-center justify-center group-hover:scale-110 smooth-transition`}>
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                      
                      <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="w-fit">
                      {edu.type}
                    </Badge>
                    <Badge variant="secondary" className="w-fit bg-primary/20 text-primary">
                      Grade: {edu.grade}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;