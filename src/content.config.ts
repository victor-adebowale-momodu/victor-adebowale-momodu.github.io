import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const quotes = defineCollection({
	loader: glob({ base: "./src/content/quotes", pattern: "**/*.json" }),
	schema: z.object({
		text: z.string(),
		author: z.string(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.json" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			status: z
				.enum(["completed", "in-progress", "archived"])
				.default("completed"),
			media: z.array(image()).optional(),
			tags: z.array(z.string()).default([]),
			links: z.object({
				live: z.url().optional(),
				github: z.url().optional(),
				devlog: z.url().optional(),
				demo: z.url().optional(),
			}),
		}),
});

const devlog = defineCollection({
	loader: glob({ base: "./src/content/devlog", pattern: "**/*.mdoc" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		type: z
			.enum(["devlog", "article", "tutorial", "thought"])
			.default("article"),
		draft: z.boolean().default(false),
	}),
});

export const collections = { quotes, projects, devlog };
