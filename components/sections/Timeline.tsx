'use client';

export default function Timeline() {
  const milestones = [
    { month: '1-2', title: '시장 리서치', desc: '일본 커뮤니티 구축' },
    { month: '3-4', title: 'MVP 개발', desc: '1차 샘플 테스트' },
    { month: '5-6', title: '일본 에디션', desc: '1차 출시' },
    { month: '7-8', title: '크라우드펀딩', desc: '일본 CAMPFIRE' },
    { month: '9-10', title: 'SNS 마케팅', desc: '인플루언서 광고' },
    { month: '11-12', title: 'B2C 확장', desc: '편집숍 입점' }
  ];

  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-light text-center mb-16 text-[var(--french-navy)]" 
            style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          실행 로드맵
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[var(--french-gold)] opacity-30"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'text-right pr-1/2' : 'text-left pl-1/2'}`}>
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-[var(--french-cream)] p-6 rounded-lg border border-[var(--french-gold)] border-opacity-20">
                      <div className="text-[var(--french-gold)] font-semibold mb-2">{milestone.month}개월</div>
                      <h3 className="text-xl font-semibold text-[var(--french-navy)] mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--french-gold)] rounded-full border-4 border-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
