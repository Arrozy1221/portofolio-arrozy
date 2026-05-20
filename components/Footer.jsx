"use client";

import { personal } from "../data/portfolio";
import { useLang } from "./LangProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="flex items-center gap-2.5">
            <span className="nav-logo-icon" style={{ width: "1.75rem", height: "1.75rem", fontSize: "0.65rem", borderRadius: "0.45rem" }}>AF</span>
            <span>© {new Date().getFullYear()} <span style={{ color: "var(--fg)", fontWeight: 500 }}>{personal.name}</span></span>
          </div>
          <div className="footer-links">
            <span>{t.footer.role}</span>
            <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={personal.behance} target="_blank" rel="noreferrer">Behance</a>
            <a href={`mailto:${personal.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
