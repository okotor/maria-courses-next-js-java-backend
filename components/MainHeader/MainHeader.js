'use client';

import { useAuth } from "@/context/AuthContext";
import classes from "./MainHeader.module.css";
import Image from 'next/image';
import MariaPicture from '@/assets/Maria.png';
import MainHeaderBackground from "./MainHeaderBackground";
import ClientNavLink from "./ClientNavLink";

export default function MainHeader() {
  const { isAdmin, authenticated, logout } = useAuth();
  console.log('Render MainHeader:', isAdmin, authenticated); // Add this line for debugging

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
    <MainHeaderBackground />
      <header className={classes.header}>
        <div>
          <Image src={MariaPicture} className={classes.logo} alt='Website logo'/>
          <nav className={classes.nav}>
            <ClientNavLink href="/">Home</ClientNavLink>
            <ClientNavLink href="/about">O nás</ClientNavLink>
            <ClientNavLink href="/archive">Nejnovější kurzy & Archiv</ClientNavLink>
            <ClientNavLink href="/courses">Všechny kurzy</ClientNavLink>
            {isAdmin && (
              <>
                <ClientNavLink href="/admin-dashboard">Admin Panel</ClientNavLink>
                <ClientNavLink href="/create-a-course">Vytvořit kurz</ClientNavLink>
              </>
            )}

            {!authenticated && (
              <>
                <ClientNavLink href="/login">Přihlášení</ClientNavLink>
                <ClientNavLink href="/register">Registrace</ClientNavLink>
              </>
            )}        

            {authenticated && (
              <>
                <ClientNavLink href="/my-courses">Moje kurzy</ClientNavLink>
                <button onClick={handleLogout}>Odhlásit se</button>
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}