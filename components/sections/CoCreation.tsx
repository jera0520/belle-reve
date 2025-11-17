'use client';

export default function CoCreation() {
  const steps = [
    {
      number: '01',
      title: '리서치',
      description: '국가별 소비자 조사 및 문화 연구'
    },
    {
      number: '02',
      title: '프로토타입',
      description: '3종 샘플 개발 및 테스트'
    },
    {
      number: '03',
      title: 'A/B 테스트',
      description: '현지 소비자 피드백 수집'
    },
    {
      number: '04',
      title: '공동 제작',
      description: '디자인·용기 커뮤니티 투표'
    },
    {
      number: '05',
      title: '론칭',
      description: '크라우드 펀딩 및 출시'
    }
  ];

  return (
    <section id="cocreation" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-light text-center text-[var(--french-navy)] mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Co-creation Process
        </h2>
        <p className="text-center text-[var(--french-gray)] mb-16 max-w-2xl mx-auto">
          고객과 함께 만드는 5단계 프로세스
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-[var(--french-gold)] flex items-center justify-center">
                  <span className="text-2xl font-light text-[var(--french-gold)]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--french-navy)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--french-gray)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="px-12 py-4 bg-[var(--french-gold)] text-white hover:bg-[var(--french-navy)] transition-all duration-300 tracking-wider text-lg">
              참여하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
