"use client";

import { personal } from "../data/portfolio";
import { useLang } from "./LangProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer-shell">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-fg md:flex-row md:items-center md:justify-between">
        <div>
          © {new Date().getFullYear()} <span className="text-foreground">{personal.name}</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span>{t.footer.role}</span>
          <span className="hidden h-1 w-1 rounded-full bg-muted md:inline-block" />
          <span>{personal.location}</span>
        </div>
      </div>
    </footer>
  );
}
