# Astro Directory Starter

A practical starter project for building tool directories with Astro. This is a working static site with eight sample resources, not just a list of promotional links.

## What this project covers

- Static pages and build-time pagination with `getStaticPaths()` and `paginate()`
- SEO-friendly tool detail pages with unique titles, descriptions, canonical URLs, and JSON-LD
- Typed, validated tool metadata
- Search across the full collection and category filtering, with shareable filter URLs
- Category pages and pagination that work without JavaScript
- Generated sitemap, robots.txt, a custom 404 page, and responsive, accessible layouts
- Cloudflare Pages deployment without a server adapter

## Getting started

Use Node.js 24 (see `.nvmrc`).

```sh
npm install
npm run dev
```

Open `http://localhost:4321/astro-directory-starter/`. Edit `src/data/tools.ts` to add or change tools.

```sh
npm test       # Type checking, production build, generated-page verification
npm run build # Output: dist/
npm run preview
```

## Live demo and deployment

[Open the GitHub Pages demo](https://limeng05.github.io/astro-directory-starter/).

The default configuration targets this repository's GitHub Pages URL. Set `site` and `base` in `astro.config.mjs` when using your own repository or domain. For a custom domain hosted at its root, use `base: '/'`.

The deployment workflow runs on pushes to `main`. In repository Settings → Pages, select **GitHub Actions** as the build source. See [deployment instructions](docs/deployment.md).

## Project structure

```text
src/
  data/tools.ts                  # Tool interface, category definitions, sample data
  components/Directory.astro     # Search and filter the complete collection
  components/ToolCard.astro      # Shared resource card
  layouts/Layout.astro           # Shared shell and metadata
  pages/index.astro              # Homepage and searchable collection
  pages/directory/[page].astro   # Static pagination, six tools per page
  pages/categories/[category].astro
  pages/tools/[slug].astro       # Individual resource pages and structured data
  pages/sitemap.xml.ts
  pages/robots.txt.ts
  styles/global.css
scripts/verify-build.mjs          # Internal links and SEO output smoke checks
```

The homepage searches all entries; paginated pages are a separate browsing path. For larger collections, move search into a dedicated index instead of rendering every entry on the homepage.

## Real-world projects

This approach is inspired by two directory projects I'm working on. They are editorial references; this repository does not contain their production implementations.

### NavSprout

[NavSprout](https://navsprout.com/) is a curated directory for discovering useful websites, web apps, and online tools. It provides a real-world reference for category navigation, editorial descriptions, and use cases.

### AINavly

[AINavly](https://ainavly.com/) covers AI tools, creative applications, useful web projects, and browser games. It illustrates how a directory can organize different types of discoveries.

## Documentation

- [Architecture and adding tools](docs/architecture.md)
- [SEO and editorial practices](docs/seo.md)
- [Deploy to GitHub Pages or Cloudflare Pages](docs/deployment.md)
- [Repository publishing checklist](docs/publishing.md)
- [Contributing](CONTRIBUTING.md)

## Scope

This starter has no database, accounts, submissions backend, affiliate tracking, or paid placements. Sample descriptions are educational examples; check provider websites for current features and terms.

## License

MIT. See [LICENSE](LICENSE).
