import { collection, config, fields } from "@keystatic/core";

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

		projects: collection({
			label: "Projects",
			path: "src/content/projects/*",
			slugField: "title",
			format: { data: "json" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				description: fields.text({
					label: "Description",
					multiline: true,
				}),
				status: fields.select({
					label: "Status",
					options: [
						{ label: "Completed", value: "completed" },
						{ label: "In Progress", value: "in-progress" },
						{ label: "Archived", value: "archived" },
					],
					defaultValue: "completed",
				}),
				media: fields.array(fields.text({ label: "Media item" }), {
					label: "Media",
					itemLabel: (props) => props.value,
				}),
				tags: fields.array(fields.text({ label: "Tag" }), {
					label: "Tags",
					itemLabel: (props) => props.value,
				}),
				links: fields.object(
					{
						live: fields.url({ label: "Live URL" }),
						github: fields.url({ label: "GitHub URL" }),
						devlog: fields.url({ label: "Devlog URL" }),
						demo: fields.url({ label: "Demo URL" }),
					},
					{ label: "Links" },
				),
			},
		}),

		devlog: collection({
			label: "Devlog",
			path: "src/content/devlog/*",
			slugField: "title",
			entryLayout: "content",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				date: fields.date({ label: "Published Date" }),
				updated: fields.date({ label: "Updated Date" }),
				description: fields.text({
					label: "Description",
					multiline: true,
				}),
				type: fields.select({
					label: "Type",
					options: [
						{ label: "Devlog", value: "devlog" },
						{ label: "Article", value: "article" },
						{ label: "Tutorial", value: "tutorial" },
						{ label: "Thought", value: "thought" },
					],
					defaultValue: "article",
				}),
				draft: fields.checkbox({ label: "Draft", defaultValue: false }),
				tags: fields.array(fields.text({ label: "Tag" }), {
					label: "Tags",
					itemLabel: (props) => props.value,
				}),
				content: fields.markdoc({ label: "Content" }),
			},
		}),
	},
});
