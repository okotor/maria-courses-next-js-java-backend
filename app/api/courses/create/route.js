import { saveCourse } from '@/lib/courseService';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ✅ ensures cache revalidation

export async function POST(req) {
  try {
    const formData = await req.formData();
    const createdCourse = await saveCourse(formData); // backend sets the date
    revalidatePath('/');
    revalidatePath('/courses');
    revalidatePath('/archive');

    const date = new Date(createdCourse.date);
      if (!isNaN(date)) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        revalidatePath(`/archive/${year}`);
        revalidatePath(`/archive/${year}/${month}`);
      }

    return NextResponse.json({
      success: true,
      redirectTo: '/courses'
    }, { status: 201 });
  } catch (err) {
    console.error('❌ Error creating course:', err);
    return NextResponse.json({
      success: false,
      message: 'Chyba při vytváření kurzu'
    }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};