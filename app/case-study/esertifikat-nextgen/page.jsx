"use client";

import "../case-study.css";

import Link from "next/link";

export default function Page() {
  return (
    <div className="cs-case-study-wrapper" style={{ '--primary': '#6C3FE8', '--purple': '#6C3FE8', '--purple-dark': '#4A1FA8', '--blue': '#2563EB', '--teal': '#0EA5C8', '--purple-light': '#EEE8FF', '--dark': '#0D0D1A', '--dark2': '#13102B', '--mid': '#3D3860', '--muted': '#6B6890', '--border': '#E8E6F4', '--surface': '#F7F5FF', '--white': '#FFFFFF', '--grad': 'linear-gradient(135deg, #6C3FE8 0%, #2563EB 60%, #0EA5C8 100%)' }}>
      
      
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
      <h1>e-Sertifikat<br /><strong>Next Gen</strong></h1>
      <p className="cs-hero-sub">Kominfo · SDPPI · Certification Platform Redesign</p>
      <div className="cs-hero-tags">
        <span className="cs-tag">Figma</span>
        <span className="cs-tag">Web Platform</span>
        <span className="cs-tag">Admin Dashboard</span>
        <span className="cs-tag">Government</span>
        <span className="cs-tag">Multi-role System</span>
        <span className="cs-tag">UX Redesign</span>
      </div>
      <div className="cs-hero-meta">
        <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Client</div><div className="cs-hero-meta-val">Kominfo / SDPPI</div></div>
        <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Role</div><div className="cs-hero-meta-val">UI/UX Designer</div></div>
        <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Timeline</div><div className="cs-hero-meta-val">2024</div></div>
        <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Tools</div><div className="cs-hero-meta-val">Figma</div></div>
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
  <div className="cs-section-label">Overview</div>
  <h2>A national certification platform<br /><strong>for telecommunication devices</strong></h2>
  <p>e-Sertifikat Next Gen is an official platform under Direktorat Jenderal Sumber Daya dan Perangkat Pos dan Informatika (SDPPI), Kementerian Komunikasi dan Informatika (Kominfo). It manages the end-to-end certification process for telecommunication and electronic devices distributed across Indonesia.</p>
  <p>The redesign covered three distinct surfaces — a public-facing website, a customer portal for corporate applicants, and an admin dashboard for government operators — all unified under one cohesive design system.</p>
  <div className="cs-scope-pills">
    <div className="cs-scope-pill"><div className="cs-dot"></div>Public website</div>
    <div className="cs-scope-pill"><div className="cs-dot"></div>Customer portal</div>
    <div className="cs-scope-pill"><div className="cs-dot"></div>Admin dashboard</div>
    <div className="cs-scope-pill"><div className="cs-dot"></div>Certificate registry</div>
    <div className="cs-scope-pill"><div className="cs-dot"></div>Document management</div>
  </div>
</section>


<section>
  <div className="cs-section-label">The Problem</div>
  <h2>An outdated system struggling<br /><strong>with scale and complexity</strong></h2>
  <p>The existing platform was built over multiple iterations without a unified UX strategy. As application volumes grew, the system's shortcomings became increasingly costly for both operators and applicants.</p>
  <div className="cs-challenge-grid">
    <div className="cs-challenge-card">
      <div className="cs-icon">🏛️</div>
      <h3>No design system</h3>
      <p>Inconsistent components across pages — eroding trust in a government service context where credibility matters.</p>
    </div>
    <div className="cs-challenge-card">
      <div className="cs-icon">🔁</div>
      <h3>Confusing multi-role flows</h3>
      <p>Applicants and admins had overlapping interfaces not clearly differentiated — causing confusion and wrong actions.</p>
    </div>
    <div className="cs-challenge-card">
      <div className="cs-icon">📋</div>
      <h3>No status transparency</h3>
      <p>Users couldn't track application status through the multi-step review process — driving high support inquiry volume.</p>
    </div>
  </div>
</section>


<section>
  <div className="cs-section-label">Users</div>
  <h2>Two very different users,<br /><strong>one unified system</strong></h2>
  <p>A core design challenge was serving two groups with fundamentally different needs — corporate applicants who interact occasionally, and government operators who work in the system intensively every single day.</p>
  <div className="cs-user-grid">
    <div className="cs-user-card cs-admin">
      <div className="cs-user-badge">Admin — Operator SDPPI</div>
      <h3>Government admin operators</h3>
      <ul>
        <li>Review and process incoming applications daily</li>
        <li>Monitor queues and multi-stage approval pipeline</li>
        <li>Track PNBP revenue with live charts</li>
        <li>Issue, reject, or request document revisions</li>
        <li>Access full document checklist per application</li>
      </ul>
    </div>
    <div className="cs-user-card cs-customer">
      <div className="cs-user-badge">Customer — Corporate Applicant</div>
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
  <div className="cs-section-label">Process</div>
  <h2>From brief to<br /><strong>multi-surface design system</strong></h2>
  <div className="cs-process-steps">
    <div className="cs-process-step">
      <div className="cs-step-num">01</div>
      <div className="cs-step-content"><h3>Brief & scope mapping</h3><p>Mapped all functional requirements across two user roles and five surface areas from the client brief — defining clear boundaries before touching any design.</p></div>
    </div>
    <div className="cs-process-step">
      <div className="cs-step-num">02</div>
      <div className="cs-step-content"><h3>Role-based information architecture</h3><p>Defined separate navigation structures and task flows per role — ensuring neither user encounters cross-role elements that cause confusion.</p></div>
    </div>
    <div className="cs-process-step">
      <div className="cs-step-num">03</div>
      <div className="cs-step-content"><h3>Component & design system</h3><p>Built a shared component set — status badges, data tables, filterable forms, summary cards, and chart containers — reusable across all surfaces.</p></div>
    </div>
    <div className="cs-process-step">
      <div className="cs-step-num">04</div>
      <div className="cs-step-content"><h3>High-fidelity UI + handoff</h3><p>Delivered complete hi-fi for all three surfaces with Figma handoff specs and a component library for the development team.</p></div>
    </div>
  </div>
</section>


<section>
  <div className="cs-section-label">Key Screens</div>
  <h2>Highlighted screens from<br /><strong>each surface</strong></h2>

  <div className="cs-screen-block">
    <div className="cs-screen-label">Login</div>
    <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_2.png" alt="Login" />
    <p className="cs-screen-caption">Split-screen login with the e-Sertifikat Next Gen branding. The purple gradient creates a modern government identity while the right panel contextualizes the platform's purpose for new visitors.</p>
  </div>

  <div className="cs-screen-2col">
    <div>
      <div className="cs-screen-label">Customer — Beranda</div>
      <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_3.png" alt="Beranda Customer" />
      <p className="cs-screen-caption">Customer home surfaces account details and live queue info — giving applicants immediate visibility into their position without contacting support.</p>
    </div>
    <div>
      <div className="cs-screen-label">Admin — Beranda</div>
      <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_4.png" alt="Beranda Admin" />
      <p className="cs-screen-caption">Admin home shows pipeline status cards, daily achievement metrics, queue trend chart, and PNBP revenue tracker — everything an operator needs at a glance.</p>
    </div>
  </div>

  <div className="cs-screen-block">
    <div className="cs-screen-label">Aplikasi — Application list</div>
    <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_5.png" alt="Aplikasi" />
    <p className="cs-screen-caption">Structured application table with color-coded status badges (BATAL, SP2 KADALUARSA, DRAFT CUSTOMER), inline action menus, and pagination — designed for high-volume daily processing by admin operators.</p>
  </div>

  <div className="cs-screen-2col">
    <div>
      <div className="cs-screen-label">Detail Aplikasi — Customer view</div>
      <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_6.png" alt="Detail Customer" />
      <p className="cs-screen-caption">Two-column detail layout showing all application fields, device specs, and required document uploads in a clear, scannable structure.</p>
    </div>
    <div>
      <div className="cs-screen-label">Detail Aplikasi — Admin view</div>
      <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_7.png" alt="Detail Admin" />
      <p className="cs-screen-caption">Admin detail view adds review controls, disposition actions, and checklist tracking on top of the same application data — same layout, role-specific capabilities.</p>
    </div>
  </div>

  <div className="cs-screen-block">
    <div className="cs-screen-label">Sertifikat Terbit — Public registry</div>
    <img className="cs-screen-img" src="/images/case-study/esertifikat-nextgen/img_8.png" alt="Sertifikat Terbit" />
    <p className="cs-screen-caption">Public-facing certificate registry for verifying issued certifications by device, brand, or company — accessible to anyone without login, building public trust in the system.</p>
  </div>
</section>


<section>
  <div className="cs-section-label">Design Decisions</div>
  <h2>The choices that shaped<br /><strong>both experiences</strong></h2>
  <div className="cs-decisions">
    <div className="cs-decision">
      <div className="cs-decision-num">01</div>
      <div><h3>Strict role separation</h3><p>Customer and admin portals share a design language but have entirely separate navigation and task flows. This prevents cross-role confusion and allows each surface to be optimized for its actual users.</p></div>
    </div>
    <div className="cs-decision">
      <div className="cs-decision-num">02</div>
      <div><h3>Status badge taxonomy</h3><p>Designed a consistent status system (BATAL, SP2 KADALUARSA, DRAFT CUSTOMER, etc.) with distinct colors. Operators can process dozens of applications and immediately identify which need action — no reading required.</p></div>
    </div>
    <div className="cs-decision">
      <div className="cs-decision-num">03</div>
      <div><h3>Live queue visibility for customers</h3><p>Added a real-time "Informasi Antrian Masuk" widget on the customer home page. Previously, applicants had zero visibility into their queue position — this single addition significantly reduces unnecessary support inquiries.</p></div>
    </div>
    <div className="cs-decision">
      <div className="cs-decision-num">04</div>
      <div><h3>PNBP revenue dashboard for admins</h3><p>Introduced monthly and daily revenue chart views on the admin home. Government supervisors can now monitor operational performance directly in the system without requesting separate reports.</p></div>
    </div>
  </div>
</section>


<section>
  <div className="cs-section-label">Results</div>
  <h2>What the redesign<br /><strong>delivered</strong></h2>
  <div className="cs-results-grid">
    <div className="cs-result-card"><div className="cs-result-num">3</div><div className="cs-result-label">Surfaces redesigned — public website, customer portal, admin dashboard</div></div>
    <div className="cs-result-card"><div className="cs-result-num">2×</div><div className="cs-result-label">User roles served with tailored flows and navigation structures</div></div>
    <div className="cs-result-card"><div className="cs-result-num">19</div><div className="cs-result-label">Screens delivered across all surfaces with dev-ready handoff specs</div></div>
  </div>
  <div className="cs-quote-block">
    <p>"The redesign unified two very different user experiences — operators gained the visibility to manage high application volumes, while applicants finally had a clear window into their certification status."</p>
    <div className="cs-quote-attr">— Project reflection, e-Sertifikat Next Gen · 2024</div>
  </div>
</section>


<section>
  <div className="cs-section-label">Reflection</div>
  <h2>What this project<br /><strong>taught me</strong></h2>
  <div className="cs-reflection-box">
    <p>This was the most complex project I've worked on in terms of scope — three surfaces, two user roles, and a large functional requirement set. The biggest challenge was maintaining design consistency while making each surface feel purpose-built for its user, not like a template applied to different data.</p>
    <p style={{ marginTop: "16px" }}>I learned a lot about designing data-heavy government interfaces where trust and clarity carry as much weight as aesthetics. When a user is processing an official certification with real legal and financial implications, every label, status badge, and action button matters.</p>
    <p style={{ marginTop: "16px" }}>If extended, I'd run usability testing with both corporate applicants and SDPPI operators to validate the flows with real users — particularly around the application submission journey and admin review pipeline where friction has the highest operational cost.</p>
  </div>
</section>

</div>


<div className="cs-page">
  <div className="cs-all-screens-section">
    <div className="cs-section-label">All Screens</div>
    <h2>Complete design<br /><strong>across all surfaces</strong></h2>
    <p>All 19 screens delivered as part of this project — covering the full user journey from login through certificate issuance.</p>
    <div className="cs-screens-grid">
      
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_9.png" alt="Login" loading="lazy" />
      <div className="cs-grid-label">Login</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_10.png" alt="Beranda Customer" loading="lazy" />
      <div className="cs-grid-label">Beranda Customer</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_11.png" alt="Beranda Admin" loading="lazy" />
      <div className="cs-grid-label">Beranda Admin</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_12.png" alt="Aplikasi" loading="lazy" />
      <div className="cs-grid-label">Aplikasi</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_13.png" alt="Detail Aplikasi" loading="lazy" />
      <div className="cs-grid-label">Detail Aplikasi</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_14.png" alt="Detail Aplikasi Admin" loading="lazy" />
      <div className="cs-grid-label">Detail Aplikasi Admin</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_15.png" alt="Sertifikat Terbit" loading="lazy" />
      <div className="cs-grid-label">Sertifikat Terbit</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_16.png" alt="Data Checklist" loading="lazy" />
      <div className="cs-grid-label">Data Checklist</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_17.png" alt="Daftar Acuan" loading="lazy" />
      <div className="cs-grid-label">Daftar Acuan</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_18.png" alt="Daftar Balai Uji" loading="lazy" />
      <div className="cs-grid-label">Daftar Balai Uji</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_19.png" alt="Informasi Pembayaran" loading="lazy" />
      <div className="cs-grid-label">Informasi Pembayaran</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_20.png" alt="Kontak" loading="lazy" />
      <div className="cs-grid-label">Kontak</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_21.png" alt="List Berita" loading="lazy" />
      <div className="cs-grid-label">List Berita</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_22.png" alt="FAQ" loading="lazy" />
      <div className="cs-grid-label">FAQ</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_23.png" alt="Tarif Sertifikat" loading="lazy" />
      <div className="cs-grid-label">Tarif Sertifikat</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_24.png" alt="Template Dokumen" loading="lazy" />
      <div className="cs-grid-label">Template Dokumen</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_25.png" alt="Prosedure Sertifikasi" loading="lazy" />
      <div className="cs-grid-label">Prosedure Sertifikasi</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_26.png" alt="Prosedure Perubahan" loading="lazy" />
      <div className="cs-grid-label">Prosedure Perubahan</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/esertifikat-nextgen/img_27.png" alt="Redesign Website" loading="lazy" />
      <div className="cs-grid-label">Redesign Website</div>
    </div>
    </div>
  </div>
</div>


<div className="cs-footer">
  <div>
    <div className="cs-footer-name">Arrozy Adi Falaqi</div>
    <div className="cs-footer-role">UI/UX Designer · Bandung, Indonesia</div>
  </div>
  <div className="cs-footer-links">
    <a className="cs-footer-link" href="https://www.behance.net/arrozyadifalaqi">Behance</a>
    <a className="cs-footer-link" href="https://portofolio-arrozy.vercel.app">Portfolio</a>
    <a className="cs-footer-link" href="mailto:arrozyadifalaqioi@gmail.com">Email</a>
  </div>
</div>
    </div>
  );
}
