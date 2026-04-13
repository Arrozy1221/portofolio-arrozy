"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personal } from "../data/portfolio";

const contactLinks = [
  {
    label: "Email",
    icon: "✉",
    href: `mailto:${personal.email}`,
    value: personal.email,
  },
  {
    label: "WhatsApp",
    icon: "💬",
    href: `https://wa.me/${personal.whatsapp}`,
    value: "+62 812 9802 3537",
  },
  {
    label: "LinkedIn",
    icon: "in",
    href: personal.linkedin,
    value: "arrozy-adi-falaqi",
  },
  {
    label: "Behance",
    icon: "Bē",
    href: personal.behance,
    value: "arrozyadifalaqi",
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="contact" ref={ref} className="max-w-6xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative glass rounded-3xl px-8 py-16 text-center overflow-hidden"
      >
        {/* BG orb */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "var(--blue)",
            filter: "blur(120px)",
            opacity: 0.09,
          }}
        />

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center font-syne font-extrabold text-2xl"
          style={{
            background: "linear-gradient(135deg, var(--blue), var(--cyan))",
            boxShadow:
              "0 0 0 5px rgba(30,86,245,.2), 0 0 40px rgba(30,86,245,.3)",
          }}
        >
          AF
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-syne font-extrabold text-4xl mb-3 relative"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted mb-10 relative"
        >
          Open for freelance projects, full-time roles, and design
          collaborations.
        </motion.p>

        {/* Contact links grid */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {contactLinks.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-white/8 bg-white/3 hover:border-blue/50 hover:bg-blue/8 transition-all duration-300 group"
            >
              <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sm font-bold group-hover:border-blue-l transition-colors">
                {c.icon}
              </span>
              <span className="text-xs font-medium text-white">{c.label}</span>
              <span className="text-[10px] text-muted truncate max-w-full px-1">
                {c.value}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="relative mt-10 text-xs text-muted"
        >
          📍 {personal.location}
        </motion.p>
      </motion.div>
    </section>
  );
}
