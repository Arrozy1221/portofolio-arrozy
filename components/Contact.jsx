"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personal } from "../data/portfolio";
import { useLang } from "./LangProvider";

const contactLinks = [
  { label: "Email", icon: "✉", href: `mailto:${personal.email}`, value: personal.email },
  { label: "WhatsApp", icon: "💬", href: `https://wa.me/${personal.whatsapp}`, value: "+62 812 9802 3537" },
  { label: "LinkedIn", icon: "in", href: personal.linkedin, value: "arrozy-adi-falaqi" },
  { label: "Behance", icon: "Bē", href: personal.behance, value: "arrozyadifalaqi" },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const { t } = useLang();

  return (
    <section id="contact" ref={ref} className="section-shell pt-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="contact-shell"
      >
        <div className="contact-glow" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-cyan">
              {t.contact.badge}
            </span>
            <h2 className="mt-6 font-syne text-[clamp(34px,5vw,58px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-foreground">
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-fg">{t.contact.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${personal.email}`} className="primary-button">{t.contact.sendEmail}</a>
              <a href={`https://wa.me/${personal.whatsapp}`} target="_blank" rel="noreferrer" className="secondary-button">{t.contact.chatWa}</a>
            </div>
            <p className="mt-6 text-sm text-muted-fg">{t.responseTimeText} · {personal.location}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
                className="contact-card"
              >
                <div className="contact-icon">{item.icon}</div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-fg">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
