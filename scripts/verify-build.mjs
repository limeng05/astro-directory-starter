import { readdir, readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import assert from 'node:assert/strict';
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(join(dir, entry.name)) : join(dir, entry.name)))).flat();
}
const base = '/astro-directory-starter';
const origin = 'https://limeng05.github.io';
const files = await walk('dist');
const pages = files.filter(file => file.endsWith('.html'));
assert.equal(pages.length, 16, 'Update expected route coverage when changing sample data');
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  assert.match(html, /<title>.+?<\/title>/, `${file}: title`);
  assert.match(html, /name="description"/, `${file}: description`);
  assert.match(html, /rel="canonical"/, `${file}: canonical`);
  assert.ok(html.includes(`href="${origin}${base}/`), `${file}: canonical base`);
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)[^\"]*"/g)) {
    assert.ok(href.startsWith(`${base}/`), `${file}: missing base in ${href}`);
    const local = href.slice(base.length);
    const target = local.endsWith('/') ? `dist${local}index.html` : `dist${local}`;
    await access(target).catch(() => assert.fail(`${file}: broken internal link ${href}`));
  }
  if (file.includes('/tools/')) {
    const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
    assert.ok(json, `${file}: JSON-LD`);
    assert.equal(JSON.parse(json[1])['@type'], 'WebPage');
  }
}
const page1 = await readFile('dist/directory/1/index.html', 'utf8');
const page2 = await readFile('dist/directory/2/index.html', 'utf8');
assert.equal((page1.match(/data-tool /g) || []).length, 6);
assert.equal((page2.match(/data-tool /g) || []).length, 2);
const home = await readFile('dist/index.html', 'utf8');
assert.equal((home.match(/data-tool /g) || []).length, 8, 'Search must cover the entire collection');
for (const domain of ['navsprout.com', 'ainavly.com']) {
  const about = await readFile('dist/about/index.html', 'utf8');
  assert.ok(about.includes(`https://${domain}/`));
}
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, 15);
assert.ok(sitemap.includes(new URL(`${base}/tools/navsprout/`, origin).href));
assert.ok((await readFile('dist/robots.txt', 'utf8')).includes(new URL(`${base}/sitemap.xml`, origin).href));
console.log(`Verified ${pages.length} HTML pages, internal links, pagination, metadata, JSON-LD, and sitemap.`);
