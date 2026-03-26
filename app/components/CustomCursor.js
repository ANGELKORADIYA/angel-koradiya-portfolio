"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const lerpPos = useRef({ x: 0, y: 0 }); 
  const lastPos = useRef({ x: 0, y: 0 });
  const particles = useRef([]);
  const clickRipples = useRef([]);
  const rotation = useRef(0);
  const hoverProgress = useRef(0);
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
      const theme = isHovering ? COLORS.HOVER : COLORS.DEFAULT;
      
      // Added Expanding Rings (Ripples) as requested
      clickRipples.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 55,
        life: 1.0,
        color: theme.primary
      });

      // Sharp digital particles (not "bubbles")
      const count = 12;
      for (let i = 0; i < count; i++) {
        const angle = (Math.floor(Math.random() * 8) * Math.PI / 4);
        const speed = 4 + Math.random() * 3;
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1.0,
          decay: 0.04 + Math.random() * 0.02,
          size: 1.5,
          color: theme.particle,
          isSquare: true,
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
      lerpPos.current.x = lerp(lerpPos.current.x, mousePos.current.x, 0.12);
      lerpPos.current.y = lerp(lerpPos.current.y, mousePos.current.y, 0.12);
      
      const targetHover = isHovering ? 1 : 0;
      hoverProgress.current = lerp(hoverProgress.current, targetHover, 0.15);
      rotation.current += 0.02 + (hoverProgress.current * 0.03);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isVisible) {
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

        // 1. Draw Click Ripples (Expanding Rings)
        clickRipples.current = clickRipples.current.filter(r => {
          r.radius += (r.maxRadius - r.radius) * 0.12;
          r.life -= 0.04;
          if (r.life <= 0) return false;

          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `${r.color}${Math.floor(r.life * 255).toString(16).padStart(2, '0')})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          return true;
        });

        // 2. Draw HUD Rings (Trailing)
        ctx.save();
        ctx.translate(followX, followY);
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 35 + h * 20);
        gradient.addColorStop(0, theme.secondary);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, 35 + h * 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.rotate(rotation.current);
        ctx.beginPath();
        ctx.setLineDash([4, 8 + (1-h) * 4]);
        ctx.arc(0, 0, 15 + h * 10, 0, Math.PI * 2);
        ctx.strokeStyle = theme.primary;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.rotate(-rotation.current * 2.5);
        ctx.setLineDash([]);
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(0, 0, 20 + h * 12, (i * Math.PI * 2) / 3, (i * Math.PI * 2) / 3 + Math.PI / 6);
          ctx.stroke();
        }
        ctx.restore();

        // 3. Brackets
        const bSize = 22 + h * 14;
        const bLen = 6 + h * 3;
        ctx.strokeStyle = theme.primary;
        ctx.globalAlpha = 0.3 + h * 0.7;
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
        ctx.globalAlpha = 1.0;

        // 4. Data HUD (Top Right)
        ctx.save();
        ctx.translate(followX + 28, followY - 20);
        
        ctx.fillStyle = theme.primary;
        ctx.font = "bold 8px monospace";
        ctx.globalAlpha = 0.8;
        ctx.fillText(isHovering ? ">> EXECUTE" : ">> NAVIGATE", 0, 0);

        const hash = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, '0');
        ctx.font = "7px monospace";
        ctx.globalAlpha = 0.4;
        ctx.fillText(`0x${hash}`, 0, 10);

        for (let i = 0; i < 5; i++) {
          const barHeight = 2 + (i * 2.5);
          const isActive = i < (isHovering ? 5 : 3);
          ctx.globalAlpha = isActive ? 0.6 : 0.15;
          ctx.fillRect(i * 4 - 30, 2, 2, -barHeight);
        }
        ctx.restore();

        /* 
        // 5. Coordinates (Bottom Right - opposite to NAVIGATE vertically)
        ctx.save();
        ctx.translate(followX + 35, followY + 25); // Positioned at bottom right
        ctx.fillStyle = theme.primary;
        ctx.font = "7px monospace";
        ctx.globalAlpha = 0.4;
        ctx.fillText(`X:${Math.round(targetX)}`, 0, 0);
        ctx.fillText(`Y:${Math.round(targetY)}`, 0, 8);
        ctx.restore();
        */

        // 6. Draw Particles
        particles.current = particles.current.filter((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= p.decay;
          p.vx *= 0.96;
          p.vy *= 0.96;

          if (p.life <= 0) return false;

          ctx.fillStyle = `${p.color}${p.life.toFixed(2)})`;
          ctx.fillRect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
          return true;
        });

        // 7. Core Dot
        ctx.beginPath();
        ctx.arc(targetX, targetY, 3 + h * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = theme.primary;
        ctx.shadowBlur = 10 + h * 10;
        ctx.shadowColor = theme.glow;
        ctx.fill();
        ctx.shadowBlur = 0;
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
