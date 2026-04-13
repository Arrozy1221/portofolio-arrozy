"use client";

import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      className="text-center py-9 px-6 text-xs text-muted"
      style={{ borderTop: "0.5px solid rgba(30,86,245,0.15)" }}
    >
      © {new Date().getFullYear()}{" "}
      <span className="text-cyan font-medium">{personal.name}</span> · UI/UX
      Designer · {personal.location}
    </footer>
  );
}
