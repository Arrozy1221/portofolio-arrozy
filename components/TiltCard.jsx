"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function TiltCard({
  children,
  className = "",
  tiltIntensity = 8,
  glare = true,
  ...props
}) {
  const ref = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
  });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * tiltIntensity;
      const rotateY = (x - 0.5) * tiltIntensity;

      setTransform({
        rotateX,
        rotateY,
        glareX: x * 100,
        glareY: y * 100,
      });
    },
    [tiltIntensity]
  );

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransform({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`tilt-card-wrapper ${className}`}
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
      {glare && (
        <div
          className="tilt-glare"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}
