"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Link2,
  Globe,
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  Star,
  ChevronRight,
} from "lucide-react";
import { personal, experiences, skills, softSkills, certifications } from "../../data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const TOOL_SKILLS = ["Figma", "Framer", "Design Systems", "Adobe Photoshop", "Adobe Illustrator", "UI Animation", "Webflow"];
const RESEARCH_SKILLS = ["UX Research", "User Testing", "Journey Mapping", "A/B Testing"];
const DEV_SKILLS = ["HTML / CSS", "JavaScript", "React / Next.js", "Tailwind CSS"];
const AI_SKILLS = ["ChatGPT", "Claude", "Gemini", "Midjourney"];

const SELECTED_PROJECTS = [
  { name: "e-Sertifikat Next Gen", client: "Kominfo", impact: "Simplified issuance flow from 7 steps to 4", tags: ["Web", "Gov Platform"] },
  { name: "Admin SIMONTILA", client: "Kemendikbud", impact: "Restructured dashboard navigation for faster admin workflows", tags: ["Dashboard", "Admin UX"] },
  { name: "MBKM UT Platform", client: "Universitas Terbuka", impact: "Unified student registration into one seamless platform", tags: ["Education", "Web Design"] },
  { name: "TTM UT Attendance App", client: "Universitas Terbuka", impact: "Friction-free field attendance for students", tags: ["Mobile App", "Education"] },
  { name: "BRAVO System Redesign", client: "PUPR", impact: "Replaced dense legacy tables with card-based status view", tags: ["Redesign", "Dashboard"] },
  { name: "Public Service App", client: "Government Client", impact: "Validated with 12 citizen usability tests", tags: ["Mobile", "UX Research"] },
];

export default function CVPage() {
  return (
    <div className="cv-page">
      {/* ── Ambient background ── */}
      <div className="ambient-bg" aria-hidden>
        <div className="ambient-blob ambient-blob-1" />
        <div className="ambient-blob ambient-blob-2" />
      </div>

      {/* ── Top bar ── */}
      <motion.div {...fadeUp(0)} className="cv-topbar">
        <div className="cv-topbar-inner">
          <a href="/" className="cv-back">
            <ChevronRight size={14} style={{ transform: "rotate(180deg)" }} />
            Back to portfolio
          </a>
          <div className="cv-topbar-actions">
            <span className="cv-available-badge">
              <span className="cv-available-dot" />
              Open to opportunities
            </span>
            <a
              href="/Arrozy_Adi_Falaqi_CV_UIUX_Designer.pdf"
              download
              className="btn btn-primary cv-download-btn"
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>
        </div>
      </motion.div>

      <main className="cv-main">
        {/* ══════════ HEADER ══════════ */}
        <motion.section {...fadeUp(0.05)} className="cv-header card-elevated">
          <div className="cv-header-inner">
            <div className="cv-photo-wrap">
              <Image
                src={personal.photo}
                alt={personal.name}
                fill
                className="object-cover object-top"
                sizes="120px"
                priority
              />
            </div>

            <div className="cv-header-body">
              <div className="cv-header-name-row">
                <div>
                  <h1 className="cv-name font-heading">{personal.name}</h1>
                  <p className="cv-role text-gradient">{personal.role}</p>
                </div>
              </div>
              <p className="cv-headline">{personal.headline}</p>
              <div className="cv-contacts">
                <a href={`mailto:${personal.email}`} className="cv-contact-item">
                  <Mail size={13} />{personal.email}
                </a>
                <a href={`tel:${personal.phone}`} className="cv-contact-item">
                  <Phone size={13} />{personal.phone}
                </a>
                <span className="cv-contact-item">
                  <MapPin size={13} />Bandung, Indonesia
                </span>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                  <Link2 size={13} />LinkedIn
                </a>
                <a href={personal.behance} target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                  <Globe size={13} />Behance
                </a>
                <a href="/" className="cv-contact-item">
                  <ExternalLink size={13} />Portfolio
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ══════════ TWO-COLUMN LAYOUT ══════════ */}
        <div className="cv-grid">

          {/* ────── LEFT COLUMN ────── */}
          <div className="cv-left">

            {/* Summary */}
            <motion.div {...fadeUp(0.1)} className="cv-section">
              <h2 className="cv-section-title">
                <span className="cv-section-icon"><Star size={14} /></span>
                Summary
              </h2>
              <p className="cv-body-text">{personal.bio[0]}</p>
              <p className="cv-body-text" style={{ marginTop: "0.65rem" }}>{personal.bio[1]}</p>
            </motion.div>

            {/* Experience */}
            <motion.div {...fadeUp(0.13)} className="cv-section">
              <h2 className="cv-section-title">
                <span className="cv-section-icon"><Briefcase size={14} /></span>
                Experience
              </h2>
              <div className="cv-exp-list">
                {experiences.filter(e => e.role && Array.isArray(e.highlights)).map((exp) => (
                  <div key={exp.id} className="cv-exp-item">
                    <div className="cv-exp-header">
                      <div className="cv-exp-meta">
                        <span className="cv-exp-role">{exp.role}</span>
                        {exp.current && <span className="cv-badge-current">Current</span>}
                      </div>
                      <span className="cv-exp-period">{exp.period}</span>
                    </div>
                    <p className="cv-exp-company">
                      {exp.company} · {exp.location}
                    </p>
                    <ul className="cv-exp-highlights">
                      {(exp.highlights || []).slice(0, exp.current ? 4 : 3).map((h, i) => (
                        <li key={i}>
                          <span className="cv-bullet" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="cv-exp-tags">
                      {(exp.tags || []).map((t) => (
                        <span key={t} className="cv-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Selected Projects */}
            <motion.div {...fadeUp(0.16)} className="cv-section">
              <h2 className="cv-section-title">
                <span className="cv-section-icon"><Layers size={14} /></span>
                Selected Projects
              </h2>
              <div className="cv-projects-grid">
                {SELECTED_PROJECTS.map((p) => (
                  <div key={p.name} className="cv-project-card card">
                    <div className="cv-project-header">
                      <span className="cv-project-name">{p.name}</span>
                      <span className="cv-project-client">{p.client}</span>
                    </div>
                    <p className="cv-project-impact">{p.impact}</p>
                    <div className="cv-exp-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="cv-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ────── RIGHT COLUMN ────── */}
          <div className="cv-right">

            {/* Education */}
            <motion.div {...fadeUp(0.1)} className="cv-section">
              <h2 className="cv-section-title">
                <span className="cv-section-icon"><GraduationCap size={14} /></span>
                Education
              </h2>
              <div className="cv-edu-card card">
                <p className="cv-edu-uni">{personal.education.university}</p>
                <p className="cv-edu-major">{personal.education.major}</p>
                <div className="cv-edu-meta">
                  <span>{personal.education.year}</span>
                  <span className="cv-edu-gpa">GPA {personal.education.gpa}</span>
                </div>
                <p className="cv-edu-thesis">{personal.education.thesis}</p>
              </div>
            </motion.div>

            {/* Design & Tools */}
            <motion.div {...fadeUp(0.13)} className="cv-section">
              <h2 className="cv-section-title">
                <span className="cv-section-icon"><Layers size={14} /></span>
                Skills
              </h2>

              <div className="cv-skill-group">
                <p className="cv-skill-label">Design & Tools</p>
                <div className="cv-skill-chips">
                  {TOOL_SKILLS.map((s) => <span key={s} className="cv-chip cv-chip-accent">{s}</span>)}
                </div>
              </div>

              <div className="cv-skill-group">
                <p className="cv-skill-label">UX Research</p>
                <div className="cv-skill-chips">
                  {RESEARCH_SKILLS.map((s) => <span key={s} className="cv-chip cv-chip-teal">{s}</span>)}
                </div>
              </div>

              <div className="cv-skill-group">
                <p className="cv-skill-label">Development</p>
                <div className="cv-skill-chips">
                  {DEV_SKILLS.map((s) => <span key={s} className="cv-chip">{s}</span>)}
                </div>
              </div>

              <div className="cv-skill-group">
                <p className="cv-skill-label">AI Tools</p>
                <div className="cv-skill-chips">
                  {AI_SKILLS.map((s) => <span key={s} className="cv-chip cv-chip-pink">{s}</span>)}
                </div>
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div {...fadeUp(0.16)} className="cv-section">
              <h2 className="cv-section-title">
                <span className="cv-section-icon"><Star size={14} /></span>
                Soft Skills
              </h2>
              <div className="cv-skill-chips">
                {softSkills.map((s) => (
                  <span key={s} className="cv-chip">{s}</span>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div {...fadeUp(0.19)} className="cv-section">
              <h2 className="cv-section-title">
                <span className="cv-section-icon"><Award size={14} /></span>
                Certifications
              </h2>
              <div className="cv-cert-list">
                {certifications.filter(c => c.title && c.issuer && !c.sector && !c.description).map((c, i) => (
                  <div key={i} className="cv-cert-item card">
                    <p className="cv-cert-title">{c.title}</p>
                    <p className="cv-cert-issuer">{c.issuer} · {c.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div {...fadeUp(0.22)} className="cv-section">
              <h2 className="cv-section-title">
                <span className="cv-section-icon"><Globe size={14} /></span>
                Languages
              </h2>
              <div className="cv-lang-list">
                <div className="cv-lang-item">
                  <span className="cv-lang-name">Indonesian</span>
                  <span className="cv-lang-level">Native</span>
                </div>
                <div className="cv-lang-item">
                  <span className="cv-lang-name">English</span>
                  <span className="cv-lang-level">Professional</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Footer ── */}
        <motion.div {...fadeUp(0.25)} className="cv-footer">
          <p>
            This CV is generated from my live portfolio ·{" "}
            <a href="/">arrozy.dev</a> ·{" "}
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </motion.div>
      </main>
    </div>
  );
}
