# SEO and editorial practices

## What the starter generates

Each indexable page has a title, description, self-referencing canonical, and Open Graph metadata. Detail pages include Schema.org `WebPage` data describing the linked website; they do not invent ratings, prices, or reviews. A generated sitemap includes all public content pages. The 404 page uses `noindex`.

Set `site` and `base` in `astro.config.mjs` before deploying. Inspect `dist/sitemap.xml`, `dist/robots.txt`, and a generated detail page to confirm the public origin is correct. Search query parameters are intentionally excluded from canonical URLs so every filter combination does not create a new canonical page.

## Write pages that help readers

Describe the job a resource helps with, who it suits, and what visitors should check. Avoid copying provider descriptions or creating many thin category pages. Recheck outbound links and claims as products change. Static HTML makes content available to crawlers; it does not guarantee indexing or rankings.

The author's [NavSprout](https://navsprout.com/) directory is a reference for curated tool discovery and use-case descriptions. [AINavly](https://ainavly.com/) provides a reference for organizing AI tools, creative web projects, and browser games. These are disclosed editorial references, not independent endorsements.

## External links and measurement

The starter uses ordinary descriptive links. If you add sponsored or affiliate placements, label the relationship and use appropriate `rel` attributes. Do not fabricate reviews or imply endorsement by a provider.

GitHub controls the rendered HTML attributes on its own pages. Inspect the published README in a browser to see the actual `rel` values. Ahrefs Domain Rating is a third-party metric, not a promise of search traffic: neither a link in this repository nor GitHub's domain authority guarantees a DR increase. After publishing, check whether the exact referring page and domain appear in your analytics provider's reports.
