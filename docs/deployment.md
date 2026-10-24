# Deploy to Cloudflare Pages

This project outputs static HTML. It does not require the Cloudflare SSR adapter.

1. Push the repository to your GitHub account.
2. In Cloudflare, create a Pages project and connect this repository.
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Set the build environment variable `NODE_VERSION` to `24`.
5. Set `SITE_URL` to the final public origin, such as `https://your-project.pages.dev`.
6. Deploy. If you add a custom domain, update `SITE_URL` and rebuild.

Use the repository root as the build root. Do not upload `.env`, `node_modules`, or local credentials. `.env.example` documents the expected variable; the deployment environment is the authoritative configuration.

Before production, run `SITE_URL=https://your-domain.example npm test`. Verify the homepage, `/directory/2/`, a category page, a tool page, `/sitemap.xml`, `/robots.txt`, and an unknown URL. Cloudflare Pages serves the generated `404.html` for missing pages.

For preview deployments, be aware that the built canonical URL uses `SITE_URL`. Set preview-specific indexing rules in your hosting configuration if previews are public.

Reference: [Astro deployment to Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/).
