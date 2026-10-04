"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, X, ShieldCheck, Database, BookOpen, CheckCircle2 } from "lucide-react";
import { useLang } from "./LangProvider";

function getDocIcon(docType) {
  if (docType?.includes("Kamus Data") || docType?.includes("ERD")) {
    return <Database size={18} />;
  }
  if (docType?.includes("UAT")) {
    return <CheckCircle2 size={18} />;
  }
  return <BookOpen size={18} />;
}

function ManualCard({ manual, index, inView, onPreview, previewCta, sanitizedNotice }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="manual-card"
    >
      <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
            style={{
              background: "rgba(108, 92, 231, 0.12)",
              color: "var(--accent-light, #8075ff)",
              border: "1px solid rgba(108, 92, 231, 0.25)",
            }}
          >
            {manual.docType || "Dokumentasi"}
          </span>
          <span
            className="text-[11px] font-medium px-2 py-0.5 rounded-full"
            style={{
              background: "rgba(16, 185, 129, 0.10)",
              color: "#10b981",
              border: "1px solid rgba(16, 185, 129, 0.22)",
            }}
          >
            {manual.meta}
          </span>
        </div>

        <span
          className="inline-flex items-center gap-1 text-[10px] text-zinc-400 font-medium px-1.5 py-0.5 rounded"
          title="Data kredensial dan rahasia telah disanitasi demi kepatuhan & privasi"
        >
          <ShieldCheck size={12} className="text-emerald-500 shrink-0" />
          <span>Sanitized</span>
        </span>
      </div>

      <div className="manual-card-top mt-1">
        <div className="manual-card-icon shrink-0">
          {getDocIcon(manual.docType)}
        </div>
        <div>
          <p className="manual-card-project">{manual.project}</p>
          <h3 className="manual-card-title">{manual.title}</h3>
        </div>
      </div>

      <p className="manual-card-desc">{manual.description}</p>

      <div className="manual-card-actions mt-auto pt-2">
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
  const [activeMinistry, setActiveMinistry] = useState("all");

  const list = t.userManualsList || [];
  if (list.length === 0) return null;

  const ministryFilters = [
    { key: "all", label: t.userManuals?.ministries?.all || "Semua Kementerian & Lembaga" },
    { key: "pupr", label: t.userManuals?.ministries?.pupr || "Kementerian PUPR" },
    { key: "komdigi", label: t.userManuals?.ministries?.komdigi || "Kementerian Komdigi" },
    { key: "kemendikbud", label: t.userManuals?.ministries?.kemendikbud || "Kemendikbud / UT" },
    { key: "kemenkeu", label: t.userManuals?.ministries?.kemenkeu || "Kementerian Keuangan" },
    { key: "swasta", label: t.userManuals?.ministries?.swasta || "Enterprise / Swasta" },
  ];

  const filteredList =
    activeMinistry === "all"
      ? list
      : list.filter((item) => item.ministryKey === activeMinistry);

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

      {/* Ministry Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {ministryFilters.map((filt) => {
          const isActive = activeMinistry === filt.key;
          return (
            <button
              key={filt.key}
              type="button"
              onClick={() => setActiveMinistry(filt.key)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-[var(--accent,#6c5ce7)] text-white shadow-md shadow-indigo-500/20"
                  : "bg-zinc-800/40 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-700/50"
              }`}
            >
              {filt.label}
            </button>
          );
        })}
      </div>

      <motion.div layout className="manual-grid">
        <AnimatePresence mode="popLayout">
          {filteredList.map((manual, index) => (
            <ManualCard
              key={manual.id}
              manual={manual}
              index={index}
              inView={inView}
              onPreview={setActiveManual}
              previewCta={t.userManuals.previewCta}
              sanitizedNotice={t.userManuals.sanitizedNotice}
            />
          ))}
        </AnimatePresence>
      </motion.div>

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
