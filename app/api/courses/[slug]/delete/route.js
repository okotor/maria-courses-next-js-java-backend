import { deleteCourse } from '@/lib/courseService';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // ✅ critical for revalidatePath

export async function DELETE(_, { params }) {
  const { slug } = await params;
  try {
    await deleteCourse(slug);
    revalidatePath('/');
    revalidatePath('/courses'); // ✅ ensures UI updates on next load
    revalidatePath('/archive');
    return NextResponse.json({
      success: true,
      redirectTo: '/courses'
    }, { status: 200 });
  } catch (err) {
    console.error('Chyba při mazání kurzu:', err);
    return NextResponse.json({
      success: false,
      message: 'Chyba při mazání kurzu'
    }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};