'use client';

import { useTranslations } from 'next-intl';

export default function Problem() {
  const t = useTranslations('home.problem');

  const issues = [
    {
      key: 'issue1',
      icon: '🌍',
    },
    {
      key: 'issue2',
      icon: '🎭',
    },
    {
      key: 'issue3',
      icon: '📦',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-[var(--french-navy)] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {t('title')}
          </h2>
          <p className="text-lg text-[var(--french-gray)]">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {issues.map((issue) => (
            <div 
              key={issue.key}
              className="text-center p-8 rounded-lg border border-[var(--french-gold)]/20 hover:border-[var(--french-gold)] transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-5xl mb-6">{issue.icon}</div>
              <h3 className="text-2xl font-light text-[var(--french-navy)] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {t(`${issue.key}.title`)}
              </h3>
              <p className="text-[var(--french-gray)] leading-relaxed">
                {t(`${issue.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
