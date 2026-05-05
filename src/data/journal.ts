export interface JournalEntryMeta {
  slug: string;
  /** ISO date YYYY-MM-DD for sorting and <time> */
  date: string;
  title: string;
  description: string;
}

/** Newest first */
export const journalEntries: JournalEntryMeta[] = [
  {
    slug: "sotto",
    date: "2026-05-04",
    title: "sotto",
    description: "all of the current cli tools for AI commit messages suck.",
  },
  {
    slug: "bosch-week-one",
    date: "2026-04-12",
    title: "first week at bosch",
    description: "growing pains as a software engineer.",
  },
  {
    slug: "home-lab",
    date: "2026-03-10",
    title: "home lab",
    description: "closing on a house.",
  },
];
