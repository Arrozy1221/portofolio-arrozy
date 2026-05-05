"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "./LangProvider";

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [open, setOpen] = useState(1);
  const { t } = useLang();

  return (
    <section id="experience" ref={ref} className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="section-heading"
      >
        <p className="section-eyebrow">{t.experience.eyebrow}</p>
        <div className="section-heading-row">
          <div><h2 className="section-title">{t.experience.title}</h2></div>
          <p className="section-copy max-w-xl">{t.experience.subtitle}</p>
        </div>
      </motion.div>

      <div className="timeline-list">
        {t.experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`timeline-item ${open === exp.id ? "is-open" : ""}`}
          >
            <button
              type="button"
              onClick={() => setOpen(open === exp.id ? null : exp.id)}
              className="timeline-trigger"
            >
              <div className="timeline-marker"><span /></div>
              <div className="timeline-summary">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-syne text-xl font-bold text-foreground">{exp.role}</h3>
                    {exp.current && <span className="status-pill">{t.experience.current}</span>}
                  </div>
                  <p className="mt-2 text-sm font-medium text-blue-l">{exp.company}</p>
                  <p className="mt-1 text-sm text-muted-fg">{exp.location}</p>
                </div>
                <div className="timeline-meta">
                  <span className="period-pill">{exp.period}</span>
                  <motion.span animate={{ rotate: open === exp.id ? 180 : 0 }} transition={{ duration: 0.25 }} className="timeline-arrow">↓</motion.span>
                </div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {open === exp.id && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="timeline-body">
                    <ul className="space-y-3">
                      {exp.highlights.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: index * 0.04 }}
                          className="timeline-point"
                        >
                          <span>→</span>
                          <p>{item}</p>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="chip-soft">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
