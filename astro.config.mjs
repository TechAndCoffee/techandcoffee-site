import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "Tech and Coffee",
    logo: {
      light: "src/assets/tac_logo_hires.webp",
      dark: "src/assets/tac_logo_inverted.webp"
    },
    favicon: "/favicon-16x16.png",
    social: {
      "x.com": "https://twitter.com/techandcoffee1",
      mastodon: "https://techhub.social/@techandcoffee",
      telegram: "https://t.me/techandcoffee"
    },
    tableOfContents: false,
    pagination: false,
    sidebar: [{
      label: "Resources",
      autogenerate: {
        directory: "resources"
      }
    }, {
        label: "Links",
      autogenerate: {
        directory: "links"
      }
      }]
  }), markdoc({ allowHTML: true })],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp"
    }
  }
});