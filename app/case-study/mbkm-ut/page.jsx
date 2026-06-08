"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="cs-case-study-wrapper">
      <style dangerouslySetInnerHTML={{ __html: `.cs-case-study-wrapper *, .cs-case-study-wrapper *::before, .cs-case-study-wrapper *::after {
 box-sizing: border-box; margin: 0; padding: 0; }
.cs-case-study-wrapper {

    --primary: #2563EB;
    --primary-dark: #1E40AF;
    --accent: #F59E0B;
    --primary-light: #EFF6FF;
    --dark: #0F172A;
    --dark2: #1E1B4B;
    --mid: #312E81;
    --muted: #64748B;
    --border: #E2E8F0;
    --surface: #F8FAFC;
    --white: #FFFFFF;
    --grad: linear-gradient(135deg, #2563EB 0%, #4F46E5 60%, #F59E0B 100%);
  }
.cs-case-study-wrapper {
 font-size: 16px; }
.cs-case-study-wrapper {
 font-family: 'DM Sans', sans-serif; color: var(--dark); background: var(--white); line-height: 1.6; -webkit-font-smoothing: antialiased; }
.cs-case-study-wrapper /* HERO */
  .cs-hero {
 background: var(--dark2); padding: 80px 60px 0; position: relative; overflow: hidden; }
.cs-case-study-wrapper .cs-hero::before {
 content: ''; position: absolute; top: -150px; left: -100px; width: 600px; height: 600px; background: radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 65%); border-radius: 50%; }
.cs-case-study-wrapper .cs-hero::after {
 content: ''; position: absolute; top: -80px; right: -80px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 65%); border-radius: 50%; }
.cs-case-study-wrapper .cs-hero-inner {
 position: relative; z-index: 1; }
.cs-case-study-wrapper .cs-hero-label {
 display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #93C5FD; background: rgba(37,99,235,0.15); border: 1px solid rgba(37,99,235,0.3); padding: 6px 14px; border-radius: 100px; margin-bottom: 28px; }
.cs-case-study-wrapper .cs-hero-label span {
 width: 6px; height: 6px; border-radius: 50%; background: #93C5FD; display:inline-block; }
.cs-case-study-wrapper .cs-hero h1 {
 font-size: 50px; font-weight: 300; line-height: 1.1; color: var(--white); letter-spacing: -0.02em; max-width: 620px; margin-bottom: 10px; }
.cs-case-study-wrapper .cs-hero h1 strong {
 font-weight: 600; background: var(--grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.cs-case-study-wrapper .cs-hero-sub {
 font-size: 15px; color: rgba(255,255,255,0.4); margin-bottom: 36px; font-weight: 300; }
.cs-case-study-wrapper .cs-hero-tags {
 display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 44px; }
.cs-case-study-wrapper .cs-tag {
 font-size: 12px; font-weight: 500; padding: 5px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); }
.cs-case-study-wrapper .cs-hero-meta {
 display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid rgba(255,255,255,0.07); padding: 24px 0 0; }
.cs-case-study-wrapper .cs-hero-meta-item {
 padding-bottom: 28px; padding-right: 24px; margin-right: 24px; border-right: 1px solid rgba(255,255,255,0.07); }
.cs-case-study-wrapper .cs-hero-meta-item:last-child {
 border-right: none; }
.cs-case-study-wrapper .cs-hero-meta-label {
 font-size: 11px; color: rgba(255,255,255,0.28); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
.cs-case-study-wrapper .cs-hero-meta-val {
 font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.75); }
.cs-case-study-wrapper .cs-hero-mockup {
 margin: 0 -60px; background: rgba(255,255,255,0.03); border-top: 1px solid rgba(255,255,255,0.05); padding: 32px 60px 0; }
.cs-case-study-wrapper .cs-hero-mockup img {
 width: 100%; border-radius: 12px 12px 0 0; border: 1px solid rgba(255,255,255,0.08); border-bottom: none; display: block; }
.cs-case-study-wrapper /* LAYOUT */
  .cs-page {
 max-width: 900px; margin: 0 auto; padding: 0 60px; }
.cs-case-study-wrapper section {
 padding: 72px 0; border-bottom: 1px solid var(--border); }
.cs-case-study-wrapper section:last-child {
 border-bottom: none; }
.cs-case-study-wrapper .cs-section-label {
 font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--primary); margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
.cs-case-study-wrapper .cs-section-label::before {
 content: ''; width: 20px; height: 1px; background: var(--primary); }
.cs-case-study-wrapper h2 {
 font-size: 32px; font-weight: 300; letter-spacing: -0.02em; color: var(--dark); line-height: 1.2; margin-bottom: 20px; }
.cs-case-study-wrapper h2 strong {
 font-weight: 600; }
.cs-case-study-wrapper h3 {
 font-size: 16px; font-weight: 600; color: var(--dark); margin-bottom: 8px; }
.cs-case-study-wrapper p {
 font-size: 15px; color: var(--muted); line-height: 1.75; }
.cs-case-study-wrapper p + p {
 margin-top: 12px; }
.cs-case-study-wrapper /* CHALLENGE CARDS */
  .cs-challenge-grid {
 display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 32px; }
.cs-case-study-wrapper .cs-challenge-card {
 padding: 24px; border-radius: 12px; background: var(--surface); border: 1px solid var(--border); }
.cs-case-study-wrapper .cs-challenge-card .cs-icon {
 width: 36px; height: 36px; border-radius: 8px; background: #E0F2FE; display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 16px; }
.cs-case-study-wrapper .cs-challenge-card h3 {
 font-size: 14px; margin-bottom: 8px; }
.cs-case-study-wrapper .cs-challenge-card p {
 font-size: 13px; line-height: 1.6; }
.cs-case-study-wrapper /* USER TYPES */
  .cs-user-grid {
 display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
.cs-case-study-wrapper .cs-user-card {
 padding: 24px; border-radius: 12px; border: 1px solid var(--border); }
.cs-case-study-wrapper .cs-user-badge {
 display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; margin-bottom: 14px; }
.cs-case-study-wrapper .cs-user-card.cs-student .cs-user-badge {
 background: var(--primary-light); color: var(--primary); }
.cs-case-study-wrapper .cs-user-card.cs-admin .cs-user-badge {
 background: #FEF3C7; color: #D97706; }
.cs-case-study-wrapper .cs-user-card h3 {
 font-size: 15px; margin-bottom: 8px; }
.cs-case-study-wrapper .cs-user-card ul {
 list-style: none; }
.cs-case-study-wrapper .cs-user-card ul li {
 font-size: 13px; color: var(--muted); padding: 4px 0; display: flex; align-items: flex-start; gap: 8px; }
.cs-case-study-wrapper .cs-user-card ul li::before {
 content: '→'; color: var(--primary); flex-shrink: 0; margin-top: 1px; }
.cs-case-study-wrapper /* PROCESS */
  .cs-process-steps {
 margin-top: 36px; }
.cs-case-study-wrapper .cs-process-step {
 display: grid; grid-template-columns: 48px 1fr; gap: 20px; margin-bottom: 28px; align-items: start; }
.cs-case-study-wrapper .cs-step-num {
 width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; color: var(--primary); font-family: 'DM Mono', monospace; flex-shrink: 0; }
.cs-case-study-wrapper .cs-step-content h3 {
 font-size: 15px; margin-bottom: 4px; }
.cs-case-study-wrapper .cs-step-content p {
 font-size: 14px; }
.cs-case-study-wrapper /* SCREENS */
  .cs-screen-block {
 margin-top: 40px; }
.cs-case-study-wrapper .cs-screen-label {
 font-size: 12px; font-weight: 500; color: var(--muted); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.06em; }
.cs-case-study-wrapper .cs-screen-img {
 width: 100%; border-radius: 12px; border: 1px solid var(--border); box-shadow: 0 4px 32px rgba(37,99,235,0.08); display: block; }
.cs-case-study-wrapper .cs-screen-caption {
 font-size: 13px; color: var(--muted); margin-top: 10px; padding-left: 12px; border-left: 2px solid var(--primary-light); line-height: 1.6; }
.cs-case-study-wrapper .cs-screen-2col {
 display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 24px; }
.cs-case-study-wrapper /* DECISIONS */
  .cs-decisions {
 margin-top: 36px; display: grid; gap: 20px; }
.cs-case-study-wrapper .cs-decision {
 display: grid; grid-template-columns: 40px 1fr; gap: 20px; padding: 24px; border-radius: 12px; border: 1px solid var(--border); background: var(--white); align-items: start; }
.cs-case-study-wrapper .cs-decision-num {
 font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 500; color: var(--primary); padding-top: 2px; }
.cs-case-study-wrapper .cs-decision h3 {
 font-size: 15px; margin-bottom: 6px; }
.cs-case-study-wrapper .cs-decision p {
 font-size: 14px; }
.cs-case-study-wrapper /* RESULTS */
  .cs-results-grid {
 display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 32px 0; }
.cs-case-study-wrapper .cs-result-card {
 padding: 28px 24px; border-radius: 12px; background: var(--primary-light); border: 1px solid rgba(37,99,235,0.15); text-align: center; }
.cs-case-study-wrapper .cs-result-num {
 font-size: 36px; font-weight: 600; color: var(--primary); letter-spacing: -0.02em; line-height: 1; margin-bottom: 8px; }
.cs-case-study-wrapper .cs-result-label {
 font-size: 13px; color: var(--mid); line-height: 1.4; }
.cs-case-study-wrapper .cs-quote-block {
 padding: 28px 32px; border-radius: 12px; background: var(--dark2); margin-top: 28px; }
.cs-case-study-wrapper .cs-quote-block p {
 font-size: 17px; font-weight: 300; color: rgba(255,255,255,0.82); font-style: italic; line-height: 1.65; }
.cs-case-study-wrapper .cs-quote-attr {
 font-size: 13px; color: rgba(255,255,255,0.3); margin-top: 12px; }
.cs-case-study-wrapper /* ALL SCREENS GRID */
  .cs-all-screens-section {
 background: var(--surface); margin: 0 -60px; padding: 64px 60px; border-top: 1px solid var(--border); }
.cs-case-study-wrapper .cs-screens-grid {
 display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 32px; }
.cs-case-study-wrapper .cs-grid-item {
 }
.cs-case-study-wrapper .cs-grid-item img {
 width: 100%; border-radius: 10px; border: 1px solid var(--border); box-shadow: 0 2px 12px rgba(37,99,235,0.06); display: block; transition: transform 0.2s; }
.cs-case-study-wrapper .cs-grid-item img:hover {
 transform: scale(1.02); }
.cs-case-study-wrapper .cs-grid-label {
 font-size: 12px; font-weight: 500; color: var(--muted); margin-top: 8px; text-align: center; }
.cs-case-study-wrapper /* REFLECTION */
  .cs-reflection-box {
 background: var(--surface); border-radius: 12px; padding: 32px; border: 1px solid var(--border); margin-top: 24px; }
.cs-case-study-wrapper /* SCOPE PILLS */
  .scope-pills {
 display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.cs-case-study-wrapper .scope-pill {
 display: flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 100px; border: 1px solid var(--border); background: var(--white); font-size: 13px; font-weight: 500; color: var(--mid); }
.cs-case-study-wrapper .scope-pill .dot {
 width: 6px; height: 6px; border-radius: 50%; background: var(--primary); }
.cs-case-study-wrapper /* FOOTER */
  .cs-footer {
 background: var(--dark2); padding: 48px 60px; display: flex; justify-content: space-between; align-items: center; }
.cs-case-study-wrapper .cs-footer-name {
 font-size: 18px; font-weight: 500; color: var(--white); }
.cs-case-study-wrapper .cs-footer-role {
 font-size: 13px; color: rgba(255,255,255,0.3); margin-top: 4px; }
.cs-case-study-wrapper .cs-footer-links {
 display: flex; gap: 12px; }
.cs-case-study-wrapper .cs-footer-link {
 font-size: 13px; color: rgba(255,255,255,0.5); text-decoration: none; padding: 8px 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; }
@media print {
.cs-case-study-wrapper {
 -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.cs-case-study-wrapper section {
 page-break-inside: avoid; }
.cs-case-study-wrapper .cs-grid-item img:hover {
 transform: none; }
}
.cs-case-study-wrapper /* BACK TO HOME BUTTON */
  .back-to-home {

    position: fixed;
    top: 24px;
    left: 24px;
    z-index: 9999;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    background: rgba(13, 17, 23, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 100px;
    color: #ffffff;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
.cs-case-study-wrapper .back-to-home:hover {

    background: #2563EB;
    border-color: rgba(37, 99, 235, 0.3);
    box-shadow: 0 6px 24px rgba(37, 99, 235, 0.4);
    transform: translateY(-2px);
  }
.cs-case-study-wrapper .back-to-home svg {

    transition: transform 0.3s ease;
  }
.cs-case-study-wrapper .back-to-home:hover svg {

    transform: translateX(-3px);
  }
@media (max-width: 768px) {
.cs-case-study-wrapper .back-to-home {

      top: 16px;
      left: 16px;
      padding: 8px 14px;
      font-size: 12px;
    }
}
` }} />
      
      <Link href="/" className="back-to-home">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span>Back to Home</span>
      </Link>

      <div className="cs-hero">
  <div className="cs-page" style={{ paddingBottom: "0" }}>
    <div className="cs-hero-inner">
      <div className="cs-hero-label"><span></span>Case Study · 2024</div>
      <h1>MBKM UT<br /><strong>& TTM App</strong></h1>
      <p className="cs-hero-sub">Universitas Terbuka · Unified Student Internship & Attendance Experience</p>
      <div className="cs-hero-tags">
        <span className="cs-tag">Figma</span>
        <span className="cs-tag">Web Design</span>
        <span className="cs-tag">Mobile App Design</span>
        <span className="cs-tag">Education</span>
        <span className="cs-tag">Shared Design System</span>
        <span className="cs-tag">UX Optimization</span>
      </div>
      <div className="cs-hero-meta">
        <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Client</div><div className="cs-hero-meta-val">Universitas Terbuka</div></div>
        <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Role</div><div className="cs-hero-meta-val">Sole UI/UX Designer</div></div>
        <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Timeline</div><div className="cs-hero-meta-val">2024</div></div>
        <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Tools</div><div className="cs-hero-meta-val">Figma</div></div>
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
    <div className="cs-section-label">Context & Challenge</div>
    <h2>Bridging the Gap: <strong>Disconnected Flows</strong></h2>
    <p>
      Universitas Terbuka (UT) students participating in the Merdeka Belajar Kampus Merdeka (MBKM) program faced a high friction operational environment. Due to disjointed backend systems, students had to register for programs on one portal, submit dossiers manually, and log their daily attendance (Tatap Muka/TTM) via a completely separate app.
    </p>
    <p>
      This caused high error rates in attendance tracking, delayed validation of student dossiers, and administrative overhead. The goal of this project was to unify the entire student lifecycle—from initial discovery and registration to daily attendance tracking and final grading—into a seamless experience spanning both a desktop web application and a companion mobile app.
    </p>
    <div className="cs-challenge-grid">
      <div className="cs-challenge-card">
        <div className="cs-icon">🔄</div>
        <h3>Disconnected Systems</h3>
        <p>Students spent unnecessary time switching between portals to register, submit documents, and record attendance.</p>
      </div>
      <div className="cs-challenge-card">
        <div className="cs-icon">🚨</div>
        <h3>Dossier Bottlenecks</h3>
        <p>Program Chairs (Kaprodi) spent days manually validating physical spreadsheets and uploaded PDFs.</p>
      </div>
      <div className="cs-challenge-card">
        <div className="cs-icon">📱</div>
        <h3>Friction in Mobile UX</h3>
        <p>Low-end mobile devices struggled with heavy pages, leading to high drop-offs during registration.</p>
      </div>
    </div>
  </section>

  
  <section id="users">
    <div className="cs-section-label">User Demographics</div>
    <h2>Addressing <strong>Diverse Stakeholders</strong></h2>
    <p>
      The platform serves two primary groups with vastly different technical fluencies, environments, and goals:
    </p>
    <div className="cs-user-grid">
      <div className="cs-user-card cs-student">
        <span className="cs-user-badge">Students</span>
        <h3>Goals & Needs</h3>
        <ul>
          <li>Quickly discover available MBKM programs (internships, student exchanges, summer courses).</li>
          <li>Friction-free dossier submission with clear status indicators.</li>
          <li>Log attendance effortlessly on-the-go via a lightweight mobile check-in app.</li>
        </ul>
      </div>
      <div className="cs-user-card cs-admin">
        <span className="cs-user-badge">Program Chairs (Kaprodi)</span>
        <h3>Goals & Needs</h3>
        <ul>
          <li>High-density information dashboards to scan and approve student registrations.</li>
          <li>Filterable data lists to sort dossiers by student status, grade, or course.</li>
          <li>Batch actions to approve multiple requests simultaneously.</li>
        </ul>
      </div>
    </div>
  </section>

  
  <section id="process">
    <div className="cs-section-label">Design Process</div>
    <h2>From <strong>Insights to Prototypes</strong></h2>
    <div className="cs-process-steps">
      <div className="cs-process-step">
        <div className="cs-step-num">01</div>
        <div className="cs-step-content">
          <h3>Discover & Audit</h3>
          <p>Mapped student journeys and legacy registration steps. Identified navigation bottlenecks and heavy pages causing timeout errors on mobile browsers.</p>
        </div>
      </div>
      <div className="cs-process-step">
        <div className="cs-step-num">02</div>
        <div className="cs-step-content">
          <h3>Information Architecture</h3>
          <p>Consolidated the two portals into a single shared database structure. Defined a step-by-step wizard for dossier submission and designed a lightweight attendance model.</p>
        </div>
      </div>
      <div className="cs-process-step">
        <div className="cs-step-num">03</div>
        <div className="cs-step-content">
          <h3>Responsive Design System</h3>
          <p>Created a shared Figma component library centered around UT's corporate identity. Designed highly visible status tags and optimized button tap targets for on-screen ease of use.</p>
        </div>
      </div>
      <div className="cs-process-step">
        <div className="cs-step-num">04</div>
        <div className="cs-step-content">
          <h3>Validation & Handoff</h3>
          <p>Tested high-fidelity interactive prototypes with a demographic sample of students and administrators. Provided documented Figma dev-handoff assets with annotated layouts.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section id="screens">
    <div className="cs-section-label">Visual Design & UX Highlights</div>
    <h2>Focusing on <strong>Efficiency and Clarity</strong></h2>
    
    <div className="cs-screen-block">
      <div className="cs-screen-label">Student Portal: Single Dashboard Flow</div>
      <img className="cs-screen-img" src="/projects/mbkm/MBKM Non PP.png" alt="Student portal MBKM dashboard" />
      <p className="cs-screen-caption">The redesigned dashboard offers students a single point of entry to discover programs, track registration steps, and view logbooks.</p>
    </div>

    <div className="cs-screen-2col">
      <div>
        <div className="cs-screen-label">Frictionless Authentication</div>
        <img className="cs-screen-img" src="/projects/mbkm/Login.png" alt="Login screen" />
        <p className="cs-screen-caption">A clean, high-contrast login screen tailored for quick identification and responsive mobile rendering.</p>
      </div>
      <div>
        <div className="cs-screen-label">Inbound Program Registration</div>
        <img className="cs-screen-img" src="/projects/mbkm/Inbound PP UT.png" alt="Inbound registration flow" />
        <p className="cs-screen-caption">The multi-step inbound program registration provides clear indicators showing which documents are complete.</p>
      </div>
    </div>

    <div className="cs-screen-block">
      <div className="cs-screen-label">Program Chairs: Batch Verification</div>
      <img className="cs-screen-img" src="/projects/mbkm/Kaprodi.png" alt="Kaprodi dashboard screen" />
      <p className="cs-screen-caption">An optimized dashboard layout for Program Chairs (Kaprodi) featuring dense, filterable tables to handle student validations quickly.</p>
    </div>

    <div className="cs-screen-2col">
      <div>
        <div className="cs-screen-label">Student Exchange Portal</div>
        <img className="cs-screen-img" src="/projects/mbkm/Pertukaran Pelajar.png" alt="Pertukaran Pelajar registration" />
        <p className="cs-screen-caption">Step-by-step validation guide explaining courses, credits, and requirements for student exchanges.</p>
      </div>
      <div>
        <div className="cs-screen-label">Summer Course Selection</div>
        <img className="cs-screen-img" src="/projects/mbkm/Summer Course.png" alt="Summer course selection interface" />
        <p className="cs-screen-caption">A cards-based visual directory enabling students to scan and select available summer courses.</p>
      </div>
    </div>
  </section>

  
  <section id="decisions">
    <div className="cs-section-label">Key Design Decisions</div>
    <h2>Decisions that <strong>Shaped the Experience</strong></h2>
    <div className="cs-decisions">
      <div className="cs-decision">
        <div className="cs-decision-num">D1</div>
        <div className="cs-step-content">
          <h3>Consolidated Web & Mobile Attendance</h3>
          <p>By bringing registration and attendance into one shared system, we eliminated the need for students to switch tools. Attendance updates instantly sync to the course dashboard, resolving delays in admin reporting.</p>
        </div>
      </div>
      <div className="cs-decision">
        <div className="cs-decision-num">D2</div>
        <div className="cs-step-content">
          <h3>Status Tagging over Dense Spreadsheets</h3>
          <p>Replaced plain, nested table views in the Kaprodi panel with color-coded status pills (e.g., "Pending Validation," "Approved," "Resubmission Required") to guide user attention to urgent items.</p>
        </div>
      </div>
      <div className="cs-decision">
        <div className="cs-decision-num">D3</div>
        <div className="cs-step-content">
          <h3>Progress Trackers for Forms</h3>
          <p>Divided long application processes into clear, linear multi-step wizards. Storing draft submissions locally prevented data loss if connection drops occur.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section id="results">
    <div className="cs-section-label">Results & Impact</div>
    <h2>Measurable <strong>Improvements</strong></h2>
    <div className="cs-results-grid">
      <div className="cs-result-card">
        <div className="cs-result-num">100%</div>
        <div className="cs-result-label">Registration & Attendance Unified</div>
      </div>
      <div className="cs-result-card">
        <div className="cs-result-num">4.8★</div>
        <div className="cs-result-label">Student Usability Rating</div>
      </div>
      <div className="cs-result-card">
        <div className="cs-result-num">-60%</div>
        <div className="cs-result-label">Reduction in Administrative Delay</div>
      </div>
    </div>
    <div className="cs-quote-block">
      <p>
        "Unifying the registration and attendance experience has dramatically reduced support inquiries from students during the MBKM cycle, while making our dossier verification process substantially cleaner."
      </p>
      <div className="cs-quote-attr">UNIVERSITAS TERBUKA ADMIN TEAM</div>
    </div>
  </section>

  
  <section id="reflection">
    <div className="cs-section-label">Key Reflection</div>
    <h2>What I <strong>Learned</strong></h2>
    <div className="cs-reflection-box">
      <p>
        Designing for public institutions with a large and diverse demographic group means prioritizing accessibility above all. A visual design that looks highly polished is only successful if it can render efficiently on entry-level smartphones and remain clear for users who are not digital natives. 
      </p>
      <p>
        Cooperating with developers during the handoff process was essential to ensure the complex table views and responsive forms were built exactly as specified in the layouts.
      </p>
    </div>
  </section>
</div>


<div className="cs-all-screens-section">
  <div className="cs-page">
    <div className="cs-section-label">UI Directory</div>
    <h2>All <strong>Key Screens</strong></h2>
    <div className="cs-screens-grid">
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Login.png" alt="Login Portal" />
        <div className="cs-grid-label">Login Portal</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Failed Login.png" alt="Failed Login Portal" />
        <div className="cs-grid-label">Login Portal (Error State)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/MBKM-1.png" alt="MBKM Main Portal" />
        <div className="cs-grid-label">MBKM Main Portal</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/MBKM Non PP.png" alt="Student Dashboard" />
        <div className="cs-grid-label">Student Dashboard (General)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/MBKM NON PP-1.png" alt="Student Dashboard - Program List" />
        <div className="cs-grid-label">Student Dashboard (Program List)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/MBKM NON PP-2.png" alt="Student Dashboard - Program Detail" />
        <div className="cs-grid-label">Student Dashboard (Program Detail)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/MBKM NON PP-3.png" alt="Student Dashboard - Status Tracking" />
        <div className="cs-grid-label">Student Dashboard (Status Tracking)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Inbound PP UT.png" alt="Inbound Student Registration" />
        <div className="cs-grid-label">Inbound Registration (Overview)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Inbound PP UT-1.png" alt="Inbound Student Registration Form" />
        <div className="cs-grid-label">Inbound Registration (Form)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Pertukaran Pelajar.png" alt="Student Exchange Portal" />
        <div className="cs-grid-label">Student Exchange (Overview)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Pertukaran Pelajar-1.png" alt="Student Exchange - Selection" />
        <div className="cs-grid-label">Student Exchange (Course Mapping)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Pertukaran Pelajar-2.png" alt="Student Exchange - Course Application" />
        <div className="cs-grid-label">Student Exchange (Application)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Pertukaran Pelajar-3.png" alt="Student Exchange - Review & Submit" />
        <div className="cs-grid-label">Student Exchange (Review)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Pertukaran Pelajar-4.png" alt="Student Exchange - Final Registration" />
        <div className="cs-grid-label">Student Exchange (Submission)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Summer Course.png" alt="Summer Course Selection" />
        <div className="cs-grid-label">Summer Course (Overview)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Summer Course-1.png" alt="Summer Course - Details" />
        <div className="cs-grid-label">Summer Course (Details)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Summer Course-2.png" alt="Summer Course - Syllabus" />
        <div className="cs-grid-label">Summer Course (Syllabus)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Summer Course-3.png" alt="Summer Course - Schedules" />
        <div className="cs-grid-label">Summer Course (Schedules)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Summer Course-4.png" alt="Summer Course - Registration" />
        <div className="cs-grid-label">Summer Course (Registration)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Summer Course-5.png" alt="Summer Course - Final Status" />
        <div className="cs-grid-label">Summer Course (Success State)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Kaprodi.png" alt="Kaprodi Dashboard" />
        <div className="cs-grid-label">Kaprodi Portal (Main Dashboard)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Kaprodi-1.png" alt="Kaprodi validation table" />
        <div className="cs-grid-label">Kaprodi Portal (Validations List)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Kaprodi-2.png" alt="Kaprodi validation details" />
        <div className="cs-grid-label">Kaprodi Portal (Dossier Review)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Wd 1.png" alt="Vice Dean Dashboard" />
        <div className="cs-grid-label">Vice Dean Portal (Approvals Panel)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/LaporanValidasiBerkas.png" alt="Validation report" />
        <div className="cs-grid-label">Admin Portal (Validation Report)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Dashboard 15.png" alt="Admin Dashboard View 15" />
        <div className="cs-grid-label">Admin Dashboard (System Config)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Dashboard 20.png" alt="Admin Dashboard View 20" />
        <div className="cs-grid-label">Admin Dashboard (Logs Panel)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Dashboard 21.png" alt="Admin Dashboard View 21" />
        <div className="cs-grid-label">Admin Dashboard (Analytics Graph)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Dashboard 22.png" alt="Admin Dashboard View 22" />
        <div className="cs-grid-label">Admin Dashboard (Dossier Audit)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Dashboard 28.png" alt="Admin Dashboard View 28" />
        <div className="cs-grid-label">Admin Dashboard (Student DB)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Dashboard 29.png" alt="Admin Dashboard View 29" />
        <div className="cs-grid-label">Admin Dashboard (Faculty DB)</div>
      </div>
      <div className="cs-grid-item">
        <img src="/projects/mbkm/Dashboard 30.png" alt="Admin Dashboard View 30" />
        <div className="cs-grid-label">Admin Dashboard (Partners DB)</div>
      </div>
    </div>
  </div>
</div>


<div className="cs-footer">
  <div>
    <div className="cs-footer-name">Arrozy Adi Falaqi</div>
    <div className="cs-footer-role">UI/UX Designer</div>
  </div>
  <div className="cs-footer-links">
    <a href="/" className="cs-footer-link">Portfolio</a>
    <a href="https://www.linkedin.com/in/arrozy-adi-falaqi-6a25ba14a" target="_blank" rel="noreferrer" className="cs-footer-link">LinkedIn</a>
    <a href="https://www.behance.net/arrozyadifalaqi" target="_blank" rel="noreferrer" className="cs-footer-link">Behance</a>
  </div>
</div>
    </div>
  );
}
