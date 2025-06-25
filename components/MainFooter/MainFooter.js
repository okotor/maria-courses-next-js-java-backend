// components/Footer.js
import styles from "./MainFooter.module.css"; // Adjust the path to match your folder structure
import { openCookieModal } from "@/components/Cookies/CookieConsentModal";

export default function MainFooter() {
  return (
    <footer className={styles.footer}>
      <p>
          2025 © tehacko, +420 774 243 723, tehacko777@gmail.com
      </p>
      <button onClick={openCookieModal} className={styles.cookieButton}>
        Nastavení cookies
      </button>
    </footer>
  );
}