export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  implementation: string[];
  results: string[];
  status: string;
  year: string;
  categories: string[];
  technologies: string[];
  featured: boolean;
  architecture: string[];
  highlights: string[];
  links: ProjectLink[];
  accent: "blue" | "amber" | "green" | "violet";
}

export const projects: Project[] = [
  {
    id: "nucleo-chat",
    slug: "nucleo-chat",
    title: "NucleoChat / LOCALES",
    shortDescription:
      "A controlled local AI runtime around FastAPI, Ollama, memory, RAG and auditable execution traces.",
    description:
      "NucleoChat evolves a stateless local chat into an inspectable runtime where requests, context, evidence, generation settings and results remain visible.",
    problem:
      "AI prototypes become hard to trust when prompts, retrieval, provider calls and output handling are mixed together and cannot be reconstructed after a failure.",
    implementation: [
      "Expose an explicit FastAPI chat contract rather than coupling the UI directly to a model provider.",
      "Keep conversation identity, context-window selection and generation configuration inside the runtime flow.",
      "Use SQLite-backed document retrieval and record whether usable evidence was found.",
      "Write traceable execution data around provider, model, latency, retrieval state and fallback behavior.",
    ],
    results: [
      "Reproducible local runs with visible configuration and trace identifiers.",
      "Clear separation between model behavior and runtime policy.",
      "Advanced prototype; no production-readiness or high-concurrency claim.",
    ],
    status: "Advanced prototype",
    year: "2026",
    categories: ["AI", "Backend", "Observability"],
    technologies: ["Python", "FastAPI", "Ollama", "SQLite", "RAG", "JSONL"],
    featured: true,
    architecture: ["Client", "FastAPI", "Runtime policy", "SQLite RAG", "Ollama", "Trace record"],
    highlights: ["Local inference", "Configurable memory", "Evidence state", "Operational traces"],
    links: [{ label: "GitHub profile", href: "https://github.com/Josegodev" }],
    accent: "green",
  },
  {
    id: "rolchat",
    slug: "rolchat",
    title: "RolChat",
    shortDescription:
      "Persistent character conversations with sessions, memories, structured analysis and streamed responses.",
    description:
      "A stateful local conversation system exploring how characters, sessions, memories and image references can remain coherent across repeated interactions.",
    problem:
      "A chat interface loses continuity when character state, prior sessions and referenced media are treated as temporary prompt text.",
    implementation: [
      "Persist characters, conversation sessions and memory records in SQLite.",
      "Stream model output to the interface using Server-Sent Events.",
      "Run structured analysis separately from the visible character response.",
      "Store durable image references instead of embedding transient local paths in messages.",
    ],
    results: [
      "Conversation continuity survives page and process restarts.",
      "Streaming improves perceived response time without hiding final state.",
      "Active local development; public demo and repository links are not claimed.",
    ],
    status: "Active development",
    year: "2026",
    categories: ["AI", "Backend", "Interface"],
    technologies: ["FastAPI", "SQLite", "SSE", "Ollama", "Python"],
    featured: true,
    architecture: ["Web client", "SSE API", "Session service", "Memory store", "Local LLM"],
    highlights: ["Persistent characters", "Sessions", "Memories", "Image references"],
    links: [{ label: "GitHub profile", href: "https://github.com/Josegodev" }],
    accent: "violet",
  },
  {
    id: "image-runtime",
    slug: "image-runtime",
    title: "Image Runtime / ComfyUI Integration",
    shortDescription:
      "A bounded image-generation path that isolates API contracts from ComfyUI workflow details.",
    description:
      "An integration layer for sending controlled image requests to ComfyUI and FLUX while keeping workflow-specific HTTP behavior outside the main application.",
    problem:
      "Direct UI-to-ComfyUI calls spread workflow identifiers, polling behavior and error handling across the application.",
    implementation: [
      "Validate a small image request contract at the FastAPI boundary.",
      "Translate domain requests into ComfyUI workflow inputs inside one HTTP adapter.",
      "Keep queue polling, result resolution and provider failures inside the image runtime.",
      "Return stable result metadata rather than internal filesystem paths.",
    ],
    results: [
      "Provider-specific behavior is isolated behind one controlled runtime.",
      "The main client remains independent of ComfyUI workflow JSON.",
      "Integration prototype; no hosted generation service is claimed.",
    ],
    status: "Integration prototype",
    year: "2026",
    categories: ["AI", "Backend", "Image"],
    technologies: ["FastAPI", "ComfyUI", "FLUX", "HTTP", "Python"],
    featured: true,
    architecture: ["Client", "FastAPI", "Image Runtime", "HTTP Adapter", "ComfyUI", "FLUX"],
    highlights: ["Explicit contracts", "Queue handling", "Provider isolation", "Local generation"],
    links: [{ label: "GitHub profile", href: "https://github.com/Josegodev" }],
    accent: "blue",
  },
  {
    id: "engineering-automation",
    slug: "engineering-automation",
    title: "Engineering Automation",
    shortDescription:
      "Small tools for production reporting, industrial data treatment and document-heavy engineering work.",
    description:
      "A category of practical automation work connecting production data with repeatable reporting and reviewable technical outputs.",
    problem:
      "Industrial reporting often depends on repeated manual consolidation across spreadsheets, isometrics, progress records and controlled documents.",
    implementation: [
      "Normalize recurring inputs before calculations or reporting.",
      "Use Excel, VBA and Power Query where the operating context already depends on workbooks.",
      "Use Python when validation, repeatability or multi-file processing outgrows spreadsheet logic.",
      "Keep human review points around measurements, certifications and released reports.",
    ],
    results: [
      "Shorter recurring reporting cycles and fewer manual transcription steps.",
      "A visible bridge between industrial knowledge and software automation.",
      "Examples remain generalized to avoid publishing company information.",
    ],
    status: "Operational tooling",
    year: "Ongoing",
    categories: ["Engineering", "Automation", "Data"],
    technologies: ["Python", "Excel", "VBA", "Power Query", "AutoCAD"],
    featured: true,
    architecture: ["Industrial data", "Validation", "Automation", "Production report", "Human review"],
    highlights: ["Production reporting", "Piping data", "Document automation", "Reviewable outputs"],
    links: [],
    accent: "amber",
  },
  {
    id: "evidence-rag",
    slug: "evidence-first-rag",
    title: "Evidence-First RAG",
    shortDescription:
      "Document retrieval that makes evidence availability explicit before a model is allowed to answer.",
    description:
      "A retrieval flow built around source visibility, explicit evidence states and synthetic public examples.",
    problem:
      "A language model can produce confident technical text even when the available documents do not support it.",
    implementation: [
      "Retrieve controlled document chunks before generation.",
      "Expose EVIDENCE_FOUND and NO_EVIDENCE as domain states.",
      "Preserve source identifiers and retrieval metadata in the result.",
      "Use synthetic examples in the public portfolio rather than private corpora.",
    ],
    results: [
      "Unsupported answers can be stopped or marked before publication.",
      "Technical reviewers can inspect the evidence path.",
      "Experimental flow; it reduces but does not eliminate hallucination risk.",
    ],
    status: "Experimental",
    year: "2026",
    categories: ["AI", "RAG", "Traceability"],
    technologies: ["Python", "FastAPI", "SQLite", "BM25", "Ollama"],
    featured: false,
    architecture: ["Question", "Document search", "Evidence state", "Controlled prompt", "Answer + sources"],
    highlights: ["Explicit evidence", "Source metadata", "Synthetic corpus", "No-evidence response"],
    links: [],
    accent: "green",
  },
  {
    id: "runtime-observability",
    slug: "runtime-observability",
    title: "Runtime Observability",
    shortDescription:
      "Trace records that connect AI output to provider, retrieval, latency, fallback and error context.",
    description:
      "A local observability pattern for understanding how an AI request moved through a runtime without presenting file-based traces as production monitoring.",
    problem:
      "Teams cannot debug AI behavior when model, configuration, retrieval state, fallback and latency are invisible after execution.",
    implementation: [
      "Assign a stable trace identifier to each execution.",
      "Record provider, model, retrieval state, latency, token metadata and errors when available.",
      "Keep interface-specific fields secondary to runtime behavior.",
      "Publish only curated synthetic trace samples.",
    ],
    results: [
      "Individual executions can be compared and reconstructed locally.",
      "Failure states remain visible instead of collapsing into a generic message.",
      "Local JSONL observability; no centralized monitoring claim.",
    ],
    status: "Demonstration",
    year: "2026",
    categories: ["Backend", "Observability", "AI"],
    technologies: ["FastAPI", "JSONL", "Python", "Ollama"],
    featured: false,
    architecture: ["Request", "Runtime", "Provider / RAG", "Response", "JSONL trace"],
    highlights: ["trace_id", "Latency", "Fallback", "Structured errors"],
    links: [],
    accent: "blue",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
