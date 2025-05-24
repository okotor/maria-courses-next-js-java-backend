import { saveCourse } from '@/lib/courseService';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ✅ ensures cache revalidation

export async function POST(req) {
  try {
    const formData = await req.formData();

    await saveCourse(formData);
    revalidatePath('/courses');

    return NextResponse.redirect(new URL('/courses', req.url)); // ✅ server handles redirect
  } catch (err) {
    console.error('❌ Error creating course:', err);
    return new NextResponse('Chyba při vytváření kurzu', { status: 500 });
  }
}