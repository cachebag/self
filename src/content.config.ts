import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const journal = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    /** Parsed from YAML as a Date; drives sorting and <time> */
    date: z.date(),
    description: z.string(),
    /** Set true to keep an entry out of the site and the feed */
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
