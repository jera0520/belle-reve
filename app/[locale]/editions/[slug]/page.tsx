import { getEditionBySlug, calculateProgress } from '@/lib/db/editions';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function EditionDetailPage({
  params: { locale, slug }
}: {
  params: { locale: string; slug: string };
}) {
  const edition = await getEditionBySlug(slug);

  if (!edition) {
    notFound();
  }

  const progress = calculateProgress(edition);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/editions`} className="text-white/80 hover:text-white mb-4 inline-block">
            ← 목록
          </Link>
          
          <h1 className="text-5xl font-bold mb-4">{edition.nameLocal}</h1>
          <p className="text-xl opacity-90">{edition.baseProduct.nameKo}</p>

          <div className="mt-8 flex items-baseline gap-4">
            <div className="text-4xl font-bold">
              {edition.priceLocal?.toLocaleString()} {edition.currency}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">진행 상황</h2>
          <div className="mb-6">
            <div className="flex justify-between mb-3">
              <span>진행률</span>
              <span className="font-bold text-purple-600">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-500 h-4 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {edition.culturalStory && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">문화적 배경</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700">{edition.culturalStory}</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
