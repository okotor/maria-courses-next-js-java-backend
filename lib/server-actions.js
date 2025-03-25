'use server';

import { saveCourse } from './db-content'; // Assumed to be connected to PostgreSQL
import { revalidatePath } from 'next/cache';

// Check if the text is invalid
function isInvalidText(text) {
    return !text || text.trim() === '';
}

// Create a course and store it in the PostgreSQL database
export async function createACourse(prevState, formData) {
    const course = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        course_description: formData.get('course_description'),
        lecturer: formData.get('name'),
        lecturer_email: formData.get('email'),
        image: formData.get('image'),
        date: new Date().toISOString().split('T')[0] // Format YYYY-MM-DD
    };
    console.log(course);
    console.log("🖼️ Image received:", course.image); // Debugging log
    if (!course.image) {
        return {
            success: false,
            message: 'Je třeba přidat obrázek.'
        };
    }
    // Validation checks for course fields
    if (
      isInvalidText(course.title) ||
      isInvalidText(course.summary) ||
      isInvalidText(course.course_description) ||
      isInvalidText(course.lecturer) ||
      isInvalidText(course.lecturer_email) ||
      !course.lecturer_email.includes('@') ||
      !course.image ||
      course.image.size === 0
    ) {
        return {
            success: false,
            message: 'Je třeba vyplnit všechna pole validním obsahem.'
        };
    }
    // Save course to the PostgreSQL database
    try {
        await saveCourse(course); // Ensure saveCourse function is updated to handle PostgreSQL
        revalidatePath('/courses'); // Ensure the cache updates
        // Return a success message for client-side handling
        return { success: true, message: 'Kurz úspěšně vytvořen!' }; // ✅ Success flag
        // revalidatePath('/courses');
        // redirect('/courses');
    } catch (error) {
        console.error('Chyba při ukládání kurzu:', error);
        return {
            success: false,
            message: 'Chyba při ukládání kurzu.'
        };
    }
}