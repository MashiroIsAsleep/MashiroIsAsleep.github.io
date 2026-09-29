import { siteConfig } from '@/config'
import rss from '@astrojs/rss'
import { getPostUrlBySlug } from '@utils/url-utils'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'

const parser = new MarkdownIt()

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error('RSS requires a site URL in astro.config.mjs')
  }
  const blog = await getCollection('posts', ({ data }) => !data.draft)
  blog.sort((a, b) => b.data.published.valueOf() - a.data.published.valueOf())

  return rss({
    title: siteConfig.title,
    description: siteConfig.subtitle || 'No description',
    site: context.site,
    items: blog.map(post => {
      return {
        title: post.data.title,
        pubDate: post.data.published,
        description: post.data.description || '',
        link: getPostUrlBySlug(post.slug),
        categories: post.data.tags,
        content: sanitizeHtml(parser.render(post.body), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
        }),
      }
    }),
    customData: `<language>${siteConfig.lang}</language>`,
  })
}
