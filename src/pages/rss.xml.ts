import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const entries = (await getCollection("journal", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: "akrm al-hakimi — journal",
    description: "short posts on projects, work, and side interests.",
    // context.site comes from `site` in astro.config.mjs
    site: context.site!,
    trailingSlash: true,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: `/journal/${entry.id}/`,
    })),
    customData: "<language>en-us</language>",
  });
}
