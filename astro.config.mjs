// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import remarkWikiLink from 'remark-wiki-link';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), alpinejs()],
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
      [remarkWikiLink, {
        pageResolver: (/** @type {string} */ name) => [name.replace(/ /g, '-').toLowerCase()],
        hrefTemplate: (/** @type {string} */ permalink) => `/${permalink}`
      }]
    ]
  }
});