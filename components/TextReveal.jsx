"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.1,
    },
  },
};

const charVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
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
  // Split by words to guarantee that individual words never get broken across lines
  const words = text.split(" ");

  return (
    <motion.span
      className={`text-reveal ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        rowGap: "0.15em",
        columnGap: "0.28em",
      }}
      transition={{ delayChildren: delay }}
      {...props}
    >
      {words.map((word, wordIdx) => (
        <span
          key={`word-${wordIdx}`}
          style={{ display: "inline-flex", whiteSpace: "nowrap" }}
        >
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={`char-${wordIdx}-${charIdx}`}
              variants={charVariants}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
