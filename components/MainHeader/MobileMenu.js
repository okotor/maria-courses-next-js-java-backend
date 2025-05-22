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
      <button onClick={() => setOpen(prev => !prev)} className="p-2">
        {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-screen bg-white text-black shadow-md z-50">
          <nav className="flex flex-col items-start gap-4 p-4 text-lg">
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
      )}
    </div>
  );
}
