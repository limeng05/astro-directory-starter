# Architecture and adding tools

## Data first

`src/data/tools.ts` exports the `Tool` interface, category definitions, and an ordered array of resources. Every entry needs a unique lowercase slug, name, HTTPS URL, category, short description, explanatory body, and tags.

```ts
{
  slug: 'my-tool',
  name: 'My Tool',
  url: 'https://my-tool.example/',
  category: 'development',
  description: 'One clear sentence about what the tool does.',
  body: 'Explain a concrete use case and what the visitor should evaluate.',
  tags: ['code', 'learning'],
}
```

Add it to the `tools` array, then run `npm test`. Build-time validation rejects duplicate or malformed slugs, unknown categories, empty content, and non-HTTPS destinations. Add categories to the `categories` array before using them.

## Generated routes

Astro calls `getStaticPaths()` during the build. The tool route emits one page per entry; the category route emits one page per category. `paginate()` slices tools into pages of `PAGE_SIZE` entries and supplies previous/next URLs. `/directory/1/` is the first page; the homepage has its own distinct introduction and searchable collection.

The sitemap uses the same data and page-size constant, so adding a tool updates detail routes and sitemap entries together. The output contains ordinary HTML links for crawlers and visitors without JavaScript.

## Search behavior

`Directory.astro` renders every sample tool. A small browser script matches the lowercased name, description, and tags, then intersects the result with the selected category. An accessible live region announces the count; a reset button clears both controls. The URL stores `q` and `category` so results can be shared. Category pages remain available with JavaScript disabled.

This is appropriate for a small directory. As data grows, use a generated search index or a search service and paginate large categories too.

## Editorial references

The sample NavSprout and AINavly entries disclose the author's relationship. They show the same metadata model as other resources. Their production source code and private data are not part of this starter.

## Further reading

- [Astro routing and pagination](https://docs.astro.build/en/guides/routing/)
- [Astro TypeScript](https://docs.astro.build/en/guides/typescript/)
