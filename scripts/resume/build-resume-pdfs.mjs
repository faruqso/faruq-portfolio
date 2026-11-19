// Builds the two resume PDFs in public/resume from resume-data.mjs.
// Run: node scripts/resume/build-resume-pdfs.mjs
// Needs Microsoft Edge or Google Chrome (headless print-to-PDF).
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { versions } from './resume-data.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../..');
const outDir = resolve(root, 'public/resume');
const tmpDir = resolve(root, 'scripts/resume/.out');
mkdirSync(outDir, { recursive: true });
mkdirSync(tmpDir, { recursive: true });

const fontDir = resolve(root, 'node_modules/@fontsource-variable/inter/files');
const font = (f) => pathToFileURL(resolve(fontDir, f)).href;

const browsers = [
	'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
	'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
	'C:/Program Files/Google/Chrome/Application/chrome.exe',
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	'/usr/bin/google-chrome',
];
const browser = browsers.find((b) => existsSync(b));
if (!browser) throw new Error('No Edge or Chrome found for printing.');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// **bold** inside strings
const md = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

function contactHtml(items) {
	return items
		.map((c) => (c.href ? `<a href="${c.href}">${esc(c.label)}</a>` : `<span>${esc(c.label)}</span>`))
		.join('<span class="sep">·</span>');
}

function sectionHtml(s) {
	let body = '';
	if (s.text) body += `<p>${md(s.text)}</p>`;
	if (s.intro) body += `<p class="intro">${md(s.intro)}</p>`;
	for (const e of s.entries ?? []) {
		body += `<div class="entry"><div class="entry-head"><span class="what">${md(e.title)}</span>${
			e.dates ? `<span class="when">${esc(e.dates)}</span>` : ''
		}</div>`;
		if (e.bullets?.length) body += `<ul>${e.bullets.map((b) => `<li>${md(b)}</li>`).join('')}</ul>`;
		if (e.text) body += `<p>${md(e.text)}</p>`;
		body += `</div>`;
	}
	if (s.quote) body += `<blockquote>${esc(s.quote.text)}<cite>${esc(s.quote.by)}</cite></blockquote>`;
	if (s.list) body += `<ul class="plain">${s.list.map((b) => `<li>${md(b)}</li>`).join('')}</ul>`;
	return `<section><h2>${esc(s.heading)}</h2>${body}</section>`;
}

function page(v) {
	return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>${esc(v.name)} — Resume (${esc(v.label)})</title>
<style>
@font-face{font-family:'Inter';src:url('${font('inter-latin-wght-normal.woff2')}') format('woff2');font-weight:100 900;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}
@font-face{font-family:'Inter';src:url('${font('inter-latin-ext-wght-normal.woff2')}') format('woff2');font-weight:100 900;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;}
@page{size:A4;margin:${v.compact?'11mm 15mm 10mm':'15mm 16mm 14mm'}}
*{box-sizing:border-box;margin:0;padding:0}
:root{--ink:#181a1b;--grey:#656968;--line:#e2e3de;--acc:#294fe8;--surf:#f0f1ed}
html{font-family:'Inter',system-ui,sans-serif;color:var(--ink);font-size:${v.compact?'8.85pt':'9.4pt'};line-height:${v.compact?1.42:1.5};-webkit-print-color-adjust:exact;print-color-adjust:exact}
a{color:inherit;text-decoration:none}
header{padding-bottom:${v.compact?'8pt':'10pt'};border-bottom:1px solid var(--line);margin-bottom:${v.compact?'8pt':'12pt'}}
h1{font-size:25pt;font-weight:400;letter-spacing:-0.035em;line-height:1.05}
.role{font-size:11.5pt;color:var(--grey);margin-top:4pt;letter-spacing:-0.01em}
.contact{margin-top:8pt;font-size:8.6pt;color:var(--grey)}
.contact a{color:var(--acc)}
.contact a,.contact span:not(.sep){white-space:nowrap}
.sep{margin:0 6pt;color:#b3b5b0}
section{margin-top:${v.compact?'8pt':'11pt'}}
h2{break-after:avoid}
section:not(:has(.entry:nth-child(4))){break-inside:avoid}
h2{font-size:7.4pt;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:var(--grey);display:flex;align-items:center;gap:6pt;margin-bottom:6pt}
h2::before{content:'';width:4.5pt;height:4.5pt;border-radius:50%;background:var(--acc)}
h2::after{content:'';flex:1;height:1px;background:var(--line)}
p{margin-bottom:4pt}
.intro{color:var(--grey)}
.entry{margin-top:${v.compact?'5pt':'7pt'};break-inside:avoid}
.entry-head{display:flex;justify-content:space-between;gap:12pt;align-items:baseline}
.what{font-weight:400}
.what strong{font-weight:600}
.when{color:var(--grey);font-size:8.6pt;white-space:nowrap}
ul{margin:3pt 0 0 0;padding-left:11pt}
li{margin-bottom:2pt}
li::marker{color:#9a9d99}
ul.plain{padding-left:11pt}
strong{font-weight:600}
blockquote{margin-top:9pt;padding:7pt 10pt;background:var(--surf);border-radius:5pt;font-size:9pt;break-inside:avoid}
cite{display:block;font-style:normal;color:var(--grey);font-size:8pt;margin-top:2pt}
</style></head><body>
<header><h1>${esc(v.name)}</h1><p class="role">${esc(v.role)}</p><p class="contact">${contactHtml(v.contact)}</p></header>
${v.sections.map(sectionHtml).join('\n')}
</body></html>`;
}

for (const v of versions) {
	const html = resolve(tmpDir, `${v.file}.html`);
	writeFileSync(html, page(v));
	const pdf = resolve(outDir, `${v.file}.pdf`);
	execFileSync(browser, [
		'--headless=new',
		'--disable-gpu',
		'--no-pdf-header-footer',
		'--allow-file-access-from-files',
		`--print-to-pdf=${pdf}`,
		pathToFileURL(html).href,
	], { stdio: 'ignore' });
	console.log('Wrote', pdf);
}
