"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "../data/portfolio";
import { useLang } from "./LangProvider";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="hero" className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div {...fadeUp(0.05)} className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-cyan">
              <span className="h-2 w-2 rounded-full bg-cyan blink" />
              {personal.available ? t.hero.available : t.hero.unavailable}
            </span>
            <span className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-muted-fg">
              {t.hero.basedIn}
            </span>
          </motion.div>

          <motion.p {...fadeUp(0.12)} className="mb-4 text-sm uppercase tracking-[0.22em] text-blue-l">
            {t.hero.portfolioLabel}
          </motion.p>

          <motion.h1
            {...fadeUp(0.22)}
            className="max-w-4xl font-syne font-extrabold leading-[0.98] tracking-[-0.05em] text-foreground"
            style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
          >
            <span className="whitespace-nowrap">{personal.name}</span>
            <span className="mt-3 block gradient-text">{personal.role}</span>
          </motion.h1>

          <motion.p {...fadeUp(0.34)} className="mt-6 max-w-2xl text-base leading-8 text-muted-fg md:text-lg">
            {t.hero.headline}
          </motion.p>

          <motion.p {...fadeUp(0.42)} className="mt-4 max-w-xl text-sm leading-7 text-muted-fg/90 md:text-[15px]">
            {t.hero.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="primary-button">{t.hero.viewWork}</a>
            <a href="#contact" className="secondary-button">{t.hero.collaborate}</a>
          </motion.div>

          <motion.div {...fadeUp(0.58)} className="mt-8 flex flex-wrap gap-2">
            {t.specialties.map((item) => (
              <span key={item} className="chip-soft">{item}</span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.68)} className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="font-syne text-3xl font-extrabold gradient-text">{s.value}</div>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-fg">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.3)} className="relative">
          <div className="hero-panel">
            <div className="hero-panel-top">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-cyan">{t.hero.snapshot}</p>
                <h2 className="mt-3 font-syne text-3xl font-bold leading-tight text-foreground">
                  {t.hero.snapshotTitle}
                </h2>
              </div>
              <div className="hero-profile-ring">
                <Image src={personal.photo} fill className="object-cover rounded-full" alt="Arrozy Adi Falaqi" />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {t.strengths.map((item) => (
                <div key={item.title} className="feature-card">
                  <div className="feature-dot" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-fg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="mini-panel">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-fg">{t.hero.focusSectors}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.focusAreas.map((item) => (
                    <span key={item} className="chip-outline">{item}</span>
                  ))}
                </div>
              </div>
              <div className="mini-panel">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-fg">{t.hero.responseTime}</p>
                <p className="mt-3 text-sm leading-6 text-foreground">{t.responseTimeText}</p>
                <p className="mt-2 text-sm leading-6 text-muted-fg">{t.hero.responseDesc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
