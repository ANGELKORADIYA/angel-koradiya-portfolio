"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const particles = useRef([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const frameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = (e) => {
      // Click burst effect
      const count = 20;
      const color = isHovering ? "rgba(251, 191, 36," : "rgba(14, 165, 233,";
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + Math.random();
        const speed = 2 + Math.random() * 5;
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1.0,
          decay: 0.015 + Math.random() * 0.02,
          size: 4 + Math.random() * 4,
          colorBase: color,
        });
      }
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        (target instanceof HTMLElement && getComputedStyle(target).cursor === "pointer");
      
      setIsHovering(isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);

    const update = () => {
      // Calculate velocity
      velocity.current = {
        x: mousePos.current.x - lastPos.current.x,
        y: mousePos.current.y - lastPos.current.y,
      };
      lastPos.current = { ...mousePos.current };

      const speed = Math.hypot(velocity.current.x, velocity.current.y);
      const isMoving = speed > 0.5;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isVisible) {
        // Emit particles
        const emissionRate = isMoving ? (isHovering ? 5 : 3) : (isHovering ? 3 : 1);
        const color = isHovering ? "rgba(251, 191, 36," : "rgba(56, 189, 248,";
        
        for (let i = 0; i < emissionRate; i++) {
          if (isMoving) {
            // Booster Effect: opposite to movement
            const angle = Math.atan2(velocity.current.y, velocity.current.x) + Math.PI + (Math.random() - 0.5) * 0.5;
            const pSpeed = 1 + Math.random() * 4;
            particles.current.push({
              x: mousePos.current.x,
              y: mousePos.current.y,
              vx: Math.cos(angle) * pSpeed,
              vy: Math.sin(angle) * pSpeed,
              life: 1.0,
              decay: 0.02 + Math.random() * 0.03,
              size: 2 + Math.random() * 4,
              colorBase: color,
            });
          } else {
            // Fountain Effect: floats up
            const angle = -Math.PI / 2 + (Math.random() - 0.5) * (Math.PI * 0.8);
            const pSpeed = 0.5 + Math.random() * 2;
            particles.current.push({
              x: mousePos.current.x,
              y: mousePos.current.y,
              vx: Math.cos(angle) * pSpeed,
              vy: Math.sin(angle) * pSpeed,
              life: 1.0,
              decay: 0.015 + Math.random() * 0.02,
              size: 1 + Math.random() * 3,
              colorBase: isHovering ? "rgba(251, 191, 36," : "rgba(186, 230, 253,",
            });
          }
        }

        // Draw and update particles
        particles.current = particles.current.filter((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= p.decay;
          p.size *= 0.985;

          if (p.life <= 0) return false;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.colorBase}${p.life.toFixed(2)})`;
          ctx.fill();
          return true;
        });

        // Draw Cursor Core
        const coreSize = isHovering ? 8 : 5;
        ctx.beginPath();
        ctx.arc(mousePos.current.x, mousePos.current.y, coreSize, 0, Math.PI * 2);
        ctx.fillStyle = isHovering ? "#fbbf24" : "#0ea5e9"; // amber-400 or sky-500
        ctx.shadowBlur = 15;
        ctx.shadowColor = isHovering ? "rgba(251, 191, 36, 0.6)" : "rgba(14, 165, 233, 0.6)";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow for next frame

        // Draw outer ring
        ctx.beginPath();
        ctx.arc(mousePos.current.x, mousePos.current.y, isHovering ? 15 : 12, 0, Math.PI * 2);
        ctx.strokeStyle = isHovering ? "rgba(251, 191, 36, 0.3)" : "rgba(14, 165, 233, 0.3)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Performance cap
      if (particles.current.length > 250) {
        particles.current = particles.current.slice(-250);
      }

      frameRef.current = requestAnimationFrame(update);
    };

    frameRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, [isHovering, isVisible]);

  return (
    <>
      <style jsx global>{`
        body, a, button, [role="button"], .interactive {
          cursor: none !important;
        }
      `}</style>
      
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      />
    </>
  );
}
