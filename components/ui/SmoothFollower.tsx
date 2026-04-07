"use client";

import { useEffect, useRef, useState } from "react";

export default function SmoothFollower() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });

  const DOT_SMOOTHNESS = 0.2;
  const BORDER_DOT_SMOOTHNESS = 0.1;

  useEffect(() => {
    setMounted(true);

    const mediaHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mediaMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabled = () => {
      setEnabled(mediaHover.matches && !mediaMotion.matches);
    };

    updateEnabled();

    mediaHover.addEventListener("change", updateEnabled);
    mediaMotion.addEventListener("change", updateEnabled);

    return () => {
      mediaHover.removeEventListener("change", updateEnabled);
      mediaMotion.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setIsHovering(Boolean(interactive));
    };

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      dotPosition.current.x = lerp(
        dotPosition.current.x,
        mousePosition.current.x,
        DOT_SMOOTHNESS
      );
      dotPosition.current.y = lerp(
        dotPosition.current.y,
        mousePosition.current.y,
        DOT_SMOOTHNESS
      );

      borderDotPosition.current.x = lerp(
        borderDotPosition.current.x,
        mousePosition.current.x,
        BORDER_DOT_SMOOTHNESS
      );
      borderDotPosition.current.y = lerp(
        borderDotPosition.current.y,
        mousePosition.current.y,
        BORDER_DOT_SMOOTHNESS
      );

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled]);

  if (!mounted || !enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        className="absolute h-2 w-2 rounded-full bg-black dark:bg-white"
        style={{
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        className="absolute rounded-full border border-black dark:border-white"
        style={{
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          width: isHovering ? "44px" : "28px",
          height: isHovering ? "44px" : "28px",
          transform: "translate(-50%, -50%)",
          transition: "width 0.25s ease, height 0.25s ease",
        }}
      />
    </div>
  );
}