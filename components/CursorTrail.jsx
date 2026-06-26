"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorTrail() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for lag/inertia effect
  const springConfig = { damping: 35, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      // Offset by 10px to center the 20px circle on the mouse pointer
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      if (isHidden) setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Hover effect on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive-hover");

      setIsHovered(!!isInteractive);

      // Hide custom cursor when hovering over input, textarea, or ImageZoom elements
      const shouldHide =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest(".cs-ds-display-body") || // design system zoom area
        target.closest(".cs-screen-img") ||       // standard case study zoom images
        target.closest("[style*='cursor: zoom-in']") ||
        target.closest("[style*='cursor: none']");

      setIsHidden(!!shouldHide);
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isHidden]);

  // Don't render on SSR or touch devices
  if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: cursorXSpring,
        y: cursorYSpring,
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgba(108, 92, 231, 0.22)", // Translucent purple matching --accent
        border: "1.5px solid var(--accent, #6c5ce7)",
        pointerEvents: "none",
        zIndex: 99999,
        display: isHidden ? "none" : "block",
        boxShadow: "0 0 10px rgba(108, 92, 231, 0.35)", // Subtle purple glow
      }}
      animate={{
        scale: isHovered ? 2.2 : 1,
        backgroundColor: isHovered ? "rgba(0, 206, 201, 0.15)" : "rgba(108, 92, 231, 0.22)", // Changes to teal on hover
        borderColor: isHovered ? "var(--accent-2, #00cec9)" : "var(--accent, #6c5ce7)",
        boxShadow: isHovered 
          ? "0 0 15px rgba(0, 206, 201, 0.5)" 
          : "0 0 10px rgba(108, 92, 231, 0.35)",
      }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
    />
  );
}
