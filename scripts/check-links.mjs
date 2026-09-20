import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(repositoryRoot, "dist");
const siteBase = "/cv_portfolio";

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectHtml(target)));
    else if (entry.name.endsWith(".html")) files.push(target);
  }

  return files;
}

function idsFromHtml(html) {
  return new Set(
    [...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]),
  );
}

function referencesFromHtml(html) {
  return [...html.matchAll(/\s(?:href|src)=["']([^"']+)["']/g)].map(
    (match) => match[1],
  );
}

function outputTarget(reference, sourceFile) {
  const url = new URL(reference, `https://portfolio.local${siteBase}/`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === siteBase || pathname === `${siteBase}/`) pathname = "/";
  else if (pathname.startsWith(`${siteBase}/`)) pathname = pathname.slice(siteBase.length);

  if (!pathname.startsWith("/")) {
    const sourceDirectory = path.dirname(path.relative(outputRoot, sourceFile));
    pathname = `/${path.join(sourceDirectory, pathname)}`;
  }

  const relative = pathname.replace(/^\/+/, "");
  if (!relative) return { file: path.join(outputRoot, "index.html"), fragment: url.hash.slice(1) };
  if (pathname.endsWith("/")) {
    return { file: path.join(outputRoot, relative, "index.html"), fragment: url.hash.slice(1) };
  }
  if (!path.extname(pathname)) {
    return { file: path.join(outputRoot, relative, "index.html"), fragment: url.hash.slice(1) };
  }
  return { file: path.join(outputRoot, relative), fragment: url.hash.slice(1) };
}

const htmlFiles = await collectHtml(outputRoot);
const htmlCache = new Map();
const failures = [];

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  htmlCache.set(htmlFile, html);

  for (const reference of referencesFromHtml(html)) {
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/.test(reference)) continue;

    const target = reference.startsWith("#")
      ? { file: htmlFile, fragment: reference.slice(1) }
      : outputTarget(reference, htmlFile);

    try {
      await access(target.file);
    } catch {
      failures.push(`${path.relative(outputRoot, htmlFile)} -> missing ${reference}`);
      continue;
    }

    if (target.fragment && target.file.endsWith(".html")) {
      const targetHtml = htmlCache.get(target.file) ?? (await readFile(target.file, "utf8"));
      htmlCache.set(target.file, targetHtml);
      if (!idsFromHtml(targetHtml).has(target.fragment)) {
        failures.push(
          `${path.relative(outputRoot, htmlFile)} -> missing fragment ${reference}`,
        );
      }
    }
  }
}

if (failures.length) {
  console.error(`Link validation failed with ${failures.length} problem(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`Validated ${htmlFiles.length} generated HTML files with no broken local links.`);
}
