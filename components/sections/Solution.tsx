'use client';

import { useTranslations } from 'next-intl';

export default function Solution() {
  const t = useTranslations('home.solution');

  const usps = [
    { key: 'usp1', gradient: 'from-rose-50 to-pink-50' },
    { key: 'usp2', gradient: 'from-blue-50 to-indigo-50' },
    { key: 'usp3', gradient: 'from-amber-50 to-orange-50' },
    { key: 'usp4', gradient: 'from-emerald-50 to-teal-50' },
  ];

  return (
    <section className="py-24 bg-[var(--french-cream)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-[var(--french-navy)] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {t('title')}
          </h2>
          <p className="text-lg text-[var(--french-gold)]">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {usps.map((usp, index) => (
            <div 
              key={usp.key}
              className={`p-10 rounded-2xl bg-gradient-to-br ${usp.gradient} border border-[var(--french-gold)]/10 hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--french-gold)] text-white flex items-center justify-center text-xl font-semibold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-[var(--french-navy)] mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {t(`${usp.key}.title`)}
                  </h3>
                  <p className="text-[var(--french-gray)] leading-relaxed">
                    {t(`${usp.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
