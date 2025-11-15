import { BRAND } from '@/lib/constants/brand';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-2xl opacity-90 max-w-3xl mx-auto">
            문화를 담은 뷰티, 함께 만드는 브랜드
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {BRAND.name}는 K-뷰티의 우수한 기술력과 각 국가의 독특한 문화 정체성(Cultural Identity)을 결합하여, 
              전 세계 고객과 함께 만들어가는(Co-creation) 프리미엄 뷰티 브랜드입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-purple-50 rounded-2xl">
              <div className="text-5xl mb-4">🌏</div>
              <h3 className="text-xl font-bold mb-3">Global Localization</h3>
              <p className="text-gray-600">
                각 국가의 문화, 기후, 피부 타입을 철저히 연구하여 최적화된 제품을 제공합니다.
              </p>
            </div>
            <div className="text-center p-8 bg-pink-50 rounded-2xl">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Co-creation</h3>
              <p className="text-gray-600">
                고객의 의견을 제품 개발 전 과정에 반영하여 진정으로 원하는 제품을 만듭니다.
              </p>
            </div>
            <div className="text-center p-8 bg-green-50 rounded-2xl">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-3">Clean Beauty</h3>
              <p className="text-gray-600">
                비건, 크루얼티프리, 친환경 패키징으로 지속 가능한 뷰티를 실천합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Core Values</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">1. 문화적 존중 (Cultural Respect)</h3>
              <p className="text-gray-700 leading-relaxed">
                각 국가의 전통, 미적 기준, 뷰티 철학을 깊이 이해하고 존중합니다. 
                일본의 미니멀리즘, 프랑스의 샤넬리즘, 미국의 다양성을 제품에 담아냅니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-pink-600">2. 투명성 (Transparency)</h3>
              <p className="text-gray-700 leading-relaxed">
                모든 성분을 100% 공개하며, 제조 과정, 원료 출처, 테스트 결과를 투명하게 공유합니다. 
                고객의 알 권리를 최우선으로 생각합니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">3. 지속가능성 (Sustainability)</h3>
              <p className="text-gray-700 leading-relaxed">
                재활용 가능한 용기, 최소한의 포장, 탄소 중립 배송을 통해 환경을 보호합니다. 
                아름다움은 지구의 건강과 함께 가야 한다고 믿습니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">4. 혁신 (Innovation)</h3>
              <p className="text-gray-700 leading-relaxed">
                K-뷰티의 최신 기술과 전통적인 현지 성분을 융합하여 독창적인 제품을 개발합니다. 
                끊임없는 연구와 개선을 통해 뷰티의 미래를 선도합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2">이세라</h3>
              <p className="text-purple-600 font-semibold mb-3">CEO & Founder</p>
              <p className="text-gray-600 leading-relaxed">
                글로벌 뷰티 산업 15년 경력. 문화 다양성과 지속가능성에 대한 열정으로 {BRAND.name} 설립. 
                각국의 Cultural Identity를 존중하며 진정한 로컬라이징을 실현합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2">김진현</h3>
              <p className="text-blue-600 font-semibold mb-3">CTO & Co-founder</p>
              <p className="text-gray-600 leading-relaxed">
                화장품 연구개발 및 디지털 혁신 전문가. K-뷰티 기술과 현지 성분의 융합, 
                Co-creation 플랫폼 개발을 총괄하며 제품 혁신을 이끌고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">2024</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">회사 설립 & 일본 에디션 개발 시작</h3>
                <p className="text-gray-600">
                  {BRAND.fullName} 법인 설립. 일본 시장 리서치 시작 및 첫 번째 Cultural Edition 개발 착수.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">2025</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">일본 에디션 크라우드펀딩 & 정식 출시</h3>
                <p className="text-gray-600">
                  CAMPFIRE 플랫폼 크라우드펀딩 성공. 일본 시장 정식 론칭 및 현지 편집숍 입점.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2025</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">프랑스 & 미국 에디션 개발</h3>
                <p className="text-gray-600">
                  두 번째, 세 번째 Cultural Edition 개발 시작. 유럽 및 북미 시장 진출 준비.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">2026</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">동남아 시장 진출 & 글로벌 확장</h3>
                <p className="text-gray-600">
                  태국, 베트남, 싱가포르 등 동남아 에디션 개발. 글로벌 뷰티 브랜드로 성장.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {BRAND.name}와 함께 뷰티의 미래를 만들어가세요. 
            Co-creation에 참여하고 특별한 혜택을 받으세요.
          </p>
          <a
            href="/ko/community"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:bg-gray-100 transition"
          >
            Co-creation 시작하기
          </a>
        </div>
      </section>
    </div>
  );
}
