// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server', 
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    allowedHosts: ['pyxis-view-astro'],
  },
  integrations: [], 
  vite: {
    plugins: [tailwindcss()],
  },
});