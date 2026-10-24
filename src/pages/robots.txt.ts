import { withBase } from '../lib/paths';
import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL(withBase('/sitemap.xml'), site).href}\n`, { headers: { 'Content-Type': 'text/plain' } });
