import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      authorship: z.string(),
      authorshipSecondary: z.string(),
      squareHeroImageUrl: z.string(),
      panoramicHeroImageUrl: z.string(),
      heroImageAlt: z.string(),
    }),
});

export const collections = { blog };
