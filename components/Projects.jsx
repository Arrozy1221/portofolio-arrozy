"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useLang } from "./LangProvider";

function ProjectCard({ project, index, inView, t }) {
  const href = project.caseStudyUrl || project.link;
  const target = project.caseStudyUrl ? "_self" : "_blank";
  const rel = project.caseStudyUrl ? undefined : "noreferrer";
  const hasCaseStudy = !!project.caseStudyUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={href}
          target={target}
          rel={rel}
          className="project-card group h-full"
        >
          <div className="project-thumb">
            {project.image && (
              <Image src={project.image} alt={project.title} fill className={`object-cover ${project.imagePosition || "object-center"}`} />
            )}
            <div className="project-thumb-overlay">
              <div className="project-thumb-tags">
                <span className="project-thumb-tag">{project.sector}</span>
              </div>
              <h3 className="project-thumb-title">{project.title}</h3>
            </div>
            {hasCaseStudy && (
              <span className="project-case-study-badge">Case Study</span>
            )}
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
              <span className="project-arrow">{hasCaseStudy ? "→" : "↗"}</span>
            </div>
          </div>
        </a>
    </motion.div>
  );
}

function GroupHeader({ emoji, title, subtitle, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="project-group-header"
    >
      <div className="project-group-label">
        <span className="project-group-emoji">{emoji}</span>
        <span>{title}</span>
      </div>
      {subtitle && <p className="project-group-sub">{subtitle}</p>}
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { t, lang } = useLang();

  const mstProjects = t.projectsList.filter((p) => p.group === "mst");
  const personalProjects = t.projectsList.filter((p) => p.group === "personal");

  const mstLabel = lang === "en" ? "MST — Government & Enterprise Projects" : "MST — Proyek Pemerintah & Enterprise";
  const mstSub = lang === "en"
    ? "Work delivered at PT Mitra Sinerji Teknoindo for public sector clients"
    : "Proyek yang dikerjakan di PT Mitra Sinerji Teknoindo untuk klien sektor publik";
  const personalLabel = lang === "en" ? "Personal & Bootcamp Projects" : "Proyek Personal & Bootcamp";
  const personalSub = lang === "en"
    ? "Self-initiated and bootcamp work showcasing end-to-end design thinking"
    : "Karya mandiri dan bootcamp yang menampilkan proses desain dari awal hingga akhir";

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
          <h2 className="section-title">{t.projects.title}</h2>
        </motion.div>

        {/* MST Projects Group */}
        <div className="project-group">
          <GroupHeader
            emoji="🏛️"
            title={mstLabel}
            subtitle={mstSub}
            inView={inView}
          />
          <div className="project-grid">
            {mstProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                inView={inView}
                t={t}
              />
            ))}
          </div>
        </div>

        {/* Personal Projects Group */}
        {personalProjects.length > 0 && (
          <div className="project-group" style={{ marginTop: "64px" }}>
            <GroupHeader
              emoji="🎨"
              title={personalLabel}
              subtitle={personalSub}
              inView={inView}
            />
            <div className="project-grid">
              {personalProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  inView={inView}
                  t={t}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}