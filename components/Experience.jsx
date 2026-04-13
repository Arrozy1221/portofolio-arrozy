"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../data/portfolio";

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [open, setOpen] = useState(1); // first card open by default

  return (
    <section id="experience" ref={ref} className="max-w-6xl mx-auto px-6 py-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <p className="flex items-center gap-2 text-cyan text-xs uppercase tracking-[.16em] mb-3">
          <span className="w-6 h-px bg-cyan" />
          Journey
        </p>
        <h2
          className="font-syne font-extrabold tracking-tight"
          style={{ fontSize: "clamp(28px,4vw,46px)" }}
        >
          Work Experience
        </h2>
      </motion.div>

      <div className="flex flex-col gap-3">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 28, x: -16 }}
            animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              onClick={() => setOpen(open === exp.id ? null : exp.id)}
              className="glass rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:border-blue/60"
              style={{
                borderLeft:
                  open === exp.id ? "3px solid" : "3px solid transparent",
                borderLeftColor:
                  open === exp.id ? "var(--blue-l)" : "transparent",
              }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between gap-4 p-7 flex-wrap">
                <div className="flex items-start gap-4">
                  {/* Step dot */}
                  <div
                    className="mt-1 w-3 h-3 rounded-full flex-shrink-0 transition-all duration-300"
                    style={{
                      background:
                        open === exp.id
                          ? "linear-gradient(135deg, var(--blue-l), var(--cyan))"
                          : "var(--gray)",
                    }}
                  />
                  <div>
                    <div className="font-syne font-bold text-lg">
                      {exp.role}
                    </div>
                    <div className="text-blue-l text-sm mt-0.5">
                      {exp.company}
                    </div>
                    <div className="text-muted text-xs mt-0.5">
                      {exp.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {exp.current && (
                    <span className="text-[11px] px-3 py-1 rounded-full bg-cyan/10 border border-cyan/25 text-cyan">
                      Current
                    </span>
                  )}
                  <span className="text-[11px] px-3 py-1.5 rounded-full bg-blue/10 border border-white/10 text-muted whitespace-nowrap">
                    {exp.period}
                  </span>
                  <motion.span
                    animate={{ rotate: open === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted text-lg leading-none"
                  >
                    ↓
                  </motion.span>
                </div>
              </div>

              {/* Expandable body */}
              <AnimatePresence initial={false}>
                {open === exp.id && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-7 pl-14">
                      <ul className="flex flex-col gap-2.5 mb-5">
                        {exp.highlights.map((h, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: j * 0.05 }}
                            className="flex gap-2.5 text-sm text-muted leading-relaxed"
                          >
                            <span className="text-cyan text-xs mt-0.5 flex-shrink-0">
                              →
                            </span>
                            {h}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-3 py-1 rounded-full bg-cyan/7 border border-cyan/25 text-cyan"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
