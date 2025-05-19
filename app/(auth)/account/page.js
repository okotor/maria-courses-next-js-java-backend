'use client';

import ProtectedRoute from "@/components/Authentication/ProtectedRoute";
import classes from '../../page.module.css';
// import { useEffect, useState } from "react";

export default function AccountDetailsPage() {
    const updateAccount = () => {
    // Example ID (replace with dynamic value)
        //0.//=>useState for form and button appearing - ADD
        // State to store user data
        //1. Fetch User Data from `http://localhost:8080/jobPost/${id}`
         // Runs when `currId` changes
          //2. Pre-fill a Form with user data to be Edited
        //3. useState change upon button click - PUT REQUEST
        // new function to Edit data & confirm
        alert('Zatím neměníme.');
    }   
    
    const deleteAccount = () => {
        //0.Confirmation window
        //1. Delete Request + Confirmation
        //2. Redirect to Login Page (Logout)
        alert('Zatím nesmažem.');
    }  
    
    return(
        <ProtectedRoute>
        <>
            <header className={classes.header}>
            <h1>
                <span className={classes.highlight}>Detaily účtu</span>
            </h1>
            </header>
            <main className={classes.main}>
            <button onClick={updateAccount}>Změnit údaje</button>
            <button onClick={deleteAccount}>Smazat účet</button>
            </main>
        </>
        </ProtectedRoute>
    );
}
