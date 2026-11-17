import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Breadcrumbs from '../components/Breadcrumbs'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { blogPosts } from '../data/blog'
import { breadcrumbSchema, organizationSchema } from '../utils/seo'
import { site } from '../data/site'

export default function Blog() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <>
      <SEO
        title="Blog"
        description="Practical guides from Shansofts on custom software, SaaS MVPs, AI features, mobile stacks, DevOps and secure delivery — written to help you ship and grow."
        path="/blog"
        keywords="software development blog, SaaS MVP guide, AI for business apps, DevOps checklist, React Native vs Flutter"
        jsonLd={[
          organizationSchema(),
          breadcrumbSchema(crumbs),
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: `${site.name} Blog`,
            url: `${site.domain}/blog`,
            description: 'Insights on custom software, AI, cloud and product delivery.',
            publisher: { '@id': `${site.domain}/#organization` },
          },
        ]}
      />

      <section className="section pb-10 pt-10">
        <div className="container-app">
          <Breadcrumbs items={crumbs} />
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title="Software & IT guides that help you decide faster"
            subtitle="Recent, practical articles for founders and product leaders evaluating custom software, AI, mobile and cloud delivery."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="container-app grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts
            .slice()
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            .map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover">
                  <Link to={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-surface">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      width="800"
                      height="500"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700">
                      {post.category}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-body">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                      <span aria-hidden>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="mt-3 font-display text-xl font-semibold text-heading">
                      <Link to={`/blog/${post.slug}`} className="hover:text-brand-700">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      Read article →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
        </div>
      </section>
    </>
  )
}
