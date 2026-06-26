"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "../data/portfolio";
import { useLang } from "./LangProvider";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left - Text */}
          <div>
            <motion.div {...fadeUp(0.05)}>
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                {personal.available ? t.hero.available : t.hero.unavailable}
              </div>
            </motion.div>

            <motion.h1 {...fadeUp(0.15)} className="hero-name">
              <TextReveal text={personal.name} delay={0.2} />
            </motion.h1>
            <motion.p {...fadeUp(0.25)} className="hero-role text-gradient">
              <TextReveal text={personal.role} delay={0.5} />
            </motion.p>

            <motion.p {...fadeUp(0.35)} className="hero-desc">
              {t.hero.headline}
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="hero-cta">
              <MagneticButton strength={0.25}>
                <a href="#projects" className="btn btn-primary">{t.hero.viewWork}</a>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <a href="#contact" className="btn btn-outline">{t.hero.collaborate}</a>
              </MagneticButton>
            </motion.div>

            <motion.div {...fadeUp(0.55)} className="hero-stats">
              {t.stats.map((s) => (
                <div key={s.label} className="hero-stat glow-pulse-hover">
                  <div className="hero-stat-value text-gradient">{s.value}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Photo + floating cards */}
          <motion.div {...fadeUp(0.3)} className="hero-profile">
            <div className="hero-photo-wrap">
              <Image
                src={personal.photo}
                alt="Arrozy Adi Falaqi"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating card: location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hero-floating-card hero-floating-card-1 parallax-float"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-accent-2 mb-1" style={{ color: "var(--accent-2)" }}>
                {t.hero.basedIn}
              </p>
              <p className="text-sm font-semibold" style={{ color: "var(--fg)" }}>{personal.location.split(",")[0]}</p>
            </motion.div>

            {/* Floating card: specialties */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="hero-floating-card hero-floating-card-2 parallax-float-delayed"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--accent-light)" }}>
                Focus
              </p>
              <div className="flex flex-wrap gap-1.5">
                {t.specialties.slice(0, 3).map((s) => (
                  <span key={s} className="tag tag-accent" style={{ fontSize: "0.65rem", padding: "0.25rem 0.55rem" }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
