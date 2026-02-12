import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "React & React Native",
      icon: <Code className="h-6 w-6" />,
      skills: [
        "React Native (Expo & CLI)",
        "TypeScript",
        "React Navigation",
        "Context & custom hooks",
        "Performance Optimization",
        "Styling (Styled-Components / Tailwind)",
        "Metro bundler & build tooling"
      ],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["HTML", "CSS", "JavaScript (ES6+)", "React.js", "React Native", "Responsive Design", "UI/UX Principles"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "State Management & APIs",
      icon: <Server className="h-6 w-6" />,
      skills: ["Redux", "Context API", "REST API Integration", "Axios", "AsyncStorage", "Real-time Data Sync"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Development Tools",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Git", "npm/yarn", "Webpack", "Vite", "Browser DevTools", "Jest", "Testing", "Build Tools"],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Design & Accessibility",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Accessibility", "Canva", "Problem-solving", "Communication", "Teamwork", "Figma"],
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const total = skillCategories.length;
  const flipTimeout = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const goNext = () => {
    if (isFlipping) return;
    setDir("next");
    setIsFlipping(true);
    if (flipTimeout.current) window.clearTimeout(flipTimeout.current);
    flipTimeout.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % total);
      setIsFlipping(false);
    }, 420);
  };

  const goPrev = () => {
    if (isFlipping) return;
    setDir("prev");
    setIsFlipping(true);
    if (flipTimeout.current) window.clearTimeout(flipTimeout.current);
    flipTimeout.current = window.setTimeout(() => {
      setIndex((i) => (i - 1 + total) % total);
      setIsFlipping(false);
    }, 420);
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
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto mt-4">Flip through the notebook to explore different skill sets. Use arrow keys or the buttons to navigate.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="notebook relative mx-auto">
            <div className="notebook-spine" />

            <div className={`page-container ${isFlipping ? (dir === "next" ? "flip-next" : "flip-prev") : ""}`}>
              <div className="page-pair flex gap-6 items-stretch">
                {/* Left page */}
                <div className="page left-page bg-card/80 shadow-lg">
                  <div className="page-header flex items-center justify-between px-5 py-4 border-b border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-md bg-gradient-to-r ${skillCategories[index].gradient} flex items-center justify-center text-white`}>{skillCategories[index].icon}</div>
                      <h3 className="text-lg font-semibold">{skillCategories[index].title}</h3>
                    </div>
                    <div className="text-sm text-foreground/60">{index + 1} / {total}</div>
                  </div>

                  <div className="page-body p-5">
                    <div className="mb-3 text-sm text-foreground/80 leading-relaxed">Core skills and tools I use in this area.</div>
                    <div className="flex flex-wrap gap-2">
                      {skillCategories[index].skills.map((skill, sIdx) => (
                        <Badge key={sIdx} variant="secondary" className="cursor-default py-1 px-2 text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="page-footer flex items-center justify-between px-5 py-3 border-t border-primary/10">
                    <div className="text-sm text-foreground/70">Left</div>
                    <div />
                  </div>
                </div>

                {/* Right page */}
                <div className="page right-page bg-card/80 shadow-lg">
                  <div className="page-header flex items-center justify-between px-5 py-4 border-b border-primary/10">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-md bg-gradient-to-r ${skillCategories[(index + 1) % total].gradient} flex items-center justify-center text-white`}>{skillCategories[(index + 1) % total].icon}</div>
                      <h3 className="text-lg font-semibold">{skillCategories[(index + 1) % total].title}</h3>
                    </div>
                    <div className="text-sm text-foreground/60">{((index + 1) % total) + 1} / {total}</div>
                  </div>

                  <div className="page-body p-5">
                    <div className="mb-3 text-sm text-foreground/80 leading-relaxed">Core skills and tools I use in this area.</div>
                    <div className="flex flex-wrap gap-2">
                      {skillCategories[(index + 1) % total].skills.map((skill, sIdx) => (
                        <Badge key={sIdx} variant="secondary" className="cursor-default py-1 px-2 text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="page-footer flex items-center justify-between px-5 py-3 border-t border-primary/10">
                    <button onClick={goPrev} aria-label="Previous" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary smooth-transition">
                      <ChevronLeft className="w-4 h-4" /> Prev
                    </button>

                    <div className="flex items-center gap-2">
                      <div className="text-sm text-foreground/70">Notebook</div>
                    </div>

                    <button onClick={goNext} aria-label="Next" className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary smooth-transition">
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;