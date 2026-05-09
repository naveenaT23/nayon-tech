"use client";

import React, { useRef, useEffect } from "react";

const CyberGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(0, 242, 255, 0.15)";
      ctx.lineWidth = 1;

      const gridSize = 50;
      const perspective = 0.8;
      const speed = 1.5;

      offset = (offset + speed) % gridSize;

      // Vertical lines with perspective
      for (let x = -canvas.width; x < canvas.width * 2; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + (canvas.width / 2 - x) * perspective, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines moving towards camera
      for (let y = offset; y < canvas.height; y += gridSize) {
        const opacity = (y / canvas.height) * 0.3;
        ctx.strokeStyle = `rgba(0, 242, 255, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Add some 'glitch' pulses
      if (Math.random() > 0.98) {
        ctx.fillStyle = "rgba(0, 242, 255, 0.05)";
        ctx.fillRect(0, Math.random() * canvas.height, canvas.width, 2);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        background: "#05060a",
      }}
    />
  );
};

export default CyberGrid;
