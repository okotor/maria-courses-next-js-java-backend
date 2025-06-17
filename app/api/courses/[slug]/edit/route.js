import { updateCourse } from '@/lib/courseService';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ✅ ensure revalidation takes effect

export async function POST(req, { params }) {
  const { slug } = await params;
  try {
    const formData = await req.formData();
    let backendResponse;
    try {
      backendResponse = await updateCourse(formData, slug);
    } catch (err) {
      // If Axios/fetch throws, check if it has a response with data, else fallback
      let message = 'Chyba při úpravě kurzu';
      let errors = undefined;
      if (err.response && err.response.data) {
        message = err.response.data.message || message;
        errors = err.response.data.errors;
      } else if (err.message) {
        message = err.message;
      }
      return NextResponse.json({
        success: false,
        message,
        errors,
      }, { status: 502 });
    }

    // If backendResponse is empty or not an object, treat as a server error
     if (backendResponse.success === true || backendResponse.slug) {
      revalidatePath('/');
      revalidatePath('/courses');
      revalidatePath(`/courses/${backendResponse.slug}`);
      revalidatePath('/archive');
      const date = new Date(backendResponse.date || backendResponse.course?.date);
      if (!isNaN(date)) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        revalidatePath(`/archive/${year}`);
        revalidatePath(`/archive/${year}/${month}`);
      }
      return NextResponse.json({
        success: true,
        redirectTo: `/courses/${backendResponse.slug || backendResponse.course?.slug}`
      }, { status: 200 });
    } else {
      // Error with backendResponse present
      return NextResponse.json({
        success: false,
        message: backendResponse.message || 'Chyba při úpravě kurzu',
        errors: backendResponse.errors,
      }, { status: 400 });
    }
  } catch (err) {
    // Catch all unexpected JS errors
    return NextResponse.json({
      success: false,
      message: err.message || 'Neočekávaná chyba při úpravě kurzu.',
    }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};