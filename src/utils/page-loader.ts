/**
 * page-loader.ts
 * Generic content loader for bilingual snapshot-pattern collections.
 *
 * Structure per entry:
 *   [base]/[slug]/
 *     index.yaml   — metadata, bilingual fields use .en / .es suffixes
 *     en.md        — English body
 *     es.md        — Spanish body
 *
 * Unlike wrapping glob(), this is a fully custom loader that:
 *  1. Scans for `*\/${lang}.md` files under the base
 *  2. Reads the sibling index.yaml
 *  3. Resolves bilingual fields for the target language
 *  4. Merges the resolved metadata with any frontmatter in the .md
 *  5. Passes the merged data to store.set()
 */

import type { Loader } from 'astro/loaders';
import { load as parseYaml } from 'js-yaml';
import { readFileSync, existsSync } from 'fs';
import { join, dirname, resolve, relative } from 'path';
import { glob } from 'tinyglobby';

export function pageLoader(lang: 'en' | 'es', base: string): Loader {
  return {
    name: 'page-loader',
    async load(context) {
      const { store, parseData, generateDigest, renderMarkdown, logger, config } = context;

      const absBase = resolve(base);
      const pattern = `*/${lang}.md`;
      const files = await glob(pattern, { cwd: absBase, expandDirectories: false });

      if (files.length === 0) {
        logger.warn(`[pageLoader] No files found matching "${pattern}" in "${absBase}"`);
        return;
      }

      for (const file of files) {
        const absFile = join(absBase, file);
        const dir = dirname(absFile);
        const slug = dirname(file); // e.g. "philosophy", "cv", "first-journey"
        const id = slug;

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
            logger.warn(`[pageLoader] Could not parse ${indexPath}: ${e}`);
          }
        }

        // Resolve bilingual fields from YAML
        const resolved = resolveLanguage(yamlData, lang);

        // Merge: YAML (resolved) ← .md frontmatter overrides
        const mergedData = serializeDates({ ...resolved, ...frontmatter });
        console.log(`[pageLoader] ${id}: lastUpdated raw resolved=${JSON.stringify(resolved.lastUpdated)} type=${typeof resolved.lastUpdated} constructor=${resolved.lastUpdated?.constructor?.name} toString=${Object.prototype.toString.call(resolved.lastUpdated)}`);
        console.log(`[pageLoader] ${id}: lastUpdated after serialize=${JSON.stringify(mergedData.lastUpdated)} type=${typeof mergedData.lastUpdated}`);



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
 * Returns { body, frontmatter } where frontmatter is a parsed object.
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
  if (Array.isArray(obj)) return obj.map(item => resolveLanguage(item, lang));
  if (obj === null || typeof obj !== 'object') return obj;
  // Pass through Date objects (and cross-realm Date-like objects) untouched
  if (obj instanceof Date || Object.prototype.toString.call(obj) === '[object Date]') return obj;

  const result: Record<string, any> = {};
  const other = lang === 'en' ? 'es' : 'en';

  for (const key of Object.keys(obj)) {
    if (key.endsWith(`.${lang}`)) {
      const base = key.slice(0, -(lang.length + 1));
      result[base] = resolveLanguage(obj[key], lang);
    } else if (key.endsWith(`.${other}`)) {
      continue;
    } else if (!(`${key}.${lang}` in obj)) {
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
  // Check for cross-realm Date objects using multiple detection strategies
  if (
    obj instanceof Date ||
    (typeof obj === 'object' && obj?.constructor?.name === 'Date') ||
    (typeof obj === 'object' && typeof obj.toISOString === 'function' && typeof obj.getTime === 'function') ||
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
