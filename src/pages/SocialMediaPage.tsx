import { Calendar, Camera, Share2 } from 'lucide-react';
import { getSeasonalCalendar } from '../data/komeroContent';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import { FeaturePageTemplate } from '../components/FeaturePageTemplate';
import { SocialMediaHeroVisual } from '../components/mockups/FeatureHeroMockups';
import { SocialMediaMockup } from '../components/mockups/SocialMediaMockup';

const STEP_ICONS = [Camera, Calendar, Share2] as const;

export function SocialMediaPage() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const copy = t.featurePages['/reseaux-sociaux'];
  const calendar = getSeasonalCalendar(language);

  return (
    <FeaturePageTemplate
      currentPath="/reseaux-sociaux"
      moduleNumber={copy.moduleNumber}
      tierLabel={copy.tierLabel}
      tierNote={copy.tierNote}
      headline={copy.headline}
      subtitle={copy.subtitle}
      problemTitle={copy.problemTitle}
      problemPoints={copy.problemPoints}
      solutionTitle={copy.solutionTitle}
      solutionPoints={copy.solutionPoints}
      heroVisual={<SocialMediaHeroVisual />}
      mockup={<SocialMediaMockup />}
    >
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {t.socialSteps.map((item, idx) => {
              const Icon = STEP_ICONS[idx] ?? Camera;
              const colorClass = idx === 1 ? 'text-[#047857]' : 'text-[#2563EB]';
              return (
                <article
                  key={item.step}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 space-y-2.5"
                >
                  <p className={`inline-flex items-center gap-2 text-xs font-bold ${colorClass}`}>
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    {item.step}
                  </p>
                  <h2 className="text-lg font-bold text-[#1E293B]">{item.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </article>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <p className="text-sm font-semibold text-[#047857]">{t.socialCalendarKicker}</p>
              <h2 className="text-2xl font-extrabold text-[#1E293B]">{t.socialCalendarH2}</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.socialCalendarBody}
              </p>
            </div>
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-[#F8FAFC] divide-y divide-slate-200/70 overflow-hidden">
              {calendar.map((item) => (
                <div
                  key={item.event}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white"
                >
                  <div>
                    <p className="text-xs font-bold text-[#2563EB]">{item.date}</p>
                    <h3 className="text-sm sm:text-base font-bold text-[#1E293B]">{item.event}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 sm:text-right max-w-md">
                    {item.angle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-slate-200/80 space-y-6">
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
