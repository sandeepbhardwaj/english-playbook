// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://english.scalemind.dev',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
