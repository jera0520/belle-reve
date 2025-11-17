'use client';

import { useTranslations } from 'next-intl';
import CommunityFeed from '@/components/features/CommunityFeed';
import ProductCustomizer from '@/components/features/ProductCustomizer';

export default function CommunityPage() {
  const t = useTranslations('community');

  return (
    <div className="min-h-screen bg-[var(--french-cream)] pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-4 text-[var(--french-navy)]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {t('subtitle')}
          </p>
          <button 
            onClick={() => window.open('https://discord.gg/bellereve', '_blank')}
            className="px-8 py-3 bg-[var(--french-navy)] text-white rounded-lg hover:bg-opacity-90 transition"
          >
            {t('joinCta')}
          </button>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3 text-[var(--french-gold)]">✨</div>
            <h3 className="font-medium text-[var(--french-navy)] mb-2">{t('benefits.benefit1')}</h3>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3 text-[var(--french-gold)]">🤝</div>
            <h3 className="font-medium text-[var(--french-navy)] mb-2">{t('benefits.benefit2')}</h3>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-3 text-[var(--french-gold)]">🎁</div>
            <h3 className="font-medium text-[var(--french-navy)] mb-2">{t('benefits.benefit3')}</h3>
          </div>
        </div>

        {/* Product Customizer */}
        <div className="mb-16">
          <ProductCustomizer />
        </div>

        {/* Community Feed */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-[var(--french-navy)] mb-8 text-center" style={{fontFamily: 'Cormorant Garamond, serif'}}>
            Community Feed
          </h2>
          <CommunityFeed />
        </div>
      </div>
    </div>
  );
}
