'use client';

import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Market from '@/components/sections/Market';
import Editions from '@/components/sections/Editions';
import CoCreation from '@/components/sections/CoCreation';
import Roadmap from '@/components/sections/Roadmap';
import Growth from '@/components/sections/Growth';
import Team from '@/components/sections/Team';
import NewsletterSignup from '@/components/features/NewsletterSignup';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--french-cream)]">
      <Hero />
      <Problem />
      <Solution />
      <Market />
      <Editions />
      <CoCreation />
      <Roadmap />
      <Growth />
      <Team />
      
      {/* Newsletter Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
