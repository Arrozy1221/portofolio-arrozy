"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useLang } from "./LangProvider";

function ProjectCard({ project, index, inView, t, featured }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`project-card group ${featured ? "project-featured" : ""}`}
    >
      <div className={`project-thumb ${featured ? "" : ""}`}>
        {project.image && (
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        )}
        <div className="project-thumb-overlay">
          <div className="project-thumb-tags">
            <span className="project-thumb-tag">{project.sector}</span>
            <span className="project-thumb-tag">{project.year}</span>
          </div>
          <h3 className="project-thumb-title">{project.title}</h3>
        </div>
      </div>

      <div className="project-content">
        <div className="project-client">
          {project.logo && (
            <div className="project-client-logo">
              <Image src={project.logo} alt={project.client} fill className="object-contain p-0.5" sizes="32px" />
            </div>
          )}
          <span className="project-client-name">{project.client}</span>
        </div>

        <p className="project-desc">{project.description}</p>

        <div className="project-impact">
          <p className="project-impact-label">{t.projects.impact}</p>
          <p className="project-impact-text">{project.impact}</p>
        </div>

        <div className="project-footer">
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <span className="project-arrow">↗</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  const { t } = useLang();

  return (
    <section id="projects" ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="eyebrow">{t.projects.eyebrow}</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="section-title">{t.projects.title}</h2>
            <a href="https://www.behance.net/arrozyadifalaqi" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: "0.6rem 1.2rem", fontSize: "0.8rem" }}>
              {t.projects.viewAll} ↗
            </a>
          </div>
        </motion.div>

        <div className="project-grid">
          {t.projectsList.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
              t={t}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
