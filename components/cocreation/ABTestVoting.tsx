'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Variant {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  votes?: number;
  percentage?: number;
  isWinner?: boolean;
}

interface ABTestVotingProps {
  testId: string;
  title: string;
  description: string;
  variants: Variant[];
  hasVoted?: boolean;
  userVotedVariantId?: string;
  onVote?: (variantId: string) => void;
}

export default function ABTestVoting({
  testId,
  title,
  description,
  variants,
  hasVoted = false,
  userVotedVariantId,
  onVote,
}: ABTestVotingProps) {
  const [selectedVariant, setSelectedVariant] = useState<string | null>(
    userVotedVariantId || null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(hasVoted);

  const handleVote = async () => {
    if (!selectedVariant || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // 임시 userId (실제로는 NextAuth에서 가져와야 함)
      const userId = 'temp-user-' + Math.random().toString(36).substr(2, 9);

      const response = await fetch(`/api/ab-tests/${testId}/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          variantId: selectedVariant,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to vote');
      }

      const data = await response.json();
      
      setShowResults(true);
      if (onVote) onVote(selectedVariant);
      
      alert(data.message || '투표가 완료되었습니다!');
      
      // 페이지 새로고침으로 결과 업데이트
      window.location.reload();
    } catch (error: any) {
      alert(error.message || '투표에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-8">{description}</p>

      {/* 투표 또는 결과 표시 */}
      {showResults ? (
        // 결과 표시
        <div className="space-y-6">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold">
              투표 완료 ✓
            </span>
          </div>

          {variants.map((variant) => {
            const isUserVote = variant.id === userVotedVariantId;
            
            return (
              <div
                key={variant.id}
                className={`border-2 rounded-xl p-6 transition ${
                  variant.isWinner
                    ? 'border-yellow-400 bg-yellow-50'
                    : isUserVote
                    ? 'border-purple-400 bg-purple-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      {variant.name}
                      {variant.isWinner && <span className="text-yellow-500">👑</span>}
                      {isUserVote && <span className="text-purple-500">(내 선택)</span>}
                    </h3>
                    <p className="text-gray-600">{variant.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-3xl font-bold text-purple-600">
                      {variant.percentage || 0}%
                    </div>
                    <div className="text-sm text-gray-500">
                      {variant.votes || 0} 표
                    </div>
                  </div>
                </div>

                {/* 진행률 바 */}
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${
                      variant.isWinner
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-400'
                        : 'bg-gradient-to-r from-purple-400 to-pink-400'
                    }`}
                    style={{ width: `${variant.percentage || 0}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // 투표 폼
        <div className="space-y-4">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant.id)}
              className={`w-full text-left border-2 rounded-xl p-6 transition hover:shadow-lg ${
                selectedVariant === variant.id
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* 라디오 버튼 */}
                <div className="mt-1">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedVariant === variant.id
                        ? 'border-purple-500 bg-purple-500'
                        : 'border-gray-300'
                    }`}
                  >
                    {selectedVariant === variant.id && (
                      <div className="w-3 h-3 bg-white rounded-full" />
                    )}
                  </div>
                </div>

                {/* 내용 */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{variant.name}</h3>
                  <p className="text-gray-600">{variant.description}</p>
                </div>
              </div>
            </button>
          ))}

          {/* 투표 버튼 */}
          <button
            onClick={handleVote}
            disabled={!selectedVariant || isSubmitting}
            className={`w-full py-4 rounded-xl font-bold text-lg transition ${
              selectedVariant && !isSubmitting
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? '투표 중...' : '투표하기'}
          </button>
        </div>
      )}
    </div>
  );
}
