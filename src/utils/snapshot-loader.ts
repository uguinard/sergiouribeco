/**
 * snapshot-loader.ts
 * Custom Astro content loader for snapshots.
 *
 * Each entry lives in: snapshots/YYYY/YY-MM-DD-slug/
 *   index.yaml  — all metadata, with bilingual fields using .en / .es suffixes
 *   en.md       — body in English (frontmatter optional, overrides index.yaml)
 *   es.md       — body in Spanish (frontmatter optional, overrides index.yaml)
 *   media/      — images
 *
 * Bilingual field convention in index.yaml:
 *   title.en / title.es
 *   description.en / description.es
 *   location.en / location.es  (or plain `location` if same in both)
 *   photos[].alt.en / photos[].alt.es
 *   photos[].caption.en / photos[].caption.es
 *
 * The loader resolves the correct language variant and produces a flat
 * object that matches the existing Zod schema unchanged.
 */

import type { Loader } from 'astro/loaders';
import { load as parseYaml } from 'js-yaml';
import { readFileSync, existsSync } from 'fs';
import { join, dirname, resolve, relative } from 'path';
import { glob } from 'tinyglobby';

export function snapshotLoader(lang: 'en' | 'es'): Loader {
  const base = './src/content/snapshots';

  return {
    name: 'snapshot-loader',
    async load(context) {
      const { store, parseData, generateDigest, renderMarkdown, logger, config } = context;

      const absBase = resolve(base);
      const pattern = `*/*/${lang}.md`;
      const files = await glob(pattern, { cwd: absBase, expandDirectories: false });

      if (files.length === 0) {
        logger.warn(`[snapshotLoader] No files found matching "${pattern}" in "${absBase}"`);
        return;
      }

      for (const file of files) {
        const absFile = join(absBase, file);
        const dir = dirname(absFile);
        const id = dirname(file); // e.g. "2024/24-11-12-sevilla-olivos"

        // Read the .md file
        const contents = readFileSync(absFile, 'utf-8');

        // Parse frontmatter from the .md (if any)
        const { body, frontmatter } = parseFrontmatter(contents);

        // Read sibling index.yaml
        const indexPath = join(dir, 'index.yaml');
        let yamlData: Record<string, any> = {};
        if (existsSync(indexPath)) {
          try {
            yamlData = parseYaml(readFileSync(indexPath, 'utf-8')) as Record<string, any>;
          } catch (e) {
            logger.warn(`[snapshotLoader] Could not parse ${indexPath}: ${e}`);
          }
        }

        // Resolve bilingual fields from YAML
        const resolved = resolveLanguage(yamlData, lang);

        // Merge: YAML (resolved) ← .md frontmatter overrides
        // Photos: special merge — src always from index.yaml, alt/caption can override
        const mergedPhotos = mergePhotos(resolved.photos, frontmatter.photos);
        const mergedData = serializeDates({
          ...resolved,
          ...frontmatter,
          photos: mergedPhotos,
        });

        const digest = generateDigest(contents);
        const relativePath = relative(
          new URL('.', config.root).pathname,
          absFile
        );

        // Validate through Astro's schema
        const parsedData = await parseData({
          id,
          data: mergedData,
          filePath: absFile,
        });

        const relativeFilePath = relative(config.root.pathname, absFile);

        // Register the file for rendering
        store.addModuleImport(absFile);

        store.set({
          id,
          data: parsedData,
          body,
          filePath: relativeFilePath,
          digest,
          deferredRender: true,
        });
      }
    },
  };
}

/**
 * Minimal frontmatter parser for .md files.
 */
function parseFrontmatter(contents: string): { body: string; frontmatter: Record<string, any> } {
  const match = contents.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { body: contents, frontmatter: {} };

  const raw = match[1].trim();
  const body = match[2];

  if (!raw) return { body, frontmatter: {} };

  try {
    const parsed = parseYaml(raw);
    return { body, frontmatter: typeof parsed === 'object' && parsed !== null ? parsed as Record<string, any> : {} };
  } catch {
    return { body, frontmatter: {} };
  }
}

/**
 * Walk an object and resolve any bilingual fields:
 *   { "title.en": "Hello", "title.es": "Hola" }
 *   → (for lang='en') { title: "Hello" }
 *
 * Also handles nested objects and arrays recursively.
 * Plain fields (no lang suffix) are passed through as-is.
 */
function resolveLanguage(obj: any, lang: 'en' | 'es'): any {
  if (Array.isArray(obj)) {
    return obj.map(item => resolveLanguage(item, lang));
  }
  if (obj === null || typeof obj !== 'object') return obj;
  // Pass through Date objects untouched
  if (obj instanceof Date || Object.prototype.toString.call(obj) === '[object Date]') return obj;

  const result: Record<string, any> = {};
  const other = lang === 'en' ? 'es' : 'en';

  // Collect keys, prefer lang-specific over plain
  for (const key of Object.keys(obj)) {
    if (key.endsWith(`.${lang}`)) {
      // e.g. "title.en" → "title"
      const base = key.slice(0, -(lang.length + 1));
      result[base] = resolveLanguage(obj[key], lang);
    } else if (key.endsWith(`.${other}`)) {
      // Skip the other language's variant
      continue;
    } else if (!(`${key}.${lang}` in obj)) {
      // Plain field with no lang variant — pass through
      result[key] = resolveLanguage(obj[key], lang);
    }
  }

  return result;
}

/**
 * Recursively convert Date objects to ISO strings.
 * js-yaml creates Date objects that may fail instanceof checks across
 * Vite module boundaries. z.coerce.date() in the schema will re-parse them.
 */
function serializeDates(obj: any): any {
  if (obj === null || obj === undefined) return obj;
  if (
    obj instanceof Date ||
    (typeof obj === 'object' && obj?.constructor?.name === 'Date') ||
    Object.prototype.toString.call(obj) === '[object Date]'
  ) {
    return typeof obj.toISOString === 'function' ? obj.toISOString() : String(obj);
  }
  if (Array.isArray(obj)) return obj.map(item => serializeDates(item));
  if (typeof obj === 'object') {
    const result: Record<string, any> = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = serializeDates(value);
    }
    return result;
  }
  return obj;
}

/**
 * Merge photo arrays.
 * index.yaml provides src (+ optional alt/caption).
 * lang .md can optionally override alt/caption per photo by index.
 */
function mergePhotos(
  shared: Array<{ src: string; alt?: string; caption?: string }> | undefined,
  lang: Array<{ alt?: string; caption?: string }> | undefined
) {
  if (!shared?.length) return lang ?? [];
  return shared.map((s, i) => ({
    ...s,
    ...(lang?.[i]?.alt !== undefined ? { alt: lang[i].alt } : {}),
    ...(lang?.[i]?.caption !== undefined ? { caption: lang[i].caption } : {}),
  }));
}
