import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
})

const treebank = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    chunkId: z.string(),
  }),
})

export const collections = { blog, treebank }
