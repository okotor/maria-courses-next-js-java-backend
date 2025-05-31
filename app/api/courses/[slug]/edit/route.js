import { updateCourse } from '@/lib/courseService';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ✅ ensure revalidation takes effect

export async function POST(req, { params }) {
  try {
    const formData = await req.formData();
    const updatedCourse = await updateCourse(formData, params.slug); // includes .date
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

    return NextResponse.redirect(new URL(`/courses/${updatedCourse.slug}`, req.url));
  } catch (err) {
    console.error('❌ API ERROR in /api/courses/[slug]/edit:', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}