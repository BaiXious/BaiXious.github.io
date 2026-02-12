import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../utils/config';

export async function GET(context) {
  const posts = await getCollection('blog');
  
  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>${site.language}</language>
      <author>${site.author}</author>
    `,
  });
}
