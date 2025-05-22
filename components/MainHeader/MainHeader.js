'use client';

import { useAuth } from "@/context/AuthContext";
import classes from "./MainHeader.module.css";
import Image from 'next/image';
import MariaPicture from '@/assets/Maria.png';
import MainHeaderBackground from "./MainHeaderBackground";
import ClientNavLink from "./ClientNavLink";
import MobileMenu from "./MobileMenu";

export default function MainHeader() {
  const { isAdmin, authenticated, logout } = useAuth();
  console.log('Render MainHeader:', isAdmin, authenticated);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <MainHeaderBackground />
      <header className="main-header">
        <div>
          <Image src={MariaPicture} className={classes.logo} alt='Website logo'/>
          <nav>
            <div className={`${classes.nav} ${classes['desktop-nav']}`}>
              <ClientNavLink href="/">Home</ClientNavLink>
              <ClientNavLink href="/about">O nás</ClientNavLink>
              <ClientNavLink href="/courses">Všechny kurzy</ClientNavLink>
              {isAdmin && (
                <>
                  <ClientNavLink href="/admin-dashboard">Admin Panel</ClientNavLink>
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
                  <ClientNavLink href="/my-courses">Moje kurzy</ClientNavLink>
                  <ClientNavLink href="/account">Můj účet</ClientNavLink>
                  <button onClick={handleLogout} className={classes.logoutBtn}>Odhlásit se</button>
                </>
              )}
            </div>

            <div className={classes['mobile-nav']}>
              <MobileMenu />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
