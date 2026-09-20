export interface Experience {
  id: string;
  period: string;
  company: string;
  client?: string;
  role: string;
  location: string;
  sector: string;
  summary: string;
  impact: string[];
  tools: string[];
  featured?: boolean;
}

export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export interface Education {
  qualification: string;
  location: string;
  focus: string;
}

export const site = {
  name: "José González Oliva",
  shortName: "JGO",
  role: "Engineering · Industrial Operations · Automation · AI Systems",
  description:
    "Engineer working at the intersection of industrial operations, automation and applied AI.",
  github: "https://github.com/Josegodev",
  linkedin: "https://www.linkedin.com/in/jos%C3%A9-gonz%C3%A1lez-oliva",
  repository: "https://github.com/josegodev/cv_portfolio",
  location: "Spain",
} as const;

export const experiences: Experience[] = [
  {
    id: "2mp-moncobra",
    period: "Aug 2026 — Present",
    company: "2MP",
    client: "Moncobra · MOEVE industrial environment",
    role: "Production / Technical Coordination",
    location: "Palos de la Frontera, Huelva",
    sector: "Industrial operations · Piping",
    summary:
      "Employed by 2MP and supporting Moncobra within the MOEVE industrial environment, connecting field progress, technical documentation and production reporting.",
    impact: [
      "Track production progress across piping, supports and work-front documentation.",
      "Review isometrics, WMAP/WPM packages and OTS records for technical coordination.",
      "Consolidate field and office information into repeatable production reports.",
      "Automate reporting and data treatment with Excel, VBA, Power Query and Python.",
      "Use OpenText Core Share and Navisworks for controlled documentation and model consultation.",
    ],
    tools: [
      "Excel",
      "VBA",
      "Power Query",
      "Python",
      "OpenText Core Share",
      "Navisworks",
    ],
    featured: true,
  },
  {
    id: "mefeca-moeve",
    period: "Previous role",
    company: "MEFECA",
    client: "MOEVE",
    role: "Organizational Technician / Process Engineering",
    location: "Huelva",
    sector: "Industrial execution · Technical office",
    summary:
      "Production and technical-office support combining measurements, certifications, execution control and documentation.",
    impact: [
      "Prepared measurements and certifications for piping and welding work.",
      "Managed WMAP/WPM evidence, as-built documentation and execution follow-up.",
      "Supported economic tracking and coordination between production, quality and the technical office.",
      "Improved recurring workflows with Excel, VBA and structured reporting.",
    ],
    tools: ["Excel", "VBA", "AutoCAD", "WMAP/WPM", "As-built documentation"],
  },
  {
    id: "actemium-airbus",
    period: "2025",
    company: "Actemium",
    client: "Airbus Getafe",
    role: "Maintenance Engineer",
    location: "Getafe, Madrid",
    sector: "Aerospace maintenance",
    summary:
      "Aerospace documentation, system availability and incident coordination in a controlled technical environment.",
    impact: [
      "Managed technical documentation and traceability requirements.",
      "Monitored system availability and incident handling.",
      "Coordinated stakeholders around process continuity and improvement.",
    ],
    tools: ["Technical documentation", "Incident management", "Traceability"],
  },
  {
    id: "indra",
    period: "2024",
    company: "Indra",
    role: "Manufacturing Engineer",
    location: "Aranjuez, Madrid",
    sector: "Defense electronics manufacturing",
    summary:
      "Manufacturing engineering and team coordination for repeatable electronics production and audit-ready evidence.",
    impact: [
      "Developed and maintained electronics manufacturing workflows.",
      "Coordinated technical work and supported manufacturing teams.",
      "Managed non-conformities and prepared evidence for quality audits.",
      "Contributed to defense programs including 8x8 Dragón and CAPTOR-E contexts where publicly appropriate.",
    ],
    tools: ["Manufacturing engineering", "Quality", "Electronics", "Team coordination"],
  },
  {
    id: "ayesa-airbus",
    period: "2022 — 2024",
    company: "Ayesa Air Control",
    client: "Airbus · Ariane 6",
    role: "Industrialization Engineer",
    location: "Getafe, Madrid",
    sector: "Aerospace industrialization",
    summary:
      "Industrialization and manufacturing-engineering support for complex aerospace assembly, with visible emphasis on Ariane 6.",
    impact: [
      "Authored technical instructions for complex aerospace assembly.",
      "Performed deviation analysis and non-conformity management.",
      "Monitored process stability and production evidence.",
      "Connected engineering documentation with shop-floor execution.",
    ],
    tools: ["Industrialization", "Ariane 6", "Technical instructions", "Non-conformities"],
  },
  {
    id: "accenture-airbus",
    period: "Earlier experience",
    company: "Accenture",
    client: "Airbus Illescas",
    role: "Method Engineering / Industrial Support",
    location: "Illescas, Toledo",
    sector: "Composite manufacturing",
    summary:
      "Method engineering, documentation and process validation for composite manufacturing.",
    impact: [
      "Supported method engineering for composite manufacturing.",
      "Authored technical documentation and supported process validation.",
      "Improved engineering workflows and digital integration.",
    ],
    tools: ["Methods engineering", "Composites", "Process validation", "Documentation"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Engineering",
    description: "Physical systems, production context and technical evidence.",
    items: [
      "AutoCAD",
      "Navisworks",
      "Industrial documentation",
      "Piping & isometrics",
      "Production control",
    ],
  },
  {
    title: "Data & Automation",
    description: "Reducing manual work while keeping results reviewable.",
    items: ["Python", "Excel", "VBA", "Power Query"],
  },
  {
    title: "Backend",
    description: "Small, explicit services and auditable runtime contracts.",
    items: ["FastAPI", "REST APIs", "SSE", "SQLite"],
  },
  {
    title: "Applied AI",
    description: "Local-first experimentation grounded in engineering constraints.",
    items: ["LLMs", "Ollama", "RAG", "ComfyUI", "FLUX", "Local inference"],
  },
  {
    title: "Development",
    description: "Tools used to build, test and operate reproducible systems.",
    items: ["Git", "GitHub", "Linux", "VS Code", "Docker"],
  },
];

export const education: Education[] = [
  {
    qualification: "BSc Materials Science",
    location: "Seville",
    focus: "Materials, manufacturing processes and engineering fundamentals.",
  },
  {
    qualification: "MSc Industrial Engineering",
    location: "Huelva",
    focus: "Industrial systems, operations and technical project context.",
  },
  {
    qualification: "MSc Nanoscience",
    location: "Cadiz",
    focus: "Advanced materials and multidisciplinary technical analysis.",
  },
  {
    qualification: "Continuous technical development",
    location: "Applied practice",
    focus: "Siemens NX, Python, backend systems, vector databases and local AI.",
  },
];
