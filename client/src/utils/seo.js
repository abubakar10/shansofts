import { site } from '../data/site'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.domain}/#organization`,
    name: site.name,
    url: site.domain,
    logo: {
      '@type': 'ImageObject',
      url: `${site.domain}/logo.png`,
    },
    description:
      'Shansofts is an IT solutions company delivering custom software, web development, mobile apps, cloud infrastructure and AI solutions.',
    email: site.email,
    telephone: site.phone,
    sameAs: Object.values(site.social),
    contactPoint: {
      '@type': 'ContactPoint',
      email: site.email,
      contactType: 'sales',
      availableLanguage: ['English'],
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.domain}/#website`,
    url: site.domain,
    name: site.name,
    description: site.tagline,
    publisher: { '@id': `${site.domain}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${site.domain}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.domain}/#business`,
    name: site.name,
    url: site.domain,
    image: `${site.domain}/og-image.png`,
    description:
      'Custom software development, web apps, mobile apps, cloud & DevOps, and AI solutions for startups and enterprises.',
    email: site.email,
    telephone: site.phone,
    priceRange: '$$',
    areaServed: 'Worldwide',
    serviceType: [
      'Custom Software Development',
      'Web Development',
      'Mobile App Development',
      'Cloud & DevOps',
      'AI Solutions',
      'UI/UX Design',
    ],
    sameAs: Object.values(site.social),
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${site.domain}${item.path}`,
    })),
  }
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}

export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author || site.name,
      url: site.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: {
        '@type': 'ImageObject',
        url: `${site.domain}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${site.domain}/blog/${post.slug}`,
    },
    keywords: post.keywords?.join(', '),
  }
}

export function serviceListSchema(services) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'Service',
      position: i + 1,
      name: s.title,
      description: s.short,
      provider: { '@id': `${site.domain}/#organization` },
      url: `${site.domain}/services`,
    })),
  }
}
