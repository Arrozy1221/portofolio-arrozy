"use client";

import "../case-study.css";
import Link from "next/link";
import { useLang } from "../../../components/LangProvider";

export default function Page() {
  const { lang, t, toggleLang } = useLang();
  const cs = t.caseStudies.mbkm;

  const imageFiles = [
    "Login.png", "Failed Login.png", "MBKM-1.png", "MBKM Non PP.png",
    "MBKM NON PP-1.png", "MBKM NON PP-2.png", "MBKM NON PP-3.png",
    "Inbound PP UT.png", "Inbound PP UT-1.png", "Pertukaran Pelajar.png", "Pertukaran Pelajar-1.png",
    "Pertukaran Pelajar-2.png", "Pertukaran Pelajar-3.png", "Pertukaran Pelajar-4.png", "Summer Course.png",
    "Summer Course-1.png", "Summer Course-2.png", "Summer Course-3.png", "Summer Course-4.png",
    "Summer Course-5.png", "Kaprodi.png", "Kaprodi-1.png",
    "Kaprodi-2.png", "Wd 1.png", "LaporanValidasiBerkas.png",
    "Dashboard 15.png", "Dashboard 20.png", "Dashboard 21.png",
    "Dashboard 22.png", "Dashboard 28.png", "Dashboard 29.png", "Dashboard 30.png"
  ];

  return (
    <div className="cs-case-study-wrapper" style={{ '--primary': '#2563EB', '--primary-dark': '#1E40AF', '--accent': '#F59E0B', '--primary-light': '#EFF6FF', '--dark': '#0F172A', '--dark2': '#1E1B4B', '--mid': '#312E81', '--muted': '#64748B', '--border': '#E2E8F0', '--surface': '#F8FAFC', '--white': '#FFFFFF', '--grad': 'linear-gradient(135deg, #2563EB 0%, #4F46E5 60%, #F59E0B 100%)' }}>
      
      <Link href="/" className="back-to-home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span>Back to Home</span>
      </Link>

      <button className="cs-lang-toggle" onClick={toggleLang} type="button" aria-label="Toggle language">
        <span style={{ fontSize: '14px' }}>{lang === "en" ? "🇮🇩" : "🇬🇧"}</span>
        <span>{lang === "en" ? "ID" : "EN"}</span>
      </button>

      <div className="cs-hero">
        <div className="cs-page" style={{ paddingBottom: "0" }}>
          <div className="cs-hero-inner">
            <div className="cs-hero-label"><span></span>{cs.hero.label}</div>
            <h1>{cs.hero.title}<br /><strong>{cs.hero.titleBold}</strong></h1>
            <p className="cs-hero-sub">{cs.hero.sub}</p>
            <div className="cs-hero-tags">
              {cs.hero.tags.map((tag, i) => <span key={i} className="cs-tag">{tag}</span>)}
            </div>
            <div className="cs-hero-meta">
              <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Client</div><div className="cs-hero-meta-val">{cs.hero.meta.client}</div></div>
              <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Role</div><div className="cs-hero-meta-val">{cs.hero.meta.role}</div></div>
              <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Timeline</div><div className="cs-hero-meta-val">{cs.hero.meta.timeline}</div></div>
              <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Tools</div><div className="cs-hero-meta-val">{cs.hero.meta.tools}</div></div>
            </div>
          </div>
        </div>
        <div className="cs-hero-mockup">
          <div className="cs-page" style={{ paddingBottom: "0" }}>
            <img src="/projects/mbkm.png" alt="MBKM UT Web & Mobile App Mockups" />
          </div>
        </div>
      </div>

      <div className="cs-page">
        <section id="context">
          <div className="cs-section-label">{cs.context.label}</div>
          <h2>{cs.context.title} <strong>{cs.context.titleBold}</strong></h2>
          <p>{cs.context.p1}</p>
          <p>{cs.context.p2}</p>
          <div className="cs-challenge-grid">
            {cs.context.cards.map((card, i) => (
              <div key={i} className="cs-challenge-card">
                <div className="cs-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="users">
          <div className="cs-section-label">{cs.users.label}</div>
          <h2>{cs.users.title} <strong>{cs.users.titleBold}</strong></h2>
          <p>{cs.users.p}</p>
          <div className="cs-user-grid">
            <div className="cs-user-card cs-student">
              <span className="cs-user-badge">{cs.users.studentBadge}</span>
              <h3>{cs.users.studentTitle}</h3>
              <ul>
                {cs.users.studentItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="cs-user-card cs-admin">
              <span className="cs-user-badge">{cs.users.adminBadge}</span>
              <h3>{cs.users.adminTitle}</h3>
              <ul>
                {cs.users.adminItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="cs-section-label">{cs.process.label}</div>
          <h2>{cs.process.title} <strong>{cs.process.titleBold}</strong></h2>
          <div className="cs-process-steps">
            {cs.process.steps.map((step, i) => (
              <div key={i} className="cs-process-step">
                <div className="cs-step-num">{step.num}</div>
                <div className="cs-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.p}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="screens">
          <div className="cs-section-label">{cs.screens.label}</div>
          <h2>{cs.screens.title} <strong>{cs.screens.titleBold}</strong></h2>
          
          <div className="cs-screen-block">
            <div className="cs-screen-label">{cs.screens.s1.label}</div>
            <img className="cs-screen-img" src="/projects/mbkm/MBKM Non PP.png" alt="Student portal MBKM dashboard" />
            <p className="cs-screen-caption">{cs.screens.s1.caption}</p>
          </div>

          <div className="cs-screen-2col">
            <div>
              <div className="cs-screen-label">{cs.screens.s2.label}</div>
              <img className="cs-screen-img" src="/projects/mbkm/Login.png" alt="Login screen" />
              <p className="cs-screen-caption">{cs.screens.s2.caption}</p>
            </div>
            <div>
              <div className="cs-screen-label">{cs.screens.s3.label}</div>
              <img className="cs-screen-img" src="/projects/mbkm/Inbound PP UT.png" alt="Inbound registration flow" />
              <p className="cs-screen-caption">{cs.screens.s3.caption}</p>
            </div>
          </div>

          <div className="cs-screen-block">
            <div className="cs-screen-label">{cs.screens.s4.label}</div>
            <img className="cs-screen-img" src="/projects/mbkm/Kaprodi.png" alt="Kaprodi dashboard screen" />
            <p className="cs-screen-caption">{cs.screens.s4.caption}</p>
          </div>

          <div className="cs-screen-2col">
            <div>
              <div className="cs-screen-label">{cs.screens.s5.label}</div>
              <img className="cs-screen-img" src="/projects/mbkm/Pertukaran Pelajar.png" alt="Pertukaran Pelajar registration" />
              <p className="cs-screen-caption">{cs.screens.s5.caption}</p>
            </div>
            <div>
              <div className="cs-screen-label">{cs.screens.s6.label}</div>
              <img className="cs-screen-img" src="/projects/mbkm/Summer Course.png" alt="Summer course selection interface" />
              <p className="cs-screen-caption">{cs.screens.s6.caption}</p>
            </div>
          </div>
        </section>

        <section id="decisions">
          <div className="cs-section-label">{cs.decisions.label}</div>
          <h2>{cs.decisions.title} <strong>{cs.decisions.titleBold}</strong></h2>
          <div className="cs-decisions">
            {[cs.decisions.d1, cs.decisions.d2, cs.decisions.d3].map((d, i) => (
              <div key={i} className="cs-decision">
                <div className="cs-decision-num">D{i+1}</div>
                <div className="cs-step-content">
                  <h3>{d.title}</h3>
                  <p>{d.p}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="results">
          <div className="cs-section-label">{cs.results.label}</div>
          <h2>{cs.results.title} <strong>{cs.results.titleBold}</strong></h2>
          <div className="cs-results-grid">
            {[cs.results.r1, cs.results.r2, cs.results.r3].map((r, i) => (
              <div key={i} className="cs-result-card">
                <div className="cs-result-num">{r.num}</div>
                <div className="cs-result-label">{r.label}</div>
              </div>
            ))}
          </div>
          <div className="cs-quote-block">
            <p>{cs.results.quote}</p>
            <div className="cs-quote-attr">{cs.results.attr}</div>
          </div>
        </section>

        <section id="reflection">
          <div className="cs-section-label">{cs.reflection.label}</div>
          <h2>{cs.reflection.title} <strong>{cs.reflection.titleBold}</strong></h2>
          <div className="cs-reflection-box">
            <p>{cs.reflection.p1}</p>
            <p style={{ marginTop: "16px" }}>{cs.reflection.p2}</p>
          </div>
        </section>
      </div>

      <div className="cs-all-screens-section">
        <div className="cs-page">
          <div className="cs-section-label">{cs.allScreens.label}</div>
          <h2>{cs.allScreens.title} <strong>{cs.allScreens.titleBold}</strong></h2>
          <div className="cs-screens-grid">
            {cs.allScreens.items.map((item, i) => (
              <div key={i} className="cs-grid-item">
                <img src={`/projects/mbkm/${imageFiles[i]}`} alt={item} loading="lazy" />
                <div className="cs-grid-label">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cs-footer">
        <div>
          <div className="cs-footer-name">Arrozy Adi Falaqi</div>
          <div className="cs-footer-role">UI/UX Designer</div>
        </div>
        <div className="cs-footer-links">
          <a className="cs-footer-link" href="https://portofolio-arrozy.vercel.app">Portfolio</a>
          <a className="cs-footer-link" href="mailto:arrozyadifalaqioi@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
}
