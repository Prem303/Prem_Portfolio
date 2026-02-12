import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Heart, Video, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Indusayush",
      type: "Healthcare Application",
      duration: "June 2025 - August 2025", 
      description: "Developed a full-featured healthcare mobile application using React Native and Redux Toolkit, focusing on patient monitoring and health tracking. Built modular and reusable UI components with react-native-paper.",
      technologies: ["React Native", "Redux Toolkit", "React Hook Form", "Yup", "AsyncStorage", "REST APIs", "Axios"],
      features: [ "Health tracking", "Interactive charts", "Forms & validation", "Blood pressure tracking", "BMI calculation"],
      icon: <Heart className="h-6 w-6" />,
      link: "indusayush.in/",
      gradient: "from-red-500 to-pink-500"
    },
       {
      id: 4,
      title: "Induscrafts",
      type: "E-commerce Platform",
      duration: "2024",
      description: "A comprehensive e-commerce platform for artisanal products, featuring product catalog management, shopping cart functionality, and secure payment integration for showcasing craftspeople's work.",
      technologies: ["React.js", "JavaScript", "REST APIs", "State Management", "CSS", "MUI"],
      features: ["Product catalog", "Shopping cart", "Payment integration", "Order management", "Responsive design"],
      icon: <Heart className="h-6 w-6" />,
      link: "#",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      id: 2,
      title: "Ultraclips.ai",
      type: "Video Processing Platform",
      duration: "July 2024 - July 2025",
      description: "Built responsive and interactive user interfaces using React.js, HTML, CSS, and JavaScript for video processing and AI-powered clip generation. Integrated REST APIs for real-time data sync.",
      technologies: ["React.js", "HTML", "CSS", "JavaScript", "Redux Toolkit", "REST APIs", "Figma"],
      features: ["Video previews", "AI-generated highlights", "Responsive design", "Real-time data sync", "Mobile responsive"],
      icon: <Video className="h-6 w-6" />,
      link: "www.ultraclips.ai/",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Interview Simulator",
      type: "Educational Platform",
      duration: "July 2024 - November 2024",
      description: "Engineered an interactive interview simulator leveraging AI-driven question generation and real-time feedback mechanisms, empowering users to practice diverse interview scenarios.",
      technologies: ["React.js", "AI Integration", "Real-time Feedback", "Interactive UI"],
      features: ["AI question generation", "Real-time feedback", "Multiple interview types", "Progress tracking"],
      icon: <Users className="h-6 w-6" />,
      link: "#",
      gradient: "from-purple-500 to-indigo-500"
    },
 
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute top-16 left-10 w-20 h-20 rounded-full bg-primary/20 floating-animation glow-effect"></div>
      <div className="absolute bottom-16 right-10 w-32 h-32 rounded-full bg-accent/20 floating-animation perspective-3d" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-24 w-16 h-16 rounded-full bg-secondary/20 floating-animation rotate-3d" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-shadow border-primary/20 hover:border-primary/40 smooth-transition scale-on-hover bg-card/50 backdrop-blur-sm group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 group-hover:scale-110 smooth-transition`}>
                  {project.icon}
                </div>
                
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <Badge variant="outline" className="w-fit mb-2">
                  {project.type}
                </Badge>
                <p className="text-sm text-muted-foreground mb-4">{project.duration}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;