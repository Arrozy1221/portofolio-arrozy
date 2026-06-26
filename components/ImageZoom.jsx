"use client";

import { useState, useRef, useCallback, useEffect } from "react";

/**
 * ImageZoom — Komponen gambar dengan fitur zoom/magnifier teropong saat hover.
 * Props:
 *  - src: string         — URL gambar
 *  - alt: string         — alt text
 *  - className: string   — class tambahan untuk elemen <img>
 *  - style: object       — style tambahan untuk elemen <img>
 *  - zoomLevel: number   — zoom awal (default 2.5), bisa 1.5–5
 *  - lensSize: number    — diameter lens dalam px (default 180)
 *  - showControls: bool  — tampilkan kontrol zoom (default true)
 *  - loading: string     — lazy / eager
 */
export default function ImageZoom({
  src,
  alt,
  className = "",
  style = {},
  zoomLevel: initialZoom = 2.5,
  lensSize = 180,
  showControls = true,
  loading = "lazy",
  ...rest
}) {
  const [zoom, setZoom] = useState(initialZoom);
  const [isHovering, setIsHovering] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [bgPos, setBgPos] = useState({ x: 0, y: 0 });
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 });
  const [controlsVisible, setControlsVisible] = useState(false);

  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const hideControlsTimer = useRef(null);

  const half = lensSize / 2;

  const updateLens = useCallback(
    (e) => {
      const img = imgRef.current;
      const container = containerRef.current;
      if (!img || !container) return;

      const rect = img.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Mouse position relative to image
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      // Clamp
      x = Math.max(0, Math.min(x, rect.width));
      y = Math.max(0, Math.min(y, rect.height));

      // Lens position relative to container (centered on cursor)
      const lensX = e.clientX - containerRect.left - half;
      const lensY = e.clientY - containerRect.top - half;

      // Background offset — shows zoomed portion under lens
      const bgX = x * zoom - half;
      const bgY = y * zoom - half;

      setLensPos({ x: lensX, y: lensY });
      setBgPos({ x: bgX, y: bgY });
      setImgSize({ w: rect.width, h: rect.height });
    },
    [zoom, half]
  );

  const handleMouseEnter = (e) => {
    setIsHovering(true);
    updateLens(e);
  };

  const handleMouseMove = (e) => {
    if (isHovering) updateLens(e);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleContainerMouseEnter = () => {
    if (!showControls) return;
    clearTimeout(hideControlsTimer.current);
    setControlsVisible(true);
  };

  const handleContainerMouseLeave = () => {
    if (!showControls) return;
    hideControlsTimer.current = setTimeout(() => setControlsVisible(false), 800);
  };

  useEffect(() => {
    return () => clearTimeout(hideControlsTimer.current);
  }, []);

  const lensStyle = {
    position: "absolute",
    left: lensPos.x,
    top: lensPos.y,
    width: lensSize,
    height: lensSize,
    borderRadius: "50%",
    border: "3px solid rgba(255,255,255,0.9)",
    boxShadow:
      "0 0 0 1px rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.2)",
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 20,
    opacity: isHovering ? 1 : 0,
    transition: "opacity 0.15s ease",
    backgroundImage: `url(${src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${imgSize.w * zoom}px ${imgSize.h * zoom}px`,
    backgroundPosition: `-${bgPos.x}px -${bgPos.y}px`,
  };

  // Ring inside lens
  const ringStyle = {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.2)",
    pointerEvents: "none",
  };

  // Small crosshair dot in center
  const dotStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.85)",
    boxShadow: "0 0 0 2px rgba(0,0,0,0.3)",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  };

  const controlsStyle = {
    position: "absolute",
    bottom: 12,
    right: 12,
    display: "flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(9,9,17,0.78)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 100,
    padding: "6px 12px",
    zIndex: 15,
    opacity: controlsVisible ? 1 : 0,
    transform: controlsVisible ? "translateY(0)" : "translateY(6px)",
    transition: "opacity 0.25s ease, transform 0.25s ease",
    pointerEvents: controlsVisible ? "auto" : "none",
    userSelect: "none",
  };

  const btnStyle = (hovered) => ({
    background: hovered ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "50%",
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#fff",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1,
    transition: "background 0.15s ease",
    flexShrink: 0,
  });

  const pct = ((zoom - 1.5) / (5 - 1.5)) * 100;

  const sliderStyle = {
    WebkitAppearance: "none",
    appearance: "none",
    width: 80,
    height: 3,
    borderRadius: 10,
    background: `linear-gradient(to right, rgba(255,255,255,0.9) ${pct}%, rgba(255,255,255,0.2) ${pct}%)`,
    outline: "none",
    cursor: "pointer",
  };

  const labelStyle = {
    fontSize: 11,
    fontWeight: 600,
    color: "rgba(255,255,255,0.7)",
    minWidth: 28,
    textAlign: "center",
    fontFamily: "monospace",
    letterSpacing: "0.02em",
  };

  const [btnMinHover, setBtnMinHover] = useState(false);
  const [btnPlusHover, setBtnPlusHover] = useState(false);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", display: "block", lineHeight: 0 }}
      onMouseEnter={handleContainerMouseEnter}
      onMouseLeave={handleContainerMouseLeave}
    >
      {/* Actual image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={className}
        style={{ ...style, cursor: isHovering ? "none" : "zoom-in", display: "block" }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        loading={loading}
        {...rest}
      />

      {/* Magnifier lens */}
      <div style={lensStyle}>
        <div style={ringStyle} />
        <div style={dotStyle} />
      </div>

      {/* Zoom controls */}
      {showControls && (
        <div style={controlsStyle}>
          {/* Magnifier icon */}
          <span style={{ display: "flex", alignItems: "center", color: "rgba(255,255,255,0.5)" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8" x2="11" y2="14"/>
              <line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </span>

          {/* Minus button */}
          <button
            style={btnStyle(btnMinHover)}
            onMouseEnter={() => setBtnMinHover(true)}
            onMouseLeave={() => setBtnMinHover(false)}
            onClick={() => setZoom((z) => Math.max(1.5, parseFloat((z - 0.5).toFixed(1))))}
            title="Kurangi zoom"
            type="button"
          >
            −
          </button>

          {/* Slider */}
          <input
            type="range"
            min={1.5}
            max={5}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            style={sliderStyle}
            title={`Zoom: ${zoom.toFixed(1)}×`}
          />

          {/* Plus button */}
          <button
            style={btnStyle(btnPlusHover)}
            onMouseEnter={() => setBtnPlusHover(true)}
            onMouseLeave={() => setBtnPlusHover(false)}
            onClick={() => setZoom((z) => Math.min(5, parseFloat((z + 0.5).toFixed(1))))}
            title="Tambah zoom"
            type="button"
          >
            +
          </button>

          {/* Current zoom value */}
          <span style={labelStyle}>{zoom.toFixed(1)}×</span>
        </div>
      )}
    </div>
  );
}
