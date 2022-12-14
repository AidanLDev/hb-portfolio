import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify/functions';
import react from '@astrojs/react';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://harrybell.netlify.app/',
  output: 'server',
  adapter: netlify(),
  integrations: [sitemap(), react(), image()]
});