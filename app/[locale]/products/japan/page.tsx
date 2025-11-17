'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function JapanEditionPage() {
  const t = useTranslations('products.japan');
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'details' | 'ingredients' | 'reviews'>('details');
  const [showPreorderModal, setShowPreorderModal] = useState(false);

  const images = [
    '/images/products/japan-essence-1.jpg',
    '/images/products/japan-essence-2.jpg',
    '/images/products/japan-essence-3.jpg',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[var(--french-cream)] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-[var(--french-gold)]">Home</a>
            <span>/</span>
            <a href="/editions" className="hover:text-[var(--french-gold)]">Editions</a>
            <span>/</span>
            <span className="text-[var(--french-navy)]">Japan Edition</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Product Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--french-cream)] to-white shadow-xl"
            >
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-pink-100 via-white to-amber-50 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-9xl">🌸</span>
                  </div>
                  <h3 className="text-2xl font-light text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {t('name')}
                  </h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-[var(--french-gold)] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Limited Edition
              </div>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx 
                      ? 'border-[var(--french-gold)] shadow-lg scale-105' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-amber-50">
                    <span className="text-3xl">{['🌸', '🌾', '🍵', '💧'][idx]}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="inline-block bg-[var(--french-cream)] text-[var(--french-navy)] px-4 py-1 rounded-full text-sm mb-4">
                Japan Exclusive
              </div>
              <h1 className="text-4xl md:text-5xl font-light mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--french-navy)' }}>
                {t('name')}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{t('subtitle')}</p>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-[var(--french-gold)]">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className="text-xl">{star}</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.9 / 234 reviews)</span>
              </div>
            </div>

            <div className="border-y border-gray-200 py-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-5xl font-light text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    ¥{t('price')}
                  </span>
                  <span className="text-gray-500 ml-3">/ {t('volume')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{t('description')}</p>
              
              {/* Key Benefits */}
              <div className="bg-gradient-to-br from-[var(--french-cream)] to-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-medium mb-4 text-[var(--french-navy)]">Key Benefits</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['minimalist', 'clean', 'quality', 'cultural'].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[var(--french-gold)]"></div>
                      <span className="text-sm text-gray-700">{t(`features.${benefit}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <button 
                onClick={() => setShowPreorderModal(true)}
                className="w-full bg-[var(--french-navy)] text-white py-4 rounded-xl hover:opacity-90 transition-all font-medium text-lg shadow-lg hover:shadow-xl"
              >
                {t('preorder')}
              </button>
              <button 
                onClick={() => {
                  alert('Added to wishlist!');
                }}
                className="w-full border-2 border-[var(--french-navy)] text-[var(--french-navy)] py-4 rounded-xl hover:bg-[var(--french-cream)] transition-all font-medium"
              >
                Add to Wishlist
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-around pt-6 border-t border-gray-200">
              {[
                { icon: '🌿', label: 'Cruelty Free' },
                { icon: '🌱', label: 'Vegan' },
                { icon: '✨', label: 'Clean Beauty' }
              ].map((badge, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <span className="text-xs text-gray-600">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-gray-200">
          <div className="flex gap-8 border-b border-gray-200">
            {(['details', 'ingredients', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-medium transition-all capitalize ${
                  activeTab === tab
                    ? 'text-[var(--french-navy)] border-b-2 border-[var(--french-navy)]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="py-12">
            {activeTab === 'details' && (
              <div className="max-w-4xl">
                <h3 className="text-2xl font-light mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {t('features.title')}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {['minimalist', 'clean', 'quality', 'cultural'].map((feature) => (
                    <div key={feature} className="flex items-start gap-4 bg-[var(--french-cream)] p-6 rounded-xl">
                      <span className="text-[var(--french-gold)] text-2xl">✦</span>
                      <span className="text-gray-700">{t(`features.${feature}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="max-w-4xl">
                <h3 className="text-2xl font-light mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {t('ingredients.title')}
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {['sakura', 'rice', 'green-tea'].map((ingredient) => (
                    <div key={ingredient} className="text-center bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-4xl">
                          {ingredient === 'sakura' ? '🌸' : ingredient === 'rice' ? '🌾' : '🍵'}
                        </span>
                      </div>
                      <h4 className="text-lg font-medium mb-2 text-[var(--french-navy)]">
                        {t(`ingredients.${ingredient}.name`)}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {t(`ingredients.${ingredient}.benefit`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="max-w-4xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Customer Reviews
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-light">4.9</span>
                    <div className="flex text-[var(--french-gold)]">★★★★★</div>
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    { name: 'Yuki M.', rating: 5, comment: 'Amazing product! My skin feels so hydrated and smooth. The texture is perfect for Japanese weather.', date: '2 days ago' },
                    { name: 'Sakura T.', rating: 5, comment: 'Love the minimalist approach. Finally a product that understands our skincare needs!', date: '1 week ago' },
                    { name: 'Hana K.', rating: 4, comment: 'Great quality and the cherry blossom scent is subtle and lovely.', date: '2 weeks ago' }
                  ].map((review, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[var(--french-gold)] to-amber-400 rounded-full flex items-center justify-center text-white font-medium">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{review.name}</p>
                            <div className="flex text-[var(--french-gold)] text-sm">
                              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Cultural Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[var(--french-navy)] to-[#1a365d] text-white rounded-2xl p-12 mt-20"
        >
          <h2 className="text-4xl font-light mb-6 text-center" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {t('story.title')}
          </h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto text-center opacity-90 mb-8">
            {t('story.content')}
          </p>
          <div className="text-center">
            <button className="px-8 py-3 bg-[var(--french-gold)] text-[var(--french-navy)] rounded-lg hover:bg-opacity-90 transition-all font-medium">
              {t('story.cta')}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Pre-order Modal */}
      {showPreorderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setShowPreorderModal(false)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[var(--french-gold)] to-amber-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✉️</span>
              </div>
              <h3 className="text-3xl font-light mb-4 text-[var(--french-navy)]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                사전 주문 안내
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Belle Rêve Japan Edition 사전 주문이 곧 시작됩니다.<br/>
                사전 주문 오픈 시 이메일로 알림을 받으시겠습니까?
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--french-gold)]"
                />
                <button
                  onClick={() => {
                    alert('알림 신청이 완료되었습니다!');
                    setShowPreorderModal(false);
                  }}
                  className="w-full bg-[var(--french-navy)] text-white py-3 rounded-lg hover:opacity-90 transition-all font-medium"
                >
                  알림 받기
                </button>
                <button
                  onClick={() => setShowPreorderModal(false)}
                  className="w-full text-gray-600 py-3 hover:text-[var(--french-navy)] transition-all"
                >
                  닫기
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
