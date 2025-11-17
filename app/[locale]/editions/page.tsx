'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

export default function EditionsPage() {
  const t = useTranslations('products.japan');
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    '/images/japan-essence-1.jpg',
    '/images/japan-essence-2.jpg',
    '/images/japan-essence-3.jpg'
  ];

  const features = [
    { icon: '🌸', title: t('features.minimal.title'), desc: t('features.minimal.desc') },
    { icon: '🍃', title: t('features.clean.title'), desc: t('features.clean.desc') },
    { icon: '💧', title: t('features.hydration.title'), desc: t('features.hydration.desc') },
    { icon: '🌿', title: t('features.natural.title'), desc: t('features.natural.desc') }
  ];

  const ingredients = [
    { name: t('ingredients.rice.name'), benefit: t('ingredients.rice.benefit') },
    { name: t('ingredients.sakura.name'), benefit: t('ingredients.sakura.benefit') },
    { name: t('ingredients.greentea.name'), benefit: t('ingredients.greentea.benefit') },
    { name: t('ingredients.ceramide.name'), benefit: t('ingredients.ceramide.benefit') }
  ];

  return (
    <div className="min-h-screen bg-[var(--french-cream)] pt-24">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-[var(--french-gold)] text-sm tracking-[0.3em] uppercase mb-4 block">
              Japan Edition
            </span>
            <h1 className="text-6xl md:text-7xl font-light text-[var(--french-navy)] mb-6" 
                style={{fontFamily: 'Cormorant Garamond, serif'}}>
              {t('title')}
            </h1>
            <p className="text-xl text-[var(--french-gray)] max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {/* Product Image Gallery */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="bg-white p-8 mb-4">
                <div className="aspect-square relative bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-center">
                  <span className="text-9xl">🌸</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`bg-white p-4 aspect-square flex items-center justify-center ${
                      selectedImage === idx ? 'ring-2 ring-[var(--french-gold)]' : ''
                    }`}
                  >
                    <span className="text-4xl">🌸</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-light text-[var(--french-navy)] mb-4"
                    style={{fontFamily: 'Cormorant Garamond, serif'}}>
                  {t('description.title')}
                </h2>
                <p className="text-[var(--french-gray)] leading-relaxed mb-6">
                  {t('description.text')}
                </p>
              </div>

              <div className="border-t border-[var(--french-gold)]/20 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-[var(--french-gray)] mb-1">Price</p>
                    <p className="text-3xl font-light text-[var(--french-navy)]" 
                       style={{fontFamily: 'Cormorant Garamond, serif'}}>
                      ¥6,800
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--french-gray)] mb-1">Volume</p>
                    <p className="text-3xl font-light text-[var(--french-navy)]"
                       style={{fontFamily: 'Cormorant Garamond, serif'}}>
                      50ml
                    </p>
                  </div>
                </div>

                <button className="w-full py-4 bg-[var(--french-navy)] text-white hover:bg-[var(--french-gold)] hover:text-[var(--french-navy)] transition-all duration-300 text-lg">
                  {t('preorder')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-light text-center text-[var(--french-navy)] mb-12"
              style={{fontFamily: 'Cormorant Garamond, serif'}}>
            {t('features.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium text-[var(--french-navy)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--french-gray)] text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-4xl font-light text-center text-[var(--french-navy)] mb-12"
              style={{fontFamily: 'Cormorant Garamond, serif'}}>
            {t('ingredients.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ingredients.map((ingredient, idx) => (
              <div key={idx} className="bg-white p-8 border-l-4 border-[var(--french-gold)]">
                <h3 className="text-2xl font-light text-[var(--french-navy)] mb-3"
                    style={{fontFamily: 'Cormorant Garamond, serif'}}>
                  {ingredient.name}
                </h3>
                <p className="text-[var(--french-gray)] leading-relaxed">
                  {ingredient.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-light text-center text-[var(--french-navy)] mb-12"
              style={{fontFamily: 'Cormorant Garamond, serif'}}>
            {t('howToUse.title')}
          </h2>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--french-gold)] text-white rounded-full flex items-center justify-center text-xl font-light">
                  {step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-[var(--french-navy)] mb-2">
                    {t(`howToUse.step${step}.title`)}
                  </h3>
                  <p className="text-[var(--french-gray)] leading-relaxed">
                    {t(`howToUse.step${step}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
