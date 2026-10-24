import { defineConfig } from 'astro/config';

// Set SITE_URL to your production origin before deploying.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  output: 'static',
  trailingSlash: 'always',
});
