import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, Linkedin, ExternalLink, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const DeveloperSVG = () => (
  //   <div className="relative">
  //     <svg
  //       className="w-full h-full max-w-md mx-auto"
  //       viewBox="0 0 400 300"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       {/* Desk */}
  //       <rect x="50" y="220" width="300" height="60" rx="10" fill="hsl(var(--muted))" />
        
  //       {/* Laptop Base */}
  //       <rect x="120" y="200" width="160" height="25" rx="8" fill="hsl(var(--card))" />
        
  //       {/* Laptop Screen */}
  //       <rect x="125" y="120" width="150" height="90" rx="8" fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="3" />
        
  //       {/* Screen Content */}
  //       <rect x="135" y="130" width="130" height="70" rx="4" fill="hsl(var(--primary) / 0.1)" />
        
  //       {/* Code Lines */}
  //       <rect x="145" y="140" width="80" height="3" rx="1" fill="hsl(var(--primary))" className="animate-pulse" />
  //       <rect x="145" y="150" width="60" height="3" rx="1" fill="hsl(var(--accent))" />
  //       <rect x="145" y="160" width="90" height="3" rx="1" fill="hsl(var(--primary))" />
  //       <rect x="145" y="170" width="45" height="3" rx="1" fill="hsl(var(--muted-foreground))" />
  //       <rect x="145" y="180" width="70" height="3" rx="1" fill="hsl(var(--accent))" className="animate-pulse" style={{ animationDelay: '1s' }} />
        
  //       {/* Developer Person */}
  //       {/* Head */}
  //       <circle cx="200" cy="80" r="25" fill="hsl(var(--primary) / 0.8)" />
        
  //       {/* Body */}
  //       <rect x="185" y="105" width="30" height="50" rx="15" fill="hsl(var(--primary) / 0.6)" />
        
  //       {/* Arms */}
  //       <rect x="160" y="120" width="25" height="8" rx="4" fill="hsl(var(--primary) / 0.6)" transform="rotate(-10 172 124)" />
  //       <rect x="215" y="120" width="25" height="8" rx="4" fill="hsl(var(--primary) / 0.6)" transform="rotate(10 227 124)" />
        
  //       {/* Hands on Keyboard */}
  //       <circle cx="160" cy="200" r="6" fill="hsl(var(--primary) / 0.8)" className="floating-animation" />
  //       <circle cx="240" cy="200" r="6" fill="hsl(var(--primary) / 0.8)" className="floating-animation" style={{ animationDelay: '0.5s' }} />
        
  //       {/* Floating Code Symbols */}
  //       <text x="300" y="50" fontSize="20" fill="hsl(var(--primary))" className="floating-animation" style={{ animationDelay: '2s' }}>{"<>"}</text>
  //       <text x="80" y="70" fontSize="16" fill="hsl(var(--accent))" className="floating-animation" style={{ animationDelay: '3s' }}>{"{ }"}</text>
  //       <text x="320" y="100" fontSize="14" fill="hsl(var(--primary))" className="floating-animation" style={{ animationDelay: '1s' }}>{"</>"}</text>
  //     </svg>
  //   </div>
  // );

  // Scroll to next section handler
  const handleScrollDown = () => {
    const nextSection = document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const typingTexts = [
    "I’m passionate about building beautiful, performant web and mobile experiences.",
    "With a strong foundation in modern JavaScript frameworks, I love solving real-world problems and collaborating with creative teams."
  ];

  const TypingText = () => {
    const [displayed, setDisplayed] = useState("");
    const [textIdx, setTextIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);

    useEffect(() => {
      if (textIdx < typingTexts.length) {
        if (charIdx < typingTexts[textIdx].length) {
          const timeout = setTimeout(() => {
            setDisplayed((prev) => prev + typingTexts[textIdx][charIdx]);
            setCharIdx((prev) => prev + 1);
          }, 28);
          return () => clearTimeout(timeout);
        } else if (textIdx < typingTexts.length - 1) {
          // Pause before next line
          const timeout = setTimeout(() => {
            setDisplayed((prev) => prev + "\n");
            setTextIdx((prev) => prev + 1);
            setCharIdx(0);
          }, 600);
          return () => clearTimeout(timeout);
        }
      }
    }, [charIdx, textIdx]);

    return (
      <div className="w-full flex justify-center lg:justify-start mb-8">
        <div className="w-full sm:w-[640px] h-40 sm:h-40 md:h-44 lg:h-48 overflow-auto box-border px-6 py-4 rounded-xl" style={{ fontFamily: " 'Courier New', Courier, monospace" }}>
          <span className={
            `
            block
            break-words
            whitespace-pre-wrap
            font-medium
            text-lg md:text-xl
            leading-relaxed
            text-justify
            font-mono
            text-foreground/90
            `
          } style={{ maxHeight: '100%', display: 'block' }}>
            {displayed}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image (place public/hero-bg.jpg) with gradient overlay */}
      <div className="absolute inset-0 hero-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50"></div>
      
      {/* 3D Floating elements with enhanced animations */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 floating-animation glow-effect pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/10 floating-animation perspective-3d smooth-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 rounded-full bg-accent/15 floating-animation rotate-3d smooth-pulse" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-secondary/10 floating-animation" style={{ animationDelay: '1.5s' }}></div>
      
  

      {/* Floating Scroll Down Button */}
      <button
        onClick={handleScrollDown}
        className="absolute left-1/2 bottom-10 -translate-x-1/2 z-30 bg-primary text-primary-foreground rounded-full shadow-lg p-3 animate-bounce hover:scale-110 transition-all"
        aria-label="Scroll Down"
        style={{ boxShadow: "0 4px 24px hsl(var(--primary) / 0.25)" }}
      >
        <ChevronDown className="w-7 h-7" />
      </button>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Side - Developer SVG */}
          {/* <div className="order-1 lg:order-2 slide-in-right">
            <DeveloperSVG />
          </div> */}
          
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-right slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h1
              className={`text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-left tracking-tight drop-shadow-lg ${
                mounted && theme === "dark" ? "text-white" : "dark:text-primary-200"
              }`}
            >
              Prem Kumar
            </h1>

            <p
              className={`text-2xl text-left md:text-3xl font-semibold mb-4 smooth-transition tracking-wide ${
                mounted && theme === "dark" ? "text-white/90" : "dark:text-primary-300/90"
              }`}
            >
              Associate Software Developer
            </p>
            
            <TypingText />
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8" style={{ animationDelay: '0.4s' }}>
              <Button variant="outline" size="lg" className="glow-effect button-pop smooth-transition font-medium text-base hover:bg-primary/10">
                <Mail className="mr-2 h-5 w-5" />
                premkumarm8008@gmail.com
              </Button>
              
              <Button variant="outline" size="lg" className="button-pop smooth-transition font-medium text-base hover:bg-primary/10">
                <Phone className="mr-2 h-5 w-5" />
                +91 7730027005
              </Button>
              
              <a href="https://linkedin.com/in/premkumar-mukiti" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="outline" size="lg" className="button-pop smooth-transition font-medium text-base hover:bg-primary/10">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4" style={{ animationDelay: '0.5s' }}>
              <a href="/Prem_Kumar_Resume.pdf" download className="inline-block">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent pulse-glow button-pop smooth-transition font-semibold text-base shadow-lg hover:shadow-2xl text-white">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
              
              {/* <Button variant="outline" size="lg" className="button-pop smooth-transition font-semibold text-base hover:bg-primary/10">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Portfolio
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;