'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import ClientNavLink from './ClientNavLink';
import { Menu, X } from 'lucide-react';
import styles from './MobileMenu.module.css';

export default function MobileMenu() {
  const { isAdmin, authenticated, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setOpen(false);
  };

  const closeMenu = () => setOpen(false);

  return (
    <div className={styles.mobileMenuWrapper}>
      <button
        onClick={() => setOpen(prev => !prev)}
        className={styles.toggleButton}
        aria-label="Toggle menu"
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {open && <div className={styles.backdrop} onClick={closeMenu} />}

      <div className={`${styles.menuPanel} ${open ? styles.open : ''}`}>
        <nav className={styles.navLinks}>
          <ClientNavLink href="/">Home</ClientNavLink>
          <ClientNavLink href="/about">O nás</ClientNavLink>
          <ClientNavLink href="/courses">Všechny kurzy</ClientNavLink>

          {isAdmin && (
            <>
              <ClientNavLink href="/create-course">Vytvořit kurz</ClientNavLink>
            </>
          )}

          {!authenticated ? (
            <>
              <ClientNavLink href="/login">Přihlášení</ClientNavLink>
              <ClientNavLink href="/register">Registrace</ClientNavLink>
            </>
          ) : (
            <>
              <ClientNavLink href="/account">Můj účet</ClientNavLink>
              <button onClick={handleLogout} className={styles.logoutButton}>Odhlásit se</button>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
