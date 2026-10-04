"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "./LangProvider";
import Projects from "./Projects";
import FrontendProjects from "./FrontendProjects";
import UserManuals from "./UserManuals";

export default function Work() {
  const { t } = useLang();
  const [tab, setTab] = useState("design");

  const tabs = [
    { key: "design", label: t.workTabs.design },
    { key: "technicalWriter", label: t.workTabs.technicalWriter },
    { key: "frontend", label: t.workTabs.frontend },
  ];

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="work-tabbar" role="tablist">
          {tabs.map((tabItem) => (
            <button
              key={tabItem.key}
              type="button"
              role="tab"
              aria-selected={tab === tabItem.key}
              className={`work-tab ${tab === tabItem.key ? "active" : ""}`}
              onClick={() => setTab(tabItem.key)}
            >
              {tabItem.label}
            </button>
          ))}
        </div>

        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {tab === "design" && <Projects />}
          {tab === "technicalWriter" && <UserManuals />}
          {tab === "frontend" && <FrontendProjects />}
        </motion.div>
      </div>
    </section>
  );
}
