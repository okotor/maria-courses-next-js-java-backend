import { updateCourse } from '@/lib/courseService';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ✅ ensure revalidation takes effect

export async function POST(req, { params }) {
  const { slug } = await params;
  try {
    const formData = await req.formData();
    const updatedCourse = await updateCourse(formData, slug); // includes .date
    revalidatePath('/');
    revalidatePath('/courses');
    revalidatePath(`/courses/${updatedCourse.slug}`); // very important
    revalidatePath('/archive');

    const date = new Date(updatedCourse.date);
    if (!isNaN(date)) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      revalidatePath(`/archive/${year}`);
      revalidatePath(`/archive/${year}/${month}`);
    }

    // ✅ Return JSON instead of redirect
    return NextResponse.json({
      success: true,
      redirectTo: `/courses/${updatedCourse.slug}`
    }, { status: 200 });

  } catch (err) {
    console.error('❌ API ERROR in /api/courses/[slug]/edit:', err);
    return NextResponse.json({
      success: false,
      message: 'Chyba při úpravě kurzu'
    }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};