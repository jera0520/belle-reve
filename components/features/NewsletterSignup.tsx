'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function NewsletterSignup() {
  const t = useTranslations('Newsletter');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="bg-gradient-to-r from-[var(--french-navy)] to-[var(--french-navy)]/80 rounded-2xl p-12 text-center">
      <h2 className="text-4xl font-light text-white mb-4" style={{fontFamily: 'Cormorant Garamond, serif'}}>
        {t('title')}
      </h2>
      <p className="text-white/80 mb-8 max-w-2xl mx-auto">
        {t('description')}
      </p>
      
      {subscribed ? (
        <div className="py-4 text-[var(--french-gold)] text-lg">
          ✓ {t('thankYou')}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailPlaceholder')}
            className="flex-1 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-[var(--french-gold)]"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[var(--french-gold)] text-[var(--french-navy)] rounded-lg hover:bg-opacity-90 transition font-medium"
          >
            {t('subscribe')}
          </button>
        </form>
      )}
    </div>
  );
}
