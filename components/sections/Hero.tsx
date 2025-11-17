'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('home.hero');
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--french-cream)] via-white to-[var(--french-cream)]">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 text-center z-10">
        {/* Logo and Brand */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-8xl md:text-[10rem] font-light tracking-[0.1em] text-[var(--french-navy)] mb-4" 
              style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Belle Rêve
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs tracking-[0.4em] text-[var(--french-gold)] uppercase mb-2">
            <span className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[var(--french-gold)] to-[var(--french-gold)]"></span>
            <span className="font-light">{t('subtitle')}</span>
            <span className="w-20 h-[1px] bg-gradient-to-l from-transparent via-[var(--french-gold)] to-[var(--french-gold)]"></span>
          </div>
        </div>
        
        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-[var(--french-gray)] max-w-4xl mx-auto mb-16 leading-relaxed font-light"
           style={{fontFamily: 'Cormorant Garamond, serif'}}>
          {t('title')}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <a href="/ko/editions" 
             className="group relative px-10 py-5 bg-[var(--french-navy)] text-white overflow-hidden tracking-[0.2em] uppercase text-sm font-light transition-all duration-500 hover:scale-105">
            <span className="relative z-10">{t('cta')}</span>
            <div className="absolute inset-0 bg-[var(--french-gold)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>
          <a href="/ko/community" 
             className="group px-10 py-5 border-2 border-[var(--french-navy)] text-[var(--french-navy)] tracking-[0.2em] uppercase text-sm font-light transition-all duration-300 hover:bg-[var(--french-navy)] hover:text-white hover:scale-105">
            {t('ctaSecondary')}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[var(--french-gold)] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[var(--french-gold)] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
