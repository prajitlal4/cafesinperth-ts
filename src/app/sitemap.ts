import { MetadataRoute } from 'next'
import { fetchSiteMapInfo } from '../../sanity/lib/api'
 
const WEBSITE_URL = process.env.SITE_URL || 'https://cafesinperth.com'

type changeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await fetchSiteMapInfo()

  console.log('allPosts', allPosts)
  const posts = allPosts.map((post : any) => ({
    url: `${WEBSITE_URL}/review/${post.slug}`,
    lastModified: new Date(post._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const routes = [''].map((route) => ({
    url: `${WEBSITE_URL}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
  }))

  return [...routes, ...posts]
}