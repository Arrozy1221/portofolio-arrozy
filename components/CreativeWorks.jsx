"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { X } from "lucide-react";
import { useLang } from "./LangProvider";

const webinarPosters = [
  { src: "/works/webinar-poster.png", alt: "Poster Webinar" },
  { src: "/works/webinar-25-april.png", alt: "Poster Webinar 25 April" },
  { src: "/works/webinar-14-maret.png", alt: "Poster Webinar 14 Maret 2026" },
  { src: "/works/webinar-ig.png", alt: "Poster Webinar IG" },
];

export default function CreativeWorks() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { t } = useLang();
  const [lightbox, setLightbox] = useState(null);

  const sectionTitle = t.creativeWorks?.title || "Creative Works";
  const sectionEyebrow = t.creativeWorks?.eyebrow || "Beyond UI/UX";
  const webinarLabel = t.creativeWorks?.webinar || "Webinar Poster Design";

  return (
    <section id="creative-works" ref={ref} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <p className="eyebrow">{sectionEyebrow}</p>
          <h2 className="section-title">{sectionTitle}</h2>
        </motion.div>

        <p className="font-heading font-bold text-lg mb-5" style={{ color: "var(--fg)" }}>{webinarLabel}</p>

        <div className="gallery-grid">
          {webinarPosters.map((poster, i) => (
            <motion.button
              key={poster.src}
              type="button"
              onClick={() => setLightbox(poster)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.07 }}
              className="gallery-item"
            >
              <Image src={poster.src} alt={poster.alt} fill className="object-cover" />
              <div className="gallery-overlay">
                <span>⤢</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lightbox-backdrop"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" onClick={() => setLightbox(null)} className="lightbox-close">
                <X size={16} />
              </button>
              <img src={lightbox.src} alt={lightbox.alt} className="lightbox-img" />
              <p className="mt-3 text-center text-sm" style={{ color: "var(--fg-dim)" }}>{lightbox.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
