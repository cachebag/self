// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://cachebag.sh',
  base: '/',
  build: {
    assets: '_assets'
  },
  trailingSlash: 'always',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'gruvbox-dark-medium',
      wrap: true
    }
  }
});
