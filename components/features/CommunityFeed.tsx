'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
  edition: string;
}

export default function CommunityFeed() {
  const t = useTranslations('CommunityFeed');
  const [posts] = useState<Post[]>([
    {
      id: 1,
      author: '桜子',
      content: 'Just tried the Japan Edition essence! The cherry blossom scent is absolutely divine.',
      likes: 42,
      comments: 8,
      timestamp: '2 hours ago',
      edition: 'Japan'
    },
    {
      id: 2,
      author: 'Marie L.',
      content: 'Excited for the France edition! Can\'t wait to see what scents will be available.',
      likes: 28,
      comments: 5,
      timestamp: '5 hours ago',
      edition: 'France'
    },
    {
      id: 3,
      author: '田中美咲',
      content: 'The minimalist packaging is perfect for my vanity. Love the sustainable approach!',
      likes: 35,
      comments: 12,
      timestamp: '1 day ago',
      edition: 'Japan'
    }
  ]);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
        <textarea
          placeholder={t('shareYourThoughts')}
          className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--french-gold)] resize-none"
          rows={3}
        />
        <button className="mt-3 px-6 py-2 bg-[var(--french-navy)] text-white rounded-lg hover:bg-opacity-90 transition">
          {t('post')}
        </button>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[var(--french-gold)]/20 rounded-full flex items-center justify-center text-[var(--french-navy)] font-medium">
              {post.author[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-medium text-[var(--french-navy)]">{post.author}</h4>
                  <p className="text-sm text-gray-500">{post.timestamp}</p>
                </div>
                <span className="text-xs px-3 py-1 bg-[var(--french-gold)]/20 text-[var(--french-navy)] rounded-full">
                  {post.edition} Edition
                </span>
              </div>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <button className="flex items-center space-x-2 hover:text-[var(--french-gold)] transition">
                  <span>♥</span>
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-[var(--french-gold)] transition">
                  <span>💬</span>
                  <span>{post.comments}</span>
                </button>
                <button className="hover:text-[var(--french-gold)] transition">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
