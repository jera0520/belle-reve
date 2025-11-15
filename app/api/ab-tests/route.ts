import { NextResponse } from 'next/server';
import { getActiveABTests, getABTestById } from '@/lib/ab-testing/queries';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      const test = await getABTestById(id);
      if (!test) {
        return NextResponse.json(
          { error: 'A/B test not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(test);
    }

    const tests = await getActiveABTests();
    return NextResponse.json(tests);
  } catch (error) {
    console.error('GET /api/ab-tests error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch A/B tests' },
      { status: 500 }
    );
  }
}
