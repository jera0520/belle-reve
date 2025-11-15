import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-[var(--french-cream)]">
      {/* Hero Section - French Luxury Style */}
      <section className="relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border border-[var(--french-gold)] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 border border-[var(--french-rose)] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 py-32 relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Brand Logo */}
            <div className="mb-8">
              <h1 className="text-7xl md:text-9xl font-light tracking-wider text-[var(--french-navy)] mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                {t('common.brandName')}
              </h1>
              <div className="flex items-center justify-center gap-3 text-sm tracking-[0.3em] text-[var(--french-gold)] uppercase">
                <span className="w-16 h-[1px] bg-[var(--french-gold)]"></span>
                <span>{t('common.tagline')}</span>
                <span className="w-16 h-[1px] bg-[var(--french-gold)]"></span>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-[var(--french-navy)] opacity-80 mb-4 font-light" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              {t('home.hero.title')}
            </p>
            
            <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            
            <div className="flex gap-6 justify-center flex-wrap">
              <Link 
                href="/editions" 
                className="px-10 py-4 bg-[var(--french-navy)] text-white font-light tracking-wide hover:bg-opacity-90 transition-all duration-300 border border-[var(--french-navy)]"
              >
                {t('home.hero.cta')}
              </Link>
              <Link 
                href="/community" 
                className="px-10 py-4 border border-[var(--french-gold)] text-[var(--french-navy)] font-light tracking-wide hover:bg-[var(--french-champagne)] transition-all duration-300"
              >
                {t('home.hero.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Co-creation Process - French Elegance */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-[var(--french-navy)] mb-4 relative inline-block french-accent" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              {t('cocreation.title')}
            </h2>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
              {t('cocreation.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              { num: 1, title: t('cocreation.step1.title'), desc: t('cocreation.step1.description') },
              { num: 2, title: t('cocreation.step2.title'), desc: t('cocreation.step2.description') },
              { num: 3, title: t('cocreation.step3.title'), desc: t('cocreation.step3.description') },
              { num: 4, title: t('cocreation.step4.title'), desc: t('cocreation.step4.description') },
              { num: 5, title: t('cocreation.step5.title'), desc: t('cocreation.step5.description') }
            ].map((step) => (
              <div key={step.num} className="group text-center p-6 hover:bg-[var(--french-champagne)] transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto border-2 border-[var(--french-gold)] flex items-center justify-center text-[var(--french-gold)] text-3xl font-light transition-all duration-300 group-hover:bg-[var(--french-gold)] group-hover:text-white" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    {step.num}
                  </div>
                </div>
                <h3 className="text-xl font-medium text-[var(--french-navy)] mb-2" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Editions - Luxury Showcase */}
      <section className="py-24 bg-gradient-to-br from-[var(--french-champagne)] to-[var(--french-cream)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light text-[var(--french-navy)] mb-4 relative inline-block french-accent" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              {t('editions.title')}
            </h2>
            <p className="text-gray-600 mt-8 max-w-2xl mx-auto">
              {t('editions.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Japan Edition */}
            <div className="group bg-white p-10 hover:shadow-2xl transition-all duration-500 relative overflow-hidden border-2 border-[var(--french-gold)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--french-rose)] to-transparent opacity-20 rounded-full -mr-16 -mt-16"></div>
              
              <div className="absolute top-4 right-4">
                <span className="text-xs tracking-widest text-[var(--french-gold)] uppercase">{t('editions.inProgress')}</span>
              </div>
              
              <div className="text-7xl mb-6">JP</div>
              <h3 className="text-3xl font-light mb-3 text-[var(--french-navy)]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                {t('editions.japan.name')}
              </h3>
              <p className="text-[var(--french-gold)] text-sm tracking-widest mb-4 uppercase">
                {t('editions.japan.tagline')}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('editions.japan.description')}
              </p>
              
              <Link 
                href="/ja/editions/japan-all-in-one"
                className="inline-flex items-center text-[var(--french-navy)] font-light hover:text-[var(--french-gold)] transition-colors group-hover:translate-x-2 transform duration-300"
              >
                <span className="tracking-wide">{t('editions.viewDetails')}</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Second Project - Locked */}
            <div className="group bg-white p-10 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-sm bg-white/60 z-10 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-light text-[var(--french-navy)] tracking-widest" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    {t('editions.locked')}
                  </p>
                  <p className="text-sm text-[var(--french-gold)] tracking-widest mt-2 uppercase">
                    {t('editions.project')} 02
                  </p>
                </div>
              </div>
              
              <div className="filter blur-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--french-lavender)] to-transparent opacity-20 rounded-full -mr-16 -mt-16"></div>
                
                <div className="text-7xl mb-6"></div>
                <h3 className="text-3xl font-light mb-3 text-[var(--french-navy)]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                  ??? Edition
                </h3>
                <p className="text-[var(--french-gold)] text-sm tracking-widest mb-4 uppercase">
                  Coming Soon
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A mysterious new edition is being prepared...
                </p>
              </div>
            </div>

            {/* Third Project - Locked */}
            <div className="group bg-white p-10 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-sm bg-white/60 z-10 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-light text-[var(--french-navy)] tracking-widest" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    {t('editions.locked')}
                  </p>
                  <p className="text-sm text-[var(--french-gold)] tracking-widest mt-2 uppercase">
                    {t('editions.project')} 03
                  </p>
                </div>
              </div>
              
              <div className="filter blur-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-transparent opacity-20 rounded-full -mr-16 -mt-16"></div>
                
                <div className="text-7xl mb-6"></div>
                <h3 className="text-3xl font-light mb-3 text-[var(--french-navy)]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                  ??? Edition
                </h3>
                <p className="text-[var(--french-gold)] text-sm tracking-widest mb-4 uppercase">
                  Coming Soon
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Another exciting edition is on the horizon...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-24 bg-[var(--french-navy)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-light mb-8" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              {t('home.mission.title')}
            </h2>
            <p className="text-xl font-light leading-relaxed opacity-90" style={{fontFamily: 'Cormorant Garamond, serif'}}>
              {t('home.mission.subtitle')}
            </p>
            <p className="text-lg mt-4 opacity-80">
              {t('home.mission.description')}
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <h4 className="text-lg mb-2 tracking-wide">{t('home.features.feature3.title')}</h4>
                <p className="text-sm opacity-75">{t('home.features.feature3.description')}</p>
              </div>
              <div className="p-6">
                <h4 className="text-lg mb-2 tracking-wide">{t('home.features.feature1.title')}</h4>
                <p className="text-sm opacity-75">{t('home.features.feature1.description')}</p>
              </div>
              <div className="p-6">
                <h4 className="text-lg mb-2 tracking-wide">{t('home.features.feature2.title')}</h4>
                <p className="text-sm opacity-75">{t('home.features.feature2.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
