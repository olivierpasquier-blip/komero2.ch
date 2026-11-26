import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { ASSETS } from '../data/komeroContent';
import { SITE_CONFIG, type Language } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import {
  EMPTY_PROSPECT_FORM,
  getBusinessActivities,
  getContactSubjects,
  submitProspectLead,
  validateProspectForm,
  type ProspectFormInput,
  type ProspectSubmissionResult,
  type ProspectValidationErrors,
} from '../lib/prospect';
import { ResilientImage } from '../components/DeviceFrames';
import { Link, useRouter } from '../components/Router';

function getInitialSubjectIndex(search: string): number {
  const params = new URLSearchParams(search);
  const motif = params.get('motif');
  if (motif === 'diagnostic' || motif === 'audit') return 1;
  if (motif === 'essentiel') return 2;
  if (motif === 'premium') return 3;
  if (motif === 'roue') return 4;
  return 0;
}

function findMatchingIndex(
  currentValue: string,
  getter: (lang: Language) => readonly string[]
): number {
  const langs: Language[] = ['fr', 'de', 'en'];
  for (const lang of langs) {
    const idx = getter(lang).indexOf(currentValue);
    if (idx !== -1) return idx;
  }
  return -1;
}

export function ContactPage() {
  const { search } = useRouter();
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language].contact;
  const activities = getBusinessActivities(language);
  const subjects = getContactSubjects(language);

  const initialSubjectIndex = useMemo(() => getInitialSubjectIndex(search), [search]);
  const defaultSubject = subjects[initialSubjectIndex] ?? subjects[0];

  const [formState, setFormState] = useState<ProspectFormInput>(() => ({
    ...EMPTY_PROSPECT_FORM,
    sujet: defaultSubject,
  }));

  const [errors, setErrors] = useState<ProspectValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [fallbackResult, setFallbackResult] = useState<ProspectSubmissionResult | null>(null);

  useEffect(() => {
    setFormState((prev) => {
      const nextSubjects = getContactSubjects(language);
      const nextActivities = getBusinessActivities(language);
      const subjectIdx = findMatchingIndex(prev.sujet, getContactSubjects);
      const activityIdx = findMatchingIndex(prev.metier, getBusinessActivities);
      return {
        ...prev,
        sujet:
          subjectIdx !== -1
            ? nextSubjects[subjectIdx] ?? nextSubjects[0]
            : nextSubjects[initialSubjectIndex] ?? nextSubjects[0],
        metier:
          activityIdx !== -1 ? nextActivities[activityIdx] ?? prev.metier : prev.metier,
      };
    });
    setErrors({});
  }, [language, initialSubjectIndex]);

  const handleFieldChange = <K extends keyof ProspectFormInput>(
    field: K,
    value: ProspectFormInput[K]
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof ProspectValidationErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (fallbackResult) {
      setFallbackResult(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitSuccess(false);
    setFallbackResult(null);

    const validation = validateProspectForm(formState, language);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const result = await submitProspectLead(formState, { lang: language });
      if (result.status === 'sent') {
        setSubmitSuccess(true);
        setFormState({ ...EMPTY_PROSPECT_FORM, sujet: defaultSubject });
      } else {
        setFallbackResult(result);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* COLONNE GAUCHE : CONTACT DIRECT SUISSE */}
          <aside className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-[#047857]">{copy.kicker}</p>
              <h1 className="text-[clamp(1.95rem,3.3vw,2.85rem)] font-extrabold tracking-tight text-[#1E293B] leading-[1.12] text-balance">
                {copy.h1}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">{copy.subtitle}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 space-y-4">
              <h2 className="text-base font-bold text-[#1E293B]">{copy.directHeading}</h2>

              <div className="space-y-3">
                <a
                  href={`tel:${SITE_CONFIG.contactPhoneE164}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#2563EB] transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-slate-500">{copy.phoneLabel}</p>
                    <p className="text-base font-bold text-[#1E293B] tabular-nums">
                      {SITE_CONFIG.contactPhoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-[#2563EB] transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-emerald-50 text-[#047857] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-slate-500">{copy.emailLabel}</p>
                    <p className="text-base font-bold text-[#1E293B]">{SITE_CONFIG.contactEmail}</p>
                  </div>
                </a>
              </div>

              <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-slate-600">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{copy.locationText}</span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{copy.hoursText}</span>
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <ResilientImage
                src={ASSETS.pressingCounter}
                alt={copy.fieldImageAlt}
                loading="lazy"
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="px-5 py-3.5 bg-[#F8FAFC] border-t border-slate-200 text-xs text-slate-600">
                {copy.fieldCaption}
              </div>
            </div>
          </aside>

          {/* COLONNE DROITE : FORMULAIRE DE QUALIFICATION CRM */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 space-y-6"
            >
              <div className="space-y-1 border-b border-slate-200/80 pb-4">
                <h2 className="text-xl font-extrabold text-[#1E293B]">{copy.formTitle}</h2>
                <p className="text-sm text-slate-600">{copy.formSubtitle}</p>
              </div>

              {submitSuccess && (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 flex items-start gap-3"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p className="text-sm sm:text-base font-semibold text-[#065F46]">
                    {copy.successMessage}
                  </p>
                </div>
              )}

              {fallbackResult && (
                <div
                  role="alert"
                  className="rounded-xl border border-amber-300 bg-amber-50/90 p-5 space-y-4"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle
                      className="w-5 h-5 text-amber-700 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#1E293B]">{copy.fallbackTitle}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {copy.fallbackBody}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 pl-8">
                    <a
                      href={fallbackResult.mailtoUrl}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold transition-colors"
                    >
                      <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                      {copy.fallbackEmailBtn} ({SITE_CONFIG.contactEmail})
                    </a>

                    <a
                      href={`tel:${SITE_CONFIG.contactPhoneE164}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#1E293B] bg-white hover:bg-slate-50 text-[#1E293B] text-xs sm:text-sm font-semibold transition-colors tabular-nums"
                    >
                      <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                      {copy.fallbackCallBtn} {SITE_CONFIG.contactPhoneDisplay}
                    </a>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#1E293B] hover:bg-white/80 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                      {copy.fallbackRetryBtn}
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Nom du commerce */}
                <div className="space-y-1.5">
                  <label htmlFor="commerce" className="block text-sm font-semibold text-[#1E293B]">
                    {copy.labels.commerce} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="commerce"
                    name="commerce"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder={copy.labels.commercePlaceholder}
                    value={formState.commerce}
                    onChange={(e) => handleFieldChange('commerce', e.target.value)}
                    aria-invalid={Boolean(errors.commerce)}
                    aria-describedby={errors.commerce ? 'error-commerce' : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                      errors.commerce ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.commerce && (
                    <p
                      id="error-commerce"
                      role="alert"
                      className="text-xs font-medium text-red-600"
                    >
                      {errors.commerce}
                    </p>
                  )}
                </div>

                {/* 2. Secteur d'activité */}
                <div className="space-y-1.5">
                  <label htmlFor="metier" className="block text-sm font-semibold text-[#1E293B]">
                    {copy.labels.metier} <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="metier"
                    name="metier"
                    required
                    value={formState.metier}
                    onChange={(e) => handleFieldChange('metier', e.target.value)}
                    aria-invalid={Boolean(errors.metier)}
                    aria-describedby={errors.metier ? 'error-metier' : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                      errors.metier ? 'border-red-500' : 'border-slate-300'
                    }`}
                  >
                    <option value="">{copy.labels.metierPlaceholder}</option>
                    {activities.map((activity) => (
                      <option key={activity} value={activity}>
                        {activity}
                      </option>
                    ))}
                  </select>
                  {errors.metier && (
                    <p id="error-metier" role="alert" className="text-xs font-medium text-red-600">
                      {errors.metier}
                    </p>
                  )}
                </div>

                {/* 3. NPA / Ville | PLZ / Ort | Postal Code / City */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="code_postal"
                    className="block text-sm font-semibold text-[#1E293B]"
                  >
                    {copy.labels.postal} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="code_postal"
                    name="code_postal"
                    type="text"
                    required
                    autoComplete="postal-code"
                    placeholder={copy.labels.postalPlaceholder}
                    value={formState.code_postal}
                    onChange={(e) => handleFieldChange('code_postal', e.target.value)}
                    aria-invalid={Boolean(errors.code_postal)}
                    aria-describedby={errors.code_postal ? 'error-code_postal' : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                      errors.code_postal ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.code_postal && (
                    <p
                      id="error-code_postal"
                      role="alert"
                      className="text-xs font-medium text-red-600"
                    >
                      {errors.code_postal}
                    </p>
                  )}
                </div>

                {/* 4. Prénom & Nom */}
                <div className="space-y-1.5">
                  <label htmlFor="nom" className="block text-sm font-semibold text-[#1E293B]">
                    {copy.labels.nom}
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    autoComplete="name"
                    placeholder={copy.labels.nomPlaceholder}
                    value={formState.nom}
                    onChange={(e) => handleFieldChange('nom', e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>

                {/* 5. Téléphone portable */}
                <div className="space-y-1.5">
                  <label htmlFor="tel" className="block text-sm font-semibold text-[#1E293B]">
                    {copy.labels.tel} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="tel"
                    name="tel"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={copy.labels.telPlaceholder}
                    value={formState.tel}
                    onChange={(e) => handleFieldChange('tel', e.target.value)}
                    aria-invalid={Boolean(errors.tel)}
                    aria-describedby={errors.tel ? 'error-tel' : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                      errors.tel ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.tel && (
                    <p id="error-tel" role="alert" className="text-xs font-medium text-red-600">
                      {errors.tel}
                    </p>
                  )}
                </div>

                {/* 6. Email professionnel */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1E293B]">
                    {copy.labels.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={copy.labels.emailPlaceholder}
                    value={formState.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && (
                    <p id="error-email" role="alert" className="text-xs font-medium text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* 7. Besoins / Formule */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="sujet" className="block text-sm font-semibold text-[#1E293B]">
                    {copy.labels.sujet} <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    required
                    value={formState.sujet}
                    onChange={(e) => handleFieldChange('sujet', e.target.value)}
                    aria-invalid={Boolean(errors.sujet)}
                    aria-describedby={errors.sujet ? 'error-sujet' : undefined}
                    className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                      errors.sujet ? 'border-red-500' : 'border-slate-300'
                    }`}
                  >
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {errors.sujet && (
                    <p id="error-sujet" role="alert" className="text-xs font-medium text-red-600">
                      {errors.sujet}
                    </p>
                  )}
                </div>

                {/* 8. Message libre */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1E293B]">
                    {copy.labels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder={copy.labels.messagePlaceholder}
                    value={formState.message}
                    onChange={(e) => handleFieldChange('message', e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-y"
                  />
                </div>
              </div>

              {/* Case consentement nLPD / revDSG / FADP & RGPD */}
              <div className="space-y-1.5">
                <label
                  htmlFor="rgpdConsent"
                  className="flex items-start gap-3 cursor-pointer select-none"
                >
                  <input
                    id="rgpdConsent"
                    name="rgpdConsent"
                    type="checkbox"
                    checked={formState.rgpdConsent}
                    onChange={(e) => handleFieldChange('rgpdConsent', e.target.checked)}
                    aria-invalid={Boolean(errors.rgpdConsent)}
                    aria-describedby={errors.rgpdConsent ? 'error-rgpdConsent' : undefined}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB] shrink-0 cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {copy.consentPrefix}
                    <Link
                      to="/confidentialite"
                      className="text-[#2563EB] underline underline-offset-2 hover:text-[#1D4ED8]"
                    >
                      {copy.consentPrivacyLink}
                    </Link>
                    {copy.consentSuffix} <span className="text-red-600">*</span>
                  </span>
                </label>
                {errors.rgpdConsent && (
                  <p
                    id="error-rgpdConsent"
                    role="alert"
                    className="text-xs font-medium text-red-600 pl-7"
                  >
                    {errors.rgpdConsent}
                  </p>
                )}
              </div>

              <div className="space-y-3 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#1E293B] hover:bg-slate-800 disabled:opacity-70 text-white text-sm sm:text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E293B] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      {copy.submitLoading}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      {copy.submitIdle}
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                  {copy.bottomReassurance}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
