import { config, collection, fields } from "@keystatic/core";

export default config({
    storage: {
        kind: "local",
    },

    collections: {
        quotes: collection({
            label: "Quotes",
            path: "src/content/quotes/*",
            format: { data: "json" },
            slugField: "slug",
            schema: {
                slug: fields.slug({
                    name: { label: "Slug" },
                }),
                text: fields.text({ label: "Text", multiline: true }),
                author: fields.text({ label: "Author" }),
            },
        }),

        blogs: collection({
            label: "Blogs",
            path: "src/content/blogs/*",
            slugField: "title",
            format: { contentField: "content" },
            schema: {
                title: fields.slug({ name: { label: "Title" } }),
                date: fields.date({ label: "Published Date" }),
                summary: fields.text({ label: "Summary", multiline: true }),
                content: fields.markdoc({ label: "Content" }),
            },
        }),
    },
});
