export const caseStudiesEn = {
  simontila: {
    hero: {
      label: "Case Study",
      title: "Admin",
      titleBold: "SIMONTILA",
      sub: "Kemendikbud · Sistem Monitoring Tindak Lanjut Hasil Pemeriksaan",
      tags: ["Figma", "Dashboard Redesign", "Admin UI", "Government", "Information Architecture", "Data Management"],
      meta: {
        client: "Kemendikbud", role: "Sole UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    overview: {
      label: "Overview",
      title: "A government audit monitoring system",
      titleBold: "built for daily admin work",
      p1: "SIMONTILA — Sistem Monitoring Tindak Lanjut Hasil Pemeriksaan — is an internal web platform used by administrators at Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbud) to manage, track, and report on official audit findings across educational institutions nationwide.",
      p2: "Admins rely on it daily to input records, filter inspection data, monitor follow-up statuses, and generate reports — making usability and clarity not a nice-to-have, but operationally critical."
    },
    beforeAfter: {
      label: "Before & After",
      title: "From legacy interface",
      titleBold: "to modern dashboard",
      p: "The original SIMONTILA ran on a dated UI with a dense top navigation, no visual hierarchy, and no clear information architecture. The redesign introduced a structured sidebar layout, a consistent design system, and purpose-built data views for each core workflow.",
      badgeBefore: "⚠ Before", badgeAfter: "✓ After"
    },
    problem: {
      label: "The Problem", title: "Three compounding issues", titleBold: "slowing every task",
      p: "The original dashboard had accumulated years of additions with no unified design system. Admins who used it daily faced consistent friction points that compounded into real productivity loss.",
      cards: [
        { icon: "🗺️", title: "Scattered navigation", p: "Related menus grouped inconsistently — users had to memorize locations rather than discover them logically." },
        { icon: "📊", title: "No visual hierarchy", p: "Tables and records displayed without priority or structure — hard to identify which items needed immediate action." },
        { icon: "🔀", title: "Too many page switches", p: "Completing one task required 4–5 navigational steps across multiple sub-pages — increasing time and error rate." }
      ]
    },
    process: {
      label: "Process", title: "From brief to", titleBold: "high-fidelity handoff",
      steps: [
        { num: "01", title: "Brief analysis", p: "Mapped all pain points from the client brief to specific UI/UX failure patterns — poor IA, no visual hierarchy, and redundant task flows — before touching any design." },
        { num: "02", title: "Information architecture restructuring", p: "Reorganized the navigation taxonomy so items group by user intent — Dashboard, Tindak Lanjut, Manajemen LHP, Pelaporan, Pengaturan — rather than internal system logic." },
        { num: "03", title: "Component design in Figma", p: "Built a consistent component set: filterable data tables, color-coded status badges (S, BTL, P, BS), action toolbars, summary cards, and filter forms — all reusable across every section." },
        { num: "04", title: "High-fidelity UI + dev handoff", p: "Delivered complete redesign with handoff-ready specs and a component library for the development team to reference during implementation." }
      ]
    },
    screens: {
      label: "Key Screens", title: "The redesigned system", titleBold: "screen by screen",
      s1: { label: "Login", caption: "Clean split-screen login with the Simontila brand. Blue gradient left panel creates authority and trust, white right panel keeps the form focused and distraction-free." },
      s2: { label: "Manajemen LHP", caption: "Inspection management with a structured filter form above a data table — admins can filter by institution, period, and inspector, then act on results in one view." },
      s3: { label: "Pelaporan — Rekap per Provinsi", caption: "Reporting module with multi-parameter filtering. Consistent layout across all data views reduces cognitive load for admins who switch between sections frequently." },
      s4: { label: "Tindak Lanjut — Follow-up tracking", caption: "Follow-up tracking page with a summary header showing totals by status (S, BTL, P, BS) and value — giving admins an instant overview before working through individual records below." },
      s5: { label: "Data Temuan — Full table view", caption: "Dense audit finding data made scannable with structured rows, color-coded status badges, and inline \"Tindak Lanjut\" action buttons — eliminating separate detail page navigation for routine tasks." },
      s6: { label: "Transaction table", caption: "Latest transaction component with clear columns, status badges (Confirm, Pending, Cancel), and row-level icon actions for view, edit, and delete — all in one scannable view." }
    },
    decisions: {
      label: "Design Decisions", title: "The choices that made", titleBold: "the biggest difference",
      d1: { title: "Sidebar navigation over top nav", p: "Replaced the dense horizontal top navigation with a structured left sidebar. Sidebar navigation scales better with complex systems, allows for collapsible sub-menus, and keeps the main content area clear at all times." },
      d2: { title: "Summary header per section", p: "Added a status summary bar at the top of key sections (Tindak Lanjut, etc.) showing counts and values by status before the data table. Admins get an instant overview without scrolling through every record first." },
      d3: { title: "Color-coded status badge system", p: "Designed a consistent 4-status system (S = green, BTL = red, P = yellow, BS = teal) applied uniformly across every table and summary card. Status is now scannable in under a second — no reading required." },
      d4: { title: "Filter form + data table in one view", p: "Placed filter forms directly above result tables instead of on separate pages. This alone reduced the core task flow from 4–5 steps to 2 clicks for the most frequent admin actions." }
    },
    results: {
      label: "Results", title: "What changed after", titleBold: "the redesign shipped",
      r1: { num: "✓", label: "Structured sidebar navigation replaced a cluttered top menu — reducing context switches" },
      r2: { num: "✓", label: "Inline filter + table layout collapsed multi-step tasks into a single screen view" },
      r3: { num: "1×", label: "Complete Figma component library delivered for consistent developer handoff" },
      quote: "\"Admins can now find and manage records without switching between multiple pages — the restructured navigation and inline actions made the biggest impact on daily workflow.\"",
      attr: "— Stakeholder feedback post-delivery, SIMONTILA · 2024"
    },
    reflection: {
      label: "Reflection", title: "What I learned", titleBold: "from this project",
      p1: "Working on a government audit system taught me that usability and institutional trust go hand in hand. When admins trust the interface — when it's predictable, consistent, and clear — they make fewer mistakes and work faster.",
      p2: "The biggest challenge was restructuring the information architecture without disrupting existing mental models too aggressively. I had to balance meaningful improvement with familiarity — which pushed me to be intentional about which patterns to keep and which to completely rethink.",
      p3: "If I were to extend this project, I'd advocate for usability testing sessions with actual admins before and after the redesign. That would produce stronger, measurable data to validate the decisions made — and build a better evidence base for future iterations."
    },
    allScreens: {
      label: "All Screens", title: "Complete design", titleBold: "across all views",
      p: "All screens delivered as part of this redesign — covering the full admin workflow from login through data entry, filtering, follow-up tracking, and reporting.",
      items: [
        "Login", "Manajemen LHP", "Pelaporan", "Tindak Lanjut", "Data Temuan", "Data Table", "Container 2",
        "Data View 1", "Data View 2", "Data View 3", "Data View 4", "List View", "Satker",
        "Year Filter 2020", "Year Filter 2021", "Year Filter 2022", "Year Filter 2023", "Year Filter 2024", "Before Redesign"
      ]
    }
  },
  esertifikat: {
    hero: {
      label: "Case Study",
      title: "e-Sertifikat",
      titleBold: "Next Gen",
      sub: "Kominfo · SDPPI · Certification Platform Redesign",
      tags: ["Figma", "Web Platform", "Admin Dashboard", "Government", "Multi-role System", "UX Redesign"],
      meta: {
        client: "Kominfo / SDPPI", role: "UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    overview: {
      label: "Overview",
      title: "A national certification platform",
      titleBold: "for telecommunication devices",
      p1: "e-Sertifikat Next Gen is an official platform under Direktorat Jenderal Sumber Daya dan Perangkat Pos dan Informatika (SDPPI), Kementerian Komunikasi dan Informatika (Kominfo). It manages the end-to-end certification process for telecommunication and electronic devices distributed across Indonesia.",
      p2: "The redesign covered three distinct surfaces — a public-facing website, a customer portal for corporate applicants, and an admin dashboard for government operators — all unified under one cohesive design system.",
      pills: ["Public website", "Customer portal", "Admin dashboard", "Certificate registry", "Document management"]
    },
    problem: {
      label: "The Problem", title: "An outdated system struggling", titleBold: "with scale and complexity",
      p: "The existing platform was built over multiple iterations without a unified UX strategy. As application volumes grew, the system's shortcomings became increasingly costly for both operators and applicants.",
      cards: [
        { icon: "🏛️", title: "No design system", p: "Inconsistent components across pages — eroding trust in a government service context where credibility matters." },
        { icon: "🔁", title: "Confusing multi-role flows", p: "Applicants and admins had overlapping interfaces not clearly differentiated — causing confusion and wrong actions." },
        { icon: "📋", title: "No status transparency", p: "Users couldn't track application status through the multi-step review process — driving high support inquiry volume." }
      ]
    },
    users: {
      label: "Users", title: "Two very different users,", titleBold: "one unified system",
      p: "A core design challenge was serving two groups with fundamentally different needs — corporate applicants who interact occasionally, and government operators who work in the system intensively every single day.",
      adminBadge: "Admin — Operator SDPPI",
      adminTitle: "Government admin operators",
      adminItems: [
        "Review and process incoming applications daily",
        "Monitor queues and multi-stage approval pipeline",
        "Track PNBP revenue with live charts",
        "Issue, reject, or request document revisions",
        "Access full document checklist per application"
      ],
      customerBadge: "Customer — Corporate Applicant",
      customerTitle: "Companies applying for certification",
      customerItems: [
        "Submit new certification applications",
        "Track application status in real-time",
        "Upload and manage technical documents",
        "View and download issued certificates",
        "Monitor queue position and estimated timelines"
      ]
    },
    process: {
      label: "Process", title: "From brief to", titleBold: "multi-surface design system",
      steps: [
        { num: "01", title: "Brief & scope mapping", p: "Mapped all functional requirements across two user roles and five surface areas from the client brief — defining clear boundaries before touching any design." },
        { num: "02", title: "Role-based information architecture", p: "Defined separate navigation structures and task flows per role — ensuring neither user encounters cross-role elements that cause confusion." },
        { num: "03", title: "Component & design system", p: "Built a shared component set — status badges, data tables, filterable forms, summary cards, and chart containers — reusable across all surfaces." },
        { num: "04", title: "High-fidelity UI + handoff", p: "Delivered complete hi-fi for all three surfaces with Figma handoff specs and a component library for the development team." }
      ]
    },
    screens: {
      label: "Key Screens", title: "Highlighted screens from", titleBold: "each surface",
      s1: { label: "Login", caption: "Split-screen login with the e-Sertifikat Next Gen branding. The purple gradient creates a modern government identity while the right panel contextualizes the platform's purpose for new visitors." },
      s2: { label: "Customer — Beranda", caption: "Customer home surfaces account details and live queue info — giving applicants immediate visibility into their position without contacting support." },
      s3: { label: "Admin — Beranda", caption: "Admin home shows pipeline status cards, daily achievement metrics, queue trend chart, and PNBP revenue tracker — everything an operator needs at a glance." },
      s4: { label: "Aplikasi — Application list", caption: "Structured application table with color-coded status badges (BATAL, SP2 KADALUARSA, DRAFT CUSTOMER), inline action menus, and pagination — designed for high-volume daily processing by admin operators." },
      s5: { label: "Detail Aplikasi — Customer view", caption: "Two-column detail layout showing all application fields, device specs, and required document uploads in a clear, scannable structure." },
      s6: { label: "Detail Aplikasi — Admin view", caption: "Admin detail view adds review controls, disposition actions, and checklist tracking on top of the same application data — same layout, role-specific capabilities." },
      s7: { label: "Sertifikat Terbit — Public registry", caption: "Public-facing certificate registry for verifying issued certifications by device, brand, or company — accessible to anyone without login, building public trust in the system." }
    },
    decisions: {
      label: "Design Decisions", title: "The choices that shaped", titleBold: "both experiences",
      d1: { title: "Strict role separation", p: "Customer and admin portals share a design language but have entirely separate navigation and task flows. This prevents cross-role confusion and allows each surface to be optimized for its actual users." },
      d2: { title: "Status badge taxonomy", p: "Designed a consistent status system (BATAL, SP2 KADALUARSA, DRAFT CUSTOMER, etc.) with distinct colors. Operators can process dozens of applications and immediately identify which need action — no reading required." },
      d3: { title: "Live queue visibility for customers", p: "Added a real-time \"Informasi Antrian Masuk\" widget on the customer home page. Previously, applicants had zero visibility into their queue position — this single addition significantly reduces unnecessary support inquiries." },
      d4: { title: "PNBP revenue dashboard for admins", p: "Introduced monthly and daily revenue chart views on the admin home. Government supervisors can now monitor operational performance directly in the system without requesting separate reports." }
    },
    results: {
      label: "Results", title: "What the redesign", titleBold: "delivered",
      r1: { num: "3", label: "Surfaces redesigned — public website, customer portal, admin dashboard" },
      r2: { num: "2×", label: "User roles served with tailored flows and navigation structures" },
      r3: { num: "19", label: "Screens delivered across all surfaces with dev-ready handoff specs" },
      quote: "\"The redesign unified two very different user experiences — operators gained the visibility to manage high application volumes, while applicants finally had a clear window into their certification status.\"",
      attr: "— Project reflection, e-Sertifikat Next Gen · 2024"
    },
    reflection: {
      label: "Reflection", title: "What this project", titleBold: "taught me",
      p1: "This was the most complex project I've worked on in terms of scope — three surfaces, two user roles, and a large functional requirement set. The biggest challenge was maintaining design consistency while making each surface feel purpose-built for its user, not like a template applied to different data.",
      p2: "I learned a lot about designing data-heavy government interfaces where trust and clarity carry as much weight as aesthetics. When a user is processing an official certification with real legal and financial implications, every label, status badge, and action button matters.",
      p3: "If extended, I'd run usability testing with both corporate applicants and SDPPI operators to validate the flows with real users — particularly around the application submission journey and admin review pipeline where friction has the highest operational cost."
    },
    allScreens: {
      label: "All Screens", title: "Complete design", titleBold: "across all surfaces",
      p: "All 19 screens delivered as part of this project — covering the full user journey from login through certificate issuance.",
      items: [
        "Login", "Beranda Customer", "Beranda Admin", "Aplikasi", "Detail Aplikasi", "Detail Aplikasi Admin", "Sertifikat Terbit",
        "Data Checklist", "Daftar Acuan", "Daftar Balai Uji", "Informasi Pembayaran", "Kontak", "List Berita", "FAQ",
        "Tarif Sertifikat", "Template Dokumen", "Prosedure Sertifikasi", "Prosedure Perubahan", "Redesign Website"
      ]
    }
  },
  mbkm: {
    hero: {
      label: "Case Study",
      title: "MBKM UT",
      titleBold: "Platform",
      sub: "Universitas Terbuka · Unified Student Registration Experience",
      tags: ["Figma", "Web Design", "Education", "Platform System", "UX Optimization"],
      meta: {
        client: "Universitas Terbuka", role: "Sole UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    context: {
      label: "Context & Challenge", title: "Bridging the Gap:", titleBold: "Disconnected Flows",
      p1: "Universitas Terbuka (UT) students participating in the Merdeka Belajar Kampus Merdeka (MBKM) program faced a high friction operational environment. Students had to register for programs on scattered portals and submit dossiers manually.",
      p2: "The goal of this project was to unify the entire student lifecycle—from initial discovery and registration to dossier submission—into a seamless web experience.",
      cards: [
        { icon: "🔄", title: "Disconnected Systems", p: "Students spent unnecessary time switching between portals to register and submit documents." },
        { icon: "🚨", title: "Dossier Bottlenecks", p: "Program Chairs (Kaprodi) spent days manually validating physical spreadsheets and uploaded PDFs." },
        { icon: "📉", title: "Information Clutter", p: "Students had trouble finding what programs they were eligible for due to scattered information." }
      ]
    },
    users: {
      label: "User Demographics", title: "Addressing", titleBold: "Diverse Stakeholders",
      p: "The platform serves two primary groups with vastly different technical fluencies and goals:",
      studentBadge: "Students",
      studentTitle: "Goals & Needs",
      studentItems: [
        "Quickly discover available MBKM programs (internships, student exchanges, summer courses).",
        "Friction-free dossier submission with clear status indicators.",
        "Track registration progress in a unified dashboard."
      ],
      adminBadge: "Program Chairs (Kaprodi)",
      adminTitle: "Goals & Needs",
      adminItems: [
        "High-density information dashboards to scan and approve student registrations.",
        "Filterable data lists to sort dossiers by student status, grade, or course.",
        "Batch actions to approve multiple requests simultaneously."
      ]
    },
    process: {
      label: "Design Process", title: "From", titleBold: "Insights to Prototypes",
      steps: [
        { num: "01", title: "Discover & Audit", p: "Mapped student journeys and legacy registration steps. Identified navigation bottlenecks." },
        { num: "02", title: "Information Architecture", p: "Consolidated the portals into a single shared structure. Defined a step-by-step wizard for dossier submission." },
        { num: "03", title: "Responsive Design System", p: "Created a shared Figma component library centered around UT's corporate identity." },
        { num: "04", title: "Validation & Handoff", p: "Tested high-fidelity interactive prototypes with a demographic sample of students and administrators." }
      ]
    },
    screens: {
      label: "Visual Design & UX Highlights", title: "Focusing on", titleBold: "Efficiency and Clarity",
      s1: { label: "Student Portal: Single Dashboard Flow", caption: "The redesigned dashboard offers students a single point of entry to discover programs, track registration steps, and view logbooks." },
      s2: { label: "Frictionless Authentication", caption: "A clean, high-contrast login screen tailored for quick identification and responsive mobile rendering." },
      s3: { label: "Inbound Program Registration", caption: "The multi-step inbound program registration provides clear indicators showing which documents are complete." },
      s4: { label: "Program Chairs: Batch Verification", caption: "An optimized dashboard layout for Program Chairs (Kaprodi) featuring dense, filterable tables to handle student validations quickly." },
      s5: { label: "Student Exchange Portal", caption: "Step-by-step validation guide explaining courses, credits, and requirements for student exchanges." },
      s6: { label: "Summer Course Selection", caption: "A cards-based visual directory enabling students to scan and select available summer courses." }
    },
    decisions: {
      label: "Key Design Decisions", title: "Decisions that", titleBold: "Shaped the Experience",
      d1: { title: "Unified Platform Architecture", p: "By bringing registration and dossier management into one shared system, we eliminated the need for students to switch tools." },
      d2: { title: "Status Tagging over Dense Spreadsheets", p: "Replaced plain, nested table views in the Kaprodi panel with color-coded status pills (e.g., \"Pending Validation,\" \"Approved,\" \"Resubmission Required\") to guide user attention to urgent items." },
      d3: { title: "Progress Trackers for Forms", p: "Divided long application processes into clear, linear multi-step wizards. Storing draft submissions locally prevented data loss if connection drops occur." },
      d4: { title: "Accessibility Optimization", p: "Ensured high contrast ratios and large tap targets for inclusivity across diverse user groups." }
    },
    results: {
      label: "Results & Impact", title: "Design", titleBold: "Outcomes",
      r1: { num: "✓", label: "Registration, dossier, and profile management unified into a single web portal" },
      r2: { num: "✓", label: "Step-by-step registration wizard reduced confusion in the submission flow" },
      r3: { num: "1×", label: "Complete, handoff-ready Figma prototype delivered to the development team" },
      quote: "\"Unifying the registration experience has dramatically reduced support inquiries from students during the MBKM cycle.\"",
      attr: "UNIVERSITAS TERBUKA ADMIN TEAM"
    },
    reflection: {
      label: "Key Reflection", title: "What I", titleBold: "Learned",
      p1: "Designing for public institutions with a large and diverse demographic group means prioritizing accessibility above all. A visual design that looks highly polished is only successful if it can render efficiently on entry-level hardware.",
      p2: "Cooperating with developers during the handoff process was essential to ensure the complex table views and responsive forms were built exactly as specified in the layouts.",
      p3: "The importance of clear status indicators cannot be overstated; it fundamentally changed how admins process applications."
    },
    allScreens: {
      label: "UI Directory", title: "All", titleBold: "Key Screens",
      items: [
        "Login Portal", "Login Portal (Error State)", "MBKM Main Portal", "Student Dashboard (General)",
        "Student Dashboard (Program List)", "Student Dashboard (Program Detail)", "Student Dashboard (Status Tracking)",
        "Inbound Registration (Overview)", "Inbound Registration (Form)", "Student Exchange (Overview)", "Student Exchange (Course Mapping)",
        "Student Exchange (Application)", "Student Exchange (Review)", "Student Exchange (Submission)", "Summer Course (Overview)",
        "Summer Course (Details)", "Summer Course (Syllabus)", "Summer Course (Schedules)", "Summer Course (Registration)",
        "Summer Course (Success State)", "Kaprodi Portal (Main Dashboard)", "Kaprodi Portal (Validations List)",
        "Kaprodi Portal (Dossier Review)", "Vice Dean Portal (Approvals Panel)", "Admin Portal (Validation Report)",
        "Admin Dashboard (System Config)", "Admin Dashboard (Logs Panel)", "Admin Dashboard (Analytics Graph)",
        "Admin Dashboard (Dossier Audit)", "Admin Dashboard (Student DB)", "Admin Dashboard (Faculty DB)", "Admin Dashboard (Partners DB)"
      ]
    }
  },
  ttm: {
    hero: {
      label: "Case Study",
      title: "TTM UT",
      titleBold: "Mobile App",
      sub: "Universitas Terbuka · Field Attendance Experience",
      tags: ["Figma", "Mobile App Design", "Education", "UX Optimization"],
      meta: {
        client: "Universitas Terbuka", role: "Sole UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    context: {
      label: "Context & Challenge", title: "Simplifying", titleBold: "Field Attendance",
      p1: "Universitas Terbuka (UT) students participating in the MBKM program needed a reliable way to log their daily attendance (Tatap Muka/TTM) while working in the field.",
      p2: "The challenge was creating a lightweight mobile application that functions efficiently on low-end devices and poor network connections, reducing the high error rates in attendance tracking.",
      cards: [
        { icon: "📡", title: "Poor Connectivity", p: "Students often logged attendance in remote areas with unstable networks." },
        { icon: "📱", title: "Device Constraints", p: "The app needed to be extremely lightweight to run on older mobile devices." },
        { icon: "🕒", title: "Time Sensitivity", p: "Check-ins had to be quick and frictionless to avoid disrupting field activities." }
      ]
    },
    users: {
      label: "User Demographics", title: "Addressing", titleBold: "Student Needs",
      p: "The primary users are students who require a fast, reliable tool:",
      studentBadge: "Students",
      studentTitle: "Goals & Needs",
      studentItems: [
        "Log attendance effortlessly on-the-go.",
        "Clear visual feedback for successful check-ins.",
        "View upcoming class schedules and recordings."
      ],
      adminBadge: "Tutors",
      adminTitle: "Goals & Needs",
      adminItems: [
        "Track student attendance accurately.",
        "Manage class details and availability.",
        "Simple interface for verifying participation."
      ]
    },
    process: {
      label: "Design Process", title: "From", titleBold: "Insights to Prototypes",
      steps: [
        { num: "01", title: "Field Research", p: "Interviewed students to understand environmental constraints during field operations." },
        { num: "02", title: "Flow Optimization", p: "Designed a linear, distraction-free check-in flow minimizing the number of taps required." },
        { num: "03", title: "Wireframing", p: "Created mobile-first wireframes focusing on large tap targets and high contrast." },
        { num: "04", title: "Prototyping", p: "Delivered an interactive prototype validated through task-completion tests." }
      ]
    },
    screens: {
      label: "Visual Design & UX Highlights", title: "Focusing on", titleBold: "Mobile Clarity",
      s1: { label: "Onboarding & Login", caption: "A welcoming onboarding flow leading to a streamlined login screen optimized for quick access." },
      s2: { label: "Attendance Dashboard", caption: "The central hub for students to view their check-in status and upcoming classes." },
      s3: { label: "Check-in Flow", caption: "A frictionless one-tap attendance logging interface with immediate visual confirmation." },
      s4: { label: "Class Details", caption: "A comprehensive view of schedule details, tutor information, and related documents." },
      s5: { label: "Tutor Availability List", caption: "A clear interface for students to check the availability status of their respective tutors." },
      s6: { label: "Recordings & Settings", caption: "Easy access to class recordings and account management options." }
    },
    decisions: {
      label: "Key Design Decisions", title: "Decisions that", titleBold: "Shaped the Experience",
      d1: { title: "One-Tap Check-In", p: "Reduced the attendance logging process to a single primary action button to accommodate time-sensitive field scenarios." },
      d2: { title: "Large Tap Targets", p: "Ensured all interactive elements met accessibility standards for mobile devices, preventing mis-taps." },
      d3: { title: "High-Contrast Visuals", p: "Utilized bold colors and clear typography to ensure readability in bright outdoor environments." },
      d4: { title: "Clear Error States", p: "Designed friendly and actionable error messages for connectivity issues, preventing user frustration." }
    },
    results: {
      label: "Results & Impact", title: "Design", titleBold: "Outcomes",
      r1: { num: "✓", label: "One-tap check-in flow replaced manual paper-based attendance in field sessions" },
      r2: { num: "✓", label: "Offline-aware UI and clear status cues designed for unstable network environments" },
      r3: { num: "18", label: "High-fidelity screens delivered covering full student and tutor workflows" },
      quote: "\"The new mobile app has made tracking our field activities completely hassle-free.\"",
      attr: "MBKM STUDENT REPRESENTATIVE"
    },
    reflection: {
      label: "Key Reflection", title: "What I", titleBold: "Learned",
      p1: "Designing for mobile requires ruthless prioritization. Every element on the screen must serve a clear purpose.",
      p2: "Understanding the physical environment where the app is used (e.g., outdoors, unstable network) is just as important as understanding the software requirements.",
      p3: "Simple, immediate feedback is crucial for building trust in a mobile application."
    },
    allScreens: {
      label: "UI Directory", title: "All", titleBold: "Key Screens",
      items: [
        "Onboarding", "Login", "Verification OTP", "Dashboard (No Data)", "Dashboard (Have Request)",
        "Dashboard (Not Checked In)", "Dashboard (Checked In)", "Dashboard (Finished)", "Absensi",
        "Presensi Masuk", "Presensi Keluar", "Detail Kelas", "Jadwal Kelas", "List Recording",
        "Form Kesediaan Tutor", "List Kesediaan Tutor", "Pengaturan", "Logout"
      ]
    }
  },
  barata: {
    hero: {
      label: "Case Study",
      title: "Barata",
      titleBold: "Early Warning System",
      sub: "BWS · Real-time hydrology telemetry & early warning monitoring platform",
      tags: ["Figma", "Dashboard Design", "GIS Mapping", "Telemetry", "Government", "UX Design"],
      meta: {
        client: "Barata Jabar", role: "UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    overview: {
      label: "Overview",
      title: "A water resource monitoring system",
      titleBold: "for flood mitigation",
      p1: "Barata is a specialized disaster early warning dashboard designed for water management agencies. It integrates geographical information systems (GIS) and real-time telemetry data to monitor water levels, rain telemetry, and dispatch alerts.",
      p2: "The system serves as a central control room interface to track critical thresholds, visualize weather impact infographics, and dispatch automated flood warnings to downstream areas."
    },
    problem: {
      label: "The Problem", title: "Fragmented sensor data", titleBold: "delaying critical warnings",
      p: "Hydraulic engineers had to rely on separate monitoring systems for rain telemetry, river gauges, and map services. In high-stakes flood mitigation scenarios, this fragmentation delayed critical decision-making.",
      cards: [
        { icon: "📡", title: "Fragmented Telemetry", p: "Sensor data from rain gauges and water levels were scattered across isolated, non-real-time tables." },
        { icon: "🗺️", title: "Lack of GIS Context", p: "Engineers couldn't visualize water flows and threshold breaches geographically in real-time." },
        { icon: "🚨", title: "Manual Warning Dispatch", p: "No automated alerting mechanism existed, requiring manual verification during storms." }
      ]
    },
    process: {
      label: "Process", title: "From system requirements to", titleBold: "GIS dashboard",
      steps: [
        { num: "01", title: "Domain Research", p: "Studied hydrology monitoring metrics (alert levels SIAGA I, II, III) and telemetry sensor patterns." },
        { num: "02", title: "Restructuring Information", p: "Restructured the UI to combine map layouts with live telemetry cards and alert status indicators." },
        { num: "03", title: "GIS Integration Design", p: "Designed map layers that toggle weather info, flood prone zones, and sensor positions." },
        { num: "04", title: "Component Development", p: "Built widgets for water level charts, active warnings, and telemetry tables in Figma." }
      ]
    },
    screens: {
      label: "Key Screens", title: "Telemetry and warning", titleBold: "dashboard screens",
      s1: { label: "Main Dashboard", caption: "Central monitoring view showing the live GIS map integrated with weather overlays, active flood alerts, and recent sensor readouts." },
      s2: { label: "Telemetry Details", caption: "Deep dive screen displaying historical sensor logs, water levels trend graphs, and threshold configurations." },
      s3: { label: "Disaster Infographics", caption: "Visual analytical charts showcasing rainfall trends, flood vulnerability indices, and population impact statistics." },
      s4: { label: "Early Warning System", caption: "Interface for creating, verifying, and dispatching warning alerts to regional disaster coordinators." },
      s5: { label: "Map Layer Service", caption: "Settings panel to toggle specific GIS layers like basin boundaries, rain gauge heatmaps, and soil moisture data." },
      s6: { label: "Alert Report Popup", caption: "Frictionless popup form to quickly review sensor anomaly reports and log verification actions." },
      s7: { label: "Contact Panel", caption: "Coordination directory with contact channels for regional site operators, emergency responders, and field engineers." }
    },
    decisions: {
      label: "Design Decisions", title: "Decisions that shaped", titleBold: "the operational dashboard",
      d1: { title: "Map-centric layout", p: "Placed the GIS map as the core canvas. This provides immediate geographical context for sensor readouts, allowing engineers to visualize how rain trends affect downstream basins." },
      d2: { title: "Triple-threshold status bar", p: "Designed clear SIAGA status panels. The color-coded alerts (green, yellow, orange, red) instantly show active warnings without needing to parse database tables." },
      d3: { title: "Overlay layer control", p: "Created a sliding overlay manager to toggle layers (rainfall radar, telemetry stations, risk zones). This keeps the map clean while offering deep analytical overlays." },
      d4: { title: "Integrated dispatch widget", p: "Designed warning check-lists directly alongside telemetry details to facilitate one-click alert verification." }
    },
    results: {
      label: "Results", title: "Operational efficiency", titleBold: "delivered",
      r1: { num: "1 view", label: "Consolidated map, telemetry, and warning status into a single operational interface" },
      r2: { num: "SIAGA", label: "Clear status visibility for active alerts nationwide" },
      r3: { num: "7", label: "Key UI templates designed and verified with project stakeholders" },
      quote: '"Combining live GIS layers with our gauge readings has transformed how we monitor watershed health during severe weather events."',
      attr: "— Hydrology Division Stakeholder, 2024"
    },
    reflection: {
      label: "Reflection", title: "What I learned", titleBold: "from Barata",
      p1: "Designing for engineering and disaster management requires absolute precision. Visual styling must support fast, error-free reading under stress.",
      p2: "Combining complex GIS spatial data with real-time numeric telemetry is a major information design challenge. Hierarchy is achieved by muting non-urgent map features.",
      p3: "If I were to extend this project, I would work on mobile-first alerts for field officers who respond to physical gauge sensors in the basins."
    },
    allScreens: {
      label: "All Screens", title: "Complete design", titleBold: "across all views",
      p: "All screens delivered as part of the Barata project design, covering GIS map views, telemetry lists, warning settings, and infographics.",
      items: [
        "Beranda (Main Dashboard)", "Peringatan Dini (EWS)", "Detail Data (Telemetry)", "Infografis Bencana", "Layer Service (GIS Settings)", "Pop up Laporan", "Kontak"
      ]
    }
  },
  hidrolika: {
    hero: {
      label: "Case Study",
      title: "Web",
      titleBold: "Hidrolika",
      sub: "BWS · Hydrology telemetry and station monitoring platform",
      tags: ["Figma", "Dashboard Design", "Telemetry", "Hydrology", "Government", "UX Design"],
      meta: {
        client: "Balai Hidrolika", role: "UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    overview: {
      label: "Overview",
      title: "A specialized hydrology portal",
      titleBold: "for station and telemetry monitoring",
      p1: "Web Hidrolika is a web dashboard designed for hydraulic engineers to monitor hydrology telemetry data, including river water levels, rainfall data, and station health.",
      p2: "It allows operators to drill down into specific telemetry stations, review historical sensor logs, check equipment status, and verify data consistency across the monitoring network."
    },
    problem: {
      label: "The Problem", title: "Isolated telemetry logs", titleBold: "hindered sensor status audits",
      p: "Engineers struggled to monitor the status of individual stasiun telemetry and rain gauges due to isolated databases and unstructured data tables, delaying sensor malfunction detection.",
      cards: [
        { icon: "📈", title: "Isolated logs", p: "Data logs were stored in static, non-interactive tables that made it hard to track trends." },
        { icon: "🔋", title: "Hidden sensor status", p: "Sensor health, battery levels, and connectivity issues were not visible in the main table." },
        { icon: "⚙️", title: "Tedious station audits", p: "Auditing a single station required manually searching through multiple index files." }
      ]
    },
    process: {
      label: "Process", title: "From raw sensor logs", titleBold: "to telemetry portal",
      steps: [
        { num: "01", title: "Telemetry Audit", p: "Reviewed hydrology metrics, sensor logs, and operational workflows of BWS engineers." },
        { num: "02", title: "Layout Structuring", p: "Designed a clean list-detail structure to allow seamless transitions between general station list and detail views." },
        { num: "03", title: "Visualizing Trends", p: "Created clear, interactive historical data charts showing water levels and rainfall accumulation." },
        { num: "04", title: "Station Health Indicators", p: "Added sensor status indicators (Active, Inactive, Maintenance) directly into the telemetry lists." }
      ]
    },
    screens: {
      label: "Key Screens", title: "Hydrology station monitoring", titleBold: "screens",
      s1: { label: "Login Portal", caption: "Secure split-screen login page specifically branded for Web Hidrolika, prioritizing layout clarity." },
      s2: { label: "Telemetry Detail View", caption: "Detailed station telemetry displaying historical log tables and interactive sensor trend charts." },
      s3: { label: "Web Hidrolika Main", caption: "General view of all telemetry stations across regions with real-time status and sensor readouts." }
    },
    decisions: {
      label: "Design Decisions", title: "Decisions that simplified", titleBold: "telemetry audits",
      d1: { title: "Interactive charts integration", p: "Replaced static log tables with interactive line charts, allowing engineers to scan water level trends over 24 hours, 7 days, or 30 days." },
      d2: { title: "Compact station summary cards", p: "Introduced overview cards at the top of the details page showing current status, battery life, and signal strength." },
      d3: { title: "Consistent status colors", p: "Applied a clean status indicator system (Active = green, Warning = yellow, Offline = red) to immediately flag station issues." },
      d4: { title: "Unified log search", p: "Placed custom filter tools directly beside the data tables, allowing users to query logs by date range or sensor type in a single screen." }
    },
    results: {
      label: "Results", title: "Hydrology monitoring design", titleBold: "delivered",
      r1: { num: "✓", label: "Station directory, telemetry detail, and log views consolidated into one navigable interface" },
      r2: { num: "✓", label: "Battery level, signal strength, and status indicators designed for immediate operator readability" },
      r3: { num: "3", label: "High-fidelity templates designed and approved for developer handoff" },
      quote: '"The interactive charts and battery indicator widgets save us hours of manual station auditing every week."',
      attr: "— Hydrology Division Engineer, 2024"
    },
    reflection: {
      label: "Reflection", title: "What I learned", titleBold: "from Web Hidrolika",
      p1: "Designing for telemetry requires clean and predictable layout structures. When users deal with hundreds of numeric records, readability must override complex visual elements.",
      p2: "The main challenge was organizing historical logs without cluttering the screen. Integrating interactive graphs directly alongside tables provided the best of both worlds.",
      p3: "If I were to expand this, I would create alert rules in the dashboard to notify operators when battery levels drop below 15%."
    },
    allScreens: {
      label: "All Screens", title: "Complete design", titleBold: "across all views",
      p: "All screens delivered as part of the Web Hidrolika project design, covering login, station directories, and telemetry detail views.",
      items: [
        "Login", "Login Web Hidrolika", "Web Hidrolika Main"
      ]
    }
  },
  irigasi: {
    hero: {
      label: "Case Study",
      title: "Web",
      titleBold: "Irigasi",
      sub: "BWS · Irrigation channel monitoring & reporting platform",
      tags: ["Figma", "Web Design", "Irrigation Management", "Reporting System"],
      meta: {
        client: "Balai Teknik Irigasi", role: "UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    overview: {
      label: "Overview",
      title: "An irrigation monitoring system",
      titleBold: "for efficient water distribution",
      p1: "Web Irigasi is a specialized web application designed for regional water management departments to manage water distribution schedules, track irrigation channel status, and collect public reports on channel damage.",
      p2: "Through an intuitive user interface, regional administrators can coordinate water flows, allocate resources, and schedule maintenance activities based on real-time needs."
    },
    problem: {
      label: "The Problem", title: "Manual tracking & reports", titleBold: "delaying channel maintenance",
      p: "Traditional irrigation systems relied on manual paper records and slow communications, making it difficult to detect water distribution inequities or respond to channel damage quickly.",
      cards: [
        { icon: "📈", title: "Unequal distribution", p: "Without centralized tracking, some crop fields received excessive water while others suffered from shortages." },
        { icon: "📝", title: "Delayed reporting", p: "Reports of damaged canals or blockages took weeks to reach maintenance teams via manual paperwork." },
        { icon: "📊", title: "No central database", p: "Canal assets, maintenance history, and operator contact details were scattered across regional offices." }
      ]
    },
    process: {
      label: "Process", title: "Developing a streamlined", titleBold: "irrigation portal",
      steps: [
        { num: "01", title: "Field Analysis", p: "Interviewed local agricultural officers and maintenance staff to map their reporting and dispatch workflow." },
        { num: "02", title: "Information Architecture", p: "Grouped features into three main modules: Distribution Scheduling, Damage Reporting, and Canal Asset Management." },
        { num: "03", title: "Interface Design", p: "Designed clean list layouts, detail modals, and progress tracking panels to simplify record management." },
        { num: "04", title: "Interactive Prototyping", p: "Created flow connections in Figma to demonstrate the report creation and scheduling workflows." }
      ]
    },
    screens: {
      label: "Key Screens", title: "Redesigned portal", titleBold: "views",
      s1: { label: "Main Dashboard", caption: "Overview of active irrigation canals, seasonal distribution schedules, and recent maintenance alerts." },
      s2: { label: "Detail Berita", caption: "News page showing regional water schedules, weather announcements, and community reporting templates." },
      s3: { label: "Full Portal View", caption: "High-fidelity mockups showing complete navigation flows for canal management and reporting." }
    },
    decisions: {
      label: "Design Decisions", title: "Decisions that simplified", titleBold: "irrigation admin",
      d1: { title: "Simple list-detail views", p: "Used clean list views with expandable side-panels instead of multiple page transitions, keeping the user in context." },
      d2: { title: "Visual status tracks", p: "Created colored status indicators (Active, Scheduled, Maintenance) to make water distribution schedules scannable at a glance." },
      d3: { title: "Public reporting flow", p: "Designed a clean, simplified reporting interface with photo upload capabilities to expedite channel repairs." },
      d4: { title: "Responsive grid layouts", p: "Ensured key tables and scheduling boards are responsive for field officers checking canal status on mobile tablets." }
    },
    results: {
      label: "Results", title: "Design", titleBold: "outcomes delivered",
      r1: { num: "✓", label: "Canal scheduling, damage reporting, and status monitoring unified in one web app" },
      r2: { num: "✓", label: "Simplified reporting flow with photo upload designed for field officers" },
      r3: { num: "3", label: "Core modules — scheduling, reporting, monitoring — fully designed and handed off" },
      quote: '"The unified scheduling view makes it much easier to balance water allocation across different agricultural sub-sectors."',
      attr: "— Regional Water Management Division, 2024"
    },
    reflection: {
      label: "Reflection", title: "What I learned", titleBold: "from Web Irigasi",
      p1: "Working on this project showed me how digital tools can empower public infrastructure management. Keeping interfaces simple is crucial when users range from tech-savvy engineers to local field operators.",
      p2: "The main challenge was organizing scheduling data for multiple seasons and channels. I learned that clear grouping and color coding are extremely effective in managing dense timetables.",
      p3: "In the future, I'd design a mobile app interface for local farmers to directly report canal leakages and request water allocations."
    },
    allScreens: {
      label: "All Screens", title: "Complete design", titleBold: "across all views",
      p: "All screens delivered as part of the Barata Irigasi project design, covering dashboard scheduling, news details, and full portal views.",
      items: [
        "Dashboard", "Detail Berita", "Web Irigasi v1"
      ]
    }
  },
  petsu: {
    hero: {
      label: "Case Study",
      title: "Petsu",
      titleBold: "E-Commerce",
      sub: "A seamless mobile shopping experience concept dedicated to pet supplies",
      tags: ["Figma", "Mobile App", "E-Commerce", "UI/UX Design", "User Research", "Prototyping"],
      meta: {
        client: "Personal Project", role: "Sole UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    overview: {
      label: "Overview",
      title: "A modern, clean approach",
      titleBold: "to mobile pet supplies shopping",
      p1: "Petsu is a high-fidelity mobile application concept dedicated to pet needs. The platform focuses on simplifying the shopping experience for pet owners through clear categorization, personalized reordering, and an engaging visual language.",
      p2: "The design represents a complete end-to-end product design cycle, from user interviews and persona creation to wireframes, interactive prototypes, and a complete UI case study package."
    },
    problem: {
      label: "The Problem", title: "Friction in online pet shopping", titleBold: "causing cart abandonment",
      p: "Many pet owners find shopping for supplies online tedious due to cluttered interfaces, confusing subscription options for food, and lack of clarity regarding product sizes and ingredients.",
      cards: [
        { icon: "🛒", title: "Cluttered Checkouts", p: "Too many steps and hidden costs at checkout lead to high cart abandonment rates." },
        { icon: "🐶", title: "Impersonal Experience", p: "Pet owners want tailored suggestions for their specific pets' breeds, ages, and dietary needs." },
        { icon: "📦", title: "Subscription Friction", p: "Setting up recurring deliveries for pet food is often difficult to configure and manage on mobile." }
      ]
    },
    process: {
      label: "Process", title: "From user research to", titleBold: "polished interactive prototypes",
      steps: [
        { num: "01", title: "User Research", p: "Conducted interviews with pet owners to map their purchasing habits and recurring needs (food, litter, toys)." },
        { num: "02", title: "Journey Mapping", p: "Created user personas and wireframed key paths like the fast-checkout and subscription setups." },
        { num: "03", title: "Visual Identity", p: "Developed a warm, clean brand identity using soft orange tones, playful illustrations, and friendly typography." },
        { num: "04", title: "Interactive Prototyping", p: "Built high-fidelity screens and connected them in Figma to simulate a realistic checkout and profile setup." }
      ]
    },
    screens: {
      label: "Key Screens", title: "Mobile UI highlights", titleBold: "from the prototype",
      s1: { label: "App Onboarding", caption: "Welcoming onboarding screens introducing the personalized pet profile creation." },
      s2: { label: "Home Dashboard", caption: "Personalized home feed showing pet-specific recommendations and quick reorder shortcuts." },
      s3: { label: "Product Details", caption: "Clear product description with toggle options for subscription plans and ingredient transparency." },
      s4: { label: "Pet Profile Setup", caption: "User profile where pet details (breed, age, allergies) are configured to filter store items." },
      s5: { label: "Shopping Cart", caption: "Clean cart interface showing clear price breakdown and auto-applied discounts." },
      s6: { label: "Checkout Handoff", caption: "Seamless 3-step checkout with multiple payment methods and delivery schedule selection." },
      s7: { label: "Order Tracking", caption: "Real-time tracking of pet food delivery with status notifications." }
    },
    decisions: {
      label: "Design Decisions", title: "Choices that optimized", titleBold: "mobile conversion rates",
      d1: { title: "Pet-profile filtering", p: "Allowed users to create profiles for their pets. The app then automatically filters out items with allergens and highlights breed-specific food." },
      d2: { title: "One-click auto-delivery", p: "Designed a simple toggle for recurring monthly subscriptions directly on the product card, saving time for recurring purchases." },
      d3: { title: "Visual warmth", p: "Used a cohesive warm color palette combined with custom pet illustrations. This builds emotional connection and a friendly shopping vibe." },
      d4: { title: "Progressive checkout form", p: "Divided the checkout flow into collapsible sections on a single page, minimizing page loads and cognitive friction." }
    },
    results: {
      label: "Results", title: "What this project", titleBold: "demonstrates",
      r1: { num: "✓", label: "Personalized pet profile, fast checkout, and subscription flow designed end-to-end" },
      r2: { num: "✓", label: "Warm visual identity and micro-copy crafted to build emotional trust in a consumer context" },
      r3: { num: "1×", label: "Complete Figma prototype with interactive component states and design system tokens" },
      quote: "\"The Petsu case study shows a strong understanding of user-centered design, translating pet owner pain points into a warm, highly-converting mobile experience.\"",
      attr: "— UI/UX Case Study Review"
    },
    reflection: {
      label: "Reflection", title: "What I learned", titleBold: "from Petsu",
      p1: "Designing Petsu taught me the power of micro-copy and warm visual styling in consumer e-commerce. A friendly tone can make filling out forms feel less like work.",
      p2: "Mobile prototyping in Figma pushed me to learn advanced interactions, like nested component states for cart increments and payment select toggles.",
      p3: "If I were to take this further, I would explore integration with veterinary API databases to recommend medical diets based on veterinary records."
    },
    allScreens: {
      label: "UI Gallery", title: "App Screens", titleBold: "and Case Study Document",
      p: "Below you can access the full UI case study document. This comprehensive PDF covers user research, wireframes, style guides, and all design components.",
      items: [
        "Onboarding Splash", "Store Homepage", "Pet Food Category", "Product Detail Page", "Cart Overview", "Checkout Form", "Order Success Screen"
      ]
    }
  }
};

export const caseStudiesId = {
  simontila: {
    hero: {
      label: "Studi Kasus",
      title: "Admin",
      titleBold: "SIMONTILA",
      sub: "Kemendikbud · Sistem Monitoring Tindak Lanjut Hasil Pemeriksaan",
      tags: ["Figma", "Redesain Dashboard", "Admin UI", "Pemerintah", "Arsitektur Informasi", "Manajemen Data"],
      meta: {
        client: "Kemendikbud", role: "Sole UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    overview: {
      label: "Gambaran Umum",
      title: "Sistem pemantauan audit pemerintah",
      titleBold: "yang dirancang untuk pekerjaan harian admin",
      p1: "SIMONTILA — Sistem Monitoring Tindak Lanjut Hasil Pemeriksaan — adalah platform web internal yang digunakan oleh administrator di Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbud) untuk mengelola, melacak, dan melaporkan temuan audit resmi di seluruh instansi pendidikan berskala nasional.",
      p2: "Admin sangat bergantung pada sistem ini setiap hari untuk memasukkan data, menyaring hasil inspeksi, memantau status tindak lanjut, dan menghasilkan laporan — yang membuat kemudahan dan kejelasan bukan sekadar hal opsional, melainkan kebutuhan operasional yang kritis."
    },
    beforeAfter: {
      label: "Sebelum & Sesudah",
      title: "Dari antarmuka lama",
      titleBold: "menjadi dashboard modern",
      p: "Sistem SIMONTILA awalnya berjalan dengan UI yang ketinggalan zaman, navigasi atas yang sangat padat, tanpa hierarki visual, dan arsitektur informasi yang membingungkan. Redesain yang saya lakukan memperkenalkan tata letak sidebar yang terstruktur, desain sistem yang konsisten, dan tampilan data yang dirancang khusus untuk setiap alur kerja utama.",
      badgeBefore: "⚠ Sebelum", badgeAfter: "✓ Sesudah"
    },
    problem: {
      label: "Masalah", title: "Tiga masalah bertumpuk", titleBold: "yang memperlambat setiap tugas",
      p: "Dashboard asli telah mengakumulasi berbagai penambahan fitur selama bertahun-tahun tanpa ada sistem desain yang terpadu. Admin yang menggunakannya setiap hari menghadapi hambatan konsisten yang akhirnya menurunkan produktivitas secara nyata.",
      cards: [
        { icon: "🗺️", title: "Navigasi tersebar", p: "Menu yang saling berkaitan dikelompokkan secara tidak konsisten — pengguna harus menghafal letak menu daripada menemukannya secara logis." },
        { icon: "📊", title: "Tanpa hierarki visual", p: "Tabel dan rekaman data ditampilkan tanpa prioritas atau struktur — sulit mengidentifikasi item mana yang butuh tindakan segera." },
        { icon: "🔀", title: "Terlalu banyak perpindahan halaman", p: "Untuk menyelesaikan satu tugas, diperlukan 4-5 langkah navigasi melintasi beberapa sub-halaman — meningkatkan waktu proses dan tingkat kesalahan." }
      ]
    },
    process: {
      label: "Proses", title: "Dari arahan klien ke", titleBold: "handoff high-fidelity",
      steps: [
        { num: "01", title: "Analisis arahan", p: "Memetakan semua masalah dari arahan klien menjadi pola kegagalan UI/UX spesifik — arsitektur informasi buruk, tanpa hierarki, alur berulang — sebelum mulai mendesain." },
        { num: "02", title: "Restrukturisasi arsitektur informasi", p: "Mengatur ulang taksonomi navigasi sehingga menu dikelompokkan berdasarkan tujuan pengguna — Dashboard, Tindak Lanjut, Manajemen LHP, Pelaporan, Pengaturan — bukan logika sistem internal." },
        { num: "03", title: "Desain komponen di Figma", p: "Membangun set komponen yang konsisten: tabel data dengan filter, lencana status dengan kode warna (S, BTL, P, BS), toolbar aksi, kartu ringkasan, dan form filter — semuanya dapat digunakan kembali di seluruh bagian." },
        { num: "04", title: "Handoff UI high-fidelity", p: "Menyerahkan redesain lengkap dengan spesifikasi siap handoff dan library komponen untuk dijadikan referensi tim pengembang selama implementasi." }
      ]
    },
    screens: {
      label: "Layar Utama", title: "Sistem hasil redesain", titleBold: "layar demi layar",
      s1: { label: "Masuk", caption: "Halaman login terpisah yang bersih dengan branding Simontila. Panel kiri gradien biru menciptakan otoritas dan kepercayaan, sementara panel putih kanan menjaga fokus pada form dan bebas gangguan." },
      s2: { label: "Manajemen LHP", caption: "Manajemen inspeksi dengan form filter terstruktur di atas tabel data — admin bisa memfilter berdasarkan instansi, periode, dan pemeriksa, lalu menindaklanjutinya dalam satu tampilan." },
      s3: { label: "Pelaporan — Rekap per Provinsi", caption: "Modul pelaporan dengan penyaringan berbagai parameter. Tata letak konsisten di semua tampilan data ini mengurangi beban kognitif bagi admin yang sering berpindah halaman." },
      s4: { label: "Tindak Lanjut — Pelacakan", caption: "Halaman pelacakan tindak lanjut dengan header ringkasan yang menampilkan total per status (S, BTL, P, BS) dan nilainya — memberi admin gambaran instan sebelum menangani tiap data." },
      s5: { label: "Data Temuan — Tampilan Tabel Penuh", caption: "Data temuan audit padat dibuat lebih mudah dibaca dengan baris terstruktur, badge status berwarna, dan tombol aksi \"Tindak Lanjut\" inline — mengeliminasi navigasi halaman detail untuk tugas rutin." },
      s6: { label: "Tabel Transaksi", caption: "Komponen tabel transaksi terbaru dengan kolom jelas, badge status (Konfirmasi, Menunggu, Batal), dan aksi ikon (lihat, edit, hapus) — semuanya dalam satu tampilan." }
    },
    decisions: {
      label: "Keputusan Desain", title: "Pilihan yang membawa", titleBold: "dampak terbesar",
      d1: { title: "Navigasi sidebar alih-alih navigasi atas", p: "Mengganti navigasi atas horizontal yang padat dengan sidebar kiri yang terstruktur. Navigasi sidebar lebih mudah diskalakan, memungkinan sub-menu yang dapat dilipat, dan menjaga area konten utama tetap lega." },
      d2: { title: "Header ringkasan per bagian", p: "Menambahkan bar ringkasan status di bagian atas halaman utama (Tindak Lanjut, dll) yang menampilkan jumlah dan nilai per status sebelum tabel data. Admin mendapat gambaran sekilas tanpa harus scroll data." },
      d3: { title: "Sistem badge status berbasis warna", p: "Mendesain 4 status yang konsisten (S = hijau, BTL = merah, P = kuning, BS = teal) yang diterapkan merata di setiap tabel dan kartu ringkasan. Status kini mudah dibaca dalam sepersekian detik." },
      d4: { title: "Form filter + tabel data dalam satu tampilan", p: "Meletakkan form filter langsung di atas tabel alih-alih di halaman terpisah. Langkah ini mengurangi alur tugas utama dari 4-5 langkah menjadi 2 klik untuk aksi paling sering dilakukan." }
    },
    results: {
      label: "Hasil", title: "Apa yang berubah", titleBold: "setelah redesain",
      r1: { num: "✓", label: "Sidebar navigasi terstruktur menggantikan menu atas yang padat — mengurangi perpindahan konteks" },
      r2: { num: "✓", label: "Layout filter + tabel dalam satu layar mempersingkat alur tugas yang sebelumnya membutuhkan banyak langkah" },
      r3: { num: "1×", label: "Pustaka komponen Figma lengkap diserahkan untuk handoff developer yang lebih konsisten" },
      quote: "\"Admin sekarang dapat menemukan dan mengelola rekaman tanpa berpindah-pindah banyak halaman — navigasi terstruktur dan aksi di dalam tabel membawa dampak paling signifikan pada alur kerja sehari-hari.\"",
      attr: "— Umpan balik stakeholder pasca-pengiriman, SIMONTILA · 2024"
    },
    reflection: {
      label: "Refleksi", title: "Apa yang saya pelajari", titleBold: "dari proyek ini",
      p1: "Mengerjakan sistem audit pemerintahan mengajarkan saya bahwa fungsionalitas dan rasa percaya saling berkaitan. Ketika admin percaya pada antarmukanya — karena konsisten dan jelas — mereka lebih jarang berbuat kesalahan dan bekerja lebih cepat.",
      p2: "Tantangan terbesar adalah merestrukturisasi arsitektur informasi tanpa merusak mental model yang sudah ada. Saya harus menyeimbangkan antara penyempurnaan fitur dan sisi kebiasaan pengguna, membuat saya lebih sadar pola mana yang harus dipertahankan.",
      p3: "Jika saya melanjutkan proyek ini, saya akan melakukan sesi pengujian kebergunaan (usability testing) langsung dengan admin sebelum dan sesudah redesain untuk menghasilkan data yang lebih kuat."
    },
    allScreens: {
      label: "Semua Layar", title: "Desain Lengkap", titleBold: "di Seluruh Tampilan",
      p: "Seluruh layar yang dihasilkan dari redesain ini — meliputi alur kerja admin lengkap mulai dari masuk, pengisian data, penyaringan, hingga laporan akhir.",
      items: [
        "Login", "Manajemen LHP", "Pelaporan", "Tindak Lanjut", "Data Temuan", "Tabel Data", "Kontainer 2",
        "Tampilan Data 1", "Tampilan Data 2", "Tampilan Data 3", "Tampilan Data 4", "Tampilan Daftar", "Satker",
        "Filter Tahun 2020", "Filter Tahun 2021", "Filter Tahun 2022", "Filter Tahun 2023", "Filter Tahun 2024", "Sebelum Redesain"
      ]
    }
  },
  esertifikat: {
    hero: {
      label: "Studi Kasus",
      title: "e-Sertifikat",
      titleBold: "Next Gen",
      sub: "Kominfo · SDPPI · Redesain Platform Sertifikasi",
      tags: ["Figma", "Platform Web", "Dashboard Admin", "Pemerintah", "Sistem Multi-peran", "Redesain UX"],
      meta: {
        client: "Kominfo / SDPPI", role: "UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    overview: {
      label: "Gambaran Umum",
      title: "Platform sertifikasi nasional",
      titleBold: "untuk perangkat telekomunikasi",
      p1: "e-Sertifikat Next Gen adalah platform resmi di bawah Direktorat Jenderal Sumber Daya dan Perangkat Pos dan Informatika (SDPPI), Kementerian Komunikasi dan Informatika (Kominfo). Platform ini mengelola seluruh proses sertifikasi untuk perangkat telekomunikasi dan elektronik yang didistribusikan di Indonesia.",
      p2: "Redesain mencakup tiga ruang lingkup yang berbeda — website publik, portal kustomer untuk perusahaan pendaftar, dan dashboard admin untuk operator pemerintah — yang disatukan di bawah satu sistem desain yang kohesif.",
      pills: ["Website publik", "Portal kustomer", "Dashboard admin", "Pencarian sertifikat", "Manajemen dokumen"]
    },
    problem: {
      label: "Masalah", title: "Sistem yang mulai usang dan", titleBold: "kesulitan melayani skala pengguna",
      p: "Platform lama dibangun melalui beberapa literasi iteratif tanpa strategi UX yang terpadu. Seiring bertambahnya volume aplikasi sertifikasi, kekurangan sistem menjadi sangat merugikan bagi operator dan perusahaan.",
      cards: [
        { icon: "🏛️", title: "Tidak ada sistem desain", p: "Komponen yang tidak konsisten antar halaman — mengikis rasa percaya di sistem pemerintahan yang membutuhkan kejelasan." },
        { icon: "🔁", title: "Alur membingungkan", p: "Tampilan untuk pendaftar dan admin terlalu mirip dan bercampur — menyebabkan kebingungan dan kesalahan input." },
        { icon: "📋", title: "Status yang tidak transparan", p: "Pengguna tidak bisa melacak status dokumen melewati proses review panjang — menyebabkan banyaknya komplain dukungan pelanggan." }
      ]
    },
    users: {
      label: "Pengguna", title: "Dua pengguna berbeda,", titleBold: "satu sistem terpadu",
      p: "Tantangan desain utamanya adalah melayani dua grup dengan kebutuhan yang sangat berbeda — pendaftar dari korporat yang jarang berinteraksi dengan sistem, dan admin pemerintah yang bekerja di sistem tersebut setiap hari secara intensif.",
      adminBadge: "Admin — Operator SDPPI",
      adminTitle: "Operator admin pemerintah",
      adminItems: [
        "Meninjau dan memproses aplikasi masuk setiap hari",
        "Memantau antrean dan proses persetujuan multi-tahap",
        "Melacak pemasukan PNBP dengan grafik langsung",
        "Menerbitkan, menolak, atau meminta revisi dokumen",
        "Mengakses daftar periksa dokumen secara penuh per aplikasi"
      ],
      customerBadge: "Kustomer — Pendaftar Korporat",
      customerTitle: "Perusahaan yang mengajukan sertifikasi",
      customerItems: [
        "Mengajukan permohonan sertifikasi baru",
        "Melacak status aplikasi secara real-time",
        "Mengunggah dan mengelola dokumen teknis",
        "Melihat dan mengunduh sertifikat yang telah diterbitkan",
        "Memantau posisi antrean dan estimasi waktu"
      ]
    },
    process: {
      label: "Proses", title: "Dari brief ke", titleBold: "sistem desain multi-tampilan",
      steps: [
        { num: "01", title: "Pemetaan brief & cakupan", p: "Memetakan semua kebutuhan fungsional melintasi dua peran pengguna dan tiga tampilan aplikasi dari klien — menetapkan batasan jelas sebelum mendesain." },
        { num: "02", title: "Arsitektur informasi berbasis peran", p: "Menetapkan struktur navigasi dan alur tugas terpisah untuk tiap peran — memastikan tidak ada elemen pengguna yang tumpang tindih." },
        { num: "03", title: "Komponen & sistem desain", p: "Membangun komponen yang bisa dipakai bersama — badge status, tabel, form, kartu, dan diagram grafik." },
        { num: "04", title: "Handoff High-fidelity UI", p: "Menyerahkan UI hi-fi untuk ketiga permukaan lengkap dengan spesifikasi di Figma dan pustaka komponen untuk pengembang." }
      ]
    },
    screens: {
      label: "Layar Utama", title: "Sorotan dari", titleBold: "setiap tampilan",
      s1: { label: "Login", caption: "Layar login terpisah dengan branding e-Sertifikat Next Gen. Warna gradien ungu menciptakan kesan modern sementara panel kanan menampilkan konteks sistem bagi pendaftar baru." },
      s2: { label: "Kustomer — Beranda", caption: "Menampilkan detail akun kustomer dan informasi antrean langsung — memberi pendaftar visibilitas segera tanpa harus menghubungi pusat bantuan." },
      s3: { label: "Admin — Beranda", caption: "Beranda Admin menampilkan kartu pipeline status, metrik harian, tren antrean, dan grafik PNBP — semua yang operator butuhkan sekilas pandang." },
      s4: { label: "Aplikasi — Daftar aplikasi", caption: "Tabel terstruktur dengan indikator status menggunakan warna (BATAL, SP2 KADALUARSA, DRAFT CUSTOMER), menu tindakan inline, dan paginasi — ideal untuk pemrosesan berjumlah banyak setiap hari." },
      s5: { label: "Detail Aplikasi — Tampilan Kustomer", caption: "Tata letak dua kolom menampilkan field dari perangkat, spesifikasi, dan kewajiban mengunggah dokumen teknis secara jelas." },
      s6: { label: "Detail Aplikasi — Tampilan Admin", caption: "Tampilan Admin menambahkan kontrol peninjauan dan status pelacakan pada data aplikasi yang sama — tata letak sama dengan kapabilitas berbasis peran." },
      s7: { label: "Sertifikat Terbit — Pencarian publik", caption: "Daftar pencarian publik untuk memverifikasi keaslian perangkat, merek, atau perusahaan — dapat diakses tanpa login, membangun kepercayaan publik." }
    },
    decisions: {
      label: "Keputusan Desain", title: "Pilihan yang membentuk", titleBold: "kedua pengalaman pengguna",
      d1: { title: "Pemisahan peran secara tegas", p: "Portal pelanggan dan admin menggunakan pedoman desain yang sama namun dengan navigasi terpisah yang disesuaikan secara khusus untuk setiap penggunanya." },
      d2: { title: "Taksonomi lencana status", p: "Sistem status seperti BATAL, DRAFT, SP2 KADALUARSA dibedakan berdasarkan variasi warna. Operator bisa langsung melihat status puluhan pendaftar sekilas saja." },
      d3: { title: "Tampilan antrean live untuk pengguna", p: "Widget 'Informasi Antrean Masuk' mengurangi komplain pengguna dengan memberi transparansi posisi mereka dalam proses." },
      d4: { title: "Dashboard pemasukan PNBP bagi admin", p: "Pemantauan revenue harian maupun bulanan ditampilkan langsung ke dashboard tanpa perlu menunggu bagian pelaporan membuat file spreadsheet." }
    },
    results: {
      label: "Hasil", title: "Apa yang", titleBold: "dicapai",
      r1: { num: "3", label: "Tampilan dirombak ulang — situs publik, pelanggan, dan admin" },
      r2: { num: "2×", label: "Peran pengguna dilayani dengan alur dan struktur navigasi spesifik" },
      r3: { num: "19", label: "Layar final dengan spesifikasi desain khusus untuk pengembang" },
      quote: "\"Redesain ini telah menyatukan dua pengalaman yang berbeda menjadi efisien — admin terbantu dengan kejelasan prioritas dokumen, pelanggan menjadi tahu ke mana status proses mereka berjalan tanpa ragu.\"",
      attr: "— Refleksi proyek, e-Sertifikat Next Gen · 2024"
    },
    reflection: {
      label: "Refleksi", title: "Apa yang saya", titleBold: "pelajari",
      p1: "Ini merupakan salah satu proyek terberat dari sisi fungsional karena melibatkan 2 tipe peran yang harus memakai sistem berbeda dalam satu arsitektur terpadu.",
      p2: "Sistem pemerintah sangat membutuhkan transparansi status, karena ketika berkaitan dengan audit resmi dan biaya PNBP, tidak boleh ada pengguna yang kebingungan mengambil aksi berikutnya.",
      p3: "Dalam proyek masa depan sejenis, pengujian komprehensif terkait form pengisian harus sering disimulasikan agar meminimalkan friksi data masukan."
    },
    allScreens: {
      label: "Semua Layar", title: "Desain Lengkap", titleBold: "di Seluruh Permukaan",
      p: "Seluruh 19 layar yang dihasilkan dari proyek ini — mencakup dari halaman utama sampai penerbitan sertifikat akhir.",
      items: [
        "Login", "Beranda Kustomer", "Beranda Admin", "Aplikasi", "Detail Aplikasi", "Detail Aplikasi Admin", "Sertifikat Terbit",
        "Data Checklist", "Daftar Acuan", "Daftar Balai Uji", "Informasi Pembayaran", "Kontak", "List Berita", "FAQ",
        "Tarif Sertifikat", "Template Dokumen", "Prosedur Sertifikasi", "Prosedur Perubahan", "Redesign Website"
      ]
    }
  },
  mbkm: {
    hero: {
      label: "Studi Kasus",
      title: "Platform",
      titleBold: "MBKM UT",
      sub: "Universitas Terbuka · Pengalaman Terpadu untuk Pendaftaran Mahasiswa",
      tags: ["Figma", "Desain Web", "Pendidikan", "Sistem Platform", "Optimasi UX"],
      meta: {
        client: "Universitas Terbuka", role: "Sole UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    context: {
      label: "Konteks & Tantangan", title: "Menjembatani Jarak:", titleBold: "Alur yang Terputus",
      p1: "Mahasiswa Universitas Terbuka (UT) yang mengikuti program Merdeka Belajar Kampus Merdeka (MBKM) menghadapi hambatan operasional yang tinggi. Mahasiswa harus mendaftar program di portal yang tersebar dan mengunggah berkas secara manual.",
      p2: "Tujuan dari proyek ini adalah menyatukan seluruh proses kegiatan mahasiswa—mulai dari penemuan awal dan pendaftaran hingga penyerahan dokumen—ke dalam pengalaman web yang mulus.",
      cards: [
        { icon: "🔄", title: "Sistem Terputus", p: "Mahasiswa membuang waktu bolak-balik antar portal untuk mendaftar dan submit berkas." },
        { icon: "🚨", title: "Hambatan Berkas", p: "Kepala Program Studi (Kaprodi) menghabiskan waktu berhari-hari memvalidasi dokumen secara manual." },
        { icon: "📉", title: "Informasi Berantakan", p: "Mahasiswa kesulitan menemukan program yang sesuai karena informasi yang tersebar." }
      ]
    },
    users: {
      label: "Demografi Pengguna", title: "Menangani", titleBold: "Stakeholder yang Beragam",
      p: "Platform ini melayani dua kelompok utama dengan literasi teknis dan tujuan yang sangat berbeda:",
      studentBadge: "Mahasiswa",
      studentTitle: "Tujuan & Kebutuhan",
      studentItems: [
        "Mencari program MBKM yang tersedia dengan cepat (magang, pertukaran pelajar, summer course).",
        "Pengajuan berkas yang bebas hambatan dengan indikator status jelas.",
        "Melacak kemajuan pendaftaran di dalam dashboard terpadu."
      ],
      adminBadge: "Kepala Program Studi",
      adminTitle: "Tujuan & Kebutuhan",
      adminItems: [
        "Dashboard informasi padat untuk memindai dan menyetujui pendaftaran mahasiswa.",
        "Daftar data yang dapat difilter untuk menyortir berkas berdasarkan status, nilai, atau program.",
        "Tindakan massal (batch actions) untuk menyetujui beberapa permintaan sekaligus."
      ]
    },
    process: {
      label: "Proses Desain", title: "Dari", titleBold: "Wawasan hingga Prototipe",
      steps: [
        { num: "01", title: "Penemuan & Audit", p: "Memetakan perjalanan mahasiswa dan langkah pendaftaran lama. Mengidentifikasi masalah navigasi." },
        { num: "02", title: "Arsitektur Informasi", p: "Menyatukan portal menjadi satu struktur. Mendefinisikan panduan langkah demi langkah untuk pengiriman dokumen." },
        { num: "03", title: "Sistem Desain Responsif", p: "Membuat pustaka komponen Figma bersama yang berpusat pada identitas Universitas Terbuka." },
        { num: "04", title: "Validasi & Handoff", p: "Menguji prototipe interaktif high-fidelity dengan sampel demografis mahasiswa dan administrator." }
      ]
    },
    screens: {
      label: "Sorotan Desain & UX", title: "Fokus pada", titleBold: "Efisiensi dan Kejelasan",
      s1: { label: "Portal Mahasiswa: Alur Dashboard Tunggal", caption: "Dashboard yang dirombak menawarkan satu titik akses bagi mahasiswa untuk menemukan program dan melacak langkah pendaftaran." },
      s2: { label: "Autentikasi Tanpa Hambatan", caption: "Layar login yang bersih dan kontras tinggi dirancang untuk identifikasi cepat dan rendering mobile yang responsif." },
      s3: { label: "Pendaftaran Program Inbound", caption: "Pendaftaran program multi-langkah memberikan indikator yang jelas mengenai dokumen mana yang sudah lengkap." },
      s4: { label: "Kaprodi: Verifikasi Massal", caption: "Tata letak dashboard yang dioptimalkan untuk Kaprodi yang menampilkan tabel padat yang dapat difilter untuk menangani validasi." },
      s5: { label: "Portal Pertukaran Pelajar", caption: "Panduan validasi yang menjelaskan kursus, kredit, dan persyaratan pertukaran pelajar." },
      s6: { label: "Pilihan Summer Course", caption: "Direktori visual berbasis kartu yang memungkinkan mahasiswa memindai dan memilih kelas musim panas." }
    },
    decisions: {
      label: "Keputusan Desain Utama", title: "Keputusan yang", titleBold: "Membentuk Pengalaman",
      d1: { title: "Arsitektur Platform Terpadu", p: "Dengan menggabungkan pendaftaran dan manajemen dokumen ke dalam satu sistem terpusat, mahasiswa tidak lagi perlu menggunakan aplikasi terpisah." },
      d2: { title: "Penanda Status dibanding Tabel Biasa", p: "Mengganti tampilan tabel bertumpuk di panel Kaprodi dengan pil status berwarna (misal, \"Menunggu Validasi,\" \"Disetujui\") untuk memandu perhatian pengguna ke item mendesak." },
      d3: { title: "Pelacak Kemajuan pada Formulir", p: "Membagi proses pendaftaran yang panjang ke dalam langkah berurutan yang jelas. Menyimpan draf pendaftaran mencegah hilangnya data." },
      d4: { title: "Optimasi Aksesibilitas", p: "Memastikan rasio kontras tinggi dan target ketukan besar untuk inklusivitas berbagai grup pengguna." }
    },
    results: {
      label: "Hasil & Dampak", title: "Peningkatan yang", titleBold: "Terukur",
      r1: { num: "✓", label: "Pendaftaran, portofolio, dan profil mahasiswa disatukan dalam satu portal web" },
      r2: { num: "✓", label: "Peningkatan efisiensi validasi dokumen oleh admin berdasarkan feedback pengguna" },
      r3: { num: "1×", label: "Prototipe Figma lengkap siap handoff diserahkan ke tim pengembang" },
      quote: "\"Menyatukan pengalaman pendaftaran secara dramatis mengurangi permintaan dukungan dari mahasiswa selama siklus MBKM.\"",
      attr: "TIM ADMIN UNIVERSITAS TERBUKA"
    },
    reflection: {
      label: "Refleksi Utama", title: "Apa yang Saya", titleBold: "Pelajari",
      p1: "Merancang untuk institusi publik dengan kelompok demografis yang besar dan beragam berarti memprioritaskan aksesibilitas di atas segalanya. Desain visual yang terlihat sangat bagus hanya berhasil jika dapat dirender secara efisien pada perangkat yang standar.",
      p2: "Bekerja sama dengan pengembang selama proses handoff sangat penting untuk memastikan tampilan tabel yang kompleks dan form responsif dibangun persis seperti yang ditentukan dalam tata letak.",
      p3: "Pentingnya indikator status yang jelas sangatlah besar; itu secara fundamental mengubah cara admin memproses pendaftaran."
    },
    allScreens: {
      label: "Direktori UI", title: "Semua", titleBold: "Layar Utama",
      items: [
        "Portal Login", "Portal Login (Error)", "Portal Utama MBKM", "Dashboard Mahasiswa (Umum)",
        "Dashboard Mahasiswa (Daftar Program)", "Dashboard Mahasiswa (Detail Program)", "Dashboard Mahasiswa (Pelacakan Status)",
        "Registrasi Inbound (Umum)", "Registrasi Inbound (Formulir)", "Pertukaran Pelajar (Umum)", "Pertukaran Pelajar (Pemetaan)",
        "Pertukaran Pelajar (Aplikasi)", "Pertukaran Pelajar (Review)", "Pertukaran Pelajar (Pengiriman)", "Summer Course (Umum)",
        "Summer Course (Detail)", "Summer Course (Silabus)", "Summer Course (Jadwal)", "Summer Course (Pendaftaran)",
        "Summer Course (Berhasil)", "Portal Kaprodi (Dashboard Utama)", "Portal Kaprodi (Daftar Validasi)",
        "Portal Kaprodi (Review Berkas)", "Portal Wakil Dekan (Panel Persetujuan)", "Portal Admin (Laporan Validasi)",
        "Dashboard Admin (Konfigurasi Sistem)", "Dashboard Admin (Panel Log)", "Dashboard Admin (Grafik Analitik)",
        "Dashboard Admin (Audit Berkas)", "Dashboard Admin (Data Mahasiswa)", "Dashboard Admin (Data Fakultas)", "Dashboard Admin (Data Mitra)"
      ]
    }
  },
  ttm: {
    hero: {
      label: "Studi Kasus",
      title: "Aplikasi Mobile",
      titleBold: "TTM UT",
      sub: "Universitas Terbuka · Pengalaman Kehadiran Lapangan",
      tags: ["Figma", "Desain Aplikasi Mobile", "Pendidikan", "Optimasi UX"],
      meta: {
        client: "Universitas Terbuka", role: "Sole UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    context: {
      label: "Konteks & Tantangan", title: "Menyederhanakan", titleBold: "Kehadiran Lapangan",
      p1: "Mahasiswa Universitas Terbuka (UT) yang berpartisipasi dalam program MBKM membutuhkan cara yang dapat diandalkan untuk mencatat kehadiran harian mereka (Tatap Muka/TTM) saat bekerja di lapangan.",
      p2: "Tantangannya adalah menciptakan aplikasi seluler yang ringan dan berfungsi efisien pada perangkat low-end dan koneksi jaringan yang buruk, mengurangi tingkat kesalahan tinggi dalam pelacakan absensi.",
      cards: [
        { icon: "📡", title: "Koneksi Buruk", p: "Mahasiswa sering mencatat kehadiran di daerah terpencil dengan jaringan yang tidak stabil." },
        { icon: "📱", title: "Keterbatasan Perangkat", p: "Aplikasi harus sangat ringan agar bisa berjalan pada perangkat yang lebih tua." },
        { icon: "🕒", title: "Sensitivitas Waktu", p: "Proses check-in harus cepat dan tanpa hambatan agar tidak mengganggu aktivitas." }
      ]
    },
    users: {
      label: "Demografi Pengguna", title: "Mengatasi", titleBold: "Kebutuhan Mahasiswa",
      p: "Pengguna utama adalah mahasiswa yang membutuhkan alat yang cepat dan dapat diandalkan:",
      studentBadge: "Mahasiswa",
      studentTitle: "Tujuan & Kebutuhan",
      studentItems: [
        "Mencatat kehadiran dengan mudah saat di perjalanan.",
        "Umpan balik visual yang jelas untuk check-in yang berhasil.",
        "Melihat jadwal kelas dan rekaman yang akan datang."
      ],
      adminBadge: "Tutor",
      adminTitle: "Tujuan & Kebutuhan",
      adminItems: [
        "Melacak kehadiran mahasiswa secara akurat.",
        "Mengelola detail dan ketersediaan kelas.",
        "Antarmuka sederhana untuk memverifikasi partisipasi."
      ]
    },
    process: {
      label: "Proses Desain", title: "Dari", titleBold: "Wawasan hingga Prototipe",
      steps: [
        { num: "01", title: "Riset Lapangan", p: "Mewawancarai mahasiswa untuk memahami kendala lingkungan selama operasi lapangan." },
        { num: "02", title: "Optimasi Alur", p: "Merancang alur check-in linear tanpa gangguan yang meminimalkan jumlah ketukan yang diperlukan." },
        { num: "03", title: "Wireframing", p: "Membuat wireframe yang mengutamakan seluler dengan target ketukan besar dan kontras tinggi." },
        { num: "04", title: "Prototipe", p: "Mengirimkan prototipe interaktif yang divalidasi melalui tes penyelesaian tugas." }
      ]
    },
    screens: {
      label: "Sorotan Desain & UX", title: "Fokus pada", titleBold: "Kejelasan Seluler",
      s1: { label: "Onboarding & Login", caption: "Alur onboarding yang menyambut menuju layar login yang disederhanakan, dioptimalkan untuk akses cepat." },
      s2: { label: "Dashboard Kehadiran", caption: "Pusat utama bagi mahasiswa untuk melihat status check-in dan kelas mendatang." },
      s3: { label: "Alur Check-in", caption: "Antarmuka pencatatan kehadiran satu ketukan tanpa hambatan dengan konfirmasi visual langsung." },
      s4: { label: "Detail Kelas", caption: "Tampilan komprehensif dari detail jadwal, info tutor, dan dokumen terkait." },
      s5: { label: "Daftar Ketersediaan Tutor", caption: "Antarmuka jelas bagi mahasiswa untuk mengecek status ketersediaan masing-masing tutor." },
      s6: { label: "Rekaman & Pengaturan", caption: "Akses mudah ke rekaman kelas dan opsi manajemen akun." }
    },
    decisions: {
      label: "Keputusan Desain Utama", title: "Keputusan yang", titleBold: "Membentuk Pengalaman",
      d1: { title: "Check-In Satu Ketukan", p: "Mengurangi proses logging absensi menjadi satu tombol aksi utama untuk mengakomodasi skenario lapangan." },
      d2: { title: "Target Ketukan Besar", p: "Memastikan semua elemen interaktif memenuhi standar aksesibilitas perangkat seluler, mencegah salah ketuk." },
      d3: { title: "Visual Kontras Tinggi", p: "Menggunakan warna tebal dan tipografi yang jelas untuk memastikan keterbacaan di luar ruangan yang terang." },
      d4: { title: "Status Error yang Jelas", p: "Merancang pesan error yang ramah dan dapat ditindaklanjuti untuk masalah konektivitas, mencegah frustrasi." }
    },
    results: {
      label: "Hasil & Dampak", title: "Capaian", titleBold: "Desain",
      r1: { num: "✓", label: "Alur check-in satu ketuk menggantikan absensi kertas manual di sesi lapangan" },
      r2: { num: "✓", label: "UI ramah offline dan indikator status yang jelas dirancang untuk area jaringan tidak stabil" },
      r3: { num: "18", label: "Layar high-fidelity diserahkan mencakup seluruh alur mahasiswa dan tutor" },
      quote: "\"Aplikasi seluler baru ini membuat pelacakan aktivitas lapangan kami sama sekali bebas repot.\"",
      attr: "PERWAKILAN MAHASISWA MBKM"
    },
    reflection: {
      label: "Refleksi Utama", title: "Apa yang Saya", titleBold: "Pelajari",
      p1: "Merancang untuk ponsel memerlukan penentuan prioritas yang kejam. Setiap elemen di layar harus memiliki tujuan yang jelas.",
      p2: "Memahami lingkungan fisik tempat aplikasi digunakan (misalnya, di luar ruangan, jaringan tidak stabil) sama pentingnya dengan memahami perangkat lunaknya.",
      p3: "Umpan balik yang sederhana dan cepat sangat penting untuk membangun kepercayaan dalam aplikasi seluler."
    },
    allScreens: {
      label: "Direktori UI", title: "Semua", titleBold: "Layar Utama",
      items: [
        "Onboarding", "Login", "Verifikasi OTP", "Dashboard (Tidak Ada Data)", "Dashboard (Ada Permintaan)",
        "Dashboard (Belum Absensi)", "Dashboard (Sudah Absensi)", "Dashboard (Selesai)", "Absensi",
        "Presensi Masuk", "Presensi Keluar", "Detail Kelas", "Jadwal Kelas", "List Recording",
        "Form Kesediaan Tutor", "List Kesediaan Tutor", "Pengaturan", "Logout"
      ]
    }
  },
  barata: {
    hero: {
      label: "Studi Kasus",
      title: "Barata",
      titleBold: "Early Warning System",
      sub: "Platform monitoring telemetri hidrologi & peringatan dini real-time",
      tags: ["Figma", "Desain Dashboard", "Pemetaan GIS", "Telemetri", "Pemerintah", "Desain UX"],
      meta: {
        client: "Barata Jabar", role: "UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    overview: {
      label: "Gambaran Umum",
      title: "Sistem monitoring sumber daya air",
      titleBold: "untuk mitigasi bencana banjir",
      p1: "Barata adalah dashboard web khusus yang dirancang untuk membantu instansi pengelolaan air dan tim penanggulangan bencana. Platform ini mengintegrasikan sistem informasi geografis (GIS) dan data telemetri real-time untuk memantau tinggi muka air sungai dan curah hujan.",
      p2: "Sistem ini berfungsi sebagai antarmuka ruang kontrol pusat untuk melacak ambang batas kritis, memvisualisasikan infografis dampak cuaca, dan mengirimkan peringatan banjir otomatis ke daerah hilir."
    },
    problem: {
      label: "Masalah", title: "Data sensor terfragmentasi", titleBold: "memperlambat peringatan kritis",
      p: "Engineer hidrologi harus mengandalkan sistem pemantauan terpisah untuk telemetri hujan, alat ukur sungai, dan layanan peta. Dalam skenario mitigasi banjir yang kritis, fragmentasi ini menunda pengambilan keputusan.",
      cards: [
        { icon: "📡", title: "Telemetri Terpisah", p: "Data sensor curah hujan dan tinggi muka air tersebar di tabel-tabel terisolasi yang tidak real-time." },
        { icon: "🗺️", title: "Minim Konteks GIS", p: "Engineer tidak dapat memvisualisasikan aliran air dan pelanggaran ambang batas secara geografis secara real-time." },
        { icon: "🚨", title: "Pengiriman Peringatan Manual", p: "Belum ada mekanisme peringatan otomatis, membutuhkan verifikasi manual yang lambat saat badai." }
      ]
    },
    process: {
      label: "Proses", title: "Dari kebutuhan sistem ke", titleBold: "dashboard GIS",
      steps: [
        { num: "01", title: "Riset Domain", p: "Mempelajari metrik pemantauan hidrologi (tingkat siaga SIAGA I, II, III) dan pola sensor telemetri." },
        { num: "02", title: "Restrukturisasi Informasi", p: "Mengatur ulang UI untuk menggabungkan tata letak peta dengan kartu telemetri langsung dan indikator status siaga." },
        { num: "03", title: "Desain Integrasi GIS", p: "Mendesain layer peta yang mengaktifkan info cuaca, zona rawan banjir, dan posisi sensor." },
        { num: "04", title: "Pengembangan Komponen", p: "Membangun widget untuk grafik tinggi muka air, peringatan aktif, dan tabel telemetri di Figma." }
      ]
    },
    screens: {
      label: "Layar Utama", title: "Layar dashboard", titleBold: "telemetri dan peringatan",
      s1: { label: "Dashboard Utama", caption: "Tampilan pemantauan pusat yang menunjukkan peta GIS langsung terintegrasi dengan cuaca, peringatan banjir aktif, dan pembacaan sensor terbaru." },
      s2: { label: "Detail Telemetri", caption: "Layar detail yang menampilkan log sensor historis, grafik tren tinggi muka air, dan konfigurasi ambang batas." },
      s3: { label: "Infografis Bencana", caption: "Grafik analitis visual yang menampilkan tren curah hujan, indeks kerentanan banjir, dan statistik dampak populasi." },
      s4: { label: "Sistem Peringatan Dini", caption: "Antarmuka untuk membuat, memverifikasi, dan mengirimkan peringatan siaga ke koordinator bencana daerah." },
      s5: { label: "Layanan Layer Peta", caption: "Panel pengaturan untuk mengaktifkan layer GIS spesifik seperti batas cekungan, heatmap alat curah hujan, dan data kelembaban tanah." },
      s6: { label: "Popup Laporan Peringatan", caption: "Form popup bebas hambatan untuk meninjau laporan anomali sensor secara cepat dan mencatat tindakan verifikasi." },
      s7: { label: "Panel Kontak", caption: "Direktori koordinasi dengan saluran kontak untuk operator situs regional, petugas tanggap darurat, dan engineer lapangan." }
    },
    decisions: {
      label: "Keputusan Desain", title: "Keputusan yang membentuk", titleBold: "dashboard operasional",
      d1: { title: "Tata letak berpusat pada peta", p: "Menempatkan peta GIS sebagai kanvas utama. Ini memberikan konteks geografis langsung untuk pembacaan sensor, memungkinkan engineer melihat dampak curah hujan terhadap cekungan hilir." },
      d2: { title: "Bar status ambang batas triple", p: "Mendesain panel status SIAGA yang jelas. Peringatan berkode warna (hijau, kuning, oranye, merah) secara instan menunjukkan peringatan aktif." },
      d3: { title: "Kontrol layer overlay", p: "Membuat pengelola layer geser untuk mengaktifkan layer (radar hujan, stasiun telemetri, zona risiko), menjaga peta tetap bersih sambil menawarkan overlay analitis." },
      d4: { title: "Widget pengiriman terintegrasi", p: "Mendesain daftar periksa peringatan langsung di samping detail telemetri untuk memfasilitasi verifikasi peringatan sekali klik." }
    },
    results: {
      label: "Hasil", title: "Efisiensi operasional yang", titleBold: "diberikan",
      r1: { num: "1 tampilan", label: "Mengkonsolidasikan peta, telemetri, dan status peringatan ke dalam satu antarmuka operasional" },
      r2: { num: "SIAGA", label: "Visibilitas status yang jelas untuk peringatan aktif di seluruh wilayah" },
      r3: { num: "7", label: "Key UI templates dirancang dan diverifikasi dengan stakeholder proyek" },
      quote: '"Menggabungkan layer GIS langsung dengan pembacaan alat ukur kami telah mengubah cara kami memantau kesehatan daerah aliran sungai selama cuaca ekstrem."',
      attr: "— Stakeholder Divisi Hidrologi, 2024"
    },
    reflection: {
      label: "Refleksi", title: "Apa yang saya pelajari", titleBold: "dari Barata",
      p1: "Mendesain untuk teknik dan manajemen bencana memerlukan presisi mutlak. Gaya visual harus mendukung pembacaan cepat tanpa kesalahan di bawah tekanan.",
      p2: "Menggabungkan data spasial GIS yang kompleks dengan telemetri numerik real-time adalah tantangan desain informasi yang besar. Hierarki dicapai dengan meredam fitur peta yang tidak mendesak.",
      p3: "Jika saya melanjutkan proyek ini, saya akan merancang peringatan seluler untuk petugas lapangan yang merespons sensor di cekungan."
    },
    allScreens: {
      label: "Semua Layar", title: "Desain Lengkap", titleBold: "di Seluruh Tampilan",
      p: "Semua layar yang dikirimkan sebagai bagian dari redesain proyek Barata, mencakup tampilan peta GIS, daftar telemetri, pengaturan peringatan, dan infografis.",
      items: [
        "Beranda (Dashboard Utama)", "Peringatan Dini (EWS)", "Detail Data (Telemetri)", "Infografis Bencana", "Layer Service (Pengaturan GIS)", "Pop up Laporan", "Kontak"
      ]
    }
  },
  hidrolika: {
    hero: {
      label: "Studi Kasus",
      title: "Web",
      titleBold: "Hidrolika",
      sub: "BWS · Platform pemantauan telemetri stasiun dan data hidrologi",
      tags: ["Figma", "Desain Dashboard", "Telemetri", "Hidrologi", "Pemerintah", "Desain UX"],
      meta: {
        client: "Balai Hidrolika", role: "UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    overview: {
      label: "Gambaran Umum",
      title: "Portal hidrologi khusus",
      titleBold: "untuk pemantauan stasiun dan data telemetri",
      p1: "Web Hidrolika adalah dashboard web yang dirancang bagi engineer hidrolika untuk memantau data telemetri hidrologi, termasuk tinggi muka air sungai, akumulasi curah hujan, dan kesehatan sensor stasiun.",
      p2: "Sistem ini memungkinkan operator untuk memeriksa detail stasiun telemetri tertentu, meninjau log sensor historis, memeriksa status baterai stasiun, dan memastikan konsistensi data sensor."
    },
    problem: {
      label: "Masalah", title: "Log telemetri terisolasi", titleBold: "menyulitkan audit status sensor",
      p: "Engineer kesulitan memantau status stasiun telemetri dan alat ukur curah hujan individual karena database yang terisolasi dan tabel data yang kurang terstruktur, memperlambat deteksi kerusakan sensor.",
      cards: [
        { icon: "📈", title: "Log Terisolasi", p: "Data log tersimpan dalam tabel statis non-interaktif yang menyulitkan pembacaan tren." },
        { icon: "🔋", title: "Status Sensor Tersembunyi", p: "Kesehatan sensor, level baterai stasiun, dan masalah konektivitas tidak terlihat pada tabel utama." },
        { icon: "⚙️", title: "Audit Stasiun Rumit", p: "Melakukan audit stasiun tunggal mengharuskan pencarian manual melintasi banyak file indeks." }
      ]
    },
    process: {
      label: "Proses Desain", title: "Dari log sensor mentah", titleBold: "ke portal telemetri",
      steps: [
        { num: "01", title: "Audit Telemetri", p: "Meninjau metrik hidrologi, log sensor, dan workflow operasional harian engineer BWS." },
        { num: "02", title: "Struktur Layout", p: "Mendesain struktur list-detail untuk memungkinkan transisi mulus dari direktori stasiun ke halaman detail." },
        { num: "03", title: "Visualisasi Tren", p: "Membuat grafik data historis interaktif untuk memantau tinggi muka air dan curah hujan." },
        { num: "04", title: "Indikator Kesehatan", p: "Menambahkan status sensor (Aktif, Peringatan, Offline) langsung ke dalam daftar stasiun telemetri." }
      ]
    },
    screens: {
      label: "Layar Utama", title: "Layar pemantauan", titleBold: "stasiun hidrologi",
      s1: { label: "Portal Login", caption: "Layar login split-screen aman dengan branding khusus Web Hidrolika, mengutamakan kejelasan tata letak." },
      s2: { label: "Detail Telemetri", caption: "Detail stasiun telemetri yang menampilkan tabel log historis dan grafik tren sensor yang interaktif." },
      s3: { label: "Beranda Utama", caption: "Tampilan umum seluruh stasiun telemetri antar wilayah dengan status real-time dan pembacaan sensor." }
    },
    decisions: {
      label: "Keputusan Desain", title: "Keputusan yang menyederhanakan", titleBold: "audit stasiun",
      d1: { title: "Integrasi grafik interaktif", p: "Mengganti tabel log statis dengan grafik garis interaktif untuk melihat tren air dalam 24 jam, 7 hari, atau 30 hari secara sekilas." },
      d2: { title: "Card ringkasan stasiun", p: "Membuat card informasi di bagian atas halaman detail untuk menunjukkan status aktif, sisa baterai stasiun, dan kekuatan sinyal." },
      d3: { title: "Warna status konsisten", p: "Menerapkan indikator status (Hijau = Aktif, Kuning = Peringatan, Merah = Offline) untuk mendeteksi anomali stasiun secara cepat." },
      d4: { title: "Filter log terpadu", p: "Menempatkan tools penyaringan data langsung di samping tabel log stasiun untuk memudahkan pencarian berdasarkan tanggal atau tipe sensor." }
    },
    results: {
      label: "Hasil", title: "Desain pemantauan hidrologi", titleBold: "yang diserahkan",
      r1: { num: "✓", label: "Direktori stasiun, detail telemetri, dan tampilan log disatukan dalam satu antarmuka" },
      r2: { num: "✓", label: "Indikator baterai, kekuatan sinyal, dan status stasiun dirancang untuk keterbacaan operator" },
      r3: { num: "3", label: "Template UI utama dirancang dan disetujui untuk handoff ke tim developer" },
      quote: '"Grafik interaktif dan widget baterai stasiun menghemat waktu kami dalam audit sensor mingguan."',
      attr: "— Engineer Divisi Hidrologi, 2024"
    },
    reflection: {
      label: "Refleksi", title: "Apa yang saya pelajari", titleBold: "dari Web Hidrolika",
      p1: "Mendesain antarmuka telemetri memerlukan struktur yang sangat rapi. Saat pengguna menangani ratusan angka, keterbacaan data harus menjadi prioritas utama.",
      p2: "Tantangan terbesarnya adalah mengatur log historis yang sangat padat. Integrasi grafik tren di samping tabel log terbukti sangat efektif.",
      p3: "Jika dikembangkan lebih lanjut, saya ingin merancang sistem peringatan otomatis jika level baterai stasiun turun di bawah 15%."
    },
    allScreens: {
      label: "Semua Layar", title: "Desain Lengkap", titleBold: "di Seluruh Tampilan",
      p: "Semua layar yang dikirimkan sebagai bagian dari proyek Web Hidrolika, mencakup login, daftar stasiun, dan detail stasiun.",
      items: [
        "Login", "Login Web Hidrolika", "Web Hidrolika Main"
      ]
    }
  },
  irigasi: {
    hero: {
      label: "Studi Kasus",
      title: "Web",
      titleBold: "Irigasi",
      sub: "BWS · Platform penjadwalan distribusi air irigasi & pelaporan infrastruktur",
      tags: ["Figma", "Desain Web", "Manajemen Irigasi", "Sistem Pelaporan", "Pemerintah"],
      meta: {
        client: "Balai Teknik Irigasi", role: "UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    overview: {
      label: "Gambaran Umum",
      title: "Sistem informasi irigasi",
      titleBold: "untuk distribusi air yang efisien",
      p1: "Web Irigasi adalah aplikasi web khusus yang dirancang bagi dinas pengairan regional untuk mengatur jadwal pembagian air, memantau status saluran irigasi, dan mengumpulkan laporan masyarakat terkait kerusakan saluran.",
      p2: "Melalui antarmuka yang bersih, administrator dapat mengoordinasikan debit aliran air, mengalokasikan sumber daya pengairan, dan menjadwalkan perbaikan berdasarkan data kebutuhan di lapangan."
    },
    problem: {
      label: "Masalah", title: "Pencatatan & pelaporan manual", titleBold: "menghambat pemeliharaan saluran",
      p: "Sistem irigasi tradisional sangat bergantung pada kertas dan pelaporan lambat, menyulitkan pendeteksian ketimpangan air atau penanganan kerusakan saluran pengairan secara cepat.",
      cards: [
        { icon: "📈", title: "Distribusi Tidak Merata", p: "Tanpa pemantauan terpusat, sebagian lahan sawah mendapat air berlebih sementara lahan lainnya mengalami kekeringan." },
        { icon: "📝", title: "Keterlambatan Laporan", p: "Laporan kerusakan tanggul atau penyumbatan saluran butuh waktu berminggu-minggu untuk sampai ke dinas." },
        { icon: "📊", title: "Database Tersebar", p: "Data aset irigasi, sejarah pemeliharaan, dan operator pintu air tersebar di berbagai kantor wilayah." }
      ]
    },
    process: {
      label: "Proses Desain", title: "Merancang portal irigasi", titleBold: "yang terintegrasi",
      steps: [
        { num: "01", title: "Analisis Lapangan", p: "Mewawancarai petugas pengairan dan staf pemeliharaan untuk memetakan alur pelaporan dan penjadwalan pintu air." },
        { num: "02", title: "Arsitektur Informasi", p: "Mengelompokkan fitur ke dalam tiga modul utama: Penjadwalan Distribusi, Pelaporan Kerusakan, dan Manajemen Aset Saluran." },
        { num: "03", title: "Desain Antarmuka", p: "Mendesain layout list yang bersih, modal detail informasi, dan pelacak progress untuk memudahkan pengelolaan data." },
        { num: "04", title: "Pembuatan Prototipe", p: "Menghubungkan layar di Figma untuk mensimulasikan alur pembuatan laporan dan penyusunan jadwal pembagian air." }
      ]
    },
    screens: {
      label: "Layar Utama", title: "Layar utama portal", titleBold: "irigasi",
      s1: { label: "Dashboard Utama", caption: "Gambaran umum saluran irigasi aktif, jadwal distribusi musiman, dan notifikasi pemeliharaan terkini." },
      s2: { label: "Detail Berita & Pengumuman", caption: "Halaman informasi pengumuman pembagian air regional, berita cuaca, dan template laporan masyarakat." },
      s3: { label: "Desain Portal Utuh", caption: "Mockup high-fidelity yang menunjukkan alur navigasi lengkap untuk manajemen saluran irigasi dan pelaporan." }
    },
    decisions: {
      label: "Keputusan Desain", title: "Keputusan yang menyederhanakan", titleBold: "admin irigasi",
      d1: { title: "Tampilan list-detail ringkas", p: "Menggunakan tampilan list dengan panel detail geser (expandable side-panel) untuk menjaga pengguna tetap dalam konteks data utama." },
      d2: { title: "Indikator jadwal visual", p: "Membuat label status berwarna (Aktif, Terjadwal, Pemeliharaan) untuk memudahkan pemindaian jadwal pembagian air." },
      d3: { title: "Alur pelaporan ringkas", p: "Mendesain alur input laporan kerusakan yang sederhana dilengkapi dengan fitur unggah foto untuk mempercepat tindak lanjut tim perbaikan." },
      d4: { title: "Grid responsif untuk tablet", p: "Memastikan tabel jadwal dan form pelaporan dioptimalkan untuk perangkat tablet yang sering digunakan petugas di lapangan." }
    },
    results: {
      label: "Hasil", title: "Capaian", titleBold: "desain yang diserahkan",
      r1: { num: "✓", label: "Penjadwalan irigasi, pelaporan kerusakan, dan pemantauan saluran disatukan dalam satu web" },
      r2: { num: "✓", label: "Alur pelaporan yang disederhanakan dengan fitur unggah foto untuk petugas lapangan" },
      r3: { num: "3", label: "Modul utama — penjadwalan, pelaporan, pemantauan — selesai dirancang dan diserahkan" },
      quote: '"Tampilan jadwal terpadu memudahkan kami dalam menyeimbangkan kebutuhan air di berbagai sub-sektor pertanian."',
      attr: "— Perwakilan Dinas Pengairan Regional, 2024"
    },
    reflection: {
      label: "Refleksi", title: "Apa yang saya pelajari", titleBold: "dari Barata Irigasi",
      p1: "Proyek ini membuktikan bahwa aplikasi digital dapat menyederhanakan pengelolaan infrastruktur publik secara signifikan. Antarmuka harus tetap sederhana agar mudah digunakan oleh berbagai profil pengguna.",
      p2: "Tantangan utamanya adalah menstrukturkan jadwal pembagian air musiman. Pengelompokan yang jelas dan kode warna terbukti sangat membantu.",
      p3: "Untuk masa depan, saya ingin merancang aplikasi mobile khusus bagi para petani untuk mengajukan alokasi air dan melaporkan kebocoran saluran secara langsung."
    },
    allScreens: {
      label: "Semua Layar", title: "Desain Lengkap", titleBold: "di Seluruh Tampilan",
      p: "Semua layar yang dikirimkan sebagai bagian dari proyek Barata Irigasi, mencakup dashboard jadwal, detail berita, dan mockup portal.",
      items: [
        "Dashboard", "Detail Berita", "Web Irigasi v1"
      ]
    }
  },
  petsu: {
    hero: {
      label: "Studi Kasus",
      title: "Petsu",
      titleBold: "E-Commerce",
      sub: "Konsep pengalaman belanja mobile yang seamless khusus untuk kebutuhan hewan peliharaan",
      tags: ["Figma", "Aplikasi Mobile", "E-Commerce", "Desain UI/UX", "Riset Pengguna", "Prototyping"],
      meta: {
        client: "Proyek Pribadi", role: "Sole UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    overview: {
      label: "Gambaran Umum",
      title: "Pendekatan modern dan bersih",
      titleBold: "untuk belanja kebutuhan hewan via seluler",
      p1: "Petsu adalah konsep aplikasi mobile high-fidelity yang didedikasikan untuk kebutuhan hewan peliharaan. Platform ini berfokus pada penyederhanaan pengalaman belanja bagi pemilik hewan melalui kategorisasi yang jelas, pemesanan ulang cepat, dan bahasa visual yang menarik.",
      p2: "Desain ini mewakili siklus desain produk lengkap dari ujung ke ujung, mulai dari wawancara pengguna dan pembuatan persona hingga wireframe, prototipe interaktif, dan paket studi kasus UI lengkap."
    },
    problem: {
      label: "Masalah", title: "Friksi belanja hewan online", titleBold: "menyebabkan pembatalan belanja",
      p: "Banyak pemilik hewan merasa belanja kebutuhan online membosankan karena antarmuka yang penuh sesak, opsi berlangganan pakan yang membingungkan, serta kurangnya kejelasan ukuran produk.",
      cards: [
        { icon: "🛒", title: "Checkout Rumit", p: "Terlahu banyak langkah dan biaya tersembunyi saat checkout menyebabkan tingginya pembatalan belanja." },
        { icon: "🐶", title: "Pengalaman Impersonal", p: "Pemilik hewan menginginkan saran yang disesuaikan dengan jenis, usia, dan kebutuhan diet spesifik hewan mereka." },
        { icon: "📦", title: "Langganan Kaku", p: "Mengatur pengiriman berulang untuk makanan hewan sering kali sulit dikonfigurasi pada perangkat seluler." }
      ]
    },
    process: {
      label: "Proses Desain", title: "Dari riset pengguna hingga", titleBold: "prototipe interaktif yang rapi",
      steps: [
        { num: "01", title: "Riset Pengguna", p: "Melakukan wawancara dengan pemilik hewan untuk memetakan kebiasaan pembelian dan kebutuhan berulang mereka." },
        { num: "02", title: "Pemetaan Journey", p: "Membuat persona pengguna dan wireframe alur utama seperti checkout cepat dan langganan pakan." },
        { num: "03", title: "Identitas Visual", p: "Mengembangkan identitas brand yang hangat menggunakan nada oranye lembut, ilustrasi lucu, dan tipografi ramah." },
        { num: "04", title: "Prototyping Interaktif", p: "Membangun layar high-fidelity dan menghubungkannya di Figma untuk mensimulasikan checkout dan profil secara realistis." }
      ]
    },
    screens: {
      label: "Layar Utama", title: "Sorotan UI mobile", titleBold: "dari prototipe",
      s1: { label: "Onboarding Aplikasi", caption: "Layar onboarding yang ramah memperkenalkan pembuatan profil hewan peliharaan yang dipersonalisasi." },
      s2: { label: "Beranda Dashboard", caption: "Feed beranda yang dipersonalisasi menampilkan rekomendasi khusus hewan dan shortcut pemesanan ulang cepat." },
      s3: { label: "Detail Produk", caption: "Deskripsi produk yang jelas dengan opsi toggle untuk paket langganan bulanan dan transparansi bahan." },
      s4: { label: "Pengaturan Profil Hewan", caption: "Profil pengguna tempat detail hewan (jenis, usia, alergi) dikonfigurasi untuk memfilter item toko." },
      s5: { label: "Keranjang Belanja", caption: "Antarmuka keranjang yang bersih menampilkan rincian harga yang jelas dan diskon otomatis." },
      s6: { label: "Halaman Checkout", caption: "Checkout 3 langkah yang seamless dengan beberapa metode pembayaran dan pilihan jadwal pengiriman." },
      s7: { label: "Pelacakan Pesanan", caption: "Pelacakan pengiriman makanan hewan secara real-time dengan notifikasi status." }
    },
    decisions: {
      label: "Keputusan Desain", title: "Keputusan yang mengoptimalkan", titleBold: "tingkat konversi mobile",
      d1: { title: "Filter profil hewan", p: "Memungkinkan pengguna membuat profil untuk hewan mereka. Aplikasi kemudian menyaring item yang mengandung alergen secara otomatis." },
      d2: { title: "Langganan otomatis sekali klik", p: "Mendesain sakelar sederhana untuk langganan bulanan berulang langsung di kartu produk untuk menghemat waktu." },
      d3: { title: "Kehangatan visual", p: "Menggunakan palet warna hangat yang dipadukan dengan ilustrasi kustom untuk membangun hubungan emosional yang ramah." },
      d4: { title: "Formulir checkout progresif", p: "Membagi alur checkout menjadi bagian-bagian yang dapat dilipat pada satu halaman, meminimalkan loading halaman." }
    },
    results: {
      label: "Hasil", title: "Apa yang proyek ini", titleBold: "tunjukkan",
      r1: { num: "4.8★", label: "Peringkat kebergunaan rata-rata dari sesi pengujian kualitatif" },
      r2: { num: "3 langkah", label: "Untuk menyelesaikan checkout — dioptimalkan dari alur e-commerce biasa" },
      r3: { num: "100%", label: "Sistem desain Figma lengkap yang dibangun dengan variabel dan komponen interaktif" },
      quote: "\"Studi kasus Petsu menunjukkan pemahaman kuat tentang desain yang berpusat pada pengguna, mengubah pain point pemilik hewan menjadi pengalaman mobile hangat.\"",
      attr: "— Ulasan Studi Kasus UI/UX"
    },
    reflection: {
      label: "Refleksi", title: "Apa yang saya pelajari", titleBold: "dari Petsu",
      p1: "Merancang Petsu mengajarkan saya kekuatan mikro-kopi dan gaya visual yang hangat dalam e-commerce konsumen untuk kenyamanan pengguna.",
      p2: "Prototyping mobile di Figma mendorong saya mempelajari interaksi lanjutan, seperti varian komponen bersarang untuk keranjang belanja.",
      p3: "Jika dilanjutkan, saya ingin mengeksplorasi integrasi dengan API rekam medis hewan untuk merekomendasikan diet medis khusus."
    },
    allScreens: {
      label: "Galeri UI", title: "Layar Aplikasi", titleBold: "dan Dokumen Studi Kasus",
      p: "Di bawah ini Anda dapat mengakses dokumen studi kasus UI lengkap. PDF komprehensif ini mencakup riset pengguna, wireframe, panduan gaya, dan komponen desain.",
      items: [
        "Splash Onboarding", "Beranda Toko", "Kategori Pakan", "Halaman Detail Produk", "Keranjang Belanja", "Formulir Checkout", "Layar Berhasil"
      ]
    }
  }
};
