import Link from 'next/link'
import { getPageMap } from 'nextra/page-map'
import type { MdxFile, PageMapItem } from 'nextra'

type BlogPage = {
  title: string
  route: string
  description?: string
  date?: string
}

function isMdxFile(item: PageMapItem): item is MdxFile {
  return !('children' in item) && !('data' in item)
}

function collectBlogPages(items: PageMapItem[]): BlogPage[] {
  const pages: BlogPage[] = []

  for (const item of items) {
    if ('children' in item) {
      pages.push(...collectBlogPages(item.children))
      continue
    }

    if (!isMdxFile(item) || item.route === '/blog') {
      continue
    }

    pages.push({
      title: String(item.frontMatter?.title || item.name),
      route: item.route,
      description:
        typeof item.frontMatter?.description === 'string'
          ? item.frontMatter.description
          : undefined,
      date:
        typeof item.frontMatter?.date === 'string'
          ? item.frontMatter.date
          : undefined
    })
  }

  return pages
}

export default async function BlogPostList() {
  const pageMap = await getPageMap('/blog')
  const posts = collectBlogPages(pageMap)

  return (
    <>
      <h1 style={{fontSize: 'xx-large', fontWeight: '800'}}>Post</h1><br />
      {posts.map(post => (
        <article key={post.route} style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>
            <Link href={post.route} style={{ color: 'inherit', textDecoration: 'none', fontSize: '1.6rem', fontWeight: '600' }}>
              {post.title}
            </Link>
          </h2>
          {post.date ? (
            <p style={{ marginTop: 0, marginBottom: '0.75rem', opacity: 0.7, fontSize: '0.95rem' }}>
              {post.date}
            </p>
          ) : null}
          {post.description ? (
            <p style={{ marginTop: 0, fontSize: '1rem' }}>
              {post.description}{' '}
              <Link href={post.route} style={{ textDecoration: 'underline'}}>Read →</Link>
            </p>
          ) : (
            <p style={{ marginTop: 0 }}>
              <Link href={post.route} style={{ textDecoration: 'underline'}}>Read →</Link>
            </p>
          )}
        </article>
      ))}
    </>
  )
}
