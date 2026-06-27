// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://victor-adebowale-momodu.github.io/",
  integrations: [react(), markdoc(), keystatic()],

  adapter: node({
    mode: "standalone",
  }),
});