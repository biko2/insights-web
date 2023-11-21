import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      authorship: z.string(),
      authorshipSubtitle: z.string(),
      heroImageUrl: z.string(),
      heroImageAlt: z.string(),
      metaImageSrc: z.string(),
      metaImageAlt: z.string(),
      type: z.string(),
    }),
});

export const collections = { blog };
