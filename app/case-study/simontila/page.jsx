"use client";

import "../case-study.css";

import Link from "next/link";

export default function Page() {
  return (
    <div className="cs-case-study-wrapper" style={{ '--primary': '#1A6BFF', '--blue': '#1A6BFF', '--blue-dark': '#0D3FA8', '--teal': '#00C2B2', '--blue-light': '#EBF1FF', '--dark': '#0D1117', '--dark2': '#0F1624', '--mid': '#2D3A52', '--muted': '#5C6E8A', '--border': '#E4E9F2', '--surface': '#F4F7FC', '--white': '#FFFFFF', '--grad': 'linear-gradient(135deg, #1A6BFF 0%, #00C2B2 100%)' }}>
      
      
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
      <h1>Admin<br /><strong>SIMONTILA</strong></h1>
      <p className="cs-hero-sub">Kemendikbud · Sistem Monitoring Tindak Lanjut Hasil Pemeriksaan</p>
      <div className="cs-hero-tags">
        <span className="cs-tag">Figma</span>
        <span className="cs-tag">Dashboard Redesign</span>
        <span className="cs-tag">Admin UI</span>
        <span className="cs-tag">Government</span>
        <span className="cs-tag">Information Architecture</span>
        <span className="cs-tag">Data Management</span>
      </div>
      <div className="cs-hero-meta">
        <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Client</div><div className="cs-hero-meta-val">Kemendikbud</div></div>
        <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Role</div><div className="cs-hero-meta-val">Sole UI/UX Designer</div></div>
        <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Timeline</div><div className="cs-hero-meta-val">2024</div></div>
        <div className="cs-hero-meta-item"><div className="cs-hero-meta-label">Tools</div><div className="cs-hero-meta-val">Figma</div></div>
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
  <div className="cs-section-label">Overview</div>
  <h2>A government audit monitoring system<br /><strong>built for daily admin work</strong></h2>
  <p>SIMONTILA — Sistem Monitoring Tindak Lanjut Hasil Pemeriksaan — is an internal web platform used by administrators at Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbud) to manage, track, and report on official audit findings across educational institutions nationwide.</p>
  <p>Admins rely on it daily to input records, filter inspection data, monitor follow-up statuses, and generate reports — making usability and clarity not a nice-to-have, but operationally critical.</p>
</section>


<section>
  <div className="cs-section-label">Before & After</div>
  <h2>From legacy interface<br /><strong>to modern dashboard</strong></h2>
  <p>The original SIMONTILA ran on a dated UI with a dense top navigation, no visual hierarchy, and no clear information architecture. The redesign introduced a structured sidebar layout, a consistent design system, and purpose-built data views for each core workflow.</p>
  <div className="cs-ba-grid">
    <div className="cs-ba-card cs-before">
      <div className="cs-ba-badge">⚠ Before</div>
      <img src="/images/case-study/simontila/img_2.png" alt="Before redesign" />
    </div>
    <div className="cs-ba-card cs-after">
      <div className="cs-ba-badge">✓ After</div>
      <img src="/images/case-study/simontila/img_3.png" alt="After redesign" />
    </div>
  </div>
</section>


<section>
  <div className="cs-section-label">The Problem</div>
  <h2>Three compounding issues<br /><strong>slowing every task</strong></h2>
  <p>The original dashboard had accumulated years of additions with no unified design system. Admins who used it daily faced consistent friction points that compounded into real productivity loss.</p>
  <div className="cs-problem-grid">
    <div className="cs-problem-card">
      <div className="cs-icon">🗺️</div>
      <h3>Scattered navigation</h3>
      <p>Related menus grouped inconsistently — users had to memorize locations rather than discover them logically.</p>
    </div>
    <div className="cs-problem-card">
      <div className="cs-icon">📊</div>
      <h3>No visual hierarchy</h3>
      <p>Tables and records displayed without priority or structure — hard to identify which items needed immediate action.</p>
    </div>
    <div className="cs-problem-card">
      <div className="cs-icon">🔀</div>
      <h3>Too many page switches</h3>
      <p>Completing one task required 4–5 navigational steps across multiple sub-pages — increasing time and error rate.</p>
    </div>
  </div>
</section>


<section>
  <div className="cs-section-label">Process</div>
  <h2>From brief to<br /><strong>high-fidelity handoff</strong></h2>
  <div className="cs-process-steps">
    <div className="cs-process-step">
      <div className="cs-step-num">01</div>
      <div className="cs-step-content"><h3>Brief analysis</h3><p>Mapped all pain points from the client brief to specific UI/UX failure patterns — poor IA, no visual hierarchy, and redundant task flows — before touching any design.</p></div>
    </div>
    <div className="cs-process-step">
      <div className="cs-step-num">02</div>
      <div className="cs-step-content"><h3>Information architecture restructuring</h3><p>Reorganized the navigation taxonomy so items group by user intent — Dashboard, Tindak Lanjut, Manajemen LHP, Pelaporan, Pengaturan — rather than internal system logic.</p></div>
    </div>
    <div className="cs-process-step">
      <div className="cs-step-num">03</div>
      <div className="cs-step-content"><h3>Component design in Figma</h3><p>Built a consistent component set: filterable data tables, color-coded status badges (S, BTL, P, BS), action toolbars, summary cards, and filter forms — all reusable across every section.</p></div>
    </div>
    <div className="cs-process-step">
      <div className="cs-step-num">04</div>
      <div className="cs-step-content"><h3>High-fidelity UI + dev handoff</h3><p>Delivered complete redesign with handoff-ready specs and a component library for the development team to reference during implementation.</p></div>
    </div>
  </div>
</section>


<section>
  <div className="cs-section-label">Key Screens</div>
  <h2>The redesigned system<br /><strong>screen by screen</strong></h2>

  <div className="cs-screen-block">
    <div className="cs-screen-label">Login</div>
    <img className="cs-screen-img" src="/images/case-study/simontila/img_4.png" alt="Login" />
    <p className="cs-screen-caption">Clean split-screen login with the Simontila brand. Blue gradient left panel creates authority and trust, white right panel keeps the form focused and distraction-free.</p>
  </div>

  <div className="cs-screen-2col">
    <div>
      <div className="cs-screen-label">Manajemen LHP</div>
      <img className="cs-screen-img" src="/images/case-study/simontila/img_5.png" alt="Manajemen LHP" />
      <p className="cs-screen-caption">Inspection management with a structured filter form above a data table — admins can filter by institution, period, and inspector, then act on results in one view.</p>
    </div>
    <div>
      <div className="cs-screen-label">Pelaporan — Rekap per Provinsi</div>
      <img className="cs-screen-img" src="/images/case-study/simontila/img_6.png" alt="Pelaporan" />
      <p className="cs-screen-caption">Reporting module with multi-parameter filtering. Consistent layout across all data views reduces cognitive load for admins who switch between sections frequently.</p>
    </div>
  </div>

  <div className="cs-screen-block">
    <div className="cs-screen-label">Tindak Lanjut — Follow-up tracking</div>
    <img className="cs-screen-img" src="/images/case-study/simontila/img_7.png" alt="Tindak Lanjut" />
    <p className="cs-screen-caption">Follow-up tracking page with a summary header showing totals by status (S, BTL, P, BS) and value — giving admins an instant overview before working through individual records below.</p>
  </div>

  <div className="cs-screen-2col">
    <div>
      <div className="cs-screen-label">Data Temuan — Full table view</div>
      <img className="cs-screen-img" src="/images/case-study/simontila/img_8.png" alt="Data Temuan" />
      <p className="cs-screen-caption">Dense audit finding data made scannable with structured rows, color-coded status badges, and inline "Tindak Lanjut" action buttons — eliminating separate detail page navigation for routine tasks.</p>
    </div>
    <div>
      <div className="cs-screen-label">Transaction table</div>
      <img className="cs-screen-img" src="/images/case-study/simontila/img_9.png" alt="Container" />
      <p className="cs-screen-caption">Latest transaction component with clear columns, status badges (Confirm, Pending, Cancel), and row-level icon actions for view, edit, and delete — all in one scannable view.</p>
    </div>
  </div>
</section>


<section>
  <div className="cs-section-label">Design Decisions</div>
  <h2>The choices that made<br /><strong>the biggest difference</strong></h2>
  <div className="cs-decisions">
    <div className="cs-decision">
      <div className="cs-decision-num">01</div>
      <div><h3>Sidebar navigation over top nav</h3><p>Replaced the dense horizontal top navigation with a structured left sidebar. Sidebar navigation scales better with complex systems, allows for collapsible sub-menus, and keeps the main content area clear at all times.</p></div>
    </div>
    <div className="cs-decision">
      <div className="cs-decision-num">02</div>
      <div><h3>Summary header per section</h3><p>Added a status summary bar at the top of key sections (Tindak Lanjut, etc.) showing counts and values by status before the data table. Admins get an instant overview without scrolling through every record first.</p></div>
    </div>
    <div className="cs-decision">
      <div className="cs-decision-num">03</div>
      <div><h3>Color-coded status badge system</h3><p>Designed a consistent 4-status system (S = green, BTL = red, P = yellow, BS = teal) applied uniformly across every table and summary card. Status is now scannable in under a second — no reading required.</p></div>
    </div>
    <div className="cs-decision">
      <div className="cs-decision-num">04</div>
      <div><h3>Filter form + data table in one view</h3><p>Placed filter forms directly above result tables instead of on separate pages. This alone reduced the core task flow from 4–5 steps to 2 clicks for the most frequent admin actions.</p></div>
    </div>
  </div>
</section>


<section>
  <div className="cs-section-label">Results</div>
  <h2>What changed after<br /><strong>the redesign shipped</strong></h2>
  <div className="cs-results-grid">
    <div className="cs-result-card"><div className="cs-result-num">30%</div><div className="cs-result-label">Improvement in data management clarity — stakeholder evaluation post-delivery</div></div>
    <div className="cs-result-card"><div className="cs-result-num">2 clicks</div><div className="cs-result-label">To complete core admin tasks — down from 4–5 navigational steps</div></div>
    <div className="cs-result-card"><div className="cs-result-num">1×</div><div className="cs-result-label">Component library delivered for faster, consistent developer handoff</div></div>
  </div>
  <div className="cs-quote-block">
    <p>"Admins can now find and manage records without switching between multiple pages — the restructured navigation and inline actions made the biggest impact on daily workflow."</p>
    <div className="cs-quote-attr">— Stakeholder feedback post-delivery, SIMONTILA · 2024</div>
  </div>
</section>


<section>
  <div className="cs-section-label">Reflection</div>
  <h2>What I learned<br /><strong>from this project</strong></h2>
  <div className="cs-reflection-box">
    <p>Working on a government audit system taught me that usability and institutional trust go hand in hand. When admins trust the interface — when it's predictable, consistent, and clear — they make fewer mistakes and work faster.</p>
    <p style={{ marginTop: "16px" }}>The biggest challenge was restructuring the information architecture without disrupting existing mental models too aggressively. I had to balance meaningful improvement with familiarity — which pushed me to be intentional about which patterns to keep and which to completely rethink.</p>
    <p style={{ marginTop: "16px" }}>If I were to extend this project, I'd advocate for usability testing sessions with actual admins before and after the redesign. That would produce stronger, measurable data to validate the decisions made — and build a better evidence base for future iterations.</p>
  </div>
</section>

</div>


<div className="cs-all-screens-wrap">
  <div className="cs-page">
    <div className="cs-section-label">All Screens</div>
    <h2>Complete design<br /><strong>across all views</strong></h2>
    <p>All screens delivered as part of this redesign — covering the full admin workflow from login through data entry, filtering, follow-up tracking, and reporting.</p>
    <div className="cs-screens-grid">
      
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_10.png" alt="Login" loading="lazy" />
      <div className="cs-grid-label">Login</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_11.png" alt="Manajemen LHP" loading="lazy" />
      <div className="cs-grid-label">Manajemen LHP</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_12.png" alt="Pelaporan" loading="lazy" />
      <div className="cs-grid-label">Pelaporan</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_13.png" alt="Tindak Lanjut" loading="lazy" />
      <div className="cs-grid-label">Tindak Lanjut</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_14.png" alt="Data Temuan" loading="lazy" />
      <div className="cs-grid-label">Data Temuan</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_15.png" alt="Data Table" loading="lazy" />
      <div className="cs-grid-label">Data Table</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_16.png" alt="Container 2" loading="lazy" />
      <div className="cs-grid-label">Container 2</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_17.png" alt="Data View 1" loading="lazy" />
      <div className="cs-grid-label">Data View 1</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_18.png" alt="Data View 2" loading="lazy" />
      <div className="cs-grid-label">Data View 2</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_19.png" alt="Data View 3" loading="lazy" />
      <div className="cs-grid-label">Data View 3</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_20.png" alt="Data View 4" loading="lazy" />
      <div className="cs-grid-label">Data View 4</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_21.png" alt="List View" loading="lazy" />
      <div className="cs-grid-label">List View</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_22.png" alt="Satker" loading="lazy" />
      <div className="cs-grid-label">Satker</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_23.png" alt="Year Filter 2020" loading="lazy" />
      <div className="cs-grid-label">Year Filter 2020</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_24.png" alt="Year Filter 2021" loading="lazy" />
      <div className="cs-grid-label">Year Filter 2021</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_25.png" alt="Year Filter 2022" loading="lazy" />
      <div className="cs-grid-label">Year Filter 2022</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_26.png" alt="Year Filter 2023" loading="lazy" />
      <div className="cs-grid-label">Year Filter 2023</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_27.png" alt="Year Filter 2024" loading="lazy" />
      <div className="cs-grid-label">Year Filter 2024</div>
    </div>
    <div className="cs-grid-item">
      <img src="/images/case-study/simontila/img_28.png" alt="Before Redesign" loading="lazy" />
      <div className="cs-grid-label">Before Redesign</div>
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
