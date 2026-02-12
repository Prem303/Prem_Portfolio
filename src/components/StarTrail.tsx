import { useEffect, useRef } from "react";

const STAR_COLORS = [
  "from-pink-400 to-yellow-300",
  "from-blue-400 to-cyan-300",
  "from-purple-400 to-indigo-300",
  "from-orange-400 to-pink-300",
  "from-green-400 to-teal-300"
];

function randomBetween(a: number, b: number) {
  return Math.random() * (b - a) + a;
}

const StarTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const star = document.createElement("div");
      const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
      star.className = `
        pointer-events-none
        fixed
        z-[9999]
        w-4 h-4
        rounded-full
        bg-gradient-to-br
        ${color}
        opacity-80
        animate-star-fade
        shadow-lg
      `;
      star.style.left = `${e.clientX - 8}px`;
      star.style.top = `${e.clientY - 8}px`;
      star.style.transition = "opacity 0.8s, transform 0.8s";
      star.style.transform = `scale(${randomBetween(0.7, 1.3)}) rotate(${randomBetween(0, 360)}deg)`;

      document.body.appendChild(star);

      setTimeout(() => {
        star.style.opacity = "0";
        star.style.transform += " translateY(-20px)";
      }, 10);

      setTimeout(() => {
        star.remove();
      }, 800);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    // This div is just for mounting, no visible content needed
    <div ref={containerRef} />
  );
};

export default StarTrail;