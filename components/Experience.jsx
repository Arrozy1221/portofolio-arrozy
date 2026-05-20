"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLang } from "./LangProvider";

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  const [open, setOpen] = useState(1);
  const { t } = useLang();

  return (
    <section id="experience" ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="section-header"
        >
          <p className="eyebrow">{t.experience.eyebrow}</p>
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
        </motion.div>

        <div className="exp-list">
          {t.experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`exp-card ${open === exp.id ? "is-active" : ""}`}
            >
              <button
                type="button"
                onClick={() => setOpen(open === exp.id ? null : exp.id)}
                className="exp-header"
              >
                <div className="exp-header-left">
                  {exp.logo && (
                    <div className="exp-logo">
                      <Image src={exp.logo} alt={exp.company} fill className="object-contain p-1" sizes="40px" />
                    </div>
                  )}
                  <div className="exp-info">
                    <h3>{exp.role}</h3>
                    <p>{exp.company} · {exp.location}</p>
                  </div>
                </div>
                <div className="exp-header-right">
                  {exp.current && <span className="exp-current">{t.experience.current}</span>}
                  <span className="exp-period">{exp.period}</span>
                  <motion.span
                    animate={{ rotate: open === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="exp-chevron"
                  >
                    ↓
                  </motion.span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === exp.id && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="exp-body">
                      {exp.companyProfile && (
                        <div className="exp-company-desc">
                          <p className="industry">{exp.companyProfile.industry}</p>
                          <p>{exp.companyProfile.description}</p>
                        </div>
                      )}

                      <ul className="exp-highlights">
                        {exp.highlights.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.03 }}
                          >
                            <span>→</span>
                            <p>{item}</p>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="exp-tags">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="tag tag-accent">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
