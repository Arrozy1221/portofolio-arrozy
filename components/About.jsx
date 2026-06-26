"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { personal } from "../data/portfolio";
import { useLang } from "./LangProvider";

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLang();

  return (
    <section id="about" ref={ref} className="section">
      <div className="container">
        <motion.div {...anim(0)} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-header">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </motion.div>

        {/* Row 1: Photo + Bio */}
        <div className="grid gap-4 lg:grid-cols-[340px_1fr] mb-4">
          {/* Photo card */}
          <motion.div {...anim(0.05)} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="card overflow-hidden"
            style={{ padding: 0, minHeight: "360px" }}
          >
            <div className="relative w-full h-full min-h-[360px]">
              <Image
                src={personal.photo}
                alt="Arrozy Adi Falaqi"
                fill
                className="object-cover"
                sizes="340px"
                style={{ borderRadius: "var(--radius)" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{
                  background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
                  borderRadius: "0 0 var(--radius) var(--radius)",
                }}
              >
                <p className="text-white font-bold text-lg font-heading">{personal.name}</p>
                <p className="text-white/70 text-sm">{personal.role}</p>
                <p className="text-white/50 text-xs mt-1">{personal.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Bio + Social */}
          <div className="flex flex-col gap-4">
            <motion.div {...anim(0.1)} animate={inView ? { opacity: 1, y: 0 } : {}} className="card p-6 flex-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--accent-light)" }}>Bio</p>
              <div className="space-y-3">
                {t.bio.map((p, i) => (
                  <p key={i} className="text-[0.95rem] leading-[1.85]" style={{ color: "var(--fg-muted)" }}>{p}</p>
                ))}
              </div>
            </motion.div>
            <motion.div {...anim(0.15)} animate={inView ? { opacity: 1, y: 0 } : {}} className="card p-5">
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "LinkedIn", href: personal.linkedin },
                  { label: "Behance", href: personal.behance },
                  { label: "Email", href: `mailto:${personal.email}` },
                  { label: "WhatsApp", href: `https://wa.me/${personal.whatsapp}` },
                ].map((item) => (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="tag tag-accent">
                    {item.label} ↗
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Row 2: KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {t.kpis.map((kpi, i) => (
            <motion.div key={kpi.label} {...anim(0.2 + i * 0.05)} animate={inView ? { opacity: 1, y: 0 } : {}}
              className="card p-5 text-center"
            >
              <div className="font-heading text-3xl font-extrabold text-gradient">{kpi.value}</div>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest" style={{ color: "var(--fg-dim)" }}>{kpi.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Row 3: Education + Process */}
        <div className="grid gap-4 lg:grid-cols-[1fr_1.5fr]">
          {/* Education */}
          <motion.div {...anim(0.25)} animate={inView ? { opacity: 1, y: 0 } : {}} className="card p-6">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--accent-light)" }}>{t.about.education}</p>
            <h3 className="font-heading text-lg font-bold" style={{ color: "var(--fg)" }}>{personal.education.university}</h3>
            <p className="mt-1 text-sm" style={{ color: "var(--fg-muted)" }}>{personal.education.major}</p>
            <p className="text-sm" style={{ color: "var(--fg-muted)" }}>{personal.education.year}</p>
            <div className="mt-3">
              <span className="tag tag-accent">GPA {personal.education.gpa}</span>
            </div>

            {/* Thesis / Skripsi */}
            <div className="mt-5 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--accent-2)" }}>
                {t.about.thesisLabel || "Thesis / Skripsi"}
              </p>
              <h4 className="font-heading text-sm font-bold leading-relaxed" style={{ color: "var(--fg)" }}>
                {personal.education.thesis}
              </h4>
              <p className="mt-2.5 text-[0.82rem] leading-[1.75]" style={{ color: "var(--fg-muted)" }}>
                {personal.education.thesisDesc}
              </p>

              {/* Methods */}
              <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "var(--fg-dim)" }}>
                {t.about.methodLabel || "Methods"}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {personal.education.thesisMethod.map((m) => (
                  <span key={m} className="tag tag-teal" style={{ fontSize: "0.65rem", padding: "0.25rem 0.6rem" }}>{m}</span>
                ))}
              </div>

              {/* Deliverables */}
              <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "var(--fg-dim)" }}>
                {t.about.deliverablesLabel || "Deliverables"}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {personal.education.thesisDeliverables.map((d) => (
                  <span key={d} className="tag" style={{ fontSize: "0.65rem", padding: "0.25rem 0.6rem" }}>{d}</span>
                ))}
              </div>

              {/* Tools */}
              <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-widest" style={{ color: "var(--fg-dim)" }}>
                {t.about.toolsLabel || "Tools"}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {personal.education.thesisTools.map((tool) => (
                  <span key={tool} className="tag tag-accent" style={{ fontSize: "0.65rem", padding: "0.25rem 0.6rem" }}>{tool}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Process — Visual Flow */}
          <motion.div {...anim(0.3)} animate={inView ? { opacity: 1, y: 0 } : {}} className="card p-6 flex flex-col h-full">
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--accent-light)" }}>{t.about.approach}</p>
            <h3 className="font-heading text-lg font-bold mb-5" style={{ color: "var(--fg)" }}>{t.about.approachTitle}</h3>

            {/* Visual flow diagram */}
            <div className="flex flex-col flex-1">
              {t.processSteps.map((step, i) => {
                const icons = ["🔍", "🧩", "🎨", "🔄", "🚀", "📊"];
                const colors = [
                  { bg: "rgba(108,92,231,0.08)", border: "rgba(108,92,231,0.15)", accent: "var(--accent-light)" },
                  { bg: "rgba(0,206,201,0.08)", border: "rgba(0,206,201,0.15)", accent: "var(--accent-2)" },
                  { bg: "rgba(253,121,168,0.08)", border: "rgba(253,121,168,0.15)", accent: "#fd79a8" },
                  { bg: "rgba(108,92,231,0.08)", border: "rgba(108,92,231,0.15)", accent: "var(--accent-light)" },
                  { bg: "rgba(0,206,201,0.08)", border: "rgba(0,206,201,0.15)", accent: "var(--accent-2)" },
                  { bg: "rgba(253,121,168,0.08)", border: "rgba(253,121,168,0.15)", accent: "#fd79a8" },
                ];
                return (
                  <div key={step.step} className={i < t.processSteps.length - 1 ? "flex flex-col flex-1" : "flex flex-col"}>
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl transition-all hover:scale-[1.01]"
                      style={{ background: colors[i].bg, border: `1px solid ${colors[i].border}` }}
                    >
                      <div className="flex flex-col items-center gap-1 flex-shrink-0">
                        <span className="text-2xl">{icons[i]}</span>
                        <span className="text-[0.6rem] font-bold" style={{ color: colors[i].accent }}>{step.step}</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-heading font-bold text-sm" style={{ color: "var(--fg)" }}>{step.title}</h4>
                        <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>{step.description}</p>
                      </div>
                    </div>
                    {/* Arrow connector */}
                    {i < t.processSteps.length - 1 && (
                      <div className="flex justify-center flex-1 min-h-[1.5rem]">
                        <div className="flex flex-col items-center justify-center w-full h-full py-1">
                          <div className="w-0.5 flex-1 rounded-full" style={{ background: "var(--border)", minHeight: "1rem" }} />
                          <span className="text-[0.6rem] leading-none mt-1" style={{ color: "var(--fg-dim)" }}>▼</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Summary tagline */}
            <div className="mt-4 pt-3.5 text-center" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="text-xs" style={{ color: "var(--fg-dim)" }}>
                🔁 {t.about.approachDesc || "Iterative process — repeat until the solution fits"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
