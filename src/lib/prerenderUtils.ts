import { HTML_LANG_BY_LANGUAGE, OG_LOCALE_BY_LANGUAGE, type Language } from '../config/siteConfig';
import { getPricingFaq } from '../data/komeroContent';
import {
  SITE_ORIGIN,
  buildBreadcrumbJsonLd,
  buildCanonicalUrl,
  buildFaqJsonLd,
  buildHreflangAlternates,
  buildOrganizationJsonLd,
  buildSoftwareApplicationJsonLd,
  getPageSeo,
  getRobotsDirective,
  normalizeRoutePath,
  type RoutePath,
} from './seo';

export interface PrerenderRouteEntry {
  urlPath: string;
  routePath: RoutePath;
}

/**
 * All public Komero Suisse routes pre-rendered to static HTML during `npm run build`
 * so Googlebot and AI crawlers receive complete HTML, head metadata, hreflang, and JSON-LD
 * on the very first HTTP response.
 */
export const PRERENDER_ROUTES: readonly PrerenderRouteEntry[] = [
  { urlPath: '/', routePath: '/' },
  { urlPath: '/gestion-fiche-google', routePath: '/gestion-fiche-google' },
  { urlPath: '/avis-google-ia', routePath: '/avis-google-ia' },
  { urlPath: '/reseaux-sociaux', routePath: '/reseaux-sociaux' },
  { urlPath: '/repondeur-sms', routePath: '/repondeur-sms' },
  { urlPath: '/repondeur-sms-whatsapp', routePath: '/repondeur-sms' },
  { urlPath: '/campagnes-sms-flash', routePath: '/campagnes-sms-flash' },
  { urlPath: '/veille-concurrence', routePath: '/veille-concurrence' },
  { urlPath: '/roue-de-la-chance', routePath: '/roue-de-la-chance' },
  { urlPath: '/tarifs', routePath: '/tarifs' },
  { urlPath: '/contact', routePath: '/contact' },
  { urlPath: '/informations-legales', routePath: '/informations-legales' },
  { urlPath: '/mentions-legales', routePath: '/mentions-legales' },
  { urlPath: '/cgv', routePath: '/cgv' },
  { urlPath: '/confidentialite', routePath: '/confidentialite' },
] as const;

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeHtmlText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function buildStaticSeoHeadHtml(
  rawPath: string,
  lang: Language = 'fr'
): { htmlLang: string; headMarkup: string } {
  const routePath = normalizeRoutePath(rawPath);
  const meta = getPageSeo(routePath, lang);
  const canonical = buildCanonicalUrl(routePath, SITE_ORIGIN);
  const absoluteOgImage = `${SITE_ORIGIN}${meta.ogImage}`;
  const robots = getRobotsDirective(routePath);
  const htmlLang = HTML_LANG_BY_LANGUAGE[lang];
  const ogLocale = OG_LOCALE_BY_LANGUAGE[lang];
  const alternates = buildHreflangAlternates(routePath, SITE_ORIGIN);

  const schemas: Record<string, unknown>[] = [
    buildOrganizationJsonLd(lang),
    buildSoftwareApplicationJsonLd(lang),
    buildBreadcrumbJsonLd(routePath, SITE_ORIGIN, lang),
  ];

  if (routePath === '/tarifs' || routePath === '/') {
    schemas.push(buildFaqJsonLd(getPricingFaq(lang)));
  }

  const lines: string[] = [
    `<title>${escapeHtmlText(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtmlAttr(meta.description)}" />`,
    `<meta name="robots" content="${escapeHtmlAttr(robots)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${escapeHtmlAttr(ogLocale)}" />`,
    `<meta property="og:locale:alternate" content="de_CH" />`,
    `<meta property="og:locale:alternate" content="en_CH" />`,
    `<meta property="og:site_name" content="Komero" />`,
    `<meta property="og:url" content="${escapeHtmlAttr(canonical)}" />`,
    `<meta property="og:title" content="${escapeHtmlAttr(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtmlAttr(meta.description)}" />`,
    `<meta property="og:image" content="${escapeHtmlAttr(absoluteOgImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtmlAttr(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtmlAttr(meta.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtmlAttr(absoluteOgImage)}" />`,
    `<link rel="canonical" href="${escapeHtmlAttr(canonical)}" />`,
    ...alternates.map(
      ({ hreflang, href }) =>
        `<link rel="alternate" hreflang="${escapeHtmlAttr(hreflang)}" href="${escapeHtmlAttr(href)}" data-komero-hreflang="true" />`
    ),
    ...schemas.map(
      (schema) =>
        `<script type="application/ld+json" data-komero-jsonld="true">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`
    ),
  ];

  return {
    htmlLang,
    headMarkup: lines.join('\n    '),
  };
}

/**
 * Replaces the generic SEO tags and empty `<div id="root"></div>` in the Vite built HTML template
 * with route-specific `<head>` tags (title, description, canonical, hreflang, OG, JSON-LD)
 * and the pre-rendered React markup.
 */
export function injectPrerenderedHtml(
  templateHtml: string,
  rawPath: string,
  renderedAppHtml: string,
  lang: Language = 'fr'
): string {
  const { htmlLang, headMarkup } = buildStaticSeoHeadHtml(rawPath, lang);

  let html = templateHtml.replace(/<html\s+lang="[^"]*"/i, `<html lang="${htmlLang}"`);

  // Strip template's default SEO tags so route-specific tags are never duplicated
  const stripPatterns: RegExp[] = [
    /<title>[\s\S]*?<\/title>\s*/gi,
    /<meta\s+name="(?:description|robots|twitter:[^"]+)"[^>]*\/?>\s*/gi,
    /<meta\s+property="og:[^"]+"[^>]*\/?>\s*/gi,
    /<link\s+rel="canonical"[^>]*\/?>\s*/gi,
    /<link\s+rel="alternate"\s+hreflang="[^"]+"[^>]*\/?>\s*/gi,
    /<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\s*/gi,
  ];

  for (const pattern of stripPatterns) {
    html = html.replace(pattern, '');
  }

  html = html.replace('</head>', `    ${headMarkup}\n  </head>`);
  html = html.replace(/<div id="root"><\/div>/, `<div id="root">${renderedAppHtml}</div>`);

  return html;
}
