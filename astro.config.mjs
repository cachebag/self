// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cachebag.github.io',
  base: '/self',
  build: {
    assets: '_assets'
  },
  trailingSlash: 'always'
});
