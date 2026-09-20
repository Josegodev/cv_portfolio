import type { Locale } from "../i18n/config";
import { getUi } from "../i18n/ui";
import { projects, type Project } from "./projects";

type ProjectTranslation = Pick<
  Project,
  | "title"
  | "shortDescription"
  | "description"
  | "problem"
  | "implementation"
  | "results"
  | "status"
  | "year"
  | "categories"
  | "architecture"
  | "highlights"
>;

const translations: Record<Exclude<Locale, "en">, Record<string, ProjectTranslation>> = {
  es: {
    "nucleo-chat": {
      title: "NucleoChat / LOCALES",
      shortDescription: "Un runtime local de IA controlado alrededor de FastAPI, Ollama, memoria, RAG y trazas de ejecución auditables.",
      description: "NucleoChat transforma un chat local sin estado en un runtime inspeccionable donde las solicitudes, el contexto, las evidencias, la configuración de generación y los resultados permanecen visibles.",
      problem: "Los prototipos de IA resultan difíciles de confiar cuando prompts, recuperación, llamadas al proveedor y tratamiento de salida están mezclados y no pueden reconstruirse tras un fallo.",
      implementation: [
        "Exponer un contrato de chat FastAPI explícito en lugar de acoplar la interfaz directamente a un proveedor de modelos.",
        "Mantener la identidad de conversación, la selección de la ventana de contexto y la configuración de generación dentro del flujo del runtime.",
        "Usar recuperación documental respaldada por SQLite y registrar si se encontraron evidencias utilizables.",
        "Escribir datos de ejecución trazables sobre proveedor, modelo, latencia, estado de recuperación y comportamiento de fallback.",
      ],
      results: [
        "Ejecuciones locales reproducibles con configuración e identificadores de traza visibles.",
        "Separación clara entre comportamiento del modelo y política del runtime.",
        "Prototipo avanzado; no se afirma preparación para producción ni alta concurrencia.",
      ],
      status: "Prototipo avanzado",
      year: "2026",
      categories: ["IA", "Backend", "Observabilidad"],
      architecture: ["Cliente", "FastAPI", "Política del runtime", "RAG con SQLite", "Ollama", "Registro de traza"],
      highlights: ["Inferencia local", "Memoria configurable", "Estado de evidencias", "Trazas operativas"],
    },
    rolchat: {
      title: "RolChat",
      shortDescription: "Conversaciones persistentes con personajes, sesiones, memorias, análisis estructurado y respuestas en streaming.",
      description: "Un sistema local de conversación con estado que explora cómo mantener coherentes personajes, sesiones, memorias y referencias de imagen durante interacciones repetidas.",
      problem: "Una interfaz de chat pierde continuidad cuando el estado del personaje, las sesiones anteriores y los medios referenciados se tratan como texto temporal del prompt.",
      implementation: [
        "Persistir personajes, sesiones de conversación y registros de memoria en SQLite.",
        "Transmitir la salida del modelo a la interfaz mediante Server-Sent Events.",
        "Ejecutar el análisis estructurado por separado de la respuesta visible del personaje.",
        "Guardar referencias de imagen duraderas en lugar de incluir rutas locales temporales en los mensajes.",
      ],
      results: [
        "La continuidad de la conversación sobrevive a reinicios de página y proceso.",
        "El streaming mejora el tiempo de respuesta percibido sin ocultar el estado final.",
        "Desarrollo local activo; no se afirman enlaces públicos de demostración o repositorio.",
      ],
      status: "Desarrollo activo",
      year: "2026",
      categories: ["IA", "Backend", "Interfaz"],
      architecture: ["Cliente web", "API SSE", "Servicio de sesión", "Almacén de memoria", "LLM local"],
      highlights: ["Personajes persistentes", "Sesiones", "Memorias", "Referencias de imagen"],
    },
    "image-runtime": {
      title: "Runtime de imagen / Integración con ComfyUI",
      shortDescription: "Una ruta acotada de generación de imágenes que aísla los contratos API de los detalles del workflow de ComfyUI.",
      description: "Una capa de integración para enviar solicitudes controladas de imagen a ComfyUI y FLUX, manteniendo fuera de la aplicación principal el comportamiento HTTP específico del workflow.",
      problem: "Las llamadas directas desde la interfaz a ComfyUI dispersan identificadores de workflow, comportamiento de sondeo y manejo de errores por toda la aplicación.",
      implementation: [
        "Validar un contrato pequeño de solicitud de imagen en el límite de FastAPI.",
        "Traducir solicitudes de dominio a entradas del workflow de ComfyUI dentro de un único adaptador HTTP.",
        "Mantener el sondeo de cola, la resolución de resultados y los fallos del proveedor dentro del runtime de imagen.",
        "Devolver metadatos de resultado estables en lugar de rutas internas del sistema de archivos.",
      ],
      results: [
        "El comportamiento específico del proveedor queda aislado tras un único runtime controlado.",
        "El cliente principal permanece independiente del JSON del workflow de ComfyUI.",
        "Prototipo de integración; no se afirma que exista un servicio alojado de generación.",
      ],
      status: "Prototipo de integración",
      year: "2026",
      categories: ["IA", "Backend", "Imagen"],
      architecture: ["Cliente", "FastAPI", "Runtime de imagen", "Adaptador HTTP", "ComfyUI", "FLUX"],
      highlights: ["Contratos explícitos", "Gestión de cola", "Aislamiento del proveedor", "Generación local"],
    },
    "engineering-automation": {
      title: "Automatización de ingeniería",
      shortDescription: "Pequeñas herramientas para informes de producción, tratamiento de datos industriales y trabajo de ingeniería intensivo en documentos.",
      description: "Una categoría de automatización práctica que conecta datos de producción con informes repetibles y resultados técnicos revisables.",
      problem: "Los informes industriales suelen depender de consolidación manual repetida entre hojas de cálculo, isométricos, registros de avance y documentos controlados.",
      implementation: [
        "Normalizar entradas recurrentes antes de realizar cálculos o informes.",
        "Usar Excel, VBA y Power Query cuando el contexto operativo ya depende de libros de cálculo.",
        "Usar Python cuando la validación, la repetibilidad o el tratamiento de varios archivos superan la lógica de una hoja de cálculo.",
        "Mantener puntos de revisión humana alrededor de mediciones, certificaciones e informes emitidos.",
      ],
      results: [
        "Ciclos de informes recurrentes más cortos y menos pasos de transcripción manual.",
        "Un puente visible entre conocimiento industrial y automatización de software.",
        "Los ejemplos permanecen generalizados para evitar publicar información empresarial.",
      ],
      status: "Herramientas operativas",
      year: "En curso",
      categories: ["Ingeniería", "Automatización", "Datos"],
      architecture: ["Datos industriales", "Validación", "Automatización", "Informe de producción", "Revisión humana"],
      highlights: ["Informes de producción", "Datos de tuberías", "Automatización documental", "Resultados revisables"],
    },
    "evidence-rag": {
      title: "RAG orientado a evidencias",
      shortDescription: "Recuperación documental que hace explícita la disponibilidad de evidencias antes de permitir que un modelo responda.",
      description: "Un flujo de recuperación construido alrededor de la visibilidad de las fuentes, estados explícitos de evidencia y ejemplos públicos sintéticos.",
      problem: "Un modelo de lenguaje puede producir texto técnico convincente incluso cuando los documentos disponibles no lo respaldan.",
      implementation: [
        "Recuperar fragmentos de documentos controlados antes de la generación.",
        "Exponer EVIDENCE_FOUND y NO_EVIDENCE como estados de dominio.",
        "Conservar identificadores de fuente y metadatos de recuperación en el resultado.",
        "Usar ejemplos sintéticos en el portfolio público en lugar de corpus privados.",
      ],
      results: [
        "Las respuestas no respaldadas pueden detenerse o marcarse antes de su publicación.",
        "Los revisores técnicos pueden inspeccionar la ruta de evidencias.",
        "Flujo experimental; reduce, pero no elimina, el riesgo de alucinaciones.",
      ],
      status: "Experimental",
      year: "2026",
      categories: ["IA", "RAG", "Trazabilidad"],
      architecture: ["Pregunta", "Búsqueda documental", "Estado de evidencia", "Prompt controlado", "Respuesta + fuentes"],
      highlights: ["Evidencia explícita", "Metadatos de fuente", "Corpus sintético", "Respuesta sin evidencia"],
    },
    "runtime-observability": {
      title: "Observabilidad del runtime",
      shortDescription: "Registros de traza que conectan la salida de IA con proveedor, recuperación, latencia, fallback y contexto de error.",
      description: "Un patrón local de observabilidad para entender cómo una solicitud de IA atravesó un runtime sin presentar trazas basadas en archivos como monitorización de producción.",
      problem: "Los equipos no pueden depurar el comportamiento de la IA cuando modelo, configuración, estado de recuperación, fallback y latencia quedan invisibles tras la ejecución.",
      implementation: [
        "Asignar un identificador de traza estable a cada ejecución.",
        "Registrar proveedor, modelo, estado de recuperación, latencia, metadatos de tokens y errores cuando estén disponibles.",
        "Mantener los campos específicos de la interfaz como secundarios frente al comportamiento del runtime.",
        "Publicar únicamente muestras de trazas sintéticas y revisadas.",
      ],
      results: [
        "Las ejecuciones individuales pueden compararse y reconstruirse localmente.",
        "Los estados de fallo permanecen visibles en lugar de reducirse a un mensaje genérico.",
        "Observabilidad local en JSONL; no se afirma monitorización centralizada.",
      ],
      status: "Demostración",
      year: "2026",
      categories: ["Backend", "Observabilidad", "IA"],
      architecture: ["Solicitud", "Runtime", "Proveedor / RAG", "Respuesta", "Traza JSONL"],
      highlights: ["trace_id", "Latencia", "Fallback", "Errores estructurados"],
    },
  },
  fr: {
    "nucleo-chat": {
      title: "NucleoChat / LOCALES",
      shortDescription: "Un runtime d’IA local contrôlé autour de FastAPI, Ollama, la mémoire, le RAG et des traces d’exécution auditables.",
      description: "NucleoChat transforme un chat local sans état en un runtime inspectable où les requêtes, le contexte, les preuves, les paramètres de génération et les résultats restent visibles.",
      problem: "Les prototypes d’IA deviennent difficiles à fiabiliser lorsque prompts, recherche, appels au fournisseur et traitement de la sortie sont mélangés et impossibles à reconstruire après une panne.",
      implementation: [
        "Exposer un contrat de chat FastAPI explicite au lieu de coupler directement l’interface à un fournisseur de modèles.",
        "Conserver l’identité de la conversation, la sélection de la fenêtre de contexte et la configuration de génération dans le flux du runtime.",
        "Utiliser une recherche documentaire adossée à SQLite et enregistrer si des preuves exploitables ont été trouvées.",
        "Écrire des données d’exécution traçables sur le fournisseur, le modèle, la latence, l’état de recherche et le comportement de repli.",
      ],
      results: [
        "Exécutions locales reproductibles avec configuration et identifiants de trace visibles.",
        "Séparation claire entre le comportement du modèle et la politique du runtime.",
        "Prototype avancé ; aucune prétention de préparation à la production ou à une forte concurrence.",
      ],
      status: "Prototype avancé",
      year: "2026",
      categories: ["IA", "Backend", "Observabilité"],
      architecture: ["Client", "FastAPI", "Politique du runtime", "RAG SQLite", "Ollama", "Enregistrement de trace"],
      highlights: ["Inférence locale", "Mémoire configurable", "État des preuves", "Traces opérationnelles"],
    },
    rolchat: {
      title: "RolChat",
      shortDescription: "Conversations persistantes avec personnages, sessions, mémoires, analyse structurée et réponses en streaming.",
      description: "Un système de conversation local avec état qui explore comment maintenir la cohérence des personnages, sessions, mémoires et références d’images au fil d’interactions répétées.",
      problem: "Une interface de chat perd sa continuité lorsque l’état du personnage, les sessions précédentes et les médias référencés sont traités comme du texte temporaire dans le prompt.",
      implementation: [
        "Persister les personnages, les sessions de conversation et les enregistrements de mémoire dans SQLite.",
        "Diffuser la sortie du modèle vers l’interface avec Server-Sent Events.",
        "Exécuter l’analyse structurée séparément de la réponse visible du personnage.",
        "Stocker des références d’images durables au lieu d’intégrer des chemins locaux temporaires dans les messages.",
      ],
      results: [
        "La continuité des conversations survit aux redémarrages de la page et du processus.",
        "Le streaming améliore le temps de réponse perçu sans masquer l’état final.",
        "Développement local actif ; aucun lien public de démonstration ou de dépôt n’est revendiqué.",
      ],
      status: "Développement actif",
      year: "2026",
      categories: ["IA", "Backend", "Interface"],
      architecture: ["Client web", "API SSE", "Service de session", "Stockage mémoire", "LLM local"],
      highlights: ["Personnages persistants", "Sessions", "Mémoires", "Références d’images"],
    },
    "image-runtime": {
      title: "Runtime d’image / Intégration ComfyUI",
      shortDescription: "Un parcours borné de génération d’images qui isole les contrats API des détails du workflow ComfyUI.",
      description: "Une couche d’intégration pour envoyer des requêtes d’image contrôlées à ComfyUI et FLUX tout en gardant le comportement HTTP spécifique au workflow hors de l’application principale.",
      problem: "Les appels directs de l’interface à ComfyUI dispersent les identifiants de workflow, le comportement d’interrogation et la gestion des erreurs dans toute l’application.",
      implementation: [
        "Valider un contrat réduit de requête d’image à la frontière FastAPI.",
        "Traduire les requêtes métier en entrées de workflow ComfyUI dans un seul adaptateur HTTP.",
        "Conserver l’interrogation de la file, la résolution des résultats et les pannes du fournisseur dans le runtime d’image.",
        "Renvoyer des métadonnées de résultat stables plutôt que des chemins internes du système de fichiers.",
      ],
      results: [
        "Le comportement propre au fournisseur est isolé derrière un runtime contrôlé unique.",
        "Le client principal reste indépendant du JSON du workflow ComfyUI.",
        "Prototype d’intégration ; aucun service hébergé de génération n’est revendiqué.",
      ],
      status: "Prototype d’intégration",
      year: "2026",
      categories: ["IA", "Backend", "Image"],
      architecture: ["Client", "FastAPI", "Runtime d’image", "Adaptateur HTTP", "ComfyUI", "FLUX"],
      highlights: ["Contrats explicites", "Gestion de file", "Isolement du fournisseur", "Génération locale"],
    },
    "engineering-automation": {
      title: "Automatisation de l’ingénierie",
      shortDescription: "Petits outils pour les rapports de production, le traitement des données industrielles et le travail d’ingénierie riche en documents.",
      description: "Une catégorie d’automatisation pratique reliant les données de production à des rapports reproductibles et à des résultats techniques vérifiables.",
      problem: "Les rapports industriels dépendent souvent d’une consolidation manuelle répétée entre feuilles de calcul, isométriques, relevés d’avancement et documents contrôlés.",
      implementation: [
        "Normaliser les entrées récurrentes avant les calculs ou les rapports.",
        "Utiliser Excel, VBA et Power Query lorsque le contexte opérationnel repose déjà sur des classeurs.",
        "Utiliser Python lorsque la validation, la reproductibilité ou le traitement de plusieurs fichiers dépassent la logique d’une feuille de calcul.",
        "Maintenir des points de revue humaine autour des métrés, certifications et rapports publiés.",
      ],
      results: [
        "Cycles de rapports récurrents plus courts et moins d’étapes de transcription manuelle.",
        "Un pont visible entre connaissance industrielle et automatisation logicielle.",
        "Les exemples restent généralisés afin de ne pas publier d’informations d’entreprise.",
      ],
      status: "Outils opérationnels",
      year: "En cours",
      categories: ["Ingénierie", "Automatisation", "Données"],
      architecture: ["Données industrielles", "Validation", "Automatisation", "Rapport de production", "Revue humaine"],
      highlights: ["Rapports de production", "Données de tuyauterie", "Automatisation documentaire", "Résultats vérifiables"],
    },
    "evidence-rag": {
      title: "RAG centré sur les preuves",
      shortDescription: "Recherche documentaire qui rend explicite la disponibilité des preuves avant d’autoriser un modèle à répondre.",
      description: "Un flux de recherche construit autour de la visibilité des sources, d’états de preuve explicites et d’exemples publics synthétiques.",
      problem: "Un modèle de langage peut produire un texte technique convaincant même lorsque les documents disponibles ne le justifient pas.",
      implementation: [
        "Récupérer des fragments de documents contrôlés avant la génération.",
        "Exposer EVIDENCE_FOUND et NO_EVIDENCE comme états métier.",
        "Conserver les identifiants de source et les métadonnées de recherche dans le résultat.",
        "Utiliser des exemples synthétiques dans le portfolio public plutôt que des corpus privés.",
      ],
      results: [
        "Les réponses non étayées peuvent être arrêtées ou signalées avant publication.",
        "Les réviseurs techniques peuvent inspecter le parcours des preuves.",
        "Flux expérimental ; il réduit sans éliminer le risque d’hallucination.",
      ],
      status: "Expérimental",
      year: "2026",
      categories: ["IA", "RAG", "Traçabilité"],
      architecture: ["Question", "Recherche documentaire", "État des preuves", "Prompt contrôlé", "Réponse + sources"],
      highlights: ["Preuve explicite", "Métadonnées de source", "Corpus synthétique", "Réponse sans preuve"],
    },
    "runtime-observability": {
      title: "Observabilité du runtime",
      shortDescription: "Traces reliant la sortie de l’IA au fournisseur, à la recherche, à la latence, au repli et au contexte d’erreur.",
      description: "Un modèle local d’observabilité pour comprendre le parcours d’une requête d’IA dans un runtime sans présenter des traces sur fichiers comme une supervision de production.",
      problem: "Les équipes ne peuvent pas déboguer le comportement de l’IA lorsque le modèle, la configuration, l’état de recherche, le repli et la latence deviennent invisibles après l’exécution.",
      implementation: [
        "Attribuer un identifiant de trace stable à chaque exécution.",
        "Enregistrer le fournisseur, le modèle, l’état de recherche, la latence, les métadonnées de tokens et les erreurs lorsqu’ils sont disponibles.",
        "Garder les champs propres à l’interface secondaires par rapport au comportement du runtime.",
        "Publier uniquement des exemples de traces synthétiques et sélectionnés.",
      ],
      results: [
        "Les exécutions individuelles peuvent être comparées et reconstruites localement.",
        "Les états d’échec restent visibles au lieu d’être réduits à un message générique.",
        "Observabilité locale en JSONL ; aucune supervision centralisée n’est revendiquée.",
      ],
      status: "Démonstration",
      year: "2026",
      categories: ["Backend", "Observabilité", "IA"],
      architecture: ["Requête", "Runtime", "Fournisseur / RAG", "Réponse", "Trace JSONL"],
      highlights: ["trace_id", "Latence", "Repli", "Erreurs structurées"],
    },
  },
};

export function getLocalizedProjects(locale: Locale): Project[] {
  if (locale === "en") return projects;

  const copy = translations[locale];
  const githubLabel = getUi(locale).common.githubProfile;

  return projects.map((project) => ({
    ...project,
    ...copy[project.id],
    links: project.links.map((link) => ({
      ...link,
      label: link.href.includes("github.com") ? githubLabel : link.label,
    })),
  }));
}

export function getLocalizedProject(locale: Locale, slug: string): Project | undefined {
  return getLocalizedProjects(locale).find((project) => project.slug === slug);
}

