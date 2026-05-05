"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { i18n } from "../data/i18n";

const LangContext = createContext({ lang: "en", t: i18n.en, toggleLang: () => {} });

export function useLang() {
  return useContext(LangContext);
}

export default function LangProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "id") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === "en" ? "id" : "en"));
  const t = i18n[lang];

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}
