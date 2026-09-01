/**
 * Post-build prerender.
 *
 * Why this exists: the site is a client-rendered SPA, so the HTML served for every
 * route is an empty shell. Googlebot executes JavaScript and copes, but the AI
 * crawlers (GPTBot, ClaudeBot, PerplexityBot) do not run JS at all - they read the
 * raw HTML and move on. Without this step they see a blank page on every route.
 *
 * What it does: serves the finished dist/ locally, loads each route in headless
 * Chrome, waits for React to render, and writes the resulting DOM to a real HTML
 * file. Crawlers then get complete markup and per-route metadata; browsers still
 * boot the SPA exactly as before, because the script tags are preserved.
 *
 * Deliberately a post-build step rather than a framework migration: it touches no
 * routing code, and deleting this file returns the project to a plain SPA build.
 *
 * Uses puppeteer-core against the system Chrome, so there is no bundled browser
 * download. Set CHROME_PATH if Chrome lives somewhere unusual.
 */
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const PORT = 4178;

const { routePaths } = await import(join(root, 'src/lib/routeMeta.ts').replace(/\.ts$/, '.js'))
  .catch(() => ({ routePaths: null }));

// routeMeta.ts is TypeScript, so rather than compile it just parse the paths out.
const paths =
  routePaths ??
  [...(await readFile(join(root, 'src/lib/routeMeta.ts'), 'utf8')).matchAll(/^\s*'(\/[^']*)':\s*\{/gm)].map(
    m => m[1],
  );

if (!paths.length) throw new Error('prerender: could not determine routes from src/lib/routeMeta.ts');

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.mp4': 'video/mp4', '.xml': 'application/xml', '.txt': 'text/plain',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ico': 'image/x-icon',
};

// Minimal static server with SPA fallback, mirroring what .htaccess does in production.
const server = createServer(async (req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let file = join(dist, urlPath);
  if (!existsSync(file) || !extname(file)) file = join(dist, 'index.html');
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end('not found');
  }
});
await new Promise(r => server.listen(PORT, r));

const CHROME =
  process.env.CHROME_PATH ??
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (!existsSync(CHROME)) {
  server.close();
  throw new Error(`prerender: Chrome not found at ${CHROME}. Set CHROME_PATH to your Chrome binary.`);
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

let written = 0;
try {
  for (const path of paths) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    // Scroll-triggered animations start at opacity 0. That does not hide text from a
    // crawler, but forcing the finished state keeps the saved markup clean and avoids
    // capturing a half-played animation.
    await page.evaluateOnNewDocument(() => {
      const style = document.createElement('style');
      style.textContent = '*,*::before,*::after{animation:none!important;transition:none!important}';
      document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));
    });

    await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: 'networkidle0', timeout: 60_000 });
    await page.waitForSelector('#root > *', { timeout: 30_000 });

    // Let RouteMeta's effect and any late layout settle before capturing.
    await new Promise(r => setTimeout(r, 400));

    const html = await page.evaluate(() => {
      document.querySelectorAll('[style*="opacity: 0"]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return '<!doctype html>\n' + document.documentElement.outerHTML;
    });

    const title = await page.title();
    // Written as <route>.html rather than <route>/index.html: a directory would make
    // Apache 301 /floor-plans to /floor-plans/, which contradicts the canonical URL.
    // .htaccess maps the clean path to this file with no redirect.
    const outFile = path === '/' ? join(dist, 'index.html') : join(dist, `${path.slice(1)}.html`);
    await mkdir(dirname(outFile), { recursive: true });
    await writeFile(outFile, html, 'utf8');

    const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
    console.log(`  ${path.padEnd(20)} ${kb.padStart(4)}KB  ${title}`);
    written++;
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}

console.log(`prerendered ${written}/${paths.length} routes`);
if (written !== paths.length) process.exit(1);
