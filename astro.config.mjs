// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import remarkWikiLink from 'remark-wiki-link';
import { remarkObsidianCallouts } from './src/utils/remark-obsidian-callouts.mjs';
import { remarkObsidianImages } from './src/utils/remark-obsidian-images.mjs';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx({ extendMarkdownConfig: true }), alpinejs()],
  site: 'https://sergiouribe.co',
  base: '/',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    }
  },
  markdown: {
    remarkPlugins: [
      remarkObsidianImages,
      remarkObsidianCallouts,
      [remarkWikiLink, {
        pageResolver: (/** @type {string} */ name) => [name.replace(/ /g, '-').toLowerCase()],
        hrefTemplate: (/** @type {string} */ permalink) => `/${permalink}`
      }]
    ]
  }
});