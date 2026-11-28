import { Layout } from './components/Layout';
import { PaymentSuccessModal } from './components/PaymentSuccessModal';
import { RouterProvider, useRouter } from './components/Router';
import { SeoHead } from './components/SeoHead';
import type { Language } from './config/siteConfig';
import { LanguageProvider } from './i18n/LanguageContext';
import type { RoutePath } from './lib/seo';
import { ContactPage } from './pages/ContactPage';
import { GoogleProfilePage } from './pages/GoogleProfilePage';
import { GoogleReviewsPage } from './pages/GoogleReviewsPage';
import { HomePage } from './pages/HomePage';
import { LegalPage } from './pages/LegalPage';
import { LuckyWheelPage } from './pages/LuckyWheelPage';
import { MarketWatchPage } from './pages/MarketWatchPage';
import { PricingPage } from './pages/PricingPage';
import { SmsFlashPage } from './pages/SmsFlashPage';
import { SmsResponderPage } from './pages/SmsResponderPage';
import { SocialMediaPage } from './pages/SocialMediaPage';

function KomeroRoutes() {
  const { path } = useRouter();

  const renderPage = () => {
    switch (path) {
      case '/gestion-fiche-google':
        return <GoogleProfilePage />;
      case '/avis-google-ia':
        return <GoogleReviewsPage />;
      case '/reseaux-sociaux':
        return <SocialMediaPage />;
      case '/repondeur-sms':
        return <SmsResponderPage />;
      case '/campagnes-sms-flash':
        return <SmsFlashPage />;
      case '/veille-concurrence':
        return <MarketWatchPage />;
      case '/roue-de-la-chance':
        return <LuckyWheelPage />;
      case '/tarifs':
        return <PricingPage />;
      case '/contact':
        return <ContactPage />;
      case '/informations-legales':
      case '/mentions-legales':
        return <LegalPage docType="mentions-legales" />;
      case '/cgv':
        return <LegalPage docType="cgv" />;
      case '/confidentialite':
        return <LegalPage docType="confidentialite" />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <SeoHead path={path} />
      <PaymentSuccessModal />
      <Layout>{renderPage()}</Layout>
    </>
  );
}

export interface AppProps {
  initialPath?: RoutePath;
  initialLanguage?: Language;
}

export default function App({ initialPath, initialLanguage }: AppProps) {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <RouterProvider initialPath={initialPath}>
        <KomeroRoutes />
      </RouterProvider>
    </LanguageProvider>
  );
}
