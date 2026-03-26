"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const lerpPos = useRef({ x: 0, y: 0 }); 
  const lastPos = useRef({ x: 0, y: 0 });
  const particles = useRef([]);
  const rotation = useRef(0);
  const hoverProgress = useRef(0); // For smooth transition of hover effects
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const frameRef = useRef();

  const COLORS = {
    DEFAULT: {
      primary: "#0ea5e9", // sky-500
      secondary: "rgba(14, 165, 233, 0.2)",
      glow: "rgba(14, 165, 233, 0.6)",
      particle: "rgba(56, 189, 248, "
    },
    HOVER: {
      primary: "#f59e0b", // amber-500
      secondary: "rgba(245, 158, 11, 0.2)",
      glow: "rgba(245, 158, 11, 0.6)",
      particle: "rgba(251, 191, 36, "
    }
  };

  const lerp = (start, end, factor) => start + (end - start) * factor;

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      return;
    }

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
      if (!isVisible) {
        setIsVisible(true);
        lerpPos.current = { ...mousePos.current };
      }
    };

    const onMouseDown = (e) => {
      const count = 15;
      const theme = isHovering ? COLORS.HOVER : COLORS.DEFAULT;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + Math.random();
        const speed = 3 + Math.random() * 4;
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1.0,
          decay: 0.015 + Math.random() * 0.01,
          size: 2 + Math.random() * 3,
          color: theme.particle,
          isSquare: Math.random() > 0.4
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
      // 1. Update Lerp Values
      lerpPos.current.x = lerp(lerpPos.current.x, mousePos.current.x, 0.12);
      lerpPos.current.y = lerp(lerpPos.current.y, mousePos.current.y, 0.12);
      
      const targetHover = isHovering ? 1 : 0;
      hoverProgress.current = lerp(hoverProgress.current, targetHover, 0.15);

      rotation.current += 0.02 + (hoverProgress.current * 0.03);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isVisible) {
        // Theme Interpolation
        const h = hoverProgress.current;
        const theme = {
          primary: h > 0.5 ? COLORS.HOVER.primary : COLORS.DEFAULT.primary,
          secondary: h > 0.5 ? COLORS.HOVER.secondary : COLORS.DEFAULT.secondary,
          glow: h > 0.5 ? COLORS.HOVER.glow : COLORS.DEFAULT.glow
        };

        const targetX = mousePos.current.x;
        const targetY = mousePos.current.y;
        const followX = lerpPos.current.x;
        const followY = lerpPos.current.y;

        // 2. Draw HUD Elements (Trailing)
        ctx.save();
        ctx.translate(followX, followY);
        
        // Background Glow
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 40 + h * 20);
        gradient.addColorStop(0, theme.secondary);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, 40 + h * 20, 0, Math.PI * 2);
        ctx.fill();

        // Inner dashed ring
        ctx.rotate(rotation.current);
        ctx.beginPath();
        ctx.setLineDash([4, 8 + (1-h) * 4]);
        ctx.arc(0, 0, 18 + h * 10, 0, Math.PI * 2);
        ctx.strokeStyle = theme.primary;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Outer segments
        ctx.rotate(-rotation.current * 2);
        ctx.setLineDash([]);
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 4; i++) {
          ctx.beginPath();
          ctx.arc(0, 0, 24 + h * 12, (i * Math.PI * 2) / 4, (i * Math.PI * 2) / 4 + Math.PI / 6);
          ctx.stroke();
        }
        ctx.restore();

        // 3. Brackets (Instant tracking)
        const bSize = 25 + h * 15;
        const bLen = 6 + h * 4;
        const opacity = 0.2 + h * 0.8;
        ctx.strokeStyle = theme.primary.replace(")", `, ${opacity})`);
        ctx.lineWidth = 1;
        
        const drawBracket = (x, y, xDir, yDir) => {
          ctx.beginPath();
          ctx.moveTo(x, y + bLen * yDir);
          ctx.lineTo(x, y);
          ctx.lineTo(x + bLen * xDir, y);
          ctx.stroke();
        };

        drawBracket(targetX - bSize, targetY - bSize, 1, 1);
        drawBracket(targetX + bSize, targetY - bSize, -1, 1);
        drawBracket(targetX - bSize, targetY + bSize, 1, -1);
        drawBracket(targetX + bSize, targetY + bSize, -1, -1);

        // 4. Draw Particles
        particles.current = particles.current.filter((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= p.decay;
          p.vx *= 0.97;
          p.vy *= 0.97;

          if (p.life <= 0) return false;

          ctx.fillStyle = `${p.color}${p.life.toFixed(2)})`;
          if (p.isSquare) {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.life * Math.PI);
            ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
            ctx.restore();
          } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
          return true;
        });

        // 5. Draw Core Dot
        ctx.beginPath();
        ctx.arc(targetX, targetY, 3 + h * 2, 0, Math.PI * 2);
        ctx.fillStyle = theme.primary;
        ctx.shadowBlur = 10 + h * 10;
        ctx.shadowColor = theme.glow;
        ctx.fill();
        ctx.shadowBlur = 0;

        // 6. Coordinates (Very subtle, follow LERP)
        ctx.fillStyle = theme.primary;
        ctx.globalAlpha = 0.3;
        ctx.font = "7px monospace";
        ctx.fillText(`X:${Math.round(targetX)}`, followX + 25, followY - 15);
        ctx.fillText(`Y:${Math.round(targetY)}`, followX + 25, followY - 7);
        ctx.globalAlpha = 1.0;
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
        @media (hover: hover) and (pointer: fine) {
          body, a, button, [role="button"], .interactive {
            cursor: none !important;
          }
        }
      `}</style>
      
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      />
    </>
  );
}
