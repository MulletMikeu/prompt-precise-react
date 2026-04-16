#!/usr/bin/env node
/**
 * Post-build script: generates per-route HTML files with correct meta tags.
 * 
 * This solves the SPA indexing problem by ensuring each route has its own
 * index.html with unique <title>, <meta description>, <link canonical>,
 * Open Graph tags, and structured data — all present in the raw HTML
 * before any JavaScript executes.
 * 
 * Google CAN render JavaScript, but having meta tags in the initial HTML:
 * 1. Speeds up indexing (no render queue delay)
 * 2. Ensures correct per-page metadata
 * 3. Provides structured data without JS dependency
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { routes, BUSINESS } from './route-metadata.mjs';

const DIST = join(dirname(new URL(import.meta.url).pathname), '..', 'dist');
const baseHtml = readFileSync(join(DIST, 'index.html'), 'utf-8');

console.log(`\n🔍 Prerendering meta tags for ${routes.length} routes...\n`);

let successCount = 0;

for (const route of routes) {
  const slug = route.path.replace(/^\//, '');
  const canonical = `${BUSINESS.url}/${slug}`;

  let html = baseHtml;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(route.description)}" />`
  );

  // Add canonical link (replace existing or add before </head>)
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(
      /<link rel="canonical" href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonical}" />`
    );
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${canonical}" />\n  </head>`);
  }

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`
  );

  // Add og:url (replace or insert)
  if (html.includes('og:url')) {
    html = html.replace(
      /<meta property="og:url" content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${canonical}" />`
    );
  } else {
    html = html.replace(
      /<meta property="og:type"/,
      `<meta property="og:url" content="${canonical}" />\n    <meta property="og:type"`
    );
  }

  // Add structured data schema if present
  if (route.schema) {
    const schemaTag = `<script type="application/ld+json">${JSON.stringify(route.schema)}</script>`;
    html = html.replace('</head>', `    ${schemaTag}\n  </head>`);
  }

  // Add robots meta
  if (!html.includes('name="robots"')) {
    html = html.replace('</head>', `    <meta name="robots" content="index, follow" />\n  </head>`);
  }

  // Write to dist/{slug}/index.html
  const outDir = join(DIST, slug);
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
  
  console.log(`  ✅ ${route.path}`);
  successCount++;
}

console.log(`\n✨ Successfully prerendered ${successCount}/${routes.length} routes.\n`);

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
