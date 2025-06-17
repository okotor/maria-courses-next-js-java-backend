'use client';

import { useEffect, useState, useRef } from 'react';
import { Switch } from '@headlessui/react';
import { useAuth } from '@/context/AuthContext';
import { FaTimes } from 'react-icons/fa';
import styles from './CookieConsentModal.module.css';

let globalSetOpen = () => {};
export function openCookieModal() {
  globalSetOpen(true);
}

export default function CookieConsentModal() {
  const [open, setOpen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  // Holds last committed (persisted) cookies state for this session
  const [cookies, setCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });
  // Used only inside preferences panel (checkbox state)
  const [tempCookies, setTempCookies] = useState({ ...cookies });
  // Used to draft preference changes per modal open
  const [draftCookies, setDraftCookies] = useState(null);

  const modalRef = useRef();
  const { logout, authenticated } = useAuth();

  // Helper: are all cookies allowed (except necessary)?
  const allEnabled = ['analytics', 'marketing', 'functional'].every(type => cookies[type]);

  // On modal open, always load the latest from storage (best practice)
  useEffect(() => {
    if (open) {
      // Try to get latest from storage
      let committedPrefs = cookies; // fallback to in-memory state
      try {
        const stored = localStorage.getItem('cookiePrefs');
        if (stored) {
          committedPrefs = JSON.parse(stored);
        }
      } catch {}
      setCookies(committedPrefs);
      setTempCookies(committedPrefs);
      setDraftCookies(null);
    }
  }, [open]);

  useEffect(() => {
    globalSetOpen = (val) => {
      setIsFirstVisit(false);
      setPreferencesOpen(false);
      setOpen(val);
      // tempCookies and draftCookies will be set by above effect
    };

    // On mount: check if consent was given before
    try {
      const stored = localStorage.getItem('cookiePrefs');
      const cookieSet = document.cookie.includes("cookieConsent=");
      if (!stored && !cookieSet) {
        setOpen(true);
        setIsFirstVisit(true);
      } else if (stored) {
        const parsed = JSON.parse(stored);
        setCookies(parsed);
        setTempCookies(parsed);
        setDraftCookies(null);
      }
    } catch (err) {
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
        setPreferencesOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, isFirstVisit]);

  // Best practice: Commit only on "Povolit vše" or "Povolit vybrané", then always close modal!
  const commitPreferences = (prefs) => {
    setCookies(prefs);
    setTempCookies(prefs);
    setDraftCookies(null);
    const value = JSON.stringify(prefs);
    try {
      localStorage.setItem('cookiePrefs', value);
    } catch (e) {}
    document.cookie = `cookieConsent=${encodeURIComponent(value)}; path=/; max-age=31536000`;
    if (!prefs.functional && authenticated) {
      if (typeof logout === "function") logout();
      document.cookie = "jwtToken=; Path=/; Max-Age=0; SameSite=None; Secure";
      document.cookie = "refreshToken=; Path=/; Max-Age=0; SameSite=None; Secure";
      console.log("consent revoked.");
    } else {
      // Put your allowed consent logging here:
      console.log("consent allowed:", prefs);
    }
    setOpen(false); // Always close modal after commit to avoid race
    setPreferencesOpen(false);
    if (typeof window !== 'undefined') {
      const consentChangeChannel = new BroadcastChannel('cookie-consent');
      consentChangeChannel.postMessage({ type: 'consent-updated', consent: prefs });
      consentChangeChannel.close();
    }
  };

  // Save draft only (does NOT commit!)
  const handleSavePreferences = () => {
    setDraftCookies({ ...tempCookies }); // Save as draft
    setPreferencesOpen(false);
  };

  // "Zpět" resets tempCookies to last draft, or cookies if no draft for this modal open
  const handleCancelPreferences = () => {
    // setTempCookies(draftCookies || cookies);
    setPreferencesOpen(false);
  };

  // "Povolit vše": always available, always enables all
  const handleAllowAll = () => {
    const allPrefs = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    commitPreferences(allPrefs);
  };

  // "Povolit vybrané": appears ONLY if user made a draft with not all true, or on first visit before consent
  const handleAllowSelected = () => {
    if (
      draftCookies &&
      ['analytics', 'marketing', 'functional'].some(type => !draftCookies[type])
    ) {
      // Only commit if draft is not all enabled
      commitPreferences(draftCookies);
    } else {
      // If nothing to commit, just close
      setOpen(false);
      setPreferencesOpen(false);
      setDraftCookies(null);
    }
  };

  if (!open) return null;

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent} ref={modalRef}>
        <div className={styles.modalHeader}>
          <div className={styles.headerRow}>
            {!isFirstVisit && (
              <button
                onClick={() => {
                  setOpen(false);
                  setPreferencesOpen(false);
                  setDraftCookies(null);
                }}
                className={styles.closeButton}
                aria-label="Zavřít"
                type="button"
              >
                <FaTimes size={20} />
              </button>
            )}
              <h2 className={styles.title}>
                {preferencesOpen ? 'Nastavení cookies' : 'Tato stránka používá cookies 🍪'}
              </h2>
            <div style={{ width: '2.25rem' }} />
          </div>
        </div>
        {!preferencesOpen ? (
          <>
            <p className={styles.description}>
              Používáme funkční, analytické, marketingové a pamatovací cookies. Po vašem prvním výběru si tedy pamatujeme vaši
              volbu, abychom vás nemuseli opětovně obírat o čas při každé návštěvě stránky. Změna povolení cookies je samozřejmě možná kdykoliv kliknutím na tlačítko na konci stránky. Zde si můžete vybrat,
              které typy cookies chcete povolit.
            </p>
            <div className={styles.buttonGroup}>
              
              {/* Always open preferences from latest draft if exists, else committed */}
              <button
                onClick={() => {
                  setPreferencesOpen(true);
                  setTempCookies(draftCookies || tempCookies);
                }}
                className={styles.buttonDefault}
              >
                Upravit preference
              </button>
              {/* Povolit vybrané: only if 1) first visit, or 2) user made a draft with not all enabled */}
              {(isFirstVisit ||
                (draftCookies &&
                  ['analytics', 'marketing', 'functional'].some(type => !draftCookies[type]))) && (
                <button
                  onClick={handleAllowSelected}
                  className={styles.buttonPrimary}
                >
                  Povolit vybrané
                </button>
              )}
              {/* Povolit vše: always present */}
              <button
                onClick={handleAllowAll}
                className={styles.buttonPrimary}
              >
                Povolit vše
              </button>
              
            </div>
          </>
        ) : (
          <>
            <p className={styles.description}>
              Vyberte, které typy cookies chcete povolit. Nezbytné cookies jsou vždy aktivní.
            </p>
            <div className={styles.preferenceList}>
              {['analytics', 'marketing', 'functional'].map((type) => (
                <div key={type} className={styles.preferenceItem}>
                  <div>
                    <p className={styles.preferenceTitle}>{type}</p>
                    <p className={styles.preferenceInfo}>
                      {type === 'analytics' && 'Pomáhají nám porozumět, jak se tato stránka používá.'}
                      {type === 'marketing' && 'Slouží k analýze efektivnosti našich reklam.'}
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
