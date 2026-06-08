"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="case-study-wrapper">
      <style dangerouslySetInnerHTML={{ __html: `.case-study-wrapper *, .case-study-wrapper *::before, .case-study-wrapper *::after {
 box-sizing: border-box; margin: 0; padding: 0; }
.case-study-wrapper {

    --purple: #6C3FE8;
    --purple-dark: #4A1FA8;
    --blue: #2563EB;
    --teal: #0EA5C8;
    --purple-light: #EEE8FF;
    --dark: #0D0D1A;
    --dark2: #13102B;
    --mid: #3D3860;
    --muted: #6B6890;
    --border: #E8E6F4;
    --surface: #F7F5FF;
    --white: #FFFFFF;
    --grad: linear-gradient(135deg, #6C3FE8 0%, #2563EB 60%, #0EA5C8 100%);
  }
.case-study-wrapper {
 font-size: 16px; }
.case-study-wrapper {
 font-family: 'DM Sans', sans-serif; color: var(--dark); background: var(--white); line-height: 1.6; -webkit-font-smoothing: antialiased; }
.case-study-wrapper /* HERO */
  .hero {
 background: var(--dark2); padding: 80px 60px 0; position: relative; overflow: hidden; }
.case-study-wrapper .hero::before {
 content: ''; position: absolute; top: -150px; left: -100px; width: 600px; height: 600px; background: radial-gradient(circle, rgba(108,63,232,0.22) 0%, transparent 65%); border-radius: 50%; }
.case-study-wrapper .hero::after {
 content: ''; position: absolute; top: -80px; right: -80px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(14,165,200,0.15) 0%, transparent 65%); border-radius: 50%; }
.case-study-wrapper .hero-inner {
 position: relative; z-index: 1; }
.case-study-wrapper .hero-label {
 display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #A78BFA; background: rgba(108,63,232,0.15); border: 1px solid rgba(108,63,232,0.3); padding: 6px 14px; border-radius: 100px; margin-bottom: 28px; }
.case-study-wrapper .hero-label span {
 width: 6px; height: 6px; border-radius: 50%; background: #A78BFA; display:inline-block; }
.case-study-wrapper .hero h1 {
 font-size: 50px; font-weight: 300; line-height: 1.1; color: var(--white); letter-spacing: -0.02em; max-width: 620px; margin-bottom: 10px; }
.case-study-wrapper .hero h1 strong {
 font-weight: 600; background: var(--grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.case-study-wrapper .hero-sub {
 font-size: 15px; color: rgba(255,255,255,0.4); margin-bottom: 36px; font-weight: 300; }
.case-study-wrapper .hero-tags {
 display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 44px; }
.case-study-wrapper .tag {
 font-size: 12px; font-weight: 500; padding: 5px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.5); }
.case-study-wrapper .hero-meta {
 display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid rgba(255,255,255,0.07); padding: 24px 0 0; }
.case-study-wrapper .hero-meta-item {
 padding-bottom: 28px; padding-right: 24px; margin-right: 24px; border-right: 1px solid rgba(255,255,255,0.07); }
.case-study-wrapper .hero-meta-item:last-child {
 border-right: none; }
.case-study-wrapper .hero-meta-label {
 font-size: 11px; color: rgba(255,255,255,0.28); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
.case-study-wrapper .hero-meta-val {
 font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.75); }
.case-study-wrapper .hero-mockup {
 margin: 0 -60px; background: rgba(255,255,255,0.03); border-top: 1px solid rgba(255,255,255,0.05); padding: 32px 60px 0; }
.case-study-wrapper .hero-mockup img {
 width: 100%; border-radius: 12px 12px 0 0; border: 1px solid rgba(255,255,255,0.08); border-bottom: none; display: block; }
.case-study-wrapper /* LAYOUT */
  .page {
 max-width: 900px; margin: 0 auto; padding: 0 60px; }
.case-study-wrapper section {
 padding: 72px 0; border-bottom: 1px solid var(--border); }
.case-study-wrapper section:last-child {
 border-bottom: none; }
.case-study-wrapper .section-label {
 font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--purple); margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
.case-study-wrapper .section-label::before {
 content: ''; width: 20px; height: 1px; background: var(--purple); }
.case-study-wrapper h2 {
 font-size: 32px; font-weight: 300; letter-spacing: -0.02em; color: var(--dark); line-height: 1.2; margin-bottom: 20px; }
.case-study-wrapper h2 strong {
 font-weight: 600; }
.case-study-wrapper h3 {
 font-size: 16px; font-weight: 600; color: var(--dark); margin-bottom: 8px; }
.case-study-wrapper p {
 font-size: 15px; color: var(--muted); line-height: 1.75; }
.case-study-wrapper p + p {
 margin-top: 12px; }
.case-study-wrapper /* CHALLENGE CARDS */
  .challenge-grid {
 display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 32px; }
.case-study-wrapper .challenge-card {
 padding: 24px; border-radius: 12px; background: var(--surface); border: 1px solid var(--border); }
.case-study-wrapper .challenge-card .icon {
 width: 36px; height: 36px; border-radius: 8px; background: #FFE8E8; display: flex; align-items: center; justify-content: center; font-size: 18px; margin-bottom: 16px; }
.case-study-wrapper .challenge-card h3 {
 font-size: 14px; margin-bottom: 8px; }
.case-study-wrapper .challenge-card p {
 font-size: 13px; line-height: 1.6; }
.case-study-wrapper /* USER TYPES */
  .user-grid {
 display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
.case-study-wrapper .user-card {
 padding: 24px; border-radius: 12px; border: 1px solid var(--border); }
.case-study-wrapper .user-badge {
 display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; margin-bottom: 14px; }
.case-study-wrapper .user-card.admin .user-badge {
 background: var(--purple-light); color: var(--purple); }
.case-study-wrapper .user-card.customer .user-badge {
 background: #E0F2FE; color: #0369A1; }
.case-study-wrapper .user-card h3 {
 font-size: 15px; margin-bottom: 8px; }
.case-study-wrapper .user-card ul {
 list-style: none; }
.case-study-wrapper .user-card ul li {
 font-size: 13px; color: var(--muted); padding: 4px 0; display: flex; align-items: flex-start; gap: 8px; }
.case-study-wrapper .user-card ul li::before {
 content: '→'; color: var(--purple); flex-shrink: 0; margin-top: 1px; }
.case-study-wrapper /* PROCESS */
  .process-steps {
 margin-top: 36px; }
.case-study-wrapper .process-step {
 display: grid; grid-template-columns: 48px 1fr; gap: 20px; margin-bottom: 28px; align-items: start; }
.case-study-wrapper .step-num {
 width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 600; color: var(--purple); font-family: 'DM Mono', monospace; flex-shrink: 0; }
.case-study-wrapper .step-content h3 {
 font-size: 15px; margin-bottom: 4px; }
.case-study-wrapper .step-content p {
 font-size: 14px; }
.case-study-wrapper /* SCREENS */
  .screen-block {
 margin-top: 40px; }
.case-study-wrapper .screen-label {
 font-size: 12px; font-weight: 500; color: var(--muted); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.06em; }
.case-study-wrapper .screen-img {
 width: 100%; border-radius: 12px; border: 1px solid var(--border); box-shadow: 0 4px 32px rgba(108,63,232,0.08); display: block; }
.case-study-wrapper .screen-caption {
 font-size: 13px; color: var(--muted); margin-top: 10px; padding-left: 12px; border-left: 2px solid var(--purple-light); line-height: 1.6; }
.case-study-wrapper .screen-2col {
 display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 24px; }
.case-study-wrapper /* DECISIONS */
  .decisions {
 margin-top: 36px; display: grid; gap: 20px; }
.case-study-wrapper .decision {
 display: grid; grid-template-columns: 40px 1fr; gap: 20px; padding: 24px; border-radius: 12px; border: 1px solid var(--border); background: var(--white); align-items: start; }
.case-study-wrapper .decision-num {
 font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 500; color: var(--purple); padding-top: 2px; }
.case-study-wrapper .decision h3 {
 font-size: 15px; margin-bottom: 6px; }
.case-study-wrapper .decision p {
 font-size: 14px; }
.case-study-wrapper /* RESULTS */
  .results-grid {
 display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 32px 0; }
.case-study-wrapper .result-card {
 padding: 28px 24px; border-radius: 12px; background: var(--purple-light); border: 1px solid rgba(108,63,232,0.15); text-align: center; }
.case-study-wrapper .result-num {
 font-size: 36px; font-weight: 600; color: var(--purple); letter-spacing: -0.02em; line-height: 1; margin-bottom: 8px; }
.case-study-wrapper .result-label {
 font-size: 13px; color: var(--mid); line-height: 1.4; }
.case-study-wrapper .quote-block {
 padding: 28px 32px; border-radius: 12px; background: var(--dark2); margin-top: 28px; }
.case-study-wrapper .quote-block p {
 font-size: 17px; font-weight: 300; color: rgba(255,255,255,0.82); font-style: italic; line-height: 1.65; }
.case-study-wrapper .quote-attr {
 font-size: 13px; color: rgba(255,255,255,0.3); margin-top: 12px; }
.case-study-wrapper /* ALL SCREENS GRID */
  .all-screens-section {
 background: var(--surface); margin: 0 -60px; padding: 64px 60px; border-top: 1px solid var(--border); }
.case-study-wrapper .screens-grid {
 display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 32px; }
.case-study-wrapper .grid-item {
 }
.case-study-wrapper .grid-item img {
 width: 100%; border-radius: 10px; border: 1px solid var(--border); box-shadow: 0 2px 12px rgba(108,63,232,0.06); display: block; transition: transform 0.2s; }
.case-study-wrapper .grid-item img:hover {
 transform: scale(1.02); }
.case-study-wrapper .grid-label {
 font-size: 12px; font-weight: 500; color: var(--muted); margin-top: 8px; text-align: center; }
.case-study-wrapper /* REFLECTION */
  .reflection-box {
 background: var(--surface); border-radius: 12px; padding: 32px; border: 1px solid var(--border); margin-top: 24px; }
.case-study-wrapper /* SCOPE PILLS */
  .scope-pills {
 display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.case-study-wrapper .scope-pill {
 display: flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 100px; border: 1px solid var(--border); background: var(--white); font-size: 13px; font-weight: 500; color: var(--mid); }
.case-study-wrapper .scope-pill .dot {
 width: 6px; height: 6px; border-radius: 50%; background: var(--purple); }
.case-study-wrapper /* FOOTER */
  .footer {
 background: var(--dark2); padding: 48px 60px; display: flex; justify-content: space-between; align-items: center; }
.case-study-wrapper .footer-name {
 font-size: 18px; font-weight: 500; color: var(--white); }
.case-study-wrapper .footer-role {
 font-size: 13px; color: rgba(255,255,255,0.3); margin-top: 4px; }
.case-study-wrapper .footer-links {
 display: flex; gap: 12px; }
.case-study-wrapper .footer-link {
 font-size: 13px; color: rgba(255,255,255,0.5); text-decoration: none; padding: 8px 16px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; }
@media print {
.case-study-wrapper {
 -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.case-study-wrapper section {
 page-break-inside: avoid; }
.case-study-wrapper .grid-item img:hover {
 transform: none; }
}
.case-study-wrapper /* BACK TO HOME BUTTON */
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
.case-study-wrapper .back-to-home:hover {

    background: #1A6BFF;
    border-color: rgba(26, 107, 255, 0.3);
    box-shadow: 0 6px 24px rgba(26, 107, 255, 0.4);
    transform: translateY(-2px);
  }
.case-study-wrapper .back-to-home svg {

    transition: transform 0.3s ease;
  }
.case-study-wrapper .back-to-home:hover svg {

    transform: translateX(-3px);
  }
@media (max-width: 768px) {
.case-study-wrapper .back-to-home {

      top: 16px;
      left: 16px;
      padding: 8px 14px;
      font-size: 12px;
    }
.case-study-wrapper .hero {

      padding: 60px 20px 0;
    }
.case-study-wrapper .hero h1 {

      font-size: 32px;
    }
.case-study-wrapper .hero-sub {

      font-size: 14px;
      margin-bottom: 24px;
    }
.case-study-wrapper .hero-tags {

      margin-bottom: 32px;
    }
.case-study-wrapper .hero-meta {

      grid-template-columns: 1fr;
      padding-top: 16px;
    }
.case-study-wrapper .hero-meta-item {

      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      margin-right: 0;
      padding-right: 0;
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
.case-study-wrapper .hero-meta-item:last-child {

      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
.case-study-wrapper .hero-mockup {

      margin: 0 -20px;
      padding: 20px 20px 0;
    }
.case-study-wrapper .page {

      padding: 0 20px;
    }
.case-study-wrapper section {

      padding: 48px 0;
    }
.case-study-wrapper h2 {

      font-size: 24px;
      line-height: 1.3;
    }
.case-study-wrapper .challenge-grid {

      grid-template-columns: 1fr;
      gap: 16px;
    }
.case-study-wrapper .user-grid {

      grid-template-columns: 1fr;
      gap: 16px;
    }
.case-study-wrapper .screen-2col {

      grid-template-columns: 1fr;
      gap: 20px;
    }
.case-study-wrapper .results-grid {

      grid-template-columns: 1fr;
      gap: 16px;
    }
.case-study-wrapper .quote-block {

      padding: 20px 24px;
    }
.case-study-wrapper .reflection-box {

      padding: 24px;
    }
.case-study-wrapper .all-screens-section {

      margin: 0 -20px;
      padding: 48px 20px;
    }
.case-study-wrapper .screens-grid {

      grid-template-columns: 1fr;
      gap: 16px;
    }
.case-study-wrapper .footer {

      padding: 32px 20px;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
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

      <div className="hero">
  <div className="page" style={{ paddingBottom: "0" }}>
    <div className="hero-inner">
      <div className="hero-label"><span></span>Case Study · 2024</div>
      <h1>e-Sertifikat<br /><strong>Next Gen</strong></h1>
      <p className="hero-sub">Kominfo · SDPPI · Certification Platform Redesign</p>
      <div className="hero-tags">
        <span className="tag">Figma</span>
        <span className="tag">Web Platform</span>
        <span className="tag">Admin Dashboard</span>
        <span className="tag">Government</span>
        <span className="tag">Multi-role System</span>
        <span className="tag">UX Redesign</span>
      </div>
      <div className="hero-meta">
        <div className="hero-meta-item"><div className="hero-meta-label">Client</div><div className="hero-meta-val">Kominfo / SDPPI</div></div>
        <div className="hero-meta-item"><div className="hero-meta-label">Role</div><div className="hero-meta-val">UI/UX Designer</div></div>
        <div className="hero-meta-item"><div className="hero-meta-label">Timeline</div><div className="hero-meta-val">2024</div></div>
        <div className="hero-meta-item"><div className="hero-meta-label">Tools</div><div className="hero-meta-val">Figma</div></div>
      </div>
    </div>
  </div>
  <div className="hero-mockup">
    <div className="page" style={{ paddingBottom: "0" }}>
      <img src="/images/case-study/esertifikat-nextgen/img_1.png" alt="Admin Dashboard" />
    </div>
  </div>
</div>

<div className="page">


<section>
  <div className="section-label">Overview</div>
  <h2>A national certification platform<br /><strong>for telecommunication devices</strong></h2>
  <p>e-Sertifikat Next Gen is an official platform under Direktorat Jenderal Sumber Daya dan Perangkat Pos dan Informatika (SDPPI), Kementerian Komunikasi dan Informatika (Kominfo). It manages the end-to-end certification process for telecommunication and electronic devices distributed across Indonesia.</p>
  <p>The redesign covered three distinct surfaces — a public-facing website, a customer portal for corporate applicants, and an admin dashboard for government operators — all unified under one cohesive design system.</p>
  <div className="scope-pills">
    <div className="scope-pill"><div className="dot"></div>Public website</div>
    <div className="scope-pill"><div className="dot"></div>Customer portal</div>
    <div className="scope-pill"><div className="dot"></div>Admin dashboard</div>
    <div className="scope-pill"><div className="dot"></div>Certificate registry</div>
    <div className="scope-pill"><div className="dot"></div>Document management</div>
  </div>
</section>


<section>
  <div className="section-label">The Problem</div>
  <h2>An outdated system struggling<br /><strong>with scale and complexity</strong></h2>
  <p>The existing platform was built over multiple iterations without a unified UX strategy. As application volumes grew, the system's shortcomings became increasingly costly for both operators and applicants.</p>
  <div className="challenge-grid">
    <div className="challenge-card">
      <div className="icon">🏛️</div>
      <h3>No design system</h3>
      <p>Inconsistent components across pages — eroding trust in a government service context where credibility matters.</p>
    </div>
    <div className="challenge-card">
      <div className="icon">🔁</div>
      <h3>Confusing multi-role flows</h3>
      <p>Applicants and admins had overlapping interfaces not clearly differentiated — causing confusion and wrong actions.</p>
    </div>
    <div className="challenge-card">
      <div className="icon">📋</div>
      <h3>No status transparency</h3>
      <p>Users couldn't track application status through the multi-step review process — driving high support inquiry volume.</p>
    </div>
  </div>
</section>


<section>
  <div className="section-label">Users</div>
  <h2>Two very different users,<br /><strong>one unified system</strong></h2>
  <p>A core design challenge was serving two groups with fundamentally different needs — corporate applicants who interact occasionally, and government operators who work in the system intensively every single day.</p>
  <div className="user-grid">
    <div className="user-card admin">
      <div className="user-badge">Admin — Operator SDPPI</div>
      <h3>Government admin operators</h3>
      <ul>
        <li>Review and process incoming applications daily</li>
        <li>Monitor queues and multi-stage approval pipeline</li>
        <li>Track PNBP revenue with live charts</li>
        <li>Issue, reject, or request document revisions</li>
        <li>Access full document checklist per application</li>
      </ul>
    </div>
    <div className="user-card customer">
      <div className="user-badge">Customer — Corporate Applicant</div>
      <h3>Companies applying for certification</h3>
      <ul>
        <li>Submit new certification applications</li>
        <li>Track application status in real-time</li>
        <li>Upload and manage technical documents</li>
        <li>View and download issued certificates</li>
        <li>Monitor queue position and estimated timelines</li>
      </ul>
    </div>
  </div>
</section>


<section>
  <div className="section-label">Process</div>
  <h2>From brief to<br /><strong>multi-surface design system</strong></h2>
  <div className="process-steps">
    <div className="process-step">
      <div className="step-num">01</div>
      <div className="step-content"><h3>Brief & scope mapping</h3><p>Mapped all functional requirements across two user roles and five surface areas from the client brief — defining clear boundaries before touching any design.</p></div>
    </div>
    <div className="process-step">
      <div className="step-num">02</div>
      <div className="step-content"><h3>Role-based information architecture</h3><p>Defined separate navigation structures and task flows per role — ensuring neither user encounters cross-role elements that cause confusion.</p></div>
    </div>
    <div className="process-step">
      <div className="step-num">03</div>
      <div className="step-content"><h3>Component & design system</h3><p>Built a shared component set — status badges, data tables, filterable forms, summary cards, and chart containers — reusable across all surfaces.</p></div>
    </div>
    <div className="process-step">
      <div className="step-num">04</div>
      <div className="step-content"><h3>High-fidelity UI + handoff</h3><p>Delivered complete hi-fi for all three surfaces with Figma handoff specs and a component library for the development team.</p></div>
    </div>
  </div>
</section>


<section>
  <div className="section-label">Key Screens</div>
  <h2>Highlighted screens from<br /><strong>each surface</strong></h2>

  <div className="screen-block">
    <div className="screen-label">Login</div>
    <img className="screen-img" src="/images/case-study/esertifikat-nextgen/img_2.png" alt="Login" />
    <p className="screen-caption">Split-screen login with the e-Sertifikat Next Gen branding. The purple gradient creates a modern government identity while the right panel contextualizes the platform's purpose for new visitors.</p>
  </div>

  <div className="screen-2col">
    <div>
      <div className="screen-label">Customer — Beranda</div>
      <img className="screen-img" src="/images/case-study/esertifikat-nextgen/img_3.png" alt="Beranda Customer" />
      <p className="screen-caption">Customer home surfaces account details and live queue info — giving applicants immediate visibility into their position without contacting support.</p>
    </div>
    <div>
      <div className="screen-label">Admin — Beranda</div>
      <img className="screen-img" src="/images/case-study/esertifikat-nextgen/img_4.png" alt="Beranda Admin" />
      <p className="screen-caption">Admin home shows pipeline status cards, daily achievement metrics, queue trend chart, and PNBP revenue tracker — everything an operator needs at a glance.</p>
    </div>
  </div>

  <div className="screen-block">
    <div className="screen-label">Aplikasi — Application list</div>
    <img className="screen-img" src="/images/case-study/esertifikat-nextgen/img_5.png" alt="Aplikasi" />
    <p className="screen-caption">Structured application table with color-coded status badges (BATAL, SP2 KADALUARSA, DRAFT CUSTOMER), inline action menus, and pagination — designed for high-volume daily processing by admin operators.</p>
  </div>

  <div className="screen-2col">
    <div>
      <div className="screen-label">Detail Aplikasi — Customer view</div>
      <img className="screen-img" src="/images/case-study/esertifikat-nextgen/img_6.png" alt="Detail Customer" />
      <p className="screen-caption">Two-column detail layout showing all application fields, device specs, and required document uploads in a clear, scannable structure.</p>
    </div>
    <div>
      <div className="screen-label">Detail Aplikasi — Admin view</div>
      <img className="screen-img" src="/images/case-study/esertifikat-nextgen/img_7.png" alt="Detail Admin" />
      <p className="screen-caption">Admin detail view adds review controls, disposition actions, and checklist tracking on top of the same application data — same layout, role-specific capabilities.</p>
    </div>
  </div>

  <div className="screen-block">
    <div className="screen-label">Sertifikat Terbit — Public registry</div>
    <img className="screen-img" src="/images/case-study/esertifikat-nextgen/img_8.png" alt="Sertifikat Terbit" />
    <p className="screen-caption">Public-facing certificate registry for verifying issued certifications by device, brand, or company — accessible to anyone without login, building public trust in the system.</p>
  </div>
</section>


<section>
  <div className="section-label">Design Decisions</div>
  <h2>The choices that shaped<br /><strong>both experiences</strong></h2>
  <div className="decisions">
    <div className="decision">
      <div className="decision-num">01</div>
      <div><h3>Strict role separation</h3><p>Customer and admin portals share a design language but have entirely separate navigation and task flows. This prevents cross-role confusion and allows each surface to be optimized for its actual users.</p></div>
    </div>
    <div className="decision">
      <div className="decision-num">02</div>
      <div><h3>Status badge taxonomy</h3><p>Designed a consistent status system (BATAL, SP2 KADALUARSA, DRAFT CUSTOMER, etc.) with distinct colors. Operators can process dozens of applications and immediately identify which need action — no reading required.</p></div>
    </div>
    <div className="decision">
      <div className="decision-num">03</div>
      <div><h3>Live queue visibility for customers</h3><p>Added a real-time "Informasi Antrian Masuk" widget on the customer home page. Previously, applicants had zero visibility into their queue position — this single addition significantly reduces unnecessary support inquiries.</p></div>
    </div>
    <div className="decision">
      <div className="decision-num">04</div>
      <div><h3>PNBP revenue dashboard for admins</h3><p>Introduced monthly and daily revenue chart views on the admin home. Government supervisors can now monitor operational performance directly in the system without requesting separate reports.</p></div>
    </div>
  </div>
</section>


<section>
  <div className="section-label">Results</div>
  <h2>What the redesign<br /><strong>delivered</strong></h2>
  <div className="results-grid">
    <div className="result-card"><div className="result-num">3</div><div className="result-label">Surfaces redesigned — public website, customer portal, admin dashboard</div></div>
    <div className="result-card"><div className="result-num">2×</div><div className="result-label">User roles served with tailored flows and navigation structures</div></div>
    <div className="result-card"><div className="result-num">19</div><div className="result-label">Screens delivered across all surfaces with dev-ready handoff specs</div></div>
  </div>
  <div className="quote-block">
    <p>"The redesign unified two very different user experiences — operators gained the visibility to manage high application volumes, while applicants finally had a clear window into their certification status."</p>
    <div className="quote-attr">— Project reflection, e-Sertifikat Next Gen · 2024</div>
  </div>
</section>


<section>
  <div className="section-label">Reflection</div>
  <h2>What this project<br /><strong>taught me</strong></h2>
  <div className="reflection-box">
    <p>This was the most complex project I've worked on in terms of scope — three surfaces, two user roles, and a large functional requirement set. The biggest challenge was maintaining design consistency while making each surface feel purpose-built for its user, not like a template applied to different data.</p>
    <p style={{ marginTop: "16px" }}>I learned a lot about designing data-heavy government interfaces where trust and clarity carry as much weight as aesthetics. When a user is processing an official certification with real legal and financial implications, every label, status badge, and action button matters.</p>
    <p style={{ marginTop: "16px" }}>If extended, I'd run usability testing with both corporate applicants and SDPPI operators to validate the flows with real users — particularly around the application submission journey and admin review pipeline where friction has the highest operational cost.</p>
  </div>
</section>

</div>


<div className="page">
  <div className="all-screens-section">
    <div className="section-label">All Screens</div>
    <h2>Complete design<br /><strong>across all surfaces</strong></h2>
    <p>All 19 screens delivered as part of this project — covering the full user journey from login through certificate issuance.</p>
    <div className="screens-grid">
      
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_9.png" alt="Login" loading="lazy" />
      <div className="grid-label">Login</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_10.png" alt="Beranda Customer" loading="lazy" />
      <div className="grid-label">Beranda Customer</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_11.png" alt="Beranda Admin" loading="lazy" />
      <div className="grid-label">Beranda Admin</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_12.png" alt="Aplikasi" loading="lazy" />
      <div className="grid-label">Aplikasi</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_13.png" alt="Detail Aplikasi" loading="lazy" />
      <div className="grid-label">Detail Aplikasi</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_14.png" alt="Detail Aplikasi Admin" loading="lazy" />
      <div className="grid-label">Detail Aplikasi Admin</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_15.png" alt="Sertifikat Terbit" loading="lazy" />
      <div className="grid-label">Sertifikat Terbit</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_16.png" alt="Data Checklist" loading="lazy" />
      <div className="grid-label">Data Checklist</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_17.png" alt="Daftar Acuan" loading="lazy" />
      <div className="grid-label">Daftar Acuan</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_18.png" alt="Daftar Balai Uji" loading="lazy" />
      <div className="grid-label">Daftar Balai Uji</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_19.png" alt="Informasi Pembayaran" loading="lazy" />
      <div className="grid-label">Informasi Pembayaran</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_20.png" alt="Kontak" loading="lazy" />
      <div className="grid-label">Kontak</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_21.png" alt="List Berita" loading="lazy" />
      <div className="grid-label">List Berita</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_22.png" alt="FAQ" loading="lazy" />
      <div className="grid-label">FAQ</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_23.png" alt="Tarif Sertifikat" loading="lazy" />
      <div className="grid-label">Tarif Sertifikat</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_24.png" alt="Template Dokumen" loading="lazy" />
      <div className="grid-label">Template Dokumen</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_25.png" alt="Prosedure Sertifikasi" loading="lazy" />
      <div className="grid-label">Prosedure Sertifikasi</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_26.png" alt="Prosedure Perubahan" loading="lazy" />
      <div className="grid-label">Prosedure Perubahan</div>
    </div>
    <div className="grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_27.png" alt="Redesign Website" loading="lazy" />
      <div className="grid-label">Redesign Website</div>
    </div>
    </div>
  </div>
</div>


<div className="footer">
  <div>
    <div className="footer-name">Arrozy Adi Falaqi</div>
    <div className="footer-role">UI/UX Designer · Bandung, Indonesia</div>
  </div>
  <div className="footer-links">
    <a className="footer-link" href="https://www.behance.net/arrozyadifalaqi">Behance</a>
    <a className="footer-link" href="https://portofolio-arrozy.vercel.app">Portfolio</a>
    <a className="footer-link" href="mailto:arrozyadifalaqioi@gmail.com">Email</a>
  </div>
</div>
    </div>
  );
}
