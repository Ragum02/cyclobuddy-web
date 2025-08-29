'use client';
import { useEffect, useRef, useState } from 'react';
import Button from '../ui/Button';

export default function HeroContainer() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [haloPos, setHaloPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setHaloPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.04,
        y: prev.y + (mousePos.y - prev.y) * 0.04,
      }));
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePos]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={heroRef}
      className="flex flex-col items-center justify-evenly p-2 md:h-80 h-60
                 bg-gradient-to-br from-[#0c1e3e] via-[#1e3a8a] to-[#172554]
                 text-white px-6 text-center overflow-hidden border-t
                 "
      style={{
        backgroundImage: `radial-gradient(circle at ${haloPos.x}px ${haloPos.y}px, rgba(255,255,255,0.15) 0px, transparent 100px),
                          linear-gradient(to bottom right, #0c1e3e, #1e3a8a, #172554)`,
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold">CycloBuddy</h1>
      <p className="max-w-xl">
        Organise, découvre et participe à des sorties à vélo près de chez toi.
        Que tu sois débutant ou confirmé.
      </p>
      <Button className="p-3">Rejoindre la communauté</Button>
    </div>
  );
}
