import type { APIRoute } from 'astro';
import { categories, tools, PAGE_SIZE } from '../data/tools';
export const GET: APIRoute = ({ site }) => {
  const paths = ['/', '/about/', ...tools.map(t => `/tools/${t.slug}/`), ...categories.map(c => `/categories/${c.slug}/`), ...Array.from({ length: Math.ceil(tools.length / PAGE_SIZE) }, (_, i) => `/directory/${i + 1}/`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${new URL(path, site).href}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
