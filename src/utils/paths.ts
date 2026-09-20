const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function withBase(path = ""): string {
  if (/^(?:https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  const normalized = path.replace(/^\/+/, "");
  return normalized ? `${base}${normalized}` : base;
}
