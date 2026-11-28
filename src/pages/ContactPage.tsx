import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Plus,
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
  const quickActivities = activities.slice(0, 6);

  const initialSubjectIndex = useMemo(() => getInitialSubjectIndex(search), [search]);
  const defaultSubject = subjects[initialSubjectIndex] ?? subjects[0];

  const [formState, setFormState] = useState<ProspectFormInput>(() => ({
    ...EMPTY_PROSPECT_FORM,
    sujet: defaultSubject,
  }));

  const [showOptionalPreSubmit, setShowOptionalPreSubmit] = useState(false);
  const [step, setStep] = useState<'step1' | 'step2' | 'done'>('step1');
  const [submittedStep1Data, setSubmittedStep1Data] = useState<ProspectFormInput | null>(null);
  const [errors, setErrors] = useState<ProspectValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEnriching, setIsEnriching] = useState(false);
  const [step2Saved, setStep2Saved] = useState(false);
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

  const handleStep1Submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFallbackResult(null);

    const validation = validateProspectForm(formState, language);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const snapshot = { ...formState };
      const result = await submitProspectLead(snapshot, { lang: language });
      setSubmittedStep1Data(snapshot);
      if (result.status === 'sent') {
        setFallbackResult(null);
        // If user already expanded and filled details before submitting, go straight to done
        const alreadyEnriched = Boolean(
          showOptionalPreSubmit && (snapshot.metier || snapshot.email || snapshot.message)
        );
        setStep(alreadyEnriched ? 'done' : 'step2');
        setStep2Saved(alreadyEnriched);
      } else {
        setFallbackResult(result);
        setStep('step2');
        setStep2Saved(false);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStep2EnrichSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const baseData = submittedStep1Data ?? formState;
    const enriched: ProspectFormInput = {
      ...baseData,
      metier: formState.metier,
      email: formState.email,
      sujet: formState.sujet,
      message: formState.message,
      nom: formState.nom,
    };

    const validation = validateProspectForm(enriched, language);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setIsEnriching(true);

    try {
      const result = await submitProspectLead(enriched, { lang: language });
      if (result.status === 'sent') {
        setFallbackResult(null);
        setStep2Saved(true);
        setStep('done');
      } else {
        setFallbackResult(result);
        setStep2Saved(true);
        setStep('done');
      }
    } finally {
      setIsEnriching(false);
    }
  };

  const handleResetForm = () => {
    setFormState({ ...EMPTY_PROSPECT_FORM, sujet: defaultSubject });
    setSubmittedStep1Data(null);
    setShowOptionalPreSubmit(false);
    setErrors({});
    setFallbackResult(null);
    setStep2Saved(false);
    setStep('step1');
  };

  const renderOptionalFields = (idPrefix: string) => (
    <div className="space-y-5">
      {/* Secteur d'activité (6 boutons tactiles rapides) */}
      <div className="space-y-2">
        <span className="block text-sm font-semibold text-[#1E293B]">{copy.labels.metier}</span>
        <div
          role="group"
          aria-label={copy.labels.metier}
          className="grid grid-cols-2 sm:grid-cols-3 gap-2"
        >
          {quickActivities.map((activity) => {
            const isSelected = formState.metier === activity;
            return (
              <button
                key={activity}
                type="button"
                aria-pressed={isSelected}
                onClick={() => handleFieldChange('metier', isSelected ? '' : activity)}
                className={`px-3 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold text-left transition-colors cursor-pointer ${
                  isSelected
                    ? 'border-[#2563EB] bg-blue-50 text-[#1D4ED8] ring-1 ring-[#2563EB]'
                    : 'border-slate-200 bg-white text-[#1E293B] hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {activity}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email professionnel (optionnel) */}
        <div className="space-y-1.5">
          <label
            htmlFor={`${idPrefix}-email`}
            className="block text-sm font-semibold text-[#1E293B]"
          >
            {copy.labels.email}
          </label>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder={copy.labels.emailPlaceholder}
            value={formState.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${idPrefix}-error-email` : undefined}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-base sm:text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
              errors.email ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          {errors.email && (
            <p
              id={`${idPrefix}-error-email`}
              role="alert"
              className="text-xs font-medium text-red-600"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Besoin prioritaire */}
        <div className="space-y-1.5">
          <label
            htmlFor={`${idPrefix}-sujet`}
            className="block text-sm font-semibold text-[#1E293B]"
          >
            {copy.labels.sujet}
          </label>
          <select
            id={`${idPrefix}-sujet`}
            name="sujet"
            value={formState.sujet}
            onChange={(e) => handleFieldChange('sujet', e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base sm:text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Note rapide optionnelle */}
      <div className="space-y-1.5">
        <label
          htmlFor={`${idPrefix}-message`}
          className="block text-sm font-semibold text-[#1E293B]"
        >
          {copy.labels.message}
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={2}
          placeholder={copy.labels.messagePlaceholder}
          value={formState.message}
          onChange={(e) => handleFieldChange('message', e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base sm:text-sm text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-y"
        />
      </div>
    </div>
  );

  return (
    <section className="bg-white py-10 sm:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* COLONNE GAUCHE : CONTACT DIRECT SUISSE (order-2 mobile so express form appears first on phone) */}
          <aside className="lg:col-span-5 space-y-7 order-2 lg:order-1">
            <div className="space-y-3.5">
              <p className="text-sm font-semibold text-[#047857]">{copy.kicker}</p>
              <h1 className="text-[clamp(1.85rem,3.3vw,2.85rem)] font-extrabold tracking-tight text-[#1E293B] leading-[1.12] text-balance">
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

            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white hidden sm:block">
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

          {/* COLONNE DROITE : FORMULAIRE EXPRESS MOBILE EN 2 ÉTAPES (order-1 mobile for instant conversion) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {step === 'step1' && (
              <form
                onSubmit={handleStep1Submit}
                noValidate
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 sm:p-8 space-y-6 shadow-[0_18px_40px_-28px_rgba(30,41,59,0.2)]"
              >
                <div className="space-y-2 border-b border-slate-200/80 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-bold text-[#047857] whitespace-nowrap">
                      {copy.step1Badge}
                    </span>
                    <span className="text-xs font-medium text-slate-500 whitespace-nowrap">
                      {language === 'de'
                        ? 'Nur 3 Pflichtfelder'
                        : language === 'en'
                          ? '3 essential fields'
                          : '3 champs essentiels'}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">
                    {copy.formTitle}
                  </h2>
                  <p className="text-sm text-slate-600">{copy.formSubtitle}</p>
                </div>

                {/* ÉTAPE 1 : UNIQUEMENT 3 CHAMPS ESSENTIELS (grandes zones tactiles mobile) */}
                <div className="space-y-4">
                  {/* 1. Nom de votre commerce / enseigne */}
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
                      className={`w-full rounded-xl border bg-white px-4 py-3.5 text-base text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
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

                  {/* 2 & 3 : NPA ou Ville + Téléphone portable */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className={`w-full rounded-xl border bg-white px-4 py-3.5 text-base text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
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
                        className={`w-full rounded-xl border bg-white px-4 py-3.5 text-base text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB] ${
                          errors.tel ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.tel && (
                        <p id="error-tel" role="alert" className="text-xs font-medium text-red-600">
                          {errors.tel}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* TOGGLE 1 CLIC POUR PRÉCISIONS OPTIONNELLES (ÉTAPE 2 DÉPLIABLE) */}
                <div className="rounded-xl border border-slate-200 bg-white/80 p-3.5 sm:p-4 space-y-4">
                  <button
                    type="button"
                    aria-expanded={showOptionalPreSubmit}
                    onClick={() => setShowOptionalPreSubmit((prev) => !prev)}
                    className="w-full flex items-center justify-between gap-2 text-left text-xs sm:text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Plus className="w-4 h-4 shrink-0" aria-hidden="true" />
                      {showOptionalPreSubmit ? copy.step2ToggleCollapse : copy.step2ToggleExpand}
                    </span>
                    {showOptionalPreSubmit ? (
                      <ChevronUp className="w-4 h-4 shrink-0" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-4 h-4 shrink-0" aria-hidden="true" />
                    )}
                  </button>

                  {showOptionalPreSubmit && (
                    <div className="pt-2 border-t border-slate-200/80">
                      {renderOptionalFields('opt')}
                    </div>
                  )}
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
                      className="mt-1 h-5 w-5 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB] shrink-0 cursor-pointer"
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
                      className="text-xs font-medium text-red-600 pl-8"
                    >
                      {errors.rgpdConsent}
                    </p>
                  )}
                </div>

                <div className="space-y-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-70 text-white text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB] cursor-pointer shadow-sm"
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
            )}

            {/* ÉTAPE 2 (OPTIONNELLE, AFFICHÉE JUSTE APRÈS L'ENVOI RAPIDE DE L'ÉTAPE 1) */}
            {step === 'step2' && (
              <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 sm:p-8 space-y-6 shadow-[0_18px_40px_-28px_rgba(30,41,59,0.2)]">
                {/* Confirmation de l'étape 1 ou fallback gracieux */}
                {!fallbackResult ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="space-y-1">
                      <p className="text-sm sm:text-base font-bold text-[#065F46]">
                        {copy.step1DoneTitle}
                      </p>
                      <p className="text-xs sm:text-sm text-[#065F46]/90 leading-relaxed">
                        {copy.step1DoneBody}
                      </p>
                    </div>
                  </div>
                ) : (
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
                    </div>
                  </div>
                )}

                <form onSubmit={handleStep2EnrichSubmit} noValidate className="space-y-5">
                  <div className="space-y-1.5 border-b border-slate-200/80 pb-4">
                    <span className="inline-flex items-center rounded-lg bg-blue-50 border border-blue-200 px-2.5 py-1 text-xs font-bold text-[#2563EB]">
                      {copy.step2Badge}
                    </span>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#1E293B]">
                      {copy.step2Title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600">{copy.step2Subtitle}</p>
                  </div>

                  {renderOptionalFields('step2')}

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={isEnriching}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#1E293B] hover:bg-slate-800 disabled:opacity-70 text-white text-sm sm:text-base font-bold transition-colors cursor-pointer"
                    >
                      {isEnriching ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                          {copy.step2SubmitLoading}
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-[#10B981]" aria-hidden="true" />
                          {copy.step2SubmitIdle}
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep('done')}
                      className="py-3.5 px-5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors cursor-pointer"
                    >
                      {copy.step2SkipBtn}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ÉTAT FINAL CONFIRMÉ */}
            {step === 'done' && (
              <div
                role="status"
                aria-live="polite"
                className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8 space-y-5"
              >
                <div className="flex items-start gap-3.5">
                  <span className="w-11 h-11 rounded-xl bg-[#10B981] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <div className="space-y-1.5">
                    <h2 className="text-xl font-extrabold text-[#1E293B]">
                      {copy.step1DoneTitle}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {step2Saved ? copy.step2SavedMessage : copy.successMessage}
                    </p>
                  </div>
                </div>

                {fallbackResult && (
                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
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
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-sm font-semibold text-[#1E293B] transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" aria-hidden="true" />
                    {copy.newRequestBtn}
                  </button>
                  <Link
                    to="/tarifs"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors"
                  >
                    {TRANSLATIONS[language].nav.pricing}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
