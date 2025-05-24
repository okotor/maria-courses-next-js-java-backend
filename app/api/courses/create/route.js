import { saveCourse } from '@/lib/courseService';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const formData = await req.formData();

    await saveCourse(formData);
    revalidatePath('/courses');

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('❌ Error creating course:', err);
    return new NextResponse('Chyba při vytváření kurzu', { status: 500 });
  }
}