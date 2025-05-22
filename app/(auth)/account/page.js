'use client';

import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import AccountSettings from "@/components/AuthForms/AccountSettingsForm";
import classes from '../../page.module.css';

export default function AccountDetailsPage() {
  return (
    <ProtectedRoute>
      <>
        <header className={classes.header}>
          <h1>
            <span className={classes.highlight}>Nastavení účtu</span>
          </h1>
        </header>
        <main className={classes.main}>
          <AccountSettings />
        </main>
      </>
    </ProtectedRoute>
  );
}
