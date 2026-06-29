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

const projects = defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
    schema: z.object({
        title: z.string(),
    }),
});

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.date(),
    }),
});

export const collections = { quotes, projects, blog };
