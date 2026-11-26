import { Clock, ShieldCheck, Zap } from 'lucide-react';
import { ASSETS } from '../data/komeroContent';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import { ResilientImage } from '../components/DeviceFrames';
import { FeaturePageTemplate } from '../components/FeaturePageTemplate';
import { SmsFlashHeroVisual } from '../components/mockups/FeatureHeroMockups';
import { SmsFlashMockup } from '../components/mockups/SmsFlashMockup';

const BULLET_ICONS = [Zap, Clock, ShieldCheck] as const;

export function SmsFlashPage() {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language].featurePages['/campagnes-sms-flash'];

  return (
    <FeaturePageTemplate
      currentPath="/campagnes-sms-flash"
      moduleNumber={copy.moduleNumber}
      tierLabel={copy.tierLabel}
      tierNote={copy.tierNote}
      headline={copy.headline}
      subtitle={copy.subtitle}
      problemTitle={copy.problemTitle}
      problemPoints={copy.problemPoints}
      solutionTitle={copy.solutionTitle}
      solutionPoints={copy.solutionPoints}
      heroVisual={<SmsFlashHeroVisual />}
      mockup={<SmsFlashMockup />}
    >
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-sm font-semibold text-[#047857]">{copy.fieldKicker}</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B]">
                {copy.fieldTitle}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">{copy.fieldText}</p>
              <ul className="space-y-3 text-sm sm:text-base text-[#1E293B]">
                {copy.fieldBullets.map((bullet, idx) => {
                  const Icon = BULLET_ICONS[idx] ?? ShieldCheck;
                  return (
                    <li key={bullet} className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <ResilientImage
                  src={ASSETS.wineShop}
                  alt={copy.fieldImageAlt}
                  loading="lazy"
                  className="w-full h-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-14 pt-12 border-t border-slate-200/80 space-y-6">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold text-[#2563EB]">{copy.editorialKicker}</p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">
                {copy.editorialTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {copy.editorialCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 space-y-2"
                >
                  <h3 className="text-base font-bold text-[#1E293B]">{card.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </FeaturePageTemplate>
  );
}
