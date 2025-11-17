'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function Editions() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'ko';
  const editions = [
    {
      country: '일본 에디션',
      title: 'Japanese Minimalism',
      description: '미니멀하고 클린한 뷰티의 정수',
      status: 'available',
      color: 'var(--french-gold)'
    },
    {
      country: '2nd Edition',
      title: 'Coming Soon',
      description: '곧 공개될 새로운 에디션',
      status: 'locked',
      color: 'var(--french-gray)'
    },
    {
      country: '3rd Edition',
      title: 'Coming Soon',
      description: '곧 공개될 새로운 에디션',
      status: 'locked',
      color: 'var(--french-gray)'
    }
  ];

  return (
    <section id="editions" className="py-24 bg-[var(--french-cream)]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-light text-center text-[var(--french-navy)] mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          Cultural Editions
        </h2>
        <p className="text-center text-[var(--french-gray)] mb-16 max-w-2xl mx-auto">
          각국의 문화적 아름다움을 담은 프리미엄 에디션
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {editions.map((edition, index) => (
            <div 
              key={index}
              className={`bg-white p-8 transition-all duration-300 hover:shadow-2xl relative overflow-hidden ${
                edition.status === 'available' ? 'border-2 border-[var(--french-gold)]' : ''
              }`}
            >
              {edition.status === 'locked' && (
                <div className="absolute inset-0 backdrop-blur-md bg-white/60 flex items-center justify-center z-10">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto mb-4 text-[var(--french-gold)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-[var(--french-navy)] font-medium" style={{fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em'}}>Coming Soon</p>
                  </div>
                </div>
              )}
              
              <div className="aspect-square bg-[var(--french-cream)] mb-6 flex items-center justify-center">
                <span className="text-6xl" style={{color: edition.color}}>✦</span>
              </div>
              
              <h3 className="text-2xl font-semibold text-[var(--french-navy)] mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                {edition.country}
              </h3>
              <p className="text-lg text-[var(--french-gold)] mb-4">{edition.title}</p>
              <p className="text-[var(--french-gray)] leading-relaxed">{edition.description}</p>
              
              {edition.status === 'available' && (
                <button 
                  onClick={() => router.push(`/${locale}/editions`)}
                  className="mt-6 w-full py-3 bg-[var(--french-navy)] text-white hover:bg-[var(--french-gold)] hover:text-[var(--french-navy)] transition-all duration-300"
                >
                  자세히 보기
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
