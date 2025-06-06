'use client';

import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import AccountSettings from "@/components/AuthForms/AccountSettingsForm";
import StopSpinnerOnRender from '@/components/Loading/StopSpinnerOnRender';
import classes from '@/app/page.module.css';

export default function AccountDetailsPage() {
  return (
    <ProtectedRoute>
      <StopSpinnerOnRender>
        <>
          <header className={`page-header ${classes.header}`}>
            <h1>
              Nastavení<span className={classes.highlight}> účtu</span>
            </h1>
          </header>
          <main className={classes.main}>
            <AccountSettings />
          </main>
        </>
      </StopSpinnerOnRender>
    </ProtectedRoute>
  );
}
