'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface CustomizationOptions {
  scent: string;
  packaging: string;
  texture: string;
}

export default function ProductCustomizer() {
  const t = useTranslations('ProductCustomizer');
  const [selections, setSelections] = useState<CustomizationOptions>({
    scent: '',
    packaging: '',
    texture: ''
  });

  const options = {
    scent: ['cherry-blossom', 'green-tea', 'yuzu', 'hinoki'],
    packaging: ['minimalist', 'traditional', 'modern', 'luxury'],
    texture: ['light', 'rich', 'gel', 'cream']
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
      <h2 className="text-3xl font-light text-[var(--french-navy)] mb-8 text-center" style={{fontFamily: 'Cormorant Garamond, serif'}}>
        {t('title')}
      </h2>
      
      <div className="space-y-8">
        {/* Scent Selection */}
        <div>
          <h3 className="text-xl font-medium text-[var(--french-navy)] mb-4">{t('scent')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {options.scent.map((scent) => (
              <button
                key={scent}
                onClick={() => setSelections({...selections, scent})}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selections.scent === scent
                    ? 'border-[var(--french-gold)] bg-[var(--french-gold)]/10'
                    : 'border-gray-200 hover:border-[var(--french-gold)]/50'
                }`}
              >
                <div className="text-center">
                  <p className="text-sm font-medium">{t(`scents.${scent}`)}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Packaging Selection */}
        <div>
          <h3 className="text-xl font-medium text-[var(--french-navy)] mb-4">{t('packaging')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {options.packaging.map((pkg) => (
              <button
                key={pkg}
                onClick={() => setSelections({...selections, packaging: pkg})}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selections.packaging === pkg
                    ? 'border-[var(--french-gold)] bg-[var(--french-gold)]/10'
                    : 'border-gray-200 hover:border-[var(--french-gold)]/50'
                }`}
              >
                <div className="text-center">
                  <p className="text-sm font-medium">{t(`packagings.${pkg}`)}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Texture Selection */}
        <div>
          <h3 className="text-xl font-medium text-[var(--french-navy)] mb-4">{t('texture')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {options.texture.map((texture) => (
              <button
                key={texture}
                onClick={() => setSelections({...selections, texture})}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selections.texture === texture
                    ? 'border-[var(--french-gold)] bg-[var(--french-gold)]/10'
                    : 'border-gray-200 hover:border-[var(--french-gold)]/50'
                }`}
              >
                <div className="text-center">
                  <p className="text-sm font-medium">{t(`textures.${texture}`)}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Summary */}
        {(selections.scent || selections.packaging || selections.texture) && (
          <div className="mt-8 p-6 bg-[var(--french-cream)] rounded-lg">
            <h3 className="text-xl font-medium text-[var(--french-navy)] mb-4">{t('yourSelection')}</h3>
            <div className="space-y-2 text-sm">
              {selections.scent && <p>{t('scent')}: {t(`scents.${selections.scent}`)}</p>}
              {selections.packaging && <p>{t('packaging')}: {t(`packagings.${selections.packaging}`)}</p>}
              {selections.texture && <p>{t('texture')}: {t(`textures.${selections.texture}`)}</p>}
            </div>
            <button 
              onClick={() => {
                alert(t('customizationSaved'));
                // 실제로는 백엔드 API로 저장
                console.log('Saving customization:', selections);
              }}
              className="mt-4 w-full py-3 bg-[var(--french-navy)] text-white rounded-lg hover:bg-opacity-90 transition"
            >
              {t('saveCustomization')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
