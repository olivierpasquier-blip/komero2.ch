export type Language = 'fr' | 'de' | 'en';

export const SUPPORTED_LANGUAGES: readonly Language[] = ['fr', 'de', 'en'] as const;

export const HTML_LANG_BY_LANGUAGE: Record<Language, 'fr-CH' | 'de-CH' | 'en-CH'> = {
  fr: 'fr-CH',
  de: 'de-CH',
  en: 'en-CH',
};

export const OG_LOCALE_BY_LANGUAGE: Record<Language, 'fr_CH' | 'de_CH' | 'en_CH'> = {
  fr: 'fr_CH',
  de: 'de_CH',
  en: 'en_CH',
};

export interface SiteConfig {
  siteUrl: string;
  brandName: string;
  brandHeadline: string;
  brandBaseline: string;
  currency: 'CHF';
  priceEssentielDisplay: string;
  priceEssentielValue: string;
  pricePremiumDisplay: string;
  pricePremiumValue: string;
  contactPhoneDisplay: string;
  contactPhoneE164: string;
  contactEmail: string;
  subscriptionEmail: string;
  stripeLinkEssentiel: string;
  stripeLinkPremium: string;
  stripePortalUrl: string;
  prospectWebhookUrl: string;
  legalEntityName: string;
  legalDirector: string;
  legalSiret: string;
  legalAddress: string;
  legalCity: string;
  legalPostalCode: string;
  legalJurisdiction: string;
  legalHost: string;
  vatMention: string;
}

export const OFFICIAL_BRAND_HEADLINE =
  'Plus visible dans votre quartier. Plus de clients en boutique.';
export const OFFICIAL_BRAND_BASELINE =
  'L’assistant IA qui gère vos avis Google, anime vos réseaux sociaux et fait revenir vos clients en 2 minutes par jour.';
export const SUBSCRIPTION_MANAGEMENT_EMAIL = 'contact@komero.ch';
export const SUBSCRIPTION_MANAGEMENT_NOTICE =
  'Pour gérer, modifier ou résilier votre abonnement sans engagement, utilisez le portail client ou écrivez à contact@komero.ch';

export type ViteEnvLike = Record<string, string | undefined>;

function readEnv(env: ViteEnvLike, key: string, fallback: string): string {
  const value = env[key];
  if (typeof value === 'string' && value.trim().length > 0) {
    return value.trim();
  }
  return fallback;
}

/** Anciens liens Stripe (essai 30 jours) remplacés par les liens officiels 7 jours gratuits */
const RETIRED_STRIPE_LINKS = new Set<string>([
  'https://buy.stripe.com/4gM4gA15Udk82J6dGb6Ri02',
  'https://buy.stripe.com/14A14o7uidk85Vi7hN6Ri01',
  'https://buy.stripe.com/6oU4gA29Ya7WdnK45B6Ri00',
]);

function resolveStripeLink(
  env: ViteEnvLike,
  primaryKey: string,
  secondaryKey: string,
  fallback: string
): string {
  const primary = readEnv(env, primaryKey, '');
  if (primary && !RETIRED_STRIPE_LINKS.has(primary)) {
    return primary;
  }
  const secondary = readEnv(env, secondaryKey, '');
  if (secondary && !RETIRED_STRIPE_LINKS.has(secondary)) {
    return secondary;
  }
  return fallback;
}

/** Lien Stripe Suisse Formule Essentiel (19,90 CHF / mois avec 7 jours d'essai gratuit) */
export const DEFAULT_STRIPE_LINK_ESSENTIEL_CHF =
  'https://buy.stripe.com/4gMaEY01Q5RG5VidGb6Ri04';
/** Lien Stripe Suisse Formule Premium (49,90 CHF / mois avec 7 jours d'essai gratuit) */
export const DEFAULT_STRIPE_LINK_PREMIUM_CHF =
  'https://buy.stripe.com/8x2dRa15Ucg44Re7hN6Ri07';
export const DEFAULT_STRIPE_LINK_ESSENTIEL = DEFAULT_STRIPE_LINK_ESSENTIEL_CHF;
export const DEFAULT_STRIPE_LINK_PREMIUM = DEFAULT_STRIPE_LINK_PREMIUM_CHF;

export const DEFAULT_PROSPECT_WEBHOOK_URL =
  'https://hook.eu1.make.com/2qqcqy4tjhpbjlx3nge5ms3vh3rwyk1t';

export const DEFAULT_LEGAL_ENTITY_NAME =
  'Entreprise individuelle — Olivier Pasquier (Komero)';
export const DEFAULT_LEGAL_SIRET = "SIRET en cours d'attribution";
export const DEFAULT_LEGAL_ADDRESS =
  '34 chemin des Balmes, 69110 Sainte-Foy-lès-Lyon, France';
export const DEFAULT_LEGAL_HOST = 'OVH SAS, 2 rue Kellermann, 59100 Roubaix, France';
export const DEFAULT_VAT_MENTION =
  'TVA non applicable, article 293 B du Code général des impôts';

export function buildSiteConfig(env: ViteEnvLike = {}): SiteConfig {
  const webhookFromNewVar = readEnv(env, 'VITE_PROSPECT_WEBHOOK_URL', '');
  const webhookFromLegacyVar = readEnv(env, 'VITE_MAKE_WEBHOOK_URL', '');

  return {
    siteUrl: 'https://www.komero.ch',
    brandName: 'Komero',
    brandHeadline: OFFICIAL_BRAND_HEADLINE,
    brandBaseline: OFFICIAL_BRAND_BASELINE,
    currency: 'CHF',
    priceEssentielDisplay: '19,90 CHF',
    priceEssentielValue: '19.90',
    pricePremiumDisplay: '49,90 CHF',
    pricePremiumValue: '49.90',
    contactPhoneDisplay: '+33 6 76 36 90 59',
    contactPhoneE164: '+33676369059',
    contactEmail: 'contact@komero.ch',
    subscriptionEmail: SUBSCRIPTION_MANAGEMENT_EMAIL,
    stripeLinkEssentiel: resolveStripeLink(
      env,
      'VITE_STRIPE_LINK_ESSENTIEL_CHF',
      'VITE_STRIPE_LINK_ESSENTIEL',
      DEFAULT_STRIPE_LINK_ESSENTIEL_CHF
    ),
    stripeLinkPremium: resolveStripeLink(
      env,
      'VITE_STRIPE_LINK_PREMIUM_CHF',
      'VITE_STRIPE_LINK_PREMIUM',
      DEFAULT_STRIPE_LINK_PREMIUM_CHF
    ),
    stripePortalUrl: readEnv(env, 'VITE_STRIPE_PORTAL_URL', ''),
    prospectWebhookUrl:
      webhookFromNewVar || webhookFromLegacyVar || DEFAULT_PROSPECT_WEBHOOK_URL,
    legalEntityName: readEnv(env, 'VITE_LEGAL_ENTITY_NAME', DEFAULT_LEGAL_ENTITY_NAME),
    legalDirector: 'Olivier Pasquier',
    legalSiret: readEnv(env, 'VITE_LEGAL_SIRET', DEFAULT_LEGAL_SIRET),
    legalAddress: readEnv(env, 'VITE_LEGAL_ADDRESS', DEFAULT_LEGAL_ADDRESS),
    legalCity: 'Sainte-Foy-lès-Lyon',
    legalPostalCode: '69110',
    legalJurisdiction: 'Tribunal de commerce de Lyon',
    legalHost: readEnv(env, 'VITE_LEGAL_HOST', DEFAULT_LEGAL_HOST),
    vatMention: readEnv(env, 'VITE_VAT_MENTION', DEFAULT_VAT_MENTION),
  };
}

const runtimeEnv: ViteEnvLike =
  (import.meta as { env?: ViteEnvLike }).env ?? {};

export const SITE_CONFIG: SiteConfig = buildSiteConfig(runtimeEnv);

const PORTAL_MAIL_SUBJECTS: Record<Language, string> = {
  fr: 'Gestion ou résiliation de mon abonnement Komero Suisse',
  de: 'Verwaltung oder Kündigung meines Komero-Abos (Schweiz)',
  en: 'Manage or cancel my Komero Switzerland subscription',
};

const PORTAL_MAIL_BODIES: Record<Language, string> = {
  fr: 'Bonjour,\n\nJe souhaite gérer, modifier ou résilier mon abonnement Komero sans engagement.\n\nNom de mon commerce :\nEmail de facturation :\n\nMerci.',
  de: 'Guten Tag,\n\nich möchte mein Komero-Abo ohne Vertragsbindung verwalten, anpassen oder kündigen.\n\nName meines Geschäfts:\nRechnungs-E-Mail:\n\nBesten Dank.',
  en: 'Hello,\n\nI would like to manage, modify, or cancel my no-commitment Komero subscription.\n\nShop name:\nBilling email:\n\nThank you.',
};

const PORTAL_NOTICES: Record<Language, string> = {
  fr: 'Pour gérer, modifier ou résilier votre abonnement sans engagement en 1 clic, accédez à votre portail client ou écrivez à contact@komero.ch',
  de: 'Um Ihr Abo ohne Vertragsbindung mit 1 Klick zu verwalten oder zu kündigen, nutzen Sie das Kundenportal oder schreiben Sie an contact@komero.ch',
  en: 'To manage, update, or cancel your no-commitment subscription in 1 click, use the customer portal or email contact@komero.ch',
};

/**
 * Returns the Stripe Customer Portal link when VITE_STRIPE_PORTAL_URL is configured,
 * or falls back gracefully to a localized pre-filled mailto:contact@komero.ch link.
 */
export function getSubscriptionPortalAction(
  config: SiteConfig = SITE_CONFIG,
  lang: Language = 'fr'
): {
  href: string;
  isExternalPortal: boolean;
  email: string;
  notice: string;
} {
  const email = config.subscriptionEmail || SUBSCRIPTION_MANAGEMENT_EMAIL;
  const portalUrl = config.stripePortalUrl?.trim();

  if (portalUrl && /^https?:\/\//i.test(portalUrl)) {
    return {
      href: portalUrl,
      isExternalPortal: true,
      email,
      notice: PORTAL_NOTICES[lang],
    };
  }

  const subject = encodeURIComponent(PORTAL_MAIL_SUBJECTS[lang]);
  const body = encodeURIComponent(PORTAL_MAIL_BODIES[lang]);
  return {
    href: `mailto:${email}?subject=${subject}&body=${body}`,
    isExternalPortal: false,
    email,
    notice: PORTAL_NOTICES[lang],
  };
}
