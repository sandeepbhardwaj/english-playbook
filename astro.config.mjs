// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { lessonMarkdownPlugin } from './src/lib/astro/lesson-markdown.mjs';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://english.scalemind.dev',
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [lessonMarkdownPlugin],
  },
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
