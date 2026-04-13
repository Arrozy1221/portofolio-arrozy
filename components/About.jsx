"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image"; // 1. Import Image dari Next.js ditambahkan di sini
import { personal } from "../data/portfolio";

const kpis = [
  { value: "2+", label: "Years in UI/UX" },
  { value: "3.73", label: "GPA / 4.00" },
  { value: "25%", label: "Avg. satisfaction boost" },
  { value: "5+", label: "Gov. & private projects" },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="max-w-6xl mx-auto px-6 py-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <p className="flex items-center gap-2 text-cyan text-xs uppercase tracking-[.16em] mb-3">
          <span className="w-6 h-px bg-cyan" />
          Who I Am
        </p>
        <h2
          className="font-syne font-extrabold tracking-tight"
          style={{ fontSize: "clamp(28px,4vw,46px)" }}
        >
          About Me
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-[1fr_1.7fr] gap-16 items-center">
        {/* Left — avatar */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Avatar ring */}
          <div className="float-anim">
            {/* 2. Tambahkan class "relative" dan "overflow-hidden" pada div pembungkus foto */}
            <div
              className="relative w-44 h-44 rounded-full overflow-hidden"
              style={{
                boxShadow:
                  "0 0 0 6px rgba(30,86,245,.2), 0 0 60px rgba(30,86,245,.28)",
              }}
            >
              {/* 3. Komponen Image yang sudah diaktifkan */}
              <Image
                src={personal.photo}
                fill
                className="object-cover"
                alt="Foto Profil Arrozy Adi Falaqi"
              />
            </div>
          </div>

          {/* Social chips */}
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "LinkedIn", href: personal.linkedin },
              { label: "Behance", href: personal.behance },
              { label: "Email", href: `mailto:${personal.email}` },
              { label: "WhatsApp", href: `https://wa.me/${personal.whatsapp}` },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full text-xs text-muted border border-white/10 hover:border-cyan hover:text-cyan transition-all duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Education card */}
          <div className="glass rounded-2xl p-5 w-full text-sm">
            <p className="text-cyan text-xs uppercase tracking-widest mb-2">
              Education
            </p>
            <p className="font-syne font-bold text-base">
              {personal.education.university}
            </p>
            <p className="text-muted text-xs mt-1">
              {personal.education.major}
            </p>
            <p className="text-muted text-xs">{personal.education.year}</p>
            <p className="text-cyan font-medium mt-3">
              GPA {personal.education.gpa}
            </p>
          </div>
        </motion.div>

        {/* Right — text */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {personal.bio.map((p, i) => (
            <p key={i} className="text-muted leading-[1.82] mb-4 text-[15px]">
              {p}
            </p>
          ))}

          {/* KPI grid */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            {kpis.map((k, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.08,
                  ease: "easeOut",
                }}
                className="glass rounded-2xl p-5"
              >
                <div className="font-syne font-extrabold text-3xl text-cyan">
                  {k.value}
                </div>
                <div className="text-muted text-xs mt-1">{k.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
