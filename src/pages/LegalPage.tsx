import {
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Phone,
  Printer,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { SITE_CONFIG, getSubscriptionPortalAction } from '../config/siteConfig';
import { buildLegalContent, type LegalSection } from '../data/legalContent';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import type { RoutePath } from '../lib/seo';
import { Link } from '../components/Router';

export type LegalDocType = 'mentions-legales' | 'cgv' | 'confidentialite';

export function LegalPage({ docType }: { docType: LegalDocType }) {
  const { language } = useLanguage();
  const ui = TRANSLATIONS[language].legalUi;
  const content = buildLegalContent(SITE_CONFIG, language);
  const portalAction = getSubscriptionPortalAction(SITE_CONFIG, language);
  const portalExternalProps = portalAction.isExternalPortal
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  const legalTabs: Array<{
    id: LegalDocType;
    label: string;
    route: RoutePath;
    icon: typeof FileText;
  }> = [
    {
      id: 'mentions-legales',
      label: ui.tabs.mentions,
      route: '/mentions-legales',
      icon: FileText,
    },
    {
      id: 'cgv',
      label: ui.tabs.cgv,
      route: '/cgv',
      icon: Scale,
    },
    {
      id: 'confidentialite',
      label: ui.tabs.privacy,
      route: '/confidentialite',
      icon: ShieldCheck,
    },
  ];

  const metaByDoc: Record<
    LegalDocType,
    {
      kicker: string;
      title: string;
      subtitle: string;
      sections: LegalSection[];
      icon: typeof FileText;
    }
  > = {
    'mentions-legales': {
      kicker: ui.headers.mentions.kicker,
      title: ui.headers.mentions.title,
      subtitle: `${ui.headers.mentions.subtitlePrefix} ${SITE_CONFIG.siteUrl} : ${SITE_CONFIG.legalEntityName}.`,
      sections: content.mentionsLegales,
      icon: FileText,
    },
    cgv: {
      kicker: ui.headers.cgv.kicker,
      title: ui.headers.cgv.title,
      subtitle: ui.headers.cgv.subtitle,
      sections: content.cgvArticles,
      icon: Scale,
    },
    confidentialite: {
      kicker: ui.headers.privacy.kicker,
      title: ui.headers.privacy.title,
      subtitle: `${ui.headers.privacy.subtitlePrefix} ${SITE_CONFIG.siteUrl}.`,
      sections: content.confidentialite,
      icon: ShieldCheck,
    },
  };

  const meta = metaByDoc[docType];
  const Icon = meta.icon;

  return (
    <section className="bg-white py-10 lg:py-16 print:py-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* 3-Tab Switcher Bar + Print Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
          <nav
            aria-label={ui.tabsAria}
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200"
          >
            {legalTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = tab.id === docType;
              return (
                <Link
                  key={tab.id}
                  to={tab.route}
                  aria-current={isActive ? 'page' : undefined}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-[#1E293B] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#1E293B] hover:bg-white'
                  }`}
                >
                  <TabIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{tab.label}</span>
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-300 hover:border-[#1E293B] bg-white text-xs sm:text-sm font-semibold text-[#1E293B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Printer className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{ui.printBtn}</span>
          </button>
        </div>

        {/* Document Header */}
        <header className="space-y-3 border-b border-slate-200 pb-7">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#047857]">
            <Icon className="w-4 h-4 text-[#10B981]" aria-hidden="true" />
            <span>{meta.kicker}</span>
          </p>
          <h1 className="text-[clamp(1.85rem,3.4vw,2.75rem)] font-extrabold tracking-tight text-[#1E293B] leading-[1.12]">
            {meta.title}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">{meta.subtitle}</p>
          <p className="text-xs text-slate-500">{ui.lastUpdated}</p>
        </header>

        {/* Quick Legal Identity Box */}
        <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-slate-500">{ui.publisherLabel}</p>
            <p className="font-bold text-[#1E293B]">{SITE_CONFIG.legalEntityName}</p>
            <p className="text-xs text-slate-600">{SITE_CONFIG.legalSiret}</p>
          </div>
          <div className="space-y-1.5">
            <p className="flex items-start gap-2 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{SITE_CONFIG.legalAddress}</span>
            </p>
            <p className="flex items-center gap-2 text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
              <a
                href={`tel:${SITE_CONFIG.contactPhoneE164}`}
                className="font-semibold text-[#1E293B] hover:text-[#2563EB] tabular-nums"
              >
                {SITE_CONFIG.contactPhoneDisplay}
              </a>
            </p>
            <p className="flex items-center gap-2 text-xs sm:text-sm">
              <Mail className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="font-semibold text-[#2563EB] hover:underline"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </p>
          </div>
        </div>

        {/* Articles / Sections */}
        <div className="space-y-8">
          {meta.sections.map((section) => (
            <article key={section.id} id={section.id} className="space-y-3 break-inside-avoid">
              <h2 className="text-lg sm:text-xl font-extrabold text-[#1E293B]">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm sm:text-base text-slate-700 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-2 pl-5 list-disc text-sm sm:text-base text-slate-700 leading-relaxed">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {section.includePortalAction && (
                <div className="pt-2 space-y-2.5 print:hidden">
                  <p className="text-xs sm:text-sm text-slate-600">{portalAction.notice}</p>
                  <a
                    href={portalAction.href}
                    {...portalExternalProps}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#1E293B] bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-[#1E293B] transition-colors"
                  >
                    {portalAction.isExternalPortal ? (
                      <>
                        <ExternalLink className="w-4 h-4 text-[#2563EB] shrink-0" aria-hidden="true" />
                        <span>{ui.portalExternalLabel}</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 text-[#2563EB] shrink-0" aria-hidden="true" />
                        <span>
                          {ui.portalBtnPrefix} ({portalAction.email})
                        </span>
                      </>
                    )}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom quick actions */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-sm print:hidden">
          <Link to="/contact" className="font-semibold text-[#1E293B] hover:text-[#2563EB]">
            {ui.contactLink}
          </Link>
          <Link to="/tarifs" className="font-semibold text-[#2563EB] hover:text-[#1D4ED8]">
            {ui.pricingLink}
          </Link>
        </div>
      </div>
    </section>
  );
}
