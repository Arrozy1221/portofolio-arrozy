"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useLang } from "./LangProvider";

function ProjectCard({ project, index, inView, t }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="project-card group"
    >
      <div className={`project-cover bg-gradient-to-br ${project.color}`}>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="project-cover-image"
          />
        )}
        <div className="project-cover-content">
          <div className="project-cover-top">
            <span className="project-cover-client">{project.client}</span>
            <span className="project-cover-year">{project.year}</span>
          </div>
          <div>
            <p className="project-cover-sector">{project.sector}</p>
            <p className="mt-2 text-sm text-white/75">{project.role}</p>
          </div>
        </div>
      </div>

      <div className="project-body">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            {project.logo && (
              <span className="project-body-logo">
                <Image src={project.logo} alt={project.client} width={40} height={40} className="object-contain w-10 h-10" />
              </span>
            )}
            <div>
              <p className="project-meta">{project.client}</p>
              <h3 className="mt-1 font-syne text-xl font-bold text-foreground">{project.title}</h3>
            </div>
          </div>
          <span className="project-link-arrow">↗</span>
        </div>
        {/* My Role */}
        {project.myRole && (
          <p className="mt-3 text-xs font-medium text-cyan/90 italic">{project.myRole}</p>
        )}

        <p className="mt-3 text-sm leading-7 text-muted-fg">{project.description}</p>

        {/* Process Steps */}
        {project.process && project.process.length > 0 && (
          <div className="project-process-box">
            <p className="text-[11px] uppercase tracking-[0.16em] text-cyan mb-2">{t.projects.process || "Process"}</p>
            <ol className="space-y-1">
              {project.process.map((step, i) => (
                <li key={i} className="text-xs leading-5 text-muted-fg flex gap-2">
                  <span className="text-cyan/70 font-mono text-[10px] mt-px">{String(i + 1).padStart(2, '0')}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="project-impact-box">
          <p className="text-[11px] uppercase tracking-[0.16em] text-cyan">{t.projects.impact}</p>
          <p className="mt-2 text-sm leading-6 text-foreground/90">{project.impact}</p>
        </div>
        <p className="mt-3 text-sm leading-6 text-muted-fg">{project.result}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip-outline">{tag}</span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLang();

  return (
    <section id="projects" ref={ref} className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="section-heading"
      >
        <p className="section-eyebrow">{t.projects.eyebrow}</p>
        <div className="section-heading-row">
          <div><h2 className="section-title">{t.projects.title}</h2></div>
          <a href="https://www.behance.net/arrozyadifalaqi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-fg transition-colors hover:text-cyan">
            {t.projects.viewAll} <span>↗</span>
          </a>
        </div>
      </motion.div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {t.projectsList.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} inView={inView} t={t} />
        ))}
      </div>
    </section>
  );
}
