import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const quotes = defineCollection({
    loader: glob({ base: "./src/content/quotes", pattern: "**/*.json" }),
    schema: z.object({
        text: z.string(),
        author: z.string(),
    }),
});

export const collections = { quotes };
