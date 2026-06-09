"use client";

import "../case-study.css";
import Link from "next/link";
import { useLang } from "../../../components/LangProvider";

export default function Page() {
  const { lang, t, toggleLang } = useLang();
  const cs = t.caseStudies.simontila;

  return (
    <div className="cs-case-study-wrapper" style={{ '--primary': '#1A6BFF', '--blue': '#1A6BFF', '--blue-dark': '#0D3FA8', '--teal': '#00C2B2', '--blue-light': '#EBF1FF', '--dark': '#0D1117', '--dark2': '#0F1624', '--mid': '#2D3A52', '--muted': '#5C6E8A', '--border': '#E4E9F2', '--surface': '#F4F7FC', '--white': '#FFFFFF', '--grad': 'linear-gradient(135deg, #1A6BFF 0%, #00C2B2 100%)' }}>
      
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
              
              <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Tools</div><div className="cs-hero-meta-val">{cs.hero.meta.tools}</div></div>
            </div>
          </div>
        </div>
        <div className="cs-hero-mockup">
          <div className="cs-page" style={{ paddingBottom: "0" }}>
            <img src="/images/case-study/simontila/img_1.png" alt="SIMONTILA Dashboard" />
          </div>
        </div>
      </div>

      <div className="cs-page">
        <section>
          <div className="cs-section-label">{cs.overview.label}</div>
          <h2>{cs.overview.title}<br /><strong>{cs.overview.titleBold}</strong></h2>
          <p>{cs.overview.p1}</p>
          <p>{cs.overview.p2}</p>
        </section>

        <section>
          <div className="cs-section-label">{cs.beforeAfter.label}</div>
          <h2>{cs.beforeAfter.title}<br /><strong>{cs.beforeAfter.titleBold}</strong></h2>
          <p>{cs.beforeAfter.p}</p>
          <div className="cs-ba-grid">
            <div className="cs-ba-card cs-before">
              <div className="cs-ba-badge">{cs.beforeAfter.badgeBefore}</div>
              <img src="/images/case-study/simontila/img_2.png" alt="Before redesign" />
            </div>
            <div className="cs-ba-card cs-after">
              <div className="cs-ba-badge">{cs.beforeAfter.badgeAfter}</div>
              <img src="/images/case-study/simontila/img_3.png" alt="After redesign" />
            </div>
          </div>
        </section>

        <section>
          <div className="cs-section-label">{cs.problem.label}</div>
          <h2>{cs.problem.title}<br /><strong>{cs.problem.titleBold}</strong></h2>
          <p>{cs.problem.p}</p>
          <div className="cs-problem-grid">
            {cs.problem.cards.map((card, i) => (
              <div key={i} className="cs-problem-card">
                <div className="cs-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="cs-section-label">{cs.process.label}</div>
          <h2>{cs.process.title}<br /><strong>{cs.process.titleBold}</strong></h2>
          <div className="cs-process-steps">
            {cs.process.steps.map((step, i) => (
              <div key={i} className="cs-process-step">
                <div className="cs-step-num">{step.num}</div>
                <div className="cs-step-content"><h3>{step.title}</h3><p>{step.p}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="cs-section-label">{cs.screens.label}</div>
          <h2>{cs.screens.title}<br /><strong>{cs.screens.titleBold}</strong></h2>

          <div className="cs-screen-block">
            <div className="cs-screen-label">{cs.screens.s1.label}</div>
            <img className="cs-screen-img" src="/images/case-study/simontila/img_4.png" alt="Login" />
            <p className="cs-screen-caption">{cs.screens.s1.caption}</p>
          </div>

          <div className="cs-screen-2col">
            <div>
              <div className="cs-screen-label">{cs.screens.s2.label}</div>
              <img className="cs-screen-img" src="/images/case-study/simontila/img_5.png" alt="Manajemen LHP" />
              <p className="cs-screen-caption">{cs.screens.s2.caption}</p>
            </div>
            <div>
              <div className="cs-screen-label">{cs.screens.s3.label}</div>
              <img className="cs-screen-img" src="/images/case-study/simontila/img_6.png" alt="Pelaporan" />
              <p className="cs-screen-caption">{cs.screens.s3.caption}</p>
            </div>
          </div>

          <div className="cs-screen-block">
            <div className="cs-screen-label">{cs.screens.s4.label}</div>
            <img className="cs-screen-img" src="/images/case-study/simontila/img_7.png" alt="Tindak Lanjut" />
            <p className="cs-screen-caption">{cs.screens.s4.caption}</p>
          </div>

          <div className="cs-screen-2col">
            <div>
              <div className="cs-screen-label">{cs.screens.s5.label}</div>
              <img className="cs-screen-img" src="/images/case-study/simontila/img_8.png" alt="Data Temuan" />
              <p className="cs-screen-caption">{cs.screens.s5.caption}</p>
            </div>
            <div>
              <div className="cs-screen-label">{cs.screens.s6.label}</div>
              <img className="cs-screen-img" src="/images/case-study/simontila/img_9.png" alt="Container" />
              <p className="cs-screen-caption">{cs.screens.s6.caption}</p>
            </div>
          </div>
        </section>

        <section>
          <div className="cs-section-label">{cs.decisions.label}</div>
          <h2>{cs.decisions.title}<br /><strong>{cs.decisions.titleBold}</strong></h2>
          <div className="cs-decisions">
            {[cs.decisions.d1, cs.decisions.d2, cs.decisions.d3, cs.decisions.d4].map((d, i) => (
              <div key={i} className="cs-decision">
                <div className="cs-decision-num">0{i+1}</div>
                <div><h3>{d.title}</h3><p>{d.p}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="cs-section-label">{cs.results.label}</div>
          <h2>{cs.results.title}<br /><strong>{cs.results.titleBold}</strong></h2>
          <div className="cs-results-grid">
            {[cs.results.r1, cs.results.r2, cs.results.r3].map((r, i) => (
              <div key={i} className="cs-result-card"><div className="cs-result-num">{r.num}</div><div className="cs-result-label">{r.label}</div></div>
            ))}
          </div>
          <div className="cs-quote-block">
            <p>{cs.results.quote}</p>
            <div className="cs-quote-attr">{cs.results.attr}</div>
          </div>
        </section>

        <section>
          <div className="cs-section-label">{cs.reflection.label}</div>
          <h2>{cs.reflection.title}<br /><strong>{cs.reflection.titleBold}</strong></h2>
          <div className="cs-reflection-box">
            <p>{cs.reflection.p1}</p>
            <p style={{ marginTop: "16px" }}>{cs.reflection.p2}</p>
            <p style={{ marginTop: "16px" }}>{cs.reflection.p3}</p>
          </div>
        </section>
      </div>

      <div className="cs-all-screens-wrap">
        <div className="cs-page">
          <div className="cs-section-label">{cs.allScreens.label}</div>
          <h2>{cs.allScreens.title}<br /><strong>{cs.allScreens.titleBold}</strong></h2>
          <p>{cs.allScreens.p}</p>
          <div className="cs-screens-grid">
            {cs.allScreens.items.map((item, i) => (
              <div key={i} className="cs-grid-item">
                <img src={`/images/case-study/simontila/img_${i+10}.png`} alt={item} loading="lazy" />
                <div className="cs-grid-label">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cs-footer">
        <div>
          <div className="cs-footer-name">Arrozy Adi Falaqi</div>
          <div className="cs-footer-role">UI/UX Designer · Bandung, Indonesia</div>
        </div>
        <div className="cs-footer-links">
          <a className="cs-footer-link" href="https://portofolio-arrozy.vercel.app">Portfolio</a>
          <a className="cs-footer-link" href="mailto:arrozyadifalaqioi@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
}
