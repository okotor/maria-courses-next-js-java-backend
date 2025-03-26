'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRoute from "@/components/Authentication/AuthRequired"
import { saveCourse } from '@/lib/courses-actions';
import ImagePicker from '@/components/Courses/ImagePicker';
import CourseCreateButton from '@/components/Courses/CourseCreateButton';
import classes from './page.module.css';

export default function CreateACoursePage() {
    const [state, setState] = useState({ success: false, message: null });
    const router = useRouter();

    // Redirect on successful course creation
    useEffect(() => {
        if (state.success) {
            router.push("/courses");
        }
    }, [state.success, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const response = await saveCourse(formData);
            setState({ success: true, message: response.message });
        } catch (error) {
            setState({ success: false, message: 'Chyba při ukládání kurzu.' });
        }
    };

    return (
        <ProtectedRoute requireAdmin={true}>
            <>
                <header className={classes.header}>
                    <h1>
                    Vytvoření <span className={classes.highlight}>nového kurzu</span>
                    </h1>
                    <p>Zkontroluj si prosím správnost veškerého textu v textovém editoru a přílušné kusy zkopíruj do přílušných políček. Následně zkontroluj, že vše je ve správném políčku. Až poté odešli. Kurz poté najdeš v nabídce kurzů.</p>
                </header>
                <main className={classes.main}>
                    <form className={classes.form} onSubmit={handleSubmit}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Jméno přednášejícího</label>
                        <input type="text" id="name" name="lecturer" required />
                        </p>
                        <p>
                        <label htmlFor="email">Email přednášejícího</label>
                        <input type="email" id="email" name="lecturerEmail" required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Název</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Abstrakt</label>
                        <input type="text" id="summary" name="summary" required />
                    </p>
                    <p>
                        <label htmlFor="courseDescription">Popis kurzu</label>
                            <textarea
                            id="courseDescription"
                            name="courseDescription"
                            rows="10"
                            required
                            ></textarea>
                    </p>
                    <ImagePicker label="Your image" name="image"/>
                    {state.message && <p>{state.message}</p>}
                    <p className={classes.actions}>
                        <CourseCreateButton />
                    </p>
                    </form>
                </main>
            </>
        </ProtectedRoute>
    );
}