import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['ko', 'ja', 'en-US', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ko: '한국어',
  ja: '日本語',
  'en-US': 'English',
  fr: 'Français',
};

export const currencyByLocale: Record<Locale, string> = {
  ko: 'KRW',
  ja: 'JPY',
  'en-US': 'USD',
  fr: 'EUR',
};

export const countryByLocale: Record<Locale, string> = {
  ko: 'KR',
  ja: 'JP',
  'en-US': 'US',
  fr: 'FR',
};

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
