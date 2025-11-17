'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('home');
  
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-[var(--french-cream)]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--french-gold)]">Philosophy</span>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--french-gold)] to-transparent mt-2"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-[var(--french-navy)] mb-6" 
              style={{fontFamily: 'Cormorant Garamond, serif'}}>
            {t('mission.title')}
          </h2>
          <p className="text-xl text-[var(--french-gray)] max-w-3xl mx-auto font-light leading-relaxed">
            {t('mission.subtitle')}
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group text-center p-8 bg-white hover:bg-[var(--french-navy)] transition-all duration-500 border border-[var(--french-cream)] hover:border-[var(--french-gold)]">
              <div className="w-24 h-24 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-[var(--french-cream)] group-hover:bg-[var(--french-gold)] transition-all duration-500 transform rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-[var(--french-gold)] group-hover:text-white transition-colors duration-500 relative z-10">
                    ◆
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-[var(--french-navy)] group-hover:text-white mb-4 transition-colors duration-500"
                  style={{fontFamily: 'Cormorant Garamond, serif'}}>
                {t('features.feature1.title')}
              </h3>
              <p className="text-[var(--french-gray)] group-hover:text-[var(--french-cream)] font-light leading-relaxed transition-colors duration-500">
                {t('features.feature1.description')}
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="group text-center p-8 bg-white hover:bg-[var(--french-navy)] transition-all duration-500 border border-[var(--french-cream)] hover:border-[var(--french-gold)]">
              <div className="w-24 h-24 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-[var(--french-cream)] group-hover:bg-[var(--french-gold)] transition-all duration-500 transform rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-[var(--french-gold)] group-hover:text-white transition-colors duration-500 relative z-10">
                    ◆
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-[var(--french-navy)] group-hover:text-white mb-4 transition-colors duration-500"
                  style={{fontFamily: 'Cormorant Garamond, serif'}}>
                {t('features.feature2.title')}
              </h3>
              <p className="text-[var(--french-gray)] group-hover:text-[var(--french-cream)] font-light leading-relaxed transition-colors duration-500">
                {t('features.feature2.description')}
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="group text-center p-8 bg-white hover:bg-[var(--french-navy)] transition-all duration-500 border border-[var(--french-cream)] hover:border-[var(--french-gold)]">
              <div className="w-24 h-24 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-[var(--french-cream)] group-hover:bg-[var(--french-gold)] transition-all duration-500 transform rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-[var(--french-gold)] group-hover:text-white transition-colors duration-500 relative z-10">
                    ◆
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-light text-[var(--french-navy)] group-hover:text-white mb-4 transition-colors duration-500"
                  style={{fontFamily: 'Cormorant Garamond, serif'}}>
                {t('features.feature3.title')}
              </h3>
              <p className="text-[var(--french-gray)] group-hover:text-[var(--french-cream)] font-light leading-relaxed transition-colors duration-500">
                {t('features.feature3.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <div className="p-12 border-t border-b border-[var(--french-gold)] relative">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--french-gold)]"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[var(--french-gold)]"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[var(--french-gold)]"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--french-gold)]"></div>
            
            <p className="text-2xl md:text-3xl font-light text-[var(--french-navy)] leading-relaxed italic"
               style={{fontFamily: 'Cormorant Garamond, serif'}}>
              "{t('mission.description')}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
