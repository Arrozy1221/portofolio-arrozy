"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const charVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  as = "span",
  ...props
}) {
  const chars = text.split("");

  return (
    <motion.span
      className={`text-reveal ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-flex", flexWrap: "wrap" }}
      transition={{ delayChildren: delay }}
      {...props}
    >
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={charVariants}
          style={{
            display: "inline-block",
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
