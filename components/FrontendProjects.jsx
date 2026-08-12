"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useLang } from "./LangProvider";

function FrontendCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="project-card h-full"
    >
      <div className="project-thumb">
        <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
        <div className="project-thumb-overlay">
          <div className="project-thumb-tags">
            <span className="project-thumb-tag">{project.sector}</span>
          </div>
          <h3 className="project-thumb-title">{project.title}</h3>
        </div>
      </div>

      <div className="project-content">
        <div className="project-client">
          <span className="project-client-name">{project.client}</span>
        </div>

        <p className="project-desc">{project.description}</p>

        <div className="project-footer">
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FrontendProjects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { t } = useLang();

  const list = t.frontendProjectsList || [];
  if (list.length === 0) return null;

  return (
    <section id="frontend" ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="eyebrow">{t.frontendProjects.eyebrow}</p>
          <h2 className="section-title">{t.frontendProjects.title}</h2>
          {t.frontendProjects.subtitle && (
            <p className="section-subtitle">{t.frontendProjects.subtitle}</p>
          )}
        </motion.div>

        <div className="project-grid">
          {list.map((project, index) => (
            <FrontendCard key={project.id} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
