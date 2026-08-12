"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useLang } from "./LangProvider";

function FigmaIcon() {
  return (
    <svg width="10" height="15" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

function ProjectCard({ project, index, inView, t }) {
  const caseStudyHref = project.caseStudyUrl || project.link;
  const isInternalCase = !!project.caseStudyUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
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

        <div className="project-tags" style={{ marginTop: "1rem" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="project-action project-action-figma"
            >
              <FigmaIcon />
              {t.projects.viewPrototype}
            </a>
          )}
          {caseStudyHref && (
            <a
              href={caseStudyHref}
              target={isInternalCase ? "_self" : "_blank"}
              rel={isInternalCase ? undefined : "noreferrer"}
              className="project-action project-action-primary"
            >
              {t.projects.viewCaseStudy}
              <span aria-hidden="true">{isInternalCase ? "→" : "↗"}</span>
            </a>
          )}
        </div>
      </div>
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
    <div ref={ref}>
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
  );
}