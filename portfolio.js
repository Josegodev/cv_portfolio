const root = document.documentElement;
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) root.dataset.theme = savedTheme;

document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
  });
});

const navToggle = document.querySelector("[data-nav-toggle]");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
}

document.querySelectorAll(".site-nav a, .anchor-nav a, .topic-grid a").forEach((link) => {
  link.addEventListener("click", () => document.body.classList.remove("nav-open"));
});

document.querySelectorAll("[data-detail-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    const isHidden = panel.hasAttribute("hidden");
    panel.toggleAttribute("hidden");
    button.textContent = isHidden ? "Hide technical notes" : "Show technical notes";
  });
});

const filterButtons = document.querySelectorAll("[data-project-filter]");
const searchInput = document.querySelector("[data-project-search]");
const projectCards = document.querySelectorAll("[data-project]");
let activeFilter = "all";

function applyProjectFilter() {
  const query = (searchInput?.value || "").trim().toLowerCase();

  projectCards.forEach((card) => {
    const tags = card.dataset.tags || "";
    const text = card.textContent.toLowerCase();
    const passesFilter = activeFilter === "all" || tags.includes(activeFilter);
    const passesSearch = !query || tags.includes(query) || text.includes(query);
    card.hidden = !(passesFilter && passesSearch);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.projectFilter;
    filterButtons.forEach((candidate) => candidate.classList.toggle("active", candidate === button));
    applyProjectFilter();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", applyProjectFilter);
}

document.querySelectorAll("[data-filter-topic]").forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.dataset.filterTopic;
    const target = topic === "automation" ? "projects.html#automation" : `projects.html?topic=${encodeURIComponent(topic)}`;
    window.location.href = target;
  });
});

const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");
if (topic && filterButtons.length) {
  const match = Array.from(filterButtons).find((button) => button.dataset.projectFilter === topic);
  if (match) match.click();
}

if (window.location.hash) {
  const target = document.querySelector(window.location.hash);
  if (target) {
    target.animate(
      [
        { outlineColor: "transparent", backgroundColor: "transparent" },
        { outlineColor: "var(--primary)", backgroundColor: "color-mix(in srgb, var(--primary) 12%, transparent)" },
        { outlineColor: "transparent", backgroundColor: "transparent" }
      ],
      { duration: 1400, easing: "ease-out" }
    );
  }
}
