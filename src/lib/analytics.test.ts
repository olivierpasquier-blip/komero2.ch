import test from 'node:test';
import assert from 'node:assert/strict';
import {
  GTM_CONTAINER_ID,
  resetAnalyticsTrackerForTests,
  trackPageView,
} from './analytics';
import {
  PRICING_FAQ,
  PRICING_PLANS,
  STRIPE_LINKS,
  getPricingFaq,
  getPricingPlans,
} from '../data/komeroContent';
import { SITE_CONFIG, buildSiteConfig } from '../config/siteConfig';

test('GTM container ID, Swiss CHF Stripe links, pricing plans, and contact coordinates match exact specifications', () => {
  assert.equal(GTM_CONTAINER_ID, 'GTM-NH87K4J4');
  assert.equal(STRIPE_LINKS.essentiel, 'https://buy.stripe.com/4gMaEY01Q5RG5VidGb6Ri04');
  assert.equal(STRIPE_LINKS.premium, 'https://buy.stripe.com/8x2dRa15Ucg44Re7hN6Ri07');
  assert.equal(SITE_CONFIG.siteUrl, 'https://www.komero.ch');
  assert.equal(SITE_CONFIG.contactEmail, 'contact@komero.ch');
  assert.equal(SITE_CONFIG.subscriptionEmail, 'contact@komero.ch');
  assert.equal(SITE_CONFIG.contactPhoneDisplay, '+33 6 76 36 90 59');
  assert.equal(SITE_CONFIG.currency, 'CHF');
  assert.equal(SITE_CONFIG.priceEssentielValue, '19.90');
  assert.equal(SITE_CONFIG.pricePremiumValue, '49.90');

  const upgradedFromOldEnv = buildSiteConfig({
    VITE_STRIPE_LINK_ESSENTIEL: 'https://buy.stripe.com/4gM4gA15Udk82J6dGb6Ri02',
    VITE_STRIPE_LINK_PREMIUM: 'https://buy.stripe.com/14A14o7uidk85Vi7hN6Ri01',
  });
  assert.equal(
    upgradedFromOldEnv.stripeLinkEssentiel,
    'https://buy.stripe.com/4gMaEY01Q5RG5VidGb6Ri04'
  );
  assert.equal(
    upgradedFromOldEnv.stripeLinkPremium,
    'https://buy.stripe.com/8x2dRa15Ucg44Re7hN6Ri07'
  );

  const customChfOverride = buildSiteConfig({
    VITE_STRIPE_LINK_ESSENTIEL_CHF: 'https://buy.stripe.com/custom_essentiel_chf',
    VITE_STRIPE_LINK_PREMIUM_CHF: 'https://buy.stripe.com/custom_premium_chf',
  });
  assert.equal(
    customChfOverride.stripeLinkEssentiel,
    'https://buy.stripe.com/custom_essentiel_chf'
  );
  assert.equal(
    customChfOverride.stripeLinkPremium,
    'https://buy.stripe.com/custom_premium_chf'
  );

  const essentielFr = PRICING_PLANS.find((p) => p.id === 'essentiel');
  const premiumFr = PRICING_PLANS.find((p) => p.id === 'premium');
  assert.equal(essentielFr?.price, '19,90 CHF');
  assert.equal(premiumFr?.price, '49,90 CHF');
  assert.equal(essentielFr?.stripeUrl, STRIPE_LINKS.essentiel);
  assert.equal(premiumFr?.stripeUrl, STRIPE_LINKS.premium);
  assert.equal(essentielFr?.ctaLabel, 'Démarrer (7 jours gratuits)');
  assert.equal(premiumFr?.ctaLabel, 'Démarrer (7 jours gratuits)');

  const plansDe = getPricingPlans('de');
  assert.equal(plansDe[0].name, 'Paket Basis');
  assert.equal(plansDe[0].price, '19,90 CHF');
  assert.equal(plansDe[0].ctaLabel, 'Jetzt starten (7 Tage gratis)');
  assert.equal(plansDe[1].price, '49,90 CHF');

  const plansEn = getPricingPlans('en');
  assert.equal(plansEn[0].name, 'Essential Plan');
  assert.equal(plansEn[0].price, '19.90 CHF');
  assert.equal(plansEn[0].ctaLabel, 'Start now (7 days free)');
  assert.equal(plansEn[1].price, '49.90 CHF');

  assert.ok(
    PRICING_FAQ.some(
      (item) =>
        item.id === 'resiliation-1-clic' &&
        item.answer.includes('contact@komero.ch') &&
        !item.answer.includes('info@komero.ch')
    )
  );
  assert.ok(
    PRICING_FAQ.every(
      (item) =>
        !item.question.includes('30 jours') &&
        !item.answer.includes('30 jours') &&
        !item.question.includes('1er mois') &&
        !item.answer.includes('1er mois')
    )
  );
  assert.ok(PRICING_FAQ[0].answer.includes('7 jours d’essai gratuit'));
  assert.ok(
    getPricingFaq('de').some(
      (item) =>
        item.answer.includes('contact@komero.ch') && !item.answer.includes('info@komero.ch')
    )
  );
  assert.ok(
    getPricingFaq('en').some(
      (item) =>
        item.answer.includes('contact@komero.ch') && !item.answer.includes('info@komero.ch')
    )
  );
});

test('trackPageView pushes page_view events to dataLayer on route change and deduplicates identical consecutive calls', () => {
  resetAnalyticsTrackerForTests();
  const dataLayer: Array<Record<string, unknown> | IArguments> = [];

  const first = trackPageView(
    {
      pagePath: '/',
      pageTitle: 'Komero Suisse — Assistant IA visibilité locale & avis',
      pageLocation: 'https://www.komero.ch/',
    },
    dataLayer
  );
  assert.ok(first);
  assert.equal(dataLayer.length, 1);
  assert.deepEqual(dataLayer[0], {
    event: 'page_view',
    page_path: '/',
    page_title: 'Komero Suisse — Assistant IA visibilité locale & avis',
    page_location: 'https://www.komero.ch/',
  });

  // Duplicate consecutive call for same view should be ignored
  const duplicate = trackPageView(
    {
      pagePath: '/',
      pageTitle: 'Komero Suisse — Assistant IA visibilité locale & avis',
      pageLocation: 'https://www.komero.ch/',
    },
    dataLayer
  );
  assert.equal(duplicate, null);
  assert.equal(dataLayer.length, 1);

  // Navigating to /contact pushes a new page_view
  const second = trackPageView(
    {
      pagePath: '/contact',
      pageTitle: 'Contact Komero Suisse & Démo 5 min Gratuite',
      pageLocation: 'https://www.komero.ch/contact',
    },
    dataLayer
  );
  assert.ok(second);
  assert.equal(dataLayer.length, 2);
  assert.equal((dataLayer[1] as Record<string, unknown>).page_path, '/contact');
});
