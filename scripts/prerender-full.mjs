#!/usr/bin/env node
/**
 * Full-content prerendering using Puppeteer.
 * 
 * After Vite builds the SPA, this script:
 * 1. Starts a local static server serving dist/
 * 2. Launches headless Chromium
 * 3. Visits every route and waits for content to render
 * 4. Captures the fully rendered HTML
 * 5. Writes it to dist/{slug}/index.html
 * 
 * Result: each route has a complete HTML snapshot with all text,
 * headings, links, and structured data — no JavaScript required.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { createServer } from 'http';
import { routes, BUSINESS } from './route-metadata.mjs';
import puppeteer from 'puppeteer-core';

// Include homepage for prerendering
const allRoutes = [
  { path: '/', title: 'Tree Service Jacksonville NC | Godhans Tree Company', description: 'Professional tree service in Jacksonville, NC.' },
  ...routes,
];

const DIST = join(dirname(new URL(import.meta.url).pathname), '..', 'dist');
const PORT = 4173;

// Simple static file server for the dist folder
function startStaticServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let url = req.url.split('?')[0];
      
      // Try exact file first
      let filePath = join(DIST, url);
      
      // SPA fallback: if path doesn't map to a file, serve index.html
      // But try {path}/index.html first for prerendered pages
      if (!url.includes('.')) {
        const tryIndex = join(DIST, url, 'index.html');
        const tryFile = join(DIST, url + '.html');
        if (existsSync(tryIndex)) {
          filePath = tryIndex;
        } else if (existsSync(tryFile)) {
          filePath = tryFile;
        } else {
          filePath = join(DIST, 'index.html');
        }
      }

      try {
        const content = readFileSync(filePath);
        const ext = filePath.split('.').pop();
        const mimeTypes = {
          html: 'text/html',
          js: 'application/javascript',
          css: 'text/css',
          json: 'application/json',
          png: 'image/png',
          jpg: 'image/jpeg',
          svg: 'image/svg+xml',
          ico: 'image/x-icon',
          woff2: 'font/woff2',
          woff: 'font/woff',
        };
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        // Fallback to index.html for SPA routing
        try {
          const fallback = readFileSync(join(DIST, 'index.html'));
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(fallback);
        } catch {
          res.writeHead(404);
          res.end('Not found');
        }
      }
    });

    server.listen(PORT, () => {
      console.log(`  📡 Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log(`\n🚀 Full-content prerendering for ${allRoutes.length} routes...\n`);

  const server = await startStaticServer();

  // Find Chromium
  const chromiumPath = [
    '/bin/chromium-browser',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/google-chrome',
  ].find(p => existsSync(p));

  if (!chromiumPath) {
    console.error('❌ No Chromium binary found. Cannot prerender.');
    server.close();
    process.exit(1);
  }

  console.log(`  🌐 Using Chromium: ${chromiumPath}`);

  const browser = await puppeteer.launch({
    executablePath: chromiumPath,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-extensions',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-sync',
      '--disable-translate',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-first-run',
      '--safebrowsing-disable-auto-update',
    ],
  });

  let successCount = 0;
  let errorCount = 0;

  for (const route of allRoutes) {
    const slug = route.path === '/' ? '' : route.path.replace(/^\//, '');
    const url = `http://localhost:${PORT}${route.path}`;

    try {
      const page = await browser.newPage();
      
      // Block unnecessary resources to speed up rendering
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const type = req.resourceType();
        if (['image', 'media', 'font'].includes(type)) {
          req.abort();
        } else {
          req.continue();
        }
      });

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Wait for React to render content
      await page.waitForSelector('h1', { timeout: 10000 }).catch(() => {});
      
      // Small extra wait for any lazy content
      await new Promise(r => setTimeout(r, 500));

      // Get the full rendered HTML
      let html = await page.content();

      // Clean up: remove scripts that re-hydrate (optional, keeps them for interactivity)
      // We keep scripts so the page becomes interactive after load
      
      // Ensure correct meta tags (override any Helmet-injected ones with our canonical values)
      const canonical = `${BUSINESS.url}/${slug}`;
      
      // Fix canonical if Helmet set it wrong
      html = html.replace(
        /<link[^>]*rel="canonical"[^>]*>/g,
        `<link rel="canonical" href="${canonical}" data-rh="true" />`
      );
      
      // Ensure og:url is correct
      html = html.replace(
        /<meta[^>]*property="og:url"[^>]*>/g,
        `<meta property="og:url" content="${canonical}" data-rh="true" />`
      );

      // Remove any lovable-tagger dev attributes
      html = html.replace(/\s*data-lov-id="[^"]*"/g, '');
      html = html.replace(/\s*data-lov-name="[^"]*"/g, '');
      html = html.replace(/\s*data-component="[^"]*"/g, '');

      // Write output
      const outDir = join(DIST, slug);
      if (!existsSync(outDir)) {
        mkdirSync(outDir, { recursive: true });
      }
      writeFileSync(join(outDir, 'index.html'), html, 'utf-8');

      // Verify content was captured
      const hasH1 = html.includes('<h1');
      const hasContent = html.length > 5000;
      const status = hasH1 && hasContent ? '✅' : '⚠️';
      
      console.log(`  ${status} ${route.path} (${(html.length / 1024).toFixed(1)}KB${hasH1 ? '' : ' — missing H1!'})`);
      
      if (hasH1 && hasContent) successCount++;
      else errorCount++;

      await page.close();
    } catch (err) {
      console.error(`  ❌ ${route.path}: ${err.message}`);
      errorCount++;
    }
  }

  await browser.close();
  server.close();

  console.log(`\n✨ Prerendered: ${successCount} success, ${errorCount} issues out of ${routes.length} routes.\n`);
  
  if (errorCount > 0) {
    console.warn('⚠️  Some routes had issues. Check output above.');
  }
}

prerender().catch(err => {
  console.error('Fatal prerender error:', err);
  process.exit(1);
});
