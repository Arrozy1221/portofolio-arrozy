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
    <section id="creative-works" ref={ref} className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="section-heading"
      >
        <p className="section-eyebrow">{sectionEyebrow}</p>
        <h2 className="section-title">{sectionTitle}</h2>
      </motion.div>

      {/* Webinar Posters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="text-lg font-syne font-bold text-foreground mb-5">{webinarLabel}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {webinarPosters.map((poster, i) => (
            <motion.button
              key={poster.src}
              type="button"
              onClick={() => setLightbox(poster)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="creative-work-card group cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-2xl">⤢</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-800/90 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <X size={18} />
              </button>
              <div className="relative w-full h-auto max-h-[85vh] overflow-hidden rounded-xl">
                <img
                  src={lightbox.src}
                  alt={lightbox.alt}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
