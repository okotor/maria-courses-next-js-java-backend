'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import ClientNavLink from './ClientNavLink';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
  const { isAdmin, authenticated, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="absolute top-4 right-4 z-50 p-2"
        aria-label="Toggle menu"
      >
        {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-start gap-4 p-6 text-lg">
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
              <button onClick={handleLogout} className="text-left text-red-600 font-semibold">Odhlásit se</button>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}
