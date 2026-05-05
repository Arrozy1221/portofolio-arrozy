"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/portfolio";
import { useLang } from "./LangProvider";

const categories = ["Design", "Research", "Dev"];
const catColors = { Design: "var(--blue-l)", Research: "var(--cyan)", Dev: "#A78BFA" };

function SkillBar({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
      className="skill-card"
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <span className="text-sm font-medium text-foreground">{skill.name}</span>
          <div className="mt-2 inline-flex rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em]"
            style={{ background: `${catColors[skill.category]}18`, color: catColors[skill.category] }}>
            {skill.category}
          </div>
        </div>
        <span className="font-syne text-lg font-bold" style={{ color: catColors[skill.category] }}>
          {skill.level}%
        </span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-bar"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay: index * 0.06 + 0.15, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLang();

  return (
    <section id="skills" ref={ref} className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="section-heading"
      >
        <p className="section-eyebrow">{t.skills.eyebrow}</p>
        <div className="section-heading-row">
          <div><h2 className="section-title">{t.skills.title}</h2></div>
          <div className="flex flex-wrap gap-4 text-xs text-muted-fg">
            {categories.map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: catColors[cat] }} />
                {cat}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} inView={inView} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="info-card mt-8"
      >
        <p className="text-xs uppercase tracking-[0.16em] text-cyan">{t.skills.softSkills}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {t.softSkillsList.map((item, index) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: 0.4 + index * 0.05 }}
              className="chip-soft"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
