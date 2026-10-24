# Deployment

## GitHub Pages (default)

The default `astro.config.mjs` uses `site: 'https://limeng05.github.io'` and `base: '/astro-directory-starter'`. Internal links, assets, canonical URLs, and the sitemap support that subpath. Astro's pagination URLs already include the configured base.

1. In repository Settings → Pages → Build and deployment, choose **GitHub Actions** as the source.
2. Push to `main`, or manually run **Deploy Astro to GitHub Pages** in the Actions tab.
3. Wait for both `build` and `deploy` jobs to succeed.
4. Open https://limeng05.github.io/astro-directory-starter/.

The workflow uses the official Astro action to install dependencies, build, and upload the Pages artifact. The deployment job publishes that artifact using GitHub's Pages action. Deployments are serialized to avoid overlapping publication.

For your own fork, update `site` to your GitHub Pages origin and `base` to your repository name. For a custom domain at the root, change `site` to that origin and `base` to `/`. Update the expected origin/base in `scripts/verify-build.mjs` too.

Run `npm test` before pushing. Verify the homepage, the second directory page, category and tool pages, CSS and JavaScript loading, and sitemap URLs after deployment. GitHub Pages only reads `robots.txt` at the origin root; the copy under this project subpath is informational. The sitemap can be submitted using its full project URL.

Reference: [Astro deployment to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).

## Cloudflare Pages (alternative)

The project outputs static HTML and does not need an SSR adapter. Change `site` to your Cloudflare/custom origin and `base` to `/`, then update test expectations.

Connect the repository in Cloudflare Pages. Set the build command to `npm run build`, output directory to `dist`, and build environment `NODE_VERSION` to `24`. Use the repository root as the build root. Rebuild after changing the public origin.

Reference: [Astro deployment to Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/).
