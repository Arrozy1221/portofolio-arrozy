"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/portfolio";
import { useLang } from "./LangProvider";

const groups = [
  { key: "Design", color: "var(--accent)", barColor: "linear-gradient(90deg, #6c5ce7, #a29bfe)" },
  { key: "Research", color: "var(--accent-2)", barColor: "linear-gradient(90deg, #00cec9, #55efc4)" },
  { key: "Dev", color: "#fd79a8", barColor: "linear-gradient(90deg, #fd79a8, #fab1a0)" },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLang();

  return (
    <section id="skills" ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="eyebrow">{t.skills.eyebrow}</p>
          <h2 className="section-title">{t.skills.title}</h2>
        </motion.div>

        <div className="skills-grid">
          {groups.map((group, gi) => {
            const groupSkills = skills.filter((s) => s.category === group.key);
            return (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: gi * 0.08 }}
                className="skill-group"
              >
                <div className="skill-group-title">
                  <span className="skill-group-dot" style={{ background: group.color }} />
                  {group.key}
                </div>
                {groupSkills.map((skill, si) => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-level">
                      <div className="skill-bar-wrap">
                        <motion.div
                          className="skill-bar-fill"
                          style={{ background: group.barColor }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: gi * 0.1 + si * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="soft-skills"
        >
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent-light)" }}>
            {t.skills.softSkills}
          </p>
          <div className="soft-skills-list">
            {t.softSkillsList.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.35 + i * 0.04 }}
                className="tag tag-teal"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
