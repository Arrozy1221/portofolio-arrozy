"use client";

import "../case-study.css";
import Link from "next/link";
import { useLang } from "../../../components/LangProvider";

export default function Page() {
  const { lang, t, toggleLang } = useLang();
  const cs = t.caseStudies.esertifikat;

  return (
    <div className="cs-case-study-wrapper" style={{ '--primary': '#6C3FE8', '--purple': '#6C3FE8', '--purple-dark': '#4A1FA8', '--blue': '#2563EB', '--teal': '#0EA5C8', '--purple-light': '#EEE8FF', '--dark': '#0D0D1A', '--dark2': '#13102B', '--mid': '#3D3860', '--muted': '#6B6890', '--border': '#E8E6F4', '--surface': '#F7F5FF', '--white': '#FFFFFF', '--grad': 'linear-gradient(135deg, #6C3FE8 0%, #2563EB 60%, #0EA5C8 100%)' }}>
      
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
            <img src="/images/case-study/esertifikat-nextgen/img_1.png" alt="Admin Dashboard" />
          </div>
        </div>
      </div>

      <div className="cs-page">
        <section>
          <div className="cs-section-label">{cs.overview.label}</div>
          <h2>{cs.overview.title}<br /><strong>{cs.overview.titleBold}</strong></h2>
          <p>{cs.overview.p1}</p>
          <p>{cs.overview.p2}</p>
          <div className="cs-scope-pills">
            {cs.overview.pills.map((pill, i) => <div key={i} className="cs-scope-pill"><div className="cs-dot"></div>{pill}</div>)}
          </div>
        </section>

        <section>
          <div className="cs-section-label">{cs.problem.label}</div>
          <h2>{cs.problem.title}<br /><strong>{cs.problem.titleBold}</strong></h2>
          <p>{cs.problem.p}</p>
          <div className="cs-challenge-grid">
            {cs.problem.cards.map((card, i) => (
              <div key={i} className="cs-challenge-card">
                <div className="cs-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.p}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="cs-section-label">{cs.users.label}</div>
          <h2>{cs.users.title}<br /><strong>{cs.users.titleBold}</strong></h2>
          <p>{cs.users.p}</p>
          <div className="cs-user-grid">
            <div className="cs-user-card cs-admin">
              <div className="cs-user-badge">{cs.users.adminBadge}</div>
              <h3>{cs.users.adminTitle}</h3>
              <ul>
                {cs.users.adminItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="cs-user-card cs-customer">
              <div className="cs-user-badge">{cs.users.customerBadge}</div>
              <h3>{cs.users.customerTitle}</h3>
              <ul>
                {cs.users.customerItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
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
            <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_2.png" alt="Login" />
            <p className="cs-screen-caption">{cs.screens.s1.caption}</p>
          </div>

          <div className="cs-screen-2col">
            <div>
              <div className="cs-screen-label">{cs.screens.s2.label}</div>
              <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_3.png" alt="Beranda Customer" />
              <p className="cs-screen-caption">{cs.screens.s2.caption}</p>
            </div>
            <div>
              <div className="cs-screen-label">{cs.screens.s3.label}</div>
              <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_4.png" alt="Beranda Admin" />
              <p className="cs-screen-caption">{cs.screens.s3.caption}</p>
            </div>
          </div>

          <div className="cs-screen-block">
            <div className="cs-screen-label">{cs.screens.s4.label}</div>
            <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_5.png" alt="Aplikasi" />
            <p className="cs-screen-caption">{cs.screens.s4.caption}</p>
          </div>

          <div className="cs-screen-2col">
            <div>
              <div className="cs-screen-label">{cs.screens.s5.label}</div>
              <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_6.png" alt="Detail Customer" />
              <p className="cs-screen-caption">{cs.screens.s5.caption}</p>
            </div>
            <div>
              <div className="cs-screen-label">{cs.screens.s6.label}</div>
              <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_7.png" alt="Detail Admin" />
              <p className="cs-screen-caption">{cs.screens.s6.caption}</p>
            </div>
          </div>

          <div className="cs-screen-block">
            <div className="cs-screen-label">{cs.screens.s7.label}</div>
            <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_8.png" alt="Sertifikat Terbit" />
            <p className="cs-screen-caption">{cs.screens.s7.caption}</p>
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

      <div className="cs-page">
        <div className="cs-all-screens-section">
          <div className="cs-section-label">{cs.allScreens.label}</div>
          <h2>{cs.allScreens.title}<br /><strong>{cs.allScreens.titleBold}</strong></h2>
          <p>{cs.allScreens.p}</p>
          <div className="cs-screens-grid">
            {cs.allScreens.items.map((item, i) => (
              <div key={i} className="cs-grid-item">
                <img src={`/images/case-study/esertifikat-nextgen/img_${i+9}.png`} alt={item} loading="lazy" />
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
