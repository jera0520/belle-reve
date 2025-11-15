import { getActiveABTests } from '@/lib/ab-testing/queries';
import Link from 'next/link';

export default async function CommunityPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const activeTests = await getActiveABTests();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              함께 만드는 뷰티
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              당신의 의견이 제품이 됩니다. Co-creation에 참여하세요!
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="px-6 py-3 bg-white/20 rounded-full">
                <div className="text-2xl font-bold">{activeTests.length}</div>
                <div>진행 중인 투표</div>
              </div>
              <div className="px-6 py-3 bg-white/20 rounded-full">
                <div className="text-2xl font-bold">1,234</div>
                <div>참여자</div>
              </div>
              <div className="px-6 py-3 bg-white/20 rounded-full">
                <div className="text-2xl font-bold">3</div>
                <div>에디션</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-creation 프로세스 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Co-creation 5단계
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { step: 1, icon: '💬', title: '유저 리서치', desc: 'FGD & 설문' },
              { step: 2, icon: '🧪', title: '프로토타입', desc: '샘플 제작' },
              { step: 3, icon: '🗳️', title: 'A/B 테스트', desc: '투표 참여' },
              { step: 4, icon: '🎨', title: '공동 제작', desc: '디자인 확정' },
              { step: 5, icon: '🚀', title: '펀딩 & 론칭', desc: '크라우드펀딩' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-5xl mb-3">{item.icon}</div>
                <div className="text-lg font-bold mb-1">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 진행 중인 A/B 테스트 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold">진행 중인 투표</h2>
            <span className="text-purple-600 font-semibold">
              {activeTests.length}개 진행 중
            </span>
          </div>

          {activeTests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeTests.map((test) => {
                const variants = JSON.parse(test.variants);
                const daysLeft = Math.ceil(
                  (new Date(test.endDate).getTime() - new Date().getTime()) / 
                  (1000 * 60 * 60 * 24)
                );

                return (
                  <Link
                    key={test.id}
                    href={`/${locale}/community/vote/${test.id}`}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-xl transition border-2 border-transparent hover:border-purple-300"
                  >
                    {/* 헤더 */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="text-sm text-purple-600 font-semibold mb-1">
                          {test.edition.nameLocal}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{test.title}</h3>
                        <p className="text-gray-600 line-clamp-2">
                          {test.description}
                        </p>
                      </div>
                    </div>

                    {/* 통계 */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                        {test.testType}
                      </div>
                      <div className="text-sm text-gray-600">
                        {test.totalVotes}명 참여
                      </div>
                      <div className="text-sm text-gray-600">
                        {variants.length}개 옵션
                      </div>
                    </div>

                    {/* 마감일 */}
                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="text-sm text-gray-500">
                        {daysLeft > 0 ? `${daysLeft}일 남음` : '오늘 마감'}
                      </div>
                      <div className="text-purple-600 font-semibold">
                        투표하기 →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl">
              <div className="text-6xl mb-4">🗳️</div>
              <p className="text-gray-500 text-lg">
                현재 진행 중인 투표가 없습니다.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 참여 혜택 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            참여 혜택
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold mb-3">즉시 혜택</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  투표 참여 즉시 5% 할인 쿠폰
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  설문 참여 시 10% 추가 할인
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  FGD 참여 시 시제품 무료 제공
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3">참여자 명예</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  제품 패키지에 이름 표기
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  Co-creator 디지털 뱃지
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  전용 커뮤니티 초대
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-6xl mb-4">🎰</div>
              <h3 className="text-2xl font-bold mb-3">추첨 혜택</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  정품 무료 제공 (10명)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  1년 구독권 (5명)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500">✓</span>
                  공장 견학 투어 (3명)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            당신의 뷰티 취향을 들려주세요
          </h2>
          <p className="text-xl mb-8 opacity-90">
            지금 참여하고 특별한 혜택을 받으세요
          </p>
          {activeTests.length > 0 && (
            <Link
              href={`/${locale}/community/vote/${activeTests[0].id}`}
              className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition"
            >
              지금 투표하기
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
