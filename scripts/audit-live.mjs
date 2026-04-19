#!/usr/bin/env node
/**
 * Audits the live production site for SEO issues.
 * Counts canonical, og:url, meta description, title, and H1 tags per page.
 * Writes a CSV report to /mnt/documents/seo-audit-after.csv (or ./seo-audit.csv locally).
 *
 * Usage: node scripts/audit-live.mjs [base-url]
 *   default base-url: https://godhans.com
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';

const BASE = process.argv[2] || 'https://godhans.com';
const ROUTES = [
  '/',
  '/tree-service-jacksonville-nc',
  '/tree-removal',
  '/tree-trimming',
  '/stump-grinding',
  '/emergency-tree-service',
  '/tree-service-richlands',
  '/tree-service-hubert',
  '/tree-removal-cost',
  '/tree-removal-permit-nc',
  '/storm-damage-guide',
  '/leaning-tree-dangerous',
  '/tree-trimming-vs-pruning',
];

function extract(html, regex) {
  return [...html.matchAll(regex)].map(m => m[1] || m[0]);
}

const rows = [['URL','Status','Title Count','Title','Canonical Count','Canonical(s)','Meta Desc Count','Meta Desc(s)','OG:URL Count','OG:URL(s)','H1 Count','H1(s)','Issues']];

console.log(`\n🔍 Auditing ${BASE} (${ROUTES.length} routes)\n`);

for (const route of ROUTES) {
  const url = BASE + route;
  try {
    const res = await fetch(url, { redirect: 'follow' });
    const html = await res.text();

    const titles = extract(html, /<title[^>]*>([^<]*)<\/title>/gi);
    const canonicals = extract(html, /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/gi);
    const metaDescs = extract(html, /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/gi);
    const ogUrls = extract(html, /<meta[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["'][^>]*>/gi);
    const h1s = extract(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi).map(s => s.replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim().slice(0,80));

    const expected = BASE + (route === '/' ? '/' : route);
    const issues = [];
    if (titles.length !== 1) issues.push(`titles=${titles.length}`);
    if (canonicals.length !== 1) issues.push(`canonicals=${canonicals.length}`);
    if (canonicals.length && !canonicals.some(c => c === expected || c === expected.replace(/\/$/,''))) issues.push(`canonical-mismatch(expected ${expected})`);
    if (metaDescs.length !== 1) issues.push(`metaDescs=${metaDescs.length}`);
    if (ogUrls.length !== 1) issues.push(`ogUrls=${ogUrls.length}`);
    if (h1s.length !== 1) issues.push(`h1s=${h1s.length}`);

    rows.push([
      url, res.status,
      titles.length, titles.join(' | '),
      canonicals.length, canonicals.join(' | '),
      metaDescs.length, metaDescs.map(s=>s.slice(0,60)).join(' | '),
      ogUrls.length, ogUrls.join(' | '),
      h1s.length, h1s.join(' | '),
      issues.join('; ') || 'OK'
    ]);
    const status = issues.length ? '❌' : '✅';
    console.log(`  ${status} ${res.status} ${url} — ${issues.join('; ') || 'OK'}`);
  } catch (e) {
    rows.push([url,'ERR','','','','','','','','','','',e.message]);
    console.log(`  ⚠️  ERR ${url} — ${e.message}`);
  }
}

const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
const outPath = existsSync('/mnt/documents') ? '/mnt/documents/seo-audit-live.csv' : './seo-audit-live.csv';
writeFileSync(outPath, csv);
console.log(`\n📊 Report written to ${outPath}\n`);
