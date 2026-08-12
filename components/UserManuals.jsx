"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, X } from "lucide-react";
import { useLang } from "./LangProvider";

function ManualCard({ manual, index, inView, onPreview, previewCta }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="manual-card"
    >
      <div className="manual-card-top">
        <div className="manual-card-icon">
          <FileText size={20} />
        </div>
        <div>
          <p className="manual-card-project">{manual.project}</p>
          <h3 className="manual-card-title">{manual.title}</h3>
        </div>
      </div>

      <p className="manual-card-desc">{manual.description}</p>
      <p className="manual-card-meta">{manual.meta}</p>

      <div className="manual-card-actions">
        <button type="button" className="manual-cta" onClick={() => onPreview(manual)}>
          <FileText size={14} />
          {previewCta}
        </button>
      </div>
    </motion.div>
  );
}

export default function UserManuals() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const { t } = useLang();
  const [activeManual, setActiveManual] = useState(null);

  const list = t.userManualsList || [];
  if (list.length === 0) return null;

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="section-header"
      >
        <p className="eyebrow">{t.userManuals.eyebrow}</p>
        <h2 className="section-title">{t.userManuals.title}</h2>
        {t.userManuals.subtitle && (
          <p className="section-subtitle">{t.userManuals.subtitle}</p>
        )}
      </motion.div>

      <div className="manual-grid">
        {list.map((manual, index) => (
          <ManualCard
            key={manual.id}
            manual={manual}
            index={index}
            inView={inView}
            onPreview={setActiveManual}
            previewCta={t.userManuals.previewCta}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeManual && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lightbox-backdrop"
            onClick={() => setActiveManual(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lightbox-content lightbox-content-pdf"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveManual(null)}
                className="lightbox-close"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* Preview only — no download attribute here so it just renders inline */}
              <iframe
                src={activeManual.fileUrl}
                title={`${activeManual.title} Preview`}
                className="pdf-viewer-frame"
              />

              <div className="pdf-viewer-fallback">
                <a href={activeManual.fileUrl} target="_blank" rel="noreferrer" className="tag tag-accent">
                  {t.userManuals.openNewTab}
                </a>
                <a href={activeManual.fileUrl} download className="tag tag-teal">
                  {t.userManuals.download}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
