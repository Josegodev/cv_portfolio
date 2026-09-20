# CV Portfolio — José González Oliva

Static Astro portfolio presenting a hybrid professional profile across engineering, industrial operations, automation and applied AI/software.

## Architecture

- Astro generates static HTML for GitHub Pages.
- TypeScript data files are the source of truth for experience, education, skills and projects.
- CSS handles the visual system and simple motion.
- Client JavaScript is limited to navigation, theme selection, section state and controlled reveal effects.
- Project pages are generated from `src/data/projects.ts`.

The previous root and `/docs` HTML files remain temporarily as migration fallback. GitHub Actions publishes only the Astro `dist/` artifact.

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run check:links
npm test
```

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and validates the site on pushes to `main`. In repository settings, GitHub Pages must use **GitHub Actions** as its source.

The production URL is `https://josegodev.github.io/cv_portfolio/`. Astro's `site` and `base` settings must remain aligned with that project URL.

## Safety

This repository is a curated public view. It should not publish private logs, real traces, corpora, credentials, tokens, private IPs, local paths, customer data or confidential documentation.

The included JSON examples are synthetic.
