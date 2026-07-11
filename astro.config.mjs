// @ts-check

import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "static",
	site: "https://victor-adebowale-momodu.github.io/",
	integrations: [
		react(),
		markdoc(),
		...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
	],
});
