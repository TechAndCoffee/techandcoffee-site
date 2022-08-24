import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap(), compress()],
  output: 'static',
  site: 'https://techandcoffee.info'
});