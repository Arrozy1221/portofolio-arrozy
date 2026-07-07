"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "../data/portfolio";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);

  const waLink = `https://wa.me/${personal.whatsapp}?text=Hi%20Arrozy!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect%20%F0%9F%91%8B`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="wa-float-wrapper"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Close button */}
          <button
            className="wa-close-btn"
            onClick={() => setVisible(false)}
            aria-label="Tutup"
          >
            ✕
          </button>

          {/* Clickable area: bubble + character */}
          <motion.a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="wa-float-inner"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileTap={{ scale: 0.97 }}
          >
            {/* Speech bubble */}
            <motion.div
              className="wa-bubble"
              animate={hovered ? { scale: 1.05, x: -4 } : { scale: 1, x: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <svg className="wa-bubble-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="white"/>
                <path d="M12.004 2C6.477 2 2 6.477 2 12c0 1.89.523 3.66 1.435 5.165L2 22l4.981-1.407A9.96 9.96 0 0012.004 22C17.527 22 22 17.523 22 12S17.527 2 12.004 2zm0 18.18a8.18 8.18 0 01-4.169-1.14l-.3-.178-3.1.875.836-3.21-.196-.312A8.18 8.18 0 013.82 12c0-4.514 3.67-8.18 8.184-8.18S20.18 7.486 20.18 12c0 4.516-3.665 8.18-8.176 8.18z" fill="white"/>
              </svg>
              <div className="wa-bubble-text">
                <span className="wa-bubble-title">Hubungi Saya</span>
                <span className="wa-bubble-sub">via WhatsApp</span>
              </div>
              <span className="wa-bubble-tail" />
            </motion.div>

            {/* Arrozy GIF — full body, bounce animation */}
            <motion.div
              className="wa-char-wrap"
              animate={{ y: [0, -8, 0] }}
              transition={{ y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } }}
            >
              <Image
                src="/images/Arrozy.gif"
                alt="Chat with Arrozy on WhatsApp"
                width={190}
                height={260}
                unoptimized
                className="wa-float-gif"
                priority
              />
            </motion.div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
