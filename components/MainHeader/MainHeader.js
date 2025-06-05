'use client';

import { useState } from "react"
import { useAuth } from "@/context/AuthContext";
import ClientNavLink from "./ClientNavLink";
import MobileHeader from "./MobileHeader";
import Image from 'next/image';
import MariaPicture from '@/public/Maria.png';
import classes from "./MainHeader.module.css";

export default function MainHeader() {
  const { isAdmin, authenticated, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      <header className="main-header">
        <span className={classes.headerOverlayText}>Kurzy Marie</span>
        <div className={classes.headerRow}>
          <div className={classes.logoWrapper}>
          <Image src={MariaPicture} className={classes.logo} alt='Website logo'/>
          </div>
          <nav className={classes.navWrapper}>
            <div className={`${classes.nav} ${classes['desktop-nav']}`}>
              <ClientNavLink href="/">Home</ClientNavLink>
              <ClientNavLink href="/about">O nás</ClientNavLink>
              <ClientNavLink href="/courses">Vyhledej kurz</ClientNavLink>
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
                  <button 
                    onClick={handleLogout}
                    className={classes.logoutBtn}
                    disabled={isLoggingOut}
                  >
                    {isLoggingOut ? "Odlašuji..." : "Odhlásit se"}
                  </button>
                </>
              )}
            </div>

            <div className={classes['mobile-nav']}>
              <MobileHeader />
            </div>
          </nav>
        </div> 
      </header>
    </>
  );
}
