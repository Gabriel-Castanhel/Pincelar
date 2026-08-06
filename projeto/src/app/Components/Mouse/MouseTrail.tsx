"use client";

import { useEffect, useState } from "react";

interface TrailDot {
  id: string;
  x: number;
  y: number;
}

export default function MouseTrail() {
  const [trail, setTrail] = useState<TrailDot[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const id = `${Date.now()}-${Math.random()}`;
      
      const newDot: TrailDot = { id, x: e.clientX, y: e.clientY };

      setTrail((prev) => [...prev, newDot]);

      // 
      setTimeout(() => {
        setTrail((prev) => prev.filter((dot) => dot.id !== id));
      }, 400);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {trail.map((dot) => (
        <div
          key={dot.id}
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 animate-trail-fade"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
          }}
        />
      ))}
    </div>
  );
}
