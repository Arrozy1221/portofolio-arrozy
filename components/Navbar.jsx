"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { personal } from "../data/portfolio";
import { useTheme } from "./ThemeProvider";
import { useLang } from "./LangProvider";
import MagneticButton from "./MagneticButton";

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
      setScrolled(window.scrollY > 50);
      const sections = links.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 180) {
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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      style={{ padding: scrolled ? "0.6rem 0" : "1rem 0" }}
    >
      <div className="container">
        <div className="navbar-inner">
          <a href="#hero" className="nav-logo">
            <span className="nav-logo-icon">AF</span>
            <span className="nav-logo-text hidden sm:inline">Arrozy</span>
          </a>

          <ul className="nav-links hidden lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href.replace("#", "") ? "active" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions hidden lg:flex">
            <button onClick={toggleLang} className="nav-toggle" type="button" aria-label="Toggle language">
              <span>{lang === "en" ? "🇮🇩" : "🇬🇧"}</span>
              <span>{lang === "en" ? "ID" : "EN"}</span>
            </button>
            <button onClick={toggleTheme} className="nav-toggle" type="button" aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <MagneticButton strength={0.35}>
              <a href="#contact" className="nav-hire">{t.nav.hireMe}</a>
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button onClick={toggleLang} className="nav-toggle" type="button" aria-label="Toggle language">
              <span className="text-sm">{lang === "en" ? "🇮🇩" : "🇬🇧"}</span>
            </button>
            <button onClick={toggleTheme} className="nav-toggle" type="button" aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button className="burger" onClick={() => setMenuOpen((v) => !v)} type="button" aria-label="Menu">
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container lg:hidden"
          >
            <div className="mobile-menu">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-primary text-center">
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
