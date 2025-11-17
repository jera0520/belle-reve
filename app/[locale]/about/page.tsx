'use client';

import { useTranslations } from 'next-intl';
import RevenueChart from '@/components/charts/RevenueChart';

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--french-cream)] to-white">
      {/* Hero Section */}
      <div className="relative py-32 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--french-navy)]/5 to-transparent"></div>
        <div className="max-w-5xl mx-auto relative">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.3em] text-[var(--french-gold)] uppercase">Our Story</span>
            <div className="h-[1px] bg-[var(--french-gold)] mt-2"></div>
          </div>
          <h1 className="text-7xl md:text-8xl font-light mb-6 text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl font-light">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-sm tracking-[0.2em] text-[var(--french-gold)] uppercase">Mission</span>
                <div className="h-[1px] bg-[var(--french-gold)] mt-2"></div>
              </div>
              <h2 className="text-5xl font-light mb-6 text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {t('about.mission.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.mission.description')}
              </p>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-[var(--french-navy)]/10 to-[var(--french-gold)]/10 rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-20 px-6 bg-[var(--french-cream)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 bg-gradient-to-br from-[var(--french-gold)]/10 to-[var(--french-navy)]/10 rounded-sm order-2 md:order-1"></div>
            <div className="order-1 md:order-2">
              <div className="inline-block mb-4">
                <span className="text-sm tracking-[0.2em] text-[var(--french-gold)] uppercase">Vision</span>
                <div className="h-[1px] bg-[var(--french-gold)] mt-2"></div>
              </div>
              <h2 className="text-5xl font-light mb-6 text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {t('about.vision.title')}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Growth Chart */}
      <div className="py-24 px-6 bg-[var(--french-cream)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm tracking-[0.2em] text-[var(--french-gold)] uppercase">Growth Projection</span>
              <div className="h-[1px] bg-[var(--french-gold)] mt-2 mx-auto"></div>
            </div>
            <h2 className="text-5xl font-light text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              5개년 매출 성장 계획
            </h2>
          </div>
          <RevenueChart />
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm tracking-[0.2em] text-[var(--french-gold)] uppercase">Core Values</span>
              <div className="h-[1px] bg-[var(--french-gold)] mt-2 mx-auto"></div>
            </div>
            <h2 className="text-5xl font-light text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {t('about.values.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 border border-[var(--french-navy)]/10 hover:border-[var(--french-gold)] transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 mb-6 rounded-full bg-[var(--french-gold)]/10 flex items-center justify-center group-hover:bg-[var(--french-gold)]/20 transition-colors">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {t('about.values.cocreation.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.values.cocreation.description')}
              </p>
            </div>

            <div className="group p-8 border border-[var(--french-navy)]/10 hover:border-[var(--french-gold)] transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 mb-6 rounded-full bg-[var(--french-gold)]/10 flex items-center justify-center group-hover:bg-[var(--french-gold)]/20 transition-colors">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {t('about.values.cultural.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.values.cultural.description')}
              </p>
            </div>

            <div className="group p-8 border border-[var(--french-navy)]/10 hover:border-[var(--french-gold)] transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 mb-6 rounded-full bg-[var(--french-gold)]/10 flex items-center justify-center group-hover:bg-[var(--french-gold)]/20 transition-colors">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-light mb-4 text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {t('about.values.quality.title')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.values.quality.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-gradient-to-br from-[var(--french-navy)] to-[var(--french-navy)]/90">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-light mb-6 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            {t('about.cta.description')}
          </p>
          <a
            href="/ko/community"
            className="inline-block px-12 py-4 bg-[var(--french-gold)] text-[var(--french-navy)] font-medium tracking-wider uppercase hover:bg-[var(--french-gold)]/90 transition-colors"
          >
            {t('about.cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
}
