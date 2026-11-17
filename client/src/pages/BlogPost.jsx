import { Link, Navigate, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import Reveal from '../components/Reveal'
import { getPostBySlug, getRelatedPosts } from '../data/blog'
import { articleSchema, breadcrumbSchema, organizationSchema } from '../utils/seo'

function Block({ block }) {
  if (block.type === 'p') {
    return <p className="text-base leading-relaxed text-body sm:text-lg">{block.text}</p>
  }
  if (block.type === 'h2') {
    return <h2 className="mt-10 font-display text-2xl font-bold text-heading sm:text-3xl">{block.text}</h2>
  }
  if (block.type === 'h3') {
    return <h3 className="mt-6 font-display text-xl font-semibold text-heading">{block.text}</h3>
  }
  if (block.type === 'ul') {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-body">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  if (block.type === 'ol') {
    return (
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-body">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    )
  }
  if (block.type === 'cta') {
    return (
      <div className="mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
        <p className="font-display text-xl font-semibold text-heading">{block.text}</p>
        <Link to={block.href} className="btn-primary mt-4 inline-flex">
          {block.label} <FiArrowRight />
        </Link>
      </div>
    )
  }
  return null
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = getRelatedPosts(post.slug)
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ]

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        keywords={post.keywords.join(', ')}
        publishedTime={post.publishedAt}
        modifiedTime={post.updatedAt}
        author={post.author}
        jsonLd={[organizationSchema(), breadcrumbSchema(crumbs), articleSchema(post)]}
      />

      <article className="pb-20 pt-10">
        <div className="container-app max-w-3xl">
          <Breadcrumbs items={crumbs} />

          <header>
            <div className="flex flex-wrap items-center gap-3 text-sm text-body">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                {post.category}
              </span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-heading text-balance sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-body">{post.excerpt}</p>
            <p className="mt-3 text-sm text-body">By {post.author}</p>
          </header>

          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose-shansofts mt-10 space-y-5">
            {post.content.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
              <FiArrowLeft /> Back to blog
            </Link>
            <Link to="/contact" className="btn-primary">
              Start a project <FiArrowRight />
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <section className="container-app mt-16">
            <h2 className="font-display text-2xl font-bold text-heading">Related articles</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.06}>
                  <Link
                    to={`/blog/${r.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-line bg-white transition hover:border-brand-300 hover:shadow-card"
                  >
                    <img
                      src={r.image}
                      alt={r.title}
                      className="aspect-[16/10] w-full object-cover transition group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{r.category}</p>
                      <h3 className="mt-1 font-display text-base font-semibold text-heading group-hover:text-brand-700">
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  )
}
