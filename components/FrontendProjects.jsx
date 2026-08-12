"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FileText, X } from "lucide-react";
import { useLang } from "./LangProvider";

function FrontendCard({ project, index, inView, onOpenManual, manualCta }) {
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

        {project.manualUrl && (
          <button type="button" className="manual-cta" onClick={() => onOpenManual(project)}>
            <FileText size={14} />
            {manualCta}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function FrontendProjects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { t } = useLang();
  const [manualProject, setManualProject] = useState(null);

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
            <FrontendCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
              onOpenManual={setManualProject}
              manualCta={t.frontendProjects.manualCta}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {manualProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lightbox-backdrop"
            onClick={() => setManualProject(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lightbox-content lightbox-content-pdf"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setManualProject(null)}
                className="lightbox-close"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <iframe
                src={manualProject.manualUrl}
                title={`${manualProject.title} User Manual`}
                className="pdf-viewer-frame"
              />

              <div className="pdf-viewer-fallback">
                <a href={manualProject.manualUrl} target="_blank" rel="noreferrer" className="tag tag-accent">
                  {t.frontendProjects.manualOpenNewTab}
                </a>
                <a href={manualProject.manualUrl} download className="tag tag-teal">
                  {t.frontendProjects.manualDownload}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
