// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://sandeepbhardwaj.github.io/english-playbook',
  output: 'static',
  integrations: [],
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
