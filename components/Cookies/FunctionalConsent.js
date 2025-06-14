'use client';

import { useEffect, useState } from 'react';

export default function FunctionalConsent() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const match = document.cookie.match(/cookieConsent=([^;]+)/);
      if (!match) return;
      try {
        const parsed = JSON.parse(decodeURIComponent(match[1]));
        if (parsed.functional) {
          console.log('[Functional] Consent granted — enabling features');
          setEnabled(true);
        }
      } catch (err) {
        console.warn('[Functional] Failed to parse consent', err);
      }
    };

    checkConsent();

    const channel = new BroadcastChannel('cookie-consent');
    channel.onmessage = (event) => {
      if (event.data?.type === 'consent-updated') {
        checkConsent();
      }
    };

    return () => channel.close();
  }, []);

  if (!enabled) return null;

  return;
}
