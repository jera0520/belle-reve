'use client';

export default function Team() {
  const team = [
    {
      name: '이세라',
      nameEn: 'Lee Sera',
      role: 'Co-Founder & CEO',
      description: 'K-Beauty 전문가 | 글로벌 마케팅',
      expertise: ['Brand Strategy', 'Global Marketing', 'Product Development']
    },
    {
      name: '김진현',
      nameEn: 'Kim Jinhyeon',
      role: 'Co-Founder & CTO',
      description: '기술 총괄 | 플랫폼 개발',
      expertise: ['Tech Architecture', 'Co-creation Platform', 'Data Analytics']
    }
  ];

  return (
    <section id="team" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--french-gold)]">Team</span>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--french-gold)] to-transparent mt-2"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-[var(--french-navy)]" 
              style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Our Founders
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden bg-[var(--french-cream)] aspect-square mb-6">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--french-gold)]/20 to-[var(--french-navy)]/20 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute text-8xl font-light text-[var(--french-gold)]/30">
                    {member.name[0]}
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-3xl font-light text-[var(--french-navy)] mb-1" 
                      style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--french-gray)] mb-3">{member.nameEn}</p>
                </div>
                
                <div className="h-[1px] w-16 bg-[var(--french-gold)] mx-auto"></div>
                
                <p className="text-[var(--french-gold)] text-sm tracking-wider uppercase">
                  {member.role}
                </p>
                
                <p className="text-[var(--french-gray)] font-light leading-relaxed">
                  {member.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center pt-4">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} 
                          className="px-4 py-1 text-xs border border-[var(--french-gold)] text-[var(--french-navy)] tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <div className="p-8 border border-[var(--french-gold)]/30 bg-[var(--french-cream)]/30">
            <p className="text-lg font-light text-[var(--french-navy)] leading-relaxed"
               style={{fontFamily: 'Cormorant Garamond, serif'}}>
              Belle Rêve는 K-뷰티의 우수성과 각국의 문화적 정체성을 결합하여<br/>
              진정한 글로벌 뷰티 브랜드를 만들어갑니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
