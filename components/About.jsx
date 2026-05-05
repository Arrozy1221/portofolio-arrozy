"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { personal } from "../data/portfolio";
import { useLang } from "./LangProvider";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const { t } = useLang();

  return (
    <section id="about" ref={ref} className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="section-heading"
      >
        <p className="section-eyebrow">{t.about.eyebrow}</p>
        <div className="section-heading-row">
          <div><h2 className="section-title">{t.about.title}</h2></div>
          <p className="section-copy max-w-xl">{t.about.subtitle}</p>
        </div>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="stack-card"
        >
          <div className="profile-card">
            <div className="profile-avatar-wrap">
              <div className="profile-avatar image-avatar">
                <Image src={personal.photo} fill className="object-cover" alt="Foto Profil Arrozy Adi Falaqi" />
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-cyan">{t.about.profile}</p>
              <h3 className="mt-3 font-syne text-2xl font-bold text-foreground">{personal.role}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-fg">{personal.location}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "LinkedIn", href: personal.linkedin },
                { label: "Behance", href: personal.behance },
                { label: "Email", href: `mailto:${personal.email}` },
                { label: "WhatsApp", href: `https://wa.me/${personal.whatsapp}` },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="chip-outline">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="info-card mt-5">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan">{t.about.education}</p>
            <h3 className="mt-3 font-syne text-xl font-bold text-foreground">{personal.education.university}</h3>
            <p className="mt-2 text-sm text-muted-fg">{personal.education.major}</p>
            <p className="mt-1 text-sm text-muted-fg">{personal.education.year}</p>
            <p className="mt-4 text-sm font-medium text-foreground">GPA {personal.education.gpa}</p>
            <p className="mt-3 text-sm leading-6 text-muted-fg">{personal.education.thesis}</p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {t.kpis.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + index * 0.06 }}
                className="metric-card"
              >
                <div className="font-syne text-3xl font-extrabold text-foreground">{item.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-fg">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="info-card">
            {t.bio.map((paragraph, index) => (
              <p key={index} className="text-[15px] leading-8 text-muted-fg">{paragraph}</p>
            ))}
          </div>

          <div className="info-card">
            <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-cyan">{t.about.approach}</p>
                <h3 className="mt-2 font-syne text-2xl font-bold text-foreground">{t.about.approachTitle}</h3>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-fg">{t.about.approachDesc}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {t.processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 18 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.28 + index * 0.08 }}
                  className="process-card"
                >
                  <span className="process-step">{step.step}</span>
                  <h4 className="mt-4 font-syne text-lg font-bold text-foreground">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted-fg">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
