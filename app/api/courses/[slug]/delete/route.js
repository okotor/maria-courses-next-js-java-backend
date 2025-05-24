import { deleteCourse } from '@/lib/courseService';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ✅ critical for revalidatePath

export async function DELETE(_, { params }) {
  try {
    await deleteCourse(params.slug);
    revalidatePath('/courses'); // ✅ ensures UI updates on next load
    return NextResponse.redirect(new URL('/courses', req.url)); // ✅ browser follows redirect
  } catch (err) {
    console.error('Chyba při mazání kurzu:', err);
    return new NextResponse('Chyba při mazání kurzu', { status: 500 });
  }
}
