// Keep public assets and internal navigation under Astro's configured base.
export function withBase(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
