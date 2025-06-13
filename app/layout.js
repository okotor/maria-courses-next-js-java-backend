import "@/styles/globals.css";
import MainHeader from "@/components/MainHeader/MainHeader";
import MainFooter from "@/components/MainFooter/MainFooter";
import { AuthProvider } from "@/context/AuthContext";
import { LoadingProvider } from "@/context/LoadingContext";
import CookieConsentModal, { openCookieModal } from "@/components/Cookies/CookieConsentModal";
import GlobalSpinner from '@/components/Loading/GlobalSpinner';
import RouteChangeListener from "@/components/Loading/RouteChangeListener";
import GoogleAnalyticsWrapper from '@/components/Cookies/GoogleAnalyticsWrapper';

export const metadata = {
  title: 'Kurzy Marie',
  description: 'Přihlašte se a prozkoumejte kurzy Marie',
};

// export const user = {
//   username: '',
//   email: '',
//   password: '',
//   registered: false,
//   loggedIn: false,
// };



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Nothing yet */}
      </head>
      <body>
        <LoadingProvider>
          <AuthProvider>
            <RouteChangeListener />
            <GlobalSpinner />
              <MainHeader />
                <main>
                  {children}
                </main>
              <MainFooter />
              <GoogleAnalyticsWrapper gaId={process.env.NEXT_PUBLIC_GA_ID} />
              <CookieConsentModal />
          </AuthProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
