'use client';

import { useAuth } from "@/context/AuthContext";
import classes from "./MainHeader.module.css";
import Image from 'next/image';
import MariaPicture from '@/assets/Maria.png';
import ClientNavLink from "./ClientNavLink";
import MobileHeader from "./MobileHeader";

export default function MainHeader() {
  const { isAdmin, authenticated, logout } = useAuth();
  console.log('Render MainHeader:', isAdmin, authenticated);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <header className="main-header">
        <span className={classes.headerOverlayText}>Kurzy Marie</span>
        <div className={classes.headerRow}>
          <Image src={MariaPicture} className={classes.logo} alt='Website logo'/>
          <nav className={classes.navWrapper}>
            <div className={`${classes.nav} ${classes['desktop-nav']}`}>
              <ClientNavLink href="/">Home</ClientNavLink>
              <ClientNavLink href="/about">O nás</ClientNavLink>
              <ClientNavLink href="/courses">Vyber si kurz</ClientNavLink>
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
                  <button onClick={handleLogout} className={classes.logoutBtn}>Odhlásit se</button>
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
