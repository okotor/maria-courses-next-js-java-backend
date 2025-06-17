import { saveCourse } from '@/lib/courseService';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ✅ ensures cache revalidation

export async function POST(req) {
  try {
    const formData = await req.formData();
    const backendResponse = await saveCourse(formData); // backend sets the date

    if (backendResponse && (backendResponse.success === true || backendResponse.cId)) {
      revalidatePath('/');
      revalidatePath('/courses');
      revalidatePath('/archive');

      const date = new Date(backendResponse.course?.date || backendResponse.date);
        if (!isNaN(date)) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          revalidatePath(`/archive/${year}`);
          revalidatePath(`/archive/${year}/${month}`);
        }

      const json = { success: true, redirectTo: '/courses' };
      console.log('[API RESPONSE - SUCCESS]', json);
      return NextResponse.json(json, { status: 201 });
    } else {
      // If backend reports failure, relay message and errors to client
      const json = {
        success: false,
        message: backendResponse.message || 'Chyba při vytváření kurzu',
        errors: backendResponse.errors,
      };
      console.warn('[API RESPONSE - FAILURE]', json);
      return NextResponse.json(json, { status: 400 });
    }
  } catch (err) {
    console.error('❌ Error creating course:', err);
    // ⬇️ Extract meaningful error details (Axios error or JS error)
    let message = 'Chyba při vytváření kurzu';
    let errors = undefined;
    if (err.response && err.response.data) {
      // If backend provided details, forward them
      message = err.response.data.message || message;
      errors = err.response.data.errors;
    } else if (err.message) {
      message = err.message;
    }

    // ⬇️ Always send message + optional field errors
    return NextResponse.json({
      success: false,
      message,
      errors,
    }, { status: 400 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};