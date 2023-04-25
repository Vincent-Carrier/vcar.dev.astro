import mdx from '@astrojs/mdx'
import prefetch from '@astrojs/prefetch'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://vcar.dev',
  integrations: [mdx(), sitemap(), vue(), prefetch()],
  experimental: {
    assets: true,
  },
  image: {
    service: 'astro/assets/services/sharp',
  },
  markdown: {
    syntaxHighlight: 'prism',
  },
})
