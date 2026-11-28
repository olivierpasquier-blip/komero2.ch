import React, { useEffect, useRef, useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Gift,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react';
import { SITE_CONFIG, getSubscriptionPortalAction } from '../config/siteConfig';
import { ASSETS, getFeaturesOverview } from '../data/komeroContent';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import { getPageSeo, type FeatureRoutePath, type RoutePath } from '../lib/seo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link, useRouter } from './Router';

const FEATURE_PATHS = new Set<RoutePath>([
  '/gestion-fiche-google',
  '/avis-google-ia',
  '/reseaux-sociaux',
  '/repondeur-sms',
  '/campagnes-sms-flash',
  '/veille-concurrence',
  '/roue-de-la-chance',
]);

export function KomeroBrandMark({ inverted = false }: { inverted?: boolean }) {
  if (inverted) {
    return (
      <span className="inline-flex items-center shrink-0">
        <img
          src={ASSETS.logoFooterDark}
          alt="Komero"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-12 sm:h-14 w-auto object-contain object-left block"
        />
      </span>
    );
  }

  return (
    <span className="inline-flex items-center shrink-0">
      <img
        src={ASSETS.logoHeader}
        alt="Komero"
        loading="eager"
        decoding="async"
        referrerPolicy="no-referrer"
        className="h-8 sm:h-9 w-auto object-contain block"
      />
    </span>
  );
}

export function Breadcrumb({ path }: { path: RoutePath }) {
  const { language } = useLanguage();
  if (path === '/') return null;

  const t = TRANSLATIONS[language].nav;
  const pageSeo = getPageSeo(path, language);

  return (
    <nav aria-label={t.breadcrumbAria} className="bg-[#F8FAFC] border-b border-slate-200/80 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
          <li>
            <Link to="/" className="hover:text-[#2563EB] transition-colors">
              {t.breadcrumbHome}
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="font-medium text-[#1E293B] truncate">
            {pageSeo.breadcrumbLabel}
          </li>
        </ol>
      </div>
    </nav>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { path } = useRouter();
  const { language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresMenuOpen, setFeaturesMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[language];
  const featuresOverview = getFeaturesOverview(language);
  const isFeatureRoute = FEATURE_PATHS.has(path as FeatureRoutePath);
  const portalAction = getSubscriptionPortalAction(SITE_CONFIG, language);
  const portalExternalProps = portalAction.isExternalPortal
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  useEffect(() => {
    setFeaturesMenuOpen(false);
    setMobileMenuOpen(false);
  }, [path]);

  useEffect(() => {
    if (!featuresMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setFeaturesMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFeaturesMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [featuresMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E293B]">
      {/* Sticky Header: Brand | 4-entry Navigation | Primary CTA + SVG Flag Switcher */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-5">
          {/* Left: Official Transparent Komero Logo */}
          <Link
            to="/"
            aria-label={t.nav.logoAria}
            onClick={() => setMobileMenuOpen(false)}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg py-1 shrink-0"
          >
            <KomeroBrandMark />
          </Link>

          {/* Center: 4 clean entries max */}
          <nav
            aria-label={t.nav.mainNavAria}
            className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-slate-600"
          >
            <Link
              to="/"
              aria-current={path === '/' ? 'page' : undefined}
              className={`whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 ${
                path === '/'
                  ? 'text-[#1E293B] font-semibold border-[#2563EB]'
                  : 'border-transparent hover:text-[#1E293B] hover:border-slate-300'
              }`}
            >
              {t.nav.home}
            </Link>

            {/* Dropdown: Fonctionnalités / Funktionen / Features */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                aria-expanded={featuresMenuOpen}
                aria-haspopup="menu"
                aria-controls="features-dropdown-menu"
                onClick={() => setFeaturesMenuOpen((prev) => !prev)}
                className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-sm ${
                  isFeatureRoute || featuresMenuOpen
                    ? 'text-[#1E293B] font-semibold border-[#2563EB]'
                    : 'border-transparent hover:text-[#1E293B] hover:border-slate-300'
                }`}
              >
                <span>{t.nav.features}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    featuresMenuOpen ? 'rotate-180 text-[#2563EB]' : 'text-slate-400'
                  }`}
                  aria-hidden="true"
                />
              </button>

              {featuresMenuOpen && (
                <div
                  id="features-dropdown-menu"
                  role="menu"
                  aria-label={t.nav.featuresDropdownAria}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[440px] rounded-2xl border border-slate-200 bg-white shadow-[0_24px_48px_-16px_rgba(30,41,59,0.16)] p-3 z-50"
                >
                  <div className="space-y-1">
                    {featuresOverview.map((feature) => {
                      const active = path === feature.path;
                      return (
                        <Link
                          key={feature.path}
                          role="menuitem"
                          to={feature.path}
                          onClick={() => setFeaturesMenuOpen(false)}
                          className={`flex items-start justify-between gap-3 rounded-xl px-3.5 py-2.5 transition-colors ${
                            active
                              ? 'bg-blue-50/90 text-[#1E293B]'
                              : 'hover:bg-[#F8FAFC] text-[#1E293B]'
                          }`}
                        >
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-[#1E293B] truncate">
                              {feature.number}. {feature.shortTitle}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5 truncate">
                              {feature.subtitle}
                            </p>
                          </div>
                          <span
                            className={`text-[11px] font-semibold whitespace-nowrap shrink-0 mt-0.5 ${
                              feature.tierId === 'essentiel'
                                ? 'text-[#2563EB]'
                                : 'text-[#047857]'
                            }`}
                          >
                            {feature.tierLabel}
                          </span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Bonus Starter Pack / Lucky Wheel */}
                  <div className="mt-2 pt-2 border-t border-slate-100">
                    <Link
                      role="menuitem"
                      to="/roue-de-la-chance"
                      onClick={() => setFeaturesMenuOpen(false)}
                      className={`flex items-start gap-3 rounded-xl border px-3.5 py-2.5 transition-colors ${
                        path === '/roue-de-la-chance'
                          ? 'bg-emerald-100/80 border-emerald-300'
                          : 'bg-emerald-50/80 hover:bg-emerald-50 border-emerald-200/80'
                      }`}
                    >
                      <Gift
                        className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#047857]">{t.nav.bonusTitle}</p>
                        <p className="text-[11px] text-slate-600 mt-0.5">{t.nav.bonusSubtitle}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/tarifs"
              aria-current={path === '/tarifs' ? 'page' : undefined}
              className={`whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 ${
                path === '/tarifs'
                  ? 'text-[#1E293B] font-semibold border-[#2563EB]'
                  : 'border-transparent hover:text-[#1E293B] hover:border-slate-300'
              }`}
            >
              {t.nav.pricing}
            </Link>

            <Link
              to="/contact"
              aria-current={path === '/contact' ? 'page' : undefined}
              className={`whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 ${
                path === '/contact'
                  ? 'text-[#1E293B] font-semibold border-[#2563EB]'
                  : 'border-transparent hover:text-[#1E293B] hover:border-slate-300'
              }`}
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right: Primary Subscribe CTA + Vector SVG Flag Switcher + Mobile Burger */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Link
              to="/tarifs"
              className="hidden md:inline-flex items-center justify-center px-3.5 xl:px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
            >
              {t.nav.primaryCta}
            </Link>

            {/* Desktop SVG Flag Language Switcher (top-right) */}
            <div className="hidden sm:flex items-center">
              <LanguageSwitcher />
            </div>

            {/* Compact Flag Switcher on smallest mobile screens */}
            <div className="flex sm:hidden items-center">
              <LanguageSwitcher compact />
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-[#1E293B] hover:bg-slate-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Burger Drawer */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation-drawer"
            aria-label={t.nav.mobileMenuAria}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-lg max-h-[82vh] overflow-y-auto"
          >
            {/* Language Switcher inside Mobile Menu */}
            <div className="flex items-center justify-between gap-3 px-3 py-2.5 mb-2 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <span className="text-xs font-semibold text-slate-600">
                {t.nav.mobileLanguageLabel}
              </span>
              <LanguageSwitcher onSelect={() => setMobileMenuOpen(false)} />
            </div>

            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium ${
                  path === '/' ? 'bg-blue-50 text-[#2563EB]' : 'text-[#1E293B] hover:bg-slate-50'
                }`}
              >
                {t.nav.home}
              </Link>

              <p className="px-3 pt-2 pb-1 text-xs font-semibold text-slate-500">
                {t.nav.mobileFeaturesHeading}
              </p>

              {featuresOverview.map((feature) => (
                <Link
                  key={feature.path}
                  to={feature.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    path === feature.path
                      ? 'bg-blue-50 text-[#2563EB]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {feature.number}. {feature.shortTitle}
                </Link>
              ))}

              <Link
                to="/roue-de-la-chance"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 ${
                  path === '/roue-de-la-chance'
                    ? 'bg-emerald-100 text-[#047857]'
                    : 'text-[#047857] hover:bg-emerald-50'
                }`}
              >
                <Gift className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                {t.nav.mobileBonusLink}
              </Link>

              <div className="my-2 border-t border-slate-100" />

              <Link
                to="/tarifs"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium ${
                  path === '/tarifs'
                    ? 'bg-blue-50 text-[#2563EB]'
                    : 'text-[#1E293B] hover:bg-slate-50'
                }`}
              >
                {t.nav.pricing}
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-base font-medium ${
                  path === '/contact'
                    ? 'bg-blue-50 text-[#2563EB]'
                    : 'text-[#1E293B] hover:bg-slate-50'
                }`}
              >
                {t.nav.contact}
              </Link>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <Link
                to="/tarifs"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-[#2563EB] text-white text-sm font-semibold"
              >
                {t.nav.primaryCta}
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-[#1E293B] text-sm font-semibold text-[#1E293B]"
              >
                {t.home.secondaryCta}
              </Link>
            </div>
          </nav>
        )}
      </header>

      <Breadcrumb path={path} />

      <main className="flex-1">{children}</main>

      {/* Unified Deep Komero Navy Footer (#11223E) */}
      <footer className="bg-[#11223E] text-slate-300 border-t border-slate-800/80 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Brand, Localized Baseline & Swiss Coordinates */}
            <div className="lg:col-span-4 space-y-4">
              <Link to="/" aria-label={t.nav.logoAria} className="inline-block -ml-2">
                <KomeroBrandMark inverted />
              </Link>
              <div className="space-y-1.5 max-w-sm">
                <p className="text-sm font-bold text-white leading-snug">{t.footer.headline}</p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.footer.baseline}
                </p>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 pt-1">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{t.footer.locationLine}</span>
                </li>
                <li>
                  <a
                    href={`tel:${SITE_CONFIG.contactPhoneE164}`}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                    <span className="tabular-nums">{SITE_CONFIG.contactPhoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="inline-flex items-center gap-2 hover:text-white transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                    <span>{SITE_CONFIG.contactEmail}</span>
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
                <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{t.footer.privacyBadge}</span>
              </div>
            </div>

            {/* 5 Features */}
            <div className="lg:col-span-3 space-y-3 lg:pt-3">
              <h2 className="text-sm font-semibold text-white">{t.footer.featuresHeading}</h2>
              <ul className="space-y-2.5 text-sm">
                {featuresOverview.map((feature) => (
                  <li key={feature.path}>
                    <Link to={feature.path} className="hover:text-white transition-colors">
                      {feature.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2 space-y-3 lg:pt-3">
              <h2 className="text-sm font-semibold text-white">{t.footer.navigationHeading}</h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link to="/roue-de-la-chance" className="hover:text-white transition-colors">
                    {t.footer.luckyWheelLink}
                  </Link>
                </li>
                <li>
                  <Link to="/tarifs" className="hover:text-white transition-colors">
                    {t.nav.pricing}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    {t.nav.contact}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Information & Subscription Portal */}
            <div className="lg:col-span-3 space-y-3 lg:pt-3">
              <h2 className="text-sm font-semibold text-white">{t.footer.legalHeading}</h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/mentions-legales" className="hover:text-white transition-colors">
                    {t.footer.mentionsLink}
                  </Link>
                </li>
                <li>
                  <Link to="/cgv" className="hover:text-white transition-colors">
                    {t.footer.cgvLink}
                  </Link>
                </li>
                <li>
                  <Link to="/confidentialite" className="hover:text-white transition-colors">
                    {t.footer.privacyLink}
                  </Link>
                </li>
                <li>
                  <a
                    href={portalAction.href}
                    {...portalExternalProps}
                    className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                  >
                    {t.footer.manageSubscription}
                  </a>
                </li>
              </ul>
              <p className="text-xs text-slate-300/90 pt-2 leading-relaxed">
                {t.footer.manageNoticePrefix.trimEnd()}{' '}
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="text-emerald-400 font-semibold hover:underline"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-700/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © 2026 {SITE_CONFIG.legalEntityName} — {t.footer.copyrightSuffix}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <Link to="/mentions-legales" className="hover:text-white transition-colors">
                {t.footer.mentionsLink}
              </Link>
              <span aria-hidden="true">·</span>
              <Link to="/cgv" className="hover:text-white transition-colors">
                {t.footer.cgvShort}
              </Link>
              <span aria-hidden="true">·</span>
              <Link to="/confidentialite" className="hover:text-white transition-colors">
                {t.footer.privacyShort}
              </Link>
              <span aria-hidden="true">·</span>
              <a
                href={portalAction.href}
                {...portalExternalProps}
                className="hover:text-white transition-colors"
              >
                {t.footer.manageSubscription}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
