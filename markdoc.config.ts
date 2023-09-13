import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
   tags: {
      callout: {
         render: component("@components/Aside.astro"),
         attributes: {
            type: {
               type: String,
               default: 'note',
               matches: ['caution', 'tip', 'caution', 'error'],
               errorLevel: 'critical'
            },
            title: { type: String },
         }
      },
      cardGrid: {
         render: component("@astrojs/starlight/components", "CardGrid"),
         attributes: {
            stagger: { type: "Boolean", default: false },
         },
      },
      card: {
         render: component("@astrojs/starlight/components", "Card"),
         attributes: {
            icon: { type: "String" },
            title: { type: "String" },
         },
      },
      linkCard: {
         render: component("@astrojs/starlight/components", "LinkCard"),
         attributes: {
            title: { type: "String" },
            description: { type: "String" },
            href: { type: "String" },
         },
      },
      tabItem: {
         render: component("@astrojs/starlight/components", "TabItem"),
         attributes: {
            label: { type: "String" },
         }
      },
      tabs: {
         render: component("@astrojs/starlight/components", "Tabs"),
      }
   },
});