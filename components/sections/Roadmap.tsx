'use client';

import { useTranslations } from 'next-intl';

export default function Roadmap() {
  const t = useTranslations('roadmap');

  const phases = ['month1_2', 'month3_4', 'month5_6', 'month7_8', 'month9_10', 'month11_12'];

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

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--french-gold)]/30 md:left-1/2 md:-ml-px"></div>

            {phases.map((phase, index) => (
              <div key={phase} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                  {/* Timeline dot */}
                  <div className={`absolute top-6 w-4 h-4 rounded-full bg-[var(--french-gold)] border-4 border-white shadow-lg
                    ${index % 2 === 0 ? 'md:right-0 md:-mr-2 left-6' : 'md:left-0 md:-ml-2 left-6 md:left-auto'}`}>
                  </div>

                  <div className="ml-20 md:ml-0 bg-white p-8 rounded-xl shadow-lg border border-[var(--french-gold)]/20 hover:border-[var(--french-gold)] transition-all duration-300">
                    <div className="inline-block px-4 py-2 bg-[var(--french-gold)]/10 rounded-full text-[var(--french-gold)] font-semibold mb-4">
                      {t(`${phase}.period`)}
                    </div>
                    <h3 className="text-2xl font-light text-[var(--french-navy)] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {t(`${phase}.title`)}
                    </h3>
                    <ul className="space-y-2">
                      {(t.raw(`${phase}.tasks`) as string[]).map((task, i) => (
                        <li key={i} className="flex items-center gap-2 text-[var(--french-gray)]">
                          <span className="text-[var(--french-gold)]">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
