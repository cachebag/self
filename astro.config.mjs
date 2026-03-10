// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cachebag.sh',
  base: '/',
  build: {
    assets: '_assets'
  },
  trailingSlash: 'always'
});
