import { useEffect } from 'react';
import { HTML_LANG_BY_LANGUAGE, OG_LOCALE_BY_LANGUAGE } from '../config/siteConfig';
import { getPricingFaq } from '../data/komeroContent';
import { useLanguage } from '../i18n/LanguageContext';
import { trackPageView } from '../lib/analytics';
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
  type RoutePath,
} from '../lib/seo';

function upsertMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export function SeoHead({ path }: { path: RoutePath }) {
  const { language } = useLanguage();

  useEffect(() => {
    const meta = getPageSeo(path, language);
    const canonical = buildCanonicalUrl(path, SITE_ORIGIN);
    const absoluteOgImage = `${SITE_ORIGIN}${meta.ogImage}`;

    document.documentElement.lang = HTML_LANG_BY_LANGUAGE[language];
    document.title = meta.title;

    upsertMetaTag('name', 'description', meta.description);
    upsertMetaTag('name', 'robots', getRobotsDirective(path));
    upsertMetaTag('property', 'og:locale', OG_LOCALE_BY_LANGUAGE[language]);
    upsertMetaTag('property', 'og:title', meta.title);
    upsertMetaTag('property', 'og:description', meta.description);
    upsertMetaTag('property', 'og:url', canonical);
    upsertMetaTag('property', 'og:image', absoluteOgImage);
    upsertMetaTag('name', 'twitter:title', meta.title);
    upsertMetaTag('name', 'twitter:description', meta.description);
    upsertMetaTag('name', 'twitter:image', absoluteOgImage);
    upsertCanonical(canonical);

    const existingAlternates = document.head.querySelectorAll('link[rel="alternate"][hreflang]');
    existingAlternates.forEach((node) => node.remove());

    buildHreflangAlternates(path, SITE_ORIGIN).forEach(({ hreflang, href }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', href);
      link.setAttribute('data-komero-hreflang', 'true');
      document.head.appendChild(link);
    });

    const existingScripts = document.head.querySelectorAll('script[data-komero-jsonld="true"]');
    existingScripts.forEach((node) => node.remove());

    const schemas: Record<string, unknown>[] = [
      buildOrganizationJsonLd(language),
      buildSoftwareApplicationJsonLd(language),
      buildBreadcrumbJsonLd(path, SITE_ORIGIN, language),
    ];

    if (path === '/tarifs') {
      schemas.push(buildFaqJsonLd(getPricingFaq(language)));
    }

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-komero-jsonld', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    trackPageView({
      pagePath: `${path}${window.location.search || ''}`,
      pageTitle: meta.title,
      pageLocation: window.location.href,
    });
  }, [path, language]);

  return null;
}
