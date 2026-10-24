export const categories = [
  { slug: 'development', name: 'Development', description: 'Build, test, and ship for the web.' },
  { slug: 'design', name: 'Design', description: 'Make ideas visible and usable.' },
  { slug: 'discovery', name: 'Discovery', description: 'Find useful tools and new ideas.' },
] as const;
export type Category = typeof categories[number]['slug'];
export interface Tool {
  slug: string;
  name: string;
  url: string;
  category: Category;
  description: string;
  body: string;
  tags: string[];
}
export const tools: Tool[] = [
  { slug: 'astro', name: 'Astro', url: 'https://astro.build/', category: 'development', description: 'A web framework for content-driven websites.', body: 'Use Astro to generate fast, static pages from reusable components. This starter uses file-based routing and build-time data to create a browsable directory without a database.', tags: ['framework', 'static sites'] },
  { slug: 'typescript', name: 'TypeScript', url: 'https://www.typescriptlang.org/', category: 'development', description: 'JavaScript with a type system for clearer data contracts.', body: 'A typed metadata model makes directory entries consistent. TypeScript helps catch missing fields and invalid category names before the site is deployed.', tags: ['code', 'types'] },
  { slug: 'mdn', name: 'MDN Web Docs', url: 'https://developer.mozilla.org/', category: 'development', description: 'Documentation for the building blocks of the web.', body: 'Look up HTML elements, CSS properties, browser APIs, and accessibility patterns while building your directory. Start with the platform before adding more dependencies.', tags: ['documentation', 'learning'] },
  { slug: 'penpot', name: 'Penpot', url: 'https://penpot.app/', category: 'design', description: 'An open-source platform for interface design and collaboration.', body: 'Sketch your directory navigation, tool cards, and detail pages before implementing them. A small design system helps keep new page types consistent.', tags: ['interface', 'open source'] },
  { slug: 'svgomg', name: 'SVGOMG', url: 'https://jakearchibald.github.io/svgomg/', category: 'design', description: 'A browser interface for optimizing SVG files.', body: 'Optimize your own SVG illustrations and icons before adding them to the public folder. Inspect the result to ensure small details survive optimization.', tags: ['svg', 'optimization'] },
  { slug: 'navsprout', name: 'NavSprout', url: 'https://navsprout.com/', category: 'discovery', description: 'A curated directory for useful websites, web apps, and online tools.', body: 'NavSprout is a real-world directory project maintained by this starter’s author. Explore how curated descriptions, categories, and use cases can help visitors choose a tool. It is an editorial reference, not a claim that its production code is included here.', tags: ['directory', 'web tools'] },
  { slug: 'ainavly', name: 'AINavly', url: 'https://ainavly.com/', category: 'discovery', description: 'Discover AI tools, creative applications, web projects, and browser games.', body: 'AINavly is another directory project maintained by this starter’s author. Its mix of practical tools and playful discoveries illustrates why clear categories and useful detail pages matter. This repository is an independent teaching example.', tags: ['directory', 'ai', 'games'] },
  { slug: 'github', name: 'GitHub', url: 'https://github.com/', category: 'development', description: 'Host source code and collaborate on software projects.', body: 'Keep your directory data alongside its source code. Pull requests provide a reviewable way to suggest new tools, correct descriptions, and improve the implementation.', tags: ['git', 'collaboration'] },
];
// Fail the build on malformed data instead of publishing broken detail links.
const slugs = new Set<string>();
for (const tool of tools) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(tool.slug) || slugs.has(tool.slug)) throw new Error(`Invalid or duplicate slug: ${tool.slug}`);
  if (!categories.some(c => c.slug === tool.category)) throw new Error(`Unknown category: ${tool.category}`);
  if (new URL(tool.url).protocol !== 'https:') throw new Error(`Use HTTPS for ${tool.name}`);
  if (![tool.name, tool.description, tool.body].every(s => s.trim())) throw new Error(`Missing content: ${tool.slug}`);
  slugs.add(tool.slug);
}
export const PAGE_SIZE = 6;
