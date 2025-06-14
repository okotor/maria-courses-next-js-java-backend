'use client';

import { useEffect, useState, useRef } from 'react';
import { Switch } from '@headlessui/react';
import { useAuth } from '@/context/AuthContext';
import styles from './CookieConsentModal.module.css';

let globalSetOpen = () => {};
export function openCookieModal() {
  console.log('Triggering openCookieModal...');
  globalSetOpen(true);
}

export default function CookieConsentModal() {
  const [open, setOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [cookies, setCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  const [tempCookies, setTempCookies] = useState({ ...cookies });
  const [draftCookies, setDraftCookies] = useState(null);

  const modalRef = useRef();

  const { logout, authenticated } = useAuth();

  useEffect(() => {
    globalSetOpen = (val) => {
      console.log('Global setOpen called with:', val);
      setIsFirstVisit(false);
      setPreferencesOpen(false);
      setOpen(val);
      setTempCookies(draftCookies || cookies); 
    };

    try {
      const stored = localStorage.getItem('cookiePrefs');
      const cookieSet = document.cookie.includes("cookieConsent=");
      console.log('Cookie prefs from localStorage:', stored);
      if (!stored && !cookieSet) {
        setOpen(true);
        setIsFirstVisit(true)
      } else if (stored) {
        const parsed = JSON.parse(stored);
        setCookies(parsed);
        setTempCookies(parsed); // ✅ Store in savedCookies
      }
    } catch (err) {
      console.error('Error reading cookiePrefs:', err);
      setOpen(true);
      setIsFirstVisit(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!isFirstVisit && modalRef.current && !modalRef.current.contains(event.target)) {
        setOpen(false);
        setPreferencesOpen(false); // ✅ Reset screen
        setTempCookies(cookies); // ✅ Reset to last saved
        setDraftCookies(null);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, isFirstVisit, cookies]);

  const commitPreferences = () => {
    const toCommit = draftCookies || tempCookies;
    setCookies(toCommit); // ✅ Save edits to primary state
    const value = JSON.stringify(toCommit);
    try {
      localStorage.setItem('cookiePrefs', value);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    document.cookie = `cookieConsent=${encodeURIComponent(value)}; path=/; max-age=31536000`;
    // 🔧 IMMEDIATE effect: if functional cookies are being revoked while logged in, log out and clear auth cookies instantly
    if (cookies.functional && !toCommit.functional && authenticated) { // only if previously allowed and now denied
      if (typeof logout === "function") logout(); // 🔧 call your logout, which should also clear backend cookies
      // 🔧 Extra client-side clearing for instant compliance
      document.cookie = "jwtToken=; Path=/; Max-Age=0; SameSite=None; Secure";
      document.cookie = "refreshToken=; Path=/; Max-Age=0; SameSite=None; Secure";
    }
    setOpen(false);
    setPreferencesOpen(false);
    setDraftCookies(null);
    if (typeof window !== 'undefined') {
      const consentChangeChannel = new BroadcastChannel('cookie-consent');
      consentChangeChannel.postMessage({ type: 'consent-updated', consent: toCommit });
      consentChangeChannel.close();
    }
  };

  const handleSavePreferences = () => {
    setDraftCookies({ ...tempCookies });
    setPreferencesOpen(false);
    // 🟡 tempCookies remain unchanged, so reopening preferences will show unsaved edits
  };

  const handleCancelPreferences = () => {
    setTempCookies(draftCookies || cookies); // 🔄 Revert unsaved
    setPreferencesOpen(false);
  };

  if (!open) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent} ref={modalRef}>
        {!preferencesOpen ? (
          <>
            <h2 className={styles.title}>Tato stránka používá cookies 🍪</h2>
            <p className={styles.description}>
              Používáme cookies pro zajištění správného fungování stránky a také analytiku a marketing. Použváme také cookies, které si pamatují vaši
              volbu, abychom vás nemuseli opětovně obírat o čas při každé návštěvě stránky. Změna povolení cookies je samozřejmě možná kdykoliv tlačítkem na konci stránky. Zde si můžete vybrat,
              které typy cookies chcete povolit.
            </p>
            <div className={styles.buttonGroup}>
              <button 
                onClick={() => {
                  setPreferencesOpen(true);
                  setTempCookies(draftCookies || cookies);
                }} 
                className={styles.buttonDefault}
              >
                Upravit preference
              </button>
              <button
                onClick={commitPreferences}
                className={styles.buttonPrimary}
              >
                {(draftCookies || tempCookies).analytics &&
                (draftCookies || tempCookies).marketing &&
                (draftCookies || tempCookies).functional
                  ? 'Povolit vše'
                  : 'Povolit vybrané'}
              </button>

              {
                // Add Povolit vše button ONLY if the dynamic button won't say Povolit vše
                !(
                  (draftCookies || tempCookies).analytics &&
                  (draftCookies || tempCookies).marketing &&
                  (draftCookies || tempCookies).functional
                ) && (
                  <button
                    onClick={() => {
                      setTempCookies({
                        necessary: true,
                        analytics: true,
                        marketing: true,
                        functional: true,
                      });
                      commitPreferences();
                    }}
                    className={styles.buttonPrimary}
                  >
                    Povolit vše
                  </button>
                )
              }
            </div>
          </>
        ) : (
          <>
            <h2 className={styles.title}>Nastavení cookies</h2>
            <p className={styles.description}>
              Vyberte, které typy cookies chcete povolit. Nezbytné cookies jsou vždy aktivní.
            </p>
            <div className={styles.preferenceList}>
              {['analytics', 'marketing', 'functional'].map((type) => (
                <div key={type} className={styles.preferenceItem}>
                  <div>
                    <p className={styles.preferenceTitle}>{type}</p>
                    <p className={styles.preferenceInfo}>
                      {type === 'analytics' && 'Pomáhají nám porozumět, jak se stránka používá.'}
                      {type === 'marketing' && 'Slouží k zobrazování relevantních reklam.'}
                      {type === 'functional' && 'Umožňují vylepšené funkce, jako je zapamatování přihlášení.'}
                    </p>
                  </div>
                  <Switch
                    checked={tempCookies[type]}
                    onChange={(val) => 
                      setTempCookies((prev) => ({ ...prev, [type]: Boolean(val) }))
                    }
                    className={`${tempCookies[type] ? styles.switchOn : styles.switchOff}`}
                  >
                    <span className={styles.switchThumb} />
                  </Switch>
                </div>
              ))}
            </div>
            <div className={styles.buttonGroup}>
              <button 
                onClick={handleCancelPreferences}
                className={styles.buttonLink}
              >
                Zpět
              </button>
              <button 
                onClick={handleSavePreferences}
                className={styles.buttonPrimary}
              >
                Uložit preference
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
