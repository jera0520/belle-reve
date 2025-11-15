import { getABTestById, getABTestResults } from '@/lib/ab-testing/queries';
import { notFound } from 'next/navigation';
import ABTestVoting from '@/components/cocreation/ABTestVoting';
import Link from 'next/link';

export async function generateStaticParams() {
  return [];
}

export default async function VotePage({
  params: { locale, id }
}: {
  params: { locale: string; id: string };
}) {
  const test = await getABTestById(id);

  if (!test) {
    notFound();
  }

  const results = await getABTestResults(id);
  const variants = results || JSON.parse(test.variants);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href={`/${locale}/editions/${test.edition.slug}`}
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6"
        >
          ← {test.edition.nameLocal}로 돌아가기
        </Link>

        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl p-8 mb-8">
          <div className="text-sm opacity-90 mb-2">
            {test.edition.baseProduct.nameKo}
          </div>
          <h1 className="text-4xl font-bold mb-4">
            {test.edition.nameLocal}
          </h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="px-3 py-1 bg-white/20 rounded-full">
              {test.testType}
            </span>
            <span>총 {test.totalVotes}명 참여</span>
          </div>
        </div>

        <ABTestVoting
          testId={test.id}
          title={test.title}
          description={test.description}
          variants={variants}
        />

        <div className="mt-8 bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <span className="text-2xl">🎁</span>
            참여 혜택
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✓</span>
              투표 참여자 전원 크라우드펀딩 5% 할인 쿠폰
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✓</span>
              최종 출시 제품에 참여자 명단 표기
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">✓</span>
              추첨을 통해 10명에게 정품 무료 제공
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
