'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function GoogleAnalytics({ gaId }) {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    let pollingInterval;
    let timeout;

    const checkConsent = () => {
      const cookie = document.cookie.match(/cookieConsent=([^;]+)/);
      if (cookie) {
        try {
          const parsed = JSON.parse(decodeURIComponent(cookie[1]));
          setConsent((prev) => {
            const changed = JSON.stringify(prev) !== JSON.stringify(parsed);
            if (changed) {
              console.log('[GA] Consent changed, updating...');
            }
            return parsed;
          });
        } catch (err) {
          console.warn('[GA] Failed to parse cookieConsent during polling:', err);
        }
      } else {
        console.log('[GA] No cookieConsent found during polling');
      }
    };

    pollingInterval = setInterval(checkConsent, 2000); // every 2s
    timeout = setTimeout(() => {
      clearInterval(pollingInterval);
      console.log('[GA] Stopped polling after 10 seconds');
    }, 10000); // stop after 10s

    return () => {
      clearInterval(pollingInterval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
  if (typeof window === 'undefined') return;

  const channel = new BroadcastChannel('cookie-consent');
  channel.onmessage = (event) => {
    if (event.data?.type === 'consent-updated') {
      console.log('[GA] Received consent update broadcast');
      const cookie = document.cookie.match(/cookieConsent=([^;]+)/);
      if (cookie) {
        try {
          const parsed = JSON.parse(decodeURIComponent(cookie[1]));
          setConsent(parsed);
        } catch (err) {
          console.warn('[GA] Failed to re-parse cookieConsent after update:', err);
        }
      }
    }
  };

  return () => channel.close();
}, []);

  if (!consent?.analytics) {
    console.log('[GA] Consent not granted for analytics — skipping GA script');
    return null;
  }

  console.log('[GA] Consent granted — injecting GA script with ID:', gaId);

  return (
    <>
      <Script
        id="ga-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        onLoad={() => console.log('[GA] GA script loaded')}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            console.log('[GA] Initializing gtag...');
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}