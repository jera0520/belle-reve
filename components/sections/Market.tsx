'use client';

import { useTranslations } from 'next-intl';

export default function Market() {
  const t = useTranslations('home.market');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-light text-[var(--french-navy)] mb-12 text-center" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {t('title')}
          </h2>

          <div className="bg-gradient-to-br from-[var(--french-cream)] to-white p-12 rounded-2xl border-2 border-[var(--french-gold)]/30 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-3 bg-[var(--french-gold)] text-white rounded-full text-lg font-semibold mb-4">
                {t('firstLaunch')}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--french-gold)]/20 flex items-center justify-center text-[var(--french-gold)] font-bold">
                  ✓
                </div>
                <p className="text-[var(--french-gray)] text-lg leading-relaxed flex-1">
                  {t('reason1')}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--french-gold)]/20 flex items-center justify-center text-[var(--french-gold)] font-bold">
                  ✓
                </div>
                <p className="text-[var(--french-gray)] text-lg leading-relaxed flex-1">
                  {t('reason2')}
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--french-gold)]/20 flex items-center justify-center text-[var(--french-gold)] font-bold">
                  ✓
                </div>
                <p className="text-[var(--french-gray)] text-lg leading-relaxed flex-1">
                  {t('reason3')}
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[var(--french-gold)]/20 text-center">
              <p className="text-2xl text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <span className="text-[var(--french-gold)] font-semibold">MVP</span>: {t('mvp')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
