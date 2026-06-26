"use client";

import { useRef, useState } from "react";

export default function GradientBorder({
  children,
  className = "",
  borderWidth = 1.5,
  borderRadius = "var(--radius)",
  ...props
}) {
  const ref = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      ref={ref}
      className={`gradient-border-wrapper ${isHovering ? "is-active" : ""} ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        "--gb-width": `${borderWidth}px`,
        "--gb-radius": borderRadius,
      }}
      {...props}
    >
      <div className="gradient-border-bg" />
      <div className="gradient-border-content">
        {children}
      </div>
    </div>
  );
}
