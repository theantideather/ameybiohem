import { useEffect } from 'react'

const SITE = 'https://ameybiochem.com'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let tag = document.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(path) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', `${SITE}${path}`)
}

function setJsonLd(id, data) {
  let script = document.getElementById(id)
  if (!data) {
    script?.remove()
    return
  }
  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

/**
 * Sets per-page title, meta description, canonical URL, Open Graph tags
 * and an optional JSON-LD block. Runs client-side (no SSR), so it helps
 * Googlebot (which renders JS) and any tool that waits for the page to
 * settle, but not crawlers that only read raw HTML.
 */
export function useSeo({ title, description, path, jsonLd }) {
  useEffect(() => {
    if (title) document.title = title
    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', path ? `${SITE}${path}` : undefined, 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    if (path) setCanonical(path)
    if (jsonLd) setJsonLd('page-jsonld', jsonLd)
    return () => setJsonLd('page-jsonld', null)
  }, [title, description, path, jsonLd])
}
