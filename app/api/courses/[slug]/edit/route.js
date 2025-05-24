import { updateCourse } from '@/lib/courseService';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req, { params }) {
  try {
    const formData = await req.formData();
    await updateCourse(formData, params.slug);
    revalidatePath('/courses'); // 🔄 refresh the course list
    // ✅ FIX: Construct absolute URL using request
    const redirectUrl = new URL('/courses', req.url);
    return NextResponse.redirect(redirectUrl);
  } catch (err) {
    console.error('❌ API ERROR in /api/courses/[slug]/edit:', err);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}