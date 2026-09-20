declare global {
  interface Window {
    portfolioController?: AbortController;
  }
}

const themeOrder = ["system", "dark", "light"] as const;
type Theme = (typeof themeOrder)[number];

function readTheme(): Theme {
  const value = document.documentElement.dataset.theme;
  return value === "light" || value === "dark" ? value : "system";
}

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
  try {
    if (theme === "system") {
      localStorage.removeItem("portfolio-theme");
    } else {
      localStorage.setItem("portfolio-theme", theme);
    }
  } catch {
    // The theme still works for this visit when storage is unavailable.
  }

  document.querySelectorAll<HTMLElement>("[data-theme-label]").forEach((label) => {
    label.textContent = theme === "dark"
      ? label.dataset.themeDark ?? "Dark"
      : theme === "light"
        ? label.dataset.themeLight ?? "Light"
        : label.dataset.themeSystem ?? "System";
  });
}

function setupPage(): void {
  window.portfolioController?.abort();
  const controller = new AbortController();
  window.portfolioController = controller;
  const { signal } = controller;

  applyTheme(readTheme());

  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((button) => {
    button.addEventListener(
      "click",
      () => {
        const current = readTheme();
        const next = themeOrder[(themeOrder.indexOf(current) + 1) % themeOrder.length];
        applyTheme(next);
      },
      { signal },
    );
  });

  const navToggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const siteNav = document.querySelector<HTMLElement>("[data-site-nav]");

  function setNavigation(open: boolean): void {
    document.body.classList.toggle("nav-open", open);
    navToggle?.setAttribute("aria-expanded", String(open));
    navToggle?.setAttribute(
      "aria-label",
      open
        ? navToggle.dataset.closeLabel ?? "Close navigation"
        : navToggle.dataset.openLabel ?? "Open navigation",
    );
  }

  navToggle?.addEventListener(
    "click",
    () => setNavigation(!document.body.classList.contains("nav-open")),
    { signal },
  );

  siteNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavigation(false), { signal });
  });

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") setNavigation(false);
    },
    { signal },
  );

  document.querySelectorAll<HTMLSelectElement>("[data-language-select]").forEach((select) => {
    select.addEventListener(
      "change",
      () => {
        if (select.value) window.location.assign(select.value);
      },
      { signal },
    );
  });

  const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));

  if (sections.length && "IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        const activeSection = (visible.target as HTMLElement).dataset.section;
        navLinks.forEach((link) => {
          const active = link.dataset.navLink === activeSection;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-35% 0px -55%", threshold: [0, 0.15, 0.4] },
    );
    sections.forEach((section) => sectionObserver.observe(section));
    signal.addEventListener("abort", () => sectionObserver.disconnect());
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

  if (!reduceMotion && reveals.length && "IntersectionObserver" in window) {
    document.body.classList.add("motion-ready");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );
    reveals.forEach((element) => revealObserver.observe(element));
    signal.addEventListener("abort", () => revealObserver.disconnect());
  } else {
    reveals.forEach((element) => element.classList.add("is-visible"));
  }

  const heroVisual = document.querySelector<HTMLElement>("[data-hero-visual]");
  if (heroVisual && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    heroVisual.addEventListener(
      "pointermove",
      (event) => {
        const bounds = heroVisual.getBoundingClientRect();
        heroVisual.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
        heroVisual.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
      },
      { signal },
    );
  }
}

document.addEventListener("astro:page-load", setupPage);
document.addEventListener("astro:after-swap", () => applyTheme(readTheme()));

if (document.readyState !== "loading") setupPage();

export {};
