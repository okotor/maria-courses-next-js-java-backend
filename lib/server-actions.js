'use server';

import { redirect } from 'next/navigation';
import { saveCourse } from './db-content'; // Assumed to be connected to PostgreSQL
import { revalidatePath } from 'next/cache';
import { createUser } from '@/lib/user'; // Adjusted to work with PostgreSQL
import { hashUserPassword } from './hash-passwords';

// Check if the text is invalid
function isInvalidText(text) {
    return !text || text.trim() === '';
}

// Create a course and store it in the PostgreSQL database
export async function createACourse(prevState, formData) {
    // Get the current date
    const today = new Date();

    // Extract the year, day, and month
    const year = today.getFullYear();
    const day = String(today.getDate()).padStart(2, '0'); // Ensure day is two digits
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Ensure month is two digits (months are zero-indexed)

    // Format the date as YYYY-MM-DD (not YYYY-DD-MM, fixed the order)
    const formattedDate = `${year}-${month}-${day}`;

    console.log(formattedDate); // Output will be in the format YYYY-MM-DD

    const course = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        course_description: formData.get('course_description'),
        lecturer: formData.get('name'),
        lecturer_email: formData.get('email'),
        image: formData.get('image'),
        date: formattedDate
    };

    console.log(course);

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
            
// Sign up a new user and save to PostgreSQL
export async function signup(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    let errors = {};

    // Validate email and password
    if (!email.includes('@')) {
        errors.email = 'Vložte validní emailovou adresu.';
    }

    if (password.trim().length < 8) {
        errors.password = 'Heslo musí mít alespoň 8 znaků.';
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors,
        };
    }

    // Hash the password and create the user
    try {
        const hashedPassword = await hashUserPassword(password);
        console.log("Hashed Password:", hashedPassword);
        await createUser(email, hashedPassword); // Ensure createUser function is updated to handle PostgreSQL
    } catch (error) {
        if (error.code === '23505') { // PostgreSQL unique constraint error code for duplicates
            return {
                errors: {
                    email: 'Vypadá to, že uživatel s touto emailovou adresou již existuje.'
                }
            };
        }
        console.error('Error creating user:', error);
        throw error;
    }

    redirect('/my-courses');
}
