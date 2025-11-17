import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';

const locales = ['ko', 'ja', 'en-US', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const titles: Record<string, string> = {
    ko: 'Belle Rêve - 문화적 정체성을 담은 프리미엄 K-뷰티',
    ja: 'Belle Rêve - 文化的アイデンティティを込めたプレミアムK-ビューティー',
    'en-US': 'Belle Rêve - Premium K-Beauty with Cultural Identity',
    fr: 'Belle Rêve - K-Beauty Premium avec Identité Culturelle'
  };

  const descriptions: Record<string, string> = {
    ko: '각국의 문화적 정체성과 K-뷰티의 우수성을 결합한 Co-creation 기반 글로벌 로컬라이징 뷰티 브랜드',
    ja: '各国の文化的アイデンティティとK-ビューティーの優秀性を結合したCo-creation基盤グローバルローカライジングビューティーブランド',
    'en-US': 'Global localizing beauty brand combining cultural identity of each country with K-beauty excellence through co-creation',
    fr: 'Marque de beauté mondiale combinant l\'identité culturelle de chaque pays avec l\'excellence K-beauty par co-création'
  };

  return {
    title: titles[params.locale] || titles['ko'],
    description: descriptions[params.locale] || descriptions['ko'],
    keywords: 'K-Beauty, Co-creation, Cultural Identity, Premium Beauty, Japan Edition, France Edition, 뷰티, 화장품',
    openGraph: {
      title: titles[params.locale],
      description: descriptions[params.locale],
      type: 'website',
      locale: params.locale,
      siteName: 'Belle Rêve'
    }
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <Navigation />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
