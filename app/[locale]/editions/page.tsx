import { getAllEditions } from '@/lib/db/editions';
import { calculateProgress } from '@/lib/db/editions';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function EditionsPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const editions = await getAllEditions();
  const t = await getTranslations('editions');

  return (
    <div className="min-h-screen bg-[var(--cream-white)] py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-light text-center mb-4 text-[var(--french-navy)] tracking-wide" style={{fontFamily: 'Cormorant Garamond, serif'}}>
          {t('title')}
        </h1>
        <p className="text-xl text-[var(--soft-gray)] text-center mb-16 font-light">
          {t('subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {editions.map((edition) => {
            const progress = calculateProgress(edition);
            const countryFlag = {
              JP: 'JP',
              FR: 'FR',
              US: 'US',
              SEA: 'SEA',
              KR: 'KR',
            }[edition.country] || 'GLOBAL';
            
            // 일본 에디션에만 금색 테두리
            const isJapan = edition.country === 'JP';
            const borderClass = isJapan ? 'border-2 border-[var(--french-gold)]' : '';
            
            // 프랑스와 미국은 미공개 처리
            const isComingSoon = edition.country === 'FR' || edition.country === 'US';

            return (
              <Link
                key={edition.id}
                href={`/${locale}/editions/${edition.slug}`}
                className={`bg-white shadow-md hover:shadow-xl transition-all overflow-hidden group ${borderClass} ${isComingSoon ? 'pointer-events-none' : ''} relative`}
              >
                {isComingSoon && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-light text-[var(--french-navy)] tracking-wider" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                        Coming Soon
                      </div>
                    </div>
                  </div>
                )}
                <div className={`bg-gradient-to-br from-[var(--french-navy)] to-[var(--soft-gray)] p-8 text-white relative overflow-hidden ${isComingSoon ? 'opacity-50' : ''}`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--french-gold)] opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <span className="text-6xl font-light" style={{fontFamily: 'Cormorant Garamond, serif'}}>{countryFlag}</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-xs tracking-wider font-light">
                      {edition.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-light tracking-wide" style={{fontFamily: 'Cormorant Garamond, serif'}}>{edition.nameLocal}</h3>
                </div>

                <div className={`p-6 ${isComingSoon ? 'opacity-50' : ''}`}>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2 font-light">
                      <span className="text-[var(--soft-gray)]">{t('progress')}</span>
                      <span className="font-normal text-[var(--french-gold)]">{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-100 h-1">
                      <div
                        className="bg-[var(--french-gold)] h-1 transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-2xl font-light text-[var(--french-navy)]" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                      {edition.priceLocal?.toLocaleString()} {edition.currency}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
