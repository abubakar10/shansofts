import { Helmet } from 'react-helmet-async'
import { site } from '../data/site'

export default function SEO({ title, description, path = '', image, jsonLd }) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`
  const url = `${site.domain}${path}`
  const ogImage = image || `${site.domain}/og-image.png`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}
