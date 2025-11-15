import { NextResponse } from 'next/server';
import { submitVote, getABTestResults } from '@/lib/ab-testing/queries';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { userId, variantId, comment } = body;

    if (!userId || !variantId) {
      return NextResponse.json(
        { error: 'userId and variantId are required' },
        { status: 400 }
      );
    }

    const vote = await submitVote({
      abTestId: params.id,
      userId,
      variantId,
      comment,
    });

    const results = await getABTestResults(params.id);

    return NextResponse.json({
      vote,
      results,
      message: '투표가 완료되었습니다!',
    });
  } catch (error: any) {
    console.error('POST /api/ab-tests/[id]/vote error:', error);
    
    if (error.message === '이미 투표하셨습니다.') {
      return NextResponse.json(
        { error: error.message },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to submit vote' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const results = await getABTestResults(params.id);
    
    if (!results) {
      return NextResponse.json(
        { error: 'A/B test not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error('GET /api/ab-tests/[id]/vote error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch results' },
      { status: 500 }
    );
  }
}
