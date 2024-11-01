import { defineCollection, z } from "astro:content";
// Define collection
const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      index: z.number(),
      title: z.string(),
      description: z.string().optional(),
      tags: z.array(z.string()),
      image: image(),
      type: z.string().optional(),
    }),
});

// Export a single `collections` object to register your collection(s)
// This key should match your collection directory name in "src/content"
export const collections = {
  project: projectCollection,
};
