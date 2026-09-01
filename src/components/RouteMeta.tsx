import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routeMeta, SITE_URL } from '../lib/routeMeta';

/**
 * Applies per-route <title>, description, canonical and Open Graph tags.
 *
 * Rendered once inside the Router rather than added to each page component, so
 * there is a single place to keep metadata correct.
 *
 * This runs in the browser, which on its own would not help crawlers that do not
 * execute JavaScript. It matters because the prerender step loads each route in a
 * real browser and saves the resulting DOM, so whatever this sets ends up baked
 * into that route's static HTML file.
 */
function setTag(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    for (const [k, v] of Object.entries(attrs)) {
      // Seed the identifying attribute (name/property/rel) so the selector matches next time.
      if (k !== 'content' && k !== 'href') el.setAttribute(k, v);
    }
    document.head.appendChild(el);
  }
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
}

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Normalise a trailing slash so /about/ and /about resolve to the same entry.
    const key = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    const meta = routeMeta[key];
    if (!meta) return; // Unknown route: leave the document defaults in place.

    const url = `${SITE_URL}${key === '/' ? '/' : key}`;

    document.title = meta.title;
    setTag('meta[name="description"]', { name: 'description', content: meta.description });
    setTag('link[rel="canonical"]', { rel: 'canonical', href: url });
    setTag('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    setTag('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    setTag('meta[property="og:url"]', { property: 'og:url', content: url });
  }, [pathname]);

  return null;
}
