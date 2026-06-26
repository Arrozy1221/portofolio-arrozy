"use client";

import "../case-study.css";
import Link from "next/link";
import { useLang } from "../../../components/LangProvider";
import ImageZoom from "../../../components/ImageZoom";

export default function Page() {
  const { lang, toggleLang } = useLang();

  return (
    <div className="cs-case-study-wrapper" style={{ 
      '--primary': '#EA580C', 
      '--blue': '#EA580C', 
      '--blue-dark': '#C2410C', 
      '--teal': '#F59E0B', 
      '--blue-light': '#FFF7ED', 
      '--dark': '#0F172A', 
      '--dark2': '#1E1B4B', 
      '--mid': '#374151', 
      '--muted': '#64748B', 
      '--border': '#E2E8F0', 
      '--surface': '#F8FAFC', 
      '--white': '#FFFFFF', 
      '--grad': 'linear-gradient(135deg, #EA580C 0%, #F59E0B 100%)' 
    }}>
      
      <Link href="/" className="back-to-home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span>{lang === "en" ? "Back to Home" : "Kembali ke Beranda"}</span>
      </Link>

      <button className="cs-lang-toggle" onClick={toggleLang} type="button" aria-label="Toggle language">
        <span style={{ fontSize: '14px' }}>{lang === "en" ? "🇮🇩" : "🇬🇧"}</span>
        <span>{lang === "en" ? "ID" : "EN"}</span>
      </button>

      {/* Hero Header for Context */}
      <div className="cs-hero" style={{ paddingBottom: '32px' }}>
        <div className="cs-page" style={{ paddingBottom: "0" }}>
          <div className="cs-hero-inner" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="cs-hero-label" style={{ justifyContent: 'center' }}>
              <span></span>
              {lang === "en" ? "CASE STUDY" : "STUDI KASUS"}
            </div>
            <h1>Petsu E-Commerce<br /><strong>Mobile Application Case Study</strong></h1>
            <p className="cs-hero-sub">
              {lang === "en" 
                ? "Full UX/UI Case Study for Petsu, an online marketplace and service platform for pet owners."
                : "Studi Kasus UX/UI Lengkap untuk Petsu, platform e-commerce dan layanan bagi pemilik hewan peliharaan."}
            </p>
          </div>
        </div>
      </div>

      {/* Stack of Sliced Images */}
      <div 
        className="cs-pdf-images-container" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '24px', 
          maxWidth: '1000px', 
          margin: '0 auto 80px auto', 
          padding: '0 20px' 
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <div 
            key={num} 
            style={{ 
              width: '100%', 
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02)', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              border: '1px solid #e2e8f0', 
              background: '#ffffff' 
            }}
          >
          <ImageZoom 
              src={`/projects/petsu/page-${num}.jpg`} 
              alt={`Petsu Case Study Slide ${num}`} 
              style={{ 
                width: '100%', 
                height: 'auto'
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="cs-footer">
        <div>
          <div className="cs-footer-name">Arrozy Adi Falaqi</div>
          <div className="cs-footer-role">UI/UX Designer · Bandung, Indonesia</div>
        </div>
        <div className="cs-footer-links">
          <a className="cs-footer-link" href="/">Portfolio</a>
          <a className="cs-footer-link" href="mailto:arrozyadifalaqioi@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
}

