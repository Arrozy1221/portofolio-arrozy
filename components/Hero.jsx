"use client";

import { motion } from "framer-motion";
import { personal, stats } from "../data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute rounded-full orb-animate"
          style={{
            width: 560,
            height: 560,
            background: "#1E56F5",
            top: -140,
            left: -120,
            filter: "blur(100px)",
            opacity: 0.14,
            animationDuration: "7s",
          }}
        />
        <div
          className="absolute rounded-full orb-animate"
          style={{
            width: 440,
            height: 440,
            background: "#00C9C8",
            bottom: -100,
            right: -100,
            filter: "blur(100px)",
            opacity: 0.12,
            animationDuration: "9s",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute rounded-full orb-animate"
          style={{
            width: 320,
            height: 320,
            background: "#7C3AED",
            top: "42%",
            left: "30%",
            filter: "blur(90px)",
            opacity: 0.09,
            animationDuration: "6s",
            animationDelay: "4s",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,86,245,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(30,86,245,.055) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Available badge */}
      <motion.div {...fadeUp(0.15)} className="relative mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan blink" />
          {personal.available
            ? "Available for freelance & full-time"
            : "Currently unavailable"}
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        {...fadeUp(0.28)}
        className="relative font-syne font-extrabold leading-[1.04] tracking-tighter mb-5"
        style={{ fontSize: "clamp(44px, 7vw, 88px)" }}
      >
        {personal.name}
        <br />
        <span className="gradient-text">{personal.role}</span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        {...fadeUp(0.42)}
        className="relative max-w-lg text-muted leading-relaxed mb-10"
        style={{ fontSize: 17 }}
      >
        {personal.tagline}
      </motion.p>

      {/* Buttons */}
      <motion.div
        {...fadeUp(0.55)}
        className="relative flex gap-3 flex-wrap justify-center mb-20"
      >
        <a
          href="#projects"
          className="px-8 py-3.5 rounded-full bg-blue text-white text-sm font-medium hover:-translate-y-1 hover:shadow-[0_10px_36px_rgba(30,86,245,0.45)] transition-all duration-300"
        >
          View Projects
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="px-8 py-3.5 rounded-full border border-white/20 text-white text-sm font-medium hover:border-blue-l hover:bg-blue/10 transition-all duration-300"
        >
          Get In Touch
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        {...fadeUp(0.68)}
        className="relative flex flex-wrap justify-center"
        style={{ borderTop: "0.5px solid rgba(30,86,245,0.18)" }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="text-center px-8 py-5"
            style={{
              borderRight:
                i < stats.length - 1
                  ? "0.5px solid rgba(30,86,245,0.18)"
                  : "none",
            }}
          >
            <div
              className="font-syne font-extrabold gradient-text"
              style={{ fontSize: 38 }}
            >
              {s.value}
            </div>
            <div className="text-muted text-xs uppercase tracking-widest mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(0.85)}
        className="relative mt-14 flex flex-col items-center gap-2 float-anim"
      >
        <span className="text-muted text-[10px] uppercase tracking-[.16em]">
          Scroll
        </span>
        <div
          className="w-4 h-4 border-r border-b border-muted"
          style={{ transform: "rotate(45deg)" }}
        />
      </motion.div>
    </section>
  );
}
