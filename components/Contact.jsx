"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personal } from "../data/portfolio";
import { useLang } from "./LangProvider";
import MagneticButton from "./MagneticButton";
import GradientBorder from "./GradientBorder";

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
    <section id="contact" ref={ref} className="contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="contact-wrap"
        >
          <div className="contact-glow contact-glow-1" />
          <div className="contact-glow contact-glow-2" />

          <div className="contact-inner">
            <div>
              <span className="tag tag-teal" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
                {t.contact.badge}
              </span>
              <h2 className="contact-title">{t.contact.title}</h2>
              <p className="contact-desc">{t.contact.subtitle}</p>
              <div className="contact-cta">
                <MagneticButton strength={0.3}>
                  <a href={`mailto:${personal.email}`} className="btn btn-primary">{t.contact.sendEmail}</a>
                </MagneticButton>
                <MagneticButton strength={0.3}>
                  <a href={`https://wa.me/${personal.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-outline">{t.contact.chatWa}</a>
                </MagneticButton>
              </div>
              <p className="mt-5 text-sm" style={{ color: "var(--fg-dim)" }}>
                {t.responseTimeText} · {personal.location}
              </p>
            </div>

            <div className="contact-cards">
              {contactLinks.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                >
                  <GradientBorder borderRadius="var(--radius)" borderWidth={1.5}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="contact-card"
                    >
                      <div className="contact-card-icon">{item.icon}</div>
                      <div>
                        <p className="contact-card-label">{item.label}</p>
                        <p className="contact-card-value">{item.value}</p>
                      </div>
                    </a>
                  </GradientBorder>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
