import { NextResponse } from 'next/server';
import { getAllEditions, getEditionsByCountry, createEdition } from '@/lib/db/editions';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get('country');

    if (country) {
      const editions = await getEditionsByCountry(country);
      return NextResponse.json(editions);
    }

    const editions = await getAllEditions();
    return NextResponse.json(editions);
  } catch (error) {
    console.error('GET /api/editions error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch editions' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const edition = await createEdition(body);
    return NextResponse.json(edition, { status: 201 });
  } catch (error) {
    console.error('POST /api/editions error:', error);
    return NextResponse.json(
      { error: 'Failed to create edition' },
      { status: 500 }
    );
  }
}
