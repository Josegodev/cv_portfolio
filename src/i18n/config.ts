import { withBase } from "../utils/paths";

export const locales = ["en", "es", "fr"] as const;
export const translatedLocales = ["es", "fr"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export function localizedPath(locale: Locale, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (locale === "en") return withBase(normalized);
  if (normalized === "/") return withBase(`/${locale}/`);

  return withBase(`/${locale}${normalized}`);
}

