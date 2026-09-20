import type { Locale } from "./config";

export interface UiCopy {
  meta: { title: string; description: string; socialImageAlt: string; jobTitle: string; brandLine: string; knowsAbout: string[] };
  common: {
    portfolio: string; projects: string; source: string; githubProfile: string; language: string;
    skipToContent: string; openNavigation: string; closeNavigation: string;
    primaryNavigation: string; footerNavigation: string; theme: string;
    themeSystem: string; themeDark: string; themeLight: string;
    builtPrivacy: string; assistedDevelopment: string;
  };
  nav: { about: string; experience: string; projects: string; stack: string; education: string; contact: string };
  home: {
    profileEyebrow: string; heroBefore: string; heroEmphasis: string; heroAfter: string; heroSuffix: string;
    viewProjects: string; experience: string; downloadCv: string; primaryActions: string; professionalProfiles: string;
    diagramLabel: string; liveSystemMap: string; field: string; fieldDetail: string; automate: string; automateDetail: string;
    decide: string; decideDetail: string; industrialData: string; automation: string; appliedAi: string;
    profileFocus: string; foundation: string; foundationValue: string; operatingContext: string;
    operatingContextValue: string; leverage: string; leverageValue: string;
    about: string; aboutTitle: string; aboutLead: string; aboutBodyOne: string; aboutBodyTwo: string;
    principlesLabel: string; principleOne: string; principleTwo: string; principleThree: string;
    experienceTitle: string; experienceIntro: string; experienceImageAlt: string; experienceImageCaption: string;
    selectedProjects: string; projectsTitle: string; projectsIntro: string; moreProjects: string;
    workingStack: string; stackTitle: string; stackIntro: string;
    education: string; educationTitle: string; contact: string; contactTitle: string; contactIntro: string;
    connectLinkedIn: string; reviewGitHub: string;
  };
  projectCard: { highlights: string; technologies: string; viewProject: string; viewProjectLabel: string };
  project: {
    summary: string; status: string; focus: string; stack: string; caseStudy: string; sectionsLabel: string;
    overview: string; problem: string; architecture: string; implementation: string; results: string;
    overviewTitle: string; problemTitle: string; architectureTitle: string; implementationTitle: string; resultsTitle: string;
    continueExploring: string; relatedSystems: string; architectureSuffix: string; architecturePublicNote: string;
  };
  cv: { description: string; print: string; profile: string; profileText: string; experience: string; technicalStack: string; education: string; privacyNote: string };
  ai: {
    title: string; description: string; transparency: string; eyebrow: string; heading: string; intro: string;
    helpedTitle: string; helpedText: string; humanTitle: string; humanText: string; boundaryTitle: string; boundaryText: string;
  };
}

const ui: Record<Locale, UiCopy> = {
  en: {
    meta: {
      title: "José González Oliva | Engineering, Automation & AI",
      description: "Engineer working at the intersection of industrial operations, automation and applied AI.",
      socialImageAlt: "Engineering, industrial operations, automation and applied AI portfolio",
      jobTitle: "Engineer working across industrial operations, automation and applied AI",
      brandLine: "Engineering · Automation · AI",
      knowsAbout: ["Industrial operations", "Manufacturing engineering", "Automation", "Python", "Applied artificial intelligence"],
    },
    common: {
      portfolio: "Portfolio", projects: "Projects", source: "Source", githubProfile: "GitHub profile", language: "Language",
      skipToContent: "Skip to content", openNavigation: "Open navigation", closeNavigation: "Close navigation",
      primaryNavigation: "Primary navigation", footerNavigation: "Footer navigation", theme: "Change color theme",
      themeSystem: "System", themeDark: "Dark", themeLight: "Light",
      builtPrivacy: "Built as a static, privacy-conscious portfolio.", assistedDevelopment: "AI-assisted development",
    },
    nav: { about: "About", experience: "Experience", projects: "Projects", stack: "Stack", education: "Education", contact: "Contact" },
    home: {
      profileEyebrow: "Engineering systems profile", heroBefore: "Engineering the link between", heroEmphasis: "industrial work", heroAfter: "and intelligent systems.",
      heroSuffix: "From aerospace and manufacturing documentation to Python, production reporting and local AI runtimes.",
      viewProjects: "View projects", experience: "Experience", downloadCv: "Download CV", primaryActions: "Primary actions", professionalProfiles: "Professional profiles",
      diagramLabel: "Industrial data to applied AI diagram", liveSystemMap: "LIVE SYSTEM MAP", field: "FIELD", fieldDetail: "production · evidence",
      automate: "AUTOMATE", automateDetail: "validate · transform", decide: "DECIDE", decideDetail: "report · trace",
      industrialData: "INDUSTRIAL DATA", automation: "AUTOMATION", appliedAi: "APPLIED AI", profileFocus: "Profile focus",
      foundation: "Foundation", foundationValue: "Materials & manufacturing", operatingContext: "Operating context", operatingContextValue: "Industrial & aerospace",
      leverage: "Leverage", leverageValue: "Automation & applied AI", about: "About", aboutTitle: "Software as an engineering tool, not a separate identity.",
      aboutLead: "I am a Materials Engineer shaped by industrial projects, aerospace manufacturing, technical coordination and documentation-heavy environments.",
      aboutBodyOne: "That background defines how I build software: explicit inputs, controlled decisions, traceable outputs and honest limits. Python, backend services and local AI are practical extensions of engineering work.",
      aboutBodyTwo: "Current interests include production-report automation, local LLM runtimes, retrieval with visible evidence, persistent conversational systems and reproducible image-generation workflows.",
      principlesLabel: "Working principles", principleOne: "Verify before claiming", principleTwo: "Automate repeatable work", principleThree: "Keep evidence visible",
      experienceTitle: "From physical production to automated information flows.",
      experienceIntro: "Select an entry to expand its scope. The timeline separates employer, client or project context, responsibilities and tools.",
      experienceImageAlt: "Ariane 6 assembly in an aerospace manufacturing hangar",
      experienceImageCaption: "Aerospace industrialization · assembly context · technical instructions · production evidence",
      selectedProjects: "Selected projects", projectsTitle: "Systems built around real constraints.",
      projectsIntro: "These are not repository thumbnails. Each case explains the problem, architecture, implementation boundary and current maturity.",
      moreProjects: "View additional technical studies", workingStack: "Working stack", stackTitle: "Grouped by responsibility, not percentage.",
      stackIntro: "The stack spans physical engineering, data treatment, backend contracts and local AI. Tools appear only where they support a real workflow.",
      education: "Education", educationTitle: "A multidisciplinary engineering foundation.", contact: "Contact",
      contactTitle: "Interested in engineering work where operations, automation and AI meet?",
      contactIntro: "The fastest public channels are LinkedIn and GitHub. No contact form means no third-party tracking and no personal data stored by this site.",
      connectLinkedIn: "Connect on LinkedIn", reviewGitHub: "Review GitHub",
    },
    projectCard: { highlights: "highlights", technologies: "technologies", viewProject: "View project", viewProjectLabel: "View {title} project" },
    project: {
      summary: "Project summary", status: "Status", focus: "Focus", stack: "Stack", caseStudy: "CASE STUDY", sectionsLabel: "Case study sections",
      overview: "Overview", problem: "Problem", architecture: "Architecture", implementation: "Implementation", results: "Results / status",
      overviewTitle: "What this project demonstrates", problemTitle: "The engineering constraint", architectureTitle: "A controlled, readable flow",
      implementationTitle: "How the boundary is kept explicit", resultsTitle: "Evidence without inflated claims", continueExploring: "Continue exploring",
      relatedSystems: "Related systems", architectureSuffix: "architecture", architecturePublicNote: "Simplified public representation.",
    },
    cv: {
      description: "Printable CV for José González Oliva: engineering, industrial operations, automation and applied AI.", print: "Print / save as PDF", profile: "Profile",
      profileText: "Engineer combining industrial systems, production coordination, automation and applied AI/software. Experience spans materials, aerospace industrialization, electronics manufacturing, piping documentation and practical reporting automation.",
      experience: "Experience", technicalStack: "Technical stack", education: "Education",
      privacyNote: "This public CV intentionally excludes private project data, contractual details and internal company documentation.",
    },
    ai: {
      title: "AI-assisted development", description: "Transparent statement about AI assistance used while building and reviewing this portfolio.",
      transparency: "Transparency", eyebrow: "AI-assisted development", heading: "Assistance is useful. Responsibility stays human.",
      intro: "Generative AI tools supported implementation, review and documentation. Architecture direction, professional content, privacy filtering, validation and publication remain human responsibilities.",
      helpedTitle: "Where AI helped", helpedText: "Static page structure, Astro migration, CSS organization, interaction patterns, link checks, accessibility review and synthetic example framing.",
      humanTitle: "What remains human", humanText: "Problem selection, professional claims, technical judgment, confidential-data filtering, acceptance criteria and the final decision to publish.",
      boundaryTitle: "Public boundary", boundaryText: "No real logs, credentials, private corpora, customer data, internal servers or controlled company documents are intentionally published.",
    },
  },
  es: {
    meta: {
      title: "José González Oliva | Ingeniería, automatización e IA",
      description: "Ingeniero que trabaja en la intersección entre operaciones industriales, automatización e IA aplicada.",
      socialImageAlt: "Portfolio de ingeniería, operaciones industriales, automatización e IA aplicada",
      jobTitle: "Ingeniero especializado en operaciones industriales, automatización e IA aplicada",
      brandLine: "Ingeniería · Automatización · IA",
      knowsAbout: ["Operaciones industriales", "Ingeniería de fabricación", "Automatización", "Python", "Inteligencia artificial aplicada"],
    },
    common: {
      portfolio: "Portfolio", projects: "Proyectos", source: "Código fuente", githubProfile: "Perfil de GitHub", language: "Idioma",
      skipToContent: "Saltar al contenido", openNavigation: "Abrir navegación", closeNavigation: "Cerrar navegación",
      primaryNavigation: "Navegación principal", footerNavigation: "Navegación del pie", theme: "Cambiar tema de color",
      themeSystem: "Sistema", themeDark: "Oscuro", themeLight: "Claro",
      builtPrivacy: "Creado como portfolio estático y respetuoso con la privacidad.", assistedDevelopment: "Desarrollo asistido por IA",
    },
    nav: { about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", stack: "Tecnologías", education: "Formación", contact: "Contacto" },
    home: {
      profileEyebrow: "Perfil de sistemas de ingeniería", heroBefore: "Conecto la ingeniería del", heroEmphasis: "trabajo industrial", heroAfter: "con sistemas inteligentes.",
      heroSuffix: "Desde documentación aeroespacial y de fabricación hasta Python, informes de producción y runtimes locales de IA.",
      viewProjects: "Ver proyectos", experience: "Experiencia", downloadCv: "Descargar CV", primaryActions: "Acciones principales", professionalProfiles: "Perfiles profesionales",
      diagramLabel: "Diagrama desde datos industriales hasta IA aplicada", liveSystemMap: "MAPA DEL SISTEMA", field: "CAMPO", fieldDetail: "producción · evidencias",
      automate: "AUTOMATIZAR", automateDetail: "validar · transformar", decide: "DECIDIR", decideDetail: "informar · trazar",
      industrialData: "DATOS INDUSTRIALES", automation: "AUTOMATIZACIÓN", appliedAi: "IA APLICADA", profileFocus: "Enfoque profesional",
      foundation: "Base", foundationValue: "Materiales y fabricación", operatingContext: "Contexto operativo", operatingContextValue: "Industria y aeroespacial",
      leverage: "Impulso", leverageValue: "Automatización e IA aplicada", about: "Sobre mí", aboutTitle: "El software como herramienta de ingeniería, no como identidad separada.",
      aboutLead: "Soy Ingeniero de Materiales, formado por proyectos industriales, fabricación aeroespacial, coordinación técnica y entornos con mucha documentación.",
      aboutBodyOne: "Ese recorrido define cómo desarrollo software: entradas explícitas, decisiones controladas, resultados trazables y límites honestos. Python, los servicios backend y la IA local son extensiones prácticas del trabajo de ingeniería.",
      aboutBodyTwo: "Mis intereses actuales incluyen la automatización de informes de producción, runtimes locales de LLM, recuperación con evidencias visibles, sistemas conversacionales persistentes y flujos reproducibles de generación de imágenes.",
      principlesLabel: "Principios de trabajo", principleOne: "Verificar antes de afirmar", principleTwo: "Automatizar el trabajo repetible", principleThree: "Mantener visibles las evidencias",
      experienceTitle: "De la producción física a los flujos de información automatizados.",
      experienceIntro: "Selecciona una entrada para ampliar su alcance. La cronología separa empresa, cliente o proyecto, responsabilidades y herramientas.",
      experienceImageAlt: "Montaje de Ariane 6 en un hangar de fabricación aeroespacial",
      experienceImageCaption: "Industrialización aeroespacial · contexto de montaje · instrucciones técnicas · evidencias de producción",
      selectedProjects: "Proyectos seleccionados", projectsTitle: "Sistemas construidos alrededor de restricciones reales.",
      projectsIntro: "No son simples miniaturas de repositorios. Cada caso explica el problema, la arquitectura, el límite de implementación y su madurez actual.",
      moreProjects: "Ver estudios técnicos adicionales", workingStack: "Tecnologías de trabajo", stackTitle: "Agrupadas por responsabilidad, no por porcentaje.",
      stackIntro: "El conjunto abarca ingeniería física, tratamiento de datos, contratos backend e IA local. Las herramientas aparecen solo cuando apoyan un flujo real.",
      education: "Formación", educationTitle: "Una base de ingeniería multidisciplinar.", contact: "Contacto",
      contactTitle: "¿Te interesa un trabajo de ingeniería donde confluyan operaciones, automatización e IA?",
      contactIntro: "Los canales públicos más rápidos son LinkedIn y GitHub. Al no haber formulario, este sitio no usa seguimiento de terceros ni almacena datos personales.",
      connectLinkedIn: "Contactar en LinkedIn", reviewGitHub: "Ver GitHub",
    },
    projectCard: { highlights: "aspectos destacados", technologies: "tecnologías", viewProject: "Ver proyecto", viewProjectLabel: "Ver el proyecto {title}" },
    project: {
      summary: "Resumen del proyecto", status: "Estado", focus: "Enfoque", stack: "Tecnologías", caseStudy: "CASO DE ESTUDIO", sectionsLabel: "Secciones del caso de estudio",
      overview: "Resumen", problem: "Problema", architecture: "Arquitectura", implementation: "Implementación", results: "Resultados / estado",
      overviewTitle: "Qué demuestra este proyecto", problemTitle: "La restricción de ingeniería", architectureTitle: "Un flujo controlado y legible",
      implementationTitle: "Cómo se mantiene explícito el límite", resultsTitle: "Evidencias sin afirmaciones exageradas", continueExploring: "Seguir explorando",
      relatedSystems: "Sistemas relacionados", architectureSuffix: "arquitectura", architecturePublicNote: "Representación pública simplificada.",
    },
    cv: {
      description: "CV imprimible de José González Oliva: ingeniería, operaciones industriales, automatización e IA aplicada.", print: "Imprimir / guardar como PDF", profile: "Perfil",
      profileText: "Ingeniero que combina sistemas industriales, coordinación de producción, automatización e IA aplicada/software. La experiencia abarca materiales, industrialización aeroespacial, fabricación electrónica, documentación de tuberías y automatización práctica de informes.",
      experience: "Experiencia", technicalStack: "Tecnologías", education: "Formación",
      privacyNote: "Este CV público excluye deliberadamente datos privados de proyectos, detalles contractuales y documentación interna de empresas.",
    },
    ai: {
      title: "Desarrollo asistido por IA", description: "Declaración transparente sobre la asistencia de IA utilizada para crear y revisar este portfolio.",
      transparency: "Transparencia", eyebrow: "Desarrollo asistido por IA", heading: "La asistencia es útil. La responsabilidad sigue siendo humana.",
      intro: "Las herramientas de IA generativa apoyaron la implementación, la revisión y la documentación. La dirección arquitectónica, el contenido profesional, el filtrado de privacidad, la validación y la publicación siguen siendo responsabilidades humanas.",
      helpedTitle: "Dónde ayudó la IA", helpedText: "Estructura de páginas estáticas, migración a Astro, organización de CSS, patrones de interacción, comprobación de enlaces, revisión de accesibilidad y preparación de ejemplos sintéticos.",
      humanTitle: "Qué sigue siendo humano", humanText: "Selección de problemas, afirmaciones profesionales, criterio técnico, filtrado de datos confidenciales, criterios de aceptación y decisión final de publicar.",
      boundaryTitle: "Límite público", boundaryText: "No se publican intencionadamente registros reales, credenciales, corpus privados, datos de clientes, servidores internos ni documentos empresariales controlados.",
    },
  },
  fr: {
    meta: {
      title: "José González Oliva | Ingénierie, automatisation et IA",
      description: "Ingénieur travaillant à l’intersection des opérations industrielles, de l’automatisation et de l’IA appliquée.",
      socialImageAlt: "Portfolio d’ingénierie, d’opérations industrielles, d’automatisation et d’IA appliquée",
      jobTitle: "Ingénieur spécialisé dans les opérations industrielles, l’automatisation et l’IA appliquée",
      brandLine: "Ingénierie · Automatisation · IA",
      knowsAbout: ["Opérations industrielles", "Ingénierie de fabrication", "Automatisation", "Python", "Intelligence artificielle appliquée"],
    },
    common: {
      portfolio: "Portfolio", projects: "Projets", source: "Code source", githubProfile: "Profil GitHub", language: "Langue",
      skipToContent: "Aller au contenu", openNavigation: "Ouvrir la navigation", closeNavigation: "Fermer la navigation",
      primaryNavigation: "Navigation principale", footerNavigation: "Navigation du pied de page", theme: "Changer le thème de couleur",
      themeSystem: "Système", themeDark: "Sombre", themeLight: "Clair",
      builtPrivacy: "Conçu comme un portfolio statique respectueux de la vie privée.", assistedDevelopment: "Développement assisté par l’IA",
    },
    nav: { about: "À propos", experience: "Expérience", projects: "Projets", stack: "Technologies", education: "Formation", contact: "Contact" },
    home: {
      profileEyebrow: "Profil des systèmes d’ingénierie", heroBefore: "Créer le lien entre", heroEmphasis: "le travail industriel", heroAfter: "et les systèmes intelligents.",
      heroSuffix: "De la documentation aérospatiale et de fabrication à Python, aux rapports de production et aux runtimes d’IA locaux.",
      viewProjects: "Voir les projets", experience: "Expérience", downloadCv: "Télécharger le CV", primaryActions: "Actions principales", professionalProfiles: "Profils professionnels",
      diagramLabel: "Schéma des données industrielles vers l’IA appliquée", liveSystemMap: "CARTE DU SYSTÈME", field: "TERRAIN", fieldDetail: "production · preuves",
      automate: "AUTOMATISER", automateDetail: "valider · transformer", decide: "DÉCIDER", decideDetail: "rapporter · tracer",
      industrialData: "DONNÉES INDUSTRIELLES", automation: "AUTOMATISATION", appliedAi: "IA APPLIQUÉE", profileFocus: "Orientation du profil",
      foundation: "Fondation", foundationValue: "Matériaux et fabrication", operatingContext: "Contexte opérationnel", operatingContextValue: "Industrie et aérospatial",
      leverage: "Levier", leverageValue: "Automatisation et IA appliquée", about: "À propos", aboutTitle: "Le logiciel comme outil d’ingénierie, pas comme identité séparée.",
      aboutLead: "Je suis ingénieur en matériaux, façonné par les projets industriels, la fabrication aérospatiale, la coordination technique et les environnements riches en documentation.",
      aboutBodyOne: "Ce parcours définit ma manière de développer des logiciels : entrées explicites, décisions contrôlées, résultats traçables et limites honnêtes. Python, les services backend et l’IA locale sont des extensions pratiques du travail d’ingénierie.",
      aboutBodyTwo: "Mes intérêts actuels comprennent l’automatisation des rapports de production, les runtimes LLM locaux, la recherche avec preuves visibles, les systèmes conversationnels persistants et les workflows reproductibles de génération d’images.",
      principlesLabel: "Principes de travail", principleOne: "Vérifier avant d’affirmer", principleTwo: "Automatiser le travail répétable", principleThree: "Garder les preuves visibles",
      experienceTitle: "De la production physique aux flux d’information automatisés.",
      experienceIntro: "Sélectionnez une entrée pour développer son périmètre. La chronologie distingue l’employeur, le client ou le contexte du projet, les responsabilités et les outils.",
      experienceImageAlt: "Assemblage d’Ariane 6 dans un hangar de fabrication aérospatiale",
      experienceImageCaption: "Industrialisation aérospatiale · contexte d’assemblage · instructions techniques · preuves de production",
      selectedProjects: "Projets sélectionnés", projectsTitle: "Des systèmes construits autour de contraintes réelles.",
      projectsIntro: "Il ne s’agit pas de simples aperçus de dépôts. Chaque cas explique le problème, l’architecture, la limite d’implémentation et le niveau de maturité actuel.",
      moreProjects: "Voir d’autres études techniques", workingStack: "Technologies de travail", stackTitle: "Regroupées par responsabilité, pas par pourcentage.",
      stackIntro: "L’ensemble couvre l’ingénierie physique, le traitement des données, les contrats backend et l’IA locale. Les outils n’apparaissent que lorsqu’ils soutiennent un workflow réel.",
      education: "Formation", educationTitle: "Une base d’ingénierie multidisciplinaire.", contact: "Contact",
      contactTitle: "Intéressé par l’ingénierie à la rencontre des opérations, de l’automatisation et de l’IA ?",
      contactIntro: "Les canaux publics les plus rapides sont LinkedIn et GitHub. L’absence de formulaire signifie aucun suivi tiers et aucune donnée personnelle stockée par ce site.",
      connectLinkedIn: "Contacter sur LinkedIn", reviewGitHub: "Voir GitHub",
    },
    projectCard: { highlights: "points clés", technologies: "technologies", viewProject: "Voir le projet", viewProjectLabel: "Voir le projet {title}" },
    project: {
      summary: "Résumé du projet", status: "Statut", focus: "Orientation", stack: "Technologies", caseStudy: "ÉTUDE DE CAS", sectionsLabel: "Sections de l’étude de cas",
      overview: "Vue d’ensemble", problem: "Problème", architecture: "Architecture", implementation: "Implémentation", results: "Résultats / statut",
      overviewTitle: "Ce que démontre ce projet", problemTitle: "La contrainte d’ingénierie", architectureTitle: "Un flux contrôlé et lisible",
      implementationTitle: "Comment la limite reste explicite", resultsTitle: "Des preuves sans affirmations exagérées", continueExploring: "Continuer l’exploration",
      relatedSystems: "Systèmes associés", architectureSuffix: "architecture", architecturePublicNote: "Représentation publique simplifiée.",
    },
    cv: {
      description: "CV imprimable de José González Oliva : ingénierie, opérations industrielles, automatisation et IA appliquée.", print: "Imprimer / enregistrer en PDF", profile: "Profil",
      profileText: "Ingénieur combinant systèmes industriels, coordination de production, automatisation et IA appliquée/logiciel. L’expérience couvre les matériaux, l’industrialisation aérospatiale, la fabrication électronique, la documentation de tuyauterie et l’automatisation pratique des rapports.",
      experience: "Expérience", technicalStack: "Technologies", education: "Formation",
      privacyNote: "Ce CV public exclut volontairement les données privées des projets, les détails contractuels et la documentation interne des entreprises.",
    },
    ai: {
      title: "Développement assisté par l’IA", description: "Déclaration transparente sur l’assistance de l’IA utilisée pour créer et réviser ce portfolio.",
      transparency: "Transparence", eyebrow: "Développement assisté par l’IA", heading: "L’assistance est utile. La responsabilité reste humaine.",
      intro: "Les outils d’IA générative ont soutenu l’implémentation, la révision et la documentation. La direction architecturale, le contenu professionnel, le filtrage des données privées, la validation et la publication restent des responsabilités humaines.",
      helpedTitle: "Où l’IA a aidé", helpedText: "Structure des pages statiques, migration vers Astro, organisation du CSS, modèles d’interaction, vérification des liens, revue de l’accessibilité et préparation d’exemples synthétiques.",
      humanTitle: "Ce qui reste humain", humanText: "Sélection des problèmes, affirmations professionnelles, jugement technique, filtrage des données confidentielles, critères d’acceptation et décision finale de publier.",
      boundaryTitle: "Limite publique", boundaryText: "Aucun journal réel, identifiant, corpus privé, donnée client, serveur interne ou document d’entreprise contrôlé n’est intentionnellement publié.",
    },
  },
};

export function getUi(locale: Locale): UiCopy {
  return ui[locale];
}
