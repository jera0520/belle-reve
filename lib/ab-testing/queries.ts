import prisma from '@/lib/db/client';
import { ABTest } from '@prisma/client';

/**
 * 활성 A/B 테스트 목록 조회
 */
export async function getActiveABTests() {
  return prisma.aBTest.findMany({
    where: { status: 'ACTIVE' },
    include: {
      edition: {
        include: {
          baseProduct: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  });
}

/**
 * A/B 테스트 상세 조회
 */
export async function getABTestById(id: string) {
  return prisma.aBTest.findUnique({
    where: { id },
    include: {
      edition: {
        include: {
          baseProduct: true,
        },
      },
      votes: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              country: true,
            },
          },
        },
        orderBy: { votedAt: 'desc' },
      },
    },
  });
}

/**
 * 사용자의 투표 기록 확인
 */
export async function hasUserVoted(abTestId: string, userId: string) {
  const vote = await prisma.vote.findUnique({
    where: {
      abTestId_userId: {
        abTestId,
        userId,
      },
    },
  });
  return !!vote;
}

/**
 * 투표 제출
 */
export async function submitVote(data: {
  abTestId: string;
  userId: string;
  variantId: string;
  comment?: string;
}) {
  // 1. 중복 투표 확인
  const hasVoted = await hasUserVoted(data.abTestId, data.userId);
  if (hasVoted) {
    throw new Error('이미 투표하셨습니다.');
  }

  // 2. 투표 생성
  const vote = await prisma.vote.create({
    data,
  });

  // 3. A/B 테스트 통계 업데이트
  await updateABTestStats(data.abTestId);

  return vote;
}

/**
 * A/B 테스트 통계 업데이트
 */
export async function updateABTestStats(abTestId: string) {
  const votes = await prisma.vote.groupBy({
    by: ['variantId'],
    where: { abTestId },
    _count: true,
  });

  const totalVotes = votes.reduce((sum, v) => sum + v._count, 0);
  
  // 가장 많은 투표를 받은 variant 찾기
  const winner = votes.reduce((max, v) => 
    v._count > max._count ? v : max
  , votes[0]);

  await prisma.aBTest.update({
    where: { id: abTestId },
    data: {
      totalVotes,
      winner: winner?.variantId,
      winnerVotes: winner?._count || 0,
    },
  });
}

/**
 * A/B 테스트 결과 조회
 */
export async function getABTestResults(abTestId: string) {
  const votes = await prisma.vote.groupBy({
    by: ['variantId'],
    where: { abTestId },
    _count: true,
  });

  const test = await prisma.aBTest.findUnique({
    where: { id: abTestId },
  });

  if (!test) return null;

  const variants = JSON.parse(test.variants);
  
  return variants.map((variant: any) => {
    const voteCount = votes.find(v => v.variantId === variant.id)?._count || 0;
    const percentage = test.totalVotes > 0 
      ? (voteCount / test.totalVotes) * 100 
      : 0;

    return {
      ...variant,
      votes: voteCount,
      percentage: Math.round(percentage * 10) / 10,
      isWinner: variant.id === test.winner,
    };
  });
}

/**
 * A/B 테스트 종료
 */
export async function closeABTest(abTestId: string) {
  return prisma.aBTest.update({
    where: { id: abTestId },
    data: { status: 'COMPLETED' },
  });
}
