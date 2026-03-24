"use client";
import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clicks, setClicks] = useState([]);
  const cursorRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onMouseDown = (e) => {
      const id = Date.now();
      setClicks((prev) => [...prev, { x: e.clientX, y: e.clientY, id }]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== id));
      }, 600);
    };

    const onMouseOver = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.style.cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes boom {
          0% { transform: scale(0); opacity: 0.8; }
          100% { transform: scale(3); opacity: 0; }
        }
        @keyframes particle {
          0% { transform: translate(0, 0) scale(1); opacity: 1; }
          100% { transform: translate(var(--tw-translate-x), var(--tw-translate-y)) scale(0); opacity: 0; }
        }
      `}</style>

      {/* Main Cursor Core */}
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-sky-500 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out shadow-[0_0_15px_rgba(14,165,233,0.8)]"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isHovering ? 2.5 : 1})`,
        }}
      />

      {/* Flowing Booster Effect (Trailing Ring) */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-sky-400 rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out opacity-50"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 1.8 : 1.2})`,
        }}
      />

      {/* Click Boom Effect */}
      {clicks.map((click) => (
        <div
          key={click.id}
          className="fixed top-0 left-0 w-10 h-10 border-2 border-sky-400 rounded-full pointer-events-none z-[9997]"
          style={{
            left: click.x - 20,
            top: click.y - 20,
            animation: "boom 0.6s ease-out forwards",
          }}
        />
      ))}
      
      {/* Particle burst on click */}
      {clicks.map((click) => (
        [...Array(8)].map((_, i) => (
          <div
            key={`${click.id}-${i}`}
            className="fixed top-0 left-0 w-2 h-2 bg-sky-500 rounded-full pointer-events-none z-[9997]"
            style={{
              left: click.x - 4,
              top: click.y - 4,
              '--tw-translate-x': `${Math.cos((i * 45) * Math.PI / 180) * 40}px`,
              '--tw-translate-y': `${Math.sin((i * 45) * Math.PI / 180) * 40}px`,
              animation: "particle 0.6s ease-out forwards",
            }}
          />
        ))
      ))}
    </>
  );
}
