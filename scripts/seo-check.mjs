#!/usr/bin/env node
/**
 * SEO regression check (MASTER-PLAN task 1-12). Dependency-free, Node 18+.
 *
 *   node scripts/seo-check.mjs [baseUrl]      default http://localhost:3000
 *
 * Reads <baseUrl>/sitemap.xml, maps every <loc> onto baseUrl and checks:
 *  - HTTP 200, self-canonical, no noindex
 *  - title 1–60 chars, unique; meta description 120–155 chars, unique
 *  - exactly one <h1>
 *  - no banned claims (docs/seo/business-goals.md §10) in the HTML, incl. the
 *    serialized translation payload
 *  - sitemap has no /ar/ URLs, no www, no retired service URLs
 * Also checks robots.txt and llms.txt exist. Exits 1 on any error.
 */

const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const CANONICAL_ORIGIN = "https://saudiease.com";

const BANNED = [
  /Aramco|أرامكو|ارامكو|আরামকো/,
  /SABIC|سابك|সাবিক/,
  /\b250\+|\+250|২৫০\+/,
  /\b500\+|\+500|৫০০\+/,
  /15\+ Awards|4\.9\/5|4\.9 Rating/,
  /ZATCA[- ]?(approved|certified)|ZATCA অনুমোদিত/i,
  /\bZATCA Compliant\b/,
  /most trusted|الأكثر ثقة|world-class|industry-leading|we guarantee|100% Satisfaction/i,
  /Jubail City Center|مركز مدينة الجبيل/,
  /Riyadh Medical Center|Al-Madinah Retail|Al Dosari Contracting/,
  /cv-document-preparation|excel-data-work|aramco-sabic-vendor-code/,
];
const RETIRED_IN_SITEMAP = /\/(estimator|careers|industries\/[a-z])|services\/(web-development|e-invoicing|corporate-profile|logo-design|print-design|custom-cms-development|e-commerce-solutions|digital-marketing|ui-ux-design|api-development|cv-document-preparation)\b/;

const errors = [];
const warnings = [];
const err = (url, msg) => errors.push(`${url}  ${msg}`);
const warn = (url, msg) => warnings.push(`${url}  ${msg}`);

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const strip = (s) => decode(s.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

async function get(url) {
  const res = await fetch(url, { redirect: "manual", headers: { "user-agent": "seo-check" } });
  return { status: res.status, text: await res.text() };
}

const sm = await get(`${base}/sitemap.xml`);
if (sm.status !== 200) {
  console.error(`sitemap.xml returned ${sm.status}`);
  process.exit(1);
}
const locs = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const loc of locs) {
  if (!loc.startsWith(CANONICAL_ORIGIN)) err(loc, "sitemap URL not on canonical origin");
  if (/saudiease\.com\/ar(\/|$)/.test(loc)) err(loc, "sitemap contains /ar/ URL (Arabic is prefix-less)");
  if (RETIRED_IN_SITEMAP.test(loc)) err(loc, "retired URL in sitemap");
}

const titles = new Map();
const descs = new Map();

for (const loc of locs) {
  const path = loc.slice(CANONICAL_ORIGIN.length) || "/";
  const url = base + path;
  let r;
  try {
    r = await get(url);
  } catch (e) {
    err(path, `fetch failed: ${e.message}`);
    continue;
  }
  if (r.status !== 200) {
    err(path, `status ${r.status}`);
    continue;
  }
  const h = r.text;
  const head = h.slice(0, h.indexOf("</head>") + 7);

  const canon = head.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canon !== loc) err(path, `canonical ${canon || "(none)"} ≠ ${loc}`);
  if (/<meta name="robots" content="[^"]*noindex/.test(head)) err(path, "noindex on a sitemap URL");

  const title = strip(head.match(/<title>([\s\S]*?)<\/title>/)?.[1] || "");
  if (!title) err(path, "missing <title>");
  else if ([...title].length > 60) {
    // Blog titles are warnings until the blog decision (MASTER-PLAN task 3-12)
    (/\/blog\//.test(path) ? warn : err)(path, `title ${[...title].length} chars: "${title}"`);
  }
  titles.set(title, [...(titles.get(title) || []), path]);

  const desc = decode(head.match(/<meta name="description" content="([^"]*)"/)?.[1] || "");
  const dl = [...desc].length;
  if (!desc) err(path, "missing meta description");
  else if (dl < 120 || dl > 155) warn(path, `meta description ${dl} chars`);
  descs.set(desc, [...(descs.get(desc) || []), path]);

  const h1s = h.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) err(path, `${h1s.length} <h1> elements`);

  for (const re of BANNED) {
    const m = h.match(re);
    if (m) err(path, `banned claim: "${m[0]}"`);
  }
}

for (const [t, ps] of titles) if (t && ps.length > 1) err(ps.join(", "), `duplicate title "${t}"`);
for (const [d, ps] of descs) if (d && ps.length > 1) warn(ps.join(", "), `duplicate meta description`);

for (const f of ["/robots.txt", "/llms.txt"]) {
  const r = await get(base + f);
  if (r.status !== 200) err(f, `status ${r.status}`);
  if (f === "/robots.txt" && /Disallow: \/_next\//.test(r.text)) err(f, "blocks /_next/");
}

console.log(`Checked ${locs.length} sitemap URLs on ${base}`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log("  WARN " + w);
}
if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  for (const e of errors) console.log("  ERR  " + e);
  process.exit(1);
}
console.log("\nOK: no errors");
