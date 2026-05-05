"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { personal } from "../data/portfolio";
import { useTheme } from "./ThemeProvider";
import { useLang } from "./LangProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, t, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActive(sections[i]);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [t]);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className={`nav-shell ${scrolled ? "nav-shell-scrolled" : ""}`}>
          <a href="#hero" className="flex items-center gap-2.5">
            <span className="logo-mark">AF</span>
            <span className="font-syne text-sm font-bold text-foreground whitespace-nowrap">Arrozy Adi Falaqi</span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a href={link.href} className={`nav-link ${active === id ? "is-active" : ""}`}>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={toggleLang}
              className="toggle-btn"
              aria-label="Toggle language"
              type="button"
            >
              <span className="text-base leading-none">{lang === "en" ? "🇮🇩" : "🇬🇧"}</span>
              <span className="text-[11px] font-semibold uppercase">{lang === "en" ? "ID" : "EN"}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="toggle-btn"
              aria-label="Toggle theme"
              type="button"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href={personal.behance} target="_blank" rel="noreferrer" className="nav-ghost-link">
              Behance
            </a>
            <a href="#contact" className="nav-cta">
              {t.nav.hireMe}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={toggleLang} className="toggle-btn" aria-label="Toggle language" type="button">
              <span className="text-sm leading-none">{lang === "en" ? "🇮🇩" : "🇬🇧"}</span>
              <span className="text-[10px] font-semibold uppercase">{lang === "en" ? "ID" : "EN"}</span>
            </button>
            <button onClick={toggleTheme} className="toggle-btn" aria-label="Toggle theme" type="button">
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              className="menu-button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              type="button"
            >
              <span className={menuOpen ? "translate-y-[7px] rotate-45" : ""} />
              <span className={menuOpen ? "opacity-0" : ""} />
              <span className={menuOpen ? "-translate-y-[7px] -rotate-45" : ""} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-w-6xl px-6 lg:hidden"
          >
            <div className="mobile-nav-panel">
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={() => setMenuOpen(false)} className="mobile-nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-3">
                <a href={personal.behance} target="_blank" rel="noreferrer" className="secondary-button text-center">
                  {t.nav.viewBehance}
                </a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="primary-button text-center">
                  {t.nav.contactMe}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
