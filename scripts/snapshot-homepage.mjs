/**
 * Snapshots the built homepage into a reviewable markdown baseline: extracted
 * text, heading outline, every internal link with its anchor text, title/meta,
 * and all JSON-LD. Phase 3 diffs against this, so every removal has to be
 * deliberate rather than noticed later.
 */
import fs from "node:fs";

const src = process.argv[2];
const out = process.argv[3];
const label = process.argv[4] ?? "baseline";
const html = fs.readFileSync(src, "utf8");

const body = html.slice(html.indexOf("<body"));
const stripped = body.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

const text = decode(stripped.replace(/<[^>]+>/g, " "))
  .replace(/[ \t]+/g, " ")
  .replace(/\s*\n\s*/g, "\n")
  .trim();

const headings = [...stripped.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g)].map(
  (m) => `${"  ".repeat(+m[1] - 1)}h${m[1]}: ${decode(m[2].replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim()}`
);

const links = [...stripped.matchAll(/<a\s[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
  .map((m) => ({ href: m[1], anchor: decode(m[2].replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim() }))
  .filter((l) => l.href.startsWith("/") || l.href.includes("godhans.com"));

const head = html.slice(0, html.indexOf("</head>"));
const title = (head.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1] ?? "";
const desc = (head.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/) || [])[1] ?? "";
const canonical = (head.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/) || [])[1] ?? "";
const metas = [...head.matchAll(/<meta[^>]*(?:property|name)="((?:og|twitter):[^"]+)"[^>]*content="([^"]*)"/g)];
const jsonld = [...html.matchAll(/<script[^>]*ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map((m) =>
  JSON.stringify(JSON.parse(m[1]), null, 2)
);

const md = `# Homepage ${label}

Generated from \`${src}\`. Phase 3 diffs against this file.

## Title / meta

- **title** (${title.length}): ${title}
- **description** (${desc.length}): ${desc}
- **canonical**: ${canonical}

${metas.map(([, k, v]) => `- \`${k}\`: ${v}`).join("\n")}

## Heading outline

\`\`\`
${headings.join("\n")}
\`\`\`

## Internal links (${links.length})

| href | anchor text |
|---|---|
${links.map((l) => `| \`${l.href}\` | ${l.anchor || "_(no text)_"} |`).join("\n")}

## JSON-LD (${jsonld.length} block${jsonld.length === 1 ? "" : "s"})

${jsonld.map((j, i) => `### Block ${i + 1}\n\n\`\`\`json\n${j}\n\`\`\``).join("\n\n")}

## Extracted text

\`\`\`
${text}
\`\`\`
`;

fs.mkdirSync(out.replace(/[/\\][^/\\]+$/, ""), { recursive: true });
fs.writeFileSync(out, md);
console.log(
  `  ${out}\n    headings ${headings.length} | internal links ${links.length} | JSON-LD ${jsonld.length} | text ${text.length} chars`
);
