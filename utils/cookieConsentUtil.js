export const getAllowPersistent = () => {
  const cookieConsent = document.cookie.match(/cookieConsent=([^;]+)/);
  if (cookieConsent) {
    try {
      const parsed = JSON.parse(decodeURIComponent(cookieConsent[1]));
      return !!parsed.functional; // true or false
    } catch (e) {
      console.warn("Cookie consent parse error:", e);
      return false;
    }
  }
  return false;
};

