"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/portfolio";

function ProjectCard({ project, index, inView }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass rounded-2xl overflow-hidden block group cursor-pointer"
      style={{ border: "0.5px solid rgba(30,86,245,0.22)" }}
    >
      {/* Thumbnail */}
      <div
        className={`relative h-44 flex items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
      >
        {/* Emoji bg */}
        <span
          className="absolute text-6xl opacity-15 select-none group-hover:scale-110 group-hover:opacity-25 transition-all duration-500"
          aria-hidden
        >
          {project.emoji}
        </span>

        {/* Label */}
        <span className="relative font-syne font-bold text-xs uppercase tracking-[.14em] text-white/60 group-hover:text-white/80 transition-colors duration-300">
          {project.client}
        </span>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          style={{
            background: "rgba(8,17,42,0.55)",
            backdropFilter: "blur(4px)",
          }}
        >
          <span className="text-white text-sm font-medium border border-white/30 px-5 py-2 rounded-full">
            View on Figma ↗
          </span>
        </motion.div>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-cyan text-[11px] uppercase tracking-widest mb-1.5">
          {project.sector}
        </p>
        <h3 className="font-syne font-bold text-base mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-xs leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Result badge */}
        <div
          className="text-[11px] text-cyan px-3 py-2 rounded-lg"
          style={{
            background: "rgba(0,201,200,.07)",
            borderLeft: "2px solid var(--cyan)",
          }}
        >
          {project.result}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" ref={ref} className="max-w-6xl mx-auto px-6 py-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <p className="flex items-center gap-2 text-cyan text-xs uppercase tracking-[.16em] mb-3">
          <span className="w-6 h-px bg-cyan" />
          Portfolio
        </p>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2
            className="font-syne font-extrabold tracking-tight"
            style={{ fontSize: "clamp(28px,4vw,46px)" }}
          >
            Selected Projects
          </h2>
          <a
            href="https://www.behance.net/arrozyadifalaqi"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted hover:text-cyan transition-colors"
          >
            View all on Behance →
          </a>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
