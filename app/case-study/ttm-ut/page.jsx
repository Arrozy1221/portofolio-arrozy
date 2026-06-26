"use client";

import "../case-study.css";
import Link from "next/link";
import { useLang } from "../../../components/LangProvider";
import ImageZoom from "../../../components/ImageZoom";

export default function Page() {
  const { lang, t, toggleLang } = useLang();
  const cs = t.caseStudies.ttm;

  const imageFiles = [
    "Onboarding.png", "Login.png", "Vertification OTP.png", "Dashboard_Tidak Ada Data.png",
    "Dashboard_Memiliki Permohonan.png", "Dashboard_Belum_Presensi.png", "Dashboard__Sudah_Presensi.png",
    "Dashboard__Selesai_Presensi.png", "Absensi.png", "Presensi  Masuk Tuweb.png", "Presensi  Keluar Tuweb.png",
    "Detail Kelas.png", "Jadwal Kelas.png", "List Recording.png", "Form Kesediaan Tutor.png",
    "List Kesediaan Tutor.png", "Pengaturan.png", "Logout.png"
  ];

  return (
    <div className="cs-case-study-wrapper" style={{ '--primary': '#C026D3', '--primary-dark': '#86198F', '--accent': '#F472B6', '--primary-light': '#FDF4FF', '--dark': '#0F172A', '--dark2': '#2E1065', '--mid': '#4C1D95', '--muted': '#64748B', '--border': '#E2E8F0', '--surface': '#F8FAFC', '--white': '#FFFFFF', '--grad': 'linear-gradient(135deg, #C026D3 0%, #7E22CE 60%, #DB2777 100%)' }}>
      
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
            <img src="/projects/ttm/Onboarding.png" alt="TTM UT Mobile App Mockups" style={{ maxHeight: '600px', objectFit: 'contain', margin: '0 auto' }} />
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
          
          <div className="cs-screen-2col">
            <div>
              <div className="cs-screen-label">{cs.screens.s1.label}</div>
              <ImageZoom className="cs-screen-img" src="/projects/ttm/Login.png" alt="Login screen" />
              <p className="cs-screen-caption">{cs.screens.s1.caption}</p>
            </div>
            <div>
              <div className="cs-screen-label">{cs.screens.s2.label}</div>
              <ImageZoom className="cs-screen-img" src="/projects/ttm/Dashboard__Sudah_Presensi.png" alt="Dashboard" />
              <p className="cs-screen-caption">{cs.screens.s2.caption}</p>
            </div>
          </div>

          <div className="cs-screen-2col">
            <div>
              <div className="cs-screen-label">{cs.screens.s3.label}</div>
              <ImageZoom className="cs-screen-img" src="/projects/ttm/Absensi.png" alt="Attendance Check-in" />
              <p className="cs-screen-caption">{cs.screens.s3.caption}</p>
            </div>
            <div>
              <div className="cs-screen-label">{cs.screens.s4.label}</div>
              <ImageZoom className="cs-screen-img" src="/projects/ttm/Detail Kelas TTM.png" alt="Class Details" />
              <p className="cs-screen-caption">{cs.screens.s4.caption}</p>
            </div>
          </div>
        </section>

        <section id="decisions">
          <div className="cs-section-label">{cs.decisions.label}</div>
          <h2>{cs.decisions.title} <strong>{cs.decisions.titleBold}</strong></h2>
          <div className="cs-decisions">
            {[cs.decisions.d1, cs.decisions.d2, cs.decisions.d3, cs.decisions.d4].map((d, i) => (
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
            <p style={{ marginTop: "16px" }}>{cs.reflection.p3}</p>
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
                <ImageZoom src={`/projects/ttm/${imageFiles[i]}`} alt={item} loading="lazy" lensSize={140} style={{ maxHeight: '400px', objectFit: 'contain' }} />
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
