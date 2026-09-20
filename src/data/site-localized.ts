import type { Locale } from "../i18n/config";
import {
  education,
  experiences,
  site,
  skillGroups,
  type Education,
  type Experience,
  type SkillGroup,
} from "./site";

type TranslatedExperience = Pick<Experience, "period" | "role" | "sector" | "summary" | "impact"> & {
  client?: string;
};

interface SiteTranslation {
  role: string;
  description: string;
  location: string;
  experiences: Record<string, TranslatedExperience>;
  skills: SkillGroup[];
  education: Education[];
}

const translations: Record<Exclude<Locale, "en">, SiteTranslation> = {
  es: {
    role: "Ingeniería · Operaciones industriales · Automatización · Sistemas de IA",
    description: "Ingeniero que trabaja en la intersección entre operaciones industriales, automatización e IA aplicada.",
    location: "España",
    experiences: {
      "2mp-moncobra": {
        period: "Ago 2026 — Actualidad",
        client: "Moncobra · entorno industrial de MOEVE",
        role: "Producción / Coordinación técnica",
        sector: "Operaciones industriales · Tuberías",
        summary: "Contratado por 2MP y prestando apoyo a Moncobra en el entorno industrial de MOEVE, conectando el avance de campo, la documentación técnica y los informes de producción.",
        impact: [
          "Seguimiento del avance de producción en tuberías, soportes y documentación de frentes de trabajo.",
          "Revisión de isométricos, paquetes WMAP/WPM y registros OTS para la coordinación técnica.",
          "Consolidación de información de campo y oficina en informes de producción repetibles.",
          "Automatización de informes y tratamiento de datos con Excel, VBA, Power Query y Python.",
          "Uso de OpenText Core Share y Navisworks para documentación controlada y consulta de modelos.",
        ],
      },
      "mefeca-moeve": {
        period: "Puesto anterior",
        client: "MOEVE",
        role: "Técnico de organización / Ingeniería de procesos",
        sector: "Ejecución industrial · Oficina técnica",
        summary: "Apoyo a producción y oficina técnica combinando mediciones, certificaciones, control de ejecución y documentación.",
        impact: [
          "Preparación de mediciones y certificaciones para trabajos de tuberías y soldadura.",
          "Gestión de evidencias WMAP/WPM, documentación as-built y seguimiento de ejecución.",
          "Apoyo al seguimiento económico y a la coordinación entre producción, calidad y oficina técnica.",
          "Mejora de flujos recurrentes con Excel, VBA e informes estructurados.",
        ],
      },
      "actemium-airbus": {
        period: "2025",
        client: "Airbus Getafe",
        role: "Ingeniero de mantenimiento",
        sector: "Mantenimiento aeroespacial",
        summary: "Documentación aeroespacial, disponibilidad de sistemas y coordinación de incidencias en un entorno técnico controlado.",
        impact: [
          "Gestión de documentación técnica y requisitos de trazabilidad.",
          "Supervisión de la disponibilidad de sistemas y gestión de incidencias.",
          "Coordinación de participantes para mantener la continuidad y mejorar los procesos.",
        ],
      },
      indra: {
        period: "2024",
        role: "Ingeniero de fabricación",
        sector: "Fabricación de electrónica de defensa",
        summary: "Ingeniería de fabricación y coordinación de equipos para una producción electrónica repetible y evidencias preparadas para auditoría.",
        impact: [
          "Desarrollo y mantenimiento de flujos de fabricación electrónica.",
          "Coordinación del trabajo técnico y apoyo a equipos de fabricación.",
          "Gestión de no conformidades y preparación de evidencias para auditorías de calidad.",
          "Contribución a programas de defensa, incluidos los contextos 8x8 Dragón y CAPTOR-E cuando resulta públicamente apropiado.",
        ],
      },
      "ayesa-airbus": {
        period: "2022 — 2024",
        client: "Airbus · Ariane 6",
        role: "Ingeniero de industrialización",
        sector: "Industrialización aeroespacial",
        summary: "Apoyo a industrialización e ingeniería de fabricación para montajes aeroespaciales complejos, con énfasis visible en Ariane 6.",
        impact: [
          "Redacción de instrucciones técnicas para montajes aeroespaciales complejos.",
          "Análisis de desviaciones y gestión de no conformidades.",
          "Seguimiento de la estabilidad del proceso y de las evidencias de producción.",
          "Conexión entre documentación de ingeniería y ejecución en planta.",
        ],
      },
      "accenture-airbus": {
        period: "Experiencia anterior",
        client: "Airbus Illescas",
        role: "Ingeniería de métodos / Soporte industrial",
        sector: "Fabricación de materiales compuestos",
        summary: "Ingeniería de métodos, documentación y validación de procesos para fabricación de materiales compuestos.",
        impact: [
          "Apoyo a la ingeniería de métodos para fabricación de materiales compuestos.",
          "Redacción de documentación técnica y apoyo a la validación de procesos.",
          "Mejora de flujos de ingeniería e integración digital.",
        ],
      },
    },
    skills: [
      { title: "Ingeniería", description: "Sistemas físicos, contexto productivo y evidencias técnicas.", items: ["AutoCAD", "Navisworks", "Documentación industrial", "Tuberías e isométricos", "Control de producción"] },
      { title: "Datos y automatización", description: "Reducir el trabajo manual manteniendo resultados revisables.", items: ["Python", "Excel", "VBA", "Power Query"] },
      { title: "Backend", description: "Servicios pequeños y explícitos con contratos de ejecución auditables.", items: ["FastAPI", "APIs REST", "SSE", "SQLite"] },
      { title: "IA aplicada", description: "Experimentación local guiada por restricciones de ingeniería.", items: ["LLMs", "Ollama", "RAG", "ComfyUI", "FLUX", "Inferencia local"] },
      { title: "Desarrollo", description: "Herramientas para construir, probar y operar sistemas reproducibles.", items: ["Git", "GitHub", "Linux", "VS Code", "Docker"] },
    ],
    education: [
      { qualification: "Grado en Ingeniería de Materiales", location: "Sevilla", focus: "Materiales, procesos de fabricación y fundamentos de ingeniería." },
      { qualification: "Máster en Ingeniería Industrial", location: "Huelva", focus: "Sistemas industriales, operaciones y contexto de proyectos técnicos." },
      { qualification: "Máster en Nanociencia", location: "Cádiz", focus: "Materiales avanzados y análisis técnico multidisciplinar." },
      { qualification: "Desarrollo técnico continuo", location: "Práctica aplicada", focus: "Siemens NX, Python, sistemas backend, bases de datos vectoriales e IA local." },
    ],
  },
  fr: {
    role: "Ingénierie · Opérations industrielles · Automatisation · Systèmes d’IA",
    description: "Ingénieur travaillant à l’intersection des opérations industrielles, de l’automatisation et de l’IA appliquée.",
    location: "Espagne",
    experiences: {
      "2mp-moncobra": {
        period: "Août 2026 — Aujourd’hui",
        client: "Moncobra · environnement industriel MOEVE",
        role: "Production / Coordination technique",
        sector: "Opérations industrielles · Tuyauterie",
        summary: "Employé par 2MP et en soutien de Moncobra dans l’environnement industriel de MOEVE, en reliant l’avancement sur le terrain, la documentation technique et les rapports de production.",
        impact: [
          "Suivi de l’avancement de la production pour la tuyauterie, les supports et la documentation des fronts de travail.",
          "Révision des isométriques, des dossiers WMAP/WPM et des registres OTS pour la coordination technique.",
          "Consolidation des informations du terrain et du bureau dans des rapports de production reproductibles.",
          "Automatisation des rapports et du traitement des données avec Excel, VBA, Power Query et Python.",
          "Utilisation d’OpenText Core Share et de Navisworks pour la documentation contrôlée et la consultation des modèles.",
        ],
      },
      "mefeca-moeve": {
        period: "Poste précédent",
        client: "MOEVE",
        role: "Technicien d’organisation / Ingénierie des procédés",
        sector: "Exécution industrielle · Bureau technique",
        summary: "Soutien à la production et au bureau technique associant métrés, certifications, contrôle de l’exécution et documentation.",
        impact: [
          "Préparation des métrés et certifications pour les travaux de tuyauterie et de soudage.",
          "Gestion des preuves WMAP/WPM, de la documentation as-built et du suivi de l’exécution.",
          "Soutien au suivi économique et à la coordination entre production, qualité et bureau technique.",
          "Amélioration des workflows récurrents avec Excel, VBA et des rapports structurés.",
        ],
      },
      "actemium-airbus": {
        period: "2025",
        client: "Airbus Getafe",
        role: "Ingénieur maintenance",
        sector: "Maintenance aérospatiale",
        summary: "Documentation aérospatiale, disponibilité des systèmes et coordination des incidents dans un environnement technique contrôlé.",
        impact: [
          "Gestion de la documentation technique et des exigences de traçabilité.",
          "Suivi de la disponibilité des systèmes et traitement des incidents.",
          "Coordination des parties prenantes autour de la continuité et de l’amélioration des processus.",
        ],
      },
      indra: {
        period: "2024",
        role: "Ingénieur fabrication",
        sector: "Fabrication électronique de défense",
        summary: "Ingénierie de fabrication et coordination d’équipe pour une production électronique reproductible et des preuves prêtes pour l’audit.",
        impact: [
          "Développement et maintien des workflows de fabrication électronique.",
          "Coordination du travail technique et soutien aux équipes de fabrication.",
          "Gestion des non-conformités et préparation des preuves pour les audits qualité.",
          "Contribution à des programmes de défense, notamment les contextes 8x8 Dragón et CAPTOR-E lorsque leur mention publique est appropriée.",
        ],
      },
      "ayesa-airbus": {
        period: "2022 — 2024",
        client: "Airbus · Ariane 6",
        role: "Ingénieur industrialisation",
        sector: "Industrialisation aérospatiale",
        summary: "Soutien à l’industrialisation et à l’ingénierie de fabrication pour des assemblages aérospatiaux complexes, avec un accent visible sur Ariane 6.",
        impact: [
          "Rédaction d’instructions techniques pour des assemblages aérospatiaux complexes.",
          "Analyse des écarts et gestion des non-conformités.",
          "Suivi de la stabilité des processus et des preuves de production.",
          "Mise en relation de la documentation d’ingénierie avec l’exécution en atelier.",
        ],
      },
      "accenture-airbus": {
        period: "Expérience antérieure",
        client: "Airbus Illescas",
        role: "Ingénierie méthodes / Support industriel",
        sector: "Fabrication de composites",
        summary: "Ingénierie méthodes, documentation et validation des processus pour la fabrication de composites.",
        impact: [
          "Soutien à l’ingénierie méthodes pour la fabrication de composites.",
          "Rédaction de documentation technique et soutien à la validation des processus.",
          "Amélioration des workflows d’ingénierie et de l’intégration numérique.",
        ],
      },
    },
    skills: [
      { title: "Ingénierie", description: "Systèmes physiques, contexte de production et preuves techniques.", items: ["AutoCAD", "Navisworks", "Documentation industrielle", "Tuyauterie et isométriques", "Contrôle de production"] },
      { title: "Données et automatisation", description: "Réduire le travail manuel tout en gardant des résultats vérifiables.", items: ["Python", "Excel", "VBA", "Power Query"] },
      { title: "Backend", description: "Services petits et explicites avec des contrats d’exécution auditables.", items: ["FastAPI", "API REST", "SSE", "SQLite"] },
      { title: "IA appliquée", description: "Expérimentation locale guidée par les contraintes d’ingénierie.", items: ["LLM", "Ollama", "RAG", "ComfyUI", "FLUX", "Inférence locale"] },
      { title: "Développement", description: "Outils pour construire, tester et exploiter des systèmes reproductibles.", items: ["Git", "GitHub", "Linux", "VS Code", "Docker"] },
    ],
    education: [
      { qualification: "Licence en ingénierie des matériaux", location: "Séville", focus: "Matériaux, procédés de fabrication et fondamentaux de l’ingénierie." },
      { qualification: "Master en ingénierie industrielle", location: "Huelva", focus: "Systèmes industriels, opérations et contexte des projets techniques." },
      { qualification: "Master en nanosciences", location: "Cadix", focus: "Matériaux avancés et analyse technique multidisciplinaire." },
      { qualification: "Développement technique continu", location: "Pratique appliquée", focus: "Siemens NX, Python, systèmes backend, bases de données vectorielles et IA locale." },
    ],
  },
};

export function getLocalizedSiteData(locale: Locale) {
  if (locale === "en") return { site, experiences, skillGroups, education };

  const translation = translations[locale];
  const localizedExperiences = experiences.map((experience) => ({
    ...experience,
    ...translation.experiences[experience.id],
  }));

  return {
    site: { ...site, role: translation.role, description: translation.description, location: translation.location },
    experiences: localizedExperiences,
    skillGroups: translation.skills,
    education: translation.education,
  };
}

