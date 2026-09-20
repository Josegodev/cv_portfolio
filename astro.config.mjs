import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://josegodev.github.io",
  base: "/cv_portfolio",
  output: "static",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
