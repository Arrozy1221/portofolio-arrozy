export const personal = {
  name: "Arrozy Adi Falaqi",
  role: "UI/UX Designer",
  headline: "Designing clear, usable digital products for public services and modern teams.",
  tagline:
    "UI/UX Designer with 2+ years of experience crafting user-centered products across government, education, and internal business systems.",
  location: "Bandung, West Java, Indonesia",
  email: "arrozyadifalaqioi@gmail.com",
  phone: "+6281298023537",
  whatsapp: "6281298023537",
  linkedin: "https://www.linkedin.com/in/arrozy-adi-falaqi-6a25ba14a",
  behance: "https://www.behance.net/arrozyadifalaqi",
  photo: "/photo.jpg",
  available: true,
  responseTime: "Usually replies within 24 hours",
  specialties: [
    "Product Design",
    "Dashboard & Admin UX",
    "Mobile App Design",
    "Design Systems",
  ],
  focusAreas: [
    "Government platforms",
    "Education products",
    "Complex internal tools",
  ],
  bio: [
    "Hi! I'm Arrozy — a UI/UX Designer with a Computer Science background who enjoys turning complex requirements into interfaces that feel simple, structured, and easy to use.",
    "My work covers the full design process, from research and information architecture to wireframing, high-fidelity UI, and interactive prototyping. I’ve worked on public-sector dashboards, education platforms, and internal systems where clarity and usability matter a lot.",
    "I’m especially comfortable collaborating with stakeholders and developers to ship practical solutions — not just polished screens, but designs that support real user goals and business outcomes.",
  ],
  education: {
    university: "Universitas Pendidikan Indonesia",
    major: "Computer Science",
    year: "2019 – 2024",
    gpa: "3.73 / 4.00",
    thesis:
      "Website Design and Development for Orion Guest House Using the Double Diamond Method and Content Marketing",
  },
};

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "5+", label: "Government & Private Clients" },
  { value: "4", label: "Sectors Covered" },
];

export const strengths = [
  {
    title: "Research to execution",
    description:
      "Able to move from user insight and flow mapping into polished, implementation-ready UI.",
  },
  {
    title: "Complex systems thinking",
    description:
      "Comfortable designing dashboards, internal tools, and service platforms with dense information.",
  },
  {
    title: "Cross-functional collaboration",
    description:
      "Works well with stakeholders and developers to balance usability, feasibility, and business needs.",
  },
  {
    title: "Outcome-focused design",
    description:
      "Design decisions are tied to clarity, efficiency, accessibility, and measurable improvement.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand users, business goals, pain points, and the reality of the product constraints.",
  },
  {
    step: "02",
    title: "Structure",
    description:
      "Turn findings into flows, priorities, and information architecture that reduce friction.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Create wireframes and polished UI with strong hierarchy, accessibility, and consistency.",
  },
  {
    step: "04",
    title: "Refine",
    description:
      "Prototype, gather feedback, align with stakeholders, and improve until the solution feels right.",
  },
];

export const experiences = [
  {
    id: 1,
    role: "UI/UX Designer",
    company: "PT Mitra Sinerji Teknoindo",
    location: "Bandung",
    period: "Aug 2023 – Present",
    current: true,
    highlights: [
      "Redesigned Kominfo e-certificate platform — simplified the issuance flow from 7 steps to 4, reducing user confusion reported in stakeholder feedback sessions.",
      "Overhauled Kemendikbud SIMONTILA admin dashboard — restructured navigation and data tables so admins could locate records without switching between multiple pages.",
      "Redesigned PUPR BRAVO project monitoring system — replaced a cluttered legacy interface with a card-based layout that groups projects by status and priority.",
      "Designed Universitas Terbuka MBKM website and mobile attendance app — created a unified flow so students could register and mark attendance from one platform.",
      "Built an interactive analytics dashboard for a government client — consolidated scattered spreadsheet data into filterable visual charts for weekly reporting.",
      "Created a public service mobile app prototype — conducted user interviews with 12 citizens, iterated on pain points, and validated the final flow with usability testing.",
      "Developed an internal company information system — centralized employee data access that previously required manual requests to HR.",
    ],
    tags: ["Figma", "UX Research", "Prototyping", "Government", "Mobile App"],
  },
  {
    id: 2,
    role: "Graphic Designer",
    company: "PT Intelligo",
    location: "Bandung",
    period: "Jan – Mar 2023",
    current: false,
    highlights: [
      "Created social media and marketing assets — designed carousel posts and story templates that received noticeably higher saves and shares compared to previous content.",
      "Worked directly with clients to align visual output with brand guidelines, revising based on feedback within tight turnaround times.",
      "Produced digital assets using Adobe Photoshop and Illustrator for product launches and promotional campaigns.",
    ],
    tags: ["Adobe Photoshop", "Adobe Illustrator", "Social Media", "Marketing"],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "CV Mitra Yudha Xaviera",
    location: "Bandung",
    period: "Sep – Nov 2022",
    current: false,
    highlights: [
      "Developed website features using HTML, CSS, and JavaScript — optimized image loading and minified assets, resulting in faster page render times.",
      "Improved database security by implementing parameterized queries and regular backup routines.",
      "Restructured site navigation and page layout, making key information easier to find for first-time visitors.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Database", "Web Development"],
  },
  {
    id: 4,
    role: "UI/UX Design Bootcamp",
    company: "Binar Academy",
    location: "Remote",
    period: "Feb – Jul 2022",
    current: false,
    highlights: [
      "Designed mobile and web prototypes for an e-commerce final project — full flow from product discovery to checkout.",
      "Conducted surveys (50+ respondents) and 5 user interviews to identify pain points, then iterated the design based on findings.",
      "Presented the final project to mentors and received positive feedback on information architecture and visual consistency.",
    ],
    tags: ["Design Thinking", "User Research", "E-commerce", "Figma", "Prototyping"],
  },
];

export const projects = [
  {
    id: 1,
    title: "e-Sertifikat Next Gen",
    client: "Kominfo",
    sector: "Government Platform",
    year: "2024",
    role: "UI/UX Redesign",
    impact: "Simplified issuance flow from 7 steps to 4, reducing user drop-off",
    description:
      "The existing e-certificate platform had a confusing multi-step flow that caused users to abandon midway. I mapped the entire journey, identified redundant steps, and redesigned the interface with clearer progress indicators and inline validation.",
    result: "Stakeholders confirmed fewer support tickets related to certificate issuance after the redesign was implemented",
    color: "from-blue-950 to-blue-800",
    emoji: "🏛️",
    logo: "/logos/kominfo.svg",
    tags: ["Figma", "Web Design", "Accessibility"],
    link: "https://www.figma.com/proto/cgbQnvbWBuwTqg78dWXLMG/Redesign-e-Sertifikasi-Next-Gen-2024?node-id=327-2891&viewport=818%2C786%2C0.2&t=XVYApJbd7sj3RDdN-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=327%3A2891&page-id=240%3A2",
  },
  {
    id: 2,
    title: "Admin SIMONTILA",
    client: "Kemendikbud",
    sector: "Dashboard System",
    year: "2024",
    role: "Dashboard UX/UI",
    impact: "Admins can now find and manage records without switching between multiple pages",
    description:
      "The original SIMONTILA dashboard scattered data across too many sub-pages. I restructured the information architecture, introduced filterable data tables, and grouped related actions together so admins could complete tasks in fewer clicks.",
    result: "Clearer hierarchy and navigation reduced the learning curve for new admin users",
    color: "from-teal-950 to-teal-800",
    emoji: "📊",
    logo: "/logos/kemendikbud.png",
    tags: ["Dashboard", "Data Visualization", "Admin UI"],
    link: "https://www.figma.com/proto/em7T7SnGkOEsRo1aqm2jJq/SIMONTILA-WEB?node-id=3601-3038&viewport=60%2C78%2C0.11&t=Z5AsEC5UM1Q1XTOj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    id: 3,
    title: "MBKM UT + TTM App",
    client: "Universitas Terbuka",
    sector: "Education Product",
    year: "2024",
    role: "Web & Mobile Design",
    impact: "Unified registration and attendance into one seamless platform",
    description:
      "Students previously had to use separate systems for MBKM registration and attendance marking. I designed a unified web + mobile experience with a single login, clear step-by-step flows, and accessibility considerations for diverse student demographics.",
    result: "Students can now register and mark attendance from one platform without switching tools",
    color: "from-violet-950 to-violet-800",
    emoji: "🎓",
    logo: "/logos/ut.png",
    tags: ["Mobile App", "Web Design", "Education"],
    link: "https://www.figma.com/proto/HNlXQro4eRAhzKJqN95LTM/MBKM?node-id=386-40441&viewport=2829%2C584%2C0.16&t=iTpBL81CtL8iewjp-1&scaling=min-zoom&content-scaling=fixed&page-id=386%3A37335",
  },
  {
    id: 4,
    title: "BRAVO System Redesign",
    client: "PUPR",
    sector: "Monitoring Dashboard",
    year: "2024",
    role: "Legacy System Redesign",
    impact: "Replaced cluttered legacy tables with a card-based status view",
    description:
      "The old BRAVO system displayed all projects in dense, unsorted tables. I introduced a card-based layout grouped by status and priority, added visual progress indicators, and simplified the filtering system so managers could scan project health at a glance.",
    result: "Project managers reported faster identification of at-risk projects during weekly reviews",
    color: "from-green-950 to-green-800",
    emoji: "🏗️",
    logo: "/logos/pupr.jpg",
    tags: ["Redesign", "Dashboard", "Gov Platform"],
    link: "https://www.behance.net/arrozyadifalaqi",
  },
  {
    id: 5,
    title: "Public Service App Prototype",
    client: "Government Client",
    sector: "Mobile Service",
    year: "2023",
    role: "UX Research & Prototyping",
    impact: "Validated through usability testing with 12 real citizens",
    description:
      "Conducted field interviews with 12 citizens to understand pain points in accessing public services. Built wireframes, iterated based on feedback, and delivered a high-fidelity prototype that was tested and validated before handoff to development.",
    result: "Usability test participants completed key tasks faster and with fewer errors compared to the existing flow",
    color: "from-rose-950 to-rose-800",
    emoji: "📱",
    tags: ["Mobile", "Prototype", "UX Research"],
    link: "https://www.behance.net/arrozyadifalaqi",
  },
  {
    id: 6,
    title: "Data Analytics Dashboard",
    client: "Government Client",
    sector: "Data Visualization",
    year: "2023",
    role: "Analytics Dashboard Design",
    impact: "Consolidated scattered spreadsheet data into one visual interface",
    description:
      "The client's team relied on multiple Excel files for weekly reporting. I designed an interactive dashboard that pulls the same data into filterable charts and summary cards, making it possible to spot trends without manual spreadsheet work.",
    result: "Weekly reporting preparation time was significantly reduced as data became self-service",
    color: "from-amber-950 to-amber-800",
    emoji: "📈",
    tags: ["Data Viz", "Dashboard", "Analytics"],
    link: "https://www.behance.net/arrozyadifalaqi",
  },
];

export const skills = [
  { name: "Figma", level: 95, category: "Design" },
  { name: "Adobe Photoshop", level: 85, category: "Design" },
  { name: "Adobe Illustrator", level: 82, category: "Design" },
  { name: "Prototyping", level: 93, category: "Design" },
  { name: "UX Research", level: 88, category: "Research" },
  { name: "User Testing", level: 84, category: "Research" },
  { name: "HTML / CSS", level: 75, category: "Dev" },
  { name: "JavaScript", level: 65, category: "Dev" },
  { name: "InVision / Sketch", level: 70, category: "Design" },
];

export const softSkills = [
  "Collaboration & Teamwork",
  "Communication",
  "Adaptability",
  "Problem Solving",
  "Stakeholder Management",
  "Fast Learner",
];

export const certifications = [
  {
    title: "UI/UX Design",
    issuer: "Binar Academy",
    year: "2022",
  },
  {
    title: "AV Web Developer",
    issuer: "Certification Body",
    year: "2022",
  },
];
