import { BRAND } from '@/lib/constants/brand';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90">
            궁금한 점이 있으신가요? 언제든지 문의해 주세요.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-gray-600 mb-4">
                일반 문의 및 파트너십
              </p>
              <a href={`mailto:${BRAND.contact.email}`} className="text-purple-600 font-semibold hover:underline">
                {BRAND.contact.email}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <p className="text-gray-600 mb-4">
                평일 10:00 - 18:00
              </p>
              <a href={`tel:${BRAND.contact.phone}`} className="text-purple-600 font-semibold hover:underline">
                {BRAND.contact.phone}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3">Office</h3>
              <p className="text-gray-600">
                {BRAND.contact.address}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Send us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">이름 *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">이메일 *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">전화번호</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                    placeholder="010-1234-5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">문의 유형 *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  >
                    <option value="">선택해주세요</option>
                    <option value="general">일반 문의</option>
                    <option value="partnership">파트너십 제안</option>
                    <option value="cocreation">Co-creation 참여</option>
                    <option value="product">제품 문의</option>
                    <option value="support">고객 지원</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">메시지 *</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                    placeholder="문의 내용을 자세히 작성해주세요..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 text-purple-600 rounded"
                  />
                  <label className="text-sm text-gray-600">
                    개인정보 수집 및 이용에 동의합니다. (필수)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:shadow-lg transition"
                >
                  문의 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">자주 묻는 질문</h2>
          
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-lg cursor-pointer flex justify-between items-center">
                Co-creation에 어떻게 참여하나요?
                <span className="text-purple-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                커뮤니티 페이지에서 진행 중인 A/B 테스트와 설문에 참여하실 수 있습니다. 
                회원가입 후 즉시 참여 가능하며, 참여 시 다양한 혜택이 제공됩니다.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-lg cursor-pointer flex justify-between items-center">
                제품은 언제 출시되나요?
                <span className="text-purple-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                일본 에디션은 2025년 상반기 크라우드펀딩을 통해 선출시될 예정입니다. 
                프랑스, 미국 에디션은 2025년 하반기 출시 예정입니다.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-lg cursor-pointer flex justify-between items-center">
                파트너십 문의는 어떻게 하나요?
                <span className="text-purple-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {BRAND.contact.email}로 파트너십 제안서를 보내주시거나, 
                위 문의 폼에서 '파트너십 제안'을 선택하여 문의해주세요.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-lg cursor-pointer flex justify-between items-center">
                제품의 성분은 안전한가요?
                <span className="text-purple-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                모든 제품은 비건, 크루얼티프리 인증을 받았으며, 
                성분 100%를 공개합니다. EWG Green 등급 성분만 사용하며, 
                피부 자극 테스트와 알레르기 테스트를 완료했습니다.
              </p>
            </details>

            <details className="bg-gray-50 rounded-xl p-6 group">
              <summary className="font-bold text-lg cursor-pointer flex justify-between items-center">
                해외 배송이 가능한가요?
                <span className="text-purple-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                네, 전 세계 배송 가능합니다. 각 에디션은 해당 국가에서 우선 출시되며, 
                이후 글로벌 배송이 시작됩니다. 배송비 및 소요 기간은 지역에 따라 다릅니다.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Follow Us
          </h2>
          <p className="text-xl mb-8 opacity-90">
            소셜 미디어에서 {BRAND.name}의 최신 소식을 만나보세요
          </p>
          <div className="flex justify-center gap-6">
            <a href={BRAND.social.instagram} target="_blank" rel="noopener noreferrer" 
               className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <span className="text-3xl">📷</span>
            </a>
            <a href={BRAND.social.facebook} target="_blank" rel="noopener noreferrer"
               className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <span className="text-3xl">📘</span>
            </a>
            <a href={BRAND.social.twitter} target="_blank" rel="noopener noreferrer"
               className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <span className="text-3xl">🐦</span>
            </a>
            <a href={BRAND.social.youtube} target="_blank" rel="noopener noreferrer"
               className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <span className="text-3xl">▶️</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
