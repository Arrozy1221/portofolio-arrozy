export const caseStudiesEn = {
  simontila: {
    hero: {
      label: "Case Study · 2024",
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
      r1: { num: "30%", label: "Improvement in data management clarity — stakeholder evaluation post-delivery" },
      r2: { num: "2 clicks", label: "To complete core admin tasks — down from 4–5 navigational steps" },
      r3: { num: "1×", label: "Component library delivered for faster, consistent developer handoff" },
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
      label: "Case Study · 2024",
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
      label: "Case Study · 2024",
      title: "MBKM UT",
      titleBold: "& TTM App",
      sub: "Universitas Terbuka · Unified Student Internship & Attendance Experience",
      tags: ["Figma", "Web Design", "Mobile App Design", "Education", "Shared Design System", "UX Optimization"],
      meta: {
        client: "Universitas Terbuka", role: "Sole UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    context: {
      label: "Context & Challenge", title: "Bridging the Gap:", titleBold: "Disconnected Flows",
      p1: "Universitas Terbuka (UT) students participating in the Merdeka Belajar Kampus Merdeka (MBKM) program faced a high friction operational environment. Due to disjointed backend systems, students had to register for programs on one portal, submit dossiers manually, and log their daily attendance (Tatap Muka/TTM) via a completely separate app.",
      p2: "This caused high error rates in attendance tracking, delayed validation of student dossiers, and administrative overhead. The goal of this project was to unify the entire student lifecycle—from initial discovery and registration to daily attendance tracking and final grading—into a seamless experience spanning both a desktop web application and a companion mobile app.",
      cards: [
        { icon: "🔄", title: "Disconnected Systems", p: "Students spent unnecessary time switching between portals to register, submit documents, and record attendance." },
        { icon: "🚨", title: "Dossier Bottlenecks", p: "Program Chairs (Kaprodi) spent days manually validating physical spreadsheets and uploaded PDFs." },
        { icon: "📱", title: "Friction in Mobile UX", p: "Low-end mobile devices struggled with heavy pages, leading to high drop-offs during registration." }
      ]
    },
    users: {
      label: "User Demographics", title: "Addressing", titleBold: "Diverse Stakeholders",
      p: "The platform serves two primary groups with vastly different technical fluencies, environments, and goals:",
      studentBadge: "Students",
      studentTitle: "Goals & Needs",
      studentItems: [
        "Quickly discover available MBKM programs (internships, student exchanges, summer courses).",
        "Friction-free dossier submission with clear status indicators.",
        "Log attendance effortlessly on-the-go via a lightweight mobile check-in app."
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
        { num: "01", title: "Discover & Audit", p: "Mapped student journeys and legacy registration steps. Identified navigation bottlenecks and heavy pages causing timeout errors on mobile browsers." },
        { num: "02", title: "Information Architecture", p: "Consolidated the two portals into a single shared database structure. Defined a step-by-step wizard for dossier submission and designed a lightweight attendance model." },
        { num: "03", title: "Responsive Design System", p: "Created a shared Figma component library centered around UT's corporate identity. Designed highly visible status tags and optimized button tap targets for on-screen ease of use." },
        { num: "04", title: "Validation & Handoff", p: "Tested high-fidelity interactive prototypes with a demographic sample of students and administrators. Provided documented Figma dev-handoff assets with annotated layouts." }
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
      d1: { title: "Consolidated Web & Mobile Attendance", p: "By bringing registration and attendance into one shared system, we eliminated the need for students to switch tools. Attendance updates instantly sync to the course dashboard, resolving delays in admin reporting." },
      d2: { title: "Status Tagging over Dense Spreadsheets", p: "Replaced plain, nested table views in the Kaprodi panel with color-coded status pills (e.g., \"Pending Validation,\" \"Approved,\" \"Resubmission Required\") to guide user attention to urgent items." },
      d3: { title: "Progress Trackers for Forms", p: "Divided long application processes into clear, linear multi-step wizards. Storing draft submissions locally prevented data loss if connection drops occur." }
    },
    results: {
      label: "Results & Impact", title: "Measurable", titleBold: "Improvements",
      r1: { num: "100%", label: "Registration & Attendance Unified" },
      r2: { num: "4.8★", label: "Student Usability Rating" },
      r3: { num: "-60%", label: "Reduction in Administrative Delay" },
      quote: "\"Unifying the registration and attendance experience has dramatically reduced support inquiries from students during the MBKM cycle, while making our dossier verification process substantially cleaner.\"",
      attr: "UNIVERSITAS TERBUKA ADMIN TEAM"
    },
    reflection: {
      label: "Key Reflection", title: "What I", titleBold: "Learned",
      p1: "Designing for public institutions with a large and diverse demographic group means prioritizing accessibility above all. A visual design that looks highly polished is only successful if it can render efficiently on entry-level smartphones and remain clear for users who are not digital natives.",
      p2: "Cooperating with developers during the handoff process was essential to ensure the complex table views and responsive forms were built exactly as specified in the layouts."
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
  }
};

export const caseStudiesId = {
  simontila: {
    hero: {
      label: "Studi Kasus · 2024",
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
      label: "Hasil", title: "Apa yang berubah", titleBold: "setelah rilis",
      r1: { num: "30%", label: "Peningkatan kejelasan manajemen data — evaluasi stakeholder setelah rilis" },
      r2: { num: "2 klik", label: "Untuk menyelesaikan tugas utama admin — turun dari 4-5 langkah navigasi" },
      r3: { num: "1×", label: "Pustaka komponen diserahkan agar proses handoff developer lebih konsisten" },
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
      label: "Studi Kasus · 2024",
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
      label: "Studi Kasus · 2024",
      title: "MBKM UT",
      titleBold: "& Aplikasi TTM",
      sub: "Universitas Terbuka · Pengalaman Terpadu untuk Magang & Kehadiran Mahasiswa",
      tags: ["Figma", "Desain Web", "Desain Aplikasi Mobile", "Pendidikan", "Sistem Desain Bersama", "Optimasi UX"],
      meta: {
        client: "Universitas Terbuka", role: "Sole UI/UX Designer", timeline: "2024", tools: "Figma"
      }
    },
    context: {
      label: "Konteks & Tantangan", title: "Menjembatani Jarak:", titleBold: "Alur yang Terputus",
      p1: "Mahasiswa Universitas Terbuka (UT) yang mengikuti program Merdeka Belajar Kampus Merdeka (MBKM) menghadapi hambatan operasional yang tinggi. Karena sistem backend yang tidak terhubung, mahasiswa harus mendaftar di satu portal, mengunggah berkas secara manual, dan mencatat absensi harian (Tatap Muka/TTM) di aplikasi yang sama sekali berbeda.",
      p2: "Hal ini menyebabkan tingginya tingkat kesalahan pada pencatatan kehadiran, tertundanya validasi berkas oleh admin, serta menambah beban administratif. Tujuan dari proyek ini adalah menyatukan seluruh proses kegiatan mahasiswa—mulai dari pendaftaran hingga absensi harian dan penilaian—ke dalam pengalaman mulus baik di platform web maupun aplikasi ponsel.",
      cards: [
        { icon: "🔄", title: "Sistem Terputus", p: "Mahasiswa membuang waktu bolak-balik antar portal untuk mendaftar, submit berkas, dan absensi." },
        { icon: "🚨", title: "Hambatan Berkas", p: "Kepala Program Studi (Kaprodi) menghabiskan waktu berhari-hari memvalidasi dokumen secara manual." },
        { icon: "📱", title: "Friksi pada Mobile UX", p: "Perangkat seluler spesifikasi rendah kesulitan memuat halaman web yang berat." }
      ]
    },
    users: {
      label: "Demografi Pengguna", title: "Menangani", titleBold: "Stakeholder yang Beragam",
      p: "Platform ini melayani dua kelompok utama dengan literasi teknis, lingkungan, dan tujuan yang sangat berbeda:",
      studentBadge: "Mahasiswa",
      studentTitle: "Tujuan & Kebutuhan",
      studentItems: [
        "Mencari program MBKM yang tersedia dengan cepat (magang, pertukaran pelajar, summer course).",
        "Pengajuan berkas yang bebas hambatan dengan indikator status jelas.",
        "Mencatat kehadiran di lapangan menggunakan aplikasi mobile yang ringan."
      ],
      adminBadge: "Ketua Program Studi (Kaprodi)",
      adminTitle: "Tujuan & Kebutuhan",
      adminItems: [
        "Dashboard dengan informasi padat untuk melihat dan menyetujui registrasi mahasiswa.",
        "Daftar data yang bisa difilter untuk menyortir berkas berdasarkan status kelulusan atau prodi.",
        "Aksi massal untuk menyetujui ratusan permintaan secara serentak."
      ]
    },
    process: {
      label: "Proses Desain", title: "Dari", titleBold: "Wawasan ke Prototipe",
      steps: [
        { num: "01", title: "Eksplorasi & Audit", p: "Memetakan perjalanan pengguna lama. Menemukan masalah koneksi lambat dan kompleksitas formulir panjang." },
        { num: "02", title: "Arsitektur Informasi", p: "Mengonsolidasi dua portal. Membuat panduan setahap demi setahap dalam pengumpulan dokumen penting." },
        { num: "03", title: "Sistem Desain Responsif", p: "Membangun sistem komponen menggunakan Figma. Meningkatkan status lencana secara visual pada tata letak kartu UI." },
        { num: "04", title: "Validasi & Handoff", p: "Pengujian fungsional dasar dan menyerahkan semua status mockup yang dilampirkan anotasi kepada programmer." }
      ]
    },
    screens: {
      label: "Sorotan Desain Visual & UX", title: "Fokus pada", titleBold: "Efisiensi dan Kejelasan",
      s1: { label: "Portal Mahasiswa: Alur Dashboard Tunggal", caption: "Dashboard yang dirombak ulang menawarkan mahasiswa satu titik masuk untuk mencari program, melacak proses, dan buku log harian." },
      s2: { label: "Otentikasi Lancar", caption: "Layar login modern untuk memberikan kontras tinggi bagi pengenalan yang cepat." },
      s3: { label: "Registrasi Program Masuk (Inbound)", caption: "Pendaftaran yang dibuat terarah langkah-demi-langkah sehingga pendaftar tahu kapan berkas mereka lengkap." },
      s4: { label: "Ketua Program Studi: Verifikasi Massal", caption: "Dashboard teroptimasi bagi Kaprodi dengan data tabel yang responsif saat dicari atau dipilih secara ganda." },
      s5: { label: "Portal Pertukaran Pelajar", caption: "Panduan validasi bertahap untuk pemilihan mata kuliah dan SKS." },
      s6: { label: "Pemilihan Summer Course", caption: "Direktori visual berbasis kartu yang membantu mahasiswa memindai course yang masih terbuka." }
    },
    decisions: {
      label: "Keputusan Desain Utama", title: "Keputusan yang", titleBold: "Membentuk Pengalaman",
      d1: { title: "Konsolidasi Kehadiran Web & Mobile", p: "Dengan membawa proses absensi harian dan registrasi dalam satu sistem back-end bersama, pembaruan seketika tercatat di kedua arah tanpa manipulasi lanjutan." },
      d2: { title: "Sistem Tagging daripada Spreadsheet Padat", p: "Mengganti tabel bertingkat dengan lencana berwarna ('Butuh Validasi', 'Disetujui', 'Tolak') sehingga Kaprodi langsung tertuju pada masalah mendesak." },
      d3: { title: "Pelacak Progres Form", p: "Membagi formulir yang tadinya menguras energi menjadi tiga langkah pendek dengan sistem penyimpanan sementara (draft) secara otomatis di perangkat web klien." }
    },
    results: {
      label: "Hasil & Dampak", title: "Peningkatan", titleBold: "Terukur",
      r1: { num: "100%", label: "Penyatuan Proses Kehadiran dan Registrasi" },
      r2: { num: "4.8★", label: "Rating Pengujian Kegunaan Mahasiswa" },
      r3: { num: "-60%", label: "Penurunan Keterlambatan Administrasi" },
      quote: "\"Penyatuan pengalaman absensi dan magang ini berhasil mengurangi tumpukan tanya-jawab mahasiswa yang membludak di waktu penerimaan. Kaprodi pun merasa pekerjaan verifikasi jauh lebih bersih.\"",
      attr: "TIM ADMIN UNIVERSITAS TERBUKA"
    },
    reflection: {
      label: "Refleksi Utama", title: "Apa yang Saya", titleBold: "Pelajari",
      p1: "Merancang antarmuka universitas diakses oleh bermacam usia dosen dan kelas perangkat gawai mahasiswa. Sistem desain harus diprioritaskan untuk layar yang kecil dan konektivitas buruk ketimbang memperbanyak animasi murni visual.",
      p2: "Mengawal kerja developer frontend menjadi faktor penting, sebab banyak formulir detail yang berisiko lepas dari purwarupa aslinya tanpa panduan langsung dari desainer produk."
    },
    allScreens: {
      label: "Direktori UI", title: "Semua", titleBold: "Layar Penting",
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
  }
};
