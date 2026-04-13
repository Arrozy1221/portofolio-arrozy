"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills, softSkills } from "../data/portfolio";

const categories = ["Design", "Research", "Dev"];
const catColors = {
  Design: "var(--blue-l)",
  Research: "var(--cyan)",
  Dev: "#A78BFA",
};

function SkillBar({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="glass rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium">{skill.name}</span>
        <span
          className="text-xs font-medium"
          style={{ color: catColors[skill.category] }}
        >
          {skill.level}%
        </span>
      </div>
      <div
        className="h-1 rounded-full"
        style={{ background: "rgba(255,255,255,.07)" }}
      >
        <motion.div
          className="h-full rounded-full skill-bar"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.6,
            delay: index * 0.07 + 0.2,
            ease: [0.4, 0, 0.2, 1],
          }}
        />
      </div>
      <div className="mt-2">
        <span
          className="text-[10px] px-2 py-0.5 rounded-full"
          style={{
            background: `${catColors[skill.category]}15`,
            color: catColors[skill.category],
          }}
        >
          {skill.category}
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="max-w-6xl mx-auto px-6 py-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <p className="flex items-center gap-2 text-cyan text-xs uppercase tracking-[.16em] mb-3">
          <span className="w-6 h-px bg-cyan" />
          Expertise
        </p>
        <h2
          className="font-syne font-extrabold tracking-tight"
          style={{ fontSize: "clamp(28px,4vw,46px)" }}
        >
          Skills & Tools
        </h2>
      </motion.div>

      {/* Category legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex gap-5 mb-8 flex-wrap"
      >
        {categories.map((cat) => (
          <div key={cat} className="flex items-center gap-2 text-xs text-muted">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: catColors[cat] }}
            />
            {cat}
          </div>
        ))}
      </motion.div>

      {/* Skill bars grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {skills.map((sk, i) => (
          <SkillBar key={sk.name} skill={sk} index={i} inView={inView} />
        ))}
      </div>

      {/* Soft skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        <p className="text-muted text-sm mb-5 uppercase tracking-widest text-xs">
          Soft Skills
        </p>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
              whileHover={{
                scale: 1.06,
                borderColor: "var(--cyan)",
                color: "var(--cyan)",
                transition: { duration: 0.15 },
              }}
              className="text-sm px-4 py-2 rounded-full border border-white/12 text-muted cursor-default transition-colors"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
